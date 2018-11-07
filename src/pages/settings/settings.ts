import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {SettingsProvider} from "../../providers/settings/settings";
import {Nav, Platform} from 'ionic-angular';
import {HomePage} from '../home/home';
import {AdminPage} from "../admin/admin";
import {AlertController} from 'ionic-angular';
import {ProfielPage} from "../profiel/profiel";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AboutPage} from "../about/about";
import { timer } from "rxjs/observable/timer";

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
    batu = false;


    constructor(private settings: SettingsProvider,
                private platform: Platform,
                public navCtrl: NavController,
                private alertCtrl: AlertController,
                private http: HttpClient) {
        this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
        if (this.theme == "light-theme") {
            this.toggleStatus = false;
            setTimeout(() => this.batu = false, 3500);
        }
        else if (this.theme == "dark-theme") {
            this.toggleStatus = true;
            setTimeout(() => this.batu = false, 3500);
        }
    }

    toggleAppTheme() {
        if (this.selectedTheme == 'light-theme') {
            this.settings.setActiveTheme('dark-theme');
            localStorage.setItem("themeColor", this.selectedTheme);
        }
        else if (this.selectedTheme == 'dark-theme') {
            this.settings.setActiveTheme('light-theme');
            localStorage.setItem("themeColor", this.selectedTheme);
        }
    }

    openAdmin() {
        this.navCtrl.push(AdminPage);
    }

    uitloggen() {
        localStorage.clear();
        this.navCtrl.setRoot(HomePage);
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

    bewerkProfiel() {
        this.navCtrl.push(ProfielPage);
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

    overOns()
    {
      this.navCtrl.push(AboutPage);
    }

}
