import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from "@angular/common/http";

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
  username: string;
  pictureprofile: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    const headers = new HttpHeaders();

    headers.append("Accept", 'application/json');

    headers.append('Content-Type', 'application/json');

    const options = { headers: headers };

    const data = {

      email: localStorage.getItem('userEmail'),

    };
    this.http.post('http://gazoh.net/getgebruiker.php', data, options)
      .subscribe(data => {
      this.dataUser = data;
        this.username = this.dataUser.username;
        this.pictureprofile = this.dataUser.profilepicture;
      });
    }
}
