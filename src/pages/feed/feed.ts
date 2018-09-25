import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RssProvider} from "../../providers/rss/rss";
import { MenuController } from "ionic-angular";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
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
    public items:any;
    public data:any;
    public numLimit:any;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public rssProvider: RssProvider,
        public menuCtrl: MenuController,
        public http: HttpClient) {
        this.getData();
        //this.GetNews()
        this.numLimit = 60;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad FeedPage');
        this.Get_RSS_Data();
        this.menuCtrl.enable (true, 'myMenu');
    }


    Get_RSS_Data() {
        this.rssProvider.getRSS().subscribe(data => {
            this.rssDataArray = data;
        });
    }

    GetNews()
    {
        this.http.get("http://gazoh.net/algemeen.json").map(result => this.items = result)
        localStorage.setItem("News", JSON.stringify(this.items));
    }

    getData()
    {
        let url = "http://api.jsonbin.io/b/5ba912599353c37b74340854";
        var headers = new HttpHeaders();
        headers.append('Access-Control-Allow-Origin' , '*');

        headers.append("Accept", 'application/json');

        headers.append('Content-Type', 'application/json' );

        let options = { headers: headers };
        let data: Observable<any> = this.http.get(url, options);
        data.subscribe(result => {
            this.items = result;
        });
    }
}
