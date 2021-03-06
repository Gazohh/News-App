import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides, ToastController} from 'ionic-angular';
import {HttpHeaders, HttpClient} from "@angular/common/http";
import {Storage} from '@ionic/storage';
import {Network} from '@ionic-native/network';


/**
 * Generated class for the SourcesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-sources',
    templateUrl: 'sources.html',
})
export class SourcesPage {

    @ViewChild('slider') slider: Slides;
    page = "0";
    public currentTheme: string;
    sourceData: any;
    NOS: boolean;
    VLKK: boolean;
    TGF: boolean;
    NUNL: boolean;
    KNVB: boolean;
    TWKS: boolean;
    NUNLFIN: boolean;
    LBL: boolean;
    BTYL: boolean;
    VLKKE: boolean;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public http: HttpClient,
                public toastCtrl: ToastController,
                private storage: Storage,
                private network: Network) {

        // Theme
        if (localStorage.getItem("themeColor")) {
            this.currentTheme = localStorage.getItem("themeColor")
            console.log(this.currentTheme);
        }
    }

    selectedTab(ind) {
        this.slider.slideTo(ind);
    }

    ionViewWillEnter() {
        this.getSource();
    }

    getSource() {
        if (this.network.type != "none") {
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
                    this.VLKK = this.sourceData[0].VLKK;
                    this.VLKKE = this.sourceData[0].VLKKE;
                    this.TGF = this.sourceData[0].TGF;
                    this.NUNL = this.sourceData[0].NUNL;
                    this.KNVB = this.sourceData[0].KNVB;
                    this.TWKS = this.sourceData[0].TWKS;
                    this.NUNLFIN = this.sourceData[0].NUNLFIN;
                    this.LBL = this.sourceData[0].LBL;
                    this.BTYL = this.sourceData[0].BTYL;
                    this.storage.set('NOS', this.sourceData[0].NOS);
                    this.storage.set('VLKK', this.sourceData[0].VLKK);
                    this.storage.set('VLKKE', this.sourceData[0].VLKKE);
                    this.storage.set('TGF', this.sourceData[0].TGF);
                    this.storage.set('NUNL', this.sourceData[0].NUNL);
                    this.storage.set('KNVB', this.sourceData[0].KNVB);
                    this.storage.set('TWKS', this.sourceData[0].TWKS);
                    this.storage.set('NUNLFIN', this.sourceData[0].NUNLFIN);
                    this.storage.set('LBL', this.sourceData[0].LBL);
                    this.storage.set('BTYL', this.sourceData[0].BTYL);
                    console.log(this.sourceData);
                    console.log("NOS: " + this.NOS);
                    console.log("Volkskrant: " + this.VLKK);
                    console.log("Telegraaf : " + this.TGF);
                    console.log("NU.NL: " + this.NUNL);
                    console.log("KNVB: " + this.KNVB);
                    console.log("Tweakers: " + this.TWKS);
                    console.log("NU.nl Financieel: " + this.NUNLFIN);
                    console.log("Volkskrant Economie: " + this.VLKKE);
                    console.log("Libelle: " + this.LBL);
                    console.log("Beautylab: " + this.BTYL);
                });
        }
        else if (this.network.type == "none") {
            // Get NOS Status from Storage
            this.storage.get('NOS').then((NOS) => {
                this.NOS = NOS;
            })
            // Get Volkskrant Status from Storage
            this.storage.get('VLKK').then((VLKK) => {
                this.VLKK = VLKK;
            })
            // Get Telegraaf Status from Storage
            this.storage.get('TGF').then((TGF) => {
                this.TGF = TGF;
            })
            // Get NU.NL Status from Storage
            this.storage.get('NUNL').then((NUNL) => {
                this.NUNL = NUNL;
            })
            // Get KNVB Status from Storage
            this.storage.get('KNVB').then((KNVB) => {
                this.KNVB = KNVB;
            })
            // Get Tweakers Status from Storage
            this.storage.get('TWKS').then((TWKS) => {
                this.TWKS = TWKS;
            })
            // Get NU.nl Financieel Status from Storage
            this.storage.get('NUNLFIN').then((NUNLFIN) => {
                this.NUNLFIN = NUNLFIN;
            })
            // Get Libelle Status from Storage
            this.storage.get('LBL').then((LBL) => {
                this.LBL = LBL;
            })
            // Get Beautylab Status from Storage
            this.storage.get('BTYL').then((BTYL) => {
                this.BTYL = BTYL;
            })
            // Get Volkskrant Economie Status from Storage
            this.storage.get('VLKKE').then((VLKKE) => {
                this.VLKKE = VLKKE;
            })
        }
    }

    subscribeSource(source) {
        if (this.network.type != "none") {
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
                    if (data == "subscribed") {
                        this.getSource();
                        let toast = this.toastCtrl.create({
                            message: "" + source + " is toegevoegd.",
                            duration: 3500,
                            position: "bottom"
                        });
                        toast.present();
                    }
                    else if (data == "error") {
                        let toast = this.toastCtrl.create({
                            message: "Er is iets niet goed gegaan, probeer het later opnieuw.",
                            duration: 3500,
                            position: "bottom"
                        });
                        toast.present();
                    }
                });
        }
        else if (this.network.type == "none") {
            let toast = this.toastCtrl.create({
                message: "Er is geen internet verbinding, probeer het later opnieuw.",
                duration: 5000,
                position: "bottom"
            });
            toast.present();
        }
    }

    unsubscribeSource(source) {
        if (this.network.type != "none") {
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
                    if (data == "unsubscribed") {
                        this.getSource();
                        let toast = this.toastCtrl.create({
                            message: "" + source + " is verwijderd.",
                            duration: 3500,
                            position: "bottom"
                        });
                        toast.present();
                    }
                    else if (data == "error") {
                        let toast = this.toastCtrl.create({
                            message: "Er is iets niet goed gegaan, probeer het later opnieuw.",
                            duration: 3500,
                            position: "bottom"
                        });
                        toast.present();
                    }
                });
        }
        else if (this.network.type == "none") {
            let toast = this.toastCtrl.create({
                message: "Er is geen internet verbinding, probeer het later opnieuw.",
                duration: 5000,
                position: "bottom"
            });
            toast.present();
        }
    }

    moveButton($event) {
        this.page = $event._snapIndex.toString();
    }


}
