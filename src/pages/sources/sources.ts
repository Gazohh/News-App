import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ToastController } from 'ionic-angular';
import {HttpHeaders, HttpClient} from "@angular/common/http";

/**
 * Generated class for the SourcesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sources',
  templateUrl: 'sources.html',
})
export class SourcesPage {

  @ViewChild('slider') slider: Slides;
  page = "0";
  public currentTheme: string;
  sourceData: any;
  NOS: boolean;
  TGF: boolean;
  NUNL: boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: HttpClient,
              public toastCtrl: ToastController) {

      // Theme
      if(localStorage.getItem("themeColor"))
      {
          this.currentTheme = localStorage.getItem("themeColor")
          console.log(this.currentTheme);
      }
  }

  selectedTab(ind) {
    this.slider.slideTo(ind);
  }

  ionViewWillEnter()
  {
      this.getSource();
  }

  getSource()
  {
      const headers = new HttpHeaders();

      headers.append("Accept", 'application/json');

      headers.append('Content-Type', 'application/json');

      const options = {headers: headers};

      const data = {
          userId: localStorage.getItem("userId"),
      };

      this.http.post('http://gazoh.net/getsources.php', data, options)
          .subscribe(data => {
              this.sourceData = data;
              this.NOS = this.sourceData[0].NOS;
              this.TGF = this.sourceData[0].TGF;
              this.NUNL = this.sourceData[0].NUNL;
              console.log(this.sourceData);
              console.log("NOS: " + this.NOS);
              console.log("Telegraaf : " +this.TGF);
              console.log("NU.NL: " + this.NUNL);
          });
  }

  subscribeSource(source)
  {
      const headers = new HttpHeaders();

      headers.append("Accept", 'application/json');

      headers.append('Content-Type', 'application/json');

      const options = {headers: headers};

      const data = {
          sourceName: source,
          userId: localStorage.getItem("userId"),
      };

      this.http.post('http://gazoh.net/subscribesource.php', data, options)
          .subscribe(data => {
              if(data == "subscribed")
              {
                  this.getSource();
                  let toast = this.toastCtrl.create({
                      message: "" + source + " is toegevoegd.",
                      duration: 3500,
                      position: "bottom"
                  });
                  toast.present();
              }
              else if (data == "error")
              {
                  let toast = this.toastCtrl.create({
                      message: "Er is iets niet goed gegaan, probeer het later opnieuw.",
                      duration: 3500,
                      position: "bottom"
                  });
                  toast.present();
              }
          });
  }

    unsubscribeSource(source)
    {
        const headers = new HttpHeaders();

        headers.append("Accept", 'application/json');

        headers.append('Content-Type', 'application/json');

        const options = {headers: headers};

        const data = {
            sourceName: source,
            userId: localStorage.getItem("userId"),
        };

        this.http.post('http://gazoh.net/unsubscribesource.php', data, options)
            .subscribe(data => {
                if(data == "unsubscribed")
                {
                    this.getSource();
                    let toast = this.toastCtrl.create({
                        message: "" + source + " is verwijderd.",
                        duration: 3500,
                        position: "bottom"
                    });
                    toast.present();
                }
                else if (data == "error")
                {
                    let toast = this.toastCtrl.create({
                        message: "Er is iets niet goed gegaan, probeer het later opnieuw.",
                        duration: 3500,
                        position: "bottom"
                    });
                    toast.present();
                }
            });
    }

  moveButton($event) {
    this.page = $event._snapIndex.toString();
  }


}
