import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, LoadingController} from 'ionic-angular';
import {HomePage} from '../home/home';
import {HttpClient, HttpHeaders, HttpRequest} from "@angular/common/http";
import {ToastController} from 'ionic-angular';
import 'rxjs/add/operator/map';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})


export class RegisterPage {

    userList: User[]=[];

    form: FormGroup;

    addUser(form){
        this.userList.push(this.form.value)
    }


    // Construtor hiermee roep je alles aan
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public alertCtrl: AlertController,
                private http: HttpClient,
                public loading: LoadingController,
                private toastCtrl: ToastController) {
    }

    ngOnInit() {
        this.form = new FormGroup({
            username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-z ]+')/*, Validators.minLength(3)*/]),
            password: new FormControl('', [Validators.required, Validators.minLength(5)]),
            email: new FormControl('', [Validators.required, Validators.email])
        })
    }

    // Push terug naar home button
    terug() {
        this.navCtrl.push(HomePage);
    }

    Register() {
        if (userInfo.username == null || userInfo.password == null || userInfo.email == null) {
            let toast = this.toastCtrl.create({
                message: 'Niet alle velden zijn ingevuld!',
                duration: 3000,
                position: 'top'
            });

            toast.present();
        }
        else {
            var headers = new HttpHeaders();

            headers.append("Accept", 'application/json');

            headers.append('Content-Type', 'application/json');

            var options = {headers: headers};

            var data = {

                username: userInfo.username,

                password: userInfo.password,

                email: userInfo.email

            };

            let loader = this.loading.create({

                content: 'Aan het registreren..',

            });

            loader.present().then(() => {

                this.http.post('http://gazoh.net/register.php', data, options)

                    .map(res => res)

                    .subscribe(res => {

                        loader.dismiss();

                        if (res == "Registration successfull") {

                            let alert = this.alertCtrl.create({

                                title: "Registreren geslaagd",

                                subTitle: "U kunt nu gaan inloggen",

                                buttons: ['OK']

                            });

                            alert.present();

                            this.navCtrl.push(HomePage);

                        } else {

                            let alert = this.alertCtrl.create({

                                title: "Mislukt",

                                subTitle: "Er is iets mis gegaan tijdens het registeren probeert u het opnieuw.",

                                buttons: ['OK']

                            });

                            alert.present();

                        }
                    });
            });
        }
    }
}
