webpackJsonp([4],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(124);
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
        if (this.username == null || this.password == null || this.email == null) {
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
            console.log('data:', data_1);
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
                    else {
                        var alert_2 = _this.alertCtrl.create({
                            title: "Mislukt",
                            subTitle: "Er is iets mis gegaan tijdens het registeren probeert u het opnieuw.",
                            buttons: ['OK']
                        });
                        alert_2.present();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"D:\xampp\htdocs\News-App\src\pages\register\register.html"*/'<ion-content>\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-12>\n\n                <div class="loginFoto">\n\n                    <div class="form-title"\n\n                         style="background-image: url(http://gazoh.net/images/axa-studios-media-agency-arnhem-maibanner.jpg)">\n\n                        <ion-title class="form-title1">Registreer</ion-title>\n\n                        <div class="row">\n\n                            <button ion-button class="homeButton" (click)="terug()">Home</button>\n\n                            <button ion-button class="registerButton" style="background-color: rgba(79, 0, 11, 0.78) !important">Registreer</button>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n                <div class="geheel">\n\n                    <form novalidate [formGroup]="form">\n\n                        <div class="form-group">\n\n                            <ion-item [ngClass]="{ \'ng-touched\' : form.get(\'username\').touched }">>\n\n                                <ion-label floating>Username</ion-label>\n\n                                <ion-input type="text" formControlName="username" class="form-control" [(ngModel)]="username"></ion-input>\n\n                            </ion-item>\n\n                        </div>\n\n                        <div *ngIf="form.get(\'username\').touched && form.get(\'username\').invalid" class="alert alert-danger" required>\n\n                            <div class="validatieText" *ngIf="form.get(\'username\').hasError(\'required\')">Naam moet ingevuld zijn.</div>\n\n                            <div class="validatieText" *ngIf="form.get(\'username\').hasError(\'pattern\')">Ongeldige naam.</div>\n\n                            <div class="validatieText" *ngIf="form.get(\'username\').hasError(\'minLength\')">Minder dan 5 letters gebruikt</div>\n\n                        </div>\n\n\n\n                        <div class="form-group">\n\n                            <ion-item [ngClass]="{ \'ng-touched\' : form.get(\'email\').touched }">\n\n                                <ion-label floating >E-mail</ion-label>\n\n                                <ion-input type="text"  formControlName="email" class="form-control" [(ngModel)]="email" ></ion-input>\n\n                            </ion-item>\n\n                        </div>\n\n                        <div *ngIf="form.get(\'email\').touched && form.get(\'email\').invalid" class="alert alert-danger" required>\n\n                            <div class="validatieText" *ngIf="form.get(\'email\').hasError(\'required\')">Email moet ingevuld zijn</div>\n\n                            <div class="validatieText" *ngIf="form.get(\'email\').hasError(\'pattern\')">ongeldige Email!</div>\n\n                        </div>\n\n\n\n                        <div class="form-group">\n\n                            <ion-item [ngClass]="{ \'ng-touched\' : form.get(\'password\').touched }">\n\n                                <ion-label floating>Password</ion-label>\n\n                                <ion-input type="password" formControlName="password" class="form-control" [(ngModel)]="password"></ion-input>\n\n                            </ion-item>\n\n                        </div>\n\n                        <div class="alert alert-danger"  *ngIf="form.get(\'password\').touched && form.get(\'password\').invalid ">\n\n                            <div class="validatieText" *ngIf="form.get(\'password\').hasError(\'required\')">Wachtwoord moet ingevuld zijn</div>\n\n                            <div class="validatieText" *ngIf="form.get(\'password\').hasError(\'minLength\')">Minder dan 5 letters gebruikt</div>\n\n                        </div>\n\n                    </form>\n\n                    <br>\n\n                    <button class="button3" ion-button (click)="onSubmit()" color="secondary" round>Aanmaken\n\n                    </button>\n\n                    <br>\n\n                    <br>\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\xampp\htdocs\News-App\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(389);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SettingsProvider);
    return SettingsProvider;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sport',template:/*ion-inline-start:"D:\xampp\htdocs\News-App\src\pages\sport\sport.html"*/'<!--\n\n  Generated template for the SportPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>sport</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h1>Dit is de sport nieuws pagina!</h1>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\xampp\htdocs\News-App\src\pages\sport\sport.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SportPage);
    return SportPage;
}());

//# sourceMappingURL=sport.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EconomiePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-economie',template:/*ion-inline-start:"D:\xampp\htdocs\News-App\src\pages\economie\economie.html"*/'<!--\n\n  Generated template for the EconomiePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>economie</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h1>Dit is de Economie nieuws pagina!</h1>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\xampp\htdocs\News-App\src\pages\economie\economie.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], EconomiePage);
    return EconomiePage;
}());

//# sourceMappingURL=economie.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(57);
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
    function SettingsPage(settings, platform, navCtrl) {
        var _this = this;
        this.settings = settings;
        this.navCtrl = navCtrl;
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
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
    SettingsPage.prototype.uitloggen = function () {
        localStorage.clear();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], SettingsPage.prototype, "nav", void 0);
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"D:\xampp\htdocs\News-App\src\pages\settings\settings.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Settings</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-item>\n\n      <ion-label>Bewerk Profiel</ion-label>\n\n  </ion-item>\n\n    <ion-item>\n\n        <ion-label>Over ons</ion-label>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>Raporteer Probleem / Idee</ion-label>\n\n    </ion-item>\n\n    <ion-item>>\n\n        <ion-label>Light/Dark</ion-label>\n\n        <ion-toggle [(ngModel)]="toggleStatus" (ionChange)="toggleAppTheme()"></ion-toggle>\n\n    </ion-item>\n\n        <button class="uitloggen" ion-button full (click)="uitloggen()">Uitloggen</button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\xampp\htdocs\News-App\src\pages\settings\settings.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 172:
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
webpackEmptyAsyncContext.id = 172;

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/category/category.module": [
		697,
		3
	],
	"../pages/economie/economie.module": [
		698,
		2
	],
	"../pages/feed/feed.module": [
		224
	],
	"../pages/register/register.module": [
		315
	],
	"../pages/settings/settings.module": [
		699,
		1
	],
	"../pages/sport/sport.module": [
		700,
		0
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
webpackAsyncContext.id = 216;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function() { return FeedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed__ = __webpack_require__(75);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__feed__["a" /* FeedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__feed__["a" /* FeedPage */]),
            ],
        })
    ], FeedPageModule);
    return FeedPageModule;
}());

//# sourceMappingURL=feed.module.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(123);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(364);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_register_register__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_favorieten_favorieten__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_feed_feed__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_favorieten_favorieten_module__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_feed_feed_module__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_register_register_module__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_settings_settings__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_network__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_social_sharing__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_category_category__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_sport_sport__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_economie_economie__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_css_animator__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_css_animator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_css_animator__);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_sport_sport__["a" /* SportPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_economie_economie__["a" /* EconomiePage */],
                __WEBPACK_IMPORTED_MODULE_23_css_animator__["AnimatesDirective"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    scrollAssist: false,
                    autoFocusAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/economie/economie.module#EconomiePageModule', name: 'EconomiePage', segment: 'economie', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feed/feed.module#FeedPageModule', name: 'FeedPage', segment: 'feed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sport/sport.module#SportPageModule', name: 'SportPage', segment: 'sport', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13__pages_favorieten_favorieten_module__["a" /* FavorietenPageModule */],
                __WEBPACK_IMPORTED_MODULE_14__pages_feed_feed_module__["FeedPageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register_module__["RegisterPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_favorieten_favorieten__["a" /* FavorietenPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_feed_feed__["a" /* FeedPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_sport_sport__["a" /* SportPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_economie_economie__["a" /* EconomiePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_category_category__["a" /* CategoryPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_settings_settings__["a" /* SettingsProvider */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_17__providers_settings_settings__["a" /* SettingsProvider */],
                __WEBPACK_IMPORTED_MODULE_23_css_animator__["AnimationService"]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__favorieten_favorieten__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__feed_feed__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__category_category__ = __webpack_require__(90);
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
    function HomePage(navCtrl, alertCtrl, loading, http, toastCtrl, keyboard, menuCtrl, events, zone) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.keyboard = keyboard;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.zone = zone;
        this.rootPage = HomePage_1;
        this.FavorietenPage = __WEBPACK_IMPORTED_MODULE_5__favorieten_favorieten__["a" /* FavorietenPage */];
        this.FeedPage = __WEBPACK_IMPORTED_MODULE_7__feed_feed__["a" /* FeedPage */];
        this.menuCtrl.enable(false, 'myMenu');
        keyboard.disableScroll(true);
    }
    HomePage_1 = HomePage;
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
                            position: "top",
                            showCloseButton: true,
                            closeButtonText: "OK"
                        });
                        window.location.reload();
                        _this.events.publish('username:created', _this.username);
                        localStorage.setItem("username", _this.username);
                        localStorage.setItem("loggedin", _this.username);
                        toast.present();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__category_category__["a" /* CategoryPage */]);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"D:\xampp\htdocs\News-App\src\pages\home\home.html"*/'<ion-content>\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-12>\n\n                <div class="loginFoto">\n\n                    <div class="form-title" style="background-image: url(https://i.imgur.com/UXwXuyD.png)">\n\n                        <ion-title class="form-title1">Log-in</ion-title>\n\n                        <div class="row">\n\n                            <button ion-button class="homeButton" style="background-color: rgba(79, 0, 11, 0.78) !important">Home</button>\n\n                            <button ion-button class="registerButton" (click)="goRegister()">Registreer</button>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n                <div class="geheel">\n\n                    <ion-item>\n\n                        <ion-label floating>Username</ion-label>\n\n                        <ion-input type="text" [(ngModel)]="username"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label floating>Password</ion-label>\n\n                        <ion-input type="password" [(ngModel)]="password"></ion-input>\n\n                    </ion-item>\n\n                    <br>\n\n                    <a href="#" class="txt1">Forgot Password?</a>\n\n                    <br>\n\n\n\n                    <button class="button3" ion-button (click)="signIn()" color="secondary" round>Inloggen</button>\n\n\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\xampp\htdocs\News-App\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_favorieten_favorieten__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_settings_settings__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_category_category__ = __webpack_require__(90);
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
    function MyApp(platform, statusBar, splashScreen, settings, modalCtrl, menuCtrl, events) {
        var _this = this;
        this.settings = settings;
        this.modalCtrl = modalCtrl;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        var gebruikersnaam = localStorage.getItem("loggedin");
        // used for an example of ngFor and navigation (MENU)
        this.pages = [
            {
                title: gebruikersnaam,
                component: __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */],
                icon: ''
            },
            {
                title: 'Cem@Gazoh.net',
                component: __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */],
                icon: ''
            },
            {
                title: 'Categorieën',
                component: __WEBPACK_IMPORTED_MODULE_9__pages_category_category__["a" /* CategoryPage */],
                icon: 'albums'
            },
            {
                title: 'Favorieten',
                component: __WEBPACK_IMPORTED_MODULE_4__pages_favorieten_favorieten__["a" /* FavorietenPage */],
                icon: 'heart'
            },
            {
                title: 'Settings',
                component: __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */],
                icon: 'settings'
            }
        ];
        if (!localStorage.getItem("username")) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_category_category__["a" /* CategoryPage */];
        }
        // Dark/Light Mode
        if (localStorage.getItem("themeColor") == "dark-theme") {
            this.settings.setActiveTheme("dark-theme");
            console.log("Toggle Status: " + this.toggleStatus);
        }
        else if (localStorage.getItem("themeColor") == "light-theme") {
            this.settings.setActiveTheme("light-theme");
            console.log("Toggle Status: " + this.toggleStatus);
        }
    }
    MyApp.prototype.menuOpened = function () {
        this.events.subscribe('username:created', function (username) {
            console.log('Welcome', username);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\xampp\htdocs\News-App\src\app\app.html"*/'<ion-menu id="myMenu" [content]="content" type="overlay" [content]="content">\n\n    <ion-content id="contentAnimation" menuToggle class="animated slideInUp">\n\n    <ion-list>\n\n        <ion-item>\n\n          <button detail-none ion-item menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n              <ion-icon slot="start" [name]="p.icon"></ion-icon>\n\n              {{p.title}}\n\n          </button>\n\n        </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" [class]="selectedTheme" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"D:\xampp\htdocs\News-App\src\app\app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavorietenPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorieten__ = __webpack_require__(77);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__favorieten__["a" /* FavorietenPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__favorieten__["a" /* FavorietenPage */]),
            ],
        })
    ], FavorietenPageModule);
    return FavorietenPageModule;
}());

//# sourceMappingURL=favorieten.module.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(57);
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
    function FeedPage(navCtrl, navParams, menuCtrl, http, network, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.http = http;
        this.network = network;
        this.loadingCtrl = loadingCtrl;
        this.rssDataArray = [];
        this.items = 0;
        this.key = "items";
        if (this.network.type != "none") {
            //this.getData();
            this.load();
        }
        else {
            this.loadData();
            var toast = toastCtrl.create({
                message: "Geen internet verbinding, opgeslagen artikelen worden ingeladen.",
                duration: 2500,
                position: "top",
                showCloseButton: true,
                closeButtonText: "OK"
            });
            toast.present();
        }
        var toastinlog = toastCtrl.create({
            message: "Geen sessie gevonden, log opnieuw in.",
            duration: 2500,
            position: "top",
            showCloseButton: true,
            closeButtonText: "OK"
        });
        if (!localStorage.getItem("username")) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            toastinlog.present();
        }
        /* //this.GetNews()
         this.presentLoadingCustom();*/
    }
    /* presentLoadingCustom() {
 
         let loading = this.loadingCtrl.create({
             spinner: 'hide',
             content: `
       <div class="custom-spinner-container"><img src="http://gazoh.net/images/spinner.svg"><br> <p>Laden...</p>
       </div>`,
             duration: 1200
         });
 
         loading.present();
     }
 */
    FeedPage.prototype.ionViewDidLoad = function () {
        this.menuCtrl.enable(true, 'myMenu');
    };
    /*getData() {
        let url = "http://api.jsonbin.io/b/5bab4b98a97c597b3c591b93";
        var headers = new HttpHeaders();
        headers.append('Access-Control-Allow-Origin', '*');

        headers.append("Accept", 'application/json');

        headers.append('Content-Type', 'application/json');

        let options = {headers: headers};
        let data: Observable<any> = this.http.get(url, options);
        data.subscribe(result => {
            this.items = result;
        });
        localStorage.setItem(this.key, JSON.stringify(this.items));
    }*/
    FeedPage.prototype.loadData = function () {
        localStorage.getItem(this.key);
        if (this.key != null && this.key != undefined) {
            this.items = JSON.parse(this.key);
        }
    };
    FeedPage.prototype.load = function () {
        var _this = this;
        this.http
            .get('http://gazoh.net/getdata.php')
            .subscribe(function (data) {
            _this.items = data;
        }, function (error) {
            console.dir(error);
        });
    };
    FeedPage.prototype.htmlToPlaintext = function (text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
    FeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-feed',template:/*ion-inline-start:"D:\xampp\htdocs\News-App\src\pages\feed\feed.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n      \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="cards-bg">\n\n  <ion-card *ngFor="let item of items">\n\n\n\n    <ion-item>\n\n      <h2>{{item.site}}</h2>\n\n      <p>{{item.datum}}</p>\n\n    </ion-item>\n\n    <img *ngIf="!item.image" src="http://gazoh.net/images/noimage.jpg">\n\n    <img [src]="item.image">\n\n\n\n    <ion-card-content>\n\n      <p class="itemdescription"><strong>{{item.title}}</strong></p>\n\n      <hr style="background-color: gray">\n\n      <p>{{htmlToPlaintext(item.description) | slice:0:120}}...</p>\n\n    </ion-card-content>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button icon-start clear small>\n\n          <ion-icon name="eye"></ion-icon>\n\n          <div>Meer lezen</div>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button icon-start clear small>\n\n          <ion-icon name="star-outline"></ion-icon>\n\n          <div>Favoriet</div>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button icon-start clear small>\n\n          <ion-icon name="share-alt"></ion-icon>\n\n          <div>Deel</div>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-card>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\xampp\htdocs\News-App\src\pages\feed\feed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], FeedPage);
    return FeedPage;
}());

//# sourceMappingURL=feed.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavorietenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-favorieten',template:/*ion-inline-start:"D:\xampp\htdocs\News-App\src\pages\favorieten\favorieten.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Favorieten</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n\n        <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n            <ion-icon [name]="item.icon" item-start></ion-icon>\n\n            {{item.title}}\n\n            <div class="item-note" item-end>\n\n                {{item.note}}\n\n            </div>\n\n        </button>\n\n    </ion-list>\n\n    <div *ngIf="selectedItem" padding>\n\n        You navigated here from <b>{{selectedItem.title}}</b>\n\n    </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\xampp\htdocs\News-App\src\pages\favorieten\favorieten.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], FavorietenPage);
    return FavorietenPage;
}());

//# sourceMappingURL=favorieten.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed_feed__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sport_sport__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__economie_economie__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CategoryPage = /** @class */ (function () {
    function CategoryPage(navCtrl, navParams, menuCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.menuCtrl.enable(true, 'myMenu');
    }
    CategoryPage.prototype.goFeed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__feed_feed__["a" /* FeedPage */]);
    };
    CategoryPage.prototype.goSport = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__sport_sport__["a" /* SportPage */]);
    };
    CategoryPage.prototype.goEconomie = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__economie_economie__["a" /* EconomiePage */]);
    };
    CategoryPage.prototype.newMenu = function () {
        var toast = this.toastCtrl.create({
            message: 'Test',
            cssClass: 'backgroundToastMenu',
            showCloseButton: true,
            closeButtonText: "OK"
        });
        toast.present();
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-category',template:/*ion-inline-start:"D:\xampp\htdocs\News-App\src\pages\category\category.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n      <ion-title>Categorieën</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="card-background-page" id="deleteCards">\n\n  <br>\n\n  <ion-card id="AlleCards" disabled>\n\n    <div (click)="goFeed()">\n\n      <img src="../../assets/imgs/Nieuws.jpg" height="200" width="400"/>\n\n      <div class="card-title">Algemeen</div>\n\n    </div>\n\n  </ion-card>\n\n  <ion-card>\n\n    <div (click)="goSport()">\n\n      <img src="../../assets/imgs/Sport.jpg" height="200" width="400"/>\n\n      <div class="card-title">Sport</div>\n\n    </div>\n\n  </ion-card>\n\n  <ion-card>\n\n    <div (click)="goEconomie()">\n\n      <img src="../../assets/imgs/economy.jpeg" height="200" width="400"/>\n\n      <div class="card-title">Economie</div>\n\n    </div>\n\n  </ion-card>\n\n  <ion-card>\n\n    <div (click)="goFeed()">\n\n      <img src="../../assets/imgs/misdaad.jpg" height="200" width="400"/>\n\n      <div class="card-title">Misdaad</div>\n\n    </div>\n\n  </ion-card>\n\n  <ion-card>\n\n    <div (click)="goFeed()">\n\n      <img src="../../assets/imgs/lifestyle.jpg" height="200" width="400"/>\n\n      <div class="card-title">Lifestyle</div>\n\n    </div>\n\n  </ion-card>\n\n  <ion-card>\n\n    <div (click)="goFeed()">\n\n      <img src="../../assets/imgs/car.jpg" height="200" width="400"/>\n\n      <div class="card-title">auto</div>\n\n    </div>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\xampp\htdocs\News-App\src\pages\category\category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ })

},[359]);
//# sourceMappingURL=main.js.map