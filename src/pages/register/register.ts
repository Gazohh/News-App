import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, LoadingController} from 'ionic-angular';
import {HomePage} from '../home/home';
import {HttpClient, HttpHeaders, HttpRequest} from "@angular/common/http";
import {ToastController} from 'ionic-angular';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})


export class RegisterPage {

    // Variablen
    username: String;
    password: String;
    repassword: String;
    email: String;

    // Construtor hiermee roep je alles aan
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public alertCtrl: AlertController,
                private http: HttpClient,
                public loading: LoadingController,
                private toastCtrl: ToastController) {
    }

    // Push terug naar home button
    terug() {
        this.navCtrl.push(HomePage);
    }

    Register() {
        if (this.username == null || this.password == null || this.email == null || this.repassword == null) {
            let toast = this.toastCtrl.create({
                message: 'Niet alle velden zijn volledig ingevuld!',
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

                username: this.username,

                password: this.password,

                email: this.email

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

                            let toast = this.toastCtrl.create({
                                message: 'Registreren geslaagd, U kunt nu gaan inloggen!',
                                duration: 3000,
                                position: 'top'
                            });

                            toast.present();

                            this.navCtrl.push(HomePage);

                        } else {
                            
                            let toast = this.toastCtrl.create({
                                message: 'Er is iets mis gegaan tijdens het registeren probeert u het opnieuw.',
                                duration: 3000,
                                position: 'top'
                            });

                            toast.present();

                        }
                    });
            });
        }
    }
}
