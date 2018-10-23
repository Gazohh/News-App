import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { RegisterPage } from "../register/register";
import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { FavorietenPage } from "../favorieten/favorieten";
import { ToastController } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { MenuController } from "ionic-angular";
import { Network } from '@ionic-native/network';
import { FeedPage } from "../feed/feed";
import { CategoryPage } from "../category/category";
import { Events } from 'ionic-angular';
import { TutorialPage } from "../tutorial/tutorial";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  CategoryPage: any;

  username: string;
  email: string;
  password: string;
  rootPage: any = HomePage;

  FavorietenPage = FavorietenPage;
  FeedPage = FeedPage;


  data: string;

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    public loading: LoadingController,
    public http: HttpClient,
    private toastCtrl: ToastController,
    private keyboard: Keyboard,
    public menuCtrl: MenuController,
    public events: Events) {

    this.menuCtrl.enable(false, 'myMenu');
    keyboard.disableScroll(true);

  }

  //
  // Buttons met Push
  //

  // Push naar de register pagina
  goRegister() {
    this.navCtrl.push(RegisterPage);
  }
  signIn() {
    // Controleert of de velden wel zijn ingevuld
    if (this.email == null || this.password == null) {
      let toast = this.toastCtrl.create({
        message: 'Niet alle velden zijn ingevuld!',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
    else {
      var headers = new HttpHeaders();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');
      let options = { headers: headers };
      let data = {
        email: this.email,
        password: this.password
      };
      let loader = this.loading.create({
        content: 'Aan het inloggen...',
      });
      loader.present().then(() => {
        // Maakt verbinding met login.php en checkt of gegevens kloppen
        this.http.post('http://www.gazoh.net/login.php', data, options)
          .subscribe(res => {
            console.log(res);
            loader.dismiss();
            if (res == "Succesfully logged in!") {
              let toast = this.toastCtrl.create({
                message: "U bent ingelogd!",
                duration: 2500,
                position: "top",
                showCloseButton: true,
                closeButtonText: "OK"
              });
              // Localstorage Email
              localStorage.setItem("email", this.email);
              // localStorage Tutorial
                  this.navCtrl.setRoot(CategoryPage);


              toast.present();
            }
            else {
              let toast = this.toastCtrl.create({
                message: "Uw gegevens zijn onjuist, probeer het nogmaals.",
                showCloseButton: true,
                closeButtonText: "OK",
                position: "top"
              });
                toast.present();
            }
          });
      });
    }
  }
}
