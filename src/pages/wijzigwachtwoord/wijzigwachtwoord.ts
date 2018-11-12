import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormGroup, FormControl, Validators} from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-wijzigwachtwoord',
  templateUrl: 'wijzigwachtwoord.html',
})
export class WijzigwachtwoordPage implements OnInit {

form: FormGroup;
password: string;
password2: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
      this.form = new FormGroup({
          password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$')]),
          password2: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$')]),
      })
  }

  // Controleert of de velden voldoen aan de validators
  validateAllFormFields(formGroup: FormGroup) {         //{1}
      Object.keys(formGroup.controls).forEach(field => {  //{2}
          const control = formGroup.get(field);             //{3}
          if (control instanceof FormControl) {             //{4}
              control.markAsTouched({onlySelf: true});
          } else if (control instanceof FormGroup) {        //{5}
              this.validateAllFormFields(control);            //{6}
          }
      });
  }

  updateWachtwoord() {
    if (this.form.invalid) {
        this.validateAllFormFields(this.form); //{7}
    }
  }


}
