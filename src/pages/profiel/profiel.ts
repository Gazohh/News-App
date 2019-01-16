import {IonicPage, NavController, NavParams, ActionSheetController, Navbar} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {SettingsPage} from '../settings/settings';
import {Component, OnInit, ViewChild} from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';
import {File} from '@ionic-native/file';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Events} from 'ionic-angular';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {WijzigwachtwoordPage} from "../wijzigwachtwoord/wijzigwachtwoord";
import {PhotoViewer} from '@ionic-native/photo-viewer';
import {Storage} from '@ionic/storage';
import {Network} from '@ionic-native/network';
import {SettingsProvider} from "../../providers/settings/settings";


@IonicPage()
@Component({
    selector: 'page-profiel',
    templateUrl: 'profiel.html',
})
export class ProfielPage implements OnInit {
    @ViewChild(Navbar) navBar: Navbar;

    dataUser: any;
    myphoto: any;
    username: any;
    email: any;
    id: any = localStorage.getItem("userId");
    emailVerified: any;
    rol: any;
    creationdate: any;
    profilepicture: any;
    form: FormGroup;
    oldprofilepicture: any;
    myprofilepic: any = localStorage.getItem("profilePicture");
    selectedTheme: string;
    setActiveTheme: string;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private alertCtrl: AlertController,
                private camera: Camera,
                public actionSheetCtrl: ActionSheetController,
                public http: HttpClient,
                public events: Events,
                public photoViewer: PhotoViewer,
                public storage: Storage,
                public network: Network,
                private settings: SettingsProvider) {
        this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);

        if (this.network.type != "none") {
            const headers = new HttpHeaders();

            headers.append("Accept", 'application/json');

            headers.append('Content-Type', 'application/json');

            const options = {headers: headers};

            const data = {

                email: localStorage.getItem('userEmail'),

            };
            this.http.post('http://gazoh.net/getgebruiker.php', data, options)
                .subscribe(data => {
                    this.dataUser = data;
                    this.username = this.dataUser.username;
                    this.email = this.dataUser.email;
                    this.emailVerified = this.dataUser.emailVerified;
                    this.rol = this.dataUser.rol;
                    this.myphoto = this.dataUser.profilepicture;
                    this.creationdate = this.dataUser.creationdate
                });
            this.events.publish("username", this.username);
            this.events.publish("profilepicture", this.myphoto);
        } else if (this.network.type == "none") {
            // Get offline profilepicture
            this.storage.get("profilepicture").then((foto) => {
                this.myphoto = foto;
            })
            // Get offline username
            this.storage.get("username").then((username) => {
                this.username = username;
            })
            // Get offline email
            this.storage.get("email").then((email) => {
                this.email = email;
            })
            // Get offline email verified status
            this.storage.get("emailverified").then((emailverified) => {
                this.emailVerified = emailverified;
            })
            // Get offline user role
            this.storage.get("rol").then((rol) => {
                this.rol = rol;
            })
            // Get offline user creation date
            this.storage.get("creationdate").then((creationdate) => {
                this.creationdate = creationdate;
            })
        }
    }

    presentActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Kies',
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

    takePhoto() {
        const options: CameraOptions = {
            quality: 70,
            allowEdit: true,
            targetWidth: 300,
            targetHeight: 300,
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

    onArticlePictureCreated(base64String: string) {
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
            allowEdit: true,
            targetWidth: 300,
            targetHeight: 300
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
        this.navCtrl.push(WijzigwachtwoordPage);
    }

    goBack() {
        this.navCtrl.push(SettingsPage);
    }

    // Validatie
    ngOnInit() {
        this.form = new FormGroup({
            username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-z ]+')]),
            email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')])
        })
    }

    // Zodra alles leeg is dan werkt de checkmark functie niet meer
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

    updateProfile() {
        if (this.network.type == "none") {
            let alert = this.alertCtrl.create({

                title: "Geen verbinding",

                subTitle: "U heeft geen werkende internet verbinding, probeer het later opnieuw.",

                buttons: [{
                    text: "OK", handler: data => {
                    }
                }],

            });

            alert.present();
        } else if (this.network.type != "none") {
            if (this.form.invalid) {
                this.validateAllFormFields(this.form); //{7}
            } else {
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
                        if (res == "Profile updated succesfully") {
                            let alert = this.alertCtrl.create({

                                title: "Profiel bijgewerkt",

                                subTitle: "Uw profiel is succesvol bijgewerkt",

                                buttons: [{
                                    text: "OK", handler: data => {
                                        this.navCtrl.setRoot(SettingsPage)
                                    }
                                }],

                            });

                            alert.present();

                            if (this.storage.set('profilepicture', this.myphoto)) {
                                console.log("Profiel foto is geset in Storage : " + this.myphoto);
                            }

                        } else if (res == "No data set!") {
                            let alert = this.alertCtrl.create({

                                title: "Mislukt",

                                subTitle: "Uw profiel kon niet worden bijgewerkt, probeer het later opnieuw.",

                                buttons: ['OK']

                            });

                            alert.present();
                        }
                    });
            }
        }
    }

    returnSettings() {
        const headers = new HttpHeaders();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        const options = {headers: headers};
        const data = {
            email: localStorage.getItem('userEmail'),
        };
        this.http.post('http://gazoh.net/getgebruiker.php', data, options)
            .subscribe(data => {
                this.dataUser = data;
                this.username = this.dataUser.username;
                this.oldprofilepicture = this.dataUser.profilepicture;
                this.events.publish("username", this.username);
                this.events.publish("profilepicture", this.oldprofilepicture);
            });
        this.navCtrl.setRoot(SettingsPage);
    }

    ionViewDidLoad() {
        this.navBar.backButtonClick = (e: UIEvent) => {
            this.returnSettings();
        }
    }
}
