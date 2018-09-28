import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FeedPage} from "../feed/feed";
import {SportPage} from "../sport/sport";
import { MenuController } from "ionic-angular";
import {EconomiePage} from "../economie/economie";

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

    constructor(public navCtrl: NavController, public navParams: NavParams,  public menuCtrl: MenuController) {
        this.menuCtrl.enable(true, 'myMenu');
    }

    goFeed() {
        this.navCtrl.push(FeedPage);
    }

    goSport() {
        this.navCtrl.push(SportPage);
    }

    goEconomie() {
        this.navCtrl.push(EconomiePage);
    }

}
