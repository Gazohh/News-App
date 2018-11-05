
import {IonicPage, NavController, NavParams, LoadingController, ActionSheetController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import {HttpClient, HttpHeaders} from "@angular/common/http";


@IonicPage()
@Component({
    selector: 'page-profiel',
    templateUrl: 'profiel.html',
})
export class ProfielPage {
    dataUser:any;
    myphoto:any;
    username: any;
    email: any;
    id:any = localStorage.getItem("userId");
    emailVerified: any;
    rol: any;
    creationdate:any;
    profilepicture:any;
    myprofilepic:any = localStorage.getItem("profilePicture");
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private alertCtrl: AlertController,
                private camera: Camera,
                private file: File,
                public actionSheetCtrl: ActionSheetController,
                public http:HttpClient) {
        const headers = new HttpHeaders();

        headers.append("Accept", 'application/json');

        headers.append('Content-Type', 'application/json');

        const options = {headers: headers};

        const data = {

            email: localStorage.getItem('userEmail'),

        };
        this.http.post('http://gazoh.net/getgebruiker.php', data, options)
            .subscribe(data => {this.dataUser = data;
                this.username = this.dataUser.username;
                this.email = this.dataUser.email;
                this.emailVerified = this.dataUser.emailVerified;
                this.rol = this.dataUser.rol;
                this.myphoto = this.dataUser.profilepicture;
                this.creationdate = this.dataUser.creationdate});
    }
    presentActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Kies een profielfoto!',
            buttons: [
                {
                    text: 'Maak foto',
                    role: 'Maak foto',
                    handler: () => {
                        this.takePhoto();
                    }
                },
                {
                    text: 'Kies uit galerij',
                    handler: () => {
                        this.cropImage();
                    }
                },
                {
                    text: 'Annuleren',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });

        actionSheet.present();
    }
    takePhoto(){
        const options: CameraOptions = {
            quality: 70,
            allowEdit:true,
            targetWidth:300,
            targetHeight:300,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            this.myphoto = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            // Handle error
        });
    }
    onArticlePictureCreated(base64String: string){
        this.myphoto = 'data:image/jpeg;base64,' + base64String;
        this.myprofilepic = 'data:image/jpeg;base64,' + base64String;
        localStorage.setItem("profilePicture", this.myphoto);
    }

    // getImage() {
    //     const options: CameraOptions = {
    //         quality: 70,
    //         destinationType: this.camera.DestinationType.DATA_URL,
    //         sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    //         saveToPhotoAlbum:false
    //     }
    //
    //     this.camera.getPicture(options).then((imageData) => {
    //         // imageData is either a base64 encoded string or a file URI
    //         // If it's base64:
    //         this.myphoto = 'data:image/jpeg;base64,' + imageData;
    //     }, (err) => {
    //         // Handle error
    //     });
    // }

    cropImage() {
        const options: CameraOptions = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false,
            allowEdit:true,
            targetWidth:300,
            targetHeight:300
        };

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            this.myphoto = 'data:image/jpeg;base64,' + imageData;
            this.myprofilepic = 'data:image/jpeg;base64,' + imageData;
            localStorage.setItem("profilePicture", this.myphoto);
        }, (err) => {
            // Handle error
        });
    }

    wijzigWachtwoord() {
        const prompt = this.alertCtrl.create({
            title: 'Wachtwoord wijzigen',
            inputs: [
                {
                    name: 'oudWachtwoord',
                    placeholder: 'Oude wachtwoord'
                },
                {
                    name: 'NieuweWachtwoord1',
                    placeholder: 'Nieuwe wachtwoord'
                },
                {
                    name: 'NieuweWachtwoord2',
                    placeholder: 'Herhaal wachtwoord'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Wijzigen',
                    handler: data => {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    }

    goBack() {
        this.navCtrl.push(SettingsPage);
    }

    updateProfile()
    {
        const headers = new HttpHeaders();

        headers.append("Accept", 'application/json');

        headers.append('Content-Type', 'application/json');

        const options = {headers: headers};


        const data = {

            id: this.id,

            username: this.username,

            email: this.email,

            myphoto: this.myphoto

        };
        this.http.post('http://gazoh.net/updateProfiel.php', data, options)

            .map(res => res)

            .subscribe(res => {
                if(res == "Profile updated succesfully")
                {
                    let alert = this.alertCtrl.create({

                        title: "Profiel bijgewerkt",

                        subTitle: "Uw profiel is met succesvol bijgewerkt",

                        buttons: ['OK']

                    });

                    alert.present();
                }
                else if(res == "No data set!")
                {
                    let alert = this.alertCtrl.create({

                        title: "Mislukt",

                        subTitle: "Uw profiel kon niet worden bijgewerkt vanwege een fout aan onze kant!",

                        buttons: ['OK']

                    });

                    alert.present();
                }
            });
        console.log("Dit is je foto:" + this.myphoto);
    }

}
