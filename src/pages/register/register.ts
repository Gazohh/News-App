import {Component, ViewChild, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, LoadingController} from 'ionic-angular';
import {HomePage} from '../home/home';
import {HttpClient, HttpHeaders, HttpRequest} from "@angular/common/http";
import {ToastController} from 'ionic-angular';
import 'rxjs/add/operator/map';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { User } from '../user';



@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})


<<<<<<< HEAD
export class RegisterPage implements OnInit {

      userList: User[]=[];

  form: FormGroup;
=======
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
            let alert = this.alertCtrl.create(
                {
                    title: "",

                    message: "Niet alle velden zijn ingevuld!",

                    buttons: ['OK']
                }
            )
            alert.present();
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
>>>>>>> parent of c88b6e87... V2.2

  addUser(form){
    this.userList.push(this.form.value)
  }
  
  ngOnInit() {
      this.form = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-z ]+')/*, Validators.minLength(3)*/]),
        password: new FormControl('', [Validators.required, Validators.minLength(5)]),
        email: new FormControl('', [Validators.required, Validators.email])
      })
  }
}
