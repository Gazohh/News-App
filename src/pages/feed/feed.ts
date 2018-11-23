import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { MenuController } from "ionic-angular";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Network } from "@ionic-native/network";
import { ToastController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { LoadingController } from 'ionic-angular';
import { Searchbar } from 'ionic-angular';
import { CommentsPage } from "../comments/comments";
import { Events } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Content } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


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
      public datum : any;


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
        private alertCtrl: AlertController) {
        if (this.platform.is('cordova')) {
            this.platform.ready().then(() => {

                // Checkt of je een token hebt of niet zo niet dan word je naar home page direct
                if (!localStorage.getItem("sessionToken")) {
                    this.navCtrl.setRoot(HomePage);
                    toastinlog.present();
                }
            })
        }

        // screenOrientation kan draaien
        this.screenOrientation.unlock();

        if (this.network.type != "none") {
            //this.getData();
            this.datepicker = "vandaag";
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
        else {
            this.loadData();
            let toast = toastCtrl.create({
                message: "Geen internet verbinding, opgeslagen artikelen worden ingeladen.",
                duration: 2500,
                position: "top",
                showCloseButton: true,
                closeButtonText: "OK"
            });
            toast.present();
        }
        let toastinlog = toastCtrl.create({
            message: "Geen sessie gevonden, log opnieuw in.",
            duration: 2500,
            position: "top",
            showCloseButton: true,
            closeButtonText: "OK"
        });

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

    // ---------------------------------------------------------------------------------------------
    // Hier eindigt de constructor
    // ---------------------------------------------------------------------------------------------

    // Alert of je de artikel wilt hiden
    showConfirmHide(postId) {
        const confirm = this.alertCtrl.create({
            title: 'Verbergen',
            message: 'Weetje zeker dat je deze artikel wilt verbergen?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: () => {

                    }
                },
                {
                    text: 'Agree',
                    handler: () => {

                        // Hide artikel
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
                }
            ]
        });
        confirm.present();
    }

    // Custom Spinner loader
    presentLoadingCustom() {
        let loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: `
     <div class="custom-spinner-container"><img src="http://gazoh.net/images/spinner.svg"><br> <p>Laden...</p>
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
        }
    }

    // Zodra je de searchbar canceled
    resetChanges() {
        this.http
            .get('http://gazoh.net/getdata.php')
            .subscribe((data: any) => {
                    this.items = data;
                },
                (error: any) => {
                    console.dir(error);
                });
        this.isSearchbaropened = false;
    }

    // setFocus() {
    //     this.searchbar.setFocus();
    // }

    // Zodra de pagina is geladen
    ionViewDidLoad() {
        this.menuCtrl.enable(true, 'myMenu');
    }

    // Zodra die op de pagina is gekomen
    ionViewDidEnter() {
        this.content.ionScrollEnd.subscribe((data) => {
            let dimensions = this.content.getContentDimensions();
            let scrollTop = this.content.scrollTop;
            let contentHeight = dimensions.contentHeight;
            let scrollHeight = dimensions.scrollHeight;

            if ((scrollTop + contentHeight + 20) > scrollHeight) {
                this.shouldScrollDown = true;
                this.showScrollButton = false;
            } else {
                this.shouldScrollDown = false;
                this.showScrollButton = true;
            }
            console.log(contentHeight);
        });
    }

    // Segment Alle nieuws van Vandaag
    load() {
        this.datepicker = "vandaag";
        this.http
            .get('http://gazoh.net/getdata.php')
            .subscribe((data: any) => {
                    this.items = data;
                    this.artikelen = data;
                    if(this.items) {
                      this.items.sort(function(a, b) {
                        return new Date(b.datum) - new Date(a.datum);
                      });
                    }
                },
                (error: any) => {
                    console.dir(error);
                });
    }

    loadWithSpinner() {
        this.datepicker = "vandaag";
        this.http
            .get('http://gazoh.net/getdata.php')
            .subscribe((data: any) => {
                    this.items = data;
                    this.artikelen = data;
                    if(this.items) {
                      this.items.sort(function(a, b) {
                        return new Date(b.datum) - new Date(a.datum);
                      });
                    }
                },
                (error: any) => {
                    console.dir(error);
                });
        this.presentLoadingCustom();
    }

    // Segment Alle nieuws van Gisteren
    loadYesterday() {
        this.datepicker = "gisteren";
        this.http.get('http://gazoh.net/getyesterday.php').subscribe((data: any) => {
                this.items = data;
                this.artikelen = data;
                if(this.items) {
                  this.items.sort(function(a, b) {
                    return new Date(b.datum) - new Date(a.datum);
                  });
                }
            },
            (error: any) => {
                console.dir(error);
            });
        this.presentLoadingCustom();
    }

    // Segment Alle nieuws van Gisteren
    load3DaysAgo() {
        this.datepicker = "driedagengeleden";
        this.http
            .get('http://gazoh.net/get3daysago.php')
            .subscribe((data: any) => {
                    this.items = data;
                    this.artikelen = data;
                    if(this.items) {
                      this.items.sort(function(a, b) {
                        return new Date(b.datum) - new Date(a.datum);
                      });
                    }
                },
                (error: any) => {
                    console.dir(error);
                });
        this.presentLoadingCustom();

    }

    // De pull to refresh
    doRefresh(refresher) {
        if (this.datepicker == "vandaag") {
            this.http
                .get('http://gazoh.net/getdata.php')
                .subscribe((data: any) => {
                        this.items = data;
                        this.artikelen = data;
                        if(this.items) {
                          this.items.sort(function(a, b) {
                            return new Date(b.datum) - new Date(a.datum);
                          });
                        }
                    },
                    (error: any) => {
                        console.dir(error);
                    });
        }
        else if (this.datepicker == "gisteren") {
            this.http
                .get('http://gazoh.net/getyesterday.php')
                .subscribe((data: any) => {
                        this.items = data;
                        this.artikelen = data;
                        if(this.items) {
                          this.items.sort(function(a, b) {
                            return new Date(b.datum) - new Date(a.datum);
                          });
                        }
                    },
                    (error: any) => {
                        console.dir(error);
                    });
        }
        else if (this.datepicker == "driedagengeleden") {
            this.http
                .get('http://gazoh.net/get3daysago.php')
                .subscribe((data: any) => {
                        this.items = data;
                        this.artikelen = data;
                        if(this.items) {
                          this.items.sort(function(a, b) {
                            return new Date(b.datum) - new Date(a.datum);
                          });
                        }
                    },
                    (error: any) => {
                        console.dir(error);
                    });
        }

        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    }

    doInfinite(infiniteScroll) {
        this.http
            .get('http://gazoh.net/getdata.php')
            .subscribe((data: any) => {
                    this.items = this.items.push(data);
                    infiniteScroll.complete();
                },
                (error: any) => {
                    console.dir(error);
                });
        console.log('Begin async operation');
    }

    setLike(articleId) {
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
                if (data == "comment published") {
                    console.log(data);
                }
            });
    }

    dislike(articleId) {
        const headers = new HttpHeaders();

        headers.append("Accept", 'application/json');

        headers.append('Content-Type', 'application/json');

        const options = {headers: headers};

        const data = {

            articleId: articleId,
            userId: this.userId

        };
        this.http.post('http://gazoh.net/unlike.php', data, options)
            .subscribe(data => {
                if (data == "unliked") {
                    console.log(data);
                }
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
        // Het weer
        getRemoteData()
        {
            this.presentLoadingCustom();
            this.http.get('https://xml.buienradar.nl/').subscribe((data: any) => {
                    this.dataweer = data;
                    this.title = this.dataweer.title;
                    this.about = this.dataweer.about;
                    console.log(this.dataweer);
                },
                (error: any) => {
                    console.dir(error);
                });
        }
}
