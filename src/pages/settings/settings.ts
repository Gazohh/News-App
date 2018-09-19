import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BehaviorSubject} from 'rxjs/Rx';
import {SettingsProvider} from "../../providers/settings/settings";


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
private theme: BehaviorSubject<string>;
selectedTheme: String;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private settings: SettingsProvider) {
      this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
    this.theme = new BehaviorSubject('light-theme');
  }

  setActiveTheme(val) {
    this.theme.next(val);
  }

  getActiveTheme() {
    return this.theme.asObservable();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

    toggleAppTheme(){

        if(this.selectedTheme == 'light-theme') {
            this.settings.setActiveTheme('dark-theme');
        } else {
            this.settings.setActiveTheme('light-theme');
        }

    }

}
