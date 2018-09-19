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


@Component({
    templateUrl: 'app.html',
    providers: [Keyboard]
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
    rootPage: any = FeedPage;

    pages: Array<{ title: string, component: any }>;

    selectedTheme: String;
    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
                private settings: SettingsProvider) {
        this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });

        // used for an example of ngFor and navigation
        this.pages = [
            {title: 'Home', component: FeedPage},
            {title: 'Favorieten', component: FavorietenPage},
            {title: 'Settings', component: SettingsPage}
        ];
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}

