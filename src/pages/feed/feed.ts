import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { MenuController } from "ionic-angular";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Network } from "@ionic-native/network";
import { ToastController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { NieuwsPage } from "../nieuws/nieuws";
import { LoadingController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public http: HttpClient,
    public network: Network,
    private toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private socialSharing: SocialSharing,
    public platform: Platform) {
    if (this.network.type != "none") {
      //this.getData();
      this.load();
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
    if (!localStorage.getItem("username")) {
      this.navCtrl.setRoot(HomePage);
      toastinlog.present();
    }
    /* //this.GetNews()
     this.presentLoadingCustom();*/
  }

  /* presentLoadingCustom() {

       let loading = this.loadingCtrl.create({
           spinner: 'hide',
           content: `
     <div class="custom-spinner-container"><img src="http://gazoh.net/images/spinner.svg"><br> <p>Laden...</p>
     </div>`,
           duration: 1200
       });

       loading.present();
   }
*/
  ionViewDidLoad() {
    this.menuCtrl.enable(true, 'myMenu');
  }

  /*getData() {
      let url = "http://api.jsonbin.io/b/5bab4b98a97c597b3c591b93";
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
  }*/

  loadData() {
    localStorage.getItem(this.key);
    if (this.key != null && this.key != undefined) {
      this.items = JSON.parse(this.key);
    }
  }

  load(): void {
    this.http
      .get('http://gazoh.net/getdata.php')
      .subscribe((data: any) => {
        this.items = data;
        this.artikelen = data;
      },
        (error: any) => {
          console.dir(error);
        });
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

  setFocus() {
     this.searchbar.setFocus();
   }

}
