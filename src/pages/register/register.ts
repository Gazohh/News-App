import {Component, ViewChild, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, LoadingController} from 'ionic-angular';
import {HomePage} from '../home/home';
import {HttpClient, HttpHeaders, HttpRequest} from "@angular/common/http";
import {ToastController} from 'ionic-angular';
import 'rxjs/add/operator/map';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { User } from '../user';



@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})


export class RegisterPage implements OnInit {

      userList: User[]=[];

  form: FormGroup;

  addUser(form){
    this.userList.push(this.form.value)
  }
  
  ngOnInit() {
      this.form = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-z ]+')/*, Validators.minLength(3)*/]),
        password: new FormControl('', [Validators.required, Validators.minLength(5)]),
        email: new FormControl('', [Validators.required, Validators.email])
      })
  }
}
