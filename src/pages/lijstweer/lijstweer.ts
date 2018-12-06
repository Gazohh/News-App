import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Searchbar} from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-lijstweer',
    templateUrl: 'lijstweer.html',
})
export class LijstweerPage {
    @ViewChild('searchbar') searchbar: Searchbar;

    public lijst = [];
    public lijstbackup = [];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.lijst = [
            {title: 'One'},
            {title: 'Two'},
            {title: 'Three'},
            {title: 'Four'},
            {title: 'Five'},
            {title: 'Six'}
        ]

        this.lijstbackup = [
            {title: 'One'},
            {title: 'Two'},
            {title: 'Three'},
            {title: 'Four'},
            {title: 'Five'},
            {title: 'Six'}
        ]
    }
    
    // Zoek functie
    search(event) {
        let serVal = event.target.value;
        if (serVal && serVal.trim() != '') {
            this.lijst = this.lijst.filter((item) => {
                return (item.title.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
            })
        }
        else {
            this.lijst = this.lijstbackup;
        }
    }
}
