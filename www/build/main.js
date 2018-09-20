webpackJsonp([2],{

<<<<<<< HEAD
/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feed_feed__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__favorieten_favorieten__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(216);
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
    function HomePage(navCtrl, alertCtrl, loading, http, toastCtrl, keyboard, menuCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.keyboard = keyboard;
        this.menuCtrl = menuCtrl;
        this.FavorietenPage = __WEBPACK_IMPORTED_MODULE_6__favorieten_favorieten__["a" /* FavorietenPage */];
        this.FeedPage = __WEBPACK_IMPORTED_MODULE_5__feed_feed__["a" /* FeedPage */];
        this.menuCtrl.enable(false, 'myMenu');
        keyboard.disableScroll(true);
    }
    // Console log die username en password terug geeft.
    HomePage.prototype.login = function () {
        console.log("Username: " + this.username);
        console.log("Password: " + this.password);
    };
    // Push naar de register pagina
    HomePage.prototype.goRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    HomePage.prototype.signIn = function () {
        //// check to confirm the username and password fields are filled
        var _this = this;
        if (this.username == null || this.password == null) {
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
                username: this.username,
                password: this.password
            };
            var loader_1 = this.loading.create({
                content: 'Aan het inloggen...',
            });
            loader_1.present().then(function () {
                _this.http.post('http://www.gazoh.net/login.php', data_1, options_1)
                    .subscribe(function (res) {
                    console.log(res);
                    loader_1.dismiss();
                    if (res == "Succesfully logged in!") {
                        var toast = _this.toastCtrl.create({
                            message: "U bent ingelogd!",
                            duration: 2500,
                            position: "top"
                        });
                        toast.present();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__feed_feed__["a" /* FeedPage */]);
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\xampp\htdocs\News-App\src\pages\home\home.html"*/'<ion-content>\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col>\n\n                <div class="loginFoto">\n\n                    <div class="form-title"\n\n                         style="background-image: url(http://gazoh.net/images/axa-studios-media-agency-arnhem-maibanner.jpg)">\n\n                        <ion-title class="form-title1">Log-in</ion-title>\n\n                    </div>\n\n                </div>\n\n                <div class="geheel">\n\n                    <ion-item>\n\n                        <ion-label floating>Username</ion-label>\n\n                        <ion-input type="text" [(ngModel)]="username"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label floating>Password</ion-label>\n\n                        <ion-input type="password" [(ngModel)]="password"></ion-input>\n\n                    </ion-item>\n\n                    <br>\n\n                    <a href="#" class="txt1">\n\n                        Forgot Password?\n\n                    </a><br>\n\n\n\n                    <button class="button1" ion-button (click)="signIn()" color="secondary" round>Inloggen</button>\n\n\n\n                    <a (click)="goRegister()" class="txt2">\n\n                        Nog geen account? Maak er nu één aan!\n\n                    </a>\n\n\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\xampp\htdocs\News-App\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavorietenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
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
    function FavorietenPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FavorietenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorieten',template:/*ion-inline-start:"D:\xampp\htdocs\News-App\src\pages\favorieten\favorieten.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Favorieten</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n\n        <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n            <ion-icon [name]="item.icon" item-start></ion-icon>\n\n            {{item.title}}\n\n            <div class="item-note" item-end>\n\n                {{item.note}}\n\n            </div>\n\n        </button>\n\n    </ion-list>\n\n    <div *ngIf="selectedItem" padding>\n\n        You navigated here from <b>{{selectedItem.title}}</b>\n\n    </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\xampp\htdocs\News-App\src\pages\favorieten\favorieten.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], FavorietenPage);
    return FavorietenPage;
}());

//# sourceMappingURL=favorieten.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the SettingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SettingsProvider = /** @class */ (function () {
    function SettingsProvider() {
        this.theme = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["BehaviorSubject"]('light-theme');
    }
    SettingsProvider.prototype.setActiveTheme = function (val) {
        this.theme.next(val);
    };
    SettingsProvider.prototype.getActiveTheme = function () {
        return this.theme.asObservable();
    };
    SettingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SettingsProvider);
    return SettingsProvider;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 156:
=======
/***/ 105:
>>>>>>> parent of 70cbf900... V2.9
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(119);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(160);
>>>>>>> parent of 70cbf900... V2.9
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
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
    function RegisterPage(navCtrl, navParams, alertCtrl, http, loading, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loading = loading;
        this.toastCtrl = toastCtrl;
    }
    RegisterPage.prototype.ngOnInit = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].pattern('[a-zA-Z][a-zA-z ]+') /*, Validators.minLength(3)*/]),
            password: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].minLength(5)]),
            email: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].email])
        });
    };
    // Push terug naar home button
    RegisterPage.prototype.terug = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    RegisterPage.prototype.Register = function () {
        var _this = this;
        if (this.username == null || this.password == null || this.email == null) {
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
            var options = { headers: headers };
            var data = {
                username: this.username,
                password: this.password,
                email: this.email
            };
            var loader_1 = this.loading.create({
                content: 'Aan het registreren..',
            });
            loader_1.present().then(function () {
                _this.http.post('http://gazoh.net/register.php', data, options)
                    .map(function (res) { return res; })
                    .subscribe(function (res) {
                    loader_1.dismiss();
                    if (res == "Registration successfull") {
                        var alert = _this.alertCtrl.create({
                            title: "Registreren geslaagd",
                            subTitle: "U kunt nu gaan inloggen",
                            buttons: ['OK']
                        });
                        alert.present();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                    }
                    else {
                        var alert = _this.alertCtrl.create({
                            title: "Mislukt",
                            subTitle: "Er is iets mis gegaan tijdens het registeren probeert u het opnieuw.",
                            buttons: ['OK']
                        });
                        alert.present();
                    }
                });
            });
        }
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-register',template:/*ion-inline-start:"D:\xampp\htdocs\News-App\src\pages\register\register.html"*/'<ion-content>\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col class="col">\n\n                <div class="loginFoto">\n\n                    <div class="form-title"\n\n                         style="background-image: url(http://gazoh.net/images/axa-studios-media-agency-arnhem-maibanner.jpg)">\n\n                        <ion-title class="form-title1" style="color: #ffffff;">Registreer</ion-title>\n\n                    </div>\n\n                </div>\n\n                <div class="geheel2">\n\n                    <form novalidate [formGroup]="form">\n\n                        <ion-item>\n\n                            <ion-label floating>Username</ion-label>\n\n                            <ion-input type="text" formControlName="username" required></ion-input>\n\n                        </ion-item>\n\n                        <div *ngIf="form.get(\'username\').touched && form.get(\'username\').invalid" class="alert alert-danger">\n\n                            <div *ngIf="form.get(\'username\').hasError(\'required\')">Naam moet ingevuld zijn.</div>\n\n                            <div *ngIf="form.get(\'username\').hasError(\'pattern\')">Ongeldige naam.</div>\n\n                            <div *ngIf="form.get(\'username\').hasError(\'minLength\')">Minder dan 5 letters gebruikt</div>\n\n                        </div>\n\n\n\n\n\n                        <ion-item>\n\n                            <ion-label floating>E-mail</ion-label>\n\n                            <ion-input type="text" formControlName="email" required></ion-input>\n\n                        </ion-item>\n\n                        <div *ngIf="form.get(\'email\').touched && form.get(\'email\').invalid" class="alert alert-danger">\n\n                            <div *ngIf="form.get(\'email\').hasError(\'required\')">Email is required</div>\n\n                            <div *ngIf="form.get(\'email\').hasError(\'email\')">Invalid Email!</div>\n\n                        </div>\n\n\n\n\n\n                        <ion-item>\n\n                            <ion-label floating>Password</ion-label>\n\n                            <ion-input type="password" formControlName="password" required></ion-input>\n\n                        </ion-item>\n\n                        <div *ngIf="form.get(\'password\').touched && form.get(\'password\').invalid" class="alert alert-danger">\n\n                            <div *ngIf="form.get(\'password\').hasError(\'minLength\')">Minder dan 5 letters gebruikt</div>\n\n                            <div *ngIf="form.get(\'password\').hasError(\'required\')">Password is required</div>\n\n                        </div>\n\n                    </form>\n\n                    <a (click)="terug()" class="txt3">\n\n                        Heb je al een account? Meld je nu aan!\n\n                    </a>\n\n<br>\n\n                    <br>\n\n                    <button class="button3" ion-button (click)="Register()" color="secondary" round>Registreren</button>\n\n                        <br>\n\n\n\n\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\xampp\htdocs\News-App\src\pages\register\register.html"*/,
=======
            selector: 'page-register',template:/*ion-inline-start:"D:\xampp\htdocs\News-App\src\pages\register\register.html"*/'<ion-content>\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col class="col">\n\n                <div class="loginFoto">\n\n                    <div class="form-title"\n\n                         style="background-image: url(http://gazoh.net/images/axa-studios-media-agency-arnhem-maibanner.jpg)">\n\n                        <ion-title class="form-title1" style="color: #ffffff;">Registreer</ion-title>\n\n                    </div>\n\n                </div>\n\n                <div class="geheel2">\n\n                    <form novalidate [formGroup]="form" (ngSubmit)="addUser(form)">\n\n                        <ion-item>\n\n                            <ion-label floating>Username</ion-label>\n\n                            <ion-input type="text" formControlName="username" required></ion-input>\n\n                        </ion-item>\n\n                        <div *ngIf="form.get(\'username\').touched && form.get(\'username\').invalid" class="alert alert-danger">\n\n                            <div *ngIf="form.get(\'username\').hasError(\'required\')">Naam moet ingevuld zijn.</div>\n\n                            <div *ngIf="form.get(\'username\').hasError(\'pattern\')">Ongeldige naam.</div>\n\n                            <div *ngIf="form.get(\'username\').hasError(\'minLength\')">Minder dan 5 letters gebruikt</div>\n\n                        </div>\n\n\n\n\n\n                        <ion-item>\n\n                            <ion-label floating>E-mail</ion-label>\n\n                            <ion-input type="text" formControlName="email" required></ion-input>\n\n                        </ion-item>\n\n                        <div *ngIf="form.get(\'email\').touched && form.get(\'email\').invalid" class="alert alert-danger">\n\n                            <div *ngIf="form.get(\'email\').hasError(\'required\')">Email is required</div>\n\n                            <div *ngIf="form.get(\'email\').hasError(\'email\')">Invalid Email!</div>\n\n                        </div>\n\n\n\n\n\n                        <ion-item>\n\n                            <ion-label floating>Password</ion-label>\n\n                            <ion-input type="text" formControlName="password" required></ion-input>\n\n                        </ion-item>\n\n                        <div *ngIf="form.get(\'password\').touched && form.get(\'password\').invalid" class="alert alert-danger">\n\n                            <div *ngIf="form.get(\'password\').hasError(\'minLength\')">Minder dan 5 letters gebruikt</div>\n\n                            <div *ngIf="form.get(\'password\').hasError(\'required\')">Password is required</div>\n\n                        </div>\n\n                    </form>\n\n\n\n\n\n                    <br>\n\n                        <button class="button3" ion-button (click)="Register()" color="secondary" full round>Aanmaken\n\n                        </button>\n\n                        <br>\n\n                    <a (click)="terug()" class="txt3">\n\n                        Heb je al een account? Meld je nu aan!\n\n                    </a>\n\n                    <br>\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\xampp\htdocs\News-App\src\pages\register\register.html"*/,
>>>>>>> parent of 70cbf900... V2.9
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _f || Object])
    ], RegisterPage);
    return RegisterPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=register.js.map

/***/ }),

<<<<<<< HEAD
/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__ = __webpack_require__(134);
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
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, settings) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.settings = settings;
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
        this.theme = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["BehaviorSubject"]('light-theme');
    }
    SettingsPage.prototype.setActiveTheme = function (val) {
        this.theme.next(val);
    };
    SettingsPage.prototype.getActiveTheme = function () {
        return this.theme.asObservable();
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.toggleAppTheme = function () {
        if (this.selectedTheme == 'light-theme') {
            this.settings.setActiveTheme('dark-theme');
        }
        else {
            this.settings.setActiveTheme('light-theme');
        }
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"D:\xampp\htdocs\News-App\src\pages\settings\settings.html"*/'<!--\n\n  Generated template for the SettingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Settings</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <p text-center>Settings</p>\n\n    <button ion-button full (click)="toggleAppTheme()">\n\n        <ion-icon name="bulb"></ion-icon>Toggle Theme!\n\n    </button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\xampp\htdocs\News-App\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__["a" /* SettingsProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 168:
=======
/***/ 117:
>>>>>>> parent of 70cbf900... V2.9
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
<<<<<<< HEAD
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 212:
=======
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
>>>>>>> parent of 70cbf900... V2.9
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/feed/feed.module": [
<<<<<<< HEAD
		680,
		2
	],
	"../pages/register/register.module": [
		679,
=======
		280,
>>>>>>> parent of 70cbf900... V2.9
		1
	],
	"../pages/register/register.module": [
		281,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
<<<<<<< HEAD
webpackAsyncContext.id = 212;
=======
webpackAsyncContext.id = 158;
>>>>>>> parent of 70cbf900... V2.9
module.exports = webpackAsyncContext;

/***/ }),

<<<<<<< HEAD
/***/ 215:
=======
/***/ 159:
>>>>>>> parent of 70cbf900... V2.9
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RssProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RssProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RssProvider = /** @class */ (function () {
    function RssProvider(http) {
        this.http = http;
        console.log('Hello RssProvider Provider');
    }
    RssProvider.prototype.getRSS = function () {
        var RSS_URL = "http://gazoh.net/rss.xml";
        var API = "wtxfwzfeaqeianrqzzzqfpirznx0hern2hpa2xsz";
        var count = 50;
        var API_URL = "https://api.rss2json.com/v1/api.json";
        var response = this.http.post(API_URL, {}, { params: { 'rss_url': RSS_URL, 'api_key': API, 'count': count } });
        return response;
    };
    RssProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RssProvider);
    return RssProvider;
}());

//# sourceMappingURL=rss.js.map

/***/ }),

<<<<<<< HEAD
/***/ 352:
=======
/***/ 204:
>>>>>>> parent of 70cbf900... V2.9
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_register_register__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_favorieten_favorieten__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_feed_feed__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_rss_rss__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_settings_settings__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__ = __webpack_require__(157);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_register_register__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_favorieten_favorieten__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_feed_feed__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_rss_rss__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__(12);
>>>>>>> parent of 70cbf900... V2.9
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_favorieten_favorieten__["a" /* FavorietenPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_feed_feed__["a" /* FeedPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    scrollAssist: false,
                    autoFocusAssist: false
                }, {
                    links: [
<<<<<<< HEAD
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feed/feed.module#FeedPageModule', name: 'FeedPage', segment: 'feed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
=======
                        { loadChildren: '../pages/feed/feed.module#FeedPageModule', name: 'FeedPage', segment: 'feed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
>>>>>>> parent of 70cbf900... V2.9
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["f" /* ReactiveFormsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_favorieten_favorieten__["a" /* FavorietenPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_feed_feed__["a" /* FeedPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_rss_rss__["a" /* RssProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_favorieten_favorieten__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_feed_feed__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_settings_settings__ = __webpack_require__(134);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_favorieten_favorieten__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_feed_feed__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(161);
>>>>>>> parent of 70cbf900... V2.9
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








<<<<<<< HEAD


var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, settings) {
        var _this = this;
        this.settings = settings;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
=======
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
>>>>>>> parent of 70cbf900... V2.9
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_feed_feed__["a" /* FeedPage */] },
<<<<<<< HEAD
            { title: 'Favorieten', component: __WEBPACK_IMPORTED_MODULE_4__pages_favorieten_favorieten__["a" /* FavorietenPage */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */] }
=======
            { title: 'Favorieten', component: __WEBPACK_IMPORTED_MODULE_4__pages_favorieten_favorieten__["a" /* FavorietenPage */] }
>>>>>>> parent of 70cbf900... V2.9
        ];
    }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
<<<<<<< HEAD
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\xampp\htdocs\News-App\src\app\app.html"*/'<ion-menu id="myMenu" [content]="content">\n\n    <ion-header>\n\n        <ion-toolbar>\n\n            <ion-title>Menu</ion-title>\n\n        </ion-toolbar>\n\n    </ion-header>\n\n\n\n    <ion-content>\n\n        <ion-list>\n\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n                {{p.title}}\n\n            </button>\n\n        </ion-list>\n\n    </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" [class]="selectedTheme" #content swipeBackEnabled="false"></ion-nav>\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"D:\xampp\htdocs\News-App\src\app\app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_9__providers_settings_settings__["a" /* SettingsProvider */]])
=======
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\xampp\htdocs\News-App\src\app\app.html"*/'<ion-menu id="myMenu" [content]="content">\n\n    <ion-header>\n\n        <ion-toolbar>\n\n            <ion-title>Menu</ion-title>\n\n        </ion-toolbar>\n\n    </ion-header>\n\n\n\n    <ion-content>\n\n       <ion-list>\n\n           <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n               {{p.title}}\n\n           </button>\n\n       </ion-list>\n\n    </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"D:\xampp\htdocs\News-App\src\app\app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
>>>>>>> parent of 70cbf900... V2.9
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rss_rss__ = __webpack_require__(215);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rss_rss__ = __webpack_require__(159);
>>>>>>> parent of 70cbf900... V2.9
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
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeedPage = /** @class */ (function () {
    function FeedPage(navCtrl, navParams, rssProvider, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rssProvider = rssProvider;
        this.menuCtrl = menuCtrl;
        this.rssDataArray = [];
    }
    FeedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedPage');
        this.Get_RSS_Data();
        this.menuCtrl.enable(true, 'myMenu');
    };
    FeedPage.prototype.Get_RSS_Data = function () {
        var _this = this;
        this.rssProvider.getRSS().subscribe(function (data) {
            _this.rssDataArray = data;
            console.log(data);
        });
    };
    FeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feed',template:/*ion-inline-start:"D:\xampp\htdocs\News-App\src\pages\feed\feed.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n      \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="cards-bg">\n\n\n\n  <ion-card>\n\n\n\n    <img src="assets/imgs/img1.png"/>\n\n\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        Nine Inch Nails Live\n\n      </ion-card-title>\n\n      <p>\n\n        The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n\n      </p>\n\n    </ion-card-content>\n\n\n\n    <ion-row no-padding>\n\n      <ion-col>\n\n        <button ion-button clear small color="danger" icon-start>\n\n          <ion-icon name=\'star\'></ion-icon>\n\n          Favorite\n\n        </button>\n\n      </ion-col>\n\n      <ion-col text-center>\n\n        <button ion-button clear small color="danger" icon-start>\n\n        \n\n        </button>\n\n      </ion-col>\n\n      <ion-col text-right>\n\n        <button ion-button clear small color="danger" icon-start>\n\n          <ion-icon name=\'share-alt\'></ion-icon>\n\n          Share\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n\n\n    <div>\n\n      <img src="assets/imgs/img2.png"/>\n\n    </div>\n\n\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        Erykah Badu\n\n      </ion-card-title>\n\n      <p>\n\n      American singer-songwriter, record producer, activist, and actress, Badu\'s style is a prime example of neo-soul.\n\n      </p>\n\n    </ion-card-content>\n\n\n\n    <ion-row no-padding>\n\n      <ion-col>\n\n        <button ion-button clear small color="danger" icon-start>\n\n          <ion-icon name=\'star\'></ion-icon>\n\n          Favorite\n\n        </button>\n\n      </ion-col>\n\n      <ion-col text-center>\n\n        <button ion-button clear small color="danger" icon-start>\n\n        \n\n        </button>\n\n      </ion-col>\n\n      <ion-col text-right>\n\n        <button ion-button clear small color="danger" icon-start>\n\n          <ion-icon name=\'share-alt\'></ion-icon>\n\n          Share\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n\n\n    <div>\n\n      <img src="assets/imgs/img3.png"/>\n\n    </div>\n\n\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        Queen\n\n      </ion-card-title>\n\n      <p>\n\n        The British rock band formed in London in 1970, and is considered one of the biggest stadium rock bands in the world.\n\n      </p>\n\n    </ion-card-content>\n\n\n\n    <ion-row no-padding>\n\n      <ion-col>\n\n        <button ion-button clear small color="danger" icon-start>\n\n          <ion-icon name=\'star\'></ion-icon>\n\n          Favorite\n\n        </button>\n\n      </ion-col>\n\n      <ion-col text-center>\n\n        <button ion-button clear small color="danger" icon-start>\n\n        \n\n        </button>\n\n      </ion-col>\n\n      <ion-col text-right>\n\n        <button ion-button clear small color="danger" icon-start>\n\n          <ion-icon name=\'share-alt\'></ion-icon>\n\n          Share\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n\n\n    <div>\n\n      <img src="assets/imgs/img4.png"/>\n\n    </div>\n\n\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        Run-D.M.C.\n\n      </ion-card-title>\n\n      <p>\n\n        The American hip hop group widely acknowledged as one of the most influential acts in the history of hip hop.\n\n      </p>\n\n    </ion-card-content>\n\n\n\n    <ion-row no-padding>\n\n      <ion-col>\n\n        <button ion-button clear small color="danger" icon-start>\n\n          <ion-icon name=\'star\'></ion-icon>\n\n          Favorite\n\n        </button>\n\n      </ion-col>\n\n      <ion-col text-center>\n\n        <button ion-button clear small color="danger" icon-start>\n\n          \n\n        </button>\n\n      </ion-col>\n\n      <ion-col text-right>\n\n        <button ion-button clear small color="danger" icon-start>\n\n          <ion-icon name=\'share-alt\'></ion-icon>\n\n          Share\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-card>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\xampp\htdocs\News-App\src\pages\feed\feed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rss_rss__["a" /* RssProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], FeedPage);
    return FeedPage;
}());

//# sourceMappingURL=feed.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feed_feed__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__favorieten_favorieten__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(161);
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
    function HomePage(navCtrl, alertCtrl, loading, http, toastCtrl, keyboard, menuCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.keyboard = keyboard;
        this.menuCtrl = menuCtrl;
        this.FavorietenPage = __WEBPACK_IMPORTED_MODULE_6__favorieten_favorieten__["a" /* FavorietenPage */];
        this.FeedPage = __WEBPACK_IMPORTED_MODULE_5__feed_feed__["a" /* FeedPage */];
        this.menuCtrl.enable(false, 'myMenu');
        keyboard.disableScroll(true);
    }
    // Console log die username en password terug geeft.
    HomePage.prototype.login = function () {
        console.log("Username: " + this.username);
        console.log("Password: " + this.password);
    };
    // Push naar de register pagina
    HomePage.prototype.goRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    HomePage.prototype.signIn = function () {
        //// check to confirm the username and password fields are filled
        var _this = this;
        if (this.username == null || this.password == null) {
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
                username: this.username,
                password: this.password
            };
            var loader_1 = this.loading.create({
                content: 'Aan het inloggen...',
            });
            loader_1.present().then(function () {
                _this.http.post('http://www.gazoh.net/login.php', data_1, options_1)
                    .subscribe(function (res) {
                    console.log(res);
                    loader_1.dismiss();
                    if (res == "Succesfully logged in!") {
                        var toast = _this.toastCtrl.create({
                            message: "U bent ingelogd!",
                            duration: 2500,
                            position: "top"
                        });
                        toast.present();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__feed_feed__["a" /* FeedPage */]);
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\xampp\htdocs\News-App\src\pages\home\home.html"*/'<ion-content>\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col>\n\n                <div class="loginFoto">\n\n                    <div class="form-title"\n\n                         style="background-image: url(http://gazoh.net/images/axa-studios-media-agency-arnhem-maibanner.jpg)">\n\n                        <ion-title class="form-title1">Log-in</ion-title>\n\n                    </div>\n\n                </div>\n\n                <div class="geheel">\n\n                    <ion-item>\n\n                        <ion-label floating>Username</ion-label>\n\n                        <ion-input type="text" [(ngModel)]="username"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label floating>Password</ion-label>\n\n                        <ion-input type="password" [(ngModel)]="password"></ion-input>\n\n                    </ion-item>\n\n                    <br>\n\n                    <a href="#" class="txt1">\n\n                        Forgot Password?\n\n                    </a><br>\n\n\n\n                    <button class="button1" ion-button (click)="signIn()" color="secondary" round>Inloggen</button>\n\n\n\n                    <a (click)="goRegister()" class="txt2">\n\n                        Nog geen account? Maak er nu één aan!\n\n                    </a>\n\n\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\xampp\htdocs\News-App\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavorietenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
    function FavorietenPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FavorietenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorieten',template:/*ion-inline-start:"D:\xampp\htdocs\News-App\src\pages\favorieten\favorieten.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Favorieten</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n\n        <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n            <ion-icon [name]="item.icon" item-start></ion-icon>\n\n            {{item.title}}\n\n            <div class="item-note" item-end>\n\n                {{item.note}}\n\n            </div>\n\n        </button>\n\n    </ion-list>\n\n    <div *ngIf="selectedItem" padding>\n\n        You navigated here from <b>{{selectedItem.title}}</b>\n\n    </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\xampp\htdocs\News-App\src\pages\favorieten\favorieten.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], FavorietenPage);
    return FavorietenPage;
}());

//# sourceMappingURL=favorieten.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map