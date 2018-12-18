import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Events} from 'ionic-angular';
import { ToastController, AlertController } from 'ionic-angular';
import {CommentsPage} from "../comments/comments";
import {SocialSharing} from '@ionic-native/social-sharing';



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
    public disabled: boolean = false;
    public userId: string;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public http: HttpClient,
                public events: Events,
                public toastCtrl: ToastController,
                private alertCtrl: AlertController,
                private socialSharing: SocialSharing) {

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
    showConfirmPublish(postId) {
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

    // Doorverbinden naar de CommentsPage
    viewComments(param: any): void {
        this.navCtrl.push(CommentsPage, param);
    }

    shareInfo(articleTitle, articleImage, articleLink) {
        this.socialSharing.share('Bekijk "' + articleTitle + '" via de Newsage app', "NewsAge", articleImage, articleLink);
        //         then(() => {
        //             alert("Sharing success");
        //      Success!
        //         }).catch(() => {
        //      Error!
        //             alert("Share failed");
        //         });
    }

    //share voor feedpage
    // share(){
    //     this.socialSharing.shareWithOptions(options: {"Your Message", "image" , "link"})
    //         .then(()=>{
    //             console.log("WhatsApp share successful");
    //         }).catch((err)=> {
    //         console.log
    //     });
    //     this.socialSharing.shareViaWhatsApp("Your Message", "image" , "link")
    //         .then(()=>{
    //             console.log("WhatsApp share successful");
    //         }).catch((err)=> {
    //         console.log
    //     });
    //     this.socialSharing.shareViaFacebook("Hallo!", "Image", "Url")
    //         .then(()=>{
    //             console.log("Facebook share successful");
    //         }).catch((err)=> {
    //         console.log
    //     });
    // }

    setLike(articleId) {
        this.disabled = true;
        const headers = new HttpHeaders();

        headers.append("Accept", 'application/json');

        headers.append('Content-Type', 'application/json');

        const options = {headers: headers};

        const data = {
            articleId: articleId,
            userId: this.userId
        };

        this.http.post('http://gazoh.net/setlike.php', data, options)
            .subscribe(data => {
                if (data == "liked") {
                    this.disabled = false;
                }
            });
    }

    dislike(articleId, articleTitle) {
        const headers = new HttpHeaders();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        const options = {headers: headers};
        const data = {
            articleId: articleId,
            userId: this.userId
        };
        let alert = this.alertCtrl.create({
            title: "Dislike",
            message: "Weet je zeker dat je deze artikel wilt verwijderen uit je favorieten ?",
            buttons: [
                {
                    text: 'Annuleer',
                    handler: () => {
                        return;
                    }
                },
                {
                    text: 'Verwijder',
                    handler: () => {
                        this.http.post('http://gazoh.net/unlike.php', data, options)
                            .subscribe(data => {
                                if (data == "unliked") {
                                    let toast = this.toastCtrl.create({
                                        message: '"' + articleTitle + '"' + " is verwijderd uit je favorieten!",
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
        alert.present();
    }
}
