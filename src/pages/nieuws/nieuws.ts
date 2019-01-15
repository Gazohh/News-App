import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser';


/**
 * Generated class for the NieuwsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nieuws',
  templateUrl: 'nieuws.html',
})
export class NieuwsPage {
    browser: InAppBrowser;
  title: string;
  description: string;
  link: string;
  image: string;
  datum: string;
  site: string;
  id: string;
  url: string;
    options: InAppBrowserOptions = {
        location: 'yes',
        hidden: 'no',
        clearcache: 'yes',
        clearsessioncache: 'yes',
        zoom: 'yes',//Android only
        hardwareback: 'yes',
        mediaPlaybackRequiresUserAction: 'no',
        shouldPauseOnSuspend: 'no', //Android only
        closebuttoncaption: 'Close', //iOS only
        disallowoverscroll: 'no', //iOS only
        toolbar: 'yes', //iOS only
        enableViewportScale: 'no', //iOS only
        allowInlineMediaPlayback: 'no',//iOS only
        presentationstyle: 'pagesheet',//iOS only
        fullscreen: 'yes',//Windows only
    };

  constructor(public navCtrl: NavController, public navParams: NavParams, private inAppBrowser: InAppBrowser) {
    if (this.navParams.get("record")) {
      this.selectEntry(this.navParams.get("record"));
      console.log(this.navParams.get("record"));
    }
    else {
      this.navCtrl.setRoot("CategoryPage");
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NieuwsPage');
  }

  selectEntry(item: any): void {
    this.title = item.title;
    this.image = item.image;
    this.description = item.description;
    this.link = item.link;
    this.site = item.site;
    this.datum = item.datum;
    this.id = item.id;
  }

  htmlToPlaintext(text) {
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';
  }

   public openPagina(url) {
      const Options: InAppBrowserOptions = {
          zoom: 'no',
          location:'yes',
          toolbar:'yes',
          clearcache: 'yes',
          clearsessioncache: 'yes',
          disallowoverscroll: 'yes',
          enableViewportScale: 'yes'
      }
        const browser = this.inAppBrowser.create( url , '_blank', Options );
        browser.show();
    }


}
