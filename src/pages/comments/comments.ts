import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AlertController } from 'ionic-angular';
import { FeedPage } from "../feed/feed";

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
    userCommentID:string;
    username: string;
    pictureprofile: any;
    commentDate:any;
    userRol: any;
    comment: string;
    public comments:any=[];
    confirmAlert:any;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public http: HttpClient,
                public alertCtrl: AlertController) {
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
                this.userRol = this.dataUser.rol;
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
                  console.log(data);
                  this.getComments();
                }
                this.comment = "";
            });
    }

    deleteComment(commentId)
    {
        this.confirmAlert = this.alertCtrl.create({
            title: "Verwijder",
            message: "Als je reactie verwijderd word kan het niet ongedaan gemaakt worden",
            buttons: [
                {
                    text: 'Annuleer',
                    handler: () => {
                        console.log("Clicked cancel")
                    }
                },
                {
                    text: 'Verwijder',
                    handler: () => {
                        const headers = new HttpHeaders();

                        headers.append("Accept", 'application/json');

                        headers.append('Content-Type', 'application/json');

                        const options = {headers: headers};

                        const data = {

                            articleId: this.articleId,
                            commentId: commentId,
                        };
                        this.http.post('http://gazoh.net/deletecomment.php', data, options)
                            .subscribe(data => {
                                if(data == "comment deleted")
                                {
                                    console.log(data);
                                    this.getComments();
                                }
                            });
                    }
                }
            ]
        });
        this.confirmAlert.present();
    }

    returnFeed() {
      this.navCtrl.setRoot(FeedPage);
    }
}
