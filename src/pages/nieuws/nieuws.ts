import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser';
import {Network} from "@ionic-native/network";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SocialSharing} from '@ionic-native/social-sharing';
import {ToastController} from 'ionic-angular';
import {CommentsPage} from "../comments/comments";




/**
 * Generated class for the NieuwsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-nieuws',
    templateUrl: 'nieuws.html',
})
export class NieuwsPage {
    browser: InAppBrowser;
    title: string;
    description: string;
    link: string;
    image: string;
    datum: string;
    site: string;
    id: string;
    url: string;
    liked: any;
    comments: any;
    likes: any;
    public disabled: boolean = false;
    public userId: string;
    public TIMER_IN_MS = 100;

    options: InAppBrowserOptions = {
        location: 'yes',
        hidden: 'no',
        clearcache: 'yes',
        clearsessioncache: 'yes',
        zoom: 'yes',//Android only
        hardwareback: 'yes',
        mediaPlaybackRequiresUserAction: 'no',
        shouldPauseOnSuspend: 'no', //Android only
        closebuttoncaption: 'Close', //iOS only
        disallowoverscroll: 'no', //iOS only
        toolbar: 'yes', //iOS only
        enableViewportScale: 'no', //iOS only
        allowInlineMediaPlayback: 'no',//iOS only
        presentationstyle: 'pagesheet',//iOS only
        fullscreen: 'yes',//Windows only
    };

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private inAppBrowser: InAppBrowser,
                public network: Network,
                private socialSharing: SocialSharing,
                public http: HttpClient,
                private toastCtrl: ToastController,
                private alertCtrl: AlertController) {
        if (this.navParams.get("record")) {
            this.selectEntry(this.navParams.get("record"));
            console.log(this.navParams.get("record"));
        } else {
            this.navCtrl.setRoot("CategoryPage");
        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad NieuwsPage');
    }

    selectEntry(item: any): void {
        this.title = item.title;
        this.image = item.image;
        this.description = item.description;
        this.link = item.link;
        this.site = item.site;
        this.datum = item.datum;
        this.id = item.id;
        this.liked = item.liked;
        this.comments = item.comments;
        this.likes = item.liked;
    }

    htmlToPlaintext(text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    }

    public openPagina(url) {
        const Options: InAppBrowserOptions = {
            zoom: 'no',
            location: 'yes',
            toolbar: 'yes',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            disallowoverscroll: 'yes',
            enableViewportScale: 'yes'
        }
        const browser = this.inAppBrowser.create(url, '_blank', Options);
        browser.show();
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
                });
        } else if (this.network.type == "none") {
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
}
