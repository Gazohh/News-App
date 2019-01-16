import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {HttpHeaders, HttpClient} from "@angular/common/http";
import {Platform} from 'ionic-angular';
import {FeedPage} from "../feed/feed";
import {Storage} from '@ionic/storage';
import { Network } from '@ionic-native/network';
import {SettingsProvider} from "../../providers/settings/settings";

@IonicPage()
@Component({
    selector: 'page-tutorial',
    templateUrl: 'tutorial.html',
})
export class TutorialPage {
    sourceData: any;
    NOS: boolean;
    TGF: boolean;
    NUNL: boolean;
    KNVB: boolean;
    TWKS: boolean;
    selectedTheme: string;
    setActiveTheme: string;
    theme = localStorage.getItem('themeColor');

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public platform: Platform,
                public storage: Storage,
                public toastCtrl: ToastController,
                public http: HttpClient,
                public network: Network,
                private settings: SettingsProvider) {
        this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
    }

    slides = [
        {
            title: "Welkom bij NewsAge",
            description: "Welkom! bij de tutorial vertellen wij kort even hoe u onze app gebruikt.",
            image: "../../assets/imgs/NewsAgeLogo.png",

        },
        {
            title: "Hoe gebruik je NewsAge?",
            icon: 'star',
            description: "Het gebruik van NewsAge is eigenlijk als u \"the hang of it\" krijgt best simpel, U heeft een " +
                "startpagina waar al het algemene nieuws op komt, " +
                "daarnaast kunt u in de bronnen aanvinken op welke nieuwspagina u wilt subscriben, dit in 1 knop verder " +
                "kunt u ook uw profiel aanpassen en kunt u artikelen liken, sharen en als u wilt een reactie plaatsen " +
                "onder het artikel."

        },
        {
            title: "Vragen?",
            description: "Als u verder nog vragen hebt over de app, kunt u ze mailen naar ons via: newsage2018@gmail.com " +
                "de FAQ worden dan in slides gedaan en zo word de tutorial bijgewerkt.",
            image: "../../assets/imgs/NewsAgeLogo.png",
        }
    ];

    ionViewWillEnter()
    {
        this.getSource();
    }

    tutorialDone() {
        localStorage.setItem("TutorialShown", "true");
        this.navCtrl.setRoot(FeedPage);
    }

    getSource()
    {
        if(this.network.type != "none")
        {
            const headers = new HttpHeaders();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            const options = {headers: headers};
            const data = {
                userId: localStorage.getItem("userId"),
            };
            this.http.post('http://gazoh.net/getsources.php', data, options)
                .subscribe(data => {
                    this.sourceData = data;
                    this.NOS = this.sourceData[0].NOS;
                    this.TGF = this.sourceData[0].TGF;
                    this.NUNL = this.sourceData[0].NUNL;
                    this.KNVB = this.sourceData[0].KNVB;
                    this.TWKS = this.sourceData[0].TWKS;
                    this.storage.set('NOS', this.sourceData[0].NOS);
                    this.storage.set('TGF', this.sourceData[0].TGF);
                    this.storage.set('NUNL', this.sourceData[0].NUNL);
                    this.storage.set('KNVB', this.sourceData[0].KNVB);
                    this.storage.set('TWKS', this.sourceData[0].TWKS);
                    console.log(this.sourceData);
                    console.log("NOS: " + this.NOS);
                    console.log("Telegraaf : " +this.TGF);
                    console.log("NU.NL: " + this.NUNL);
                    console.log("KNVB: " + this.KNVB);
                    console.log("Tweakers: " + this.TWKS);
                });
        }
        else if(this.network.type == "none")
        {
            // Get NOS Status from Storage
            this.storage.get('NOS').then((NOS) =>
            {
                this.NOS = NOS;
            })
            // Get Telegraaf Status from Storage
            this.storage.get('TGF').then((TGF) =>
            {
                this.TGF = TGF;
            })
            // Get NU.NL Status from Storage
            this.storage.get('NUNL').then((NUNL) =>
            {
                this.NUNL = NUNL;
            })
            // Get KNVB Status from Storage
            this.storage.get('KNVB').then((KNVB) =>
            {
                this.KNVB = KNVB;
            })
            // Get Tweakers Status from Storage
            this.storage.get('TWKS').then((TWKS) =>
            {
                this.TWKS = TWKS;
            })
        }
    }

    subscribeSource(source)
    {
        if(this.network.type != "none")
        {
            const headers = new HttpHeaders();

            headers.append("Accept", 'application/json');

            headers.append('Content-Type', 'application/json');

            const options = {headers: headers};

            const data = {
                sourceName: source,
                userId: localStorage.getItem("userId"),
            };

            this.http.post('http://gazoh.net/subscribesource.php', data, options)
                .subscribe(data => {
                    if(data == "subscribed")
                    {
                        this.getSource();
                        let toast = this.toastCtrl.create({
                            message: "" + source + " is toegevoegd.",
                            duration: 3500,
                            position: "bottom"
                        });
                        toast.present();
                    }
                    else if (data == "error")
                    {
                        let toast = this.toastCtrl.create({
                            message: "Er is iets niet goed gegaan, probeer het later opnieuw.",
                            duration: 3500,
                            position: "bottom"
                        });
                        toast.present();
                    }
                });
        }
        else if (this.network.type == "none")
        {
            let toast = this.toastCtrl.create({
                message: "Er is geen internet verbinding, probeer het later opnieuw.",
                duration: 5000,
                position: "bottom"
            });
            toast.present();
        }
    }

    unsubscribeSource(source)
    {
        const headers = new HttpHeaders();

        headers.append("Accept", 'application/json');

        headers.append('Content-Type', 'application/json');

        const options = {headers: headers};

        const data = {
            sourceName: source,
            userId: localStorage.getItem("userId"),
        };

        this.http.post('http://gazoh.net/unsubscribesource.php', data, options)
            .subscribe(data => {
                if(data == "unsubscribed")
                {
                    this.getSource();
                    let toast = this.toastCtrl.create({
                        message: "" + source + " is verwijderd.",
                        duration: 3500,
                        position: "bottom"
                    });
                    toast.present();
                }
                else if (data == "error")
                {
                    let toast = this.toastCtrl.create({
                        message: "Er is iets niet goed gegaan, probeer het later opnieuw.",
                        duration: 3500,
                        position: "bottom"
                    });
                    toast.present();
                }
            });
    }

}
