import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FavorietenPage } from "../pages/favorieten/favorieten";
import { FeedPage } from "../pages/feed/feed";
import { HomePage } from "../pages/home/home";
import { Keyboard } from "@ionic-native/keyboard";
import { SettingsPage } from "../pages/settings/settings";
import { SettingsProvider } from "../providers/settings/settings";
import { Network } from '@ionic-native/network';
import { ToastController } from 'ionic-angular';
import { CategoryPage } from "../pages/category/category";
import { ModalController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { timer } from 'rxjs/observable/timer';
import { SourcesPage } from "../pages/sources/sources";
import { TutorialPage } from "../pages/tutorial/tutorial";
import { AlertController } from 'ionic-angular';


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
      statusBar.styleLightContent();
      // splashScreen.hide();
        this.showedAlert = false;

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

    });


    // events.subscribe('user:created', (user) => {
    //   console.log('Welcome', user);
    // });

    console.log(localStorage.getItem("username"));

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
    // Local Storage
    //


    if (!localStorage.getItem("email")) {
      this.rootPage = HomePage;
    }
    else {
      this.rootPage = CategoryPage;
    }

    //
    // Dark/Light Mode
    //

    // Dark/Light Mode
    if (localStorage.getItem("themeColor") == "light-theme") {

      this.settings.setActiveTheme("light-theme");
      console.log("Toggle Status: " + this.toggleStatus);

    }
    else if (localStorage.getItem("themeColor") == "dark-theme") {

      this.settings.setActiveTheme("dark-theme");
      console.log("Toggle Status: " + this.toggleStatus);
    }
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
