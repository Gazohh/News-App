import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {passValidator} from './custom-validators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  rForm: FormGroup;
  post: any;
  name: string = '';
  email: string = '';
  password: string = '';
  cnfpassword: string = '';

  constructor(fb: FormBuilder){
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'email': [null, [Validators.required, Validators.email]],
      'password': [null, Validators.required],
      'cnfpassword': [null, passValidator]

    });
  }

  addForm(post){

  }

}