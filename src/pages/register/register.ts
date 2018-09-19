import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, LoadingController} from 'ionic-angular';
import {HomePage} from '../home/home';
import {HttpClient, HttpHeaders, HttpRequest} from "@angular/common/http";
import {ToastController} from 'ionic-angular';
import 'rxjs/add/operator/map';
import {User} from "./user";
import { FormGroup, FormControl, Validators} from '@angular/forms';


@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})


export class RegisterPage {

    userList: User[]=[];

    form: FormGroup;

    addUser(form){
        this.userList.push(this.form.value)
    }


    // Construtor hiermee roep je alles aan
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public alertCtrl: AlertController,
                private http: HttpClient,
                public loading: LoadingController,
                private toastCtrl: ToastController) {
    }

    ngOnInit() {
        this.form = new FormGroup({
            username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-z ]+')/*, Validators.minLength(3)*/]),
            password: new FormControl('', [Validators.required, Validators.minLength(5)]),
            email: new FormControl('', [Validators.required, Validators.email])
        })
    }

    // Push terug naar home button
    terug() {
        this.navCtrl.push(HomePage);
    }

}
