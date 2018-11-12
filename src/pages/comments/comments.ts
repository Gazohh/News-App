import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the CommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-comments',
    templateUrl: 'comments.html',
})
export class CommentsPage {

    dataUser: any;
    articleId: string;
    userId: string;
    username: string;
    pictureprofile: any;
    commentDate:any;
    comment: string;
    public comments:any=[];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public http: HttpClient,
                private toastCtrl: ToastController,) {
        if (this.navParams.get("record")) {
            this.selectEntry(this.navParams.get("record"));
            this.getComments();
        }
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
                this.userId = this.dataUser.id;
                this.username = this.dataUser.username;
                this.pictureprofile = this.dataUser.profilepicture;
            });
    }

    selectEntry(item: any): void {
        this.articleId = item.id;
    }

    getComments()
    {
        const headers = new HttpHeaders();

        headers.append("Accept", 'application/json');

        headers.append('Content-Type', 'application/json');

        const options = {headers: headers};

        const data = {

            articleId: this.articleId

        };
        this.http.post('http://gazoh.net/getcomment.php', data, options)
            .subscribe((data: any) => {
                this.comments = data;
                console.log("Hoi kaas" + this.comments)
            });
    }

    postComment() {
        const headers = new HttpHeaders();

        headers.append("Accept", 'application/json');

        headers.append('Content-Type', 'application/json');

        const options = {headers: headers};

        const data = {

            articleId: this.articleId,
            userId: this.userId,
            comment: this.comment

        };
        this.http.post('http://gazoh.net/setcomment.php', data, options)
            .subscribe(data => {
                if(data == "comment published")
                {
                    let toast = this.toastCtrl.create({
                        message: "Uw reactie is geplaatst",
                        duration: 2500,
                        position: "top"
                    });
                    toast.present();
                }
                this.comment = "";
            });
    }
}
