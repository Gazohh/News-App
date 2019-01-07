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
        } else if (this.network.type == 'none') {
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
                })
            } else if (this.datepicker == "gisteren") {
                this.storage.get("offlineDataYesterday").then(data => {
                    this.items = data;
                    this.artikelen = data;
                })
            } else if (this.datepicker == "driedagengeleden") {
                this.storage.get("offlineData3DaysAgo").then(data => {
                    this.items = data;
                    this.artikelen = data;
                })
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
        } else if (this.network.type == "none") {
            if (this.datepicker == "vandaag") {
                this.storage.get("offlineDataToday").then(data => {
                    this.items = data;
                    this.artikelen = data;
                    this.content.scrollToTop(0);
                })
            } else if (this.datepicker == "gisteren") {
                this.storage.get("offlineDataYesterday").then(data => {
                    this.items = data;
                    this.artikelen = data;
                    this.content.scrollToTop(0);
                })
            } else if (this.datepicker == "driedagengeleden") {
                this.storage.get("offlineData3DaysAgo").then(data => {
                    this.items = data;
                    this.artikelen = data;
                    this.content.scrollToTop(0);
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
            } else if (this.datepicker == "gisteren") {
                this.loadYesterday();
            } else if (this.datepicker == "driedagengeleden") {
                this.load3DaysAgo();
            }
        } else if (this.network.type == "none") {
            if (this.datepicker == "vandaag") {
                this.storage.get("offlineDataToday").then(data => {
                    this.items = data;
                    this.artikelen = data;
                })
            } else if (this.datepicker == "gisteren") {
                this.storage.get("offlineDataYesterday").then(data => {
                    this.items = data;
                    this.artikelen = data;
                })
            } else if (this.datepicker == "driedagengeleden") {
                this.storage.get("offlineData3DaysAgo").then(data => {
                    this.items = data;
                    this.artikelen = data;
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
                    this.items.sort(function (a, b) {
                        const dateA = new Date(a.datum);
                        const dateB = new Date(b.datum);
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
            console.log('Data:' + val);
            console.log('Offline data is imported.');
        });
    }

    getOfflineDataYesterday() {
        this.datepicker = 'gisteren';
        this.storage.get('offlineDataGisteren').then((val) => {
            this.items = val;
            this.artikelen = val;
            console.log('Data:' + val);
            console.log('Offline data is imported.');
        });
    }

    getOfflineData3DaysAgo() {
        this.datepicker = 'driedagengeleden';
        this.storage.get('offlineData3DagenGeleden').then((val) => {
            this.items = val;
            this.artikelen = val;
            console.log('Data:' + val);
            console.log('Offline data is imported.');
        });
    }

    goLijstWeerPage() {
        this.navCtrl.push(LijstweerPage);
    }
}
