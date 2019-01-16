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
import {FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';
import {File} from '@ionic-native/file';

declare var cordova: any;

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
    public offlinepicture: any;
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
    public TIMER_IN_MS = 100;
    public slice = 5;
    public imagesOffline: any;
    public imagesTitle: string;
    storageDirectory: string = '';

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
        private storage: Storage,
        private transfer: FileTransfer,
        private file: File) {

        // Select Items
        this.selectOptions = {
            title: 'Bekijk'
        };

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
        } else if (this.network.type == 'none') {
            this.datepicker = "vandaag";
            let offlinealert = this.toastCtrl.create({
                message: "Er is geen internet verbinding, opgeslagen artikelen worden ingeladen.",
                duration: 2500,
                position: "bottom"
            });
            if (this.datepicker == "vandaag") {
                offlinealert.present();
                this.getOfflineDataToday();
            } else if (this.datepicker == "gisteren") {
                this.getOfflineDataYesterday();
            } else if (this.datepicker == "driedagengeleden") {
                this.getOfflineData3DaysAgo();
            }
        }
        if (localStorage.getItem("themeColor")) {
            this.currentTheme = localStorage.getItem("themeColor");
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
        if (this.network.type != "none") {
            if (this.datepicker == "vandaag") {
                this.load();
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
        } else if (this.network.type == "none") {
            if (this.datepicker == "vandaag") {
                this.getOfflineDataToday()
            } else if (this.datepicker == "gisteren") {
                this.getOfflineDataYesterday()
            } else if (this.datepicker == "driedagengeleden") {
                this.getOfflineData3DaysAgo();
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

    // Als netwerk online is of offline is
    ionViewWillEnter() {
        if (this.network.type != "none") {
            if (this.datepicker == "vandaag") {
                this.load();
            } else if (this.datepicker == "gisteren") {
                this.loadYesterday();
            } else if (this.datepicker == "driedagengeleden") {
                this.load3DaysAgo();
            }
        } else if (this.network.type == "none") {
            // Get offline data
            if (this.datepicker == "vandaag") {
                this.getOfflineDataToday();
            } else if (this.datepicker == "gisteren") {
                this.getOfflineDataYesterday();
            } else if (this.datepicker == "driedagengeleden") {
                this.getOfflineData3DaysAgo();
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
        if (this.network.type != "none") {
            this.navCtrl.push(CommentsPage, param);
        }
        else if (this.network.type == "none") {
            let toast = this.toastCtrl.create({
                message: "Actie kon niet worden uitgevoerd, geen internet verbinding gevonden.",
                duration: 3500,
                position: "bottom"
            });
            toast.present();
        }
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
        } else {
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
        } else {
            this.items = this.artikelen;
            this.isSearchbaropened = false;
        }
    }

    // Zodra de pagina is geladen
    ionViewDidLoad() {
        this.menuCtrl.enable(true, 'myMenu');
        if (this.network.type != "none") {
            this.setOfflineToday();
            this.setOfflineYesterday();
            this.setOffline3DaysAgo();
        }
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
            .post('http://gazoh.net/getdatafinal.php', data, options)
            .subscribe((data: any) => {
                    this.items = data;
                    this.artikelen = data;

                    console.log("Offline data set in storage: offlineDataToday");
                    this.items.sort(function (a, b) {
                        const dateA = new Date(a.datum.replace(' ', 'T'));
                        const dateB = new Date(b.datum.replace(' ', 'T'));
                        return dateB.getTime() - dateA.getTime();
                    });
                },
                (error: any) => {
                    let toast = this.toastCtrl.create({
                        message: "De pagina die u wilt bekijken kan niet worden weergegeven, bekijk uw internetverbinding",
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
            .post('http://gazoh.net/getdatafinal.php', data, options)
            .subscribe((data: any) => {
                    this.items = data;
                    this.artikelen = data;
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
            .post('http://gazoh.net/getdatayesterday.php', data, options)
            .subscribe((data: any) => {
                    this.items = data;
                    this.artikelen = data;
                    this.items.sort(function (a, b) {
                        const dateA = new Date(a.datum.replace(' ', 'T'));
                        const dateB = new Date(b.datum.replace(' ', 'T'));
                        return dateB.getTime() - dateA.getTime();
                    });
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
            .post('http://gazoh.net/getdata3daysago.php', data, options)
            .subscribe((data: any) => {
                    this.items = data;
                    this.artikelen = data;
                    console.log("Offline data set in storage: offlineData3DaysAgo");
                    this.storage.set("offlineData3DaysAgo", data);
                    this.items.sort(function (a, b) {
                        const dateA = new Date(a.datum.replace(' ', 'T'));
                        const dateB = new Date(b.datum.replace(' ', 'T'));
                        return dateB.getTime() - dateA.getTime();
                    });
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
                this.load();
            } else if (this.datepicker == "gisteren") {
                this.loadYesterday();
            } else if (this.datepicker == "driedagengeleden") {
                this.load3DaysAgo();
            }

        }
        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    }

    setLike(articleId) {
        if (this.network.type != "none") {
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
                    if (data == "liked") setTimeout(() => {
                        this.disabled = false;
                    }, this.TIMER_IN_MS);
                    {
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
        else if (this.network.type == "none") {
            let toast = this.toastCtrl.create({
                message: "Actie kon niet worden uitgevoerd, geen internet verbinding gevonden.",
                duration: 3500,
                position: "bottom"
            });
            toast.present();

            if (this.network.type == "none") {
                this.disabled = true;
            } else {
                this.disabled = false;
            }
        }
    }

    shareInfo(articleTitle, articleImage, articleLink) {
        this.socialSharing.share('Bekijk "' + articleTitle + '" via de Newsage app', "NewsAge", articleImage, articleLink);
    }

    dislike(articleId, articleTitle) {
        if(this.network.type !="none")
        {
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
        else if (this.network.type == "none") {
            let toast = this.toastCtrl.create({
                message: "Actie kon niet worden uitgevoerd, geen internet verbinding gevonden.",
                duration: 3500,
                position: "bottom"
            });
            toast.present();
        }
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
                    position: "bottom",
                    showCloseButton: true,
                    closeButtonText: "OK"
                });
                toast.present();
            }
        });
    }

    public test: any;

    getOfflineDataToday() {
        this.storage.get("offlineDataVandaag").then(data => {
            this.items = data;
            this.artikelen = data;
            this.items.sort(function (a, b) {
                const dateA = new Date(a.datum.replace(' ', 'T'));
                const dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        })
    }


    getOfflineDataYesterday() {
        this.storage.get("offlineDataGisteren").then(data => {
            this.items = data;
            this.artikelen = data;
            this.items.sort(function (a, b) {
                const dateA = new Date(a.datum.replace(' ', 'T'));
                const dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        })
    }

    getOfflineData3DaysAgo() {
        this.storage.get("offlineData3DagenGeleden").then(data => {
            this.items = data;
            this.artikelen = data;
            this.items.sort(function (a, b) {
                const dateA = new Date(a.datum.replace(' ', 'T'));
                const dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        })
    }

    goLijstWeerPage() {
        this.navCtrl.push(LijstweerPage);
    }

    doInfinite(infiniteScroll) {
        setTimeout(() => {
            this.slice += 5;
            infiniteScroll.complete();
        }, 200);
    }

    setOfflineToday() {
        if (this.network.type != "none") {
            const headers = new HttpHeaders();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            const options = {headers: headers};
            const data = {
                userId: localStorage.getItem('userId')
            };
            this.http
                .post('http://gazoh.net/getdatafinal.php', data, options)
                .subscribe((data: any) => {
                        this.storage.set("offlineDataVandaag", data);
                        console.log("Offline data set in storage: offlineDataVandaag");
                    },
                    (error: any) => {
                        let toast = this.toastCtrl.create({
                            message: "De pagina die u wilt bekijken kan niet worden weergegeven, bekijk uw internetverbinding",
                            duration: 3500,
                            position: "top"
                        });
                        toast.present();
                        console.log("Http error is: " + error);
                    });
        }
    }

    setOfflineYesterday() {
        if (this.network.type != "none") {
            const headers = new HttpHeaders();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            const options = {headers: headers};
            const data = {
                userId: localStorage.getItem('userId')
            };
            this.http
                .post('http://gazoh.net/getdatayesterday.php', data, options)
                .subscribe((data: any) => {
                        this.storage.set("offlineDataGisteren", data);
                        console.log("Offline data set in storage: offlineDataGisteren");
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

    setOffline3DaysAgo() {
        if (this.network.type != "none") {
            const headers = new HttpHeaders();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            const options = {headers: headers};
            const data = {
                userId: localStorage.getItem('userId')
            };
            this.http
                .post('http://gazoh.net/getdata3daysago.php', data, options)
                .subscribe((data: any) => {
                        this.storage.set("offlineData3DagenGeleden", data);
                        console.log("Offline data set in storage: offlineData3DagenGeleden");
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

}
