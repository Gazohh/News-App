import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController, MenuController, AlertController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { HomePage } from "../pages/home/home";
import { Keyboard } from "@ionic-native/keyboard";
import { SettingsPage } from "../pages/settings/settings";
import { SettingsProvider } from "../providers/settings/settings";
import { SourcesPage } from "../pages/sources/sources";
import { SplashScreen } from '@ionic-native/splash-screen';
import { TutorialPage } from "../pages/tutorial/tutorial";
import { FeedPage } from "../pages/feed/feed";
import { CommentsPage } from "../pages/comments/comments";
import { EconomiePage } from "../pages/economie/economie";
import { MenuProvider } from "../providers/menu/menu";
import { timer } from "rxjs/observable/timer";

@Component({
    templateUrl: 'app.html',
    providers: [Keyboard, Nav]
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = HomePage;

    // -------------------------------------
    // Variablen
    // -------------------------------------
    // pages: Array<{ title: any, component: any, icon: string; }>;
    pages: any;
    selectedTheme: String;
    toggleStatus: boolean;
    showedAlert: boolean;
    confirmAlert: any;
    username: any;
    profilepicture: any;
    theme: any;
    activePage: any;
    showSplash = true;
    selectedMenu: any;

    // -------------------------------------
    // constructor
    // -------------------------------------
    constructor(private platform: Platform,
                statusBar: StatusBar,
                private splashScreen: SplashScreen,
                private settings: SettingsProvider,
                public modalCtrl: ModalController,
                public menuCtrl: MenuController,
                public events: Events,
                public alertCtrl: AlertController,
                public menuProvider: MenuProvider) {
        // -------------------------------------
        // Get Active theme dark/light
        // -------------------------------------
        this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);

        // -------------------------------------
        // Wanneer de app geladen is, is dit de eerste wat hij doet.
        // -------------------------------------
        platform.ready().then(() => {
            this.splashScreen.hide();

            // localStorage voor sessiontoken
            if (localStorage.getItem("sessionToken")) {
                this.nav.setRoot(FeedPage);
            }
            else if (!localStorage.getItem("sessionToken")) {
                this.nav.setRoot(HomePage);
                localStorage.clear();
            }

            this.getSideMenuData();

            // De statusbar kleur
            statusBar.backgroundColorByHexString('#fff') ;

            // -------------------------------------
            // Laat een alert zien zodra je twee keer op dismiss klikt of je de app wilt verlaten of niet
            // -------------------------------------
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

            // Voor de menu om de userame en profiel foto te setten live
            this.events.subscribe("username", (data) => {
                this.username = data;
            });
            this.events.subscribe("profilepicture", (foto) => {
                this.profilepicture = foto;
            });
        });

        // -------------------------------------
        // Localstorage voor light en dark theme
        // -------------------------------------
        if (localStorage.getItem("themeColor") == "light-theme") {

            this.settings.setActiveTheme("light-theme");

        }
        else if (localStorage.getItem("themeColor") == "dark-theme") {

            this.settings.setActiveTheme("dark-theme");
        }
    }

    getSideMenuData() {

        this.pages = this.menuProvider.getSideMenus();

    }

  // -------------------------------------
  // OnInit is het zelfde als platform ready en constructor
  // -------------------------------------
  ngOnInit() {
    setTimeout(() => this.showSplash = false, 1800);
  }

    // Open menu
    openPage(page, index) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.component) {
            this.nav.setRoot(page.component);
            this.menuCtrl.close();
        } else {
            if (this.selectedMenu) {
                this.selectedMenu = 0;
            } else {
                this.selectedMenu = index;
            }
        }
    }

    // -------------------------------------
    // De functie ervoor om de app te verlaten
    // -------------------------------------
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
