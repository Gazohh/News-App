import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {MenuController} from "ionic-angular";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Network} from "@ionic-native/network";
import {ToastController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {LoadingController} from 'ionic-angular';
import {Searchbar} from 'ionic-angular';
import {CommentsPage} from "../comments/comments";
import {Events} from 'ionic-angular';
import {ScreenOrientation} from '@ionic-native/screen-orientation';
import {Content} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';
import {SocialSharing} from '@ionic-native/social-sharing';
import {Storage} from '@ionic/storage';
import 'rxjs/add/operator/map';
import {LijstweerPage} from "../lijstweer/lijstweer";
import {TutorialPage} from "../tutorial/tutorial";


@IonicPage()
@Component({
    selector: 'page-feed',
    templateUrl: 'feed.html',
})
export class FeedPage {

    @ViewChild('searchbar') searchbar: Searchbar;
    @ViewChild(Content) content: Content;

    public items: any = 0;
    public data: any;
    public artikelen: any;
    public key: string = "items";
    public isSearchbaropened = false;
    public datepicker: any;
    public vandaag: any;
    public gisteren: any;
    public driedagengeleden: any;
    public itemempty: boolean;
    public rol: any;
    public dataUser: any;
    public username: string;
    public userId: string;
    public profilepicture: any;
    public shouldScrollDown = true;
    public showScrollButton = false;
    public dataweer: any;
    public title: string;
    public about: string;
    public disabled: boolean = false;
    public selectOptions: any;
    public open: boolean = true;
    public open2: boolean = true;
    public open3: boolean = true;
    public open4: boolean = true;
    public currentTheme: string;

    // // weer
    // public dag1NaarCelcius12uur: any;
    // public dag1NaarCelcius15uur: any;
    // public dag1NaarCelcius18uur: any;
    // public dag1NaarCelcius21uur: any;
    // public dag2NaarCelcius00uur: any;
    // public dag2NaarCelcius03uur: any;
    // public dag2NaarCelcius06uur: any;
    // public dag2NaarCelcius09uur: any;
    // public dag2NaarCelcius12uur: any;
    // public dag2NaarCelcius15uur: any;
    // public dag2NaarCelcius18uur: any;
    // public dag2NaarCelcius21uur: any;
    // public dag3NaarCelcius00uur: any;
    // public dag3NaarCelcius03uur: any;
    // public dag3NaarCelcius06uur: any;
    // public dag3NaarCelcius09uur: any;
    // public dag3NaarCelcius12uur: any;
    // public dag3NaarCelcius15uur: any;
    // public dag3NaarCelcius18uur: any;
    // public dag3NaarCelcius21uur: any;
    // public dag4NaarCelcius00uur: any;
    // public dag4NaarCelcius03uur: any;
    // public dag4NaarCelcius06uur: any;
    // public dag4NaarCelcius09uur: any;
    // public dag4NaarCelcius12uur: any;
    // public dag4NaarCelcius15uur: any;
    // public dag4NaarCelcius18uur: any;
    // public dag4NaarCelcius21uur: any;
    // public dag5NaarCelcius00uur: any;
    // public dag5NaarCelcius03uur: any;
    // public dag5NaarCelcius06uur: any;
    // public dag5NaarCelcius09uur: any;
    // public dag5NaarCelcius12uur: any;
    // public dag5NaarCelcius15uur: any;
    // public dag5NaarCelcius18uur: any;
    // public dag5NaarCelcius21uur: any;
    // public dag1NaarCelcius12uurMathRound: any;
    // public dag1NaarCelcius15uurMathRound: any;
    // public dag1NaarCelcius18uurMathRound: any;
    // public dag1NaarCelcius21uurMathRound: any;
    // public dag2NaarCelcius00uurMathRound: any;
    // public dag2NaarCelcius03uurMathRound: any;
    // public dag2NaarCelcius06uurMathRound: any;
    // public dag2NaarCelcius09uurMathRound: any;
    // public dag2NaarCelcius12uurMathRound: any;
    // public dag2NaarCelcius15uurMathRound: any;
    // public dag2NaarCelcius18uurMathRound: any;
    // public dag2NaarCelcius21uurMathRound: any;
    // public dag3NaarCelcius00uurMathRound: any;
    // public dag3NaarCelcius03uurMathRound: any;
    // public dag3NaarCelcius06uurMathRound: any;
    // public dag3NaarCelcius09uurMathRound: any;
    // public dag3NaarCelcius12uurMathRound: any;
    // public dag3NaarCelcius15uurMathRound: any;
    // public dag3NaarCelcius18uurMathRound: any;
    // public dag3NaarCelcius21uurMathRound: any;
    // public dag4NaarCelcius00uurMathRound: any;
    // public dag4NaarCelcius03uurMathRound: any;
    // public dag4NaarCelcius06uurMathRound: any;
    // public dag4NaarCelcius09uurMathRound: any;
    // public dag4NaarCelcius12uurMathRound: any;
    // public dag4NaarCelcius15uurMathRound: any;
    // public dag4NaarCelcius18uurMathRound: any;
    // public dag4NaarCelcius21uurMathRound: any;
    // public dag5NaarCelcius00uurMathRound: any;
    // public dag5NaarCelcius03uurMathRound: any;
    // public dag5NaarCelcius06uurMathRound: any;
    // public dag5NaarCelcius09uurMathRound: any;
    // public dag5NaarCelcius12uurMathRound: any;
    // public dag5NaarCelcius15uurMathRound: any;
    // public dag5NaarCelcius18uurMathRound: any;
    // public dag5NaarCelcius21uurMathRound: any;
    // public dag1Weather12uur: any;
    // public dag1Weather15uur: any;
    // public dag1Weather18uur: any;
    // public dag1Weather21uur: any;
    // public dag1Weather12uurHumidity: any;
    // public dag1Weather15uurHumidity: any;
    // public dag1Weather18uurHumidity: any;
    // public dag1Weather21uurHumidity: any;
    // public windNaarKm12uurDag1;
    // public windNaarKm15uurDag1;
    // public windNaarKm18uurDag1;
    // public windNaarKm21uurDag1;
    // public windNaarKm12uurDag1MathRound;
    // public windNaarKm15uurDag1MathRound;
    // public windNaarKm18uurDag1MathRound;
    // public windNaarKm21uurDag1MathRound;
    // public dag1DatumTijd12uur: any;
    // public dag1DatumTijd15uur: any;
    // public dag1DatumTijd18uur: any;
    // public dag1DatumTijd21uur: any;
    //
    // public plaatsnaam: any;
    // public weather: string;
    // public country: string;
    // public weerSegment: any;


    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public menuCtrl: MenuController,
        public http: HttpClient,
        public network: Network,
        private toastCtrl: ToastController,
        public loadingCtrl: LoadingController,
        public platform: Platform,
        public events: Events,
        private screenOrientation: ScreenOrientation,
        private alertCtrl: AlertController,
        private socialSharing: SocialSharing,
        private geolocation: Geolocation,
        private storage: Storage) {

        // // setSegment op vandaag op het weer.
        // this.weerSegment = "weerVandaag";

        // Select Items
        this.selectOptions = {
            title: 'Bekijk'
        };
        //

        if (this.platform.is('cordova')) {
            this.platform.ready().then(() => {

                // Checkt of je een token hebt of niet zo niet dan word je naar home page direct
                if (!localStorage.getItem("sessionToken")) {
                    let toastinlog = toastCtrl.create({
                        message: "Geen sessie gevonden, log opnieuw in.",
                        duration: 2500,
                        position: "top",
                        showCloseButton: true,
                        closeButtonText: "OK"
                    });
                    this.navCtrl.setRoot(HomePage);
                    toastinlog.present();

                }
            })
        }

        // screenOrientation kan draaien
        this.screenOrientation.unlock();

        if (this.network.type != "none") {
            this.setOfflineDataToday();
            this.setOfflineDataYesterday();
            this.setOfflineData3DaysAgo();
            this.datepicker = "vandaag";
            if (this.datepicker == "vandaag") {
                this.load();
            } else if (this.datepicker == "gisteren") {
                this.loadYesterday();
            } else if (this.datepicker == "driedagengeleden") {
                this.load3DaysAgo();
            }


            if (this.platform.is('cordova')) {
                this.platform.ready().then(() => {

                    // Checkt of je een token hebt of niet zo niet dan word je naar home page direct
                    if (!localStorage.getItem("sessionToken")) {
                        let toastinlog = toastCtrl.create({
                            message: "Geen sessie gevonden, log opnieuw in.",
                            duration: 2500,
                            position: "top",
                            showCloseButton: true,
                            closeButtonText: "OK"
                        });
                        this.navCtrl.setRoot(HomePage);
                        toastinlog.present();

                    }
                })
            }

            // Hij pakt alle rollen, usernames etc van de database
            const headers = new HttpHeaders();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            const options = {headers: headers};
            const data = {
                email: localStorage.getItem('userEmail'),
            };
            this.http.post('http://gazoh.net/getgebruiker.php', data, options)
                .subscribe(data => {
                    this.dataUser = data;
                    this.rol = this.dataUser.rol;
                    this.username = this.dataUser.username;
                    this.userId = this.dataUser.id;
                    this.profilepicture = this.dataUser.profilepicture;
                    this.events.publish("username", this.username);
                    this.events.publish("profilepicture", this.profilepicture);
                });
        }
        else if (this.network.type == 'none') {

            this.datepicker = "vandaag";
            let offlinealert = this.toastCtrl.create({
                message: "Er is geen internet verbinding, opgeslagen artikelen worden ingeladen.",
                duration: 2500,
                position: "bottom"
            });
            offlinealert.present();
            if (this.datepicker == "vandaag") {
                this.storage.get("offlineDataToday").then(data => {
                    this.items = data;
                    this.artikelen = data;
                    if (this.items) {
                        this.items.sort(function (a, b) {
                            return +new Date(b.datum) - +new Date(a.datum);
                        });
                    }
                })
            }
            else if (this.datepicker == "gisteren") {
                this.storage.get("offlineDataYesterday").then(data => {
                    this.items = data;
                    this.artikelen = data;
                    if (this.items) {
                        this.items.sort(function (a, b) {
                            return +new Date(b.datum) - +new Date(a.datum);
                        });
                    }
                })
            }
            else if (this.datepicker == "driedagengeleden") {
                this.storage.get("offlineData3DaysAgo").then(data => {
                    this.items = data;
                    this.artikelen = data;
                    if (this.items) {
                        this.items.sort(function (a, b) {
                            return +new Date(b.datum) - +new Date(a.datum);
                        });
                    }
                })
            }
        }

        if(localStorage.getItem("themeColor"))
        {
            this.currentTheme = localStorage.getItem("themeColor")
            console.log(this.currentTheme);
        }
    }


    // ---------------------------------------------------------------------------------------------
    // Hier eindigt de constructor
    // ---------------------------------------------------------------------------------------------

    //
    onChange(SelectedValue) {
        SelectedValue = SelectedValue;
        console.log(SelectedValue);
        if(this.network.type != "none")
        {
            if (this.datepicker == "vandaag") {
                this.loadWithSpinner();
                this.content.scrollToTop(0);
            } else if (this.datepicker == "gisteren") {
                this.loadYesterday();
                this.content.scrollToTop(0);
            } else if (this.datepicker == "driedagengeleden") {
                this.load3DaysAgo();
                this.content.scrollToTop(0);
            } // else if (this.datepicker == "HetWeer") {
            //     this.weerData();
            // }
        }
        else if (this.network.type == "none")
        {
            if (this.datepicker == "vandaag") {
                this.storage.get("offlineDataToday").then(data => {
                    this.items = data;
                    this.artikelen = data;
                    this.content.scrollToTop(0);
                    if (this.items) {
                        this.items.sort(function (a, b) {
                            return +new Date(b.datum) - +new Date(a.datum);
                        });
                    }
                })
            }
            else if (this.datepicker == "gisteren") {
                this.storage.get("offlineDataYesterday").then(data => {
                    this.items = data;
                    this.artikelen = data;
                    this.content.scrollToTop(0);
                    if (this.items) {
                        this.items.sort(function (a, b) {
                            return +new Date(b.datum) - +new Date(a.datum);
                        });
                    }
                })
            }
            else if (this.datepicker == "driedagengeleden") {
                this.storage.get("offlineData3DaysAgo").then(data => {
                    this.items = data;
                    this.artikelen = data;
                    this.content.scrollToTop(0);
                    if (this.items) {
                        this.items.sort(function (a, b) {
                            return +new Date(b.datum) - +new Date(a.datum);
                        });
                    }
                })
            }
        }

    }

    // Alert of je de artikel wilt hiden
    showConfirmHide(postId) {
        const confirm = this.alertCtrl.create({
            title: 'Verbergen',
            message: 'Weetje zeker dat je deze artikel wilt verbergen?',
            buttons: [
                {
                    text: 'Niet Akkoord',
                    handler: () => {

                    }
                },
                {
                    text: 'Akkoord',
                    handler: () => {

                        // Hide artikel
                        console.log("Hide " + postId);
                        var headers = new HttpHeaders();
                        headers.append("Accept", 'application/json');
                        headers.append('Content-Type', 'application/json');
                        let options = {headers: headers};
                        this.http.post('http://gazoh.net/hidearticle.php', postId, options).subscribe(res => {
                            if (res == "hidden") {
                                if (this.datepicker == "vandaag") {
                                    this.load();
                                } else if (this.datepicker == "gisteren") {
                                    this.loadYesterday();
                                } else if (this.datepicker == "driedagengeleden") {
                                    this.load3DaysAgo();
                                }
                                let toast = this.toastCtrl.create({
                                    message: "Artikel " + postId + " verborgen",
                                    duration: 2500,
                                    position: "top",
                                    showCloseButton: true,
                                    closeButtonText: "OK"
                                });
                                toast.present();
                            }
                        });
                    }
                }
            ]
        });
        confirm.present();
    }

    ionViewWillEnter() {
        if (this.network.type != "none") {
            if (this.datepicker == "vandaag") {
                this.load();
            }
            else if (this.datepicker == "gisteren") {
                this.loadYesterday();
            }
            else if (this.datepicker == "driedagengeleden") {
                this.load3DaysAgo();
            }
        }
        else if (this.network.type == "none") {
            if (this.datepicker == "vandaag") {
                this.storage.get("offlineDataToday").then(data => {
                    this.items = data;
                    this.artikelen = data;
                    if (this.items) {
                        this.items.sort(function (a, b) {
                            return +new Date(b.datum) - +new Date(a.datum);
                        });
                    }
                })
            }
            else if (this.datepicker == "gisteren") {
                this.storage.get("offlineDataYesterday").then(data => {
                    this.items = data;
                    this.artikelen = data;
                    if (this.items) {
                        this.items.sort(function (a, b) {
                            return +new Date(b.datum) - +new Date(a.datum);
                        });
                    }
                })
            }
            else if (this.datepicker == "driedagengeleden") {
                this.storage.get("offlineData3DaysAgo").then(data => {
                    this.items = data;
                    this.artikelen = data;
                    if (this.items) {
                        this.items.sort(function (a, b) {
                            return +new Date(b.datum) - +new Date(a.datum);
                        });
                    }
                })
            }
        }
    }

    // Custom Spinner loader
    presentLoadingCustom() {
        let loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: `<div class="custom-spinner-container"><img src="../assets/svg/spinner/tail-spin.svg"><br> <p>Laden...</p>
     </div>`,
            duration: 610
        });

        loading.present();
    }


    // Laad data pas zodra je bent ingelogt
    loadData() {
        localStorage.getItem(this.key);
        if (this.key != null && this.key != undefined) {
            this.items = JSON.parse(this.key);
        }
    }

    //
    htmlToPlaintext(text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    }

    // Redirect to NieuwsPage
    viewEntry(param: any): void {
        this.navCtrl.push('NieuwsPage', param);
    }

    // Doorverbinden naar de CommentsPage
    viewComments(param: any): void {
        this.navCtrl.push(CommentsPage, param);
    }

    // Zoek functie
    search(event) {
        let serVal = event.target.value;
        if (serVal && serVal.trim() != '') {
            this.items = this.items.filter((item) => {
                return (item.title.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
            })
            if (this.items.length < 1) {
                this.items = this.artikelen.filter((item) => {
                    return (item.title.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
                })
            }
        }
        else {
            this.items = this.artikelen;
        }
    }

    // Zodra je de searchbar canceled
    resetChanges() {
        if (this.network.type != "none") {
            if (this.datepicker == "vandaag") {
                this.load();
                this.isSearchbaropened = false;
            } else if (this.datepicker == "gisteren") {
                this.loadYesterday();
                this.isSearchbaropened = false;
            } else if (this.datepicker == "driedagengeleden") {
                this.load3DaysAgo();
                this.isSearchbaropened = false;
            } else if (this.datepicker == "HetWeer") {
                this.isSearchbaropened = false;
            }
        }
        else {
            this.items = this.artikelen;
            this.isSearchbaropened = false;
        }
    }

    // Zodra de pagina is geladen
    ionViewDidLoad() {
        this.menuCtrl.enable(true, 'myMenu');
    }

    // Segment Alle nieuws van Vandaag
    load() {
        this.datepicker = "vandaag";
        const headers = new HttpHeaders();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        const options = {headers: headers};
        const data = {
            userId: localStorage.getItem('userId')
        };
        this.http
            .post('http://gazoh.net/getdata2.php', data, options)
            .subscribe((data: any) => {
                    this.items = data;
                    this.artikelen = data;
                    if (this.items) {
                        this.items.sort(function (a, b) {
                            return +new Date(b.datum) - +new Date(a.datum);
                        });
                    } else if(this.artikelen) {
                        this.artikelen.sort(function (a, b) {
                            return +new Date(b.datum) - +new Date(a.datum);
                        });
                    }
                },
                (error: any) => {
                    let toast = this.toastCtrl.create({
                        message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                        duration: 3500,
                        position: "top"
                    });
                    toast.present();
                    console.log("Http error is: " + error);
                });
    }

    loadWithSpinner() {
        this.datepicker = "vandaag";
        const headers = new HttpHeaders();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        const options = {headers: headers};
        const data = {
            userId: localStorage.getItem('userId')
        };
        this.http
            .post('http://gazoh.net/getdata2.php', data, options)
            .subscribe((data: any) => {
                    this.items = data;
                    this.artikelen = data;
                    if (this.items) {
                        this.items.sort(function (a, b) {
                            return +new Date(b.datum) - +new Date(a.datum);
                        });

                    }
                },
                (error: any) => {
                    let toast = this.toastCtrl.create({
                        message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                        duration: 3500,
                        position: "top"
                    });
                    toast.present();
                    console.log("Http error is: " + error);
                });
        this.presentLoadingCustom();
    }

    // Segment Alle nieuws van Gisteren
    loadYesterday() {
        this.datepicker = "gisteren";
        const headers = new HttpHeaders();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        const options = {headers: headers};
        const data = {
            userId: localStorage.getItem('userId')
        };
        this.http
            .post('http://gazoh.net/getyesterday.php', data, options)
            .subscribe((data: any) => {
                    this.items = data;
                    this.artikelen = data;
                    this.items = data;
                    this.artikelen = data;
                    if (this.items) {
                        this.items.sort(function (a, b) {
                            return +new Date(b.datum) - +new Date(a.datum);
                        });
                    } else if(this.artikelen) {
                        this.artikelen.sort(function (a, b) {
                            return +new Date(b.datum) - +new Date(a.datum);
                        });
                    }
                },
                (error: any) => {
                    let toast = this.toastCtrl.create({
                        message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                        duration: 3500,
                        position: "top"
                    });
                    toast.present();
                    console.log("Http error is: " + error);
                });
        this.presentLoadingCustom();
    }

    // Segment Alle nieuws van Gisteren
    load3DaysAgo() {
        this.datepicker = "driedagengeleden";
        const headers = new HttpHeaders();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        const options = {headers: headers};
        const data = {
            userId: localStorage.getItem('userId')
        };
        this.http
            .post('http://gazoh.net/get3daysago.php', data, options)
            .subscribe((data: any) => {
                    this.items = data;
                    this.artikelen = data;
                    if (this.items) {
                        this.items.sort(function (a, b) {
                            return +new Date(b.datum) - +new Date(a.datum);
                        });
                    } else if(this.artikelen) {
                        this.artikelen.sort(function (a, b) {
                            return +new Date(b.datum) - +new Date(a.datum);
                        });
                    }
                },
                (error: any) => {
                    let toast = this.toastCtrl.create({
                        message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                        duration: 3500,
                        position: "top"
                    });
                    toast.present();
                    console.log("Http error is: " + error);
                });
        this.presentLoadingCustom();

    }

    // De pull to refresh
    doRefresh(refresher) {
        if (this.network.type != "none") {
            if (this.datepicker == "vandaag") {
                const headers = new HttpHeaders();
                headers.append("Accept", 'application/json');
                headers.append('Content-Type', 'application/json');
                const options = {headers: headers};
                const data = {
                    userId: localStorage.getItem('userId')
                };
                this.http
                    .post('http://gazoh.net/getdata2.php', data, options)
                    .subscribe((data: any) => {
                            this.items = data;
                            this.artikelen = data;
                            if (this.items) {
                                this.items.sort(function (a, b) {
                                    return +new Date(b.datum) - +new Date(a.datum);
                                });
                            }
                        },
                        (error: any) => {
                            let toast = this.toastCtrl.create({
                                message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                                duration: 3500,
                                position: "top"
                            });
                            toast.present();
                            console.log("Http error is: " + error);
                        });
            } else if (this.datepicker == "gisteren") {
                this.http
                const headers = new HttpHeaders();
                headers.append("Accept", 'application/json');
                headers.append('Content-Type', 'application/json');
                const options = {headers: headers};
                const data = {
                    userId: localStorage.getItem('userId')
                };
                this.http
                    .post('http://gazoh.net/getyesterday.php', data, options)
                    .subscribe((data: any) => {
                            this.items = data;
                            this.artikelen = data;
                            if (this.items) {
                                this.items.sort(function (a, b) {
                                    return +new Date(b.datum) - +new Date(a.datum);
                                });
                            }
                        },
                        (error: any) => {
                            let toast = this.toastCtrl.create({
                                message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                                duration: 3500,
                                position: "top"
                            });
                            toast.present();
                            console.log("Http error is: " + error);
                        });
            } else if (this.datepicker == "driedagengeleden") {
                const headers = new HttpHeaders();
                headers.append("Accept", 'application/json');
                headers.append('Content-Type', 'application/json');
                const options = {headers: headers};
                const data = {
                    userId: localStorage.getItem('userId')
                };
                this.http
                    .post('http://gazoh.net/get3daysago.php', data, options)
                    .subscribe((data: any) => {
                            this.items = data;
                            this.artikelen = data;
                            if (this.items) {
                                this.items.sort(function (a, b) {
                                    return +new Date(b.datum) - +new Date(a.datum);
                                });
                            }
                        },
                        (error: any) => {
                            let toast = this.toastCtrl.create({
                                message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                                duration: 3500,
                                position: "top"
                            });
                            toast.present();
                            console.log("Http error is: " + error);
                        });
            }

        }

        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    }

    setLike(articleId) {
        this.disabled = true;
        const headers = new HttpHeaders();

        headers.append("Accept", 'application/json');

        headers.append('Content-Type', 'application/json');

        const options = {headers: headers};

        const data = {
            articleId: articleId,
            userId: this.userId
        };

        this.http.post('http://gazoh.net/setlike.php', data, options)
            .subscribe(data => {
                if (data == "liked") {
                    this.disabled = false;
                    if (this.datepicker == "vandaag") {
                        this.load();
                    } else if (this.datepicker == "gisteren") {
                        this.loadYesterday();
                    } else if (this.datepicker == "driedagengeleden") {
                        this.load3DaysAgo();
                    }
                    console.log(data);
                }
            });
    }

    shareInfo(articleTitle, articleImage, articleLink) {
        this.socialSharing.share('Bekijk "' + articleTitle + '" via de Newsage app', "NewsAge", articleImage, articleLink);
        //         then(() => {
        //             alert("Sharing success");
        //      Success!
        //         }).catch(() => {
        //      Error!
        //             alert("Share failed");
        //         });
    }

    //share voor feedpage
    // share(){
    //     this.socialSharing.shareWithOptions(options: {"Your Message", "image" , "link"})
    //         .then(()=>{
    //             console.log("WhatsApp share successful");
    //         }).catch((err)=> {
    //         console.log
    //     });
    //     this.socialSharing.shareViaWhatsApp("Your Message", "image" , "link")
    //         .then(()=>{
    //             console.log("WhatsApp share successful");
    //         }).catch((err)=> {
    //         console.log
    //     });
    //     this.socialSharing.shareViaFacebook("Hallo!", "Image", "Url")
    //         .then(()=>{
    //             console.log("Facebook share successful");
    //         }).catch((err)=> {
    //         console.log
    //     });
    // }


    dislike(articleId, articleTitle) {
        const headers = new HttpHeaders();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        const options = {headers: headers};
        const data = {
            articleId: articleId,
            userId: this.userId
        };
        let alert = this.alertCtrl.create({
            title: "Dislike",
            message: "Weet je zeker dat je deze artikel wilt verwijderen uit je favorieten ?",
            buttons: [
                {
                    text: 'Annuleer',
                    handler: () => {
                        return;
                    }
                },
                {
                    text: 'Verwijder',
                    handler: () => {
                        this.http.post('http://gazoh.net/unlike.php', data, options)
                            .subscribe(data => {
                                if (data == "unliked") {
                                    let toast = this.toastCtrl.create({
                                        message: '"' + articleTitle + '"' + " is verwijderd uit je favorieten!",
                                        duration: 2500,
                                        position: "bottom"
                                    });
                                    toast.present();
                                    if (this.datepicker == "vandaag") {
                                        this.load();
                                    } else if (this.datepicker == "gisteren") {
                                        this.loadYesterday();
                                    } else if (this.datepicker == "driedagengeleden") {
                                        this.load3DaysAgo();
                                    }
                                    console.log(data);
                                }
                            });
                    }
                }
            ]
        });
        alert.present();
    }

    setOfflineDataToday() {
        const headers = new HttpHeaders();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        const options = {headers: headers};
        const data = {
            userId: localStorage.getItem('userId')
        };
        this.http
            .post('http://gazoh.net/getdata2.php', data, options)
            .subscribe((data: any) => {
                    console.log("Offline data set in storage: offlineDataToday");
                    this.storage.set("offlineDataToday", data);
                },
                (error: any) => {
                    let toast = this.toastCtrl.create({
                        message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                        duration: 3500,
                        position: "top"
                    });
                    toast.present();
                    console.log("Http error is: " + error);
                });
    }

    setOfflineDataYesterday() {
        const headers = new HttpHeaders();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        const options = {headers: headers};
        const data = {
            userId: localStorage.getItem('userId')
        };
        this.http
            .post('http://gazoh.net/getyesterday.php', data, options)
            .subscribe((data: any) => {
                    console.log("Offline data set in storage: offlineDataYesterday");
                    this.storage.set("offlineDataYesterday", data);
                },
                (error: any) => {
                    let toast = this.toastCtrl.create({
                        message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                        duration: 3500,
                        position: "top"
                    });
                    toast.present();
                    console.log("Http error is: " + error);
                });
    }

    setOfflineData3DaysAgo() {
        const headers = new HttpHeaders();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        const options = {headers: headers};
        const data = {
            userId: localStorage.getItem('userId')
        };
        this.http
            .post('http://gazoh.net/get3daysago.php', data, options)
            .subscribe((data: any) => {
                    console.log("Offline data set in storage: offlineData3DaysAgo");
                    this.storage.set("offlineData3DaysAgo", data);
                },
                (error: any) => {
                    let toast = this.toastCtrl.create({
                        message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                        duration: 3500,
                        position: "top"
                    });
                    toast.present();
                    console.log("Http error is: " + error);
                });
    }

    setHideArticle(postId) {
        console.log("Hide " + postId);
        var headers = new HttpHeaders();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        let options = {headers: headers};
        this.http.post('http://gazoh.net/hidearticle.php', postId, options).subscribe(res => {
            if (res == "hidden") {
                let toast = this.toastCtrl.create({
                    message: "Artikel " + postId + " verborgen",
                    duration: 2500,
                    position: "top",
                    showCloseButton: true,
                    closeButtonText: "OK"
                });
                toast.present();
            }
        });
    }

    getOfflineDataToday() {
        this.datepicker = 'vandaag;'
        this.storage.get('offlineDataVandaag').then((val) => {
            this.items = val;
            this.artikelen = val;
            if (this.items) {
                this.items.sort(function (a, b) {
                    return +new Date(b.datum) - +new Date(a.datum);
                });
            }
            console.log('Data:' + val);
            console.log('Offline data is imported.');
        });
    }

    getOfflineDataYesterday() {
        this.datepicker = 'gisteren';
        this.storage.get('offlineDataGisteren').then((val) => {
            this.items = val;
            this.artikelen = val;
            if (this.items) {
                this.items.sort(function (a, b) {
                    return +new Date(b.datum) - +new Date(a.datum);
                });
            }
            console.log('Data:' + val);
            console.log('Offline data is imported.');
        });
    }

    getOfflineData3DaysAgo() {
        this.datepicker = 'driedagengeleden';
        this.storage.get('offlineData3DagenGeleden').then((val) => {
            this.items = val;
            this.artikelen = val;
            if (this.items) {
                this.items.sort(function (a, b) {
                    return +new Date(b.datum) - +new Date(a.datum);
                });
            }
            console.log('Data:' + val);
            console.log('Offline data is imported.');
        });
    }

    goLijstWeerPage() {
        this.navCtrl.push(LijstweerPage);
    }

    // weerData() {
    //     this.presentLoadingCustom();
    //     // Locatie opvragen
    //     this.geolocation.getCurrentPosition().then((resp) => {
    //     }).catch((error) => {
    //         console.log('Error getting location', error);
    //     });
    //
    //     // Data van het weer
    //     const headers = new HttpHeaders();
    //     headers.append("Accept", 'application/json');
    //     headers.append('Content-Type', 'application/json');
    //     const options = {headers: headers};
    //     this.http.get('https://api.openweathermap.org/data/2.5/forecast?id=2751282&appid=761f22645cd9591d1eba076e0fd173d9', options).subscribe(data => {
    //         this.dataweer = Object.keys(data).map(key => data[key]);
    //         // Dagen tempratuur to Celcius
    //
    //         // Dag 1
    //         this.dag1NaarCelcius12uur = this.dataweer[3][0].main.temp - 273.15;
    //         this.dag1NaarCelcius15uur = this.dataweer[3][1].main.temp - 273.15;
    //         this.dag1NaarCelcius18uur = this.dataweer[3][2].main.temp - 273.15;
    //         this.dag1NaarCelcius21uur = this.dataweer[3][3].main.temp - 273.15;
    //         // -----
    //         // Dag 2
    //         this.dag2NaarCelcius00uur = this.dataweer[3][4].main.temp - 273.15;
    //         this.dag2NaarCelcius03uur = this.dataweer[3][5].main.temp - 273.15;
    //         this.dag2NaarCelcius06uur = this.dataweer[3][6].main.temp - 273.15;
    //         this.dag2NaarCelcius09uur = this.dataweer[3][7].main.temp - 273.15;
    //         this.dag2NaarCelcius12uur = this.dataweer[3][8].main.temp - 273.15;
    //         this.dag2NaarCelcius15uur = this.dataweer[3][9].main.temp - 273.15;
    //         this.dag2NaarCelcius18uur = this.dataweer[3][10].main.temp - 273.15;
    //         this.dag2NaarCelcius21uur = this.dataweer[3][11].main.temp - 273.15;
    //         // -----
    //         // Dag 3
    //         this.dag3NaarCelcius00uur = this.dataweer[3][12].main.temp - 273.15;
    //         this.dag3NaarCelcius03uur = this.dataweer[3][13].main.temp - 273.15;
    //         this.dag3NaarCelcius06uur = this.dataweer[3][14].main.temp - 273.15;
    //         this.dag3NaarCelcius09uur = this.dataweer[3][15].main.temp - 273.15;
    //         this.dag3NaarCelcius12uur = this.dataweer[3][16].main.temp - 273.15;
    //         this.dag3NaarCelcius15uur = this.dataweer[3][17].main.temp - 273.15;
    //         this.dag3NaarCelcius18uur = this.dataweer[3][18].main.temp - 273.15;
    //         this.dag3NaarCelcius21uur = this.dataweer[3][19].main.temp - 273.15;
    //         // -----
    //         // Dag 4
    //         this.dag4NaarCelcius00uur = this.dataweer[3][20].main.temp - 273.15;
    //         this.dag4NaarCelcius03uur = this.dataweer[3][21].main.temp - 273.15;
    //         this.dag4NaarCelcius06uur = this.dataweer[3][22].main.temp - 273.15;
    //         this.dag4NaarCelcius09uur = this.dataweer[3][23].main.temp - 273.15;
    //         this.dag4NaarCelcius12uur = this.dataweer[3][24].main.temp - 273.15;
    //         this.dag4NaarCelcius15uur = this.dataweer[3][25].main.temp - 273.15;
    //         this.dag4NaarCelcius18uur = this.dataweer[3][26].main.temp - 273.15;
    //         this.dag4NaarCelcius21uur = this.dataweer[3][27].main.temp - 273.15;
    //         // -----
    //         // Dag 5
    //         this.dag5NaarCelcius00uur = this.dataweer[3][28].main.temp - 273.15;
    //         this.dag5NaarCelcius03uur = this.dataweer[3][29].main.temp - 273.15;
    //         this.dag5NaarCelcius06uur = this.dataweer[3][30].main.temp - 273.15;
    //         this.dag5NaarCelcius09uur = this.dataweer[3][31].main.temp - 273.15;
    //         this.dag5NaarCelcius12uur = this.dataweer[3][32].main.temp - 273.15;
    //         this.dag5NaarCelcius15uur = this.dataweer[3][33].main.temp - 273.15;
    //         this.dag5NaarCelcius18uur = this.dataweer[3][34].main.temp - 273.15;
    //         this.dag5NaarCelcius21uur = this.dataweer[3][35].main.temp - 273.15;
    //         // -----
    //         // --------------
    //         // Afronden naar graden
    //         // Dag 1
    //         this.dag1NaarCelcius12uurMathRound = Math.round(this.dag1NaarCelcius15uur);
    //         this.dag1NaarCelcius15uurMathRound = Math.round(this.dag1NaarCelcius15uur);
    //         this.dag1NaarCelcius18uurMathRound = Math.round(this.dag1NaarCelcius18uur);
    //         this.dag1NaarCelcius21uurMathRound = Math.round(this.dag1NaarCelcius21uur);
    //         // -----
    //         // Dag 2
    //         this.dag2NaarCelcius00uurMathRound = Math.round(this.dag2NaarCelcius00uur);
    //         this.dag2NaarCelcius03uurMathRound = Math.round(this.dag2NaarCelcius03uur);
    //         this.dag2NaarCelcius06uurMathRound = Math.round(this.dag2NaarCelcius06uur);
    //         this.dag2NaarCelcius09uurMathRound = Math.round(this.dag2NaarCelcius09uur);
    //         this.dag2NaarCelcius12uurMathRound = Math.round(this.dag2NaarCelcius12uur);
    //         this.dag2NaarCelcius15uurMathRound = Math.round(this.dag2NaarCelcius15uur);
    //         this.dag2NaarCelcius18uurMathRound = Math.round(this.dag2NaarCelcius18uur);
    //         this.dag2NaarCelcius21uurMathRound = Math.round(this.dag2NaarCelcius21uur);
    //         // -----
    //         // Dag 3
    //         this.dag3NaarCelcius00uurMathRound = Math.round(this.dag3NaarCelcius00uur);
    //         this.dag3NaarCelcius03uurMathRound = Math.round(this.dag3NaarCelcius03uur);
    //         this.dag3NaarCelcius06uurMathRound = Math.round(this.dag3NaarCelcius06uur);
    //         this.dag3NaarCelcius09uurMathRound = Math.round(this.dag3NaarCelcius09uur);
    //         this.dag3NaarCelcius12uurMathRound = Math.round(this.dag3NaarCelcius12uur);
    //         this.dag3NaarCelcius15uurMathRound = Math.round(this.dag3NaarCelcius15uur);
    //         this.dag3NaarCelcius18uurMathRound = Math.round(this.dag3NaarCelcius18uur);
    //         this.dag3NaarCelcius21uurMathRound = Math.round(this.dag3NaarCelcius21uur);
    //         // -----
    //         // Dag 4
    //         this.dag4NaarCelcius00uurMathRound = Math.round(this.dag4NaarCelcius00uur);
    //         this.dag4NaarCelcius03uurMathRound = Math.round(this.dag4NaarCelcius03uur);
    //         this.dag4NaarCelcius06uurMathRound = Math.round(this.dag4NaarCelcius06uur);
    //         this.dag4NaarCelcius09uurMathRound = Math.round(this.dag4NaarCelcius09uur);
    //         this.dag4NaarCelcius12uurMathRound = Math.round(this.dag4NaarCelcius12uur);
    //         this.dag4NaarCelcius15uurMathRound = Math.round(this.dag4NaarCelcius15uur);
    //         this.dag4NaarCelcius18uurMathRound = Math.round(this.dag4NaarCelcius18uur);
    //         this.dag4NaarCelcius21uurMathRound = Math.round(this.dag4NaarCelcius21uur);
    //         // -----
    //         // Dag 5
    //         this.dag5NaarCelcius00uurMathRound = Math.round(this.dag5NaarCelcius00uur);
    //         this.dag5NaarCelcius03uurMathRound = Math.round(this.dag5NaarCelcius03uur);
    //         this.dag5NaarCelcius06uurMathRound = Math.round(this.dag5NaarCelcius06uur);
    //         this.dag5NaarCelcius09uurMathRound = Math.round(this.dag5NaarCelcius09uur);
    //         this.dag5NaarCelcius12uurMathRound = Math.round(this.dag5NaarCelcius12uur);
    //         this.dag5NaarCelcius15uurMathRound = Math.round(this.dag5NaarCelcius15uur);
    //         this.dag5NaarCelcius18uurMathRound = Math.round(this.dag5NaarCelcius18uur);
    //         this.dag5NaarCelcius21uurMathRound = Math.round(this.dag5NaarCelcius21uur);
    //         // -----
    //         // Variablen van de JSON
    //         this.plaatsnaam = this.dataweer[4].name.replace('Gemeente', '').replace('East', '');
    //         this.country = this.dataweer[4].country;
    //         this.weather = this.dataweer[3][0].weather[0].description
    //         // Description weer
    //         this.dag1Weather12uur = this.dataweer[3][0].weather[0].description;
    //         this.dag1Weather15uur = this.dataweer[3][1].weather[0].description;
    //         this.dag1Weather18uur = this.dataweer[3][2].weather[0].description;
    //         this.dag1Weather21uur = this.dataweer[3][3].weather[0].description;
    //         // Neerslag
    //         this.dag1Weather12uurHumidity = this.dataweer[3][0].main.humidity;
    //         this.dag1Weather15uurHumidity = this.dataweer[3][1].main.humidity;
    //         this.dag1Weather18uurHumidity = this.dataweer[3][2].main.humidity;
    //         this.dag1Weather21uurHumidity = this.dataweer[3][3].main.humidity;
    //         // Datum Tijd
    //         this.dag1DatumTijd12uur = this.dataweer[3][0].dt_txt
    //         this.dag1DatumTijd15uur = this.dataweer[3][1].dt_txt;
    //         this.dag1DatumTijd18uur = this.dataweer[3][2].dt_txt;
    //         this.dag1DatumTijd21uur = this.dataweer[3][3].dt_txt;
    //         // Wind Seconden per uur naar km per uur
    //         this.windNaarKm12uurDag1 = this.dataweer[3][0].wind.speed * 3.6;
    //         this.windNaarKm15uurDag1 = this.dataweer[3][1].wind.speed * 3.6;
    //         this.windNaarKm18uurDag1 = this.dataweer[3][2].wind.speed * 3.6;
    //         this.windNaarKm21uurDag1 = this.dataweer[3][3].wind.speed * 3.6;
    //         // Wind Seconden per uur naar km per uur AFRONDEN
    //         this.windNaarKm12uurDag1MathRound = this.windNaarKm12uurDag1.toPrecision(2);
    //         this.windNaarKm15uurDag1MathRound = this.windNaarKm15uurDag1.toPrecision(2);
    //         this.windNaarKm18uurDag1MathRound = this.windNaarKm18uurDag1.toPrecision(2);
    //         this.windNaarKm21uurDag1MathRound = this.windNaarKm21uurDag1.toPrecision(2);
    //         //
    //
    //
    //         console.log(this.dataweer);
    //         console.log(this.dag1Weather12uur);
    //     });
    // }
}
