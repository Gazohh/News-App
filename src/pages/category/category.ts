import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedPage } from "../feed/feed";
import { SportPage } from "../sport/sport";
import { MenuController } from "ionic-angular";
import { EconomiePage } from "../economie/economie";
import { ToastController } from 'ionic-angular';
import { AutoPage } from "../auto/auto";
import { MisdaadPage } from "../misdaad/misdaad";
import { TechPage } from "../tech/tech";
import { VermaakPage } from "../vermaak/vermaak";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Events } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

    aantalartikelen: any;
    dataUser:any;
    username:any;
    profilepicture:any;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public menuCtrl: MenuController,
                public toastCtrl: ToastController,
                public http: HttpClient,
                public events: Events) {
    this.menuCtrl.enable(true, 'myMenu');
        var headers = new HttpHeaders();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        let options = { headers: headers };
        let data = {
            email: localStorage.getItem("userEmail"),
        };
        this.http.post('http://www.gazoh.net/getgebruiker.php', data, options)
            .subscribe(data => {this.dataUser = data;
            this.username = this.dataUser.username;
            this.profilepicture = this.dataUser.profilepicture;
                this.events.publish("username", this.username);
                this.events.publish("profilepicture", this.profilepicture);
            });
  }

    ionViewWillEnter()
    {
        this.getArtikelen();

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

  goMisdaad() {
      this.navCtrl.setRoot(MisdaadPage);
  }

  goTech() {
      this.navCtrl.setRoot(TechPage);
  }

  goAuto() {
    this.navCtrl.setRoot(AutoPage);
  }

  goVermaak() {
      this.navCtrl.setRoot(VermaakPage);
  }

    getArtikelen()
    {
        this.http
            .get('http://gazoh.net/aantalvandaag.php')
            .subscribe((data : any) =>
                {
                    this.aantalartikelen = data;
                },
                (error : any) =>
                {
                    console.dir(error);
                });
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
