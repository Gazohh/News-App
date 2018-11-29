import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { MenuController } from "ionic-angular";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Network } from "@ionic-native/network";
import { ToastController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { LoadingController } from 'ionic-angular';
import { Searchbar } from 'ionic-angular';
import { CommentsPage } from "../comments/comments";
import { Events } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Content } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { SocialSharing } from '@ionic-native/social-sharing';


@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  @ViewChild('searchbar') searchbar: Searchbar;
  @ViewChild(Content) content: Content;

  public items: any = 0;
  public data: any;
  public artikelen: any;
  public key: string = "items";
  public isSearchbaropened = false;
  public datepicker: any;
  public vandaag: any;
  public gisteren: any;
  public driedagengeleden: any;
  public itemempty: boolean;
  public rol: any;
  public dataUser: any;
  public username: string;
  public userId: string;
  public profilepicture: any;
  public shouldScrollDown = true;
  public showScrollButton = false;
  public dataweer: any;
  public title: string;
  public about: string;
  public disabled: boolean = false;
  public selectOptions: any;


  // weer
  public dag1NaarCelcius: any;
  public dag2NaarCelcius: any;
  public dag3NaarCelcius: any;
  public dag4NaarCelcius: any;
  public dag5NaarCelcius: any;
  public dag1Afronden: any;
  public dag2Afronden: any;
  public dag3Afronden: any;
  public dag4Afronden: any;
  public dag5Afronden: any;
  public dag1MathRound: any;
  public dag2MathRound: any;
  public dag3MathRound: any;
  public dag4MathRound: any;
  public dag5MathRound: any;
  public plaatsnaam: any;
  public weather: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public http: HttpClient,
    public network: Network,
    private toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public platform: Platform,
    public events: Events,
    private screenOrientation: ScreenOrientation,
    private alertCtrl: AlertController,
    private socialSharing: SocialSharing,
    private geolocation: Geolocation) {

    // Select Items
    this.selectOptions = {
      title: 'Bekijk'
    };
    //

    if (this.platform.is('cordova')) {
      this.platform.ready().then(() => {

        // Checkt of je een token hebt of niet zo niet dan word je naar home page direct
        if (!localStorage.getItem("sessionToken")) {
          this.navCtrl.setRoot(HomePage);

        }
      })
    }

    // screenOrientation kan draaien
    this.screenOrientation.unlock();

    if (this.network.type != "none") {
      //this.getData();
      this.datepicker = "vandaag";
      if (this.datepicker == "vandaag") {
        this.load();
      }
      else if (this.datepicker == "gisteren") {
        this.loadYesterday();
      }
      else if (this.datepicker == "driedagengeleden") {
        this.load3DaysAgo();
      }


      if (this.platform.is('cordova')) {
        this.platform.ready().then(() => {

          // Checkt of je een token hebt of niet zo niet dan word je naar home page direct
          if (!localStorage.getItem("sessionToken")) {
            this.navCtrl.setRoot(HomePage);
            toastinlog.present();

          }
        })
      }

      // screenOrientation kan draaien
      this.screenOrientation.unlock();

      if (this.network.type != "none") {
        //this.getData();
        this.datepicker = "vandaag";
        if (this.datepicker == "vandaag") {
          this.load();
        }
        else if (this.datepicker == "gisteren") {
          this.loadYesterday();
        }
        else if (this.datepicker == "driedagengeleden") {
          this.load3DaysAgo();
        }
      }
      else {
        this.loadData();
        let toast = toastCtrl.create({
          message: "Geen internet verbinding, opgeslagen artikelen worden ingeladen.",
          duration: 2500,
          position: "top",
          showCloseButton: true,
          closeButtonText: "OK"
        });
        toast.present();
      }
      let toastinlog = toastCtrl.create({
        message: "Geen sessie gevonden, log opnieuw in.",
        duration: 2500,
        position: "top",
        showCloseButton: true,
        closeButtonText: "OK"
      });

      // Hij pakt alle rollen, usernames etc van de database
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
          this.rol = this.dataUser.rol;
          this.username = this.dataUser.username;
          this.userId = this.dataUser.id;
          this.profilepicture = this.dataUser.profilepicture;
          this.events.publish("username", this.username);
          this.events.publish("profilepicture", this.profilepicture);
        });
    }
  }

  // ---------------------------------------------------------------------------------------------
  // Hier eindigt de constructor
  // ---------------------------------------------------------------------------------------------

  onChange(SelectedValue) {
    SelectedValue = SelectedValue;
    console.log(SelectedValue);

    if (this.datepicker == "vandaag") {
      this.loadWithSpinner();
    }
    else if (this.datepicker == "gisteren") {
      this.loadYesterday();
    }
    else if (this.datepicker == "driedagengeleden") {
      this.load3DaysAgo();
    } else if (this.datepicker == "HetWeer") {
      this.weerData();
    }
  }


  weerData() {
    // Locatie opvragen
    this.geolocation.getCurrentPosition().then((resp) => {
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    // Data van het weer
    const headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    const options = { headers: headers };
    this.http.get('https://api.openweathermap.org/data/2.5/forecast?id=2749251&appid=761f22645cd9591d1eba076e0fd173d9', options).subscribe(data => {
      this.dataweer = Object.keys(data).map(key => data[key]);
      // Dagen tempratuur to Celcius
      this.dag1NaarCelcius = this.dataweer[3][0].main.temp - 273.15;
      this.dag2NaarCelcius = this.dataweer[3][7].main.temp - 273.15;
      this.dag3NaarCelcius = this.dataweer[3][15].main.temp - 273.15;
      this.dag4NaarCelcius = this.dataweer[3][23].main.temp - 273.15;
      this.dag5NaarCelcius = this.dataweer[3][31].main.temp - 273.15;
      // ----------------------------
      // Dagen Afronden
      this.dag1Afronden = this.dag1NaarCelcius.toPrecision(4);
      this.dag2Afronden = this.dag2NaarCelcius.toPrecision(4);
      this.dag3Afronden = this.dag3NaarCelcius.toPrecision(4);
      this.dag4Afronden = this.dag4NaarCelcius.toPrecision(4);
      this.dag5Afronden = this.dag5NaarCelcius.toPrecision(4);
      // --------------
      // Afronden naar graden
      this.dag1MathRound = Math.round(this.dag1Afronden);
      this.dag2MathRound = Math.round(this.dag2Afronden);
      this.dag3MathRound = Math.round(this.dag3Afronden);
      this.dag4MathRound = Math.round(this.dag4Afronden);
      this.dag5MathRound = Math.round(this.dag5Afronden);
      // --------------
      console.log(this.dag1MathRound);
      console.log(this.dag2MathRound);
      console.log(this.dag3MathRound);
      console.log(this.dag4MathRound);
      console.log(this.dag5MathRound);
      // Variablen van de JSON
      this.plaatsnaam = this.dataweer[4].name.replace('Gemeente', '').replace('East', '');
      this.weather = this.dataweer[3][0].weather[0].description;


      console.log(this.dataweer);

    });
  }


  // Alert of je de artikel wilt hiden
  showConfirmHide(postId) {
    const confirm = this.alertCtrl.create({
      title: 'Verbergen',
      message: 'Weetje zeker dat je deze artikel wilt verbergen?',
      buttons: [
        {
          text: 'Niet Akkoord',
          handler: () => {

          }
        },
        {
          text: 'Akkoord',
          handler: () => {

            // Hide artikel
            console.log("Hide " + postId);
            var headers = new HttpHeaders();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            let options = { headers: headers };
            this.http.post('http://gazoh.net/hidearticle.php', postId, options).subscribe(res => {
              if (res == "hidden") {
                if (this.datepicker == "vandaag") {
                  this.load();
                }
                else if (this.datepicker == "gisteren") {
                  this.loadYesterday();
                }
                else if (this.datepicker == "driedagengeleden") {
                  this.load3DaysAgo();
                }
                let toast = this.toastCtrl.create({
                  message: "Artikel " + postId + " verborgen",
                  duration: 2500,
                  position: "top",
                  showCloseButton: true,
                  closeButtonText: "OK"
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

  // Custom Spinner loader
  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `<div class="custom-spinner-container"><img src="http://gazoh.net/images/spinner.svg"><br> <p>Laden...</p>
     </div>`,
      duration: 610
    });

    loading.present();
  }


  // Laad data pas zodra je bent ingelogt
  loadData() {
    localStorage.getItem(this.key);
    if (this.key != null && this.key != undefined) {
      this.items = JSON.parse(this.key);
    }
  }

  //
  htmlToPlaintext(text) {
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';
  }

  // Redirect to NieuwsPage
  viewEntry(param: any): void {
    this.navCtrl.push('NieuwsPage', param);
  }

  // Doorverbinden naar de CommentsPage
  viewComments(param: any): void {
    this.navCtrl.push(CommentsPage, param);
  }

  // Zoek functie
  search(event) {
    let serVal = event.target.value;
    if (serVal && serVal.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.title.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
      })
    }
  }

  // Zodra je de searchbar canceled
  resetChanges() {
    this.http
      .get('http://gazoh.net/getdata.php')
      .subscribe((data: any) => {
        this.items = data;
      },
        (error: any) => {
          console.dir(error);
        });

  }

  // Zodra de pagina is geladen
  ionViewDidLoad() {
    this.menuCtrl.enable(true, 'myMenu');
  }

  // Zodra die op de pagina is gekomen
  ionViewDidEnter() {
    this.content.ionScrollEnd.subscribe((data) => {
      let dimensions = this.content.getContentDimensions();
      let scrollTop = this.content.scrollTop;
      let contentHeight = dimensions.contentHeight;
      let scrollHeight = dimensions.scrollHeight;

      if ((scrollTop + contentHeight + 20) > scrollHeight) {
        this.shouldScrollDown = true;
        this.showScrollButton = false;
      } else {
        this.shouldScrollDown = false;
        this.showScrollButton = true;
      }
      console.log(contentHeight);
    });
  }

  // Segment Alle nieuws van Vandaag
  load() {
    this.datepicker = "vandaag";
    const headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    const options = { headers: headers };
    const data = {
      userId: localStorage.getItem('userId')
    };
    this.http
      .post('http://gazoh.net/getdata2.php', data, options)
      .subscribe((data: any) => {
        this.items = data;
        this.artikelen = data;
        if (this.items) {
          this.items.sort(function(a, b) {
            return +new Date(b.datum) - +new Date(a.datum);
          });

        }
      },
        (error: any) => {
          console.dir(error);
        });
  }

  loadWithSpinner() {
    this.datepicker = "vandaag";
    const headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    const options = { headers: headers };
    const data = {
      userId: localStorage.getItem('userId')
    };
    this.http
      .post('http://gazoh.net/getdata2.php', data, options)
      .subscribe((data: any) => {
        this.items = data;
        this.artikelen = data;
        if (this.items) {
          this.items.sort(function(a, b) {
            return +new Date(b.datum) - +new Date(a.datum);
          });

        }
      },
        (error: any) => {
          console.dir(error);
        });
    this.presentLoadingCustom();
  }

  // Segment Alle nieuws van Gisteren
  loadYesterday() {
    this.datepicker = "gisteren";
    this.http.get('http://gazoh.net/getyesterday.php').subscribe((data: any) => {
      this.items = data;
      this.artikelen = data;
      if (this.items) {
        this.items.sort(function(a, b) {
          return +new Date(b.datum) - +new Date(a.datum);
        });
      }
    },
      (error: any) => {
        console.dir(error);
      });
    this.presentLoadingCustom();
  }

  // Segment Alle nieuws van Gisteren
  load3DaysAgo() {
    this.datepicker = "driedagengeleden";
    this.http
      .get('http://gazoh.net/get3daysago.php')
      .subscribe((data: any) => {
        this.items = data;
        this.artikelen = data;
        if (this.items) {
          this.items.sort(function(a, b) {
            return +new Date(b.datum) - +new Date(a.datum);
          });
        }
      },
        (error: any) => {
          console.dir(error);
        });
    this.presentLoadingCustom();

  }

  // De pull to refresh
  doRefresh(refresher) {
    if (this.datepicker == "vandaag") {
      this.http
        .get('http://gazoh.net/getdata2.php')
        .subscribe((data: any) => {
          this.items = data;
          this.artikelen = data;
          if (this.items) {
            this.items.sort(function(a, b) {
              return +new Date(b.datum) - +new Date(a.datum);
            });
          }
        },
          (error: any) => {
            console.dir(error);
          });
    }
    else if (this.datepicker == "gisteren") {
      this.http
        .get('http://gazoh.net/getyesterday.php')
        .subscribe((data: any) => {
          this.items = data;
          this.artikelen = data;
          if (this.items) {
            this.items.sort(function(a, b) {
              return +new Date(b.datum) - +new Date(a.datum);
            });
          }
        },
          (error: any) => {
            console.dir(error);
          });
    }
    else if (this.datepicker == "driedagengeleden") {
      this.http
        .get('http://gazoh.net/get3daysago.php')
        .subscribe((data: any) => {
          this.items = data;
          this.artikelen = data;
          if (this.items) {
            this.items.sort(function(a, b) {
              return +new Date(b.datum) - +new Date(a.datum);
            });
          }
        },
          (error: any) => {
            console.dir(error);
          });
    }

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  doInfinite(infiniteScroll) {
    this.http
      .get('http://gazoh.net/getdata.php')
      .subscribe((data: any) => {
        this.items = this.items.push(data);
        infiniteScroll.complete();
      },
        (error: any) => {
          console.dir(error);
        });
    console.log('Begin async operation');
  }

  setLike(articleId) {
    this.disabled = true;
    const headers = new HttpHeaders();

    headers.append("Accept", 'application/json');

    headers.append('Content-Type', 'application/json');

    const options = { headers: headers };

    const data = {
      articleId: articleId,
      userId: this.userId
    };

    this.http.post('http://gazoh.net/setlike.php', data, options)
      .subscribe(data => {
        if (data == "liked") {
          this.disabled = false;
          if (this.datepicker == "vandaag") {
            this.load();
          }
          else if (this.datepicker == "gisteren") {
            this.loadYesterday();
          }
          else if (this.datepicker == "driedagengeleden") {
            this.load3DaysAgo();
          }
          console.log(data);
        }
      });
  }

  shareInfo() {
    this.socialSharing.share("Ik wil dit artikel met je delen", "Artikel-NewsAge", "www.telegraaf.nl")
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


  dislike(articleId) {
    const headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    const options = { headers: headers };
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
                  if (this.datepicker == "vandaag") {
                    this.load();
                  }
                  else if (this.datepicker == "gisteren") {
                    this.loadYesterday();
                  }
                  else if (this.datepicker == "driedagengeleden") {
                    this.load3DaysAgo();
                  }
                  console.log(data);
                }
              });
          }
        }
      ]
    });
    alert.present();
  }


  setHideArticle(postId) {
    console.log("Hide " + postId);
    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = { headers: headers };
    this.http.post('http://gazoh.net/hidearticle.php', postId, options).subscribe(res => {
      if (res == "hidden") {
        let toast = this.toastCtrl.create({
          message: "Artikel " + postId + " verborgen",
          duration: 2500,
          position: "top",
          showCloseButton: true,
          closeButtonText: "OK"
        });
        toast.present();

      }
    });


  }
}
