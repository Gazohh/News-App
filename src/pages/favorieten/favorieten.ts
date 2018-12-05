import {Component} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CommentsPage} from "../comments/comments";


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

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public http: HttpClient,
                public toastCtrl: ToastController) {

    }

    ionViewWillEnter() {
        this.getFavs();
    }

    getFavs() {
        const headers = new HttpHeaders();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        const options = {headers: headers};
        const data = {
            userId: localStorage.getItem('userId')
        };

        this.http.post('http://www.gazoh.net/getliked.php', data, options).subscribe(res => {
            this.likedarticles = res;
            console.log(res);
        })
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
        this.navCtrl.push(CommentsPage, param);
    }

    dislike(articleId, articleTitle) {
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

}
