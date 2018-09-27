import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SettingsProvider} from "../../providers/settings/settings";
import {Nav, Platform} from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html',
})
export class SettingsPage {
    selectedTheme: string;
    setActiveTheme: string;


    constructor(private settings: SettingsProvider,platform: Platform) {
        this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);

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

    ionViewDidLoad() {

    }

}
