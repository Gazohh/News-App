import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {HttpClient, HttpHeaders} from "@angular/common/http";

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

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public http: HttpClient) {

    }

    ionViewWillEnter()
    {
        this.getFavs(localStorage.getItem('userId'));
    }

    getFavs(userId) {
        const headers = new HttpHeaders();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        const options = {headers: headers};
        const data = {
            user: userId
        };

        this.http.post('http://www.gazoh.net/getliked.php', data, options).subscribe(res => {
            this.likedarticles = res;
            console.log(res);
        })

    }

}
