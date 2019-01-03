import {Component} from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';
import {ToastController} from 'ionic-angular';
import {MenuController} from "ionic-angular";
import {FeedPage} from "../feed/feed";
import {Events} from 'ionic-angular';
import {ScreenOrientation} from '@ionic-native/screen-orientation';
import {Platform} from 'ionic-angular';
import {Keyboard} from '@ionic-native/keyboard';
import {Storage} from '@ionic/storage';
import {TutorialPage} from "../tutorial/tutorial";
import {SettingsProvider} from "../../providers/settings/settings";


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {

    // Variablen
    dataUser: any;
    username: string;
    email: string;
    password: string;
    id: any;
    emailVerified: any;
    rol: any;
    creationdate: any;
    token = Math.random().toString(36).substring(7);
    rootPage: any = HomePage;
    FeedPage = FeedPage;
    data: string;
    selectedTheme: string;


    constructor(
        public navCtrl: NavController,
        public loading: LoadingController,
        public http: HttpClient,
        private toastCtrl: ToastController,
        public menuCtrl: MenuController,
        public events: Events,
        private screenOrientation: ScreenOrientation,
        public platform: Platform,
        private keyboard: Keyboard,
        public storage: Storage,
        private settings: SettingsProvider) {

        // Zodra cordova is opgestart orientate je scherm naar potrait op HomePage
        if (this.platform.is('cordova')) {
            this.platform.ready().then(() => {
                this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

                // Checked of je bent ingelogt of niet
                if (localStorage.getItem("sessionToken")) {
                    this.navCtrl.setRoot(FeedPage);
                }
            })
        }

        // Keyboard niet laten scrollen
        this.keyboard.disableScroll(true);

        // Disable swiping
        this.menuCtrl.enable(false, 'myMenu');

        // -------------------------------------
        // Get Active theme dark/light
        // -------------------------------------
        this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
    }

    // ---------------------------------------------------------------------------------------------
    // Hier eindigt de constructor
    // ---------------------------------------------------------------------------------------------

    //

    // Push naar de register pagina
    goRegister() {
        this.navCtrl.push(RegisterPage);
    }

    // Checkt in database of je gegevens kloppen dan word je naar feedpagina gegooit
    signIn() {
        // Controleert of de velden wel zijn ingevuld
        if (this.email == null || this.password == null) {
            let toast = this.toastCtrl.create({
                message: 'Niet alle velden zijn ingevuld!',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else {
            var headers = new HttpHeaders();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            let options = {headers: headers};
            let data = {
                email: this.email,
                password: this.password
            };
            let loader = this.loading.create({
                content: 'Aan het inloggen...',
            });
            loader.present().then(() => {
                // Maakt verbinding met login.php en checkt of gegevens kloppen
                this.http.post('http://www.gazoh.net/getgebruiker.php', data, options)
                    .subscribe(data => {
                        this.dataUser = data
                    });
                this.http.post('http://www.gazoh.net/login.php', data, options)
                    .subscribe(res => {
                        console.log(res);
                        loader.dismiss();
                        if (res == "Succesfully logged in!") {

                            // Localstorage Gebruikersdetails
                            localStorage.setItem("userId", this.dataUser.id);
                            localStorage.setItem("userName", this.dataUser.username);
                            localStorage.setItem("userEmail", this.dataUser.email);
                            localStorage.setItem("userEmailVerified", this.dataUser.emailVerified);
                            localStorage.setItem("userRole", this.dataUser.rol);
                            localStorage.setItem("userCreationDate", this.dataUser.creationdate);
                            localStorage.setItem("sessionToken", this.token);
                            localStorage.setItem("profilePicture", this.dataUser.profilepicture);
                            localStorage.setItem("themeColor", this.selectedTheme);
                            console.log(this.selectedTheme);

                                if (localStorage.getItem("TutorialShown") != "true") {
                                    this.navCtrl.setRoot(TutorialPage);
                                }
                                else if (localStorage.getItem("TutorialShown") == "true")
                                {
                                    this.navCtrl.setRoot(FeedPage);
                                }
                            // //Fire username event
                            this.events.publish("username", this.dataUser.username);
                            this.events.publish("profilepicture", this.dataUser.profilepicture);


                        }
                        else {
                            let toast = this.toastCtrl.create({
                                message: "Uw gegevens zijn onjuist, probeer het nogmaals.",
                                showCloseButton: true,
                                closeButtonText: "OK",
                                position: "top"
                            });
                            toast.present();
                        }
                    });
            });
        }
    }
}
