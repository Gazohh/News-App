import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SettingsPage} from "../settings/settings";

/**
 * Generated class for the PrivacybeleidPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-privacybeleid',
  templateUrl: 'privacybeleid.html',
})
export class PrivacybeleidPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivacybeleidPage');
  }
returnSettings() {
    this.navCtrl.setRoot(SettingsPage);
}
}
