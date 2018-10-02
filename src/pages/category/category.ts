import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedPage } from "../feed/feed";
import { SportPage } from "../sport/sport";
import { MenuController } from "ionic-angular";
import { EconomiePage } from "../economie/economie";
import { ToastController } from 'ionic-angular';
import * as $ from 'jquery';

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public toastCtrl: ToastController) {
    this.menuCtrl.enable(true, 'myMenu');
  }

  goFeed() {
    this.navCtrl.setRoot(FeedPage);
  }

  goSport() {
    this.navCtrl.setRoot(SportPage);
  }

  goEconomie() {
    this.navCtrl.setRoot(EconomiePage);
  }

  newMenu() {
    const toast = this.toastCtrl.create({
      message: 'Test',
      cssClass: 'backgroundToastMenu',
      showCloseButton: true,
      closeButtonText: "OK"

    });
    toast.present();
  }
}
