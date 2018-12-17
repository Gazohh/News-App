import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController, AlertController} from 'ionic-angular';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@IonicPage()
@Component({
    selector: 'page-wijzigwachtwoord',
    templateUrl: 'wijzigwachtwoord.html',
})
export class WijzigwachtwoordPage implements OnInit {

    form: FormGroup;
    password: string;
    password2: string;
    passwordstatus: boolean;
    oldpassword:string;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public http: HttpClient,
                private toastCtrl: ToastController,
                private alertCtrl: AlertController) {
    }

    ngOnInit() {
        this.form = new FormGroup({
            oldpassword: new FormControl('', [Validators.required]),
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

        if(this.password != this.password2) {
            this.passwordstatus = false;
            let toast = this.toastCtrl.create({
                message: 'wellou',
                duration: 3000,
                position: 'top'
            });

            toast.present();
        }
        else if ( this.password == this.password2)
        {
            this.passwordstatus = true;
        }
    }

    updateWachtwoord() {
        if (this.form.valid) {
            if(this.passwordstatus = true)
            {
                const headers = new HttpHeaders();
                headers.append("Accept", 'application/json');
                headers.append('Content-Type', 'application/json');
                const options = {headers: headers};
                const data = {
                    userId: localStorage.getItem('userId'),
                    oldpassword: this.oldpassword,
                    newpassword: this.password,
                };
                this.http
                    .post('http://gazoh.net/wijzigwachtwoord.php', data, options)
                    .subscribe((data: any) => {
                        if (data == "password updated")
                        {
                            let alert = this.alertCtrl.create({
                                title: "Succes",
                                message: "Je wachtwoord is succesvol gewijzigd.",
                                buttons: [{
                                    text: "OK",
                                    handler: () => {
                                        this.navCtrl.pop();
                                    }
                                }]
                            })
                            alert.present();
                        }
                        else if(data == "No matching password") {

                        }
                    });
            }
        }
        else if (this.form.invalid) {
            this.validateAllFormFields(this.form); //{7}
        }
    }


}
