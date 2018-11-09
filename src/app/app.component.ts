import { Component, ViewChild } from '@angular/core';
import {Nav, Platform, ModalController, MenuController, AlertController, Events} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { FavorietenPage } from "../pages/favorieten/favorieten";
import { HomePage } from "../pages/home/home";
import { Keyboard } from "@ionic-native/keyboard";
import { SettingsPage } from "../pages/settings/settings";
import { SettingsProvider } from "../providers/settings/settings";
import { CategoryPage } from "../pages/category/category";
import { SourcesPage } from "../pages/sources/sources";
import { SplashScreen } from '@ionic-native/splash-screen';
import { TutorialPage } from "../pages/tutorial/tutorial";
import { FeedPage } from "../pages/feed/feed";
import { CommentsPage } from "../pages/comments/comments";
import { timer } from "rxjs/observable/timer";


@Component({
    templateUrl: 'app.html',
    providers: [Keyboard, Nav]
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = HomePage;

    // Variablen
    pages: Array<{ title: any, component: any, icon: string; }>;
    selectedTheme: String;
    toggleStatus: boolean;
    showedAlert: boolean;
    confirmAlert: any;
    username:any;
    profilepicture:any;
    theme:any;

    showSplash = true;

    constructor(private platform: Platform,
                statusBar: StatusBar,
                private splashScreen: SplashScreen,
                private settings: SettingsProvider,
                public modalCtrl: ModalController,
                public menuCtrl: MenuController,
                public events: Events,
                public alertCtrl: AlertController) {
        this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.splashScreen.hide();

            if(localStorage.getItem("sessionToken"))
            {
                this.nav.setRoot(FeedPage);
            }
            else if (!localStorage.getItem("sessionToken"))
            {
                this.nav.setRoot(HomePage);
                localStorage.clear();
            }

            statusBar.backgroundColorByHexString('#225C73');


            this.platform.registerBackButtonAction(() => {
                if (this.nav.length() == 1) {
                    if (!this.showedAlert) {
                        this.confirmExitApp();
                    } else {
                        this.showedAlert = false;
                        this.confirmAlert.dismiss();
                    }
                }

                this.nav.pop();
            });

            this.events.subscribe("username",(data) => {
                this.username = data;
            } );
            this.events.subscribe("profilepicture",(foto) => {
                this.profilepicture = foto;
            } );
        });


        // events.subscribe('user:created', (user) => {
        //   console.log('Welcome', user);
        // });


        this.pages = [
            {

                title: 'Home',
                component: CategoryPage,
                icon: 'home'
            },
            {

                title: 'Sources',
                component: SourcesPage,
                icon: 'star'
            },
            {

                title: 'Favorieten',
                component: FavorietenPage,
                icon: 'heart'
            },
            {
                title: 'Notificaties',
                component: SettingsPage,
                icon: 'notifications'
            },
            {
                title: 'Tutorial',
                component: TutorialPage,
                icon: 'map'
            },
            {
                title: 'Instellingen',
                component: SettingsPage,
                icon: 'settings'
            }
        ];

//
// Dark/Light Mode
//
        if (localStorage.getItem("themeColor") == "light-theme") {

            this.settings.setActiveTheme("light-theme");

        }
        else if (localStorage.getItem("themeColor") == "dark-theme") {

            this.settings.setActiveTheme("dark-theme");
        }
    }

    ngOnInit() {
        setTimeout(() => this.showSplash = false, 3500);
    }


    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }

    confirmExitApp() {
        this.showedAlert = true;
        this.confirmAlert = this.alertCtrl.create({
            title: "Sluiten",
            message: "Wilt u de NewsAge app verlaten ?",
            buttons: [
                {
                    text: 'Annuleer',
                    handler: () => {
                        this.showedAlert = false;
                        return;
                    }
                },
                {
                    text: 'Verlaat',
                    handler: () => {
                        this.platform.exitApp();
                    }
                }
            ]
        });
        this.confirmAlert.present();
    }


}
