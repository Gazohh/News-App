webpackJsonp([9],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed_feed__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sport_sport__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__economie_economie__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auto_auto__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__misdaad_misdaad__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tech_tech__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__vermaak_vermaak__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(45);
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
    function CategoryPage(navCtrl, navParams, menuCtrl, toastCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.menuCtrl.enable(true, 'myMenu');
    }
    CategoryPage.prototype.ionViewWillEnter = function () {
        this.getArtikelen();
    };
    CategoryPage.prototype.goFeed = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__feed_feed__["a" /* FeedPage */]);
    };
    CategoryPage.prototype.goSport = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__sport_sport__["a" /* SportPage */]);
    };
    CategoryPage.prototype.goEconomie = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__economie_economie__["a" /* EconomiePage */]);
    };
    CategoryPage.prototype.goMisdaad = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__misdaad_misdaad__["a" /* MisdaadPage */]);
    };
    CategoryPage.prototype.goTech = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__tech_tech__["a" /* TechPage */]);
    };
    CategoryPage.prototype.goAuto = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__auto_auto__["a" /* AutoPage */]);
    };
    CategoryPage.prototype.goVermaak = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__vermaak_vermaak__["a" /* VermaakPage */]);
    };
    CategoryPage.prototype.getArtikelen = function () {
        var _this = this;
        this.http
            .get('http://gazoh.net/aantalvandaag.php')
            .subscribe(function (data) {
            _this.aantalartikelen = data;
        }, function (error) {
            console.dir(error);
        });
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
            selector: 'page-category',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\pages\category\category.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n      <ion-title>Categorieën</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="card-background-page" id="deleteCards">\n\n  <ion-card disabled>\n\n    <div (click)="goFeed()">\n\n      <img src="../../assets/imgs/Nieuws.jpg">\n\n      <ion-title class="card-title2">Algemeen</ion-title>\n\n      <div class="card-subtitle">{{this.aantalartikelen}} Artikelen vandaag</div>\n\n    </div>\n\n  </ion-card>\n\n  <ion-card>\n\n    <div (click)="goSport()">\n\n      <img src="../../assets/imgs/Sport.jpg">\n\n      <ion-title class="card-title2">Sport</ion-title>\n\n      <div class="card-subtitle">0 Artikelen vandaag</div>\n\n    </div>\n\n  </ion-card>\n\n  <ion-card>\n\n    <div (click)="goEconomie()">\n\n      <img src="../../assets/imgs/Economie.jpg">\n\n      <ion-title class="card-title2">Economie</ion-title>\n\n    <div class="card-subtitle">0 Artikelen vandaag</div>\n\n    </div>\n\n  </ion-card>\n\n  <ion-card>\n\n    <div (click)="goMisdaad()">\n\n      <img src="../../assets/imgs/Misdaad.jpg">\n\n      <ion-title class="card-title2">Misdaad</ion-title>\n\n        <div class="card-subtitle">0 Artikelen vandaag</div>\n\n    </div>\n\n  </ion-card>\n\n  <ion-card>\n\n    <div (click)="goTech()">\n\n      <img src="../../assets/imgs/Tech.jpg">\n\n      <ion-title class="card-title2">Tech</ion-title>\n\n          <div class="card-subtitle">0 Artikelen vandaag</div>\n\n    </div>\n\n  </ion-card>\n\n  <ion-card>\n\n    <div (click)="goAuto()">\n\n      <img src="../../assets/imgs/Car.jpg">\n\n      <ion-title class="card-title2">Auto</ion-title>\n\n          <div class="card-subtitle">0 Artikelen vandaag</div>\n\n    </div>\n\n  </ion-card>\n\n  <ion-card>\n\n    <div (click)="goVermaak()">\n\n      <img src="../../assets/imgs/Entertainment.jpg">\n\n      <ion-title class="card-title2">Entertainment</ion-title>\n\n        <div class="card-subtitle">0 Artikelen vandaag</div>\n\n    </div>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\pages\category\category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HttpClient */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(231);
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
    function FeedPage(navCtrl, navParams, menuCtrl, http, network, toastCtrl, loadingCtrl, socialSharing, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.http = http;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.socialSharing = socialSharing;
        this.platform = platform;
        this.rssDataArray = [];
        this.items = 0;
        this.key = "items";
        this.isSearchbaropened = false;
        if (this.network.type != "none") {
            //this.getData();
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
        if (!localStorage.getItem("email")) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            toastinlog.present();
        }
        /* //this.GetNews()
         this.presentLoadingCustom();*/
    }
    FeedPage.prototype.presentLoadingCustom = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n     <div class=\"custom-spinner-container\"><img src=\"http://gazoh.net/images/spinner.svg\"><br> <p>Laden...</p>\n     </div>",
            duration: 1200
        });
        loading.present();
    };
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
    FeedPage.prototype.htmlToPlaintext = function (text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
    // Redirect to NieuwsPage
    FeedPage.prototype.viewEntry = function (param) {
        this.navCtrl.push('NieuwsPage', param);
    };
    FeedPage.prototype.search = function (event) {
        var serVal = event.target.value;
        if (serVal && serVal.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.title.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
            });
        }
    };
    FeedPage.prototype.resetChanges = function () {
        this.items = this.artikelen;
    };
    // setFocus() {
    //     this.searchbar.setFocus();
    // }
    FeedPage.prototype.load = function () {
        var _this = this;
        this.datepicker = "vandaag";
        this.http
            .get('http://gazoh.net/getdata.php')
            .subscribe(function (data) {
            _this.items = data;
            _this.artikelen = data;
        }, function (error) {
            console.dir(error);
        });
        this.presentLoadingCustom();
    };
    FeedPage.prototype.loadYesterday = function () {
        var _this = this;
        this.datepicker = "gisteren";
        this.http
            .get('http://gazoh.net/getyesterday.php')
            .subscribe(function (data) {
            _this.items = data;
            _this.artikelen = data;
        }, function (error) {
            console.dir(error);
        });
        this.presentLoadingCustom();
    };
    FeedPage.prototype.load3DaysAgo = function () {
        var _this = this;
        this.datepicker = "driedagengeleden";
        this.http
            .get('http://gazoh.net/get3daysago.php')
            .subscribe(function (data) {
            _this.items = data;
            _this.artikelen = data;
        }, function (error) {
            console.dir(error);
        });
        this.presentLoadingCustom();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Searchbar */])
    ], FeedPage.prototype, "searchbar", void 0);
    FeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-feed',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\pages\feed\feed.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-searchbar #searchbar *ngIf="isSearchbaropened" [showCancelButton]="true" (ionCancel)="isSearchbaropened=false"\n     (ionInput)="search($event)" placeholder="Waar zijn we naar op zoek?" class="slideInRight"></ion-searchbar>\n    <button ion-button menuToggle *ngIf="!isSearchbaropened">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title *ngIf="!isSearchbaropened">Home</ion-title>\n   <ion-buttons end>\n      <button ion-button icon-only (click)="isSearchbaropened=true">\n        <ion-icon name="search" *ngIf="!isSearchbaropened"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-segment [(ngModel)]="datepicker" color="dark">\n    <ion-segment-button value="vandaag" (click)="load()">\n      Vandaag\n    </ion-segment-button>\n    <ion-segment-button value="gisteren" (click)="loadYesterday()">\n      Gisteren\n    </ion-segment-button>\n    <ion-segment-button value="driedagengeleden" (click)="load3DaysAgo()">\n      3 dagen geleden\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n<ion-content>\n  <ion-card *ngFor="let item of items" (click)="viewEntry({ record: item })">\n    <div class="ion-card-image-wrapper">\n          <img *ngIf="!item.image" src="http://gazoh.net/images/noimage.jpg">\n          <img [src]="item.image" *ngIf="item.site == \'NOS.nl\'" class="transformFoto">\n          <img [src]="item.image" *ngIf="item.site == \'NU.nl\'"  class="transformFoto">\n          <img [src]="item.image" *ngIf="item.site != \'NOS.nl\' || item.site != \'NU.nl\'">\n      </div>\n    <ion-card-content>\n      <ion-card-title>\n        <strong>{{item.title}}</strong>\n      </ion-card-title>\n      <p>{{htmlToPlaintext(item.description) | slice:0:120}}...</p>\n    </ion-card-content>\n    <ion-item>\n      <ion-icon name="contact" item-start></ion-icon>\n      <ion-badge item-end *ngIf="item.site == \'De Telegraaf\'" class="ColorTelegraaf">{{item.site}}</ion-badge>\n      <ion-badge item-end *ngIf="item.site == \'NOS\'" class="ColorNOS">{{item.site}}</ion-badge>\n      <ion-badge item-end *ngIf="item.site == \'NU.nl\'" class="ColorNU">{{item.site}}</ion-badge>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="time" item-start></ion-icon>\n      <ion-badge item-end *ngIf="item.site == \'De Telegraaf\'" class="ColorTelegraaf">{{item.datum}}</ion-badge>\n      <ion-badge item-end *ngIf="item.site == \'NOS\'" class="ColorNOS">{{item.datum}}</ion-badge>\n      <ion-badge item-end *ngIf="item.site == \'NU.nl\'" class="ColorNU">{{item.datum}}</ion-badge>\n    </ion-item>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\pages\feed\feed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], FeedPage);
    return FeedPage;
}());

//# sourceMappingURL=feed.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavorietenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
            selector: 'page-favorieten',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\pages\favorieten\favorieten.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Favorieten</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\pages\favorieten\favorieten.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], FavorietenPage);
    return FavorietenPage;
}());

//# sourceMappingURL=favorieten.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_category__ = __webpack_require__(119);
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
    function TutorialPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slides = [
            {
                title: "Welcome to the Docs!",
                description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
                image: "../../assets/imgs/ica-slidebox-img-1.png",
            },
            {
                title: "What is Ionic?",
                description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
                image: "../../assets/imgs/ica-slidebox-img-2.png",
            },
            {
                title: "What is Ionic Cloud?",
                description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
                image: "../../assets/imgs/ica-slidebox-img-3.png",
            }
        ];
    }
    TutorialPage.prototype.tutorialDone = function () {
        // localStorage Tutorial
        localStorage.setItem("tutorial", "false");
        if (localStorage.getItem("tutorial") == "false") {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__category_category__["a" /* CategoryPage */]);
        }
    };
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tutorial',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\pages\tutorial\tutorial.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n      <ion-title>Tutorial</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button color="primary" (click)=\'tutorialDone()\'>Skip</button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="tutorial-page">\n\n  <ion-slides pager>\n\n    <ion-slide *ngFor="let slide of slides">\n\n      <img [src]="slide.image" class="slide-image"/>\n\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n\n      <p [innerHTML]="slide.description"></p>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <img src="../../assets/imgs/ica-slidebox-img-4.png" class="slide-image"/>\n\n      <h2 class="slide-title">Ready to Play?</h2>\n\n      <button ion-button large clear icon-end color="primary" (click)="tutorialDone()">\n\n        Continue\n\n        <ion-icon name="arrow-forward"></ion-icon>\n\n      </button>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\pages\tutorial\tutorial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(402);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(45);
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
    function AdminPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
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
            .get('http://gazoh.net/getdata.php')
            .subscribe(function (data) {
            _this.artikelenlijst = data;
        }, function (error) {
            console.dir(error);
        });
    };
    AdminPage.prototype.htmlToPlaintext = function (text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-admin',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\pages\admin\admin.html"*/'<!--\n\n  Generated template for the AdminPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Admin\n\n    </ion-title>\n\n  </ion-navbar>\n\n  <ion-segment [(ngModel)]="checklist" color="primary">\n\n    <ion-segment-button value="artikelen" (click)="selectArtikelen()">\n\n      Artikelen\n\n    </ion-segment-button>\n\n    <ion-segment-button value="gebruikers" (click)="selectGebruikers()">\n\n      Gebruikers\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <div *ngIf="checklist == \'artikelen\'">\n\n        <ion-searchbar placeholder="Zoek.." (ionInput)="searchArtikel($event)" [showCancelButton]="true" (ionCancel)="resetArtikelen()" (ionClear)="resetChanges()"></ion-searchbar>\n\n    <ion-card *ngFor="let item of artikelenlijst" (click)="viewEntry({ record: item })">\n\n        <img *ngIf="!item.image" src="http://gazoh.net/images/noimage.jpg">\n\n        <img [src]="item.image">\n\n        <ion-card-content>\n\n            <ion-card-title>\n\n                <strong>{{item.title}}</strong>\n\n            </ion-card-title>\n\n            <p>{{htmlToPlaintext(item.description) | slice:0:120}}...</p>\n\n        </ion-card-content>\n\n\n\n        <!-- Funtie nog schrijven voor if == nu.nl of andere website set badge kleur  -->\n\n        <ion-item>\n\n            <ion-icon name="contact" item-start></ion-icon>\n\n            <ion-badge item-end>{{item.site}}</ion-badge>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-icon name="time" item-start></ion-icon>\n\n            <ion-badge item-end>{{item.datum}}</ion-badge>\n\n        </ion-item>\n\n    </ion-card>\n\n    </div>\n\n\n\n        <ion-list inset *ngIf="checklist == \'gebruikers\'">\n\n            <ion-item-group>\n\n                <ion-row>\n\n                <ion-item class="adminUsers" *ngFor="let user of gebruikerslijst" ><strong>ID : </strong> {{user.id}} | <strong>{{user.username}}</strong> <button ion-button color="danger" item-right><ion-icon name="trash"></ion-icon></button></ion-item>\n\n                </ion-row>\n\n            </ion-item-group>\n\n        </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\pages\admin\admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-auto',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\pages\auto\auto.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n      <ion-title>Auto</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\pages\auto\auto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], AutoPage);
    return AutoPage;
}());

//# sourceMappingURL=auto.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EconomiePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
            selector: 'page-economie',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\pages\economie\economie.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n      <ion-title>Economie</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\pages\economie\economie.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], EconomiePage);
    return EconomiePage;
}());

//# sourceMappingURL=economie.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
            selector: 'page-sport',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\pages\sport\sport.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n      <ion-title>Sport</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\pages\sport\sport.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SportPage);
    return SportPage;
}());

//# sourceMappingURL=sport.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisdaadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-misdaad',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\pages\misdaad\misdaad.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n      <ion-title>Categorieën</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\pages\misdaad\misdaad.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], MisdaadPage);
    return MisdaadPage;
}());

//# sourceMappingURL=misdaad.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tech',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\pages\tech\tech.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n      <ion-title>Tech</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\pages\tech\tech.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TechPage);
    return TechPage;
}());

//# sourceMappingURL=tech.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_admin__ = __webpack_require__(159);
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
    SettingsPage.prototype.openAdmin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__admin_admin__["a" /* AdminPage */]);
    };
    SettingsPage.prototype.uitloggen = function () {
        localStorage.removeItem("email");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], SettingsPage.prototype, "nav", void 0);
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\pages\settings\settings.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title class="ionTitle">Settings</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-item class="darkItem">\n\n      <ion-label class="DarkLabel">Bewerk Profiel</ion-label>\n\n  </ion-item>\n\n    <ion-item class="darkItem">\n\n        <ion-label class="DarkLabel">Over ons</ion-label>\n\n    </ion-item>\n\n    <ion-item class="darkItem">\n\n        <ion-label class="DarkLabel">Raporteer Probleem / Idee</ion-label>\n\n    </ion-item>\n\n    <ion-item class="darkItem">\n\n        <ion-label class="DarkLabel">Light/Dark</ion-label>\n\n        <ion-toggle [(ngModel)]="toggleStatus" (ionChange)="toggleAppTheme()"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item class="darkItem" (click)="openAdmin()">\n\n        <ion-label>Admin panel</ion-label>\n\n    </ion-item>\n\n        <button class="uitloggen" ion-button full (click)="uitloggen()">Uitloggen</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\pages\settings\settings.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SourcesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], SourcesPage.prototype, "slider", void 0);
    SourcesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sources',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\pages\sources\sources.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sources</ion-title>\n  </ion-navbar>\n  <ion-segment color="dark" [(ngModel)]="page">\n    <ion-segment-button value="0" (click)="selectedTab(0)">\n      Subscribed\n    </ion-segment-button>\n    <ion-segment-button value="1" (click)="selectedTab(1)">\n      Suggesties\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n<ion-content>\n  <ion-slides #slider (ionSlideWillChange)="moveButton($event)" >\n    <!--  -->\n    <!-- Alle Sources die zijn geimport -->\n    <!--  -->\n    <ion-slide>\n      <ion-list>\n        <ion-item>\n          <ion-avatar class="avatar" item-start>\n            <img src="../assets/svg/NOS_logo.svg">\n          </ion-avatar>\n          <div><b>NOS</b></div>\n          <div>Nieuwsfeed</div>\n          <button ion-button outline item-end color="danger">\n            <ion-icon name="close" class="buttonIcon"></ion-icon>Verwijderen\n          </button>\n        </ion-item>\n\n        <ion-item>\n          <ion-avatar class="avatar" item-start>\n            <img src="../assets/svg/telegraaf.svg">\n          </ion-avatar>\n          <div><b>De Telegraaf</b></div>\n          <div>Nieuwsfeed</div>\n          <button ion-button outline item-end color="danger">\n            <ion-icon name="close" class="buttonIcon"></ion-icon>Verwijderen\n          </button>\n        </ion-item>\n\n        <ion-item>\n          <ion-avatar class="avatar" item-start>\n            <img src="../assets/svg/nu.nl.svg">\n          </ion-avatar>\n          <div><b>NU.NL</b></div>\n          <div>Nieuwsfeed</div>\n          <button ion-button outline item-end color="danger">\n            <ion-icon name="close" class="buttonIcon"></ion-icon>Verwijderen\n          </button>\n        </ion-item>\n\n      </ion-list>\n    </ion-slide>\n    <ion-slide>\n      <ion-list>\n        <!--  -->\n        <!-- Alle Sources die je kunt importen -->\n        <!--  -->\n        <ion-item>\n              <h4 class="TitelSources">Nieuwsfeed</h4>\n        </ion-item>\n        <ion-item>\n          <ion-avatar class="avatar" item-start>\n            <img src="../assets/svg/Volkskrant.svg">\n          </ion-avatar>\n          <div><b>De Volkskrant</b></div>\n          <div>Nieuwsfeed</div>\n          <button ion-button outline item-end color="green">\n            <ion-icon name="checkmark" class="buttonIcon"></ion-icon>Toevoegen\n          </button>\n        </ion-item>\n\n        <ion-item>\n          <ion-avatar class="avatar" item-start>\n            <img src="../assets/svg/AD.svg">\n          </ion-avatar>\n          <div><b>Algemeen Dagblad</b></div>\n          <div>Nieuwsfeed</div>\n          <button ion-button outline item-end color="green">\n            <ion-icon name="checkmark" class="buttonIcon"></ion-icon>Toevoegen\n          </button>\n        </ion-item>\n\n\n        <ion-item>\n          <ion-avatar class="avatar" item-start>\n            <img src="../assets/svg/RTL_Nederland.svg">\n          </ion-avatar>\n          <div><b>RTL Nieuws</b></div>\n          <div>Nieuwsfeed</div>\n          <button ion-button outline item-end color="green">\n            <ion-icon name="checkmark" class="buttonIcon"></ion-icon>Toevoegen\n          </button>\n        </ion-item>\n\n        <ion-item>\n          <ion-avatar class="avatar" item-start>\n            <img src="../assets/svg/De_Gelderlander.svg">\n          </ion-avatar>\n          <div><b>De Gelderlander</b></div>\n          <div>Nieuwsfeed</div>\n          <button ion-button outline item-end color="green">\n            <ion-icon name="checkmark" class="buttonIcon"></ion-icon>Toevoegen\n          </button>\n        </ion-item>\n\n        <ion-item>\n              <h4 class="TitelSources">Tech</h4>\n        </ion-item>\n\n        <ion-item>\n          <ion-avatar class="avatar" item-start>\n            <img src="../assets/svg/Tweakers.svg">\n          </ion-avatar>\n          <div><b>Tweakers</b></div>\n          <div>Tech</div>\n          <button ion-button outline item-end color="green">\n            <ion-icon name="checkmark" class="buttonIcon"></ion-icon>Toevoegen\n          </button>\n        </ion-item>\n\n        <ion-item>\n              <h4 class="TitelSources">Sport</h4>\n        </ion-item>\n\n        <ion-item>\n          <ion-avatar class="avatar" item-start>\n            <img src="../assets/svg/Fifa.svg">\n          </ion-avatar>\n          <div><b>Fifa</b></div>\n          <div>Sport</div>\n          <button ion-button outline item-end color="green">\n            <ion-icon name="checkmark" class="buttonIcon"></ion-icon>Toevoegen\n          </button>\n        </ion-item>\n\n        <ion-item>\n          <ion-avatar class="avatar" item-start>\n            <img src="../assets/svg/FoxSports.svg">\n          </ion-avatar>\n          <div><b>Fox Sports Go</b></div>\n          <div>Sport</div>\n          <button ion-button outline item-end color="green">\n            <ion-icon name="checkmark" class="buttonIcon"></ion-icon>Toevoegen\n          </button>\n        </ion-item>\n\n        <ion-item>\n          <ion-avatar class="avatar" item-start>\n            <img src="../assets/svg/NuSport.svg">\n          </ion-avatar>\n          <div><b>Nu Sport</b></div>\n          <div>Sport</div>\n          <button ion-button outline item-end color="green">\n            <ion-icon name="checkmark" class="buttonIcon"></ion-icon>Toevoegen\n          </button>\n        </ion-item>\n\n        <ion-item>\n          <ion-avatar class="avatar" item-start>\n            <img src="../assets/svg/rtlz.svg">\n          </ion-avatar>\n          <div><b>RTL Z </b></div>\n          <div>Sport</div>\n          <button ion-button outline item-end color="green">\n            <ion-icon name="checkmark" class="buttonIcon"></ion-icon>Toevoegen\n          </button>\n        </ion-item>\n\n        <ion-item>\n          <ion-avatar class="avatar" item-start>\n            <img src="../assets/svg/Voetbalzone.svg">\n          </ion-avatar>\n          <div><b>Voetbalzone</b></div>\n          <div>Sport</div>\n          <button ion-button outline item-end color="green">\n            <ion-icon name="checkmark" class="buttonIcon"></ion-icon>Toevoegen\n          </button>\n        </ion-item>\n\n\n      </ion-list>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\pages\sources\sources.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SourcesPage);
    return SourcesPage;
}());

//# sourceMappingURL=sources.js.map

/***/ }),

/***/ 177:
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
webpackEmptyAsyncContext.id = 177;

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin/admin.module": [
		709,
		8
	],
	"../pages/auto/auto.module": [
		710,
		7
	],
	"../pages/category/category.module": [
		224
	],
	"../pages/economie/economie.module": [
		711,
		6
	],
	"../pages/feed/feed.module": [
		232
	],
	"../pages/misdaad/misdaad.module": [
		712,
		5
	],
	"../pages/nieuws/nieuws.module": [
		233
	],
	"../pages/register/register.module": [
		236
	],
	"../pages/settings/settings.module": [
		713,
		4
	],
	"../pages/sources/sources.module": [
		714,
		3
	],
	"../pages/sport/sport.module": [
		715,
		2
	],
	"../pages/tech/tech.module": [
		716,
		1
	],
	"../pages/tutorial/tutorial.module": [
		327
	],
	"../pages/vermaak/vermaak.module": [
		717,
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
webpackAsyncContext.id = 221;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function() { return CategoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CategoryPageModule = /** @class */ (function () {
    function CategoryPageModule() {
    }
    CategoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__category__["a" /* CategoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__category__["a" /* CategoryPage */]),
            ],
        })
    ], CategoryPageModule);
    return CategoryPageModule;
}());

//# sourceMappingURL=category.module.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(122);
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
            password: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$')]),
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\pages\register\register.html"*/'<ion-content>\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-12>\n\n                <div class="loginFoto">\n\n                    <div class="form-title"\n\n                         style="background-image: url(http://gazoh.net/images/axa-studios-media-agency-arnhem-maibanner.jpg)">\n\n                        <ion-title class="form-title1">Registreer</ion-title>\n\n                        <div class="row">\n\n                            <button ion-button class="homeButton" (click)="terug()">Home</button>\n\n                            <button ion-button class="registerButton" style="background-color: rgba(79, 0, 11, 0.78) !important">Registreer</button>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n                <div class="geheel">\n\n                    <form novalidate [formGroup]="form">\n\n                        <div class="form-group">\n\n                            <ion-item [ngClass]="{ \'ng-touched\' : form.get(\'username\').touched }">>\n\n                                <ion-label floating>Username</ion-label>\n\n                                <ion-input type="text" formControlName="username" class="form-control" [(ngModel)]="username"></ion-input>\n\n                            </ion-item>\n\n                        </div>\n\n                        <div *ngIf="form.get(\'username\').touched && form.get(\'username\').invalid" class="alert alert-danger" required>\n\n                            <div class="validatieText" *ngIf="form.get(\'username\').hasError(\'required\')">Naam moet ingevuld zijn.</div>\n\n                            <div class="validatieText" *ngIf="form.get(\'username\').hasError(\'pattern\')">Ongeldige naam.</div>\n\n                        </div>\n\n\n\n                        <div class="form-group">\n\n                            <ion-item [ngClass]="{ \'ng-touched\' : form.get(\'email\').touched }">\n\n                                <ion-label floating >E-mail</ion-label>\n\n                                <ion-input type="email"  formControlName="email" class="form-control" [(ngModel)]="email" ></ion-input>\n\n                            </ion-item>\n\n                        </div>\n\n                        <div *ngIf="form.get(\'email\').touched && form.get(\'email\').invalid" class="alert alert-danger" required>\n\n                            <div class="validatieText" *ngIf="form.get(\'email\').hasError(\'required\')">Email moet ingevuld zijn</div>\n\n                            <div class="validatieText" *ngIf="form.get(\'email\').hasError(\'pattern\')">Ongeldige Email!</div>\n\n                        </div>\n\n\n\n                        <div class="form-group">\n\n                            <ion-item [ngClass]="{ \'ng-touched\' : form.get(\'password\').touched }">\n\n                                <ion-label floating>Password</ion-label>\n\n                                <ion-input type="password" formControlName="password" class="form-control" [(ngModel)]="password"></ion-input>\n\n                            </ion-item>\n\n                        </div>\n\n                        <div class="alert alert-danger"  *ngIf="form.get(\'password\').touched && form.get(\'password\').invalid ">\n\n                            <div class="validatieText" *ngIf="form.get(\'password\').hasError(\'required\')">Wachtwoord moet ingevuld zijn</div>\n\n                            <div class="validatieText" *ngIf="form.get(\'password\').hasError(\'minLength\')">Wachtwoord moet minimaal 8 tekens lang zijn</div>\n\n                            <div class="validatieText" *ngIf="form.get(\'password\').hasError(\'pattern\')">Wachtwoord moet minstens een hoofdletter, een kleine letter en een cijfer bevatten</div>\n\n                        </div>\n\n                    </form>\n\n                    <br>\n\n                    <button class="button3" ion-button (click)="onSubmit()" color="secondary" round>Aanmaken\n\n                    </button>\n\n                    <br>\n\n                    <br>\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function() { return FeedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed__ = __webpack_require__(120);
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

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NieuwsPageModule", function() { return NieuwsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nieuws__ = __webpack_require__(234);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nieuws__["a" /* NieuwsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nieuws__["a" /* NieuwsPage */]),
            ],
        })
    ], NieuwsPageModule);
    return NieuwsPageModule;
}());

//# sourceMappingURL=nieuws.module.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NieuwsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(235);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-nieuws',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\pages\nieuws\nieuws.html"*/'<ion-header>\n  <meta charset="UTF-8">\n  <ion-navbar class="nieuwsNavTitle">{{this.title}}</ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-card class="nieuwsCard">\n    <img *ngIf="!this.image" src="http://gazoh.net/images/noimage.jpg">\n    <img src="{{this.image}}">\n    <ion-card-header class="headerText" text-wrap>\n      {{this.title}}\n      <p class="nieuwsDatum">{{this.datum}}</p>\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p>{{htmlToPlaintext(this.description)}}</p>\n\n\n      <button (click)="openPagina(this.link)" ion-button round *ngIf="this.site == \'De Telegraaf\'" class="ColorTelegraaf">{{this.site}}</button>\n      <button (click)="openPagina(this.link)" ion-button round *ngIf="this.site == \'NOS\'" class="ColorNOS">{{this.site}}</button>\n      <button (click)="openPagina(this.link)" ion-button round *ngIf="this.site == \'NU.nl\'" class="ColorNU">{{this.site}}</button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\pages\nieuws\nieuws.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], NieuwsPage);
    return NieuwsPage;
}());

//# sourceMappingURL=nieuws.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(229);
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

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial__ = __webpack_require__(124);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */]),
            ],
        })
    ], TutorialPageModule);
    return TutorialPageModule;
}());

//# sourceMappingURL=tutorial.module.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VermaakPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-vermaak',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\pages\vermaak\vermaak.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n      <ion-title>Categorieën</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\pages\vermaak\vermaak.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], VermaakPage);
    return VermaakPage;
}());

//# sourceMappingURL=vermaak.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(377);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_favorieten_favorieten_module__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_feed_feed_module__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register_module__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_settings_settings__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_network__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_sport_sport__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_economie_economie__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_css_animator__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_css_animator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_css_animator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_auto_auto__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_misdaad_misdaad__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_tech_tech__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_nieuws_nieuws__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_nieuws_nieuws_module__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_category_category_module__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_admin_admin__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_in_app_browser__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_sources_sources__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_tutorial_tutorial_module__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_social_sharing__ = __webpack_require__(231);
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
                __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_sport_sport__["a" /* SportPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_economie_economie__["a" /* EconomiePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_auto_auto__["a" /* AutoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_misdaad_misdaad__["a" /* MisdaadPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tech_tech__["a" /* TechPage */],
                __WEBPACK_IMPORTED_MODULE_18_css_animator__["AnimatesDirective"],
                __WEBPACK_IMPORTED_MODULE_25__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_sources_sources__["a" /* SourcesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    mode: "md",
                    scrollAssist: false,
                    autoFocusAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/auto/auto.module#AutoPageModule', name: 'AutoPage', segment: 'auto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/economie/economie.module#EconomiePageModule', name: 'EconomiePage', segment: 'economie', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/misdaad/misdaad.module#MisdaadPageModule', name: 'MisdaadPage', segment: 'misdaad', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feed/feed.module#FeedPageModule', name: 'FeedPage', segment: 'feed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nieuws/nieuws.module#NieuwsPageModule', name: 'NieuwsPage', segment: 'nieuws', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sources/sources.module#SourcesPageModule', name: 'SourcesPage', segment: 'sources', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sport/sport.module#SportPageModule', name: 'SportPage', segment: 'sport', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tech/tech.module#TechPageModule', name: 'TechPage', segment: 'tech', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vermaak/vermaak.module#VermaakPageModule', name: 'VermaakPage', segment: 'vermaak', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__pages_favorieten_favorieten_module__["a" /* FavorietenPageModule */],
                __WEBPACK_IMPORTED_MODULE_11__pages_feed_feed_module__["FeedPageModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register_module__["RegisterPageModule"],
                __WEBPACK_IMPORTED_MODULE_23__pages_nieuws_nieuws_module__["NieuwsPageModule"],
                __WEBPACK_IMPORTED_MODULE_24__pages_category_category_module__["CategoryPageModule"],
                __WEBPACK_IMPORTED_MODULE_28__pages_tutorial_tutorial_module__["TutorialPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_sport_sport__["a" /* SportPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_economie_economie__["a" /* EconomiePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_auto_auto__["a" /* AutoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_misdaad_misdaad__["a" /* MisdaadPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tech_tech__["a" /* TechPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_nieuws_nieuws__["a" /* NieuwsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_sources_sources__["a" /* SourcesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_settings_settings__["a" /* SettingsProvider */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_14__providers_settings_settings__["a" /* SettingsProvider */],
                __WEBPACK_IMPORTED_MODULE_18_css_animator__["AnimationService"],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__favorieten_favorieten__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__feed_feed__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tutorial_tutorial__ = __webpack_require__(124);
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
    function HomePage(navCtrl, alertCtrl, loading, http, toastCtrl, keyboard, menuCtrl, events) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.keyboard = keyboard;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.rootPage = HomePage_1;
        this.FavorietenPage = __WEBPACK_IMPORTED_MODULE_5__favorieten_favorieten__["a" /* FavorietenPage */];
        this.FeedPage = __WEBPACK_IMPORTED_MODULE_7__feed_feed__["a" /* FeedPage */];
        this.menuCtrl.enable(false, 'myMenu');
        keyboard.disableScroll(true);
    }
    HomePage_1 = HomePage;
    //
    // Buttons met Push
    //
    // Push naar de register pagina
    HomePage.prototype.goRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
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
                        // Localstorage Email
                        localStorage.setItem("email", _this.email);
                        // localStorage Tutorial
                        localStorage.setItem("tutorial", "true");
                        if (localStorage.getItem("tutorial") == "true") {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__tutorial_tutorial__["a" /* TutorialPage */]);
                        }
                        toast.present();
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\pages\home\home.html"*/'<ion-content>\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-12>\n\n                <div class="loginFoto">\n\n                    <div class="form-title" style="background-image: url(../../assets/imgs/UXwXuyD.png)">\n\n                        <ion-title class="form-title1">Log-in</ion-title>\n\n                        <div class="row">\n\n                            <button ion-button class="homeButton" style="background-color: rgba(79, 0, 11, 0.78) !important">Home</button>\n\n                            <button ion-button class="registerButton" (click)="goRegister()">Registreer</button>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n                <div class="geheel">\n\n                    <ion-item>\n\n                        <ion-label floating>Email</ion-label>\n\n                        <ion-input type="email" [(ngModel)]="email"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label floating>Wachtwoord</ion-label>\n\n                        <ion-input type="password" [(ngModel)]="password"></ion-input>\n\n                    </ion-item>\n\n                    <br>\n\n                    <a href="#" class="txt1">Wachtwoord vergeten ?</a>\n\n                    <br>\n\n\n\n                    <button class="button3" ion-button (click)="signIn()" color="secondary" round>Inloggen</button>\n\n\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_favorieten_favorieten__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_settings_settings__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_category_category__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_sources_sources__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tutorial_tutorial__ = __webpack_require__(124);
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
        this.splashScreen = splashScreen;
        this.settings = settings;
        this.modalCtrl = modalCtrl;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleLightContent();
            // splashScreen.hide();
        });
        // events.subscribe('user:created', (user) => {
        //   console.log('Welcome', user);
        // });
        console.log(localStorage.getItem("username"));
        this.pages = [
            {
                title: 'Home',
                component: __WEBPACK_IMPORTED_MODULE_9__pages_category_category__["a" /* CategoryPage */],
                icon: 'home'
            },
            {
                title: 'Sources',
                component: __WEBPACK_IMPORTED_MODULE_10__pages_sources_sources__["a" /* SourcesPage */],
                icon: 'star'
            },
            {
                title: 'Favorieten',
                component: __WEBPACK_IMPORTED_MODULE_4__pages_favorieten_favorieten__["a" /* FavorietenPage */],
                icon: 'heart'
            },
            {
                title: 'Notificaties',
                component: __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */],
                icon: 'notifications'
            },
            {
                title: 'Tutorial',
                component: __WEBPACK_IMPORTED_MODULE_11__pages_tutorial_tutorial__["a" /* TutorialPage */],
                icon: 'map'
            },
            {
                title: 'Instellingen',
                component: __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */],
                icon: 'settings'
            }
        ];
        //
        // Local Storage
        //
        if (!localStorage.getItem("email")) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_category_category__["a" /* CategoryPage */];
        }
        //
        // Dark/Light Mode
        //
        if (localStorage.getItem("themeColor") == "dark-theme") {
            this.settings.setActiveTheme("dark-theme");
            console.log("Toggle Status: " + this.toggleStatus);
        }
        else if (localStorage.getItem("themeColor") == "light-theme") {
            this.settings.setActiveTheme("light-theme");
            console.log("Toggle Status: " + this.toggleStatus);
        }
    }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\app\app.html"*/'<ion-menu id="myMenu" [content]="content" [swipeEnabled]="false">\n  <ion-content id="contentAnimation" menuToggle>\n    <ion-list>\n      <ion-navbar>\n        <ion-grid class="gridMenu">\n          <ion-row>\n            <ion-col>\n              <img src="https://bankwatch.org/wp-content/uploads/2018/03/Portrait_Placeholder.png" class="custom-avatar" />\n              <h5 class="usernameMenu">Username</h5>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-navbar>\n      <ion-item>\n        <button detail-none ion-item menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          <ion-icon slot="start" [name]="p.icon"></ion-icon>\n          <span class="menu-titles">\n          {{p.title}}\n        </span>\n        </button>\n      </ion-item>\n      <ion-footer>\n        <ion-toolbar>\n          <div class="versienummer"><b>©NewsAge</b> V3.4.8</div>\n        </ion-toolbar>\n      </ion-footer>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" [class]="selectedTheme" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Documents\GitHub\News-App\src\app\app.html"*/,
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

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavorietenPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorieten__ = __webpack_require__(123);
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

/***/ })

},[372]);
//# sourceMappingURL=main.js.map