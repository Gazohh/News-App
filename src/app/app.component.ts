import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {FavorietenPage} from "../pages/favorieten/favorieten";
import {FeedPage} from "../pages/feed/feed";
import {HomePage} from "../pages/home/home";
import {Keyboard} from "@ionic-native/keyboard";
import {SettingsPage} from "../pages/settings/settings";
import {SettingsProvider} from "../providers/settings/settings";
import { Network } from '@ionic-native/network';
import {ToastController} from 'ionic-angular';
import {CategoryPage} from "../pages/category/category";
import { ModalController, NavParams } from 'ionic-angular';



@Component({
    templateUrl: 'app.html',
    providers: [Keyboard, Nav]
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = HomePage;

    // Variablen
    pages: Array<{ title: string, component: any }>;
    selectedTheme: String;
    toggleStatus: boolean;


    constructor(platform: Platform,
                statusBar: StatusBar,
                splashScreen: SplashScreen,
                private settings: SettingsProvider,
              public modalCtrl: ModalController) {
        this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });

        // used for an example of ngFor and navigation (MENU)
        this.pages = [
            {title: '{Naam}' ,  component: SettingsPage },
            {title: 'Categorieën', component: CategoryPage},
            {title: 'Favorieten', component: FavorietenPage},
            {title: 'Settings', component: SettingsPage},
        ];

        if(!localStorage.getItem("username"))
        {
            this.rootPage = HomePage
        }
        else {
            this.rootPage = CategoryPage;
        }

        // Dark/Light Mode
        if (localStorage.getItem("themeColor") == "dark-theme") {

            this.settings.setActiveTheme("dark-theme");
            console.log("Toggle Status: " + this.toggleStatus);

        }
        else if (localStorage.getItem("themeColor") == "light-theme") {

            this.settings.setActiveTheme("light-theme");
            console.log("Toggle Status: " + this.toggleStatus);
        }
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }

    uitloggen()
    {
        localStorage.clear();
        this.nav.push(HomePage);
    }
}
