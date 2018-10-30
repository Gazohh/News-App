import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ProfielPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profiel',
  templateUrl: 'profiel.html',
})
export class ProfielPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  wijzigWachtwoord() {
    const prompt = this.alertCtrl.create({
       title: 'Wachtwoord wijzigen',
       inputs: [
         {
           name: 'oudWachtwoord',
           placeholder: 'Oude wachtwoord'
         },
         {
           name: 'NieuweWachtwoord1',
           placeholder: 'Nieuwe wachtwoord'
         },
         {
           name: 'NieuweWachtwoord2',
           placeholder: 'Herhaal wachtwoord'
         },
       ],
       buttons: [
         {
           text: 'Cancel',
           handler: data => {
             console.log('Cancel clicked');
           }
         },
         {
           text: 'Wijzigen',
           handler: data => {
             console.log('Saved clicked');
           }
         }
       ]
     });
     prompt.present();
   }

   

}
