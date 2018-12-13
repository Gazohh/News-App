webpackJsonp([0],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.themeStatus = localStorage.getItem("themeColor");
        this.slides = [
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
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.overOnsDone = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */]);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"c:\xampp\htdocs\News-App\src\pages\about\about.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle right class="fakeCenter">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title text-center class="centerTitle">Over Ons</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="tutorial-page">\n\n    <ion-slides pager>\n\n        <ion-slide *ngFor="let slide of slides">\n\n            <img [src]="slide.image" class="slide-image"/>\n\n            <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n\n            <p [innerHTML]="slide.description"></p>\n\n        </ion-slide>\n\n        <ion-slide>\n\n            <img src="../../assets/imgs/NewsAgeLogo.png" class="slide-image"/>\n\n            <h2 class="slide-title">Tot zover over ons!</h2>\n\n            <button ion-button large clear icon-end color="primary" (click)="overOnsDone()">\n\n                Verder gaan\n\n                <ion-icon name="arrow-forward"></ion-icon>\n\n            </button>\n\n        </ion-slide>\n\n    </ion-slides>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"c:\xampp\htdocs\News-App\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsProvider = /** @class */ (function () {
    function SettingsProvider() {
        this.theme = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"]('light-theme');
    }
    SettingsProvider.prototype.setActiveTheme = function (val) {
        this.theme.next(val);
    };
    SettingsProvider.prototype.getActiveTheme = function () {
        return this.theme.asObservable();
    };
    SettingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SettingsProvider);
    return SettingsProvider;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminPage = /** @class */ (function () {
    function AdminPage(navCtrl, navParams, http, events, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.isSearchbaropened = false;
        this.key = "items";
        this.items = 0;
    }
    AdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminPage');
    };
    AdminPage.prototype.selectGebruikers = function () {
        var _this = this;
        this.checklist = "gebruikers";
        this.http
            .get('http://gazoh.net/getuser.php')
            .subscribe(function (data) {
            _this.gebruikerslijst = data;
        }, function (error) {
            console.dir(error);
        });
    };
    AdminPage.prototype.ionViewWillEnter = function () {
        this.checklist = "artikelen";
        this.selectArtikelen();
    };
    AdminPage.prototype.selectArtikelen = function () {
        var _this = this;
        this.checklist = "artikelen";
        this.http
            .get('http://gazoh.net/getverborgen.php')
            .subscribe(function (data) {
            _this.artikelenlijst = data;
        }, function (error) {
            console.dir(error);
        });
    };
    AdminPage.prototype.htmlToPlaintext = function (text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
    AdminPage.prototype.viewEntry = function (param) {
        this.navCtrl.push('NieuwsPage', param);
    };
    AdminPage.prototype.resetChanges = function () {
        var _this = this;
        this.http
            .get('http://gazoh.net/getdata.php')
            .subscribe(function (data) {
            _this.items = data;
        }, function (error) {
            console.dir(error);
        });
        this.isSearchbaropened = false;
    };
    AdminPage.prototype.search = function (event) {
        var serVal = event.target.value;
        if (serVal && serVal.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.title.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
            });
        }
    };
    // Alert of je de artikel wilt laten zien
    AdminPage.prototype.showConfirmHide = function (postId) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Publiceren',
            message: 'Weetje zeker dat je deze artikel wilt publiceren?',
            buttons: [
                {
                    text: 'Niet Akkoord',
                    handler: function () {
                    }
                },
                {
                    text: 'Akkoord',
                    handler: function () {
                        // Show artikel
                        console.log("Show " + postId);
                        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
                        headers.append("Accept", 'application/json');
                        headers.append('Content-Type', 'application/json');
                        var options = { headers: headers };
                        var data = {
                            articleId: postId
                        };
                        _this.http.post('http://www.gazoh.net/showarticle.php', data, options).subscribe(function (res) {
                            if (res == 'showed') {
                                _this.selectArtikelen();
                                var toast = _this.toastCtrl.create({
                                    message: "Artikel " + postId + " gepubliceerd",
                                    duration: 2500,
                                    position: "bottom"
                                });
                                toast.present();
                            }
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin',template:/*ion-inline-start:"c:\xampp\htdocs\News-App\src\pages\admin\admin.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n    <ion-title *ngIf="!isSearchbaropened" class="algemeenText">Admin</ion-title>\n\n    <!-- Searchbar  -->\n\n    <ion-searchbar #searchbar *ngIf="isSearchbaropened" [showCancelButton]="true" (ionCancel)="resetChanges()" (ionInput)="search($event)" placeholder="Waar zijn we naar op zoek?" class="slideInRight"></ion-searchbar>\n\n    <!-- Searchbar icon -->\n\n    <ion-buttons end *ngIf="checklist == \'artikelen\'">\n\n      <button ion-button icon-only (click)="isSearchbaropened=true">\n\n        <ion-icon name="search" *ngIf="!isSearchbaropened"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end *ngIf="checklist == \'gebruikers\'">\n\n      <button ion-button icon-only (click)="isSearchbaropened=true">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-segment [(ngModel)]="checklist" color="primary">\n\n    <ion-segment-button value="artikelen" (click)="selectArtikelen()">\n\n      Verborgen\n\n    </ion-segment-button>\n\n    <ion-segment-button value="gebruikers" (click)="selectGebruikers()">\n\n      Gebruikers\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div *ngIf="checklist == \'artikelen\'">\n\n    <ion-card *ngFor="let item of artikelenlijst" col-md-6 class="ionCard">\n\n      <div class="ion-card-image-wrapper" (click)="viewEntry({ record: item })">\n\n        <img *ngIf="!item.image" src="../assets/imgs/noimage.jpg">\n\n        <img [src]="item.image" *ngIf="item.site == \'NOS.nl\'">\n\n        <img [src]="item.image" *ngIf="item.site != \'NOS.nl\' || item.site != \'NU.nl\'">\n\n      </div>\n\n      <ion-card-content>\n\n        <!-- Avatar -->\n\n        <div id="AvatarFeed" (click)="viewEntry({ record: item })">\n\n          <ion-avatar *ngIf="item.site == \'NOS\'" class="avatar" item-start>\n\n            <img src="../assets/svg/NOS_logo.svg" class="avatar-feedNOS" />\n\n          </ion-avatar>\n\n          <ion-avatar *ngIf="item.site == \'NU.nl\'" class="avatar" item-start>\n\n            <img src="../assets/svg/nu.nl.svg" class="avatar-feed" />\n\n          </ion-avatar>\n\n          <ion-avatar *ngIf="item.site == \'De Telegraaf\'" class="avatar" item-start>\n\n            <img src="../assets/svg/telegraaf.svg" class="avatar-feedTelegraaf" />\n\n          </ion-avatar>\n\n        </div>\n\n        <!-- Uitgever -->\n\n        <div id="uitgeverFeed" class="uitgeverFeed" (click)="viewEntry({ record: item })">\n\n          <span>{{item.site}}</span>\n\n          <!-- Title  -->\n\n          <div id="title">\n\n            <ion-card-title class="TitleFeed">\n\n              <strong>{{item.title}}</strong>\n\n            </ion-card-title>\n\n          </div>\n\n          <!-- description  -->\n\n          <div id="description">\n\n            <p class="descriptionFeed">{{htmlToPlaintext(item.description) | slice:0:120}}...</p>\n\n          </div>\n\n          <!-- Datum -->\n\n          <div id="datumFeed" class="datumFeed">\n\n            <span>{{item.datum}}</span>\n\n          </div>\n\n        </div>\n\n        <!-- Social Buttons - Comments - likes - Share -->\n\n        <div id="socialLikeComments" class="socialLikeComments">\n\n          <button ion-button icon-start clear *ngIf="item.site == \'De Telegraaf\'" class="socialTelegraafShare" (click)="showConfirmHide(item.id)">\n\n            <ion-icon name="eye"></ion-icon>\n\n          </button>\n\n          <button ion-button icon-start clear *ngIf="item.site == \'NOS\'" class="socialNOSShare" (click)="showConfirmHide(item.id)">\n\n            <ion-icon name="eye"></ion-icon>\n\n          </button>\n\n          <button ion-button icon-start clear *ngIf="item.site == \'NU.nl\'" class="socialNuShare" (click)="showConfirmHide(item.id)">\n\n            <ion-icon name="eye"></ion-icon>\n\n          </button>\n\n          <button ion-button icon-start clear *ngIf="item.site == \'De Telegraaf\'" class="socialTelegraafShare">\n\n            <ion-icon name="share-alt"></ion-icon>\n\n          </button>\n\n          <button ion-button icon-start clear *ngIf="item.site == \'NOS\'" class="socialNOSShare">\n\n            <ion-icon name="share-alt"></ion-icon>\n\n          </button>\n\n          <button ion-button icon-start clear *ngIf="item.site == \'NU.nl\'" class="socialNuShare">\n\n            <ion-icon name="share-alt"></ion-icon>\n\n          </button>\n\n          <button ion-button icon-start clear *ngIf="item.site == \'De Telegraaf\'" class="socialTelegraaf" (click)="viewComments({ record: item })">\n\n            <ion-icon name="chatbubbles"></ion-icon>\n\n            <div>{{item.comments}}</div>\n\n          </button>\n\n          <button ion-button icon-start clear *ngIf="item.site == \'NOS\'" class="socialNOS" (click)="viewComments({ record: item })">\n\n            <div>{{item.comments}}</div>\n\n            <ion-icon name="chatbubbles"></ion-icon>\n\n          </button>\n\n          <button ion-button icon-start clear *ngIf="item.site == \'NU.nl\'" class="socialNu" (click)="viewComments({ record: item })">\n\n            <ion-icon name="chatbubbles"></ion-icon>\n\n            <div>{{item.comments}}</div>\n\n          </button>\n\n          <button class="socialTelegraaf" ion-button icon-start clear *ngIf="item.site == \'De Telegraaf\'" (click)="setLike(item.id)">\n\n            <ion-icon name="heart"></ion-icon>\n\n            <div>{{item.likes}}</div>\n\n          </button>\n\n          <button class="socialNOS" ion-button icon-start clear *ngIf="item.site == \'NOS\'" (click)="setLike(item.id)">\n\n            <ion-icon name="heart"></ion-icon>\n\n            <div>{{item.likes}}</div>\n\n          </button>\n\n          <button class="socialNu" ion-button icon-start clear *ngIf="item.site == \'NU.nl\'" (click)="setLike(item.id)">\n\n            <ion-icon name="heart"></ion-icon>\n\n            <div>{{item.likes}}</div>\n\n          </button>\n\n        </div>\n\n      </ion-card-content>\n\n\n\n\n\n\n\n    </ion-card>\n\n  </div>\n\n  <ion-list *ngFor="let user of gebruikerslijst">\n\n    <ion-item-sliding #item>\n\n      <ion-item class="adminUsers">\n\n        <ion-avatar class="avatar" item-start>\n\n          <img src="{{user.profilepicture}}" class="avatar-profiel" />\n\n        </ion-avatar>\n\n        <h3>ID: <strong>{{user.id}}</strong></h3>\n\n        <h3>Email <strong>{{user.email}}</strong></h3>\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n        <button ion-button (click)="unread(item)" class="deleteSlide">\n\n          <span class="spanHide">Bewe</span>\n\n          <ion-icon name="trash" class="iconAdmin"></ion-icon>\n\n        </button>\n\n        <button ion-button (click)="unread(item)" class="BewerkSlide">\n\n          <span class="spanHide">Dele</span>\n\n          <ion-icon name="create" class="iconAdmin"></ion-icon>\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\xampp\htdocs\News-App\src\pages\admin\admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfielPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wijzigwachtwoord_wijzigwachtwoord__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_photo_viewer__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ProfielPage = /** @class */ (function () {
    function ProfielPage(navCtrl, navParams, alertCtrl, camera, actionSheetCtrl, http, events, photoViewer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.http = http;
        this.events = events;
        this.photoViewer = photoViewer;
        this.id = localStorage.getItem("userId");
        this.myprofilepic = localStorage.getItem("profilePicture");
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = { headers: headers };
        var data = {
            email: localStorage.getItem('userEmail'),
        };
        this.http.post('http://gazoh.net/getgebruiker.php', data, options)
            .subscribe(function (data) {
            _this.dataUser = data;
            _this.username = _this.dataUser.username;
            _this.email = _this.dataUser.email;
            _this.emailVerified = _this.dataUser.emailVerified;
            _this.rol = _this.dataUser.rol;
            _this.myphoto = _this.dataUser.profilepicture;
            _this.creationdate = _this.dataUser.creationdate;
        });
        this.events.publish("username", this.username);
        this.events.publish("profilepicture", this.myphoto);
    }
    ProfielPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Wat wilt u doen ?',
            buttons: [
                {
                    text: 'Profielfoto bekijken',
                    role: 'Profielfoto bekijken',
                    handler: function () {
                        if (_this.myphoto) {
                            _this.photoViewer.show(_this.myphoto);
                        }
                        else if (!_this.myphoto) {
                            var alert_1 = _this.alertCtrl.create({ title: "Geen data", message: "Geen foto!" });
                            alert_1.present();
                        }
                    }
                },
                {
                    text: 'Maak foto',
                    role: 'Maak foto',
                    handler: function () {
                        _this.takePhoto();
                    }
                },
                {
                    text: 'Kies uit galerij',
                    handler: function () {
                        _this.cropImage();
                    }
                },
                {
                    text: 'Annuleren',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ProfielPage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 70,
            allowEdit: true,
            targetWidth: 300,
            targetHeight: 300,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.myphoto = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    ProfielPage.prototype.onArticlePictureCreated = function (base64String) {
        this.myphoto = 'data:image/jpeg;base64,' + base64String;
        this.myprofilepic = 'data:image/jpeg;base64,' + base64String;
        localStorage.setItem("profilePicture", this.myphoto);
    };
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
    ProfielPage.prototype.cropImage = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false,
            allowEdit: true,
            targetWidth: 300,
            targetHeight: 300
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.myphoto = 'data:image/jpeg;base64,' + imageData;
            _this.myprofilepic = 'data:image/jpeg;base64,' + imageData;
            localStorage.setItem("profilePicture", _this.myphoto);
        }, function (err) {
            // Handle error
        });
    };
    ProfielPage.prototype.wijzigWachtwoord = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__wijzigwachtwoord_wijzigwachtwoord__["a" /* WijzigwachtwoordPage */]);
    };
    ProfielPage.prototype.goBack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__settings_settings__["a" /* SettingsPage */]);
    };
    // Validatie
    ProfielPage.prototype.ngOnInit = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].pattern('[a-zA-Z][a-zA-z ]+')]),
            email: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')])
        });
    };
    // Zodra alles leeg is dan werkt de checkmark functie niet meer
    ProfielPage.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field); //{3}
            if (control instanceof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormGroup */]) {
                _this.validateAllFormFields(control); //{6}
            }
        });
    };
    ProfielPage.prototype.updateProfile = function () {
        var _this = this;
        if (this.form.invalid) {
            this.validateAllFormFields(this.form); //{7}
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = { headers: headers };
            var data = {
                id: this.id,
                username: this.username,
                email: this.email,
                myphoto: this.myphoto
            };
            this.http.post('http://gazoh.net/updateProfiel.php', data, options)
                .map(function (res) { return res; })
                .subscribe(function (res) {
                if (res == "Profile updated succesfully") {
                    var alert_2 = _this.alertCtrl.create({
                        title: "Profiel bijgewerkt",
                        subTitle: "Uw profiel is met succesvol bijgewerkt",
                        buttons: [{
                                text: "OK", handler: function (data) {
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__settings_settings__["a" /* SettingsPage */]);
                                }
                            }],
                    });
                    alert_2.present();
                }
                else if (res == "No data set!") {
                    var alert_3 = _this.alertCtrl.create({
                        title: "Mislukt",
                        subTitle: "Uw profiel kon niet worden bijgewerkt vanwege een fout aan onze kant!",
                        buttons: ['OK']
                    });
                    alert_3.present();
                }
            });
            console.log("Dit is je foto:" + this.myphoto);
        }
    };
    ProfielPage.prototype.returnSettings = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = { headers: headers };
        var data = {
            email: localStorage.getItem('userEmail'),
        };
        this.http.post('http://gazoh.net/getgebruiker.php', data, options)
            .subscribe(function (data) {
            _this.dataUser = data;
            _this.username = _this.dataUser.username;
            _this.oldprofilepicture = _this.dataUser.profilepicture;
            _this.events.publish("username", _this.username);
            _this.events.publish("profilepicture", _this.oldprofilepicture);
        });
        var alert = this.alertCtrl.create({
            title: 'Verlaat',
            message: 'Je wijzigingen worden niet opgeslagen als je annuleert. Weet je zeker dat je wilt annuleren ?',
            buttons: [
                {
                    text: "blijf",
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'verlaat',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__settings_settings__["a" /* SettingsPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    ProfielPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-profiel',template:/*ion-inline-start:"c:\xampp\htdocs\News-App\src\pages\profiel\profiel.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button left class="BackButton" (click)="returnSettings()">\n\n      <ion-icon name="arrow-back"></ion-icon>\n\n    </button>\n\n    <ion-title class="profielPadding">Profiel</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="updateProfile()">\n\n        <ion-icon name="checkmark"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-grid class="gridMenu">\n\n      <ion-col col-12 class="menuCol">\n\n        <div class="alignCenter">\n\n          <img src="{{myphoto}}" class="avatar-profiel" (click)="presentActionSheet()" />\n\n          <div class="fotoWijzigen">\n\n            <h5 class="fotoWijzigenProfiel" (click)="presentActionSheet()">Foto Wijzigen</h5>\n\n          </div>\n\n        </div>\n\n\n\n        <form novalidate [formGroup]="form">\n\n          <div class="form-group">\n\n            <ion-item [ngClass]="{ \'ng-touched\' : form.get(\'username\').touched }">>\n\n              <ion-label floating>Gebruikersnaam</ion-label>\n\n              <ion-input type="text" placeholder="{{username}}" value="{{username}}" formControlName="username" class="form-control"></ion-input>\n\n            </ion-item>\n\n          </div>\n\n          <div *ngIf="form.get(\'username\').touched && form.get(\'username\').invalid" class="alert alert-danger" required>\n\n            <div class="validatieText" *ngIf="form.get(\'username\').hasError(\'required\')">Naam moet ingevuld zijn.</div>\n\n            <div class="validatieText" *ngIf="form.get(\'username\').hasError(\'pattern\')">Ongeldige naam.</div>\n\n            <div class="validatieText" *ngIf="form.get(\'username\').hasError(\'minLength\')">De minimale lengte zijn 3 letters.</div>\n\n          </div>\n\n\n\n          <div class="form-group">\n\n            <ion-item [ngClass]="{ \'ng-touched\' : form.get(\'email\').touched }">\n\n              <ion-label floating>E-mail</ion-label>\n\n              <ion-input type="email" placeholder="{{email}}" value="{{email}}" formControlName="email" class="form-control"></ion-input>\n\n            </ion-item>\n\n          </div>\n\n          <div *ngIf="form.get(\'email\').touched && form.get(\'email\').invalid" class="alert alert-danger" required>\n\n            <div class="validatieText" *ngIf="form.get(\'email\').hasError(\'required\')">Email moet ingevuld zijn</div>\n\n            <div class="validatieText" *ngIf="form.get(\'email\').hasError(\'pattern\')">Ongeldige Email!</div>\n\n          </div>\n\n\n\n        </form>\n\n        <h6 class="wachtwoordWijzigen" (click)="wijzigWachtwoord()">Wijzig Wachtwoord</h6>\n\n      </ion-col>\n\n    </ion-grid>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\xampp\htdocs\News-App\src\pages\profiel\profiel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_photo_viewer__["a" /* PhotoViewer */]])
    ], ProfielPage);
    return ProfielPage;
}());

//# sourceMappingURL=profiel.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WijzigwachtwoordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WijzigwachtwoordPage = /** @class */ (function () {
    function WijzigwachtwoordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WijzigwachtwoordPage.prototype.ngOnInit = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$')]),
            password2: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$')]),
        });
    };
    // Controleert of de velden voldoen aan de validators
    WijzigwachtwoordPage.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field); //{3}
            if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]) {
                _this.validateAllFormFields(control); //{6}
            }
        });
    };
    WijzigwachtwoordPage.prototype.updateWachtwoord = function () {
        if (this.form.invalid) {
            this.validateAllFormFields(this.form); //{7}
        }
    };
    WijzigwachtwoordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wijzigwachtwoord',template:/*ion-inline-start:"c:\xampp\htdocs\News-App\src\pages\wijzigwachtwoord\wijzigwachtwoord.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title class="profielPadding">Wachtwoord Wijzigen</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="updateWachtwoord()">\n\n        <ion-icon name="checkmark"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <form novalidate [formGroup]="form">\n\n\n\n    <ion-item>\n\n      <ion-label color="lightAppKleur" stacked>Oud Wachtwoord</ion-label>\n\n      <ion-input type="password" placeholder=""></ion-input>\n\n    </ion-item>\n\n\n\n    <div class="form-group">\n\n      <ion-item [ngClass]="{ \'ng-touched\' : form.get(\'password\').touched }">\n\n        <ion-label stacked>Nieuwe Wachtwoord</ion-label>\n\n        <ion-input type="password" formControlName="password" class="form-control" [(ngModel)]="password"></ion-input>\n\n      </ion-item>\n\n    </div>\n\n    <div class="alert alert-danger" *ngIf="form.get(\'password\').touched && form.get(\'password\').invalid ">\n\n      <div class="validatieText" *ngIf="form.get(\'password\').hasError(\'required\')">Wachtwoord moet ingevuld zijn</div>\n\n      <div class="validatieText" *ngIf="form.get(\'password\').hasError(\'minLength\')">Wachtwoord moet minimaal 8 tekens lang zijn</div>\n\n      <div class="validatieText" *ngIf="form.get(\'password\').hasError(\'pattern\')">Wachtwoord moet minstens een hoofdletter, een kleine letter en een cijfer bevatten</div>\n\n    </div>\n\n\n\n    <div class="form-group">\n\n      <ion-item [ngClass]="{ \'ng-touched\' : form.get(\'password2\').touched }">\n\n        <ion-label stacked>Herhaal Nieuw Wachtwoord</ion-label>\n\n        <ion-input type="password" formControlName="password2" class="form-control" [(ngModel)]="password2"></ion-input>\n\n      </ion-item>\n\n    </div>\n\n    <div class="alert alert-danger" *ngIf="form.get(\'password2\').touched && form.get(\'password\').invalid ">\n\n      <div class="validatieText" *ngIf="form.get(\'password2\').hasError(\'required\')">Wachtwoord moet ingevuld zijn</div>\n\n      <div class="validatieText" *ngIf="form.get(\'password2\').hasError(\'minLength\')">Wachtwoord moet minimaal 8 tekens lang zijn</div>\n\n      <div class="validatieText" *ngIf="form.get(\'password2\').hasError(\'pattern\')">Wachtwoord moet minstens een hoofdletter, een kleine letter en een cijfer bevatten</div>\n\n    </div>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\xampp\htdocs\News-App\src\pages\wijzigwachtwoord\wijzigwachtwoord.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], WijzigwachtwoordPage);
    return WijzigwachtwoordPage;
}());

//# sourceMappingURL=wijzigwachtwoord.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EconomiePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EconomiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EconomiePage = /** @class */ (function () {
    function EconomiePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EconomiePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EconomiePage');
    };
    EconomiePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-economie',template:/*ion-inline-start:"c:\xampp\htdocs\News-App\src\pages\economie\economie.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle right class="fakeCenter">\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title>Economie</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n'/*ion-inline-end:"c:\xampp\htdocs\News-App\src\pages\economie\economie.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], EconomiePage);
    return EconomiePage;
}());

//# sourceMappingURL=economie.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisdaadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MisdaadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MisdaadPage = /** @class */ (function () {
    function MisdaadPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MisdaadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MisdaadPage');
    };
    MisdaadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-misdaad',template:/*ion-inline-start:"c:\xampp\htdocs\News-App\src\pages\misdaad\misdaad.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle right class="fakeCenter">\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title>Misdaad</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n'/*ion-inline-end:"c:\xampp\htdocs\News-App\src\pages\misdaad\misdaad.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], MisdaadPage);
    return MisdaadPage;
}());

//# sourceMappingURL=misdaad.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AutoPage = /** @class */ (function () {
    function AutoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AutoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AutoPage');
    };
    AutoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-auto',template:/*ion-inline-start:"c:\xampp\htdocs\News-App\src\pages\auto\auto.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle right class="fakeCenter">\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title>Auto\'s</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n'/*ion-inline-end:"c:\xampp\htdocs\News-App\src\pages\auto\auto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], AutoPage);
    return AutoPage;
}());

//# sourceMappingURL=auto.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SourcesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SourcesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SourcesPage = /** @class */ (function () {
    function SourcesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.page = "0";
    }
    SourcesPage.prototype.selectedTab = function (ind) {
        this.slider.slideTo(ind);
    };
    SourcesPage.prototype.moveButton = function ($event) {
        this.page = $event._snapIndex.toString();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], SourcesPage.prototype, "slider", void 0);
    SourcesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sources',template:/*ion-inline-start:"c:\xampp\htdocs\News-App\src\pages\sources\sources.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle right class="fakeCenter">\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title>Sources</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n      <ion-segment color="dark" [(ngModel)]="page">\n\n        <ion-segment-button value="0" (click)="selectedTab(0)">\n\n          Subscribed\n\n        </ion-segment-button>\n\n        <ion-segment-button value="1" (click)="selectedTab(1)">\n\n          Suggesties\n\n        </ion-segment-button>\n\n      </ion-segment>\n\n</ion-header>\n\n<ion-content >\n\n  <ion-slides #slider (ionSlideWillChange)="moveButton($event)" >\n\n    <!--  -->\n\n    <!-- Alle Sources die zijn geimport -->\n\n    <!--  -->\n\n    <ion-slide>\n\n      <ion-list>\n\n        <ion-item class="sourceItem">\n\n          <ion-avatar class="avatar" item-start>\n\n            <img src="../assets/svg/NOS_logo.svg">\n\n          </ion-avatar>\n\n          <div class="sourceTekst"><b>NOS</b></div>\n\n          <div class="sourceTekst">Nieuwsfeed</div>\n\n          <button ion-button outline item-end color="danger" class="DeleteClassesButton">\n\n            <ion-icon name="close" class="buttonIcon"></ion-icon>Verwijderen\n\n          </button>\n\n        </ion-item>\n\n\n\n        <ion-item class="sourceItem">\n\n          <ion-avatar class="avatar" item-start>\n\n            <img src="../assets/svg/Telegraaf.svg">\n\n          </ion-avatar>\n\n          <div class="sourceTekst"><b>De Telegraaf</b></div>\n\n          <div class="sourceTekst">Nieuwsfeed</div>\n\n          <button ion-button outline item-end color="danger" class="DeleteClassesButton">\n\n            <ion-icon name="close" class="buttonIcon"></ion-icon>Verwijderen\n\n          </button>\n\n        </ion-item>\n\n\n\n        <ion-item class="sourceItem">\n\n          <ion-avatar class="avatar" item-start>\n\n            <img src="../assets/svg/nu.nl.svg">\n\n          </ion-avatar>\n\n          <div class="sourceTekst"><b>NU.NL</b></div>\n\n          <div class="sourceTekst">Nieuwsfeed</div>\n\n        <button ion-button outline item-end color="danger" class="DeleteClassesButton">\n\n            <ion-icon name="close" class="buttonIcon"></ion-icon>Verwijderen\n\n          </button>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <ion-list>\n\n        <!--  -->\n\n        <!-- Alle Sources die je kunt importen -->\n\n        <!--  -->\n\n        <ion-item class="sourceTitel">\n\n              <h4 class="TitelSources">Nieuwsfeed</h4>\n\n        </ion-item>\n\n        <ion-item class="sourceItem">\n\n          <ion-avatar class="avatar" item-start>\n\n            <img src="../assets/svg/Volkskrant.svg">\n\n          </ion-avatar>\n\n          <div class="sourceTekst"><b>De Volkskrant</b></div>\n\n          <div class="sourceTekst">Nieuwsfeed</div>\n\n          <button ion-button outline item-end color="green" class="ImportClassesButton">\n\n            <ion-icon name="checkmark" class="buttonIcon"></ion-icon>Toevoegen\n\n          </button>\n\n        </ion-item>\n\n\n\n        <ion-item class="sourceItem">\n\n          <ion-avatar class="avatar" item-start>\n\n            <img src="../assets/svg/AD.svg">\n\n          </ion-avatar>\n\n          <div class="sourceTekst"><b>Algemeen Dagblad</b></div>\n\n          <div class="sourceTekst">Nieuwsfeed</div>\n\n        <button ion-button outline item-end color="green" class="ImportClassesButton">\n\n            <ion-icon name="checkmark" class="buttonIcon"></ion-icon>Toevoegen\n\n          </button>\n\n        </ion-item>\n\n\n\n\n\n        <ion-item class="sourceItem">\n\n          <ion-avatar class="avatar" item-start>\n\n            <img src="../assets/svg/RTL_Nederland.svg">\n\n          </ion-avatar>\n\n          <div class="sourceTekst"><b>RTL Nieuws</b></div>\n\n          <div class="sourceTekst">Nieuwsfeed</div>\n\n        <button ion-button outline item-end color="green" class="ImportClassesButton">\n\n            <ion-icon name="checkmark" class="buttonIcon"></ion-icon>Toevoegen\n\n          </button>\n\n        </ion-item>\n\n\n\n        <ion-item class="sourceItem">\n\n          <ion-avatar class="avatar" item-start>\n\n            <img src="../assets/svg/De_Gelderlander.svg">\n\n          </ion-avatar>\n\n          <div class="sourceTekst"><b>De Gelderlander</b></div>\n\n          <div class="sourceTekst">Nieuwsfeed</div>\n\n        <button ion-button outline item-end color="green" class="ImportClassesButton">\n\n            <ion-icon name="checkmark" class="buttonIcon"></ion-icon>Toevoegen\n\n          </button>\n\n        </ion-item>\n\n\n\n        <ion-item class="sourceTitel">\n\n              <h4 class="TitelSources">Tech</h4>\n\n        </ion-item>\n\n\n\n        <ion-item class="sourceItem">\n\n          <ion-avatar class="avatar" item-start>\n\n            <img src="../assets/svg/Tweakers.svg">\n\n          </ion-avatar>\n\n          <div class="sourceTekst"><b>Tweakers</b></div>\n\n          <div class="sourceTekst">Tech</div>\n\n        <button ion-button outline item-end color="green" class="ImportClassesButton">\n\n            <ion-icon name="checkmark" class="buttonIcon"></ion-icon>Toevoegen\n\n          </button>\n\n        </ion-item>\n\n\n\n        <ion-item class="sourceTitel">\n\n              <h4 class="TitelSources">Sport</h4>\n\n        </ion-item>\n\n\n\n        <ion-item class="sourceItem">\n\n          <ion-avatar class="avatar" item-start>\n\n            <img src="../assets/svg/Fifa.svg">\n\n          </ion-avatar>\n\n          <div class="sourceTekst"><b>Fifa</b></div>\n\n          <div class="sourceTekst">Sport</div>\n\n          <button ion-button outline item-end color="green" class="ImportClassesButton">\n\n            <ion-icon name="checkmark" class="buttonIcon"></ion-icon>Toevoegen\n\n          </button>\n\n        </ion-item>\n\n\n\n        <ion-item class="sourceItem">\n\n          <ion-avatar class="avatar" item-start>\n\n            <img src="../assets/svg/FoxSports.svg">\n\n          </ion-avatar>\n\n          <div class="sourceTekst"><b>Fox Sports Go</b></div>\n\n          <div class="sourceTekst">Sport</div>\n\n        <button ion-button outline item-end color="green" class="ImportClassesButton">\n\n            <ion-icon name="checkmark" class="buttonIcon"></ion-icon>Toevoegen\n\n          </button>\n\n        </ion-item>\n\n\n\n        <ion-item class="sourceItem">\n\n          <ion-avatar class="avatar" item-start>\n\n            <img src="../assets/svg/NuSport.svg">\n\n          </ion-avatar>\n\n          <div class="sourceTekst"><b>Nu Sport</b></div>\n\n          <div class="sourceTekst">Sport</div>\n\n        <button ion-button outline item-end color="green" class="ImportClassesButton">\n\n            <ion-icon name="checkmark" class="buttonIcon"></ion-icon>Toevoegen\n\n          </button>\n\n        </ion-item>\n\n\n\n        <ion-item class="sourceItem">\n\n          <ion-avatar class="avatar" item-start>\n\n            <img src="../assets/svg/rtlz.svg">\n\n          </ion-avatar>\n\n          <div class="sourceTekst"><b>RTL Z </b></div>\n\n          <div class="sourceTekst">Sport</div>\n\n        <button ion-button outline item-end color="green" class="ImportClassesButton">\n\n            <ion-icon name="checkmark" class="buttonIcon"></ion-icon>Toevoegen\n\n          </button>\n\n        </ion-item>\n\n\n\n        <ion-item class="sourceItem">\n\n          <ion-avatar class="avatar" item-start>\n\n            <img src="../assets/svg/Voetbalzone.svg">\n\n          </ion-avatar>\n\n          <div class="sourceTekst"><b>Voetbalzone</b></div>\n\n          <div class="sourceTekst">Sport</div>\n\n        <button ion-button outline item-end color="green" class="ImportClassesButton">\n\n            <ion-icon name="checkmark" class="buttonIcon"></ion-icon>Toevoegen\n\n          </button>\n\n        </ion-item>\n\n\n\n\n\n      </ion-list>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\xampp\htdocs\News-App\src\pages\sources\sources.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], SourcesPage);
    return SourcesPage;
}());

//# sourceMappingURL=sources.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SportPage = /** @class */ (function () {
    function SportPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SportPage');
    };
    SportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sport',template:/*ion-inline-start:"c:\xampp\htdocs\News-App\src\pages\sport\sport.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle right class="fakeCenter">\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title>Sport</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n'/*ion-inline-end:"c:\xampp\htdocs\News-App\src\pages\sport\sport.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], SportPage);
    return SportPage;
}());

//# sourceMappingURL=sport.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TechPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TechPage = /** @class */ (function () {
    function TechPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TechPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TechPage');
    };
    TechPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tech',template:/*ion-inline-start:"c:\xampp\htdocs\News-App\src\pages\tech\tech.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle right class="fakeCenter">\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title>Technologie</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n'/*ion-inline-end:"c:\xampp\htdocs\News-App\src\pages\tech\tech.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], TechPage);
    return TechPage;
}());

//# sourceMappingURL=tech.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VermaakPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the VermaakPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VermaakPage = /** @class */ (function () {
    function VermaakPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    VermaakPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VermaakPage');
    };
    VermaakPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vermaak',template:/*ion-inline-start:"c:\xampp\htdocs\News-App\src\pages\vermaak\vermaak.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle right class="fakeCenter">\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title>Entertainment</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n'/*ion-inline-end:"c:\xampp\htdocs\News-App\src\pages\vermaak\vermaak.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], VermaakPage);
    return VermaakPage;
}());

//# sourceMappingURL=vermaak.js.map

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 180;

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		225
	],
	"../pages/admin/admin.module": [
		329
	],
	"../pages/auto/auto.module": [
		333
	],
	"../pages/comments/comments.module": [
		330
	],
	"../pages/economie/economie.module": [
		331
	],
	"../pages/feed/feed.module": [
		335
	],
	"../pages/misdaad/misdaad.module": [
		332
	],
	"../pages/nieuws/nieuws.module": [
		336
	],
	"../pages/privacybeleid/privacybeleid.module": [
		334
	],
	"../pages/profiel/profiel.module": [
		339
	],
	"../pages/register/register.module": [
		347
	],
	"../pages/settings/settings.module": [
		341
	],
	"../pages/sources/sources.module": [
		338
	],
	"../pages/sport/sport.module": [
		340
	],
	"../pages/tech/tech.module": [
		342
	],
	"../pages/tutorial/tutorial.module": [
		344
	],
	"../pages/vermaak/vermaak.module": [
		343
	],
	"../pages/wijzigwachtwoord/wijzigwachtwoord.module": [
		346
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 224;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
            ],
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterPage = /** @class */ (function () {
    // Construtor hiermee roep je alles aan
    function RegisterPage(navCtrl, navParams, alertCtrl, http, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loading = loading;
    }
    RegisterPage.prototype.ngOnInit = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].pattern('[a-zA-Z][a-zA-z ]+') /*, Validators.minLength(3)*/]),
            password: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$')]),
            email: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')])
        });
    };
    // Push terug naar home button
    RegisterPage.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field); //{3}
            if (control instanceof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormGroup */]) {
                _this.validateAllFormFields(control); //{6}
            }
        });
    };
    RegisterPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.invalid) {
            this.validateAllFormFields(this.form); //{7}
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options_1 = { headers: headers };
            var data_1 = {
                username: this.username,
                password: this.password,
                email: this.email
            };
            var loader_1 = this.loading.create({
                content: 'Aan het registreren..',
            });
            loader_1.present().then(function () {
                _this.http.post('http://gazoh.net/register.php', data_1, options_1)
                    .map(function (res) { return res; })
                    .subscribe(function (res) {
                    loader_1.dismiss();
                    if (res == "Registration successfull") {
                        var alert_1 = _this.alertCtrl.create({
                            title: "Registreren geslaagd",
                            subTitle: "U kunt nu gaan inloggen",
                            buttons: ['OK']
                        });
                        alert_1.present();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                    }
                    else if (res == "already in use") {
                        var alert_2 = _this.alertCtrl.create({
                            title: "Registreren mislukt",
                            subTitle: "Er bestaat al een gebruiker met het zelfde email of gebruikersnaam!",
                            buttons: ['OK']
                        });
                        alert_2.present();
                    }
                    else {
                        var alert_3 = _this.alertCtrl.create({
                            title: "Mislukt",
                            subTitle: "Er is iets mis gegaan tijdens het registeren probeert u het opnieuw.",
                            buttons: ['OK']
                        });
                        alert_3.present();
                    }
                });
            });
        }
    };
    // Push terug naar home button
    RegisterPage.prototype.terug = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"c:\xampp\htdocs\News-App\src\pages\register\register.html"*/'<ion-content>\n\n  <ion-grid style="height: 100%" class="gridPadding">\n\n    <ion-row justify-content-center align-items-center style="height: 100%">\n\n\n\n      <ion-col col-12>\n\n        <div class="ValidatieText">\n\n          <h2 class="WelkomText2">Meld je nu aan</h2>\n\n          <p class="gavederText">Maak een account aan om verder te gaan!</p>\n\n        </div>\n\n        <div class="ValidatieLogin">\n\n                  <form novalidate [formGroup]="form">\n\n                    <div class="form-group">\n\n                      <ion-item [ngClass]="{ \'ng-touched\' : form.get(\'username\').touched }">>\n\n                        <ion-label floating>Gebruikersnaam</ion-label>\n\n                        <ion-input type="text" formControlName="username" class="form-control" [(ngModel)]="username"></ion-input>\n\n                      </ion-item>\n\n                    </div>\n\n                    <div *ngIf="form.get(\'username\').touched && form.get(\'username\').invalid" class="alert alert-danger" required>\n\n                      <div class="validatieText" *ngIf="form.get(\'username\').hasError(\'required\')">Naam moet ingevuld zijn.</div>\n\n                      <div class="validatieText" *ngIf="form.get(\'username\').hasError(\'pattern\')">Ongeldige naam.</div>\n\n                    </div>\n\n\n\n                    <div class="form-group">\n\n                      <ion-item [ngClass]="{ \'ng-touched\' : form.get(\'email\').touched }">\n\n                        <ion-label floating>E-mail</ion-label>\n\n                        <ion-input type="email" formControlName="email" class="form-control" [(ngModel)]="email"></ion-input>\n\n                      </ion-item>\n\n                    </div>\n\n                    <div *ngIf="form.get(\'email\').touched && form.get(\'email\').invalid" class="alert alert-danger" required>\n\n                      <div class="validatieText" *ngIf="form.get(\'email\').hasError(\'required\')">Email moet ingevuld zijn</div>\n\n                      <div class="validatieText" *ngIf="form.get(\'email\').hasError(\'pattern\')">Ongeldige Email!</div>\n\n                    </div>\n\n\n\n                    <div class="form-group">\n\n                      <ion-item [ngClass]="{ \'ng-touched\' : form.get(\'password\').touched }">\n\n                        <ion-label floating>Wachtwoord</ion-label>\n\n                        <ion-input type="password" formControlName="password" class="form-control" [(ngModel)]="password"></ion-input>\n\n                      </ion-item>\n\n                    </div>\n\n                    <div class="alert alert-danger" *ngIf="form.get(\'password\').touched && form.get(\'password\').invalid ">\n\n                      <div class="validatieText" *ngIf="form.get(\'password\').hasError(\'required\')">Wachtwoord moet ingevuld zijn</div>\n\n                      <div class="validatieText" *ngIf="form.get(\'password\').hasError(\'minLength\')">Wachtwoord moet minimaal 8 tekens lang zijn</div>\n\n                      <div class="validatieText" *ngIf="form.get(\'password\').hasError(\'pattern\')">Wachtwoord moet minstens een hoofdletter, een kleine letter en een cijfer bevatten</div>\n\n                    </div>\n\n                  </form>\n\n\n\n                  <br>\n\n                  <div class="Validatie2Login">\n\n                    <button ion-button class="loginButton" (click)="onSubmit()">Registreren</button>\n\n                  </div>\n\n                </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\xampp\htdocs\News-App\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacybeleidPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PrivacybeleidPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrivacybeleidPage = /** @class */ (function () {
    function PrivacybeleidPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PrivacybeleidPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrivacybeleidPage');
    };
    PrivacybeleidPage.prototype.returnSettings = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */]);
    };
    PrivacybeleidPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-privacybeleid',template:/*ion-inline-start:"c:\xampp\htdocs\News-App\src\pages\privacybeleid\privacybeleid.html"*/'<!--\n\n  Generated template for the PrivacybeleidPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Privacy Beleid</ion-title>\n\n        <button ion-button left class="BackButton" (click)="returnSettings()">\n\n            <ion-icon name="arrow-back"></ion-icon>\n\n        </button>\n\n\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <img class="voorwaardenLogo" src="../../assets/imgs/voorwaardenLogo.png" height="75" width="75"/>\n\n    <p>Axa Studios heeft de NewsAge-app gebouwd als een advertentie-ondersteunde app. Deze SERVICE wordt gratis door Axa\n\n        Studios geleverd en is bedoeld voor gebruik zoals het hoort.\n\n        Deze pagina wordt gebruikt om bezoekers te informeren over ons beleid met betrekking tot het verzamelen,\n\n        gebruiken en vrijgeven van persoonlijke informatie als iemand beslist om onze service te gebruiken.\n\n        Als u ervoor kiest om onze Service te gebruiken, stemt u in met het verzamelen en gebruiken van informatie in\n\n        verband met dit beleid. De persoonlijke informatie die we verzamelen, wordt gebruikt voor het leveren en\n\n        verbeteren van de service. We zullen uw informatie niet gebruiken of delen met iemand anders dan zoals\n\n        beschreven in dit privacybeleid.\n\n        De termen die in dit Privacybeleid worden gebruikt, hebben dezelfde betekenis als in onze Algemene voorwaarden,\n\n        die toegankelijk is via NewsAge, tenzij anders gedefinieerd in dit Privacybeleid.\n\n        Informatie verzamelen en gebruiken\n\n        Voor een betere ervaring tijdens het gebruik van onze service, kunnen we van u verlangen dat u ons bepaalde\n\n        persoonlijk identificeerbare informatie verstrekt. De door ons gevraagde informatie wordt door ons bewaard en\n\n        gebruikt zoals beschreven in dit privacybeleid.\n\n        De app maakt gebruik van services van derden die mogelijk informatie verzamelen die wordt gebruikt om u te\n\n        identificeren.\n\n        Link naar het privacybeleid van externe serviceproviders die door de app worden gebruikt\n\n        <br>• Google Play-services</p>\n\n\n\n    <h3 class="voorwaardenH3">Loggegevens</h3>\n\n    <p>\n\n        We willen u laten weten dat wanneer u onze Service gebruikt, we in geval van een fout in de app gegevens en\n\n        informatie (via producten van derden) op uw telefoon verzamelen, genaamd Loggegevens. Deze loggegevens kunnen\n\n        informatie bevatten zoals het IP-adres (device protocol), de apparaatnaam, de versie van het besturingssysteem,\n\n        de configuratie van de app bij het gebruik van onze service, het tijdstip en de datum van uw gebruik van de\n\n        service en andere statistieken. </p>\n\n\n\n    <h3 class="voorwaardenH3"> Cookies</h3>\n\n    <p>\n\n        Cookies zijn bestanden met een kleine hoeveelheid gegevens die vaak worden gebruikt als anonieme unieke ID\'s.\n\n        Deze worden naar uw browser verzonden vanaf de websites die u bezoekt en worden opgeslagen op het interne\n\n        geheugen van uw apparaat.\n\n        Deze Service gebruikt deze "cookies" niet expliciet. De app kan echter code van derden en bibliotheken gebruiken\n\n        die \'cookies\' gebruiken om informatie te verzamelen en hun services te verbeteren. U hebt de mogelijkheid deze\n\n        cookies te accepteren of te weigeren en te weten wanneer een cookie naar uw apparaat wordt verzonden. Als u\n\n        ervoor kiest om onze cookies te weigeren, kunt u sommige delen van deze service mogelijk niet gebruiken.\n\n    </p>\n\n    <h3 class="voorwaardenH3">Dienstverleners</h3>\n\n    <p>\n\n        Om de volgende redenen kunnen we bedrijven en personen van derden in dienst nemen:<br>\n\n        • Om onze service te vergemakkelijken;<br>\n\n        • Om de Service namens ons te leveren;<br>\n\n        • Servicegerelateerde services uitvoeren; of<br>\n\n        • Om ons te helpen bij het analyseren van hoe onze Service wordt gebruikt.<br>\n\n        We willen gebruikers van deze Service informeren dat deze derden toegang hebben tot uw Persoonlijke Informatie.\n\n        De reden is om namens ons de taken uit te voeren die aan hen zijn toegewezen. Ze zijn echter verplicht om de\n\n        informatie voor geen enkel ander doel openbaar te maken of te gebruiken.\n\n        Veiligheid<br>\n\n        We waarderen uw vertrouwen in het verstrekken van uw persoonlijke gegevens, dus we streven ernaar om commercieel\n\n        aanvaardbare middelen te gebruiken om deze te beschermen. Maar vergeet niet dat geen enkele verzendmethode via\n\n        internet of elektronische opslag 100% veilig en betrouwbaar is en we kunnen de absolute veiligheid ervan niet\n\n        garanderen.</p>\n\n\n\n    <h3 class="voorwaardenH3">Links naar andere sites</h3>\n\n    <p>\n\n        Deze Service kan links naar andere sites bevatten. Als u op een link van derden klikt, wordt u naar die site\n\n        geleid. Merk op dat deze externe sites niet door ons worden beheerd. Daarom raden wij u ten zeerste aan om het\n\n        Privacybeleid van deze websites te bekijken. We hebben geen controle over en nemen geen verantwoordelijkheid\n\n        voor de inhoud, het privacybeleid of de praktijken van sites of services van derden.\n\n        Privacy van kinderen<br>\n\n        Deze Services richten zich niet tot iemand onder de leeftijd van 13. We verzamelen niet bewust persoonlijk\n\n        identificeerbare informatie van kinderen onder de 13. Als we ontdekken dat een kind jonger dan 13 jaar ons\n\n        persoonlijke informatie heeft verstrekt, verwijderen we dit onmiddellijk van onze servers. Als u een ouder of\n\n        voogd bent en u weet dat uw kind ons persoonlijke informatie heeft verstrekt, neem dan contact met ons op zodat\n\n        we de nodige acties kunnen ondernemen.</p>\n\n\n\n    <h3 class="voorwaardenH3">Wijzigingen in dit privacybeleid</h3>\n\n    <p>\n\n        We kunnen ons privacybeleid van tijd tot tijd bijwerken. Daarom wordt u geadviseerd deze pagina regelmatig te\n\n        controleren op eventuele wijzigingen. We zullen u op de hoogte brengen van eventuele wijzigingen door het nieuwe\n\n        Privacybeleid op deze pagina te plaatsen. Deze wijzigingen zijn van kracht onmiddellijk nadat ze op deze pagina\n\n        zijn geplaatst.\n\n        Neem contact met ons op\n\n        Als u vragen of suggesties heeft over ons privacybeleid, aarzel dan niet om contact met ons op te nemen.</p>\n\n</ion-content>\n\n<ion-footer class="footerMenu">\n\n    <ion-toolbar class="toolbarFooter">\n\n        <div class="versienummer"><b>©NewsAge</b> V5.0.6</div>\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"c:\xampp\htdocs\News-App\src\pages\privacybeleid\privacybeleid.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], PrivacybeleidPage);
    return PrivacybeleidPage;
}());

//# sourceMappingURL=privacybeleid.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageModule", function() { return AdminPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdminPageModule = /** @class */ (function () {
    function AdminPageModule() {
    }
    AdminPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admin__["a" /* AdminPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin__["a" /* AdminPage */]),
            ],
        })
    ], AdminPageModule);
    return AdminPageModule;
}());

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsPageModule", function() { return CommentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comments__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CommentsPageModule = /** @class */ (function () {
    function CommentsPageModule() {
    }
    CommentsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__comments__["a" /* CommentsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__comments__["a" /* CommentsPage */]),
            ],
        })
    ], CommentsPageModule);
    return CommentsPageModule;
}());

//# sourceMappingURL=comments.module.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EconomiePageModule", function() { return EconomiePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__economie__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EconomiePageModule = /** @class */ (function () {
    function EconomiePageModule() {
    }
    EconomiePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__economie__["a" /* EconomiePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__economie__["a" /* EconomiePage */]),
            ],
        })
    ], EconomiePageModule);
    return EconomiePageModule;
}());

//# sourceMappingURL=economie.module.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisdaadPageModule", function() { return MisdaadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__misdaad__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MisdaadPageModule = /** @class */ (function () {
    function MisdaadPageModule() {
    }
    MisdaadPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__misdaad__["a" /* MisdaadPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__misdaad__["a" /* MisdaadPage */]),
            ],
        })
    ], MisdaadPageModule);
    return MisdaadPageModule;
}());

//# sourceMappingURL=misdaad.module.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoPageModule", function() { return AutoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auto__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AutoPageModule = /** @class */ (function () {
    function AutoPageModule() {
    }
    AutoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__auto__["a" /* AutoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__auto__["a" /* AutoPage */]),
            ],
        })
    ], AutoPageModule);
    return AutoPageModule;
}());

//# sourceMappingURL=auto.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacybeleidPageModule", function() { return PrivacybeleidPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__privacybeleid__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PrivacybeleidPageModule = /** @class */ (function () {
    function PrivacybeleidPageModule() {
    }
    PrivacybeleidPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__privacybeleid__["a" /* PrivacybeleidPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__privacybeleid__["a" /* PrivacybeleidPage */]),
            ],
        })
    ], PrivacybeleidPageModule);
    return PrivacybeleidPageModule;
}());

//# sourceMappingURL=privacybeleid.module.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function() { return FeedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FeedPageModule = /** @class */ (function () {
    function FeedPageModule() {
    }
    FeedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__feed__["a" /* FeedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__feed__["a" /* FeedPage */]),
            ],
        })
    ], FeedPageModule);
    return FeedPageModule;
}());

//# sourceMappingURL=feed.module.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NieuwsPageModule", function() { return NieuwsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nieuws__ = __webpack_require__(704);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NieuwsPageModule = /** @class */ (function () {
    function NieuwsPageModule() {
    }
    NieuwsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nieuws__["a" /* NieuwsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nieuws__["a" /* NieuwsPage */]),
            ],
        })
    ], NieuwsPageModule);
    return NieuwsPageModule;
}());

//# sourceMappingURL=nieuws.module.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourcesPageModule", function() { return SourcesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sources__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SourcesPageModule = /** @class */ (function () {
    function SourcesPageModule() {
    }
    SourcesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sources__["a" /* SourcesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sources__["a" /* SourcesPage */]),
            ],
        })
    ], SourcesPageModule);
    return SourcesPageModule;
}());

//# sourceMappingURL=sources.module.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfielPageModule", function() { return ProfielPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profiel__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfielPageModule = /** @class */ (function () {
    function ProfielPageModule() {
    }
    ProfielPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profiel__["a" /* ProfielPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profiel__["a" /* ProfielPage */]),
            ],
        })
    ], ProfielPageModule);
    return ProfielPageModule;
}());

//# sourceMappingURL=profiel.module.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportPageModule", function() { return SportPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sport__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SportPageModule = /** @class */ (function () {
    function SportPageModule() {
    }
    SportPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sport__["a" /* SportPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sport__["a" /* SportPage */]),
            ],
        })
    ], SportPageModule);
    return SportPageModule;
}());

//# sourceMappingURL=sport.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
            ],
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechPageModule", function() { return TechPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tech__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TechPageModule = /** @class */ (function () {
    function TechPageModule() {
    }
    TechPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tech__["a" /* TechPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tech__["a" /* TechPage */]),
            ],
        })
    ], TechPageModule);
    return TechPageModule;
}());

//# sourceMappingURL=tech.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VermaakPageModule", function() { return VermaakPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vermaak__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VermaakPageModule = /** @class */ (function () {
    function VermaakPageModule() {
    }
    VermaakPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vermaak__["a" /* VermaakPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vermaak__["a" /* VermaakPage */]),
            ],
        })
    ], VermaakPageModule);
    return VermaakPageModule;
}());

//# sourceMappingURL=vermaak.module.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TutorialPageModule = /** @class */ (function () {
    function TutorialPageModule() {
    }
    TutorialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */]),
            ],
        })
    ], TutorialPageModule);
    return TutorialPageModule;
}());

//# sourceMappingURL=tutorial.module.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed_feed__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TutorialPage = /** @class */ (function () {
    function TutorialPage(navCtrl, navParams, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.slides = [
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
    }
    TutorialPage.prototype.tutorialDone = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__feed_feed__["a" /* FeedPage */]);
    };
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"c:\xampp\htdocs\News-App\src\pages\tutorial\tutorial.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle right class="fakeCenter">\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title>Tutorial</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="tutorial-page">\n\n  <ion-slides pager>\n\n    <ion-slide *ngFor="let slide of slides">\n\n      <img [src]="slide.image" class="slide-image"/>\n\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n\n      <p [innerHTML]="slide.description"></p>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <img src="../../assets/imgs/NewsAgeLogo.png" class="slide-image"/>\n\n      <h2 class="slide-title">Bent u er klaar voor?</h2>\n\n      <button ion-button large clear icon-end color="primary" (click)="tutorialDone()">\n\n        Doorgaan!\n\n        <ion-icon name="arrow-forward"></ion-icon>\n\n      </button>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\xampp\htdocs\News-App\src\pages\tutorial\tutorial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WijzigwachtwoordPageModule", function() { return WijzigwachtwoordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wijzigwachtwoord__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WijzigwachtwoordPageModule = /** @class */ (function () {
    function WijzigwachtwoordPageModule() {
    }
    WijzigwachtwoordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wijzigwachtwoord__["a" /* WijzigwachtwoordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wijzigwachtwoord__["a" /* WijzigwachtwoordPage */]),
            ],
        })
    ], WijzigwachtwoordPageModule);
    return WijzigwachtwoordPageModule;
}());

//# sourceMappingURL=wijzigwachtwoord.module.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_feed_feed__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_sport_sport__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_economie_economie__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_misdaad_misdaad__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tech_tech__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_auto_auto__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_favorieten_favorieten__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_vermaak_vermaak__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sources_sources__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MenuProvider = /** @class */ (function () {
    function MenuProvider(http) {
        this.http = http;
    }
    MenuProvider.prototype.getSideMenus = function () {
        return [{
                title: 'Startpagina',
                component: __WEBPACK_IMPORTED_MODULE_2__pages_feed_feed__["a" /* FeedPage */],
                icon: 'home'
            },
            {
                title: 'Sources',
                component: __WEBPACK_IMPORTED_MODULE_12__pages_sources_sources__["a" /* SourcesPage */],
                icon: 'star'
            },
            {
                title: 'Categorieen',
                icon: 'filing',
                subPages: [{
                        title: 'Sport',
                        component: __WEBPACK_IMPORTED_MODULE_3__pages_sport_sport__["a" /* SportPage */],
                        icon: 'football'
                    }, {
                        title: 'Economie',
                        component: __WEBPACK_IMPORTED_MODULE_4__pages_economie_economie__["a" /* EconomiePage */],
                        icon: 'cash'
                    }, {
                        title: 'Misdaad',
                        component: __WEBPACK_IMPORTED_MODULE_5__pages_misdaad_misdaad__["a" /* MisdaadPage */],
                        icon: 'walk'
                    }, {
                        title: 'Technologie',
                        component: __WEBPACK_IMPORTED_MODULE_6__pages_tech_tech__["a" /* TechPage */],
                        icon: 'desktop'
                    }, {
                        title: "Auto's",
                        component: __WEBPACK_IMPORTED_MODULE_7__pages_auto_auto__["a" /* AutoPage */],
                        icon: 'car'
                    }, {
                        title: 'Entertainment',
                        component: __WEBPACK_IMPORTED_MODULE_11__pages_vermaak_vermaak__["a" /* VermaakPage */],
                        icon: 'contacts'
                    }]
            },
            {
                title: 'Favorieten',
                component: __WEBPACK_IMPORTED_MODULE_10__pages_favorieten_favorieten__["a" /* FavorietenPage */],
                icon: 'heart'
            },
            {
                title: 'Notificaties',
                component: __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */],
                icon: 'notifications'
            },
            {
                title: 'Tutorial',
                component: __WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__["a" /* TutorialPage */],
                icon: 'map'
            },
            {
                title: 'Instellingen',
                component: __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */],
                icon: 'settings'
            }
        ];
    };
    MenuProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], MenuProvider);
    return MenuProvider;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavorietenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comments_comments__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the FavorietenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavorietenPage = /** @class */ (function () {
    function FavorietenPage(navCtrl, navParams, http, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
    }
    FavorietenPage.prototype.ionViewWillEnter = function () {
        this.getFavs();
    };
    FavorietenPage.prototype.getFavs = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = { headers: headers };
        var data = {
            userId: localStorage.getItem('userId')
        };
        this.http.post('http://www.gazoh.net/getliked.php', data, options).subscribe(function (res) {
            _this.likedarticles = res;
            if (_this.likedarticles) {
                _this.likedarticles.sort(function (a, b) {
                    return +new Date(b.datum) - +new Date(a.datum);
                });
            }
            console.log(res);
        });
    };
    FavorietenPage.prototype.htmlToPlaintext = function (text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
    // Redirect to NieuwsPage
    FavorietenPage.prototype.viewEntry = function (param) {
        this.navCtrl.push('NieuwsPage', param);
    };
    // Doorverbinden naar de CommentsPage
    FavorietenPage.prototype.viewComments = function (param) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__comments_comments__["a" /* CommentsPage */], param);
    };
    FavorietenPage.prototype.dislike = function (articleId, articleTitle) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = { headers: headers };
        var data = {
            articleId: articleId,
            userId: localStorage.getItem('userId')
        };
        this.http.post('http://gazoh.net/unlike.php', data, options)
            .subscribe(function (data) {
            if (data == "unliked") {
                _this.getFavs();
                var toast = _this.toastCtrl.create({
                    message: articleTitle + " is verwijderd uit je favorieten!",
                    duration: 2500,
                    position: "bottom"
                });
                toast.present();
            }
        });
    };
    FavorietenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorieten',template:/*ion-inline-start:"c:\xampp\htdocs\News-App\src\pages\favorieten\favorieten.html"*/'<ion-header no-border-bottom>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle right class="fakeCenter">\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Favorieten</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-grid>\n\n        <ion-col>\n\n            <ion-row>\n\n                <ion-card *ngFor="let item of likedarticles" col-md-6 class="ionCard">\n\n                    <!-- Images van nieuwsfeed -->\n\n                    <div class="ion-card-image-wrapper" (click)="viewEntry({ record: item })">\n\n                        <img *ngIf="!item.image" src="../assets/imgs/noimage.jpg">\n\n                        <img [src]="item.image" *ngIf="item.site == \'NOS.nl\'">\n\n                        <img [src]="item.image" *ngIf="item.site != \'NOS.nl\' || item.site != \'NU.nl\'">\n\n                    </div>\n\n                    <ion-card-content>\n\n                        <!-- Avatar -->\n\n                        <div id="AvatarFeed" (click)="viewEntry({ record: item })">\n\n                            <ion-avatar *ngIf="item.site == \'NOS\'" class="avatar" item-start>\n\n                                <img src="../assets/svg/NOS_logo.svg" class="avatar-feedNOS" />\n\n                            </ion-avatar>\n\n                            <ion-avatar *ngIf="item.site == \'NU.nl\'" class="avatar" item-start>\n\n                                <img src="../assets/svg/nu.nl.svg" class="avatar-feed" />\n\n                            </ion-avatar>\n\n                            <ion-avatar *ngIf="item.site == \'De Telegraaf\'" class="avatar" item-start>\n\n                                <img src="../assets/svg/telegraaf.svg" class="avatar-feedTelegraaf" />\n\n                            </ion-avatar>\n\n                        </div>\n\n                        <!-- Uitgever -->\n\n                        <div id="uitgeverFeed" class="uitgeverFeed" (click)="viewEntry({ record: item })">\n\n                            <span>{{item.site}}</span>\n\n                            <!-- Title  -->\n\n                            <div id="title">\n\n                                <ion-card-title class="TitleFeed">\n\n                                    <strong>{{item.title}}</strong>\n\n                                </ion-card-title>\n\n                            </div>\n\n                            <!-- description  -->\n\n                            <div id="description">\n\n                                <p class="descriptionFeed">{{htmlToPlaintext(item.description) | slice:0:120}}...</p>\n\n                            </div>\n\n                            <!-- Datum -->\n\n                            <div id="datumFeed" class="datumFeed">\n\n                                <span>{{item.datum}}</span>\n\n                            </div>\n\n                        </div>\n\n                        <!-- Social Buttons - Comments - likes - Share -->\n\n                        <div id="socialLikeComments" class="socialLikeComments">\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'De Telegraaf\'" class="socialTelegraafShare" (click)="shareInfo()">\n\n                                <ion-icon name="share-alt"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'NOS\'" class="socialNOSShare" (click)="shareInfo()">\n\n                                <ion-icon name="share-alt"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'NU.nl\'" class="socialNuShare" (click)="shareInfo()">\n\n                                <ion-icon name="share-alt"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'De Telegraaf\'" class="socialTelegraaf" (click)="viewComments({ record: item })">\n\n                                <ion-icon name="chatbubbles"></ion-icon>\n\n                                <div>{{item.comments}}</div>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'NOS\'" class="socialNOS" (click)="viewComments({ record: item })">\n\n                                <ion-icon name="chatbubbles"></ion-icon>\n\n                                <div>{{item.comments}}</div>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'NU.nl\'" class="socialNu" (click)="viewComments({ record: item })">\n\n                                <ion-icon name="chatbubbles"></ion-icon>\n\n                                <div>{{item.comments}}</div>\n\n                            </button>\n\n                            <button class="socialTelegraaf" ion-button icon-start clear *ngIf="item.site == \'De Telegraaf\'" (click)="dislike(item.id, item.title)">\n\n                                <ion-icon name="heart"></ion-icon>\n\n                                <div>{{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialNOS" ion-button icon-start clear *ngIf="item.site == \'NOS\'" (click)="dislike(item.id, item.title)">\n\n                                <ion-icon name="heart"></ion-icon>\n\n                                <div>{{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialNu" ion-button icon-start clear *ngIf="item.site == \'NU.nl\'" (click)="dislike(item.id, item.title)">\n\n                                <ion-icon name="heart"></ion-icon>\n\n                                <div>{{item.likes}}</div>\n\n                            </button>\n\n                        </div>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ion-row>\n\n        </ion-col>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\xampp\htdocs\News-App\src\pages\favorieten\favorieten.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
    ], FavorietenPage);
    return FavorietenPage;
}());

//# sourceMappingURL=favorieten.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(396);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_screen_orientation__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_header_color__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_photo_viewer__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_sources_sources__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_profiel_profiel__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_sport_sport__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_economie_economie__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_auto_auto__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_misdaad_misdaad__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_tech_tech__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_admin_admin__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_about_about__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_comments_comments__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_vermaak_vermaak__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_wijzigwachtwoord_wijzigwachtwoord__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_nieuws_nieuws_module__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_storage__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_favorieten_favorieten_module__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_feed_feed_module__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_register_register_module__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_tutorial_tutorial_module__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_settings_settings_module__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_sport_sport_module__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_economie_economie_module__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_auto_auto_module__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_misdaad_misdaad_module__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_tech_tech_module__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_admin_admin_module__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_sources_sources_module__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_profiel_profiel_module__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_about_about_module__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_wijzigwachtwoord_wijzigwachtwoord_module__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_comments_comments_module__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_vermaak_vermaak_module__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_privacybeleid_privacybeleid_module__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__providers_menu_menu__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ionic_native_social_sharing__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















//
// Pages
//














//
// Modules
//






















//
// Providers
//


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    mode: "md",
                    scrollAssist: false,
                    autoFocusAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comments/comments.module#CommentsPageModule', name: 'CommentsPage', segment: 'comments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/economie/economie.module#EconomiePageModule', name: 'EconomiePage', segment: 'economie', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/misdaad/misdaad.module#MisdaadPageModule', name: 'MisdaadPage', segment: 'misdaad', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/auto/auto.module#AutoPageModule', name: 'AutoPage', segment: 'auto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/privacybeleid/privacybeleid.module#PrivacybeleidPageModule', name: 'PrivacybeleidPage', segment: 'privacybeleid', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feed/feed.module#FeedPageModule', name: 'FeedPage', segment: 'feed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nieuws/nieuws.module#NieuwsPageModule', name: 'NieuwsPage', segment: 'nieuws', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sources/sources.module#SourcesPageModule', name: 'SourcesPage', segment: 'sources', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profiel/profiel.module#ProfielPageModule', name: 'ProfielPage', segment: 'profiel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sport/sport.module#SportPageModule', name: 'SportPage', segment: 'sport', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tech/tech.module#TechPageModule', name: 'TechPage', segment: 'tech', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vermaak/vermaak.module#VermaakPageModule', name: 'VermaakPage', segment: 'vermaak', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wijzigwachtwoord/wijzigwachtwoord.module#WijzigwachtwoordPageModule', name: 'WijzigwachtwoordPage', segment: 'wijzigwachtwoord', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_31__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_34__pages_favorieten_favorieten_module__["a" /* FavorietenPageModule */],
                __WEBPACK_IMPORTED_MODULE_35__pages_feed_feed_module__["FeedPageModule"],
                __WEBPACK_IMPORTED_MODULE_36__pages_register_register_module__["RegisterPageModule"],
                __WEBPACK_IMPORTED_MODULE_30__pages_nieuws_nieuws_module__["NieuwsPageModule"],
                __WEBPACK_IMPORTED_MODULE_37__pages_tutorial_tutorial_module__["TutorialPageModule"],
                __WEBPACK_IMPORTED_MODULE_38__pages_settings_settings_module__["SettingsPageModule"],
                __WEBPACK_IMPORTED_MODULE_39__pages_sport_sport_module__["SportPageModule"],
                __WEBPACK_IMPORTED_MODULE_40__pages_economie_economie_module__["EconomiePageModule"],
                __WEBPACK_IMPORTED_MODULE_41__pages_auto_auto_module__["AutoPageModule"],
                __WEBPACK_IMPORTED_MODULE_42__pages_misdaad_misdaad_module__["MisdaadPageModule"],
                __WEBPACK_IMPORTED_MODULE_43__pages_tech_tech_module__["TechPageModule"],
                __WEBPACK_IMPORTED_MODULE_44__pages_admin_admin_module__["AdminPageModule"],
                __WEBPACK_IMPORTED_MODULE_45__pages_sources_sources_module__["SourcesPageModule"],
                __WEBPACK_IMPORTED_MODULE_46__pages_profiel_profiel_module__["ProfielPageModule"],
                __WEBPACK_IMPORTED_MODULE_47__pages_about_about_module__["AboutPageModule"],
                __WEBPACK_IMPORTED_MODULE_49__pages_comments_comments_module__["CommentsPageModule"],
                __WEBPACK_IMPORTED_MODULE_48__pages_wijzigwachtwoord_wijzigwachtwoord_module__["WijzigwachtwoordPageModule"],
                __WEBPACK_IMPORTED_MODULE_50__pages_vermaak_vermaak_module__["VermaakPageModule"],
                __WEBPACK_IMPORTED_MODULE_51__pages_privacybeleid_privacybeleid_module__["PrivacybeleidPageModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_sport_sport__["a" /* SportPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_economie_economie__["a" /* EconomiePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_auto_auto__["a" /* AutoPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_misdaad_misdaad__["a" /* MisdaadPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_tech_tech__["a" /* TechPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_sources_sources__["a" /* SourcesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_profiel_profiel__["a" /* ProfielPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_comments_comments__["a" /* CommentsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_wijzigwachtwoord_wijzigwachtwoord__["a" /* WijzigwachtwoordPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_vermaak_vermaak__["a" /* VermaakPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_31__angular_common_http__["b" /* HttpClientModule */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__["a" /* SettingsProvider */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__["a" /* SettingsProvider */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_header_color__["a" /* HeaderColor */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_52__providers_menu_menu__["a" /* MenuProvider */],
                __WEBPACK_IMPORTED_MODULE_53__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_photo_viewer__["a" /* PhotoViewer */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_admin__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profiel_profiel__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__privacybeleid_privacybeleid__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SettingsPage = /** @class */ (function () {
    function SettingsPage(settings, platform, navCtrl, alertCtrl, http, events) {
        var _this = this;
        this.settings = settings;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.events = events;
        this.theme = localStorage.getItem('themeColor');
        this.timer = false;
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
        if (this.theme == "light-theme") {
            this.toggleStatus = false;
            setTimeout(function () { return _this.timer = false; }, 3500);
        }
        else if (this.theme == "dark-theme") {
            this.toggleStatus = true;
            setTimeout(function () { return _this.timer = false; }, 3500);
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = { headers: headers };
        var data = {
            email: localStorage.getItem('userEmail'),
        };
        this.http.post('http://gazoh.net/getgebruiker.php', data, options)
            .subscribe(function (data) {
            _this.dataUser = data;
            _this.username = _this.dataUser.username;
            _this.userEmail = _this.dataUser.email;
            _this.rol = _this.dataUser.rol;
            _this.token = _this.dataUser.token;
            _this.profilepicture = _this.dataUser.profilepicture;
            _this.emailVerified = _this.dataUser.emailVerified;
            _this.events.publish("username", _this.username);
            _this.events.publish("profilepicture", _this.profilepicture);
        });
    }
    SettingsPage.prototype.toggleAppTheme = function () {
        if (this.selectedTheme == 'light-theme') {
            this.settings.setActiveTheme('dark-theme');
            localStorage.setItem("themeColor", this.selectedTheme);
        }
        else if (this.selectedTheme == 'dark-theme') {
            this.settings.setActiveTheme('light-theme');
            localStorage.setItem("themeColor", this.selectedTheme);
        }
    };
    SettingsPage.prototype.openAdmin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__admin_admin__["a" /* AdminPage */]);
    };
    SettingsPage.prototype.uitloggen = function () {
        localStorage.clear();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    SettingsPage.prototype.resendMail = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = { headers: headers };
        var data = {
            email: this.userEmail,
            username: this.username,
            token: this.token
        };
        this.http.post('http://gazoh.net/resendmail.php', data, options)
            .subscribe(function (data) {
            if (data == "email sent") {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Email verstuurd',
                    subTitle: 'De verificatiemail is opnieuw verstuurd naar: ' + _this.userEmail,
                    buttons: ['Sluiten']
                });
                alert_1.present();
            }
        });
    };
    SettingsPage.prototype.rapporteer = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Raporteer een probleem',
            inputs: [
                {
                    name: 'onderwerp',
                    placeholder: 'Onderwerp'
                },
                {
                    name: 'bericht',
                    placeholder: 'Omschrijf het probleem'
                }
            ],
            buttons: [
                {
                    text: 'Annuleer',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Verstuur',
                    handler: function (data) {
                        _this.rapporteerProbleem(data);
                    }
                }
            ]
        });
        prompt.present();
    };
    SettingsPage.prototype.goProfiel = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__profiel_profiel__["a" /* ProfielPage */]);
    };
    SettingsPage.prototype.privacyBeleid = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__privacybeleid_privacybeleid__["a" /* PrivacybeleidPage */]);
    };
    SettingsPage.prototype.rapporteerProbleem = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = { headers: headers };
        this.http.post('http://gazoh.net/rapporteer.php', data, options).map(function (res) { return res; })
            .subscribe(function (res) {
            if (res == 'succes') {
                var alert_2 = _this.alertCtrl.create({
                    title: "Geslaagd",
                    subTitle: "Uw probleem is gerapporteerd!",
                    buttons: ['OK']
                });
                alert_2.present();
            }
        });
        console.log('Probleem gerapporteerd ' + data);
    };
    SettingsPage.prototype.overOns = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__about_about__["a" /* AboutPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
    ], SettingsPage.prototype, "nav", void 0);
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"c:\xampp\htdocs\News-App\src\pages\settings\settings.html"*/'<ion-header no-border-bottom>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle right class="fakeCenter">\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Instellingen</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-card *ngIf="emailVerified == 0" class="cardVerification">\n\n        <div class="containerVerification">\n\n            <ion-card-header class="verificationHeader">\n\n                <ion-icon name="alert" class="alertIcon"></ion-icon>\n\n                Verifieer je email\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <p class="emailVerificationText">Controleer uw e-mailadres en volg de instructies om uw account te verifiëren. Als u een e-mail niet hebt ontvangen of als het is verlopen, kunt u opnieuw een verzenden.</p>\n\n                <button ion-button block (click)="resendMail()" class="buttonStuurOpnieuwVerification"><span class="verifyText">Verifieer</span></button>\n\n            </ion-card-content>\n\n        </div>\n\n    </ion-card>\n\n    <ion-item class="" (click)="goProfiel()">\n\n        <ion-label class="DarkLabel">\n\n            <ion-icon name="person" class="iconInstellingen"></ion-icon>\n\n            Bewerk Profiel\n\n        </ion-label>\n\n    </ion-item>\n\n    <ion-item class="" (click)="rapporteer()">\n\n        <ion-label class="DarkLabel">\n\n            <ion-icon name="warning" class="iconInstellingen"></ion-icon>\n\n            Raporteer probleem\n\n        </ion-label>\n\n    </ion-item>\n\n    <ion-item class="" (click)="overOns()">\n\n        <ion-label class="DarkLabel">\n\n            <ion-icon name="contacts" class="iconInstellingen"></ion-icon>\n\n            Over ons\n\n        </ion-label>\n\n    </ion-item>\n\n    <ion-item class="">\n\n        <ion-label class="DarkLabel">\n\n            <ion-icon name="moon" class="iconInstellingen"></ion-icon>\n\n            Light/Dark\n\n        </ion-label>\n\n        <ion-toggle [(ngModel)]="toggleStatus" (ionChange)="toggleAppTheme()"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item class="" (click)="privacyBeleid()">\n\n        <ion-label class="DarkLabel">\n\n            <ion-icon name="eye-off" class="iconInstellingen"></ion-icon>\n\n            Privacy Beleid\n\n        </ion-label>\n\n    </ion-item>\n\n    <ion-item class="" *ngIf="rol == 1" (click)="openAdmin()">\n\n        <ion-label>\n\n            <ion-icon name="construct" class="iconInstellingen"></ion-icon>\n\n            Admin panel\n\n        </ion-label>\n\n    </ion-item>\n\n    <ion-item class="" (click)="uitloggen()">\n\n        <ion-label>\n\n            <ion-icon name="log-out" class="iconInstellingen"></ion-icon>\n\n            Uitloggen\n\n        </ion-label>\n\n    </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\xampp\htdocs\News-App\src\pages\settings\settings.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comments_comments__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var FeedPage = /** @class */ (function () {
    function FeedPage(navCtrl, navParams, menuCtrl, http, network, toastCtrl, loadingCtrl, platform, events, screenOrientation, alertCtrl, socialSharing, geolocation, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.http = http;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.events = events;
        this.screenOrientation = screenOrientation;
        this.alertCtrl = alertCtrl;
        this.socialSharing = socialSharing;
        this.geolocation = geolocation;
        this.storage = storage;
        this.items = 0;
        this.key = "items";
        this.isSearchbaropened = false;
        this.shouldScrollDown = true;
        this.showScrollButton = false;
        this.disabled = false;
        this.open = true;
        this.open2 = true;
        this.open3 = true;
        this.open4 = true;
        // setSegment op vandaag op het weer.
        this.weerSegment = "weerVandaag";
        // Select Items
        this.selectOptions = {
            title: 'Bekijk'
        };
        //
        if (this.platform.is('cordova')) {
            this.platform.ready().then(function () {
                // Checkt of je een token hebt of niet zo niet dan word je naar home page direct
                if (!localStorage.getItem("sessionToken")) {
                    var toastinlog = toastCtrl.create({
                        message: "Geen sessie gevonden, log opnieuw in.",
                        duration: 2500,
                        position: "top",
                        showCloseButton: true,
                        closeButtonText: "OK"
                    });
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                    toastinlog.present();
                }
            });
        }
        // screenOrientation kan draaien
        this.screenOrientation.unlock();
        if (this.network.type != "none") {
            this.setOfflineDataToday();
            this.setOfflineDataYesterday();
            this.setOfflineData3DaysAgo();
            this.datepicker = "vandaag";
            if (this.datepicker == "vandaag") {
                this.load();
            }
            else if (this.datepicker == "gisteren") {
                this.loadYesterday();
            }
            else if (this.datepicker == "driedagengeleden") {
                this.load3DaysAgo();
            }
            if (this.platform.is('cordova')) {
                this.platform.ready().then(function () {
                    // Checkt of je een token hebt of niet zo niet dan word je naar home page direct
                    if (!localStorage.getItem("sessionToken")) {
                        var toastinlog = toastCtrl.create({
                            message: "Geen sessie gevonden, log opnieuw in.",
                            duration: 2500,
                            position: "top",
                            showCloseButton: true,
                            closeButtonText: "OK"
                        });
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                        toastinlog.present();
                    }
                });
            }
            // Hij pakt alle rollen, usernames etc van de database
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = { headers: headers };
            var data = {
                email: localStorage.getItem('userEmail'),
            };
            this.http.post('http://gazoh.net/getgebruiker.php', data, options)
                .subscribe(function (data) {
                _this.dataUser = data;
                _this.rol = _this.dataUser.rol;
                _this.username = _this.dataUser.username;
                _this.userId = _this.dataUser.id;
                _this.profilepicture = _this.dataUser.profilepicture;
                _this.events.publish("username", _this.username);
                _this.events.publish("profilepicture", _this.profilepicture);
            });
        }
        else if (this.network.type == 'none') {
            this.datepicker = "vandaag";
            var offlinealert = this.toastCtrl.create({
                message: "Er is geen internet verbinding, opgeslagen artikelen worden ingeladen.",
                duration: 2500,
                position: "bottom"
            });
            offlinealert.present();
            if (this.datepicker == "vandaag") {
                this.storage.get("offlineDataToday").then(function (data) {
                    _this.items = data;
                    _this.artikelen = data;
                    if (_this.items) {
                        _this.items.sort(function (a, b) {
                            return +new Date(b.datum) - +new Date(a.datum);
                        });
                    }
                });
            }
            else if (this.datepicker == "gisteren") {
                this.storage.get("offlineDataYesterday").then(function (data) {
                    _this.items = data;
                    _this.artikelen = data;
                    if (_this.items) {
                        _this.items.sort(function (a, b) {
                            return +new Date(b.datum) - +new Date(a.datum);
                        });
                    }
                });
            }
            else if (this.datepicker == "driedagengeleden") {
                this.storage.get("offlineData3DaysAgo").then(function (data) {
                    _this.items = data;
                    _this.artikelen = data;
                    if (_this.items) {
                        _this.items.sort(function (a, b) {
                            return +new Date(b.datum) - +new Date(a.datum);
                        });
                    }
                });
            }
        }
    }
    // ---------------------------------------------------------------------------------------------
    // Hier eindigt de constructor
    // ---------------------------------------------------------------------------------------------
    FeedPage.prototype.onChange = function (SelectedValue) {
        SelectedValue = SelectedValue;
        console.log(SelectedValue);
        if (this.datepicker == "vandaag") {
            this.loadWithSpinner();
        }
        else if (this.datepicker == "gisteren") {
            this.loadYesterday();
        }
        else if (this.datepicker == "driedagengeleden") {
            this.load3DaysAgo();
        }
        else if (this.datepicker == "HetWeer") {
            this.weerData();
        }
    };
    // Alert of je de artikel wilt hiden
    FeedPage.prototype.showConfirmHide = function (postId) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Verbergen',
            message: 'Weetje zeker dat je deze artikel wilt verbergen?',
            buttons: [
                {
                    text: 'Niet Akkoord',
                    handler: function () {
                    }
                },
                {
                    text: 'Akkoord',
                    handler: function () {
                        // Hide artikel
                        console.log("Hide " + postId);
                        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
                        headers.append("Accept", 'application/json');
                        headers.append('Content-Type', 'application/json');
                        var options = { headers: headers };
                        _this.http.post('http://gazoh.net/hidearticle.php', postId, options).subscribe(function (res) {
                            if (res == "hidden") {
                                if (_this.datepicker == "vandaag") {
                                    _this.load();
                                }
                                else if (_this.datepicker == "gisteren") {
                                    _this.loadYesterday();
                                }
                                else if (_this.datepicker == "driedagengeleden") {
                                    _this.load3DaysAgo();
                                }
                                var toast = _this.toastCtrl.create({
                                    message: "Artikel " + postId + " verborgen",
                                    duration: 2500,
                                    position: "top",
                                    showCloseButton: true,
                                    closeButtonText: "OK"
                                });
                                toast.present();
                            }
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    FeedPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.network.type != "none") {
            if (this.datepicker == "vandaag") {
                this.load();
            }
            else if (this.datepicker == "gisteren") {
                this.loadYesterday();
            }
            else if (this.datepicker == "driedagengeleden") {
                this.load3DaysAgo();
            }
        }
        else if (this.network.type == "none") {
            console.log("No connection found loading articles from Storage");
            if (this.datepicker == "vandaag") {
                this.storage.get("offlineDataToday").then(function (data) {
                    _this.items = data;
                    _this.artikelen = data;
                    if (_this.items) {
                        _this.items.sort(function (a, b) {
                            return +new Date(b.datum) - +new Date(a.datum);
                        });
                    }
                });
            }
            else if (this.datepicker == "gisteren") {
                this.storage.get("offlineDataYesterday").then(function (data) {
                    _this.items = data;
                    _this.artikelen = data;
                    if (_this.items) {
                        _this.items.sort(function (a, b) {
                            return +new Date(b.datum) - +new Date(a.datum);
                        });
                    }
                });
            }
            else if (this.datepicker == "driedagengeleden") {
                this.storage.get("offlineData3DaysAgo").then(function (data) {
                    _this.items = data;
                    _this.artikelen = data;
                    if (_this.items) {
                        _this.items.sort(function (a, b) {
                            return +new Date(b.datum) - +new Date(a.datum);
                        });
                    }
                });
            }
        }
    };
    // Custom Spinner loader
    FeedPage.prototype.presentLoadingCustom = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<div class=\"custom-spinner-container\"><img src=\"http://gazoh.net/images/spinner.svg\"><br> <p>Laden...</p>\n     </div>",
            duration: 610
        });
        loading.present();
    };
    // Laad data pas zodra je bent ingelogt
    FeedPage.prototype.loadData = function () {
        localStorage.getItem(this.key);
        if (this.key != null && this.key != undefined) {
            this.items = JSON.parse(this.key);
        }
    };
    //
    FeedPage.prototype.htmlToPlaintext = function (text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
    // Redirect to NieuwsPage
    FeedPage.prototype.viewEntry = function (param) {
        this.navCtrl.push('NieuwsPage', param);
    };
    // Doorverbinden naar de CommentsPage
    FeedPage.prototype.viewComments = function (param) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__comments_comments__["a" /* CommentsPage */], param);
    };
    // Zoek functie
    FeedPage.prototype.search = function (event) {
        var serVal = event.target.value;
        if (serVal && serVal.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.title.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
            });
            if (this.items.length < 1) {
                this.items = this.artikelen.filter(function (item) {
                    return (item.title.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
                });
            }
        }
        else {
            this.items = this.artikelen;
        }
    };
    // Zodra je de searchbar canceled
    FeedPage.prototype.resetChanges = function () {
        if (this.network.type != "none") {
            if (this.datepicker == "vandaag") {
                this.load();
                this.isSearchbaropened = false;
            }
            else if (this.datepicker == "gisteren") {
                this.loadYesterday();
                this.isSearchbaropened = false;
            }
            else if (this.datepicker == "driedagengeleden") {
                this.load3DaysAgo();
                this.isSearchbaropened = false;
            }
        }
        else {
            this.items = this.artikelen;
            this.isSearchbaropened = false;
        }
    };
    // Zodra de pagina is geladen
    FeedPage.prototype.ionViewDidLoad = function () {
        this.menuCtrl.enable(true, 'myMenu');
    };
    // Zodra die op de pagina is gekomen
    FeedPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.content.ionScrollEnd.subscribe(function (data) {
            var dimensions = _this.content.getContentDimensions();
            var scrollTop = _this.content.scrollTop;
            var contentHeight = dimensions.contentHeight;
            var scrollHeight = dimensions.scrollHeight;
            if ((scrollTop + contentHeight + 20) > scrollHeight) {
                _this.shouldScrollDown = true;
                _this.showScrollButton = false;
            }
            else {
                _this.shouldScrollDown = false;
                _this.showScrollButton = true;
            }
            console.log(contentHeight);
        });
    };
    // Segment Alle nieuws van Vandaag
    FeedPage.prototype.load = function () {
        var _this = this;
        this.datepicker = "vandaag";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = { headers: headers };
        var data = {
            userId: localStorage.getItem('userId')
        };
        this.http
            .post('http://gazoh.net/getdata2.php', data, options)
            .subscribe(function (data) {
            _this.items = data;
            _this.artikelen = data;
            if (_this.items) {
                _this.items.sort(function (a, b) {
                    return +new Date(b.datum) - +new Date(a.datum);
                });
            }
        }, function (error) {
            console.dir(error);
        });
    };
    FeedPage.prototype.loadWithSpinner = function () {
        var _this = this;
        this.datepicker = "vandaag";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = { headers: headers };
        var data = {
            userId: localStorage.getItem('userId')
        };
        this.http
            .post('http://gazoh.net/getdata2.php', data, options)
            .subscribe(function (data) {
            _this.items = data;
            _this.artikelen = data;
            if (_this.items) {
                _this.items.sort(function (a, b) {
                    return +new Date(b.datum) - +new Date(a.datum);
                });
            }
        }, function (error) {
            console.dir(error);
        });
        this.presentLoadingCustom();
    };
    // Segment Alle nieuws van Gisteren
    FeedPage.prototype.loadYesterday = function () {
        var _this = this;
        this.datepicker = "gisteren";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = { headers: headers };
        var data = {
            userId: localStorage.getItem('userId')
        };
        this.http
            .post('http://gazoh.net/getyesterday.php', data, options)
            .subscribe(function (data) {
            _this.items = data;
            _this.artikelen = data;
            if (_this.items) {
                _this.items.sort(function (a, b) {
                    return +new Date(b.datum) - +new Date(a.datum);
                });
            }
        }, function (error) {
            console.dir(error);
        });
        this.presentLoadingCustom();
    };
    // Segment Alle nieuws van Gisteren
    FeedPage.prototype.load3DaysAgo = function () {
        var _this = this;
        this.datepicker = "driedagengeleden";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = { headers: headers };
        var data = {
            userId: localStorage.getItem('userId')
        };
        this.http
            .post('http://gazoh.net/get3daysago.php', data, options)
            .subscribe(function (data) {
            _this.items = data;
            _this.artikelen = data;
            if (_this.items) {
                _this.items.sort(function (a, b) {
                    return +new Date(b.datum) - +new Date(a.datum);
                });
            }
        }, function (error) {
            console.dir(error);
        });
        this.presentLoadingCustom();
    };
    // De pull to refresh
    FeedPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        if (this.network.type != "none") {
            if (this.datepicker == "vandaag") {
                var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
                headers.append("Accept", 'application/json');
                headers.append('Content-Type', 'application/json');
                var options = { headers: headers };
                var data = {
                    userId: localStorage.getItem('userId')
                };
                this.http
                    .post('http://gazoh.net/getdata2.php', data, options)
                    .subscribe(function (data) {
                    _this.items = data;
                    _this.artikelen = data;
                    if (_this.items) {
                        _this.items.sort(function (a, b) {
                            return +new Date(b.datum) - +new Date(a.datum);
                        });
                    }
                }, function (error) {
                    console.dir(error);
                });
            }
            else if (this.datepicker == "gisteren") {
                this.http;
                var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
                headers.append("Accept", 'application/json');
                headers.append('Content-Type', 'application/json');
                var options = { headers: headers };
                var data = {
                    userId: localStorage.getItem('userId')
                };
                this.http
                    .post('http://gazoh.net/getyesterday.php', data, options)
                    .subscribe(function (data) {
                    _this.items = data;
                    _this.artikelen = data;
                    if (_this.items) {
                        _this.items.sort(function (a, b) {
                            return +new Date(b.datum) - +new Date(a.datum);
                        });
                    }
                }, function (error) {
                    console.dir(error);
                });
            }
            else if (this.datepicker == "driedagengeleden") {
                var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
                headers.append("Accept", 'application/json');
                headers.append('Content-Type', 'application/json');
                var options = { headers: headers };
                var data = {
                    userId: localStorage.getItem('userId')
                };
                this.http
                    .post('http://gazoh.net/get3daysago.php', data, options)
                    .subscribe(function (data) {
                    _this.items = data;
                    _this.artikelen = data;
                    if (_this.items) {
                        _this.items.sort(function (a, b) {
                            return +new Date(b.datum) - +new Date(a.datum);
                        });
                    }
                }, function (error) {
                    console.dir(error);
                });
            }
        }
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    FeedPage.prototype.setLike = function (articleId) {
        var _this = this;
        this.disabled = true;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = { headers: headers };
        var data = {
            articleId: articleId,
            userId: this.userId
        };
        this.http.post('http://gazoh.net/setlike.php', data, options)
            .subscribe(function (data) {
            if (data == "liked") {
                _this.disabled = false;
                if (_this.datepicker == "vandaag") {
                    _this.load();
                }
                else if (_this.datepicker == "gisteren") {
                    _this.loadYesterday();
                }
                else if (_this.datepicker == "driedagengeleden") {
                    _this.load3DaysAgo();
                }
                console.log(data);
            }
        });
    };
    FeedPage.prototype.shareInfo = function (articleTitle, articleImage, articleLink) {
        this.socialSharing.share('Bekijk "' + articleTitle + '" via de Newsage app', "NewsAge", articleImage, articleLink);
        //         then(() => {
        //             alert("Sharing success");
        //      Success!
        //         }).catch(() => {
        //      Error!
        //             alert("Share failed");
        //         });
    };
    //share voor feedpage
    // share(){
    //     this.socialSharing.shareWithOptions(options: {"Your Message", "image" , "link"})
    //         .then(()=>{
    //             console.log("WhatsApp share successful");
    //         }).catch((err)=> {
    //         console.log
    //     });
    //     this.socialSharing.shareViaWhatsApp("Your Message", "image" , "link")
    //         .then(()=>{
    //             console.log("WhatsApp share successful");
    //         }).catch((err)=> {
    //         console.log
    //     });
    //     this.socialSharing.shareViaFacebook("Hallo!", "Image", "Url")
    //         .then(()=>{
    //             console.log("Facebook share successful");
    //         }).catch((err)=> {
    //         console.log
    //     });
    // }
    FeedPage.prototype.dislike = function (articleId, articleTitle) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = { headers: headers };
        var data = {
            articleId: articleId,
            userId: this.userId
        };
        var alert = this.alertCtrl.create({
            title: "Dislike",
            message: "Weet je zeker dat je deze artikel wilt verwijderen uit je favorieten ?",
            buttons: [
                {
                    text: 'Annuleer',
                    handler: function () {
                        return;
                    }
                },
                {
                    text: 'Verwijder',
                    handler: function () {
                        _this.http.post('http://gazoh.net/unlike.php', data, options)
                            .subscribe(function (data) {
                            if (data == "unliked") {
                                var toast = _this.toastCtrl.create({
                                    message: '"' + articleTitle + '"' + " is verwijderd uit je favorieten!",
                                    duration: 2500,
                                    position: "bottom"
                                });
                                toast.present();
                                if (_this.datepicker == "vandaag") {
                                    _this.load();
                                }
                                else if (_this.datepicker == "gisteren") {
                                    _this.loadYesterday();
                                }
                                else if (_this.datepicker == "driedagengeleden") {
                                    _this.load3DaysAgo();
                                }
                                console.log(data);
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    FeedPage.prototype.setOfflineDataToday = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = { headers: headers };
        var data = {
            userId: localStorage.getItem('userId')
        };
        this.http
            .post('http://gazoh.net/getdata2.php', data, options)
            .subscribe(function (data) {
            _this.storage.set("offlineDataToday", data);
            console.log("Offline data set in storage: offlineDataToday");
        }, function (error) {
            console.dir(error);
        });
    };
    FeedPage.prototype.setOfflineDataYesterday = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = { headers: headers };
        var data = {
            userId: localStorage.getItem('userId')
        };
        this.http
            .post('http://gazoh.net/getyesterday.php', data, options)
            .subscribe(function (data) {
            _this.storage.set("offlineDataYesterday", data);
            console.log("Offline data set in storage: offlineDataYesterday");
        }, function (error) {
            console.dir(error);
        });
    };
    FeedPage.prototype.setOfflineData3DaysAgo = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = { headers: headers };
        var data = {
            userId: localStorage.getItem('userId')
        };
        this.http
            .post('http://gazoh.net/get3daysago.php', data, options)
            .subscribe(function (data) {
            _this.storage.set("offlineData3DaysAgo", data);
            console.log("Offline data set in storage: offlineData3DaysAgo");
        }, function (error) {
            console.dir(error);
        });
    };
    FeedPage.prototype.setHideArticle = function (postId) {
        var _this = this;
        console.log("Hide " + postId);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = { headers: headers };
        this.http.post('http://gazoh.net/hidearticle.php', postId, options).subscribe(function (res) {
            if (res == "hidden") {
                var toast = _this.toastCtrl.create({
                    message: "Artikel " + postId + " verborgen",
                    duration: 2500,
                    position: "top",
                    showCloseButton: true,
                    closeButtonText: "OK"
                });
                toast.present();
            }
        });
    };
    FeedPage.prototype.weerData = function () {
        var _this = this;
        this.presentLoadingCustom();
        // Locatie opvragen
        this.geolocation.getCurrentPosition().then(function (resp) {
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        // Data van het weer
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = { headers: headers };
        this.http.get('https://api.openweathermap.org/data/2.5/forecast?id=6534091&appid=761f22645cd9591d1eba076e0fd173d9', options).subscribe(function (data) {
            _this.dataweer = Object.keys(data).map(function (key) { return data[key]; });
            // Dagen tempratuur to Celcius
            // Dag 1
            _this.dag1NaarCelcius12uur = _this.dataweer[3][0].main.temp - 273.15;
            _this.dag1NaarCelcius15uur = _this.dataweer[3][1].main.temp - 273.15;
            _this.dag1NaarCelcius18uur = _this.dataweer[3][2].main.temp - 273.15;
            _this.dag1NaarCelcius21uur = _this.dataweer[3][3].main.temp - 273.15;
            // -----
            // Dag 2
            _this.dag2NaarCelcius00uur = _this.dataweer[3][4].main.temp - 273.15;
            _this.dag2NaarCelcius03uur = _this.dataweer[3][5].main.temp - 273.15;
            _this.dag2NaarCelcius06uur = _this.dataweer[3][6].main.temp - 273.15;
            _this.dag2NaarCelcius09uur = _this.dataweer[3][7].main.temp - 273.15;
            _this.dag2NaarCelcius12uur = _this.dataweer[3][8].main.temp - 273.15;
            _this.dag2NaarCelcius15uur = _this.dataweer[3][9].main.temp - 273.15;
            _this.dag2NaarCelcius18uur = _this.dataweer[3][10].main.temp - 273.15;
            _this.dag2NaarCelcius21uur = _this.dataweer[3][11].main.temp - 273.15;
            // -----
            // Dag 3
            _this.dag3NaarCelcius00uur = _this.dataweer[3][12].main.temp - 273.15;
            _this.dag3NaarCelcius03uur = _this.dataweer[3][13].main.temp - 273.15;
            _this.dag3NaarCelcius06uur = _this.dataweer[3][14].main.temp - 273.15;
            _this.dag3NaarCelcius09uur = _this.dataweer[3][15].main.temp - 273.15;
            _this.dag3NaarCelcius12uur = _this.dataweer[3][16].main.temp - 273.15;
            _this.dag3NaarCelcius15uur = _this.dataweer[3][17].main.temp - 273.15;
            _this.dag3NaarCelcius18uur = _this.dataweer[3][18].main.temp - 273.15;
            _this.dag3NaarCelcius21uur = _this.dataweer[3][19].main.temp - 273.15;
            // -----
            // Dag 4
            _this.dag4NaarCelcius00uur = _this.dataweer[3][20].main.temp - 273.15;
            _this.dag4NaarCelcius03uur = _this.dataweer[3][21].main.temp - 273.15;
            _this.dag4NaarCelcius06uur = _this.dataweer[3][22].main.temp - 273.15;
            _this.dag4NaarCelcius09uur = _this.dataweer[3][23].main.temp - 273.15;
            _this.dag4NaarCelcius12uur = _this.dataweer[3][24].main.temp - 273.15;
            _this.dag4NaarCelcius15uur = _this.dataweer[3][25].main.temp - 273.15;
            _this.dag4NaarCelcius18uur = _this.dataweer[3][26].main.temp - 273.15;
            _this.dag4NaarCelcius21uur = _this.dataweer[3][27].main.temp - 273.15;
            // -----
            // Dag 5
            _this.dag5NaarCelcius00uur = _this.dataweer[3][28].main.temp - 273.15;
            _this.dag5NaarCelcius03uur = _this.dataweer[3][29].main.temp - 273.15;
            _this.dag5NaarCelcius06uur = _this.dataweer[3][30].main.temp - 273.15;
            _this.dag5NaarCelcius09uur = _this.dataweer[3][31].main.temp - 273.15;
            _this.dag5NaarCelcius12uur = _this.dataweer[3][32].main.temp - 273.15;
            _this.dag5NaarCelcius15uur = _this.dataweer[3][33].main.temp - 273.15;
            _this.dag5NaarCelcius18uur = _this.dataweer[3][34].main.temp - 273.15;
            _this.dag5NaarCelcius21uur = _this.dataweer[3][35].main.temp - 273.15;
            // -----
            // --------------
            // Afronden naar graden
            // Dag 1
            _this.dag1NaarCelcius12uurMathRound = Math.round(_this.dag1NaarCelcius15uur);
            _this.dag1NaarCelcius15uurMathRound = Math.round(_this.dag1NaarCelcius15uur);
            _this.dag1NaarCelcius18uurMathRound = Math.round(_this.dag1NaarCelcius18uur);
            _this.dag1NaarCelcius21uurMathRound = Math.round(_this.dag1NaarCelcius21uur);
            // -----
            // Dag 2
            _this.dag2NaarCelcius00uurMathRound = Math.round(_this.dag2NaarCelcius00uur);
            _this.dag2NaarCelcius03uurMathRound = Math.round(_this.dag2NaarCelcius03uur);
            _this.dag2NaarCelcius06uurMathRound = Math.round(_this.dag2NaarCelcius06uur);
            _this.dag2NaarCelcius09uurMathRound = Math.round(_this.dag2NaarCelcius09uur);
            _this.dag2NaarCelcius12uurMathRound = Math.round(_this.dag2NaarCelcius12uur);
            _this.dag2NaarCelcius15uurMathRound = Math.round(_this.dag2NaarCelcius15uur);
            _this.dag2NaarCelcius18uurMathRound = Math.round(_this.dag2NaarCelcius18uur);
            _this.dag2NaarCelcius21uurMathRound = Math.round(_this.dag2NaarCelcius21uur);
            // -----
            // Dag 3
            _this.dag3NaarCelcius00uurMathRound = Math.round(_this.dag3NaarCelcius00uur);
            _this.dag3NaarCelcius03uurMathRound = Math.round(_this.dag3NaarCelcius03uur);
            _this.dag3NaarCelcius06uurMathRound = Math.round(_this.dag3NaarCelcius06uur);
            _this.dag3NaarCelcius09uurMathRound = Math.round(_this.dag3NaarCelcius09uur);
            _this.dag3NaarCelcius12uurMathRound = Math.round(_this.dag3NaarCelcius12uur);
            _this.dag3NaarCelcius15uurMathRound = Math.round(_this.dag3NaarCelcius15uur);
            _this.dag3NaarCelcius18uurMathRound = Math.round(_this.dag3NaarCelcius18uur);
            _this.dag3NaarCelcius21uurMathRound = Math.round(_this.dag3NaarCelcius21uur);
            // -----
            // Dag 4
            _this.dag4NaarCelcius00uurMathRound = Math.round(_this.dag4NaarCelcius00uur);
            _this.dag4NaarCelcius03uurMathRound = Math.round(_this.dag4NaarCelcius03uur);
            _this.dag4NaarCelcius06uurMathRound = Math.round(_this.dag4NaarCelcius06uur);
            _this.dag4NaarCelcius09uurMathRound = Math.round(_this.dag4NaarCelcius09uur);
            _this.dag4NaarCelcius12uurMathRound = Math.round(_this.dag4NaarCelcius12uur);
            _this.dag4NaarCelcius15uurMathRound = Math.round(_this.dag4NaarCelcius15uur);
            _this.dag4NaarCelcius18uurMathRound = Math.round(_this.dag4NaarCelcius18uur);
            _this.dag4NaarCelcius21uurMathRound = Math.round(_this.dag4NaarCelcius21uur);
            // -----
            // Dag 5
            _this.dag5NaarCelcius00uurMathRound = Math.round(_this.dag5NaarCelcius00uur);
            _this.dag5NaarCelcius03uurMathRound = Math.round(_this.dag5NaarCelcius03uur);
            _this.dag5NaarCelcius06uurMathRound = Math.round(_this.dag5NaarCelcius06uur);
            _this.dag5NaarCelcius09uurMathRound = Math.round(_this.dag5NaarCelcius09uur);
            _this.dag5NaarCelcius12uurMathRound = Math.round(_this.dag5NaarCelcius12uur);
            _this.dag5NaarCelcius15uurMathRound = Math.round(_this.dag5NaarCelcius15uur);
            _this.dag5NaarCelcius18uurMathRound = Math.round(_this.dag5NaarCelcius18uur);
            _this.dag5NaarCelcius21uurMathRound = Math.round(_this.dag5NaarCelcius21uur);
            // -----
            // Variablen van de JSON
            _this.plaatsnaam = _this.dataweer[4].name.replace('Gemeente', '').replace('East', '');
            _this.country = _this.dataweer[4].country;
            _this.weather = _this.dataweer[3][0].weather[0].description;
            // Description weer
            _this.dag1Weather12uur = _this.dataweer[3][0].weather[0].description;
            _this.dag1Weather15uur = _this.dataweer[3][1].weather[0].description;
            _this.dag1Weather18uur = _this.dataweer[3][2].weather[0].description;
            _this.dag1Weather21uur = _this.dataweer[3][3].weather[0].description;
            // Neerslag
            _this.dag1Weather12uurHumidity = _this.dataweer[3][0].main.humidity;
            _this.dag1Weather15uurHumidity = _this.dataweer[3][1].main.humidity;
            _this.dag1Weather18uurHumidity = _this.dataweer[3][2].main.humidity;
            _this.dag1Weather21uurHumidity = _this.dataweer[3][3].main.humidity;
            // Datum Tijd
            _this.dag1DatumTijd12uur = _this.dataweer[3][0].dt_txt;
            _this.dag1DatumTijd15uur = _this.dataweer[3][1].dt_txt;
            _this.dag1DatumTijd18uur = _this.dataweer[3][2].dt_txt;
            _this.dag1DatumTijd21uur = _this.dataweer[3][3].dt_txt;
            // Wind Seconden per uur naar km per uur
            _this.windNaarKm12uurDag1 = _this.dataweer[3][0].wind.speed * 3.6;
            _this.windNaarKm15uurDag1 = _this.dataweer[3][1].wind.speed * 3.6;
            _this.windNaarKm18uurDag1 = _this.dataweer[3][2].wind.speed * 3.6;
            _this.windNaarKm21uurDag1 = _this.dataweer[3][3].wind.speed * 3.6;
            // Wind Seconden per uur naar km per uur AFRONDEN
            _this.windNaarKm12uurDag1MathRound = _this.windNaarKm12uurDag1.toPrecision(2);
            _this.windNaarKm15uurDag1MathRound = _this.windNaarKm15uurDag1.toPrecision(2);
            _this.windNaarKm18uurDag1MathRound = _this.windNaarKm18uurDag1.toPrecision(2);
            _this.windNaarKm21uurDag1MathRound = _this.windNaarKm21uurDag1.toPrecision(2);
            //
            console.log(_this.dataweer);
            console.log(_this.dag1Weather12uur);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Searchbar */])
    ], FeedPage.prototype, "searchbar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], FeedPage.prototype, "content", void 0);
    FeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feed',template:/*ion-inline-start:"c:\xampp\htdocs\News-App\src\pages\feed\feed.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle *ngIf="!isSearchbaropened">\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title *ngIf="!isSearchbaropened" class="algemeenText">Algemeen</ion-title>\n\n        <!-- Searchbar  -->\n\n        <ion-searchbar #searchbar *ngIf="isSearchbaropened" [showCancelButton]="true" (ionCancel)="resetChanges()"\n\n                       (ionInput)="search($event)" placeholder="Waar bent u naar op zoek?"\n\n                       class="slideInRight"></ion-searchbar>\n\n        <!-- Searchbar icon -->\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="isSearchbaropened=true">\n\n                <ion-icon name="search" *ngIf="!isSearchbaropened"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-buttons end *ngIf="!isSearchbaropened" class="moreFeed">\n\n            <ion-icon name="more"></ion-icon>\n\n            <ion-list class="listMore">\n\n                <ion-select #newSelect [(ngModel)]="datepicker" (ionChange)="onChange(datepicker)"\n\n                            [selectOptions]="selectOptions" cancelText="Annuleer" okText="Ok" class="SelectMore">\n\n                    <ion-option value="vandaag">Vandaag</ion-option>\n\n                    <ion-option value="gisteren">Gisteren</ion-option>\n\n                    <ion-option value="driedagengeleden">Drie dagen geleden</ion-option>\n\n                    <ion-option value="HetWeer">Het weer</ion-option>\n\n                </ion-select>\n\n            </ion-list>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <!-- Swipe up refresher  -->\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content pullingIcon="arrow-dropdown"\n\n                               pullingText="Sleep omlaag om te verversen"></ion-refresher-content>\n\n    </ion-refresher>\n\n    <!-- Grid -->\n\n    <ion-grid *ngIf="datepicker == \'vandaag\' || datepicker == \'gisteren\' || datepicker == \'driedagengeleden\'"\n\n              class="feedGrid">\n\n        <ion-col>\n\n            <ion-row>\n\n                <ion-card *ngFor="let item of items" col-md-6 class="ionCard">\n\n                    <!-- Images van nieuwsfeed -->\n\n                    <div class="ion-card-image-wrapper" (click)="viewEntry({ record: item })">\n\n                        <img *ngIf="!item.image" src="../assets/imgs/noimage.jpg">\n\n                        <img [src]="item.image" *ngIf="item.site == \'NOS.nl\'">\n\n                        <img [src]="item.image" *ngIf="item.site != \'NOS.nl\' || item.site != \'NU.nl\'">\n\n                    </div>\n\n                    <ion-card-content>\n\n                        <!-- Avatar -->\n\n                        <div id="AvatarFeed" (click)="viewEntry({ record: item })">\n\n                            <ion-avatar *ngIf="item.site == \'NOS\'" class="avatar" item-start>\n\n                                <img src="../assets/svg/NOS_logo.svg" class="avatar-feedNOS"/>\n\n                            </ion-avatar>\n\n                            <ion-avatar *ngIf="item.site == \'NU.nl\'" class="avatar" item-start>\n\n                                <img src="../assets/svg/nu.nl.svg" class="avatar-feed"/>\n\n                            </ion-avatar>\n\n                            <ion-avatar *ngIf="item.site == \'De Telegraaf\'" class="avatar" item-start>\n\n                                <img src="../assets/svg/Telegraaf.svg" class="avatar-feedTelegraaf"/>\n\n                            </ion-avatar>\n\n                        </div>\n\n                        <!-- Uitgever -->\n\n                        <div id="uitgeverFeed" class="uitgeverFeed" (click)="viewEntry({ record: item })">\n\n                            <span>{{item.site}}</span>\n\n                            <!-- Title  -->\n\n                            <div id="title">\n\n                                <ion-card-title class="TitleFeed">\n\n                                    <strong>{{item.title}}</strong>\n\n                                </ion-card-title>\n\n                            </div>\n\n                            <!-- description  -->\n\n                            <div id="description">\n\n                                <p class="descriptionFeed">{{htmlToPlaintext(item.description) | slice:0:120}}...</p>\n\n                            </div>\n\n                            <!-- Datum -->\n\n                            <div id="datumFeed" class="datumFeed">\n\n                                <span>{{item.datum}}</span>\n\n                            </div>\n\n                        </div>\n\n                        <!-- Social Buttons - Comments - likes - Share -->\n\n                        <div id="socialLikeComments" class="socialLikeComments">\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'De Telegraaf\' && rol == 1"\n\n                                    class="socialTelegraafShare" (click)="showConfirmHide(item.id)">\n\n                                <ion-icon name="trash"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'NOS\' && rol == 1"\n\n                                    class="socialNOSShare" (click)="showConfirmHide(item.id)">\n\n                                <ion-icon name="trash"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'NU.nl\' && rol == 1"\n\n                                    class="socialNuShare" (click)="showConfirmHide(item.id)">\n\n                                <ion-icon name="trash"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'De Telegraaf\'"\n\n                                    class="socialTelegraafShare" (click)="shareInfo(item.title, item.image, item.link)">\n\n                                <ion-icon name="share-alt"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'NOS\'" class="socialNOSShare"\n\n                                    (click)="shareInfo(item.title, item.image, item.link)">\n\n                                <ion-icon name="share-alt"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'NU.nl\'" class="socialNuShare"\n\n                                    (click)="shareInfo(item.title, item.image, item.link)">\n\n                                <ion-icon name="share-alt"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'De Telegraaf\'"\n\n                                    class="socialTelegraaf" (click)="viewComments({ record: item })">\n\n                                <ion-icon name="chatbubbles"></ion-icon>\n\n                                <div>{{item.comments}}</div>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'NOS\'" class="socialNOS"\n\n                                    (click)="viewComments({ record: item })">\n\n                                <ion-icon name="chatbubbles"></ion-icon>\n\n                                <div>{{item.comments}}</div>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'NU.nl\'" class="socialNu"\n\n                                    (click)="viewComments({ record: item })">\n\n                                <ion-icon name="chatbubbles"></ion-icon>\n\n                                <div>{{item.comments}}</div>\n\n                            </button>\n\n                            <button class="socialTelegraaf" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'De Telegraaf\' && item.liked == 0" [disabled]="disabled"\n\n                                    (click)="setLike(item.id)">\n\n                                <ion-icon name="heart-outline"></ion-icon>\n\n                                <div>{{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialNOS" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'NOS\' && item.liked == 0" [disabled]="disabled"\n\n                                    (click)="setLike(item.id)">\n\n                                <ion-icon name="heart-outline"></ion-icon>\n\n                                <div>{{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialNu" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'NU.nl\' && item.liked == 0" [disabled]="disabled"\n\n                                    (click)="setLike(item.id)">\n\n                                <ion-icon name="heart-outline"></ion-icon>\n\n                                <div>{{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialTelegraaf" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'De Telegraaf\' && item.liked == 1" (click)="dislike(item.id, item.title)">\n\n                                <ion-icon name="heart"></ion-icon>\n\n                                <div>{{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialNOS" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'NOS\' && item.liked == 1" (click)="dislike(item.id, item.title)">\n\n                                <ion-icon name="heart"></ion-icon>\n\n                                <div>{{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialNu" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'NU.nl\' && item.liked == 1" (click)="dislike(item.id, item.title)">\n\n                                <ion-icon name="heart"></ion-icon>\n\n                                <div>{{item.likes}}</div>\n\n                            </button>\n\n                        </div>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ion-row>\n\n        </ion-col>\n\n    </ion-grid>\n\n    <ion-grid *ngIf="datepicker == \'HetWeer\'">\n\n        <ion-col col-12>\n\n            <ion-row>\n\n                <ion-list>\n\n                    <ion-card class="weerCard">\n\n                        <div class="alignCenterWeer">\n\n                            <img src="../assets/imgs/Zon.png" alt="Zon">\n\n                        </div>\n\n                        <ion-card-content class="cardContentWeer">\n\n                            <!--Segmenten -->\n\n                            <ion-segment [(ngModel)]="weerSegment" color="darkAppKleur" class="weerSegmentZon">\n\n                                <ion-segment-button value="weerVandaag" id="weerVandaag">\n\n                                    <p class="segmentWeerVandaag">Vandaag</p>\n\n                                </ion-segment-button>\n\n                                <ion-segment-button value="weerWeek" id="weerWeek">\n\n                                    <p class="segmentWeerWeek">Week</p>\n\n                                </ion-segment-button>\n\n                            </ion-segment>\n\n                            <!-- Vandaag -->\n\n                            <div *ngIf="this.weerSegment == \'weerVandaag\'">\n\n                                <ion-row class="rowWeer">\n\n                                    <!-- 12:00-->\n\n                                    <button ion-item detail-none *ngIf="open" (click)="open=false">\n\n                                        <div class="buttonTijd">\n\n                                            <ion-icon item-left name="arrow-dropright"></ion-icon>\n\n                                            <span class="tijdWeer">{{this.dag1DatumTijd12uur}}</span>\n\n                                        </div>\n\n                                        <div class="gradenDiv">\n\n                                            <div class="graden">{{this.dag1NaarCelcius12uurMathRound}}° C</div>\n\n                                        </div>\n\n                                    </button>\n\n                                    <button ion-item detail-none *ngIf="!open" (click)="open=true">\n\n                                        <div class="buttonTijd">\n\n                                            <ion-icon item-left name="arrow-dropdown"></ion-icon>\n\n                                            <span class="tijdWeer">{{this.dag1DatumTijd12uur}}</span>\n\n                                        </div>\n\n                                        <div class="gradenDiv">\n\n                                            <div class="graden">{{this.dag1NaarCelcius12uurMathRound}}° C</div>\n\n                                        </div>\n\n                                    </button>\n\n                                    <!-- Uitklap -->\n\n                                    <div id="uitklap" class="uitklapMargin">\n\n                                        <ul *ngIf="!open" (click)="open=true" class="uitklapWeer">\n\n                                            <li class="spanClasses">Luchtvochtigheid</li>\n\n                                            <li class="spanClasses">Wind</li>\n\n                                            <li class="spanClasses">Weer</li>\n\n                                        </ul>\n\n                                        <ul *ngIf="!open" (click)="open=true" class="uitklapWeerAntwoorden">\n\n                                            <li><ion-badge class="badgeClasses">{{this.dag1Weather12uurHumidity}}%</ion-badge></li>\n\n                                            <li><ion-badge class="badgeClasses">{{this.windNaarKm12uurDag1MathRound}} km/u</ion-badge></li>\n\n                                            <li>\n\n                                                <ion-badge *ngIf="dag1Weather12uur == \'light rain\'" class="badgeClasses">Lichte regenbui</ion-badge>\n\n                                                <ion-badge *ngIf="dag1Weather12uur == \'clear sky\'" class="badgeClasses">Heldere lucht</ion-badge>\n\n                                                <ion-badge *ngIf="dag1Weather12uur == \'few clouds\'" class="badgeClasses">Gedeeltelijk <br><span class="bewolktSpan">bewolkt</span></ion-badge>\n\n                                                <ion-badge *ngIf="dag1Weather12uur == \'broken clouds\'" class="badgeClasses">Gedeeltelijk <br><span class="bewolktSpan">bewolkt</span></ion-badge>\n\n                                                <ion-badge *ngIf="dag1Weather12uur == \'scattered clouds\'" class="badgeClasses">Verspreide <br><span class="bewolktSpan">bewolking</span></ion-badge>\n\n                                            </li>\n\n                                        </ul>\n\n                                    </div>\n\n                                    <!-- 15:00-->\n\n                                    <button ion-item detail-none *ngIf="open2" (click)="open2=false">\n\n                                        <div class="buttonTijd">\n\n                                            <ion-icon item-left name="arrow-dropright"></ion-icon>\n\n                                            <span class="tijdWeer">{{this.dag1DatumTijd15uur}}</span>\n\n                                        </div>\n\n                                        <div class="gradenDiv">\n\n                                            <div class="graden">{{this.dag1NaarCelcius15uurMathRound}}° C</div>\n\n                                        </div>\n\n                                    </button>\n\n                                    <button ion-item detail-none *ngIf="!open2" (click)="open2=true">\n\n                                        <div class="buttonTijd">\n\n                                            <ion-icon item-left name="arrow-dropdown"></ion-icon>\n\n                                            <span class="tijdWeer">{{this.dag1DatumTijd15uur}}</span>\n\n                                        </div>\n\n                                        <div class="gradenDiv">\n\n                                            <div class="graden">{{this.dag1NaarCelcius15uurMathRound}}° C</div>\n\n                                        </div>\n\n                                    </button>\n\n                                    <!-- Uitklap -->\n\n                                    <div id="uitklap" class="uitklapMargin">\n\n                                        <ul *ngIf="!open2" (click)="open2=true" class="uitklapWeer">\n\n                                            <li class="spanClasses">Luchtvochtigheid</li>\n\n                                            <li class="spanClasses">Wind</li>\n\n                                            <li class="spanClasses">Weer</li>\n\n                                        </ul>\n\n                                        <ul *ngIf="!open2" (click)="open2=true" class="uitklapWeerAntwoorden">\n\n                                            <li><ion-badge class="badgeClasses">{{this.dag1Weather15uurHumidity}}%</ion-badge></li>\n\n                                            <li><ion-badge class="badgeClasses">{{this.windNaarKm15uurDag1MathRound}} km/u</ion-badge></li>\n\n                                            <li>\n\n                                                <ion-badge *ngIf="dag1Weather15uur == \'light rain\'" class="badgeClasses">Lichte regenbui</ion-badge>\n\n                                                <ion-badge *ngIf="dag1Weather15uur == \'clear sky\'" class="badgeClasses">Heldere lucht</ion-badge>\n\n                                                <ion-badge *ngIf="dag1Weather15uur == \'few clouds\'" class="badgeClasses">Gedeeltelijk <br><span class="bewolktSpan">bewolkt</span></ion-badge>\n\n                                                <ion-badge *ngIf="dag1Weather15uur == \'broken clouds\'" class="badgeClasses">Gedeeltelijk <br><span class="bewolktSpan">bewolkt</span></ion-badge>\n\n                                                <ion-badge *ngIf="dag1Weather15uur == \'scattered clouds\'" class="badgeClasses">Verspreide <br><span class="bewolktSpan">bewolking</span></ion-badge>\n\n                                            </li>\n\n                                        </ul>\n\n                                    </div>\n\n                                    <!-- 18:00-->\n\n                                    <button ion-item detail-none *ngIf="open3" (click)="open3=false">\n\n                                        <div class="buttonTijd">\n\n                                            <ion-icon item-left name="arrow-dropright"></ion-icon>\n\n                                            <span class="tijdWeer">{{this.dag1DatumTijd18uur}}</span>\n\n                                        </div>\n\n                                        <div class="gradenDiv">\n\n                                            <div class="graden">{{this.dag1NaarCelcius18uurMathRound}}° C</div>\n\n                                        </div>\n\n                                    </button>\n\n                                    <button ion-item detail-none *ngIf="!open3" (click)="open3=true">\n\n                                        <div class="buttonTijd">\n\n                                            <ion-icon item-left name="arrow-dropdown"></ion-icon>\n\n                                            <span class="tijdWeer">{{this.dag1DatumTijd18uur}}</span>\n\n                                        </div>\n\n                                        <div class="gradenDiv">\n\n                                            <div class="graden">{{this.dag1NaarCelcius18uurMathRound}}° C</div>\n\n                                        </div>\n\n                                    </button>\n\n                                    <!-- Uitklap -->\n\n                                    <div id="uitklap" class="uitklapMargin">\n\n                                        <ul *ngIf="!open3" (click)="open3=true" class="uitklapWeer">\n\n                                            <li class="spanClasses">Luchtvochtigheid</li>\n\n                                            <li class="spanClasses">Wind</li>\n\n                                            <li class="spanClasses">Weer</li>\n\n                                        </ul>\n\n                                        <ul *ngIf="!open3" (click)="open3=true" class="uitklapWeerAntwoorden">\n\n                                            <li><ion-badge class="badgeClasses">{{this.dag1Weather18uurHumidity}}%</ion-badge></li>\n\n                                            <li><ion-badge class="badgeClasses">{{this.windNaarKm18uurDag1MathRound}} km/u</ion-badge></li>\n\n                                            <li>\n\n                                                <ion-badge *ngIf="dag1Weather18uur == \'light rain\'" class="badgeClasses">Lichte regenbui</ion-badge>\n\n                                                <ion-badge *ngIf="dag1Weather18uur == \'clear sky\'" class="badgeClasses">Heldere lucht</ion-badge>\n\n                                                <ion-badge *ngIf="dag1Weather18uur == \'few clouds\'" class="badgeClasses">Gedeeltelijk <br><span class="bewolktSpan">bewolkt</span></ion-badge>\n\n                                                <ion-badge *ngIf="dag1Weather18uur == \'broken clouds\'" class="badgeClasses">Gedeeltelijk <br><span class="bewolktSpan">bewolkt</span></ion-badge>\n\n                                                <ion-badge *ngIf="dag1Weather18uur == \'scattered clouds\'" class="badgeClasses">Verspreide <br><span class="bewolktSpan">bewolking</span></ion-badge>\n\n                                            </li>\n\n                                        </ul>\n\n                                    </div>\n\n                                    <!-- 21:00-->\n\n                                    <button ion-item detail-none *ngIf="open4" (click)="open4=false">\n\n                                        <div class="buttonTijd">\n\n                                            <ion-icon item-left name="arrow-dropright"></ion-icon>\n\n                                            <span class="tijdWeer">{{this.dag1DatumTijd21uur}}</span>\n\n                                        </div>\n\n                                        <div class="gradenDiv">\n\n                                            <div class="graden">{{this.dag1NaarCelcius21uurMathRound}}° C</div>\n\n                                        </div>\n\n                                    </button>\n\n                                    <button ion-item detail-none *ngIf="!open4" (click)="open4=true">\n\n                                        <div class="buttonTijd">\n\n                                            <ion-icon item-left name="arrow-dropdown"></ion-icon>\n\n                                            <span class="tijdWeer">{{this.dag1DatumTijd21uur}}</span>\n\n                                        </div>\n\n                                        <div class="gradenDiv">\n\n                                            <div class="graden">{{this.dag1NaarCelcius21uurMathRound}}° C</div>\n\n                                        </div>\n\n                                    </button>\n\n                                    <!-- Uitklap -->\n\n                                    <div id="uitklap" class="uitklapMargin">\n\n                                        <ul *ngIf="!open4" (click)="open4=true" class="uitklapWeer">\n\n                                            <li class="spanClasses">Luchtvochtigheid</li>\n\n                                            <li class="spanClasses">Wind</li>\n\n                                            <li class="spanClasses">Weer</li>\n\n                                        </ul>\n\n                                        <ul *ngIf="!open4" (click)="open4=true" class="uitklapWeerAntwoorden">\n\n                                            <li><ion-badge class="badgeClasses">{{this.dag1Weather21uurHumidity}}%</ion-badge></li>\n\n                                            <li><ion-badge class="badgeClasses">{{this.windNaarKm21uurDag1MathRound}} km/u</ion-badge></li>\n\n                                            <li>\n\n                                                <ion-badge *ngIf="dag1Weather21uur == \'light rain\'" class="badgeClasses">Lichte regenbui</ion-badge>\n\n                                                <ion-badge *ngIf="dag1Weather21uur == \'clear sky\'" class="badgeClasses">Heldere lucht</ion-badge>\n\n                                                <ion-badge *ngIf="dag1Weather21uur == \'few clouds\'" class="badgeClasses">Gedeeltelijk <br><span class="bewolktSpan">bewolkt</span></ion-badge>\n\n                                                <ion-badge *ngIf="dag1Weather21uur == \'broken clouds\'" class="badgeClasses">Gedeeltelijk <br><span class="bewolktSpan">bewolkt</span></ion-badge>\n\n                                                <ion-badge *ngIf="dag1Weather21uur == \'scattered clouds\'" class="badgeClasses">Verspreide <br><span class="bewolktSpan">bewolking</span></ion-badge>\n\n                                            </li>\n\n                                        </ul>\n\n                                    </div>\n\n                                </ion-row>\n\n                            </div>\n\n                            <!-- Hele Week -->\n\n                            <div *ngIf="this.weerSegment == \'weerWeek\'">\n\n                                <ion-row class="rowWeer">\n\n                                    <button ion-item detail-none *ngIf="open" (click)="open=false">\n\n                                        <ion-icon item-left name="arrow-dropright"></ion-icon>\n\n                                        Test\n\n                                    </button>\n\n                                    <button ion-item detail-none *ngIf="!open" (click)="open=true">\n\n                                        <ion-icon item-left name="arrow-dropdown"></ion-icon>\n\n                                        Test\n\n                                    </button>\n\n                                </ion-row>\n\n                            </div>\n\n                        </ion-card-content>\n\n                    </ion-card>\n\n                </ion-list>\n\n            </ion-row>\n\n        </ion-col>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\xampp\htdocs\News-App\src\pages\feed\feed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */]])
    ], FeedPage);
    return FeedPage;
}());

//# sourceMappingURL=feed.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feed_feed__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, loading, http, toastCtrl, menuCtrl, events, screenOrientation, platform, keyboard) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.screenOrientation = screenOrientation;
        this.platform = platform;
        this.keyboard = keyboard;
        this.token = Math.random().toString(36).substring(7);
        this.rootPage = HomePage_1;
        this.FeedPage = __WEBPACK_IMPORTED_MODULE_5__feed_feed__["a" /* FeedPage */];
        // Zodra cordova is opgestart orientate je scherm naar potrait op HomePage
        if (this.platform.is('cordova')) {
            this.platform.ready().then(function () {
                _this.screenOrientation.lock(_this.screenOrientation.ORIENTATIONS.PORTRAIT);
                // Checked of je bent ingelogt of niet
                if (localStorage.getItem("sessionToken")) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__feed_feed__["a" /* FeedPage */]);
                }
            });
        }
        // Keyboard niet laten scrollen
        this.keyboard.disableScroll(true);
        // Disable swiping
        this.menuCtrl.enable(false, 'myMenu');
    }
    HomePage_1 = HomePage;
    // ---------------------------------------------------------------------------------------------
    // Hier eindigt de constructor
    // ---------------------------------------------------------------------------------------------
    //
    // Push naar de register pagina
    HomePage.prototype.goRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    // Checkt in database of je gegevens kloppen dan word je naar feedpagina gegooit
    HomePage.prototype.signIn = function () {
        var _this = this;
        // Controleert of de velden wel zijn ingevuld
        if (this.email == null || this.password == null) {
            var toast = this.toastCtrl.create({
                message: 'Niet alle velden zijn ingevuld!',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options_1 = { headers: headers };
            var data_1 = {
                email: this.email,
                password: this.password
            };
            var loader_1 = this.loading.create({
                content: 'Aan het inloggen...',
            });
            loader_1.present().then(function () {
                // Maakt verbinding met login.php en checkt of gegevens kloppen
                _this.http.post('http://www.gazoh.net/getgebruiker.php', data_1, options_1)
                    .subscribe(function (data) { _this.dataUser = data; });
                _this.http.post('http://www.gazoh.net/login.php', data_1, options_1)
                    .subscribe(function (res) {
                    console.log(res);
                    loader_1.dismiss();
                    if (res == "Succesfully logged in!") {
                        //Connectie met database
                        var toast = _this.toastCtrl.create({
                            message: "U bent ingelogd!",
                            duration: 2500,
                            position: "top",
                            showCloseButton: true,
                            closeButtonText: "OK"
                        });
                        // Localstorage Gebruikersdetails
                        localStorage.setItem("userId", _this.dataUser.id);
                        localStorage.setItem("userName", _this.dataUser.username);
                        localStorage.setItem("userEmail", _this.dataUser.email);
                        localStorage.setItem("userEmailVerified", _this.dataUser.emailVerified);
                        localStorage.setItem("userRole", _this.dataUser.rol);
                        localStorage.setItem("userCreationDate", _this.dataUser.creationdate);
                        localStorage.setItem("sessionToken", _this.token);
                        localStorage.setItem("profilePicture", _this.dataUser.profilepicture);
                        // Localstorage Email
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__feed_feed__["a" /* FeedPage */]);
                        toast.present();
                        // //Fire username event
                        _this.events.publish("username", _this.dataUser.username);
                        _this.events.publish("profilepicture", _this.dataUser.profilepicture);
                    }
                    else {
                        var toast = _this.toastCtrl.create({
                            message: "Uw gegevens zijn onjuist, probeer het nogmaals.",
                            showCloseButton: true,
                            closeButtonText: "OK",
                            position: "top"
                        });
                        toast.present();
                    }
                });
            });
        }
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"c:\xampp\htdocs\News-App\src\pages\home\home.html"*/'<ion-content class="loginPagina">\n\n  <ion-grid style="height: 100%" class="gridPadding">\n\n    <ion-row justify-content-center align-items-center style="height: 100%">\n\n\n\n      <ion-col col-12 class="loginPagina">\n\n        <div class="ValidatieText">\n\n          <h2 class="WelkomText">Welkom</h2>\n\n          <p class="gavederText">Log-in om verder te gaan..</p>\n\n        </div>\n\n        <div class="ValidatieLogin">\n\n          <ion-item class="darkThemeLogin">\n\n            <ion-label color="primary" floating>Email</ion-label>\n\n            <ion-input type="email" [(ngModel)]="email"></ion-input>\n\n          </ion-item>\n\n          <ion-item class="darkThemeLogin">\n\n            <ion-label color="primary" floating>Wachtwoord</ion-label>\n\n            <ion-input type="password" [(ngModel)]="password"></ion-input>\n\n          </ion-item>\n\n          <br>\n\n          <div class="Validatie2Login">\n\n            <button ion-button class="loginButton" (click)="signIn()">Log-in</button>\n\n            <p class="nogGeenAccount" (click)="goRegister()">Nog geen account? <b>Registreer</b></p>\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\xampp\htdocs\News-App\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NieuwsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(337);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NieuwsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NieuwsPage = /** @class */ (function () {
    function NieuwsPage(navCtrl, navParams, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        if (this.navParams.get("record")) {
            this.selectEntry(this.navParams.get("record"));
            console.log(this.navParams.get("record"));
        }
        else {
            this.navCtrl.setRoot("CategoryPage");
        }
    }
    NieuwsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NieuwsPage');
    };
    NieuwsPage.prototype.selectEntry = function (item) {
        this.title = item.title;
        this.image = item.image;
        this.description = item.description;
        this.link = item.link;
        this.site = item.site;
        this.datum = item.datum;
        this.id = item.id;
    };
    NieuwsPage.prototype.htmlToPlaintext = function (text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
    NieuwsPage.prototype.openPagina = function (url) {
        var browser = this.iab.create(url);
        browser.show();
    };
    NieuwsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nieuws',template:/*ion-inline-start:"c:\xampp\htdocs\News-App\src\pages\nieuws\nieuws.html"*/'<ion-header>\n\n  <meta charset="UTF-8">\n\n  <ion-navbar class="nieuwsNavTitle">{{this.title}}</ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card class="nieuwsCard">\n\n    <img *ngIf="!this.image" src="../assets/imgs/noimage.jpg">\n\n    <img *ngIf="this.image" src="{{this.image}}" class="imageNieuws">\n\n    <ion-card-header class="headerText" text-wrap>\n\n      {{this.title}}\n\n      <p class="nieuwsDatum">{{this.datum}}</p>\n\n    </ion-card-header>\n\n    <ion-card-content class="nieuwsContent">\n\n      <p>{{htmlToPlaintext(this.description)}}</p>\n\n      <button (click)="openPagina(this.link)" ion-button round *ngIf="this.site == \'De Telegraaf\'" class="ColorTelegraaf">{{this.site}}</button>\n\n      <button (click)="openPagina(this.link)" ion-button round *ngIf="this.site == \'NOS\'" class="ColorNOS">{{this.site}}</button>\n\n      <button (click)="openPagina(this.link)" ion-button round *ngIf="this.site == \'NU.nl\'" class="ColorNU">{{this.site}}</button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\xampp\htdocs\News-App\src\pages\nieuws\nieuws.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], NieuwsPage);
    return NieuwsPage;
}());

//# sourceMappingURL=nieuws.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_feed_feed__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_menu_menu__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    // -------------------------------------
    // constructor
    // -------------------------------------
    function MyApp(platform, statusBar, splashScreen, settings, modalCtrl, menuCtrl, events, alertCtrl, menuProvider, network, toastCtrl) {
        var _this = this;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.settings = settings;
        this.modalCtrl = modalCtrl;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.menuProvider = menuProvider;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */];
        this.showSplash = true;
        // -------------------------------------
        // Get Active theme dark/light
        // -------------------------------------
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
        // -------------------------------------
        // Wanneer de app geladen is, is dit de eerste wat hij doet.
        // -------------------------------------
        platform.ready().then(function () {
            _this.splashScreen.hide();
            // localStorage voor sessiontoken
            if (localStorage.getItem("sessionToken")) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_feed_feed__["a" /* FeedPage */]);
            }
            else if (!localStorage.getItem("sessionToken")) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
                localStorage.clear();
            }
            _this.getSideMenuData();
            // De statusbar kleur
            statusBar.backgroundColorByHexString('#225C73');
            // -------------------------------------
            // Laat een alert zien zodra je twee keer op dismiss klikt of je de app wilt verlaten of niet
            // -------------------------------------
            _this.platform.registerBackButtonAction(function () {
                if (_this.nav.length() == 1) {
                    _this.confirmExitApp();
                }
                _this.nav.pop();
            });
            // Voor de menu om de userame en profiel foto te setten live
            _this.events.subscribe("username", function (data) {
                _this.username = data;
            });
            if (_this.network.type == "none") {
                _this.profilepicture = localStorage.getItem('profilePicture');
            }
            _this.events.subscribe("profilepicture", function (foto) {
                _this.profilepicture = foto;
            });
        });
        // -------------------------------------
        // Localstorage voor light en dark theme
        // -------------------------------------
        if (localStorage.getItem("themeColor") == "light-theme") {
            this.settings.setActiveTheme("light-theme");
        }
        else if (localStorage.getItem("themeColor") == "dark-theme") {
            this.settings.setActiveTheme("dark-theme");
        }
    }
    MyApp.prototype.getSideMenuData = function () {
        this.pages = this.menuProvider.getSideMenus();
    };
    // -------------------------------------
    // OnInit is het zelfde als platform ready en constructor
    // -------------------------------------
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.showSplash = false; }, 1800);
    };
    // Open menu
    MyApp.prototype.openPage = function (page, index) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.component) {
            this.nav.setRoot(page.component);
            this.menuCtrl.close();
        }
        else {
            if (this.selectedMenu) {
                this.selectedMenu = 0;
            }
            else {
                this.selectedMenu = index;
            }
        }
    };
    // -------------------------------------
    // De functie ervoor om de app te verlaten
    // -------------------------------------
    MyApp.prototype.confirmExitApp = function () {
        var _this = this;
        this.confirmAlert = this.alertCtrl.create({
            message: "Wilt u de NewsAge app verlaten ?",
            buttons: [
                {
                    text: 'Annuleer',
                    handler: function () {
                        _this.showedAlert = false;
                        return;
                    }
                },
                {
                    text: 'Verlaat',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.confirmAlert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"c:\xampp\htdocs\News-App\src\app\app.html"*/'<!-- SplashScreen -->\n\n<ion-grid style="height: 100%" class="gridPadding">\n\n  <ion-row justify-content-center align-items-center style="height: 100%" *ngIf="showSplash" class="splash">\n\n    <div class="spinner">\n\n      <div class="NewsAgeLogo">\n\n        <img class="NewsAge" src="../assets/imgs/NewsAgeLogo.png">\n\n      </div>\n\n      <div class="loader">\n\n        <img src="../assets/svg/spinner/tail-spin.svg">\n\n      </div>\n\n    </div>\n\n  </ion-row>\n\n</ion-grid>\n\n<!--  -->\n\n<!-- Menu -->\n\n<ion-menu [class]="selectedTheme" [content]="content" [swipeEnabled]="false">\n\n    <ion-content id="contentAnimation">\n\n        <ion-list>\n\n            <ion-navbar class="menuNavBar">\n\n                <ion-grid class="gridMenu">\n\n                    <ion-col col-9 class="menuCol">\n\n                        <img src="{{this.profilepicture}}" class="avatar-menu"/>\n\n                        <p ngClass="usernameMenu">{{this.username}}</p>\n\n                    </ion-col>\n\n                </ion-grid>\n\n            </ion-navbar>\n\n            <ion-item ion-item *ngFor="let p of pages;  let i=index" (click)="openPage(p, i);">\n\n               <ion-icon slot="start" [name]="p.icon"></ion-icon>\n\n                <span ion-text class="menuTitle">\n\n                      {{p.title}}\n\n                      <span><ion-icon [name]="selectedMenu == i? \'arrow-dropdown\' : \'arrow-dropright\'" *ngIf="p.subPages" float-right></ion-icon></span>\n\n                </span>\n\n                <!--Child Pages  -->\n\n                <ion-list no-lines [hidden]="selectedMenu != i">\n\n                    <ion-item no-border *ngFor="let subPage of p.subPages;let i2=index" text-wrap\n\n                              (click)="openPage(subPage)">\n\n                         <ion-icon slot="start" [name]="subPage.icon"></ion-icon>\n\n                        <span ion-text color="color2">&nbsp;{{subPage.title}}</span>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </ion-item>\n\n        </ion-list>\n\n    </ion-content>\n\n    <ion-footer class="footerMenu">\n\n        <ion-toolbar class="toolbarFooter">\n\n            <div class="versienummer"><b>©NewsAge</b> V7.1.0</div>\n\n        </ion-toolbar>\n\n    </ion-footer>\n\n</ion-menu>\n\n\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" [class]="selectedTheme" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"c:\xampp\htdocs\News-App\src\app\app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_menu_menu__["a" /* MenuProvider */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavorietenPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorieten__ = __webpack_require__(390);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FavorietenPageModule = /** @class */ (function () {
    function FavorietenPageModule() {
    }
    FavorietenPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__favorieten__["a" /* FavorietenPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__favorieten__["a" /* FavorietenPage */]),
            ],
        })
    ], FavorietenPageModule);
    return FavorietenPageModule;
}());

//# sourceMappingURL=favorieten.module.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feed_feed__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CommentsPage = /** @class */ (function () {
    function CommentsPage(navCtrl, navParams, http, alertCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.comments = [];
        if (this.navParams.get("record")) {
            this.selectEntry(this.navParams.get("record"));
            this.getComments();
        }
        // Maak connectie met http voor username etc
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = { headers: headers };
        var data = {
            email: localStorage.getItem('userEmail'),
        };
        this.http.post('http://gazoh.net/getgebruiker.php', data, options)
            .subscribe(function (data) {
            _this.dataUser = data;
            _this.userId = _this.dataUser.id;
            _this.username = _this.dataUser.username;
            _this.userRol = _this.dataUser.rol;
            _this.pictureprofile = _this.dataUser.profilepicture;
        });
    }
    // -------------------------------------------------
    // Hier eindigt de constructor
    // -------------------------------------------------
    CommentsPage.prototype.callFunction = function () {
        this.content.scrollToBottom(0);
    };
    // Runs when the page is about to enter and become the active page.
    CommentsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var dimensions = this.content.getContentDimensions();
        this.content.scrollTo(0, dimensions.contentHeight + 100, 100);
        setTimeout(function () { return _this.myInput.setFocus(); }, 250);
    };
    CommentsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.navBar.backButtonClick = function (e) {
            _this.navCtrl.pop();
        };
    };
    CommentsPage.prototype.selectEntry = function (item) {
        this.articleId = item.id;
    };
    CommentsPage.prototype.getComments = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = { headers: headers };
        var data = {
            articleId: this.articleId
        };
        this.http.post('http://gazoh.net/getcomment.php', data, options)
            .subscribe(function (data) {
            _this.comments = data;
            if (_this.comments) {
                _this.comments.sort(function (a, b) {
                    return +new Date(a.commentDate) - +new Date(b.commentDate);
                });
            }
        });
    };
    CommentsPage.prototype.postComment = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = { headers: headers };
        var data = {
            articleId: this.articleId,
            userId: this.userId,
            comment: this.comment
        };
        this.http.post('http://gazoh.net/setcomment.php', data, options)
            .subscribe(function (data) {
            if (data == "comment published") {
                console.log(data);
                _this.getComments();
                _this.content.scrollToBottom();
            }
            _this.comment = "";
        });
    };
    CommentsPage.prototype.deleteComment = function (commentId) {
        var _this = this;
        this.confirmAlert = this.alertCtrl.create({
            title: "Verwijder",
            message: "Als je reactie verwijderd word kan het niet ongedaan gemaakt worden",
            buttons: [
                {
                    text: 'Annuleer',
                    handler: function () {
                        console.log("Clicked cancel");
                    }
                },
                {
                    text: 'Verwijder',
                    handler: function () {
                        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
                        headers.append("Accept", 'application/json');
                        headers.append('Content-Type', 'application/json');
                        var options = { headers: headers };
                        var data = {
                            articleId: _this.articleId,
                            commentId: commentId,
                        };
                        _this.http.post('http://gazoh.net/deletecomment.php', data, options)
                            .subscribe(function (data) {
                            if (data == "comment deleted") {
                                console.log(data);
                                _this.getComments();
                            }
                        });
                    }
                }
            ]
        });
        this.confirmAlert.present();
    };
    CommentsPage.prototype.returnFeed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__feed_feed__["a" /* FeedPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('input'),
        __metadata("design:type", Object)
    ], CommentsPage.prototype, "myInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], CommentsPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Navbar */])
    ], CommentsPage.prototype, "navBar", void 0);
    CommentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comments',template:/*ion-inline-start:"c:\xampp\htdocs\News-App\src\pages\comments\comments.html"*/'<ion-header>\n\n  <ion-navbar #navbar >\n\n    <!-- <button ion-button left class="BackButton" (click)="returnFeed()">\n\n      <ion-icon name="arrow-back"></ion-icon>\n\n    </button> -->\n\n    <ion-title class="fakePadding">Comments</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list *ngFor="let comment of comments; let last = last" class="commentSpacing">\n\n  <ion-item-sliding>\n\n  <ion-item>\n\n    {{last ? callFunction() : \'\'}}\n\n    <ion-avatar class="avatar" item-start>\n\n      <img src="{{comment.profilepicture}}" class="avatar-profiel"/>\n\n    </ion-avatar>\n\n    <p class="commentUsername">{{comment.username}}<span class="commentDate">{{comment.commentDate}}</span></p>\n\n    <p><span class="breakText">{{comment.comment}}</span></p>\n\n  </ion-item>\n\n    <ion-item-options side="right">\n\n      <button ion-button color="secondary"><ion-icon name="create"></ion-icon>Bewerk</button>\n\n      <button ion-button color="danger" item-right *ngIf="userId == comment.userCommentID || userRol == 1" (click)="deleteComment(comment.commentId)"><ion-icon name="trash"></ion-icon>Verwijder</button>\n\n    </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-item>\n\n    <ion-avatar class="avatar" item-start>\n\n      <img src="{{pictureprofile}}" class="avatar-profiel" />\n\n    </ion-avatar>\n\n       <ion-input placeholder="Reageer als {{this.username}}" class="textAreaInput" [(ngModel)]="comment" id="inputMessage" #input></ion-input>\n\n    <button ion-button class="sendButton" id="sendButtonId" (click)="postComment()" item-end [disabled]="!comment">\n\n      <ion-icon name="send"></ion-icon>\n\n    </button>\n\n  </ion-item>\n\n</ion-footer>\n\n'/*ion-inline-end:"c:\xampp\htdocs\News-App\src\pages\comments\comments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], CommentsPage);
    return CommentsPage;
}());

//# sourceMappingURL=comments.js.map

/***/ })

},[391]);
//# sourceMappingURL=main.js.map