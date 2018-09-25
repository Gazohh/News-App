import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RssProvider} from "../../providers/rss/rss";
import {MenuController} from "ionic-angular";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Network} from "@ionic-native/network";
import {ToastController} from 'ionic-angular';
import {HomePage} from "../home/home";
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

    rssDataArray: any = [];
    public items: any;
    public data: any;
    public key: string = "items";

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public rssProvider: RssProvider,
        public menuCtrl: MenuController,
        public http: HttpClient,
        public network: Network,
        toastCtrl: ToastController) {
        if(this.network.type!= "none")
        {
            this.getData();
        }
        else
        {
            this.loadData();
            let toast = toastCtrl.create({
                message : "Geen internet verbinding, opgeslagen artikelen worden ingeladen.",
                duration: 2500,
                position: "top",
                showCloseButton: true,
                closeButtonText: "OK"
            });
            toast.present();
        }
        let toastinlog = toastCtrl.create({
            message : "Geen sessie gevonden, log opnieuw in.",
            duration: 2500,
            position: "top",
            showCloseButton: true,
            closeButtonText: "OK"
        });
        if(!localStorage.getItem("username"))
        {
            this.navCtrl.setRoot(HomePage);
            toastinlog.present();
        }
        //this.GetNews()

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad FeedPage');
        this.Get_RSS_Data();
        this.menuCtrl.enable(true, 'myMenu');
    }


    Get_RSS_Data() {
        this.rssProvider.getRSS().subscribe(data => {
            this.rssDataArray = data;
        });
    }

    GetNews() {
        this.http.get("http://gazoh.net/algemeen.json").map(result => this.items = result)
        localStorage.setItem("News", JSON.stringify(this.items));
    }

    getData() {
        let url = "http://api.jsonbin.io/b/5ba912599353c37b74340854";
        var headers = new HttpHeaders();
        headers.append('Access-Control-Allow-Origin', '*');

        headers.append("Accept", 'application/json');

        headers.append('Content-Type', 'application/json');

        let options = {headers: headers};
        let data: Observable<any> = this.http.get(url, options);
        data.subscribe(result => {
            this.items = result;
        });
        localStorage.setItem(this.key, JSON.stringify(this.items));
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

}
