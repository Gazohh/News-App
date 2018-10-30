import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { MenuController } from "ionic-angular";
import { HttpClient } from "@angular/common/http";
import { Network } from "@ionic-native/network";
import { ToastController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { LoadingController } from 'ionic-angular';
import { Searchbar } from 'ionic-angular';


/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
    @ViewChild('searchbar') searchbar: Searchbar;


    rssDataArray: any = [];
    public items: any = 0;
    public data: any;
    public artikelen: any;
    public key: string = "items";
    public isSearchbaropened = false;
    public datepicker: any;
    public vandaag: any;
    public gisteren: any;
    public driedagengeleden: any;



    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public menuCtrl: MenuController,
        public http: HttpClient,
        public network: Network,
        private toastCtrl: ToastController,
        public loadingCtrl: LoadingController,
        public platform: Platform) {
        if (this.network.type != "none") {
            //this.getData();
            this.datepicker = "vandaag";
            if (this.datepicker == "vandaag") {
                this.load();
            }
            else if (this.datepicker == "gisteren") {
                this.loadYesterday();
            }
            else if (this.datepicker == "driedagengeleden") {
                this.load3DaysAgo();
            }
        }
        else {
            this.loadData();
            let toast = toastCtrl.create({
                message: "Geen internet verbinding, opgeslagen artikelen worden ingeladen.",
                duration: 2500,
                position: "top",
                showCloseButton: true,
                closeButtonText: "OK"
            });
            toast.present();
        }
        
        let toastinlog = toastCtrl.create({
            message: "Geen sessie gevonden, log opnieuw in.",
            duration: 2500,
            position: "top",
            showCloseButton: true,
            closeButtonText: "OK"
        });
        if (!localStorage.getItem("email")) {
            this.navCtrl.setRoot(HomePage);
            toastinlog.present();
        }
        /* //this.GetNews()
         this.presentLoadingCustom();*/
    }

    presentLoadingCustom() {

        let loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: `
     <div class="custom-spinner-container"><img src="http://gazoh.net/images/spinner.svg"><br> <p>Laden...</p>
     </div>`,
            duration: 1200
        });

        loading.present();
    }

    ionViewDidLoad() {
        this.menuCtrl.enable(true, 'myMenu');
    }

    loadData() {
        localStorage.getItem(this.key);
        if (this.key != null && this.key != undefined) {
            this.items = JSON.parse(this.key);
        }
    }

    htmlToPlaintext(text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    }

    // Redirect to NieuwsPage
    viewEntry(param: any): void {
        this.navCtrl.push('NieuwsPage', param);
    }

    search(event) {
        let serVal = event.target.value;
        if (serVal && serVal.trim() != '') {
            this.items = this.items.filter((item) => {
                return (item.title.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
            })
        }
    }

    resetChanges() {
        this.items = this.artikelen;
    }

    load() {
        this.datepicker = "vandaag";
        this.http
            .get('http://gazoh.net/getdata.php')
            .subscribe((data: any) => {
                    this.items = data;
                    this.artikelen = data;
                },
                (error: any) => {
                    console.dir(error);
                });
        this.presentLoadingCustom();
    }

    loadYesterday() {
        this.datepicker = "gisteren";
        this.http
            .get('http://gazoh.net/getyesterday.php')
            .subscribe((data: any) => {
                    this.items = data;
                    this.artikelen = data;
                },
                (error: any) => {
                    console.dir(error);
                });
        this.presentLoadingCustom();
    }

    load3DaysAgo() {
        this.datepicker = "driedagengeleden";
        this.http
            .get('http://gazoh.net/get3daysago.php')
            .subscribe((data: any) => {
                    this.items = data;
                    this.artikelen = data;
                },
                (error: any) => {
                    console.dir(error);
                });
        this.presentLoadingCustom();
    }


}
