import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FeedPage} from "../feed/feed";
import {SettingsPage} from "../settings/settings";

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-about',
    templateUrl: 'about.html',
})
export class AboutPage {
    themeStatus: any = localStorage.getItem("themeColor");

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AboutPage');
    }

    slides = [
        {
            title: "Welkom bij NewsAge!",
            description: "Hallo! Welkom op NewsAge! ten eerste willen wij, namens het team, u bedanken voor het gebruiken van NewsAge!",
            image: "../../assets/imgs/NewsAgeLogo.png",

        },
        {
            title: "Wat is \"NewsAge\"",
            description: "NewsAge is de perfecte app om alle nieuws in een oogopslag te lezen.\n" +
                "        NewsAge maakt het gemakkelijk voor de gebruiker(jij) door alle nieuws te verzamelen van verschillende bronnen en\n" +
                "        die in een feed te verwerken zodat alles netjes en geordend is ;).",
            image: "../../assets/imgs/NewsAgeLogo.png",
        },
        {
            title: "Waarom NewsAge?",
            description: "NewsAge is heel gemakkelijk te gebruiken, u kunt bijvoorbeeld met 1 klik een dagblad volgen of niet volgen. U\n" +
                "kunt ook ervoor kiezen om bijvoorbeeld een artikel te verbergen, dit zorgt ervoor dat u de artikel niet\n" +
                "        ziet.",
            image: "../../assets/imgs/NewsAgeLogo.png",
        }
    ];

    overOnsDone() {
        this.navCtrl.setRoot(SettingsPage);
    }
}
