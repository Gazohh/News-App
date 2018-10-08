import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

    title: string;
    description: string;
    link: string;
    image: string;
    datum: string;
    site: string;
    id: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      if(this.navParams.get("record"))
      {
          this.selectEntry(this.navParams.get("record"));
          console.log(this.navParams.get("record"));
      }
      else
      {
          this.navCtrl.setRoot("CategoryPage");
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NieuwsPage');
  }

  selectEntry(item: any) : void
  {
    this.title = item.title;
    this.image = item.image;
    this.description = item.description;
    this.link = item.link;
    this.site = item.site;
    this.datum = item.datum;
    this.id = item.id;
  }

    htmlToPlaintext(text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    }

}
