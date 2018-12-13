import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Platform} from 'ionic-angular';
import {FeedPage} from "../feed/feed";
import {Storage} from '@ionic/storage';

/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-tutorial',
    templateUrl: 'tutorial.html',
})
export class TutorialPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public storage: Storage) {
    }

    slides = [
        {
            title: "Welkom bij NewsAge",
            description: "Welkom! bij de tutorial vertellen wij kort even hoe u onze app gebruikt.",
            image: "../../assets/imgs/NewsAgeLogo.png",

        },
        {
            title: "Hoe gebruik je NewsAge?",
            description: "Het gebruik van NewsAge is eigenlijk als u \"the hang of it\" krijgt best simpel, U heeft een startpagina waar al het algemene nieuws op komt, " +
                "daarnaast kunt u in de bronnen aanvinken op welke nieuwspagina u wilt subscriben, dit in 1 knop verder kunt u ook uw profiel aanpassen en kunt u artikelen liken, sharen en als u wilt een reactie plaatsen onder het artikel.",
            image: "../../assets/imgs/NewsAgeLogo.png",
        },
        {
            title: "Vragen?",
            description: "Als u verder nog vragen hebt over de app, kunt u ze mailen naar ons via: newsage2018@gmail.com de FAQ worden dan in slides gedaan en zo word de tutorial bijgewerkt.",
            image: "../../assets/imgs/NewsAgeLogo.png",
        }
    ];

    tutorialDone() {
        localStorage.setItem("TutorialShown", "true");
        this.navCtrl.setRoot(FeedPage);
    }

}
