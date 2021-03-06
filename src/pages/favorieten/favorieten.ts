import {Component} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CommentsPage} from "../comments/comments";
import {Storage} from '@ionic/storage';
import {Network} from "@ionic-native/network";


/**
 * Generated class for the FavorietenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
    selector: 'page-favorieten',
    templateUrl: 'favorieten.html',
})
export class FavorietenPage {

    likedarticles: any;
    articleId: string;
    articleTitle: string;
    articleDesc: string;
    articlePublisher: string;
    articleLikes: string;
    articleComments: string;
    articleStatus: string;
    likeId: string;
    likedArticleId: string;
    likedUserArticle: string;
    likeDate: string;
    liked: string;
    public currentTheme: string;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public http: HttpClient,
                public toastCtrl: ToastController,
                public storage: Storage,
                public network: Network) {

        // Theme
        if (localStorage.getItem("themeColor")) {
            this.currentTheme = localStorage.getItem("themeColor")
            console.log(this.currentTheme);
        }

    }

    ionViewWillEnter() {
        this.getFavs();
    }

    getFavs() {
        if (this.network.type != "none") {
            const headers = new HttpHeaders();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            const options = {headers: headers};
            const data = {
                userId: localStorage.getItem('userId')
            };

            this.http.post('http://www.gazoh.net/getliked.php', data, options).subscribe(res => {
                this.likedarticles = res;
                this.storage.set("offlineFavorieten", res);
                if (this.likedarticles) {
                    this.likedarticles.sort(function (a, b) {
                        return +new Date(b.datum) - +new Date(a.datum);
                    });
                }
                console.log(res);
            })
        }
        else if (this.network.type == "none") {
            this.storage.get("offlineFavorieten").then((data) => {
                this.likedarticles = data;
                console.log("Favorites received from Storage: offlineFavorieten");
            })
        }
    }

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
        else if(this.network.type == "none")
        {
            let toast = this.toastCtrl.create({
                message: "Actie kon niet worden uitgevoerd, geen internet verbinding gevonden.",
                duration: 3500,
                position: "bottom"
            });
            toast.present();
        }
    }

    dislike(articleId, articleTitle) {
        if (this.network.type != "none") {
            const headers = new HttpHeaders();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            const options = {headers: headers};
            const data = {
                articleId: articleId,
                userId: localStorage.getItem('userId')
            };
            this.http.post('http://gazoh.net/unlike.php', data, options)
                .subscribe(data => {
                    if (data == "unliked") {
                        this.getFavs();
                        let toast = this.toastCtrl.create({
                            message: articleTitle + " is verwijderd uit je favorieten!",
                            duration: 2500,
                            position: "bottom"
                        });
                        toast.present();
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
        }
    }

}
