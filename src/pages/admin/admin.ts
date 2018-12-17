import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Events} from 'ionic-angular';
import { ToastController, AlertController } from 'ionic-angular';



/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-admin',
    templateUrl: 'admin.html',
})
export class AdminPage {

    checklist: any;
    gebruikers: any;
    artikelen: any;
    gebruikerslijst: any;
    artikelenlijst: any;
    isSearchbaropened = false;
    public data: any;
    public key: string = "items";
    public items: any = 0;
    public currentTheme: string;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public http: HttpClient,
                public events: Events,
                public toastCtrl: ToastController,
                private alertCtrl: AlertController) {

        // Theme
        if(localStorage.getItem("themeColor"))
        {
            this.currentTheme = localStorage.getItem("themeColor")
            console.log(this.currentTheme);
        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AdminPage');
    }

    selectGebruikers() {
        this.checklist = "gebruikers";
        this.http
            .get('http://gazoh.net/getuser.php')
            .subscribe((data: any) => {
                    this.gebruikerslijst = data;
                },
                (error: any) => {
                    console.dir(error);
                });
    }

    ionViewWillEnter() {
        this.checklist = "artikelen";
        this.selectArtikelen();
    }

    selectArtikelen() {
        this.checklist = "artikelen";
        this.http
            .get('http://gazoh.net/getverborgen.php')
            .subscribe((data: any) => {
                    this.artikelenlijst = data;
                },
                (error: any) => {
                    console.dir(error);
                });
    }

    htmlToPlaintext(text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    }

    viewEntry(param: any): void {
        this.navCtrl.push('NieuwsPage', param);
    }

    resetChanges() {
        this.http
            .get('http://gazoh.net/getdata.php')
            .subscribe((data: any) => {
                    this.items = data;
                },
                (error: any) => {
                    console.dir(error);
                });
        this.isSearchbaropened = false;
    }

    search(event) {
        let serVal = event.target.value;
        if (serVal && serVal.trim() != '') {
            this.items = this.items.filter((item) => {
                return (item.title.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
            })
        }
    }

    // Alert of je de artikel wilt laten zien
    showConfirmHide(postId) {
      const confirm = this.alertCtrl.create({
        title: 'Publiceren',
        message: 'Weetje zeker dat je deze artikel wilt publiceren?',
        buttons: [
          {
            text: 'Niet Akkoord',
            handler: () => {

            }
          },
          {
            text: 'Akkoord',
            handler: () => {
              // Show artikel
              console.log("Show " + postId);
              const headers = new HttpHeaders();
              headers.append("Accept", 'application/json');
              headers.append('Content-Type', 'application/json');
              const options = { headers: headers };
              const data = {
                  articleId: postId
              };
              this.http.post('http://www.gazoh.net/showarticle.php', data, options).subscribe(res => {
                  if (res == 'showed')
                  {
                      this.selectArtikelen();
                      let toast = this.toastCtrl.create({
                          message: "Artikel " + postId + " gepubliceerd",
                          duration: 2500,
                          position: "bottom"
                      });
                      toast.present();
                  }
              });
            }
          }
        ]
      });
      confirm.present();
    }
}
