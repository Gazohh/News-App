import {Component, ViewChild} from '@angular/core';
import {Events, IonicPage, NavController} from 'ionic-angular';
import {SettingsProvider} from "../../providers/settings/settings";
import {Nav, Platform} from 'ionic-angular';
import {HomePage} from '../home/home';
import {AdminPage} from "../admin/admin";
import {AlertController} from 'ionic-angular';
import {ProfielPage} from "../profiel/profiel";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {timer} from "rxjs/observable/timer";
import {PrivacybeleidPage} from "../privacybeleid/privacybeleid";
import {Observable} from "rxjs";
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html',
    providers: [Nav]
})
export class SettingsPage {
    @ViewChild(Nav) nav: Nav;

    selectedTheme: string;
    setActiveTheme: string;
    toggleStatus: boolean;
    theme = localStorage.getItem('themeColor');
    timer = false;
    dataUser: any;
    username: string;
    profilepicture: any;
    rol: any;
    emailVerified: string;
    userEmail: string;
    token: string;
    public TIMER_IN_MS = 22000;
    public disabled;
    timerVar;
    timerVal = 20;

    constructor(private settings: SettingsProvider,
                private platform: Platform,
                public navCtrl: NavController,
                private alertCtrl: AlertController,
                private http: HttpClient,
                public events: Events,
                private toastCtrl: ToastController) {
        this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
        if (this.theme == "light-theme") {
            this.toggleStatus = false;
            setTimeout(() => this.timer = false, 3500);
        } else if (this.theme == "dark-theme") {
            this.toggleStatus = true;
            setTimeout(() => this.timer = false, 3500);
        }

        const headers = new HttpHeaders();

        headers.append("Accept", 'application/json');

        headers.append('Content-Type', 'application/json');

        const options = {headers: headers};

        const data = {

            email: localStorage.getItem('userEmail'),

        };
        this.http.post('http://gazoh.net/getgebruiker.php', data, options)
            .subscribe(data => {
                this.dataUser = data;
                this.username = this.dataUser.username;
                this.userEmail = this.dataUser.email;
                this.rol = this.dataUser.rol;
                this.token = this.dataUser.token;
                this.profilepicture = this.dataUser.profilepicture;
                this.emailVerified = this.dataUser.emailVerified;
                this.events.publish("username", this.username);
                this.events.publish("profilepicture", this.profilepicture);
            });
    }

    toggleAppTheme() {
        if (this.selectedTheme == 'light-theme') {
            this.settings.setActiveTheme('dark-theme');
            localStorage.setItem("themeColor", this.selectedTheme);
        } else if (this.selectedTheme == 'dark-theme') {
            this.settings.setActiveTheme('light-theme');
            localStorage.setItem("themeColor", this.selectedTheme);
        }
    }

    openAdmin() {
        this.navCtrl.push(AdminPage);
    }

    uitloggen() {
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userEmailVerified');
        localStorage.removeItem('userRole');
        localStorage.removeItem('userCreationDate');
        localStorage.removeItem('sessionToken');
        localStorage.removeItem('profilePicture');
        this.navCtrl.setRoot(HomePage);
    }

    resendMail() {
        this.disabled = true;
        setTimeout(()=> {
            this.disabled = false;
        }, this.TIMER_IN_MS);
        const headers = new HttpHeaders();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        const options = {headers: headers};
        const data = {
            email: this.userEmail,
            username: this.username,
            token: this.token
        };
        this.http.post('http://gazoh.net/resendmail.php', data, options)
            .subscribe(data => {
                if (data == "email sent") {
                    this.startTimer();
                    let toast = this.toastCtrl.create({
                        message: 'De verificatiemail is opnieuw verstuurd naar: ' + this.userEmail,
                        duration: 3000,
                        position: 'bottom'
                    });

                    toast.present();
            }


            });
    }
public test;
    startTimer() {
        this.timerVar = Observable.interval(1000).subscribe(x => {
            this.timerVal = x;

            if (x == 20) {
                this.timerVar.unsubscribe()
            }
        })
    }

    rapporteer() {
        const prompt = this.alertCtrl.create({
            title: 'Raporteer een probleem',
            inputs: [
                {
                    name: 'onderwerp',
                    placeholder: 'Onderwerp'
                },
                {
                    name: 'bericht',
                    placeholder: 'Omschrijf het probleem'
                }
            ],
            buttons: [
                {
                    text: 'Annuleer',
                    handler: data => {
                    }
                },
                {
                    text: 'Verstuur',
                    handler: data => {
                        this.rapporteerProbleem(data);
                    }
                }
            ]
        });
        prompt.present();
    }

    goProfiel() {
        this.navCtrl.push(ProfielPage);
    }

    privacyBeleid() {
        this.navCtrl.push(PrivacybeleidPage);
    }

    rapporteerProbleem(data) {
        const headers = new HttpHeaders();

        headers.append("Accept", 'application/json');

        headers.append('Content-Type', 'application/json');

        const options = {headers: headers};

        this.http.post('http://gazoh.net/rapporteer.php', data, options).map(res => res)

            .subscribe(res => {
                if (res == 'succes') {
                    let alert = this.alertCtrl.create({

                        title: "Geslaagd",

                        subTitle: "Uw probleem is gerapporteerd!",

                        buttons: ['OK']

                    });

                    alert.present();
                }
            });

        console.log('Probleem gerapporteerd ' + data);
    }


}
