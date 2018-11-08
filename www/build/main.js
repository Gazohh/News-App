<<<<<<< HEAD
webpackJsonp([12],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed_feed__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sport_sport__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__economie_economie__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auto_auto__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__misdaad_misdaad__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tech_tech__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__vermaak_vermaak__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home__ = __webpack_require__(47);
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
    function CategoryPage(navCtrl, navParams, menuCtrl, toastCtrl, http, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.events = events;
        if (!localStorage.getItem("sessionToken")) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */]);
        }
        this.menuCtrl.enable(true, 'myMenu');
        var headers = new __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = { headers: headers };
        var data = {
            email: localStorage.getItem("userEmail"),
        };
        this.http.post('http://www.gazoh.net/getgebruiker.php', data, options)
            .subscribe(function (data) {
            _this.dataUser = data;
            _this.username = _this.dataUser.username;
            _this.profilepicture = _this.dataUser.profilepicture;
            _this.events.publish("username", _this.username);
            _this.events.publish("profilepicture", _this.profilepicture);
        });
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"C:\xampp\htdocs\News-App\src\pages\category\category.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle right class="fakeCenter">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Categorie�n</ion-title>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle right class="fakeCenter">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Categorieën</ion-title>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="card-background-page" id="deleteCards">\n\n  <div (click)="goFeed()">\n\n        <ion-card class="cardCategory">\n\n\n\n            <img src="../../assets/imgs/Nieuws.jpg">\n\n            <ion-title class="card-title2">Algemeen</ion-title>\n\n            <div class="card-subtitle">{{this.aantalartikelen}} Artikelen vandaag</div>\n\n        </ion-card>\n\n  </div>\n\n\n\n        <ion-card class="cardCategory">\n\n          <div (click)="goSport()">\n\n            <img src="../../assets/imgs/Sport.jpg">\n\n            <ion-title class="card-title2">Sport</ion-title>\n\n            <div class="card-subtitle">0 Artikelen vandaag</div>\n\n          </div>\n\n        </ion-card>\n\n\n\n        <ion-card class="cardCategory">\n\n          <div (click)="goEconomie()">\n\n            <img src="../../assets/imgs/Economie.jpg">\n\n            <ion-title class="card-title2">Economie</ion-title>\n\n            <div class="card-subtitle">0 Artikelen vandaag</div>\n\n          </div>\n\n        </ion-card>\n\n\n\n        <ion-card class="cardCategory">\n\n          <div (click)="goMisdaad()">\n\n            <img src="../../assets/imgs/Misdaad.jpg">\n\n            <ion-title class="card-title2">Misdaad</ion-title>\n\n            <div class="card-subtitle">0 Artikelen vandaag</div>\n\n          </div>\n\n        </ion-card>\n\n\n\n    <ion-card class="cardCategory">\n\n        <div (click)="goTech()">\n\n          <img src="../../assets/imgs/Tech.jpg">\n\n          <ion-title class="card-title2">Tech</ion-title>\n\n          <div class="card-subtitle">0 Artikelen vandaag</div>\n\n        </div>\n\n      </ion-card>\n\n\n\n      <ion-card class="cardCategory">\n\n        <div (click)="goAuto()">\n\n          <img src="../../assets/imgs/Car.jpg">\n\n          <ion-title class="card-title2">Auto</ion-title>\n\n          <div class="card-subtitle">0 Artikelen vandaag</div>\n\n        </div>\n\n      </ion-card>\n\n\n\n      <ion-card class="cardCategory">\n\n        <div (click)="goVermaak()">\n\n          <img src="../../assets/imgs/Entertainment.jpg">\n\n          <ion-title class="card-title2">Entertainment</ion-title>\n\n          <div class="card-subtitle">0 Artikelen vandaag</div>\n\n        </div>\n\n      </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\News-App\src\pages\category\category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comments_comments__ = __webpack_require__(159);
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
    function FeedPage(navCtrl, navParams, menuCtrl, http, network, toastCtrl, loadingCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.http = http;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
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
        // Sessie Token
        if (!localStorage.getItem("sessionToken")) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            toastinlog.present();
        }
        // User role
        if (localStorage.getItem("userRole")) {
            this.rol = localStorage.getItem("userRole");
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
    FeedPage.prototype.goComments = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__comments_comments__["a" /* CommentsPage */]);
    };
    FeedPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        if (this.datepicker == "vandaag") {
            this.http
                .get('http://gazoh.net/getdata.php')
                .subscribe(function (data) {
                _this.items = data;
                _this.artikelen = data;
            }, function (error) {
                console.dir(error);
            });
        }
        else if (this.datepicker == "gisteren") {
            this.http
                .get('http://gazoh.net/getyesterday.php')
                .subscribe(function (data) {
                _this.items = data;
                _this.artikelen = data;
            }, function (error) {
                console.dir(error);
            });
        }
        else if (this.datepicker == "driedagengeleden") {
            this.http
                .get('http://gazoh.net/get3daysago.php')
                .subscribe(function (data) {
                _this.items = data;
                _this.artikelen = data;
            }, function (error) {
                console.dir(error);
            });
        }
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    FeedPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.http
            .get('http://gazoh.net/getdata.php')
            .subscribe(function (data) {
            _this.items = _this.items.push(data);
            infiniteScroll.complete();
        }, function (error) {
            console.dir(error);
        });
        console.log('Begin async operation');
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Searchbar */])
    ], FeedPage.prototype, "searchbar", void 0);
    FeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feed',template:/*ion-inline-start:"C:\xampp\htdocs\News-App\src\pages\feed\feed.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle *ngIf="!isSearchbaropened">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title *ngIf="!isSearchbaropened">Home</ion-title>\n\n    <ion-searchbar #searchbar *ngIf="isSearchbaropened" [showCancelButton]="true" (ionCancel)="resetChanges()" (ionInput)="search($event)" placeholder="Waar zijn we naar op zoek?" class="slideInRight"></ion-searchbar>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="isSearchbaropened=true">\n\n        <ion-icon name="search" *ngIf="!isSearchbaropened"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-segment [(ngModel)]="datepicker" color="lightAppKleur">\n\n    <ion-segment-button value="vandaag" (click)="load()">\n\n      Vandaag\n\n    </ion-segment-button>\n\n    <ion-segment-button value="gisteren" (click)="loadYesterday()">\n\n      Gisteren\n\n    </ion-segment-button>\n\n    <ion-segment-button value="driedagengeleden" (click)="load3DaysAgo()">\n\n      3 dagen geleden\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col *ngFor="let item of items" col-md-6 col-sm-6 col-lg-6 col-xl-6>\n\n        <ion-card>\n\n          <div class="ion-card-image-wrapper" (click)="viewEntry({ record: item })">\n\n            <img *ngIf="!item.image" src="../assets/imgs/noimage.jpg">\n\n            <img [src]="item.image" *ngIf="item.site == \'NOS.nl\'">\n\n            <img [src]="item.image" *ngIf="item.site != \'NOS.nl\' || item.site != \'NU.nl\'">\n\n          </div>\n\n          <ion-card-content>\n\n            <div *ngIf="rol == 1">\n\n              <ion-fab right *ngIf="item.site == \'De Telegraaf\'">\n\n                <button ion-fab mini (click)="setHideArticle(item.id)" class="ColorTelegraaf2">\n\n                  <ion-icon name="eye-off"></ion-icon>\n\n                </button>\n\n              </ion-fab>\n\n              <ion-fab right *ngIf="item.site == \'NOS\'">\n\n                <button ion-fab mini (click)="setHideArticle(item.id)" class="ColorNOS2">\n\n                  <ion-icon name="eye-off"></ion-icon>\n\n                </button>\n\n              </ion-fab>\n\n              <ion-fab right *ngIf="item.site == \'NU.nl\'">\n\n                <button ion-fab mini (click)="setHideArticle(item.id)" class="ColorNU2">\n\n                  <ion-icon name="eye-off"></ion-icon>\n\n                </button>\n\n              </ion-fab>\n\n            </div>\n\n            <div id="title" (click)="viewEntry({ record: item })">\n\n              <ion-card-title class="TitleFeed" *ngIf="rol != 1">\n\n                <strong>{{item.title}}</strong>\n\n              </ion-card-title>\n\n              <ion-card-title class="editTitleFeed" *ngIf="rol == 1">\n\n                <strong>{{item.title}}</strong>\n\n              </ion-card-title>\n\n            </div>\n\n            <div id="description" (click)="viewEntry({ record: item })">\n\n              <p *ngIf="rol != 1" class="descriptionFeed">{{htmlToPlaintext(item.description) | slice:0:120}}...</p>\n\n              <p *ngIf="rol == 1" class="editDescriptionFeed">{{htmlToPlaintext(item.description) | slice:0:120}}...</p>\n\n            </div>\n\n          </ion-card-content>\n\n          <ion-item (click)="viewEntry({ record: item })" class="itemBadge">\n\n            <ion-icon name="contact" item-start></ion-icon>\n\n            <ion-badge item-end *ngIf="item.site == \'De Telegraaf\'" class="ColorTelegraaf">{{item.site}}\n\n            </ion-badge>\n\n            <ion-badge item-end *ngIf="item.site == \'NOS\'" class="ColorNOS">{{item.site}}</ion-badge>\n\n            <ion-badge item-end *ngIf="item.site == \'NU.nl\'" class="ColorNU">{{item.site}}</ion-badge>\n\n          </ion-item>\n\n          <ion-item (click)="viewEntry({ record: item })" class="itemBadge">\n\n            <ion-icon name="time" item-start></ion-icon>\n\n            <ion-badge item-end *ngIf="item.site == \'De Telegraaf\'" class="ColorTelegraaf">{{item.datum}}\n\n            </ion-badge>\n\n            <ion-badge item-end *ngIf="item.site == \'NOS\'" class="ColorNOS">{{item.datum}}</ion-badge>\n\n            <ion-badge item-end *ngIf="item.site == \'NU.nl\'" class="ColorNU">{{item.datum}}</ion-badge>\n\n          </ion-item>\n\n          <div id="socialLikeComments" class="socialLikeComments">\n\n            <ion-segment color="lightAppKleur">\n\n              <ion-segment-button value="likes" (click)="kaas()">\n\n                <ion-icon name="heart"></ion-icon>\n\n              </ion-segment-button>\n\n              <ion-segment-button  value="comment" (click)="goComments()">\n\n                <ion-icon name="text"></ion-icon>\n\n              </ion-segment-button>\n\n              <ion-segment-button  value="share">\n\n                <ion-icon name="share"></ion-icon>\n\n              </ion-segment-button>\n\n            </ion-segment>\n\n          </div>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\News-App\src\pages\feed\feed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], FeedPage);
    return FeedPage;
}());

//# sourceMappingURL=feed.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(404);
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

/***/ 157:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-auto',template:/*ion-inline-start:"C:\xampp\htdocs\News-App\src\pages\auto\auto.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle right class="fakeCenter">\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title>Auto</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n'/*ion-inline-end:"C:\xampp\htdocs\News-App\src\pages\auto\auto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], AutoPage);
    return AutoPage;
}());

//# sourceMappingURL=auto.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
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
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\xampp\htdocs\News-App\src\pages\about\about.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle right class="fakeCenter">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title text-center class="centerTitle">Over Ons</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h2>Welkom!</h2>\n\n    <p>Hallo! Welkom op NewsAge! ten eerste willen wij, namens het team, u bedanken voor het gebruiken van NewsAge!</p>\n\n    <h4>Wat is "NewsAge"</h4>\n\n    <p>NewsAge is de perfecte app om alle nieuws in een oogopslag te lezen.\n\n        NewsAge maakt het gemakkelijk voor de gebruiker(jij) door alle nieuws te verzamelen van verschillende bronnen en\n\n        die in een feed te verwerken zodat alles netjes en geordend is ;).</p>\n\n    <h4>Waarom NewsAge?</h4>\n\n    <p>NewsAge is heel gemakkelijk te gebruiken, u kunt bijvoorbeeld met 1 klik een dagblad volgen of niet volgen. U\n\n        kunt ook ervoor kiezen om bijvoorbeeld een artikel te verbergen, dit zorgt ervoor dat u de artikel niet\n\n        ziet.</p>\n\n    <img *ngIf="themeStatus == \'light-theme\'" class="imgAbout" style="float: right; " src="../../assets/imgs/NewsAgeLogoBlack.png"\n\n         width="150"/>\n\n    <img *ngIf="themeStatus == \'dark-theme\'" class="imgAbout" style="float: right; " src="../../assets/imgs/NewsAgeLogo.png"\n\n         width="150"/>\n\n    <ion-footer class="footerMenu">\n\n        <ion-toolbar class="toolbarFooter">\n\n            <div class="versienummer"><b>©NewsAge</b> V5.0.4</div>\n\n        </ion-toolbar>\n\n    </ion-footer>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\News-App\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsPage; });
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
 * Generated class for the CommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CommentsPage = /** @class */ (function () {
    function CommentsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CommentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CommentsPage');
    };
    CommentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comments',template:/*ion-inline-start:"C:\xampp\htdocs\News-App\src\pages\comments\comments.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle right class="fakeCenter">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-center class="centerTitle">Comments</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-footer>\n\n  <ion-item>\n\n    <ion-avatar class="avatar" item-start>\n\n      <img src="../assets/svg/telegraaf.svg">\n\n    </ion-avatar>\n\n    <ion-input placeholder="Text Input"></ion-input>\n\n  </ion-item>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\xampp\htdocs\News-App\src\pages\comments\comments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], CommentsPage);
    return CommentsPage;
}());

//# sourceMappingURL=comments.js.map

/***/ }),

/***/ 160:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sport',template:/*ion-inline-start:"C:\xampp\htdocs\News-App\src\pages\sport\sport.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle right class="fakeCenter">\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title>Sport</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n'/*ion-inline-end:"C:\xampp\htdocs\News-App\src\pages\sport\sport.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], SportPage);
    return SportPage;
}());

//# sourceMappingURL=sport.js.map

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-economie',template:/*ion-inline-start:"C:\xampp\htdocs\News-App\src\pages\economie\economie.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle right class="fakeCenter">\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title>Economie</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n'/*ion-inline-end:"C:\xampp\htdocs\News-App\src\pages\economie\economie.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], EconomiePage);
    return EconomiePage;
}());

//# sourceMappingURL=economie.js.map

/***/ }),

/***/ 162:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-misdaad',template:/*ion-inline-start:"C:\xampp\htdocs\News-App\src\pages\misdaad\misdaad.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle right class="fakeCenter">\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title>Misdaad</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n'/*ion-inline-end:"C:\xampp\htdocs\News-App\src\pages\misdaad\misdaad.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], MisdaadPage);
    return MisdaadPage;
}());

//# sourceMappingURL=misdaad.js.map

/***/ }),

/***/ 163:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tech',template:/*ion-inline-start:"C:\xampp\htdocs\News-App\src\pages\tech\tech.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle right class="fakeCenter">\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title>Tech</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n'/*ion-inline-end:"C:\xampp\htdocs\News-App\src\pages\tech\tech.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], TechPage);
    return TechPage;
}());

//# sourceMappingURL=tech.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(33);
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
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin',template:/*ion-inline-start:"C:\xampp\htdocs\News-App\src\pages\admin\admin.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle right class="fakeCenter">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title text-center class="centerTitle">Admin</ion-title>\n\n  </ion-navbar>\n\n  <ion-segment [(ngModel)]="checklist" color="primary">\n\n    <ion-segment-button value="artikelen" (click)="selectArtikelen()">\n\n      Verborgen\n\n    </ion-segment-button>\n\n    <ion-segment-button value="gebruikers" (click)="selectGebruikers()">\n\n      Gebruikers\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n</ion-header>\n\n<ion-content padding>\n\n    <div *ngIf="checklist == \'artikelen\'">\n\n        <ion-searchbar placeholder="Zoek.." (ionInput)="searchArtikel($event)" [showCancelButton]="true" (ionCancel)="resetArtikelen()" (ionClear)="resetChanges()"></ion-searchbar>\n\n    <ion-card *ngFor="let item of artikelenlijst" (click)="viewEntry({ record: item })">\n\n        <img *ngIf="!item.image" src="http://gazoh.net/images/noimage.jpg">\n\n        <img [src]="item.image">\n\n        <ion-card-content>\n\n            <ion-card-title>\n\n                <strong>{{item.title}}</strong>\n\n            </ion-card-title>\n\n            <p>{{htmlToPlaintext(item.description) | slice:0:120}}...</p>\n\n        </ion-card-content>\n\n\n\n        <!-- Funtie nog schrijven voor if == nu.nl of andere website set badge kleur  -->\n\n        <ion-item>\n\n            <ion-icon name="contact" item-start></ion-icon>\n\n            <ion-badge item-end>{{item.site}}</ion-badge>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-icon name="time" item-start></ion-icon>\n\n            <ion-badge item-end>{{item.datum}}</ion-badge>\n\n        </ion-item>\n\n    </ion-card>\n\n    </div>\n\n\n\n        <ion-list inset *ngIf="checklist == \'gebruikers\'">\n\n            <ion-item-group>\n\n                <ion-row>\n\n                <ion-item class="adminUsers" *ngFor="let user of gebruikerslijst" ><strong>ID : </strong> {{user.id}} | <strong>{{user.email}} |</strong> <button ion-button color="secondary" item-right><ion-icon name="create"></ion-icon></button><button ion-button color="danger" item-right><ion-icon name="trash"></ion-icon></button></ion-item>\n\n                </ion-row>\n\n            </ion-item-group>\n\n        </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\News-App\src\pages\admin\admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfielPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(22);
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
    function ProfielPage(navCtrl, navParams, alertCtrl, camera, file, actionSheetCtrl, http, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.file = file;
        this.actionSheetCtrl = actionSheetCtrl;
        this.http = http;
        this.events = events;
        this.id = localStorage.getItem("userId");
        this.myprofilepic = localStorage.getItem("profilePicture");
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]();
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
            title: 'Kies een profielfoto!',
            buttons: [
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
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Wijzigen',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    ProfielPage.prototype.goBack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__settings_settings__["a" /* SettingsPage */]);
    };
    // Validatie
    ProfielPage.prototype.ngOnInit = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].pattern('[a-zA-Z][a-zA-z ]+')]),
            email: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')])
        });
    };
    // Zodra alles leeg is dan werkt de checkmark functie niet meer
    ProfielPage.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field); //{3}
            if (control instanceof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormGroup */]) {
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
            var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]();
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
                    var alert_1 = _this.alertCtrl.create({
                        title: "Profiel bijgewerkt",
                        subTitle: "Uw profiel is met succesvol bijgewerkt",
                        buttons: [{ text: "OK", handler: function (data) { _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__settings_settings__["a" /* SettingsPage */]); } }],
                    });
                    alert_1.present();
                }
                else if (res == "No data set!") {
                    var alert_2 = _this.alertCtrl.create({
                        title: "Mislukt",
                        subTitle: "Uw profiel kon niet worden bijgewerkt vanwege een fout aan onze kant!",
                        buttons: ['OK']
                    });
                    alert_2.present();
                }
            });
            console.log("Dit is je foto:" + this.myphoto);
        }
    };
    ProfielPage.prototype.ionViewWillLeave = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]();
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
        });
        this.events.publish("username", this.username);
        this.events.publish("profilepicture", this.oldprofilepicture);
    };
    ProfielPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-profiel',template:/*ion-inline-start:"C:\xampp\htdocs\News-App\src\pages\profiel\profiel.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title class="profielPadding">Profiel</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="updateProfile()">\n\n        <ion-icon name="checkmark"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-grid class="gridMenu">\n\n      <ion-col col-12 class="menuCol">\n\n        <div class="alignCenter">\n\n          <img *ngIf="myphoto" src="{{myphoto}}" class="avatar-profiel" (click)="presentActionSheet()" />\n\n          <div class="fotoWijzigen">\n\n            <h5 class="fotoWijzigenProfiel" (click)="presentActionSheet()">Foto Wijzigen</h5>\n\n          </div>\n\n        </div>\n\n\n\n        <form novalidate [formGroup]="form">\n\n          <div class="form-group">\n\n            <ion-item [ngClass]="{ \'ng-touched\' : form.get(\'username\').touched }">>\n\n              <ion-label floating>Gebruikersnaam</ion-label>\n\n              <ion-input type="text" placeholder="{{username}}" value="{{username}}" formControlName="username" class="form-control"></ion-input>\n\n            </ion-item>\n\n          </div>\n\n          <div *ngIf="form.get(\'username\').touched && form.get(\'username\').invalid" class="alert alert-danger" required>\n\n            <div class="validatieText" *ngIf="form.get(\'username\').hasError(\'required\')">Naam moet ingevuld zijn.</div>\n\n            <div class="validatieText" *ngIf="form.get(\'username\').hasError(\'pattern\')">Ongeldige naam.</div>\n\n            <div class="validatieText" *ngIf="form.get(\'username\').hasError(\'minLength\')">De minimale lengte zijn 3 letters.</div>\n\n          </div>\n\n\n\n          <div class="form-group">\n\n            <ion-item [ngClass]="{ \'ng-touched\' : form.get(\'email\').touched }">\n\n              <ion-label floating>E-mail</ion-label>\n\n              <ion-input type="email" placeholder="{{email}}" value="{{email}}" formControlName="email" class="form-control"></ion-input>\n\n            </ion-item>\n\n          </div>\n\n          <div *ngIf="form.get(\'email\').touched && form.get(\'email\').invalid" class="alert alert-danger" required>\n\n            <div class="validatieText" *ngIf="form.get(\'email\').hasError(\'required\')">Email moet ingevuld zijn</div>\n\n            <div class="validatieText" *ngIf="form.get(\'email\').hasError(\'pattern\')">Ongeldige Email!</div>\n\n          </div>\n\n\n\n        </form>\n\n        <h6 class="wachtwoordWijzigen" (click)="wijzigWachtwoord()">Wijzig Wachtwoord</h6>\n\n      </ion-col>\n\n    </ion-grid>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\News-App\src\pages\profiel\profiel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Events */]])
    ], ProfielPage);
    return ProfielPage;
}());

//# sourceMappingURL=profiel.js.map

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */])
    ], SourcesPage.prototype, "slider", void 0);
    SourcesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sources',template:/*ion-inline-start:"C:\xampp\htdocs\News-App\src\pages\sources\sources.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle right class="fakeCenter">\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title>Sources</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n      <ion-segment color="dark" [(ngModel)]="page">\n\n        <ion-segment-button value="0" (click)="selectedTab(0)">\n\n          Subscribed\n\n        </ion-segment-button>\n\n        <ion-segment-button value="1" (click)="selectedTab(1)">\n\n          Suggesties\n\n        </ion-segment-button>\n\n      </ion-segment>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-slides #slider (ionSlideWillChange)="moveButton($event)" >\n\n    <!--  -->\n\n    <!-- Alle Sources die zijn geimport -->\n\n    <!--  -->\n\n    <ion-slide>\n\n      <ion-list>\n\n        <ion-item class="sourceItem">\n\n          <ion-avatar class="avatar" item-start>\n\n            <img src="../assets/svg/NOS_logo.svg">\n\n          </ion-avatar>\n\n          <div class="sourceTekst"><b>NOS</b></div>\n\n          <div class="sourceTekst">Nieuwsfeed</div>\n\n          <button ion-button outline item-end color="danger" class="DeleteClassesButton">\n\n            <ion-icon name="close" class="buttonIcon"></ion-icon>Verwijderen\n\n          </button>\n\n        </ion-item>\n\n\n\n        <ion-item class="sourceItem">\n\n          <ion-avatar class="avatar" item-start>\n\n            <img src="../assets/svg/telegraaf.svg">\n\n          </ion-avatar>\n\n          <div class="sourceTekst"><b>De Telegraaf</b></div>\n\n          <div class="sourceTekst">Nieuwsfeed</div>\n\n          <button ion-button outline item-end color="danger" class="DeleteClassesButton">\n\n            <ion-icon name="close" class="buttonIcon"></ion-icon>Verwijderen\n\n          </button>\n\n        </ion-item>\n\n\n\n        <ion-item class="sourceItem">\n\n          <ion-avatar class="avatar" item-start>\n\n            <img src="../assets/svg/nu.nl.svg">\n\n          </ion-avatar>\n\n          <div class="sourceTekst"><b>NU.NL</b></div>\n\n          <div class="sourceTekst">Nieuwsfeed</div>\n\n        <button ion-button outline item-end color="danger" class="DeleteClassesButton">\n\n            <ion-icon name="close" class="buttonIcon"></ion-icon>Verwijderen\n\n          </button>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <ion-list>\n\n        <!--  -->\n\n        <!-- Alle Sources die je kunt importen -->\n\n        <!--  -->\n\n        <ion-item class="sourceTitel">\n\n              <h4 class="TitelSources">Nieuwsfeed</h4>\n\n        </ion-item>\n\n        <ion-item class="sourceItem">\n\n          <ion-avatar class="avatar" item-start>\n\n            <img src="../assets/svg/Volkskrant.svg">\n\n          </ion-avatar>\n\n          <div class="sourceTekst"><b>De Volkskrant</b></div>\n\n          <div class="sourceTekst">Nieuwsfeed</div>\n\n          <button ion-button outline item-end color="green" class="ImportClassesButton">\n\n            <ion-icon name="checkmark" class="buttonIcon"></ion-icon>Toevoegen\n\n          </button>\n\n        </ion-item>\n\n\n\n        <ion-item class="sourceItem">\n\n          <ion-avatar class="avatar" item-start>\n\n            <img src="../assets/svg/AD.svg">\n\n          </ion-avatar>\n\n          <div class="sourceTekst"><b>Algemeen Dagblad</b></div>\n\n          <div class="sourceTekst">Nieuwsfeed</div>\n\n        <button ion-button outline item-end color="green" class="ImportClassesButton">\n\n            <ion-icon name="checkmark" class="buttonIcon"></ion-icon>Toevoegen\n\n          </button>\n\n        </ion-item>\n\n\n\n\n\n        <ion-item class="sourceItem">\n\n          <ion-avatar class="avatar" item-start>\n\n            <img src="../assets/svg/RTL_Nederland.svg">\n\n          </ion-avatar>\n\n          <div class="sourceTekst"><b>RTL Nieuws</b></div>\n\n          <div class="sourceTekst">Nieuwsfeed</div>\n\n        <button ion-button outline item-end color="green" class="ImportClassesButton">\n\n            <ion-icon name="checkmark" class="buttonIcon"></ion-icon>Toevoegen\n\n          </button>\n\n        </ion-item>\n\n\n\n        <ion-item class="sourceItem">\n\n          <ion-avatar class="avatar" item-start>\n\n            <img src="../assets/svg/De_Gelderlander.svg">\n\n          </ion-avatar>\n\n          <div class="sourceTekst"><b>De Gelderlander</b></div>\n\n          <div class="sourceTekst">Nieuwsfeed</div>\n\n        <button ion-button outline item-end color="green" class="ImportClassesButton">\n\n            <ion-icon name="checkmark" class="buttonIcon"></ion-icon>Toevoegen\n\n          </button>\n\n        </ion-item>\n\n\n\n        <ion-item class="sourceTitel">\n\n              <h4 class="TitelSources">Tech</h4>\n\n        </ion-item>\n\n\n\n        <ion-item class="sourceItem">\n\n          <ion-avatar class="avatar" item-start>\n\n            <img src="../assets/svg/Tweakers.svg">\n\n          </ion-avatar>\n\n          <div class="sourceTekst"><b>Tweakers</b></div>\n\n          <div class="sourceTekst">Tech</div>\n\n        <button ion-button outline item-end color="green" class="ImportClassesButton">\n\n            <ion-icon name="checkmark" class="buttonIcon"></ion-icon>Toevoegen\n\n          </button>\n\n        </ion-item>\n\n\n\n        <ion-item class="sourceTitel">\n\n              <h4 class="TitelSources">Sport</h4>\n\n        </ion-item>\n\n\n\n        <ion-item class="sourceItem">\n\n          <ion-avatar class="avatar" item-start>\n\n            <img src="../assets/svg/Fifa.svg">\n\n          </ion-avatar>\n\n          <div class="sourceTekst"><b>Fifa</b></div>\n\n          <div class="sourceTekst">Sport</div>\n\n          <button ion-button outline item-end color="green" class="ImportClassesButton">\n\n            <ion-icon name="checkmark" class="buttonIcon"></ion-icon>Toevoegen\n\n          </button>\n\n        </ion-item>\n\n\n\n        <ion-item class="sourceItem">\n\n          <ion-avatar class="avatar" item-start>\n\n            <img src="../assets/svg/FoxSports.svg">\n\n          </ion-avatar>\n\n          <div class="sourceTekst"><b>Fox Sports Go</b></div>\n\n          <div class="sourceTekst">Sport</div>\n\n        <button ion-button outline item-end color="green" class="ImportClassesButton">\n\n            <ion-icon name="checkmark" class="buttonIcon"></ion-icon>Toevoegen\n\n          </button>\n\n        </ion-item>\n\n\n\n        <ion-item class="sourceItem">\n\n          <ion-avatar class="avatar" item-start>\n\n            <img src="../assets/svg/NuSport.svg">\n\n          </ion-avatar>\n\n          <div class="sourceTekst"><b>Nu Sport</b></div>\n\n          <div class="sourceTekst">Sport</div>\n\n        <button ion-button outline item-end color="green" class="ImportClassesButton">\n\n            <ion-icon name="checkmark" class="buttonIcon"></ion-icon>Toevoegen\n\n          </button>\n\n        </ion-item>\n\n\n\n        <ion-item class="sourceItem">\n\n          <ion-avatar class="avatar" item-start>\n\n            <img src="../assets/svg/rtlz.svg">\n\n          </ion-avatar>\n\n          <div class="sourceTekst"><b>RTL Z </b></div>\n\n          <div class="sourceTekst">Sport</div>\n\n        <button ion-button outline item-end color="green" class="ImportClassesButton">\n\n            <ion-icon name="checkmark" class="buttonIcon"></ion-icon>Toevoegen\n\n          </button>\n\n        </ion-item>\n\n\n\n        <ion-item class="sourceItem">\n\n          <ion-avatar class="avatar" item-start>\n\n            <img src="../assets/svg/Voetbalzone.svg">\n\n          </ion-avatar>\n\n          <div class="sourceTekst"><b>Voetbalzone</b></div>\n\n          <div class="sourceTekst">Sport</div>\n\n        <button ion-button outline item-end color="green" class="ImportClassesButton">\n\n            <ion-icon name="checkmark" class="buttonIcon"></ion-icon>Toevoegen\n\n          </button>\n\n        </ion-item>\n\n\n\n\n\n      </ion-list>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\News-App\src\pages\sources\sources.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
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
	"../pages/about/about.module": [
		711,
		11
	],
	"../pages/admin/admin.module": [
		714,
		10
	],
	"../pages/auto/auto.module": [
		710,
		9
	],
	"../pages/category/category.module": [
		222
	],
	"../pages/comments/comments.module": [
		712,
		8
	],
	"../pages/economie/economie.module": [
		713,
		7
	],
	"../pages/feed/feed.module": [
		232
	],
	"../pages/misdaad/misdaad.module": [
		715,
		6
	],
	"../pages/nieuws/nieuws.module": [
		233
	],
	"../pages/profiel/profiel.module": [
		716,
		5
	],
	"../pages/register/register.module": [
		327
	],
	"../pages/settings/settings.module": [
		719,
		4
	],
	"../pages/sources/sources.module": [
		720,
		3
	],
	"../pages/sport/sport.module": [
		721,
		2
	],
	"../pages/tech/tech.module": [
		717,
		1
	],
	"../pages/tutorial/tutorial.module": [
		328
	],
	"../pages/vermaak/vermaak.module": [
		718,
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

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function() { return CategoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category__ = __webpack_require__(117);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__category__["a" /* CategoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__category__["a" /* CategoryPage */]),
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(123);
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
            selector: 'page-register',template:/*ion-inline-start:"C:\xampp\htdocs\News-App\src\pages\register\register.html"*/'<ion-content>\n\n  <ion-grid style="height: 100%" class="gridPadding">\n\n    <ion-row justify-content-center align-items-center style="height: 100%">\n\n\n\n      <ion-col col-12>\n\n        <div class="ValidatieText">\n\n          <h2 class="WelkomText2">Meld je nu aan</h2>\n\n          <p class="gavederText">Maak een account aan om verder te gaan!</p>\n\n        </div>\n\n        <div class="ValidatieLogin">\n\n                  <form novalidate [formGroup]="form">\n\n                    <div class="form-group">\n\n                      <ion-item [ngClass]="{ \'ng-touched\' : form.get(\'username\').touched }">>\n\n                        <ion-label floating>Gebruikersnaam</ion-label>\n\n                        <ion-input type="text" formControlName="username" class="form-control" [(ngModel)]="username"></ion-input>\n\n                      </ion-item>\n\n                    </div>\n\n                    <div *ngIf="form.get(\'username\').touched && form.get(\'username\').invalid" class="alert alert-danger" required>\n\n                      <div class="validatieText" *ngIf="form.get(\'username\').hasError(\'required\')">Naam moet ingevuld zijn.</div>\n\n                      <div class="validatieText" *ngIf="form.get(\'username\').hasError(\'pattern\')">Ongeldige naam.</div>\n\n                    </div>\n\n\n\n                    <div class="form-group">\n\n                      <ion-item [ngClass]="{ \'ng-touched\' : form.get(\'email\').touched }">\n\n                        <ion-label floating>E-mail</ion-label>\n\n                        <ion-input type="email" formControlName="email" class="form-control" [(ngModel)]="email"></ion-input>\n\n                      </ion-item>\n\n                    </div>\n\n                    <div *ngIf="form.get(\'email\').touched && form.get(\'email\').invalid" class="alert alert-danger" required>\n\n                      <div class="validatieText" *ngIf="form.get(\'email\').hasError(\'required\')">Email moet ingevuld zijn</div>\n\n                      <div class="validatieText" *ngIf="form.get(\'email\').hasError(\'pattern\')">Ongeldige Email!</div>\n\n                    </div>\n\n\n\n                    <div class="form-group">\n\n                      <ion-item [ngClass]="{ \'ng-touched\' : form.get(\'password\').touched }">\n\n                        <ion-label floating>Wachtwoord</ion-label>\n\n                        <ion-input type="password" formControlName="password" class="form-control" [(ngModel)]="password"></ion-input>\n\n                      </ion-item>\n\n                    </div>\n\n                    <div class="alert alert-danger" *ngIf="form.get(\'password\').touched && form.get(\'password\').invalid ">\n\n                      <div class="validatieText" *ngIf="form.get(\'password\').hasError(\'required\')">Wachtwoord moet ingevuld zijn</div>\n\n                      <div class="validatieText" *ngIf="form.get(\'password\').hasError(\'minLength\')">Wachtwoord moet minimaal 8 tekens lang zijn</div>\n\n                      <div class="validatieText" *ngIf="form.get(\'password\').hasError(\'pattern\')">Wachtwoord moet minstens een hoofdletter, een kleine letter en een cijfer bevatten</div>\n\n                    </div>\n\n                  </form>\n\n\n\n                  <br>\n\n                  <div class="Validatie2Login">\n\n                    <button ion-button class="loginButton" (click)="onSubmit()">Registreren</button>\n\n                  </div>\n\n                </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\News-App\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed__ = __webpack_require__(118);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__feed__["a" /* FeedPage */]),
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nieuws__ = __webpack_require__(403);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nieuws__["a" /* NieuwsPage */]),
            ],
        })
    ], NieuwsPageModule);
    return NieuwsPageModule;
}());

//# sourceMappingURL=nieuws.module.js.map

/***/ }),

/***/ 327:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial__ = __webpack_require__(329);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */]),
            ],
        })
    ], TutorialPageModule);
    return TutorialPageModule;
}());

//# sourceMappingURL=tutorial.module.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
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
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"C:\xampp\htdocs\News-App\src\pages\tutorial\tutorial.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle right class="fakeCenter">\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title>Tutorial</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="tutorial-page">\n\n  <ion-slides pager>\n\n    <ion-slide *ngFor="let slide of slides">\n\n      <img [src]="slide.image" class="slide-image"/>\n\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n\n      <p [innerHTML]="slide.description"></p>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <img src="../../assets/imgs/ica-slidebox-img-4.png" class="slide-image"/>\n\n      <h2 class="slide-title">Ready to Play?</h2>\n\n      <button ion-button large clear icon-end color="primary" (click)="tutorialDone()">\n\n        Continue\n\n        <ion-icon name="arrow-forward"></ion-icon>\n\n      </button>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\News-App\src\pages\tutorial\tutorial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 371:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorieten',template:/*ion-inline-start:"C:\xampp\htdocs\News-App\src\pages\favorieten\favorieten.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle right class="fakeCenter">\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title>Favorieten</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n'/*ion-inline-end:"C:\xampp\htdocs\News-App\src\pages\favorieten\favorieten.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], FavorietenPage);
    return FavorietenPage;
}());

//# sourceMappingURL=favorieten.js.map

/***/ }),

/***/ 372:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vermaak',template:/*ion-inline-start:"C:\xampp\htdocs\News-App\src\pages\vermaak\vermaak.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle right class="fakeCenter">\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title>Vermaak</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n'/*ion-inline-end:"C:\xampp\htdocs\News-App\src\pages\vermaak\vermaak.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], VermaakPage);
    return VermaakPage;
}());

//# sourceMappingURL=vermaak.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(378);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_screen_orientation__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_header_color__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_sources_sources__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_profiel_profiel__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_sport_sport__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_economie_economie__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_auto_auto__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_misdaad_misdaad__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_tech_tech__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_admin_admin__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_about_about__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_comments_comments__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_nieuws_nieuws_module__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_category_category_module__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_storage__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_favorieten_favorieten_module__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_feed_feed_module__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_register_register_module__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_tutorial_tutorial_module__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_infouser_infouser__ = __webpack_require__(709);
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
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */]
                // SettingsPage,
                // SportPage,
                // EconomiePage,
                // AutoPage,
                // MisdaadPage,
                // TechPage,
                // AdminPage,
                // SourcesPage,
                // ProfielPage,
                // AboutPage,
                // CommentsPage
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_28__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    mode: "md",
                    scrollAssist: false,
                    autoFocusAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/auto/auto.module#AutoPageModule', name: 'AutoPage', segment: 'auto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comments/comments.module#CommentsPageModule', name: 'CommentsPage', segment: 'comments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/economie/economie.module#EconomiePageModule', name: 'EconomiePage', segment: 'economie', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feed/feed.module#FeedPageModule', name: 'FeedPage', segment: 'feed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/misdaad/misdaad.module#MisdaadPageModule', name: 'MisdaadPage', segment: 'misdaad', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nieuws/nieuws.module#NieuwsPageModule', name: 'NieuwsPage', segment: 'nieuws', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profiel/profiel.module#ProfielPageModule', name: 'ProfielPage', segment: 'profiel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tech/tech.module#TechPageModule', name: 'TechPage', segment: 'tech', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vermaak/vermaak.module#VermaakPageModule', name: 'VermaakPage', segment: 'vermaak', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sources/sources.module#SourcesPageModule', name: 'SourcesPage', segment: 'sources', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sport/sport.module#SportPageModule', name: 'SportPage', segment: 'sport', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_29__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_31__pages_favorieten_favorieten_module__["a" /* FavorietenPageModule */],
                __WEBPACK_IMPORTED_MODULE_32__pages_feed_feed_module__["FeedPageModule"],
                __WEBPACK_IMPORTED_MODULE_33__pages_register_register_module__["RegisterPageModule"],
                __WEBPACK_IMPORTED_MODULE_26__pages_nieuws_nieuws_module__["NieuwsPageModule"],
                __WEBPACK_IMPORTED_MODULE_27__pages_category_category_module__["CategoryPageModule"],
                __WEBPACK_IMPORTED_MODULE_34__pages_tutorial_tutorial_module__["TutorialPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_sport_sport__["a" /* SportPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_economie_economie__["a" /* EconomiePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_auto_auto__["a" /* AutoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_misdaad_misdaad__["a" /* MisdaadPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_tech_tech__["a" /* TechPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_sources_sources__["a" /* SourcesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_profiel_profiel__["a" /* ProfielPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_comments_comments__["a" /* CommentsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_28__angular_common_http__["b" /* HttpClientModule */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__["a" /* SettingsProvider */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__["a" /* SettingsProvider */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_header_color__["a" /* HeaderColor */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_35__providers_infouser_infouser__["a" /* InfouserProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NieuwsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(234);
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
            selector: 'page-nieuws',template:/*ion-inline-start:"C:\xampp\htdocs\News-App\src\pages\nieuws\nieuws.html"*/'<ion-header>\n\n  <meta charset="UTF-8">\n\n  <ion-navbar class="nieuwsNavTitle">{{this.title}}</ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card class="nieuwsCard">\n\n    <img *ngIf="!this.image" src="../assets/imgs/noimage.jpg">\n\n    <img src="{{this.image}}">\n\n    <ion-card-header class="headerText" text-wrap>\n\n      {{this.title}}\n\n      <p class="nieuwsDatum">{{this.datum}}</p>\n\n    </ion-card-header>\n\n\n\n    <ion-card-content>\n\n\n\n      <p>{{htmlToPlaintext(this.description)}}</p>\n\n\n\n\n\n      <button (click)="openPagina(this.link)" ion-button round *ngIf="this.site == \'De Telegraaf\'" class="ColorTelegraaf">{{this.site}}</button>\n\n      <button (click)="openPagina(this.link)" ion-button round *ngIf="this.site == \'NOS\'" class="ColorNOS">{{this.site}}</button>\n\n      <button (click)="openPagina(this.link)" ion-button round *ngIf="this.site == \'NU.nl\'" class="ColorNU">{{this.site}}</button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\News-App\src\pages\nieuws\nieuws.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], NieuwsPage);
    return NieuwsPage;
}());

//# sourceMappingURL=nieuws.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__category_category__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__feed_feed__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_screen_orientation__ = __webpack_require__(231);
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
        this.FeedPage = __WEBPACK_IMPORTED_MODULE_7__feed_feed__["a" /* FeedPage */];
        if (localStorage.getItem("sessionToken")) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__category_category__["a" /* CategoryPage */]);
        }
        if (this.platform.is('cordova')) {
            this.platform.ready().then(function () {
                _this.screenOrientation.lock(_this.screenOrientation.ORIENTATIONS.PORTRAIT);
            });
        }
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
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__category_category__["a" /* CategoryPage */]);
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
            selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\News-App\src\pages\home\home.html"*/'<ion-content>\n\n  <ion-grid style="height: 100%" class="gridPadding">\n\n    <ion-row justify-content-center align-items-center style="height: 100%">\n\n\n\n      <ion-col col-12>\n\n        <div class="ValidatieText">\n\n          <h2 class="WelkomText">Welkom</h2>\n\n          <p class="gavederText">Log-in om verder te gaan..</p>\n\n        </div>\n\n        <div class="ValidatieLogin">\n\n          <ion-item class="darkThemeLogin">\n\n            <ion-label color="primary" floating>Email</ion-label>\n\n            <ion-input type="email" [(ngModel)]="email"></ion-input>\n\n          </ion-item>\n\n          <ion-item class="darkThemeLogin">\n\n            <ion-label color="primary" floating>Wachtwoord</ion-label>\n\n            <ion-input type="password" [(ngModel)]="password"></ion-input>\n\n          </ion-item>\n\n          <br>\n\n          <div class="Validatie2Login">\n\n            <button ion-button class="loginButton" (click)="signIn()">Log-in</button>\n\n            <p class="nogGeenAccount" (click)="goRegister()">Nog geen account? <b>Registreer</b></p>\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\News-App\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__["a" /* Keyboard */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_favorieten_favorieten__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_settings_settings__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_category_category__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sources_sources__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tutorial_tutorial__ = __webpack_require__(329);
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
    function MyApp(platform, statusBar, splashScreen, settings, modalCtrl, menuCtrl, events, alertCtrl) {
        var _this = this;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.settings = settings;
        this.modalCtrl = modalCtrl;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.showSplash = true;
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.splashScreen.hide();
            if (localStorage.getItem("sessionToken")) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_category_category__["a" /* CategoryPage */]);
            }
            else if (!localStorage.getItem("sessionToken")) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
                localStorage.clear();
            }
            statusBar.backgroundColorByHexString('#225C73');
            _this.platform.registerBackButtonAction(function () {
                if (_this.nav.length() == 1) {
                    if (!_this.showedAlert) {
                        _this.confirmExitApp();
                    }
                    else {
                        _this.showedAlert = false;
                        _this.confirmAlert.dismiss();
                    }
                }
                _this.nav.pop();
            });
            _this.events.subscribe("username", function (data) {
                _this.username = data;
            });
            _this.events.subscribe("profilepicture", function (foto) {
                _this.profilepicture = foto;
            });
        });
        // events.subscribe('user:created', (user) => {
        //   console.log('Welcome', user);
        // });
        this.pages = [
            {
                title: 'Home',
                component: __WEBPACK_IMPORTED_MODULE_8__pages_category_category__["a" /* CategoryPage */],
                icon: 'home'
            },
            {
                title: 'Sources',
                component: __WEBPACK_IMPORTED_MODULE_9__pages_sources_sources__["a" /* SourcesPage */],
                icon: 'star'
            },
            {
                title: 'Favorieten',
                component: __WEBPACK_IMPORTED_MODULE_3__pages_favorieten_favorieten__["a" /* FavorietenPage */],
                icon: 'heart'
            },
            {
                title: 'Notificaties',
                component: __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */],
                icon: 'notifications'
            },
            {
                title: 'Tutorial',
                component: __WEBPACK_IMPORTED_MODULE_11__pages_tutorial_tutorial__["a" /* TutorialPage */],
                icon: 'map'
            },
            {
                title: 'Instellingen',
                component: __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */],
                icon: 'settings'
            }
        ];
        //
        // Dark/Light Mode
        //
        if (localStorage.getItem("themeColor") == "light-theme") {
            this.settings.setActiveTheme("light-theme");
        }
        else if (localStorage.getItem("themeColor") == "dark-theme") {
            this.settings.setActiveTheme("dark-theme");
        }
    }
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.showSplash = false; }, 3500);
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.confirmExitApp = function () {
        var _this = this;
        this.showedAlert = true;
        this.confirmAlert = this.alertCtrl.create({
            title: "Sluiten",
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\News-App\src\app\app.html"*/'<!-- SplashScreen -->\n\n<ion-grid style="height: 100%" class="gridPadding">\n\n  <ion-row justify-content-center align-items-center style="height: 100%" *ngIf="showSplash" class="splash">\n\n    <div class="spinner">\n\n      <div class="NewsAgeLogo">\n\n        <img class="NewsAge" src="../assets/imgs/NewsAgeLogo.png">\n\n      </div>\n\n      <div class="loader">\n\n        <img src="../assets/svg/spinner/tail-spin.svg">\n\n      </div>\n\n    </div>\n\n  </ion-row>\n\n</ion-grid>\n\n<!--  -->\n\n<!-- Menu -->\n\n<ion-menu [class]="selectedTheme" id="myMenu" [content]="content" [swipeEnabled]="false">\n\n  <ion-content id="contentAnimation" menuToggle>\n\n    <ion-list>\n\n      <ion-navbar class="menuNavBar">\n\n        <ion-grid class="gridMenu">\n\n          <ion-col col-9 class="menuCol">\n\n            <img src="{{this.profilepicture}}" class="avatar-menu" />\n\n            <h5 ngClass="usernameMenu">{{this.username}}</h5>\n\n          </ion-col>\n\n        </ion-grid>\n\n      </ion-navbar>\n\n      <ion-item>\n\n        <button detail-none ion-item menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n          <ion-icon slot="start" [name]="p.icon"></ion-icon>\n\n          <span class="menu-titles">\n\n            {{p.title}}\n\n          </span>\n\n        </button>\n\n      </ion-item>\n\n      <ion-footer class="footerMenu">\n\n        <ion-toolbar class="toolbarFooter">\n\n          <div class="versienummer"><b>©NewsAge</b> V5.0.6</div>\n\n        </ion-toolbar>\n\n      </ion-footer>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" [class]="selectedTheme" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\xampp\htdocs\News-App\src\app\app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavorietenPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorieten__ = __webpack_require__(371);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__favorieten__["a" /* FavorietenPage */]),
            ],
        })
    ], FavorietenPageModule);
    return FavorietenPageModule;
}());

//# sourceMappingURL=favorieten.module.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfouserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(33);
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
  Generated class for the InfouserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var InfouserProvider = /** @class */ (function () {
    function InfouserProvider(http) {
        this.http = http;
    }
    Object.defineProperty(InfouserProvider.prototype, "name", {
        get: function () {
            return this._username;
        },
        set: function (name) {
            this._username = name;
        },
        enumerable: true,
        configurable: true
    });
    InfouserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], InfouserProvider);
    return InfouserProvider;
}());

//# sourceMappingURL=infouser.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_admin__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profiel_profiel__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about__ = __webpack_require__(158);
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
            _this.profilepicture = _this.dataUser.profilepicture;
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__profiel_profiel__["a" /* ProfielPage */]);
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
                var alert_1 = _this.alertCtrl.create({
                    title: "Geslaagd",
                    subTitle: "Uw probleem is gerapporteerd!",
                    buttons: ['OK']
                });
                alert_1.present();
            }
        });
        console.log('Probleem gerapporteerd ' + data);
    };
    SettingsPage.prototype.overOns = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__about_about__["a" /* AboutPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], SettingsPage.prototype, "nav", void 0);
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\xampp\htdocs\News-App\src\pages\settings\settings.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle right class="fakeCenter">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Instellingen</ion-title>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-item class="" (click)="goProfiel()">\n\n    <ion-label class="DarkLabel">\n\n      <ion-icon name="person" class="iconInstellingen"></ion-icon>\n\n      Bewerk Profiel\n\n    </ion-label>\n\n  </ion-item>\n\n  <ion-item class="" (click)="rapporteer()">\n\n    <ion-label class="DarkLabel">\n\n      <ion-icon name="document" class="iconInstellingen"></ion-icon>\n\n      Raporteer probleem\n\n    </ion-label>\n\n  </ion-item>\n\n  <ion-item class="" (click)="overOns()">\n\n    <ion-label class="DarkLabel">\n\n      <ion-icon name="eye" class="iconInstellingen"></ion-icon>\n\n      Over ons\n\n    </ion-label>\n\n  </ion-item>\n\n  <ion-item class="">\n\n    <ion-label class="DarkLabel">\n\n      <ion-icon name="moon" class="iconInstellingen"></ion-icon>\n\n      Light/Dark\n\n    </ion-label>\n\n    <ion-toggle [(ngModel)]="toggleStatus" (ionChange)="toggleAppTheme()"></ion-toggle>\n\n  </ion-item>\n\n  <ion-item class="" (click)="openAdmin()">\n\n    <ion-label>\n\n      <ion-icon name="settings" class="iconInstellingen"></ion-icon>\n\n      Admin panel\n\n    </ion-label>\n\n  </ion-item>\n\n  <ion-item class="" (click)="uitloggen()">\n\n    <ion-label>\n\n      <ion-icon name="log-out" class="iconInstellingen"></ion-icon>\n\n      Uitloggen\n\n    </ion-label>\n\n  </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\News-App\src\pages\settings\settings.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

},[373]);
//# sourceMappingURL=main.js.map
=======
webpackJsonp([17],{109:function(l,n,u){"use strict";u.d(n,"a",function(){return s});u(1),u(9);var e=u(75),a=u(159),t=u(166),i=u(32),o=u(158),s=function(){function l(l,n,u,e,a,t){var o=this;this.settings=l,this.platform=n,this.navCtrl=u,this.alertCtrl=e,this.http=a,this.events=t,this.theme=localStorage.getItem("themeColor"),this.timer=!1,this.settings.getActiveTheme().subscribe(function(l){return o.selectedTheme=l}),"light-theme"==this.theme?(this.toggleStatus=!1,setTimeout(function(){return o.timer=!1},3500)):"dark-theme"==this.theme&&(this.toggleStatus=!0,setTimeout(function(){return o.timer=!1},3500));var s=new i.g;s.append("Accept","application/json"),s.append("Content-Type","application/json");var r={headers:s},c={email:localStorage.getItem("userEmail")};this.http.post("http://gazoh.net/getgebruiker.php",c,r).subscribe(function(l){o.dataUser=l,o.username=o.dataUser.username,o.rol=o.dataUser.rol,o.profilepicture=o.dataUser.profilepicture,o.events.publish("username",o.username),o.events.publish("profilepicture",o.profilepicture)})}return l.prototype.toggleAppTheme=function(){"light-theme"==this.selectedTheme?(this.settings.setActiveTheme("dark-theme"),localStorage.setItem("themeColor",this.selectedTheme)):"dark-theme"==this.selectedTheme&&(this.settings.setActiveTheme("light-theme"),localStorage.setItem("themeColor",this.selectedTheme))},l.prototype.openAdmin=function(){this.navCtrl.push(a.a)},l.prototype.uitloggen=function(){localStorage.clear(),this.navCtrl.setRoot(e.a)},l.prototype.rapporteer=function(){var l=this;this.alertCtrl.create({title:"Raporteer een probleem",inputs:[{name:"onderwerp",placeholder:"Onderwerp"},{name:"bericht",placeholder:"Omschrijf het probleem"}],buttons:[{text:"Annuleer",handler:function(l){}},{text:"Verstuur",handler:function(n){l.rapporteerProbleem(n)}}]}).present()},l.prototype.goProfiel=function(){this.navCtrl.push(t.a)},l.prototype.rapporteerProbleem=function(l){var n=this,u=new i.g;u.append("Accept","application/json"),u.append("Content-Type","application/json");this.http.post("http://gazoh.net/rapporteer.php",l,{headers:u}).map(function(l){return l}).subscribe(function(l){if("succes"==l){n.alertCtrl.create({title:"Geslaagd",subTitle:"Uw probleem is gerapporteerd!",buttons:["OK"]}).present()}}),console.log("Probleem gerapporteerd "+l)},l.prototype.overOns=function(){this.navCtrl.push(o.a)},l}()},110:function(l,n,u){"use strict";u.d(n,"a",function(){return d});u(1),u(9);var e=u(111),a=u(162),t=u(163),i=u(160),o=u(164),s=u(165),r=u(386),c=u(32),_=u(75),d=function(){function l(l,n,u,e,a,t){var i=this;this.navCtrl=l,this.navParams=n,this.menuCtrl=u,this.toastCtrl=e,this.http=a,this.events=t,localStorage.getItem("sessionToken")||this.navCtrl.setRoot(_.a),this.menuCtrl.enable(!0,"myMenu");var o=new c.g;o.append("Accept","application/json"),o.append("Content-Type","application/json");var s={headers:o},r={email:localStorage.getItem("userEmail")};this.http.post("http://www.gazoh.net/getgebruiker.php",r,s).subscribe(function(l){i.dataUser=l,i.username=i.dataUser.username,i.profilepicture=i.dataUser.profilepicture,i.events.publish("username",i.username),i.events.publish("profilepicture",i.profilepicture)})}return l.prototype.ionViewWillEnter=function(){this.getArtikelen()},l.prototype.goFeed=function(){this.navCtrl.setRoot(e.a)},l.prototype.goSport=function(){this.navCtrl.setRoot(a.a)},l.prototype.goEconomie=function(){this.navCtrl.setRoot(t.a)},l.prototype.goMisdaad=function(){this.navCtrl.setRoot(o.a)},l.prototype.goTech=function(){this.navCtrl.setRoot(s.a)},l.prototype.goAuto=function(){this.navCtrl.setRoot(i.a)},l.prototype.goVermaak=function(){this.navCtrl.setRoot(r.a)},l.prototype.getArtikelen=function(){var l=this;this.http.get("http://gazoh.net/aantalvandaag.php").subscribe(function(n){l.aantalartikelen=n},function(l){console.dir(l)})},l.prototype.newMenu=function(){this.toastCtrl.create({message:"Test",cssClass:"backgroundToastMenu",showCloseButton:!0,closeButtonText:"OK"}).present()},l}()},111:function(l,n,u){"use strict";u.d(n,"a",function(){return i});u(1),u(9);var e=u(32),a=(u(141),u(75)),t=u(161),i=function(){function l(l,n,u,e,t,i,o,s){if(this.navCtrl=l,this.navParams=n,this.menuCtrl=u,this.http=e,this.network=t,this.toastCtrl=i,this.loadingCtrl=o,this.platform=s,this.items=0,this.key="items",this.isSearchbaropened=!1,"none"!=this.network.type)this.datepicker="vandaag","vandaag"==this.datepicker?this.load():"gisteren"==this.datepicker?this.loadYesterday():"driedagengeleden"==this.datepicker&&this.load3DaysAgo();else{this.loadData();i.create({message:"Geen internet verbinding, opgeslagen artikelen worden ingeladen.",duration:2500,position:"top",showCloseButton:!0,closeButtonText:"OK"}).present()}var r=i.create({message:"Geen sessie gevonden, log opnieuw in.",duration:2500,position:"top",showCloseButton:!0,closeButtonText:"OK"});localStorage.getItem("sessionToken")||(this.navCtrl.setRoot(a.a),r.present()),localStorage.getItem("userRole")&&(this.rol=localStorage.getItem("userRole"))}return l.prototype.presentLoadingCustom=function(){this.loadingCtrl.create({spinner:"hide",content:'\n     <div class="custom-spinner-container"><img src="http://gazoh.net/images/spinner.svg"><br> <p>Laden...</p>\n     </div>',duration:1200}).present()},l.prototype.ionViewDidLoad=function(){this.menuCtrl.enable(!0,"myMenu")},l.prototype.loadData=function(){localStorage.getItem(this.key),null!=this.key&&void 0!=this.key&&(this.items=JSON.parse(this.key))},l.prototype.htmlToPlaintext=function(l){return l?String(l).replace(/<[^>]+>/gm,""):""},l.prototype.viewEntry=function(l){this.navCtrl.push("NieuwsPage",l)},l.prototype.search=function(l){var n=l.target.value;n&&""!=n.trim()&&(this.items=this.items.filter(function(l){return l.title.toLowerCase().indexOf(n.toLowerCase())>-1}))},l.prototype.resetChanges=function(){var l=this;this.http.get("http://gazoh.net/getdata.php").subscribe(function(n){l.items=n},function(l){console.dir(l)}),this.isSearchbaropened=!1},l.prototype.load=function(){var l=this;this.datepicker="vandaag",this.http.get("http://gazoh.net/getdata.php").subscribe(function(n){l.items=n,l.artikelen=n},function(l){console.dir(l)}),this.presentLoadingCustom()},l.prototype.loadYesterday=function(){var l=this;this.datepicker="gisteren",this.http.get("http://gazoh.net/getyesterday.php").subscribe(function(n){l.items=n,l.artikelen=n},function(l){console.dir(l)}),this.presentLoadingCustom()},l.prototype.load3DaysAgo=function(){var l=this;this.datepicker="driedagengeleden",this.http.get("http://gazoh.net/get3daysago.php").subscribe(function(n){l.items=n,l.artikelen=n},function(l){console.dir(l)}),this.presentLoadingCustom()},l.prototype.goComments=function(){this.navCtrl.push(t.a)},l.prototype.doRefresh=function(l){var n=this;"vandaag"==this.datepicker?this.http.get("http://gazoh.net/getdata.php").subscribe(function(l){n.items=l,n.artikelen=l},function(l){console.dir(l)}):"gisteren"==this.datepicker?this.http.get("http://gazoh.net/getyesterday.php").subscribe(function(l){n.items=l,n.artikelen=l},function(l){console.dir(l)}):"driedagengeleden"==this.datepicker&&this.http.get("http://gazoh.net/get3daysago.php").subscribe(function(l){n.items=l,n.artikelen=l},function(l){console.dir(l)}),setTimeout(function(){console.log("Async operation has ended"),l.complete()},2e3)},l.prototype.doInfinite=function(l){var n=this;this.http.get("http://gazoh.net/getdata.php").subscribe(function(u){n.items=n.items.push(u),l.complete()},function(l){console.dir(l)}),console.log("Begin async operation")},l.prototype.setHideArticle=function(l){var n=this;console.log("Hide "+l);var u=new e.g;u.append("Accept","application/json"),u.append("Content-Type","application/json");this.http.post("http://gazoh.net/hidearticle.php",l,{headers:u}).subscribe(function(u){if("hidden"==u){n.toastCtrl.create({message:"Artikel "+l+" verborgen",duration:2500,position:"top",showCloseButton:!0,closeButtonText:"OK"}).present()}})},l}()},112:function(l,n,u){"use strict";u.d(n,"a",function(){return e});u(1),u(9);var e=function(){return function(l,n,u){this.navCtrl=l,this.navParams=n,this.platform=u,this.slides=[{title:"Welcome to the Docs!",description:"The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",image:"../../assets/imgs/ica-slidebox-img-1.png"},{title:"What is Ionic?",description:"<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",image:"../../assets/imgs/ica-slidebox-img-2.png"},{title:"What is Ionic Cloud?",description:"The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",image:"../../assets/imgs/ica-slidebox-img-3.png"}]}}()},158:function(l,n,u){"use strict";u.d(n,"a",function(){return e});u(1),u(9);var e=function(){function l(l,n){this.navCtrl=l,this.navParams=n,this.themeStatus=localStorage.getItem("themeColor")}return l.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad AboutPage")},l}()},159:function(l,n,u){"use strict";u.d(n,"a",function(){return e});u(1),u(9);var e=function(){function l(l,n,u){this.navCtrl=l,this.navParams=n,this.http=u}return l.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad AdminPage")},l.prototype.selectGebruikers=function(){var l=this;this.checklist="gebruikers",this.http.get("http://gazoh.net/getuser.php").subscribe(function(n){l.gebruikerslijst=n},function(l){console.dir(l)})},l.prototype.ionViewWillEnter=function(){this.checklist="artikelen",this.selectArtikelen()},l.prototype.selectArtikelen=function(){var l=this;this.checklist="artikelen",this.http.get("http://gazoh.net/getverborgen.php").subscribe(function(n){l.artikelenlijst=n},function(l){console.dir(l)})},l.prototype.htmlToPlaintext=function(l){return l?String(l).replace(/<[^>]+>/gm,""):""},l.prototype.viewEntry=function(l){this.navCtrl.push("NieuwsPage",l)},l}()},160:function(l,n,u){"use strict";u.d(n,"a",function(){return e});u(1),u(9);var e=function(){function l(l,n){this.navCtrl=l,this.navParams=n}return l.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad AutoPage")},l}()},161:function(l,n,u){"use strict";u.d(n,"a",function(){return a});u(1),u(9);var e=u(32),a=function(){return function(l,n,u){var a=this;this.navCtrl=l,this.navParams=n,this.http=u;var t=new e.g;t.append("Accept","application/json"),t.append("Content-Type","application/json");var i={headers:t},o={email:localStorage.getItem("userEmail")};this.http.post("http://gazoh.net/getgebruiker.php",o,i).subscribe(function(l){a.dataUser=l,a.username=a.dataUser.username,a.pictureprofile=a.dataUser.profilepicture})}}()},162:function(l,n,u){"use strict";u.d(n,"a",function(){return e});u(1),u(9);var e=function(){function l(l,n){this.navCtrl=l,this.navParams=n}return l.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad SportPage")},l}()},163:function(l,n,u){"use strict";u.d(n,"a",function(){return e});u(1),u(9);var e=function(){function l(l,n){this.navCtrl=l,this.navParams=n}return l.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad EconomiePage")},l}()},164:function(l,n,u){"use strict";u.d(n,"a",function(){return e});u(1),u(9);var e=function(){function l(l,n){this.navCtrl=l,this.navParams=n}return l.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad MisdaadPage")},l}()},165:function(l,n,u){"use strict";u.d(n,"a",function(){return e});u(1),u(9);var e=function(){function l(l,n){this.navCtrl=l,this.navParams=n}return l.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad TechPage")},l}()},166:function(l,n,u){"use strict";u.d(n,"a",function(){return i});u(1),u(9);var e=u(109),a=(u(154),u(155),u(32)),t=u(19),i=function(){function l(l,n,u,e,t,i,o,s){var r=this;this.navCtrl=l,this.navParams=n,this.alertCtrl=u,this.camera=e,this.file=t,this.actionSheetCtrl=i,this.http=o,this.events=s,this.id=localStorage.getItem("userId"),this.myprofilepic=localStorage.getItem("profilePicture");var c=new a.g;c.append("Accept","application/json"),c.append("Content-Type","application/json");var _={headers:c},d={email:localStorage.getItem("userEmail")};this.http.post("http://gazoh.net/getgebruiker.php",d,_).subscribe(function(l){r.dataUser=l,r.username=r.dataUser.username,r.email=r.dataUser.email,r.emailVerified=r.dataUser.emailVerified,r.rol=r.dataUser.rol,r.myphoto=r.dataUser.profilepicture,r.creationdate=r.dataUser.creationdate}),this.events.publish("username",this.username),this.events.publish("profilepicture",this.myphoto)}return l.prototype.presentActionSheet=function(){var l=this;this.actionSheetCtrl.create({title:"Kies een profielfoto!",buttons:[{text:"Maak foto",role:"Maak foto",handler:function(){l.takePhoto()}},{text:"Kies uit galerij",handler:function(){l.cropImage()}},{text:"Annuleren",role:"cancel",handler:function(){console.log("Cancel clicked")}}]}).present()},l.prototype.takePhoto=function(){var l=this;this.camera.getPicture({quality:70,allowEdit:!0,targetWidth:300,targetHeight:300,destinationType:this.camera.DestinationType.DATA_URL,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE}).then(function(n){l.myphoto="data:image/jpeg;base64,"+n},function(l){})},l.prototype.onArticlePictureCreated=function(l){this.myphoto="data:image/jpeg;base64,"+l,this.myprofilepic="data:image/jpeg;base64,"+l,localStorage.setItem("profilePicture",this.myphoto)},l.prototype.cropImage=function(){var l=this;this.camera.getPicture({quality:70,destinationType:this.camera.DestinationType.DATA_URL,sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,saveToPhotoAlbum:!1,allowEdit:!0,targetWidth:300,targetHeight:300}).then(function(n){l.myphoto="data:image/jpeg;base64,"+n,l.myprofilepic="data:image/jpeg;base64,"+n,localStorage.setItem("profilePicture",l.myphoto)},function(l){})},l.prototype.wijzigWachtwoord=function(){this.alertCtrl.create({title:"Wachtwoord wijzigen",inputs:[{name:"oudWachtwoord",placeholder:"Oude wachtwoord"},{name:"NieuweWachtwoord1",placeholder:"Nieuwe wachtwoord"},{name:"NieuweWachtwoord2",placeholder:"Herhaal wachtwoord"}],buttons:[{text:"Cancel",handler:function(l){console.log("Cancel clicked")}},{text:"Wijzigen",handler:function(l){console.log("Saved clicked")}}]}).present()},l.prototype.goBack=function(){this.navCtrl.push(e.a)},l.prototype.ngOnInit=function(){this.form=new t.g({username:new t.e("",[t.p.required,t.p.pattern("[a-zA-Z][a-zA-z ]+")]),email:new t.e("",[t.p.required,t.p.email,t.p.pattern("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$")])})},l.prototype.validateAllFormFields=function(l){var n=this;Object.keys(l.controls).forEach(function(u){var e=l.get(u);e instanceof t.e?e.markAsTouched({onlySelf:!0}):e instanceof t.g&&n.validateAllFormFields(e)})},l.prototype.updateProfile=function(){var l=this;if(this.form.invalid)this.validateAllFormFields(this.form);else{var n=new a.g;n.append("Accept","application/json"),n.append("Content-Type","application/json");this.http.post("http://gazoh.net/updateProfiel.php",{id:this.id,username:this.username,email:this.email,myphoto:this.myphoto},{headers:n}).map(function(l){return l}).subscribe(function(n){if("Profile updated succesfully"==n){l.alertCtrl.create({title:"Profiel bijgewerkt",subTitle:"Uw profiel is met succesvol bijgewerkt",buttons:[{text:"OK",handler:function(n){l.navCtrl.setRoot(e.a)}}]}).present()}else if("No data set!"==n){l.alertCtrl.create({title:"Mislukt",subTitle:"Uw profiel kon niet worden bijgewerkt vanwege een fout aan onze kant!",buttons:["OK"]}).present()}}),console.log("Dit is je foto:"+this.myphoto)}},l}()},167:function(l,n,u){"use strict";u.d(n,"a",function(){return e});u(1),u(9);var e=function(){function l(l,n){this.navCtrl=l,this.navParams=n,this.page="0"}return l.prototype.selectedTab=function(l){this.slider.slideTo(l)},l.prototype.moveButton=function(l){this.page=l._snapIndex.toString()},l}()},168:function(l,n,u){"use strict";u.d(n,"a",function(){return o});u(1),u(9);var e=u(75),a=u(32),t=u(206),i=(u.n(t),u(19)),o=function(){function l(l,n,u,e,a){this.navCtrl=l,this.navParams=n,this.alertCtrl=u,this.http=e,this.loading=a}return l.prototype.ngOnInit=function(){this.form=new i.g({username:new i.e("",[i.p.required,i.p.pattern("[a-zA-Z][a-zA-z ]+")]),password:new i.e("",[i.p.required,i.p.minLength(8),i.p.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$")]),email:new i.e("",[i.p.required,i.p.email,i.p.pattern("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$")])})},l.prototype.validateAllFormFields=function(l){var n=this;Object.keys(l.controls).forEach(function(u){var e=l.get(u);e instanceof i.e?e.markAsTouched({onlySelf:!0}):e instanceof i.g&&n.validateAllFormFields(e)})},l.prototype.onSubmit=function(){var l=this;if(this.form.invalid)this.validateAllFormFields(this.form);else{var n=new a.g;n.append("Accept","application/json"),n.append("Content-Type","application/json");var u={headers:n},t={username:this.username,password:this.password,email:this.email},i=this.loading.create({content:"Aan het registreren.."});i.present().then(function(){l.http.post("http://gazoh.net/register.php",t,u).map(function(l){return l}).subscribe(function(n){if(i.dismiss(),"Registration successfull"==n){l.alertCtrl.create({title:"Registreren geslaagd",subTitle:"U kunt nu gaan inloggen",buttons:["OK"]}).present(),l.navCtrl.push(e.a)}else if("already in use"==n){l.alertCtrl.create({title:"Registreren mislukt",subTitle:"Er bestaat al een gebruiker met het zelfde email of gebruikersnaam!",buttons:["OK"]}).present()}else{l.alertCtrl.create({title:"Mislukt",subTitle:"Er is iets mis gegaan tijdens het registeren probeert u het opnieuw.",buttons:["OK"]}).present()}})})}},l.prototype.terug=function(){this.navCtrl.push(e.a)},l}()},219:function(l,n,u){"use strict";u.d(n,"a",function(){return e});u(1),u(9);var e=function(){return function(){}}()},220:function(l,n,u){"use strict";u.d(n,"a",function(){return e});u(1),u(9);var e=function(){return function(){}}()},221:function(l,n,u){"use strict";u.d(n,"a",function(){return e});u(1),u(9);var e=function(){return function(){}}()},222:function(l,n,u){"use strict";u.d(n,"a",function(){return e});u(1),u(9),u(145);var e=function(){function l(l,n,u){this.navCtrl=l,this.navParams=n,this.iab=u,this.navParams.get("record")?(this.selectEntry(this.navParams.get("record")),console.log(this.navParams.get("record"))):this.navCtrl.setRoot("CategoryPage")}return l.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad NieuwsPage")},l.prototype.selectEntry=function(l){this.title=l.title,this.image=l.image,this.description=l.description,this.link=l.link,this.site=l.site,this.datum=l.datum,this.id=l.id},l.prototype.htmlToPlaintext=function(l){return l?String(l).replace(/<[^>]+>/gm,""):""},l.prototype.openPagina=function(l){this.iab.create(l).show()},l}()},223:function(l,n,u){"use strict";u.d(n,"a",function(){return e});u(1),u(9);var e=function(){return function(){}}()},224:function(l,n,u){"use strict";u.d(n,"a",function(){return e});u(1),u(9);var e=function(){return function(){}}()},235:function(l,n){function u(l){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+l+"'.")})}u.keys=function(){return[]},u.resolve=u,l.exports=u,u.id=235},256:function(l,n,u){function e(l){var n=a[l];return n?u.e(n[1]).then(function(){return u(n[0])}):Promise.reject(new Error("Cannot find module '"+l+"'."))}var a={"../pages/about/about.module.ngfactory":[699,11],"../pages/admin/admin.module.ngfactory":[700,10],"../pages/auto/auto.module.ngfactory":[701,9],"../pages/category/category.module.ngfactory":[702,16],"../pages/comments/comments.module.ngfactory":[703,8],"../pages/economie/economie.module.ngfactory":[704,7],"../pages/feed/feed.module.ngfactory":[705,15],"../pages/misdaad/misdaad.module.ngfactory":[706,6],"../pages/nieuws/nieuws.module.ngfactory":[707,14],"../pages/profiel/profiel.module.ngfactory":[708,5],"../pages/register/register.module.ngfactory":[709,13],"../pages/settings/settings.module.ngfactory":[710,4],"../pages/sources/sources.module.ngfactory":[711,3],"../pages/sport/sport.module.ngfactory":[712,2],"../pages/tech/tech.module.ngfactory":[713,1],"../pages/tutorial/tutorial.module.ngfactory":[714,12],"../pages/vermaak/vermaak.module.ngfactory":[715,0]};e.keys=function(){return Object.keys(a)},e.id=256,l.exports=e},386:function(l,n,u){"use strict";u.d(n,"a",function(){return e});u(1),u(9);var e=function(){function l(l,n){this.navCtrl=l,this.navParams=n}return l.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad VermaakPage")},l}()},387:function(l,n,u){"use strict";function e(l){return i._21(0,[(l()(),i.Z(0,0,null,null,0,"img",[["class","imgAbout"],["src","../../assets/imgs/NewsAgeLogoBlack.png"],["style","float: right; "],["width","150"]],null,null,null,null,null))],null,null)}function a(l){return i._21(0,[(l()(),i.Z(0,0,null,null,0,"img",[["class","imgAbout"],["src","../../assets/imgs/NewsAgeLogo.png"],["style","float: right; "],["width","150"]],null,null,null,null,null))],null,null)}function t(l){return i._21(0,[(l()(),i.Z(0,0,null,null,20,"ion-header",[["no-border-bottom",""]],null,null,null,null,null)),i.Y(1,16384,null,0,o.a,[s.a,i.j,i.z,[2,r.a]],null,null),(l()(),i._19(-1,null,["\n  "])),(l()(),i.Z(3,0,null,null,16,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,c.b,c.a)),i.Y(4,49152,null,0,_.a,[d.a,[2,r.a],[2,g.a],s.a,i.j,i.z],null,null),(l()(),i._19(-1,3,["\n    "])),(l()(),i.Z(6,0,null,0,8,"button",[["class","fakeCenter"],["ion-button",""],["menuToggle",""],["right",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==i._11(l,8).toggle()&&e}return e},m.b,m.a)),i.Y(7,1097728,[[1,4]],0,p.a,[[8,""],s.a,i.j,i.z],null,null),i.Y(8,1064960,null,0,h.a,[f.a,[2,r.a],[2,p.a],[2,_.a]],{menuToggle:[0,"menuToggle"]},null),i.Y(9,16384,null,1,b.a,[s.a,i.j,i.z,[2,v.a],[2,_.a]],null,null),i._17(603979776,1,{_buttons:1}),(l()(),i._19(-1,0,["\n      "])),(l()(),i.Z(12,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),i.Y(13,147456,null,0,Y.a,[s.a,i.j,i.z],{name:[0,"name"]},null),(l()(),i._19(-1,0,["\n    "])),(l()(),i._19(-1,3,["\n      "])),(l()(),i.Z(16,0,null,3,2,"ion-title",[["class","centerTitle"],["text-center",""]],null,null,null,Z.b,Z.a)),i.Y(17,49152,null,0,k.a,[s.a,i.j,i.z,[2,v.a],[2,_.a]],null,null),(l()(),i._19(-1,0,["Over Ons"])),(l()(),i._19(-1,3,["\n  "])),(l()(),i._19(-1,null,["\n"])),(l()(),i._19(-1,null,["\n\n"])),(l()(),i.Z(22,0,null,null,39,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,j.b,j.a)),i.Y(23,4374528,null,0,z.a,[s.a,C.a,y.a,i.j,i.z,d.a,T.a,i.u,[2,r.a],[2,g.a]],null,null),(l()(),i._19(-1,1,["\n    "])),(l()(),i.Z(25,0,null,1,1,"h2",[],null,null,null,null,null)),(l()(),i._19(-1,null,["Welkom!"])),(l()(),i._19(-1,1,["\n    "])),(l()(),i.Z(28,0,null,1,1,"p",[],null,null,null,null,null)),(l()(),i._19(-1,null,["Hallo! Welkom op NewsAge! ten eerste willen wij, namens het team, u bedanken voor het gebruiken van NewsAge!"])),(l()(),i._19(-1,1,["\n    "])),(l()(),i.Z(31,0,null,1,1,"h4",[],null,null,null,null,null)),(l()(),i._19(-1,null,['Wat is "NewsAge"'])),(l()(),i._19(-1,1,["\n    "])),(l()(),i.Z(34,0,null,1,1,"p",[],null,null,null,null,null)),(l()(),i._19(-1,null,["NewsAge is de perfecte app om alle nieuws in een oogopslag te lezen.\n        NewsAge maakt het gemakkelijk voor de gebruiker(jij) door alle nieuws te verzamelen van verschillende bronnen en\n        die in een feed te verwerken zodat alles netjes en geordend is ;)."])),(l()(),i._19(-1,1,["\n    "])),(l()(),i.Z(37,0,null,1,1,"h4",[],null,null,null,null,null)),(l()(),i._19(-1,null,["Waarom NewsAge?"])),(l()(),i._19(-1,1,["\n    "])),(l()(),i.Z(40,0,null,1,1,"p",[],null,null,null,null,null)),(l()(),i._19(-1,null,["NewsAge is heel gemakkelijk te gebruiken, u kunt bijvoorbeeld met 1 klik een dagblad volgen of niet volgen. U\n        kunt ook ervoor kiezen om bijvoorbeeld een artikel te verbergen, dit zorgt ervoor dat u de artikel niet\n        ziet."])),(l()(),i._19(-1,1,["\n    "])),(l()(),i.U(16777216,null,1,1,null,e)),i.Y(44,16384,null,0,I.i,[i.I,i.F],{ngIf:[0,"ngIf"]},null),(l()(),i._19(-1,1,["\n    "])),(l()(),i.U(16777216,null,1,1,null,a)),i.Y(47,16384,null,0,I.i,[i.I,i.F],{ngIf:[0,"ngIf"]},null),(l()(),i._19(-1,1,["\n    "])),(l()(),i.Z(49,0,null,1,11,"ion-footer",[["class","footerMenu"]],null,null,null,null,null)),i.Y(50,16384,null,0,w.a,[s.a,i.j,i.z,[2,r.a]],null,null),(l()(),i._19(-1,null,["\n        "])),(l()(),i.Z(52,0,null,null,7,"ion-toolbar",[["class","toolbarFooter toolbar"]],[[2,"statusbar-padding",null]],null,null,P.b,P.a)),i.Y(53,49152,null,0,v.a,[s.a,i.j,i.z],null,null),(l()(),i._19(-1,3,["\n            "])),(l()(),i.Z(55,0,null,3,3,"div",[["class","versienummer"]],null,null,null,null,null)),(l()(),i.Z(56,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),i._19(-1,null,["©NewsAge"])),(l()(),i._19(-1,null,[" V5.0.4"])),(l()(),i._19(-1,3,["\n        "])),(l()(),i._19(-1,null,["\n    "])),(l()(),i._19(-1,1,["\n"])),(l()(),i._19(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,8,0,"");l(n,13,0,"menu");l(n,44,0,"light-theme"==u.themeStatus);l(n,47,0,"dark-theme"==u.themeStatus)},function(l,n){l(n,3,0,i._11(n,4)._hidden,i._11(n,4)._sbPadding);l(n,6,0,i._11(n,8).isHidden);l(n,12,0,i._11(n,13)._hidden);l(n,22,0,i._11(n,23).statusbarPadding,i._11(n,23)._hasRefresher);l(n,52,0,i._11(n,53)._sbPadding)})}u.d(n,"a",function(){return x});var i=u(0),o=u(34),s=u(3),r=u(6),c=u(37),_=u(25),d=u(8),g=u(17),m=u(20),p=u(15),h=u(33),f=u(21),b=u(35),v=u(28),Y=u(22),Z=u(42),k=u(36),j=u(47),z=u(27),C=u(5),y=u(10),T=u(30),I=u(18),w=u(97),P=u(258),A=u(158),S=u(12),F=i.X({encapsulation:2,styles:[],data:{}}),x=i.V("page-about",A.a,function(l){return i._21(0,[(l()(),i.Z(0,0,null,null,1,"page-about",[],null,null,null,t,F)),i.Y(1,49152,null,0,A.a,[g.a,S.a],null,null)],null,null)},{},{},[])},388:function(l,n,u){"use strict";function e(l){return r._21(0,[(l()(),r.Z(0,0,null,null,0,"img",[["src","http://gazoh.net/images/noimage.jpg"]],null,null,null,null,null))],null,null)}function a(l){return r._21(0,[(l()(),r.Z(0,0,null,null,53,"ion-card",[],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.viewEntry({record:l.context.$implicit})&&e}return e},null,null)),r.Y(1,16384,null,0,c.a,[_.a,r.j,r.z],null,null),(l()(),r._19(-1,null,["\n        "])),(l()(),r.U(16777216,null,null,1,null,e)),r.Y(4,16384,null,0,d.i,[r.I,r.F],{ngIf:[0,"ngIf"]},null),(l()(),r._19(-1,null,["\n        "])),(l()(),r.Z(6,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),r._19(-1,null,["\n        "])),(l()(),r.Z(8,0,null,null,13,"ion-card-content",[],null,null,null,null,null)),r.Y(9,16384,null,0,g.a,[_.a,r.j,r.z],null,null),(l()(),r._19(-1,null,["\n            "])),(l()(),r.Z(11,0,null,null,5,"ion-card-title",[],null,null,null,null,null)),r.Y(12,16384,null,0,m.a,[_.a,r.j,r.z],null,null),(l()(),r._19(-1,null,["\n                "])),(l()(),r.Z(14,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),r._19(15,null,["",""])),(l()(),r._19(-1,null,["\n            "])),(l()(),r._19(-1,null,["\n            "])),(l()(),r.Z(18,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),r._19(19,null,["","..."])),r._13(0,d.r,[]),(l()(),r._19(-1,null,["\n        "])),(l()(),r._19(-1,null,["\n\n        "])),(l()(),r._19(-1,null,["\n        "])),(l()(),r.Z(24,0,null,null,13,"ion-item",[["class","item item-block"]],null,null,null,p.b,p.a)),r.Y(25,1097728,null,3,h.a,[f.a,_.a,r.j,r.z,[2,b.a]],null,null),r._17(335544320,3,{contentLabel:0}),r._17(603979776,4,{_buttons:1}),r._17(603979776,5,{_icons:1}),r.Y(29,16384,null,0,v.a,[],null,null),(l()(),r._19(-1,2,["\n            "])),(l()(),r.Z(31,0,null,0,1,"ion-icon",[["item-start",""],["name","contact"],["role","img"]],[[2,"hide",null]],null,null,null,null)),r.Y(32,147456,[[5,4]],0,Y.a,[_.a,r.j,r.z],{name:[0,"name"]},null),(l()(),r._19(-1,2,["\n            "])),(l()(),r.Z(34,0,null,4,2,"ion-badge",[["item-end",""]],null,null,null,null,null)),r.Y(35,16384,null,0,Z.a,[_.a,r.j,r.z],null,null),(l()(),r._19(36,null,["",""])),(l()(),r._19(-1,2,["\n        "])),(l()(),r._19(-1,null,["\n        "])),(l()(),r.Z(39,0,null,null,13,"ion-item",[["class","item item-block"]],null,null,null,p.b,p.a)),r.Y(40,1097728,null,3,h.a,[f.a,_.a,r.j,r.z,[2,b.a]],null,null),r._17(335544320,6,{contentLabel:0}),r._17(603979776,7,{_buttons:1}),r._17(603979776,8,{_icons:1}),r.Y(44,16384,null,0,v.a,[],null,null),(l()(),r._19(-1,2,["\n            "])),(l()(),r.Z(46,0,null,0,1,"ion-icon",[["item-start",""],["name","time"],["role","img"]],[[2,"hide",null]],null,null,null,null)),r.Y(47,147456,[[8,4]],0,Y.a,[_.a,r.j,r.z],{name:[0,"name"]},null),(l()(),r._19(-1,2,["\n            "])),(l()(),r.Z(49,0,null,4,2,"ion-badge",[["item-end",""]],null,null,null,null,null)),r.Y(50,16384,null,0,Z.a,[_.a,r.j,r.z],null,null),(l()(),r._19(51,null,["",""])),(l()(),r._19(-1,2,["\n        "])),(l()(),r._19(-1,null,["\n    "]))],function(l,n){l(n,4,0,!n.context.$implicit.image);l(n,32,0,"contact");l(n,47,0,"time")},function(l,n){var u=n.component;l(n,6,0,n.context.$implicit.image);l(n,15,0,n.context.$implicit.title);l(n,19,0,r._20(n,19,0,r._11(n,20).transform(u.htmlToPlaintext(n.context.$implicit.description),0,120)));l(n,31,0,r._11(n,32)._hidden);l(n,36,0,n.context.$implicit.site);l(n,46,0,r._11(n,47)._hidden);l(n,51,0,n.context.$implicit.datum)})}function t(l){return r._21(0,[(l()(),r.Z(0,0,null,null,7,"div",[],null,null,null,null,null)),(l()(),r._19(-1,null,["\n        "])),(l()(),r.Z(2,0,null,null,1,"ion-searchbar",[["placeholder","Zoek.."]],[[2,"searchbar-animated",null],[2,"searchbar-has-value",null],[2,"searchbar-active",null],[2,"searchbar-show-cancel",null],[2,"searchbar-left-aligned",null],[2,"searchbar-has-focus",null]],[[null,"ionInput"],[null,"ionCancel"],[null,"ionClear"]],function(l,n,u){var e=!0,a=l.component;if("ionInput"===n){e=!1!==a.searchArtikel(u)&&e}if("ionCancel"===n){e=!1!==a.resetArtikelen()&&e}if("ionClear"===n){e=!1!==a.resetChanges()&&e}return e},k.b,k.a)),r.Y(3,1294336,null,0,j.a,[_.a,z.a,r.j,r.z,[2,C.k]],{showCancelButton:[0,"showCancelButton"],placeholder:[1,"placeholder"]},{ionInput:"ionInput",ionCancel:"ionCancel",ionClear:"ionClear"}),(l()(),r._19(-1,null,["\n    "])),(l()(),r.U(16777216,null,null,1,null,a)),r.Y(6,802816,null,0,d.h,[r.I,r.F,r.p],{ngForOf:[0,"ngForOf"]},null),(l()(),r._19(-1,null,["\n    "]))],function(l,n){var u=n.component;l(n,3,0,!0,"Zoek..");l(n,6,0,u.artikelenlijst)},function(l,n){l(n,2,0,r._11(n,3)._animated,r._11(n,3)._value,r._11(n,3)._isActive,r._11(n,3)._showCancelButton,r._11(n,3)._shouldAlignLeft,r._11(n,3)._isFocus)})}function i(l){return r._21(0,[(l()(),r.Z(0,0,null,null,19,"ion-item",[["class","adminUsers item item-block"]],null,null,null,p.b,p.a)),r.Y(1,1097728,null,3,h.a,[f.a,_.a,r.j,r.z,[2,b.a]],null,null),r._17(335544320,9,{contentLabel:0}),r._17(603979776,10,{_buttons:1}),r._17(603979776,11,{_icons:1}),r.Y(5,16384,null,0,v.a,[],null,null),(l()(),r.Z(6,0,null,2,1,"strong",[],null,null,null,null,null)),(l()(),r._19(-1,null,["ID : "])),(l()(),r._19(8,2,[" "," | "])),(l()(),r.Z(9,0,null,2,1,"strong",[],null,null,null,null,null)),(l()(),r._19(10,null,[""," |"])),(l()(),r._19(-1,2,[" "])),(l()(),r.Z(12,0,null,4,3,"button",[["color","secondary"],["ion-button",""],["item-right",""]],null,null,null,y.b,y.a)),r.Y(13,1097728,[[10,4]],0,T.a,[[8,""],_.a,r.j,r.z],{color:[0,"color"]},null),(l()(),r.Z(14,0,null,0,1,"ion-icon",[["name","create"],["role","img"]],[[2,"hide",null]],null,null,null,null)),r.Y(15,147456,null,0,Y.a,[_.a,r.j,r.z],{name:[0,"name"]},null),(l()(),r.Z(16,0,null,4,3,"button",[["color","danger"],["ion-button",""],["item-right",""]],null,null,null,y.b,y.a)),r.Y(17,1097728,[[10,4]],0,T.a,[[8,""],_.a,r.j,r.z],{color:[0,"color"]},null),(l()(),r.Z(18,0,null,0,1,"ion-icon",[["name","trash"],["role","img"]],[[2,"hide",null]],null,null,null,null)),r.Y(19,147456,null,0,Y.a,[_.a,r.j,r.z],{name:[0,"name"]},null)],function(l,n){l(n,13,0,"secondary");l(n,15,0,"create");l(n,17,0,"danger");l(n,19,0,"trash")},function(l,n){l(n,8,0,n.context.$implicit.id);l(n,10,0,n.context.$implicit.email);l(n,14,0,r._11(n,15)._hidden);l(n,18,0,r._11(n,19)._hidden)})}function o(l){return r._21(0,[(l()(),r.Z(0,0,null,null,13,"ion-list",[["inset",""]],null,null,null,null,null)),r.Y(1,16384,null,0,I.a,[_.a,r.j,r.z,z.a,w.l,P.a],null,null),(l()(),r._19(-1,null,["\n            "])),(l()(),r.Z(3,0,null,null,9,"ion-item-group",[],null,null,null,null,null)),r.Y(4,16384,null,0,A.a,[],null,null),(l()(),r._19(-1,null,["\n                "])),(l()(),r.Z(6,0,null,null,5,"ion-row",[["class","row"]],null,null,null,null,null)),r.Y(7,16384,null,0,S.a,[],null,null),(l()(),r._19(-1,null,["\n                "])),(l()(),r.U(16777216,null,null,1,null,i)),r.Y(10,802816,null,0,d.h,[r.I,r.F,r.p],{ngForOf:[0,"ngForOf"]},null),(l()(),r._19(-1,null,["\n                "])),(l()(),r._19(-1,null,["\n            "])),(l()(),r._19(-1,null,["\n        "]))],function(l,n){l(n,10,0,n.component.gebruikerslijst)},null)}function s(l){return r._21(0,[(l()(),r.Z(0,0,null,null,36,"ion-header",[["no-border-bottom",""]],null,null,null,null,null)),r.Y(1,16384,null,0,F.a,[_.a,r.j,r.z,[2,x.a]],null,null),(l()(),r._19(-1,null,["\n  "])),(l()(),r.Z(3,0,null,null,16,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,U.b,U.a)),r.Y(4,49152,null,0,L.a,[N.a,[2,x.a],[2,V.a],_.a,r.j,r.z],null,null),(l()(),r._19(-1,3,["\n    "])),(l()(),r.Z(6,0,null,0,8,"button",[["class","fakeCenter"],["ion-button",""],["menuToggle",""],["right",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==r._11(l,8).toggle()&&e}return e},y.b,y.a)),r.Y(7,1097728,[[1,4]],0,T.a,[[8,""],_.a,r.j,r.z],null,null),r.Y(8,1064960,null,0,M.a,[D.a,[2,x.a],[2,T.a],[2,L.a]],{menuToggle:[0,"menuToggle"]},null),r.Y(9,16384,null,1,O.a,[_.a,r.j,r.z,[2,E.a],[2,L.a]],null,null),r._17(603979776,1,{_buttons:1}),(l()(),r._19(-1,0,["\n      "])),(l()(),r.Z(12,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),r.Y(13,147456,null,0,Y.a,[_.a,r.j,r.z],{name:[0,"name"]},null),(l()(),r._19(-1,0,["\n    "])),(l()(),r._19(-1,3,["\n      "])),(l()(),r.Z(16,0,null,3,2,"ion-title",[["class","centerTitle"],["text-center",""]],null,null,null,R.b,R.a)),r.Y(17,49152,null,0,H.a,[_.a,r.j,r.z,[2,E.a],[2,L.a]],null,null),(l()(),r._19(-1,0,["Admin"])),(l()(),r._19(-1,3,["\n  "])),(l()(),r._19(-1,null,["\n  "])),(l()(),r.Z(21,0,null,null,14,"ion-segment",[["color","primary"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"segment-disabled",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0;if("ngModelChange"===n){e=!1!==(l.component.checklist=u)&&e}return e},null,null)),r.Y(22,671744,null,0,C.n,[[8,null],[8,null],[8,null],[8,null]],{model:[0,"model"]},{update:"ngModelChange"}),r._15(2048,null,C.k,null,[C.n]),r.Y(24,16384,null,0,C.l,[C.k],null,null),r.Y(25,1196032,null,1,B.a,[_.a,r.j,r.z,[2,C.k]],{color:[0,"color"]},null),r._17(603979776,2,{_buttons:1}),(l()(),r._19(-1,null,["\n    "])),(l()(),r.Z(28,0,null,null,2,"ion-segment-button",[["class","segment-button"],["role","button"],["tappable",""],["value","artikelen"]],[[2,"segment-button-disabled",null],[2,"segment-activated",null],[1,"aria-pressed",0]],[[null,"click"]],function(l,n,u){var e=!0,a=l.component;if("click"===n){e=!1!==r._11(l,29).onClick()&&e}if("click"===n){e=!1!==a.selectArtikelen()&&e}return e},$.b,$.a)),r.Y(29,114688,[[2,4]],0,W.a,[],{value:[0,"value"]},null),(l()(),r._19(-1,0,["\n      Verborgen\n    "])),(l()(),r._19(-1,null,["\n    "])),(l()(),r.Z(32,0,null,null,2,"ion-segment-button",[["class","segment-button"],["role","button"],["tappable",""],["value","gebruikers"]],[[2,"segment-button-disabled",null],[2,"segment-activated",null],[1,"aria-pressed",0]],[[null,"click"]],function(l,n,u){var e=!0,a=l.component;if("click"===n){e=!1!==r._11(l,33).onClick()&&e}if("click"===n){e=!1!==a.selectGebruikers()&&e}return e},$.b,$.a)),r.Y(33,114688,[[2,4]],0,W.a,[],{value:[0,"value"]},null),(l()(),r._19(-1,0,["\n      Gebruikers\n    "])),(l()(),r._19(-1,null,["\n  "])),(l()(),r._19(-1,null,["\n"])),(l()(),r._19(-1,null,["\n"])),(l()(),r.Z(38,0,null,null,8,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,q.b,q.a)),r.Y(39,4374528,null,0,X.a,[_.a,z.a,P.a,r.j,r.z,N.a,K.a,r.u,[2,x.a],[2,V.a]],null,null),(l()(),r._19(-1,1,["\n    "])),(l()(),r.U(16777216,null,1,1,null,t)),r.Y(42,16384,null,0,d.i,[r.I,r.F],{ngIf:[0,"ngIf"]},null),(l()(),r._19(-1,1,["\n\n        "])),(l()(),r.U(16777216,null,1,1,null,o)),r.Y(45,16384,null,0,d.i,[r.I,r.F],{ngIf:[0,"ngIf"]},null),(l()(),r._19(-1,1,["\n"])),(l()(),r._19(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,8,0,"");l(n,13,0,"menu");l(n,22,0,u.checklist);l(n,25,0,"primary");l(n,29,0,"artikelen");l(n,33,0,"gebruikers");l(n,42,0,"artikelen"==u.checklist);l(n,45,0,"gebruikers"==u.checklist)},function(l,n){l(n,3,0,r._11(n,4)._hidden,r._11(n,4)._sbPadding);l(n,6,0,r._11(n,8).isHidden);l(n,12,0,r._11(n,13)._hidden);l(n,21,0,r._11(n,24).ngClassUntouched,r._11(n,24).ngClassTouched,r._11(n,24).ngClassPristine,r._11(n,24).ngClassDirty,r._11(n,24).ngClassValid,r._11(n,24).ngClassInvalid,r._11(n,24).ngClassPending,r._11(n,25)._disabled);l(n,28,0,r._11(n,29)._disabled,r._11(n,29).isActive,r._11(n,29).isActive);l(n,32,0,r._11(n,33)._disabled,r._11(n,33).isActive,r._11(n,33).isActive);l(n,38,0,r._11(n,39).statusbarPadding,r._11(n,39)._hasRefresher)})}u.d(n,"a",function(){return nl});var r=u(0),c=u(79),_=u(3),d=u(18),g=u(92),m=u(125),p=u(52),h=u(26),f=u(23),b=u(45),v=u(46),Y=u(22),Z=u(124),k=u(277),j=u(99),z=u(5),C=u(19),y=u(20),T=u(15),I=u(62),w=u(11),P=u(10),A=u(181),S=u(71),F=u(34),x=u(6),U=u(37),L=u(25),N=u(8),V=u(17),M=u(33),D=u(21),O=u(35),E=u(28),R=u(42),H=u(36),B=u(100),$=u(205),W=u(73),q=u(47),X=u(27),K=u(30),G=u(159),J=u(12),Q=u(32),ll=r.X({encapsulation:2,styles:[],data:{}}),nl=r.V("page-admin",G.a,function(l){return r._21(0,[(l()(),r.Z(0,0,null,null,1,"page-admin",[],null,null,null,s,ll)),r.Y(1,49152,null,0,G.a,[V.a,J.a,Q.c],null,null)],null,null)},{},{},[])},389:function(l,n,u){"use strict";function e(l){return a._21(0,[(l()(),a.Z(0,0,null,null,30,"ion-header",[["no-border-bottom",""]],null,null,null,null,null)),a.Y(1,16384,null,0,t.a,[i.a,a.j,a.z,[2,o.a]],null,null),(l()(),a._19(-1,null,["\n  "])),(l()(),a.Z(3,0,null,null,26,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,s.b,s.a)),a.Y(4,49152,null,0,r.a,[c.a,[2,o.a],[2,_.a],i.a,a.j,a.z],null,null),(l()(),a._19(-1,3,["\n    "])),(l()(),a.Z(6,0,null,0,8,"button",[["class","fakeCenter"],["ion-button",""],["menuToggle",""],["right",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==a._11(l,8).toggle()&&e}return e},d.b,d.a)),a.Y(7,1097728,[[1,4]],0,g.a,[[8,""],i.a,a.j,a.z],null,null),a.Y(8,1064960,null,0,m.a,[p.a,[2,o.a],[2,g.a],[2,r.a]],{menuToggle:[0,"menuToggle"]},null),a.Y(9,16384,null,1,h.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),a._17(603979776,1,{_buttons:1}),(l()(),a._19(-1,0,["\n        "])),(l()(),a.Z(12,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(13,147456,null,0,b.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._19(-1,0,["\n    "])),(l()(),a._19(-1,3,["\n      "])),(l()(),a.Z(16,0,null,3,2,"ion-title",[],null,null,null,v.b,v.a)),a.Y(17,49152,null,0,Y.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),(l()(),a._19(-1,0,["Auto"])),(l()(),a._19(-1,3,["\n        "])),(l()(),a.Z(20,0,null,0,8,"button",[["ion-button",""],["menuToggle",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==a._11(l,22).toggle()&&e}return e},d.b,d.a)),a.Y(21,1097728,[[2,4]],0,g.a,[[8,""],i.a,a.j,a.z],null,null),a.Y(22,1064960,null,0,m.a,[p.a,[2,o.a],[2,g.a],[2,r.a]],{menuToggle:[0,"menuToggle"]},null),a.Y(23,16384,null,1,h.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),a._17(603979776,2,{_buttons:1}),(l()(),a._19(-1,0,["\n            "])),(l()(),a.Z(26,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(27,147456,null,0,b.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._19(-1,0,["\n        "])),(l()(),a._19(-1,3,["\n    "])),(l()(),a._19(-1,null,["\n"])),(l()(),a._19(-1,null,["\n"]))],function(l,n){l(n,8,0,"");l(n,13,0,"menu");l(n,22,0,"");l(n,27,0,"menu")},function(l,n){l(n,3,0,a._11(n,4)._hidden,a._11(n,4)._sbPadding);l(n,6,0,a._11(n,8).isHidden);l(n,12,0,a._11(n,13)._hidden);l(n,20,0,a._11(n,22).isHidden);l(n,26,0,a._11(n,27)._hidden)})}u.d(n,"a",function(){return z});var a=u(0),t=u(34),i=u(3),o=u(6),s=u(37),r=u(25),c=u(8),_=u(17),d=u(20),g=u(15),m=u(33),p=u(21),h=u(35),f=u(28),b=u(22),v=u(42),Y=u(36),Z=u(160),k=u(12),j=a.X({encapsulation:2,styles:[],data:{}}),z=a.V("page-auto",Z.a,function(l){return a._21(0,[(l()(),a.Z(0,0,null,null,1,"page-auto",[],null,null,null,e,j)),a.Y(1,49152,null,0,Z.a,[_.a,k.a],null,null)],null,null)},{},{},[])},390:function(l,n,u){"use strict";function e(l){return a._21(0,[(l()(),a.Z(0,0,null,null,30,"ion-header",[["no-border-bottom",""]],null,null,null,null,null)),a.Y(1,16384,null,0,t.a,[i.a,a.j,a.z,[2,o.a]],null,null),(l()(),a._19(-1,null,["\n  "])),(l()(),a.Z(3,0,null,null,26,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,s.b,s.a)),a.Y(4,49152,null,0,r.a,[c.a,[2,o.a],[2,_.a],i.a,a.j,a.z],null,null),(l()(),a._19(-1,3,["\n    "])),(l()(),a.Z(6,0,null,0,8,"button",[["class","fakeCenter"],["ion-button",""],["menuToggle",""],["right",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==a._11(l,8).toggle()&&e}return e},d.b,d.a)),a.Y(7,1097728,[[1,4]],0,g.a,[[8,""],i.a,a.j,a.z],null,null),a.Y(8,1064960,null,0,m.a,[p.a,[2,o.a],[2,g.a],[2,r.a]],{menuToggle:[0,"menuToggle"]},null),a.Y(9,16384,null,1,h.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),a._17(603979776,1,{_buttons:1}),(l()(),a._19(-1,0,["\n      "])),(l()(),a.Z(12,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(13,147456,null,0,b.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._19(-1,0,["\n    "])),(l()(),a._19(-1,3,["\n    "])),(l()(),a.Z(16,0,null,3,2,"ion-title",[],null,null,null,v.b,v.a)),a.Y(17,49152,null,0,Y.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),(l()(),a._19(-1,0,["Categorie�n"])),(l()(),a._19(-1,3,["\n    "])),(l()(),a.Z(20,0,null,0,8,"button",[["ion-button",""],["menuToggle",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==a._11(l,22).toggle()&&e}return e},d.b,d.a)),a.Y(21,1097728,[[2,4]],0,g.a,[[8,""],i.a,a.j,a.z],null,null),a.Y(22,1064960,null,0,m.a,[p.a,[2,o.a],[2,g.a],[2,r.a]],{menuToggle:[0,"menuToggle"]},null),a.Y(23,16384,null,1,h.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),a._17(603979776,2,{_buttons:1}),(l()(),a._19(-1,0,["\n      "])),(l()(),a.Z(26,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(27,147456,null,0,b.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._19(-1,0,["\n    "])),(l()(),a._19(-1,3,["\n  "])),(l()(),a._19(-1,null,["\n"])),(l()(),a._19(-1,null,["\n"])),(l()(),a.Z(32,0,null,null,30,"ion-header",[["no-border-bottom",""]],null,null,null,null,null)),a.Y(33,16384,null,0,t.a,[i.a,a.j,a.z,[2,o.a]],null,null),(l()(),a._19(-1,null,["\n  "])),(l()(),a.Z(35,0,null,null,26,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,s.b,s.a)),a.Y(36,49152,null,0,r.a,[c.a,[2,o.a],[2,_.a],i.a,a.j,a.z],null,null),(l()(),a._19(-1,3,["\n    "])),(l()(),a.Z(38,0,null,0,8,"button",[["class","fakeCenter"],["ion-button",""],["menuToggle",""],["right",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==a._11(l,40).toggle()&&e}return e},d.b,d.a)),a.Y(39,1097728,[[3,4]],0,g.a,[[8,""],i.a,a.j,a.z],null,null),a.Y(40,1064960,null,0,m.a,[p.a,[2,o.a],[2,g.a],[2,r.a]],{menuToggle:[0,"menuToggle"]},null),a.Y(41,16384,null,1,h.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),a._17(603979776,3,{_buttons:1}),(l()(),a._19(-1,0,["\n      "])),(l()(),a.Z(44,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(45,147456,null,0,b.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._19(-1,0,["\n    "])),(l()(),a._19(-1,3,["\n    "])),(l()(),a.Z(48,0,null,3,2,"ion-title",[],null,null,null,v.b,v.a)),a.Y(49,49152,null,0,Y.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),(l()(),a._19(-1,0,["Categorieën"])),(l()(),a._19(-1,3,["\n    "])),(l()(),a.Z(52,0,null,0,8,"button",[["ion-button",""],["menuToggle",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==a._11(l,54).toggle()&&e}return e},d.b,d.a)),a.Y(53,1097728,[[4,4]],0,g.a,[[8,""],i.a,a.j,a.z],null,null),a.Y(54,1064960,null,0,m.a,[p.a,[2,o.a],[2,g.a],[2,r.a]],{menuToggle:[0,"menuToggle"]},null),a.Y(55,16384,null,1,h.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),a._17(603979776,4,{_buttons:1}),(l()(),a._19(-1,0,["\n      "])),(l()(),a.Z(58,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(59,147456,null,0,b.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._19(-1,0,["\n    "])),(l()(),a._19(-1,3,["\n  "])),(l()(),a._19(-1,null,["\n"])),(l()(),a._19(-1,null,["\n"])),(l()(),a.Z(64,0,null,null,114,"ion-content",[["class","card-background-page"],["id","deleteCards"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,Z.b,Z.a)),a.Y(65,4374528,null,0,k.a,[i.a,j.a,z.a,a.j,a.z,c.a,C.a,a.u,[2,o.a],[2,_.a]],null,null),(l()(),a._19(-1,1,["\n  "])),(l()(),a.Z(67,0,null,1,14,"div",[],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.goFeed()&&e}return e},null,null)),(l()(),a._19(-1,null,["\n        "])),(l()(),a.Z(69,0,null,null,11,"ion-card",[["class","cardCategory"]],null,null,null,null,null)),a.Y(70,16384,null,0,y.a,[i.a,a.j,a.z],null,null),(l()(),a._19(-1,null,["\n\n            "])),(l()(),a.Z(72,0,null,null,0,"img",[["src","../../assets/imgs/Nieuws.jpg"]],null,null,null,null,null)),(l()(),a._19(-1,null,["\n            "])),(l()(),a.Z(74,0,null,null,2,"ion-title",[["class","card-title2"]],null,null,null,v.b,v.a)),a.Y(75,49152,null,0,Y.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),(l()(),a._19(-1,0,["Algemeen"])),(l()(),a._19(-1,null,["\n            "])),(l()(),a.Z(78,0,null,null,1,"div",[["class","card-subtitle"]],null,null,null,null,null)),(l()(),a._19(79,null,[""," Artikelen vandaag"])),(l()(),a._19(-1,null,["\n        "])),(l()(),a._19(-1,null,["\n  "])),(l()(),a._19(-1,1,["\n\n        "])),(l()(),a.Z(83,0,null,1,14,"ion-card",[["class","cardCategory"]],null,null,null,null,null)),a.Y(84,16384,null,0,y.a,[i.a,a.j,a.z],null,null),(l()(),a._19(-1,null,["\n          "])),(l()(),a.Z(86,0,null,null,10,"div",[],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.goSport()&&e}return e},null,null)),(l()(),a._19(-1,null,["\n            "])),(l()(),a.Z(88,0,null,null,0,"img",[["src","../../assets/imgs/Sport.jpg"]],null,null,null,null,null)),(l()(),a._19(-1,null,["\n            "])),(l()(),a.Z(90,0,null,null,2,"ion-title",[["class","card-title2"]],null,null,null,v.b,v.a)),a.Y(91,49152,null,0,Y.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),(l()(),a._19(-1,0,["Sport"])),(l()(),a._19(-1,null,["\n            "])),(l()(),a.Z(94,0,null,null,1,"div",[["class","card-subtitle"]],null,null,null,null,null)),(l()(),a._19(-1,null,["0 Artikelen vandaag"])),(l()(),a._19(-1,null,["\n          "])),(l()(),a._19(-1,null,["\n        "])),(l()(),a._19(-1,1,["\n\n        "])),(l()(),a.Z(99,0,null,1,14,"ion-card",[["class","cardCategory"]],null,null,null,null,null)),a.Y(100,16384,null,0,y.a,[i.a,a.j,a.z],null,null),(l()(),a._19(-1,null,["\n          "])),(l()(),a.Z(102,0,null,null,10,"div",[],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.goEconomie()&&e}return e},null,null)),(l()(),a._19(-1,null,["\n            "])),(l()(),a.Z(104,0,null,null,0,"img",[["src","../../assets/imgs/Economie.jpg"]],null,null,null,null,null)),(l()(),a._19(-1,null,["\n            "])),(l()(),a.Z(106,0,null,null,2,"ion-title",[["class","card-title2"]],null,null,null,v.b,v.a)),a.Y(107,49152,null,0,Y.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),(l()(),a._19(-1,0,["Economie"])),(l()(),a._19(-1,null,["\n            "])),(l()(),a.Z(110,0,null,null,1,"div",[["class","card-subtitle"]],null,null,null,null,null)),(l()(),a._19(-1,null,["0 Artikelen vandaag"])),(l()(),a._19(-1,null,["\n          "])),(l()(),a._19(-1,null,["\n        "])),(l()(),a._19(-1,1,["\n\n        "])),(l()(),a.Z(115,0,null,1,14,"ion-card",[["class","cardCategory"]],null,null,null,null,null)),a.Y(116,16384,null,0,y.a,[i.a,a.j,a.z],null,null),(l()(),a._19(-1,null,["\n          "])),(l()(),a.Z(118,0,null,null,10,"div",[],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.goMisdaad()&&e}return e},null,null)),(l()(),a._19(-1,null,["\n            "])),(l()(),a.Z(120,0,null,null,0,"img",[["src","../../assets/imgs/Misdaad.jpg"]],null,null,null,null,null)),(l()(),a._19(-1,null,["\n            "])),(l()(),a.Z(122,0,null,null,2,"ion-title",[["class","card-title2"]],null,null,null,v.b,v.a)),a.Y(123,49152,null,0,Y.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),(l()(),a._19(-1,0,["Misdaad"])),(l()(),a._19(-1,null,["\n            "])),(l()(),a.Z(126,0,null,null,1,"div",[["class","card-subtitle"]],null,null,null,null,null)),(l()(),a._19(-1,null,["0 Artikelen vandaag"])),(l()(),a._19(-1,null,["\n          "])),(l()(),a._19(-1,null,["\n        "])),(l()(),a._19(-1,1,["\n\n    "])),(l()(),a.Z(131,0,null,1,14,"ion-card",[["class","cardCategory"]],null,null,null,null,null)),a.Y(132,16384,null,0,y.a,[i.a,a.j,a.z],null,null),(l()(),a._19(-1,null,["\n        "])),(l()(),a.Z(134,0,null,null,10,"div",[],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.goTech()&&e}return e},null,null)),(l()(),a._19(-1,null,["\n          "])),(l()(),a.Z(136,0,null,null,0,"img",[["src","../../assets/imgs/Tech.jpg"]],null,null,null,null,null)),(l()(),a._19(-1,null,["\n          "])),(l()(),a.Z(138,0,null,null,2,"ion-title",[["class","card-title2"]],null,null,null,v.b,v.a)),a.Y(139,49152,null,0,Y.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),(l()(),a._19(-1,0,["Tech"])),(l()(),a._19(-1,null,["\n          "])),(l()(),a.Z(142,0,null,null,1,"div",[["class","card-subtitle"]],null,null,null,null,null)),(l()(),a._19(-1,null,["0 Artikelen vandaag"])),(l()(),a._19(-1,null,["\n        "])),(l()(),a._19(-1,null,["\n      "])),(l()(),a._19(-1,1,["\n\n      "])),(l()(),a.Z(147,0,null,1,14,"ion-card",[["class","cardCategory"]],null,null,null,null,null)),a.Y(148,16384,null,0,y.a,[i.a,a.j,a.z],null,null),(l()(),a._19(-1,null,["\n        "])),(l()(),a.Z(150,0,null,null,10,"div",[],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.goAuto()&&e}return e},null,null)),(l()(),a._19(-1,null,["\n          "])),(l()(),a.Z(152,0,null,null,0,"img",[["src","../../assets/imgs/Car.jpg"]],null,null,null,null,null)),(l()(),a._19(-1,null,["\n          "])),(l()(),a.Z(154,0,null,null,2,"ion-title",[["class","card-title2"]],null,null,null,v.b,v.a)),a.Y(155,49152,null,0,Y.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),(l()(),a._19(-1,0,["Auto"])),(l()(),a._19(-1,null,["\n          "])),(l()(),a.Z(158,0,null,null,1,"div",[["class","card-subtitle"]],null,null,null,null,null)),(l()(),a._19(-1,null,["0 Artikelen vandaag"])),(l()(),a._19(-1,null,["\n        "])),(l()(),a._19(-1,null,["\n      "])),(l()(),a._19(-1,1,["\n\n      "])),(l()(),a.Z(163,0,null,1,14,"ion-card",[["class","cardCategory"]],null,null,null,null,null)),a.Y(164,16384,null,0,y.a,[i.a,a.j,a.z],null,null),(l()(),a._19(-1,null,["\n        "])),(l()(),a.Z(166,0,null,null,10,"div",[],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.goVermaak()&&e}return e},null,null)),(l()(),a._19(-1,null,["\n          "])),(l()(),a.Z(168,0,null,null,0,"img",[["src","../../assets/imgs/Entertainment.jpg"]],null,null,null,null,null)),(l()(),a._19(-1,null,["\n          "])),(l()(),a.Z(170,0,null,null,2,"ion-title",[["class","card-title2"]],null,null,null,v.b,v.a)),a.Y(171,49152,null,0,Y.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),(l()(),a._19(-1,0,["Entertainment"])),(l()(),a._19(-1,null,["\n          "])),(l()(),a.Z(174,0,null,null,1,"div",[["class","card-subtitle"]],null,null,null,null,null)),(l()(),a._19(-1,null,["0 Artikelen vandaag"])),(l()(),a._19(-1,null,["\n        "])),(l()(),a._19(-1,null,["\n      "])),(l()(),a._19(-1,1,["\n"])),(l()(),a._19(-1,null,["\n"]))],function(l,n){l(n,8,0,"");l(n,13,0,"menu");l(n,22,0,"");l(n,27,0,"menu");l(n,40,0,"");l(n,45,0,"menu");l(n,54,0,"");l(n,59,0,"menu")},function(l,n){var u=n.component;l(n,3,0,a._11(n,4)._hidden,a._11(n,4)._sbPadding);l(n,6,0,a._11(n,8).isHidden);l(n,12,0,a._11(n,13)._hidden);l(n,20,0,a._11(n,22).isHidden);l(n,26,0,a._11(n,27)._hidden);l(n,35,0,a._11(n,36)._hidden,a._11(n,36)._sbPadding);l(n,38,0,a._11(n,40).isHidden);l(n,44,0,a._11(n,45)._hidden);l(n,52,0,a._11(n,54).isHidden);l(n,58,0,a._11(n,59)._hidden);l(n,64,0,a._11(n,65).statusbarPadding,a._11(n,65)._hasRefresher);l(n,79,0,u.aantalartikelen)})}u.d(n,"a",function(){return F});var a=u(0),t=u(34),i=u(3),o=u(6),s=u(37),r=u(25),c=u(8),_=u(17),d=u(20),g=u(15),m=u(33),p=u(21),h=u(35),f=u(28),b=u(22),v=u(42),Y=u(36),Z=u(47),k=u(27),j=u(5),z=u(10),C=u(30),y=u(79),T=u(110),I=u(12),w=u(84),P=u(32),A=u(64),S=a.X({encapsulation:2,styles:[],data:{}}),F=a.V("page-category",T.a,function(l){return a._21(0,[(l()(),a.Z(0,0,null,null,1,"page-category",[],null,null,null,e,S)),a.Y(1,49152,null,0,T.a,[_.a,I.a,p.a,w.a,P.c,A.a],null,null)],null,null)},{},{},[])},391:function(l,n,u){"use strict";function e(l){return a._21(0,[(l()(),a.Z(0,0,null,null,20,"ion-header",[["no-border-bottom",""]],null,null,null,null,null)),a.Y(1,16384,null,0,t.a,[i.a,a.j,a.z,[2,o.a]],null,null),(l()(),a._19(-1,null,["\n  "])),(l()(),a.Z(3,0,null,null,16,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,s.b,s.a)),a.Y(4,49152,null,0,r.a,[c.a,[2,o.a],[2,_.a],i.a,a.j,a.z],null,null),(l()(),a._19(-1,3,["\n    "])),(l()(),a.Z(6,0,null,0,8,"button",[["class","fakeCenter"],["ion-button",""],["menuToggle",""],["right",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==a._11(l,8).toggle()&&e}return e},d.b,d.a)),a.Y(7,1097728,[[1,4]],0,g.a,[[8,""],i.a,a.j,a.z],null,null),a.Y(8,1064960,null,0,m.a,[p.a,[2,o.a],[2,g.a],[2,r.a]],{menuToggle:[0,"menuToggle"]},null),a.Y(9,16384,null,1,h.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),a._17(603979776,1,{_buttons:1}),(l()(),a._19(-1,0,["\n      "])),(l()(),a.Z(12,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(13,147456,null,0,b.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._19(-1,0,["\n    "])),(l()(),a._19(-1,3,["\n    "])),(l()(),a.Z(16,0,null,3,2,"ion-title",[["class","centerTitle"],["text-center",""]],null,null,null,v.b,v.a)),a.Y(17,49152,null,0,Y.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),(l()(),a._19(-1,0,["Comments"])),(l()(),a._19(-1,3,["\n  "])),(l()(),a._19(-1,null,["\n"])),(l()(),a._19(-1,null,["\n"])),(l()(),a.Z(22,0,null,null,19,"ion-footer",[],null,null,null,null,null)),a.Y(23,16384,null,0,Z.a,[i.a,a.j,a.z,[2,o.a]],null,null),(l()(),a._19(-1,null,["\n  "])),(l()(),a.Z(25,0,null,null,15,"ion-item",[["class","item item-block"]],null,null,null,k.b,k.a)),a.Y(26,1097728,null,3,j.a,[z.a,i.a,a.j,a.z,[2,C.a]],null,null),a._17(335544320,2,{contentLabel:0}),a._17(603979776,3,{_buttons:1}),a._17(603979776,4,{_icons:1}),a.Y(30,16384,null,0,y.a,[],null,null),(l()(),a._19(-1,2,["\n    "])),(l()(),a.Z(32,0,null,0,4,"ion-avatar",[["class","avatar"],["item-start",""]],null,null,null,null,null)),a.Y(33,16384,null,0,T.a,[],null,null),(l()(),a._19(-1,null,["\n      "])),(l()(),a.Z(35,0,null,null,0,"img",[["class","avatar-profiel"]],[[8,"src",4]],[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.presentActionSheet()&&e}return e},null,null)),(l()(),a._19(-1,null,["\n    "])),(l()(),a._19(-1,2,["\n    "])),(l()(),a.Z(38,0,null,3,1,"ion-input",[["placeholder","Text Input"]],null,null,null,I.b,I.a)),a.Y(39,5423104,null,0,w.a,[i.a,P.a,z.a,c.a,a.j,a.z,[2,A.a],[2,j.a],[2,S.k],F.a],{placeholder:[0,"placeholder"]},null),(l()(),a._19(-1,2,["\n  "])),(l()(),a._19(-1,null,["\n"])),(l()(),a._19(-1,null,["\n"]))],function(l,n){l(n,8,0,"");l(n,13,0,"menu");l(n,39,0,"Text Input")},function(l,n){var u=n.component;l(n,3,0,a._11(n,4)._hidden,a._11(n,4)._sbPadding);l(n,6,0,a._11(n,8).isHidden);l(n,12,0,a._11(n,13)._hidden);l(n,35,0,a._2(1,"",u.pictureprofile,""))})}u.d(n,"a",function(){return V});var a=u(0),t=u(34),i=u(3),o=u(6),s=u(37),r=u(25),c=u(8),_=u(17),d=u(20),g=u(15),m=u(33),p=u(21),h=u(35),f=u(28),b=u(22),v=u(42),Y=u(36),Z=u(97),k=u(52),j=u(26),z=u(23),C=u(45),y=u(46),T=u(123),I=u(144),w=u(72),P=u(5),A=u(27),S=u(19),F=u(10),x=u(161),U=u(12),L=u(32),N=a.X({encapsulation:2,styles:[],data:{}}),V=a.V("page-comments",x.a,function(l){return a._21(0,[(l()(),a.Z(0,0,null,null,1,"page-comments",[],null,null,null,e,N)),a.Y(1,49152,null,0,x.a,[_.a,U.a,L.c],null,null)],null,null)},{},{},[])},392:function(l,n,u){"use strict";function e(l){return a._21(0,[(l()(),a.Z(0,0,null,null,30,"ion-header",[["no-border-bottom",""]],null,null,null,null,null)),a.Y(1,16384,null,0,t.a,[i.a,a.j,a.z,[2,o.a]],null,null),(l()(),a._19(-1,null,["\n  "])),(l()(),a.Z(3,0,null,null,26,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,s.b,s.a)),a.Y(4,49152,null,0,r.a,[c.a,[2,o.a],[2,_.a],i.a,a.j,a.z],null,null),(l()(),a._19(-1,3,["\n    "])),(l()(),a.Z(6,0,null,0,8,"button",[["class","fakeCenter"],["ion-button",""],["menuToggle",""],["right",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==a._11(l,8).toggle()&&e}return e},d.b,d.a)),a.Y(7,1097728,[[1,4]],0,g.a,[[8,""],i.a,a.j,a.z],null,null),a.Y(8,1064960,null,0,m.a,[p.a,[2,o.a],[2,g.a],[2,r.a]],{menuToggle:[0,"menuToggle"]},null),a.Y(9,16384,null,1,h.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),a._17(603979776,1,{_buttons:1}),(l()(),a._19(-1,0,["\n        "])),(l()(),a.Z(12,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(13,147456,null,0,b.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._19(-1,0,["\n    "])),(l()(),a._19(-1,3,["\n      "])),(l()(),a.Z(16,0,null,3,2,"ion-title",[],null,null,null,v.b,v.a)),a.Y(17,49152,null,0,Y.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),(l()(),a._19(-1,0,["Economie"])),(l()(),a._19(-1,3,["\n        "])),(l()(),a.Z(20,0,null,0,8,"button",[["ion-button",""],["menuToggle",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==a._11(l,22).toggle()&&e}return e},d.b,d.a)),a.Y(21,1097728,[[2,4]],0,g.a,[[8,""],i.a,a.j,a.z],null,null),a.Y(22,1064960,null,0,m.a,[p.a,[2,o.a],[2,g.a],[2,r.a]],{menuToggle:[0,"menuToggle"]},null),a.Y(23,16384,null,1,h.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),a._17(603979776,2,{_buttons:1}),(l()(),a._19(-1,0,["\n            "])),(l()(),a.Z(26,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(27,147456,null,0,b.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._19(-1,0,["\n        "])),(l()(),a._19(-1,3,["\n    "])),(l()(),a._19(-1,null,["\n"])),(l()(),a._19(-1,null,["\n"]))],function(l,n){l(n,8,0,"");l(n,13,0,"menu");l(n,22,0,"");l(n,27,0,"menu")},function(l,n){l(n,3,0,a._11(n,4)._hidden,a._11(n,4)._sbPadding);l(n,6,0,a._11(n,8).isHidden);l(n,12,0,a._11(n,13)._hidden);l(n,20,0,a._11(n,22).isHidden);l(n,26,0,a._11(n,27)._hidden)})}u.d(n,"a",function(){return z});var a=u(0),t=u(34),i=u(3),o=u(6),s=u(37),r=u(25),c=u(8),_=u(17),d=u(20),g=u(15),m=u(33),p=u(21),h=u(35),f=u(28),b=u(22),v=u(42),Y=u(36),Z=u(163),k=u(12),j=a.X({encapsulation:2,styles:[],data:{}}),z=a.V("page-economie",Z.a,function(l){return a._21(0,[(l()(),a.Z(0,0,null,null,1,"page-economie",[],null,null,null,e,j)),a.Y(1,49152,null,0,Z.a,[_.a,k.a],null,null)],null,null)},{},{},[])},393:function(l,n,u){"use strict";function e(l){return y._21(0,[(l()(),y.Z(0,0,null,null,8,"button",[["ion-button",""],["menuToggle",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==y._11(l,2).toggle()&&e}return e},T.b,T.a)),y.Y(1,1097728,[[2,4]],0,I.a,[[8,""],w.a,y.j,y.z],null,null),y.Y(2,1064960,null,0,P.a,[A.a,[2,S.a],[2,I.a],[2,F.a]],{menuToggle:[0,"menuToggle"]},null),y.Y(3,16384,null,1,x.a,[w.a,y.j,y.z,[2,U.a],[2,F.a]],null,null),y._17(603979776,2,{_buttons:1}),(l()(),y._19(-1,0,["\n      "])),(l()(),y.Z(6,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),y.Y(7,147456,null,0,L.a,[w.a,y.j,y.z],{name:[0,"name"]},null),(l()(),y._19(-1,0,["\n    "]))],function(l,n){l(n,2,0,"");l(n,7,0,"menu")},function(l,n){l(n,0,0,y._11(n,2).isHidden);l(n,6,0,y._11(n,7)._hidden)})}function a(l){return y._21(0,[(l()(),y.Z(0,0,null,null,2,"ion-title",[],null,null,null,N.b,N.a)),y.Y(1,49152,null,0,V.a,[w.a,y.j,y.z,[2,U.a],[2,F.a]],null,null),(l()(),y._19(-1,0,["Home"]))],null,null)}function t(l){return y._21(0,[(l()(),y.Z(0,0,null,null,1,"ion-searchbar",[["class","slideInRight"],["placeholder","Waar zijn we naar op zoek?"]],[[2,"searchbar-animated",null],[2,"searchbar-has-value",null],[2,"searchbar-active",null],[2,"searchbar-show-cancel",null],[2,"searchbar-left-aligned",null],[2,"searchbar-has-focus",null]],[[null,"ionCancel"],[null,"ionInput"]],function(l,n,u){var e=!0,a=l.component;if("ionCancel"===n){e=!1!==a.resetChanges()&&e}if("ionInput"===n){e=!1!==a.search(u)&&e}return e},M.b,M.a)),y.Y(1,1294336,[[1,4],["searchbar",4]],0,D.a,[w.a,O.a,y.j,y.z,[2,E.k]],{showCancelButton:[0,"showCancelButton"],placeholder:[1,"placeholder"]},{ionInput:"ionInput",ionCancel:"ionCancel"})],function(l,n){l(n,1,0,!0,"Waar zijn we naar op zoek?")},function(l,n){l(n,0,0,y._11(n,1)._animated,y._11(n,1)._value,y._11(n,1)._isActive,y._11(n,1)._showCancelButton,y._11(n,1)._shouldAlignLeft,y._11(n,1)._isFocus)})}function i(l){return y._21(0,[(l()(),y.Z(0,0,null,null,1,"ion-icon",[["name","search"],["role","img"]],[[2,"hide",null]],null,null,null,null)),y.Y(1,147456,null,0,L.a,[w.a,y.j,y.z],{name:[0,"name"]},null)],function(l,n){l(n,1,0,"search")},function(l,n){l(n,0,0,y._11(n,1)._hidden)})}function o(l){return y._21(0,[(l()(),y.Z(0,0,null,null,0,"img",[["src","../assets/imgs/noimage.jpg"]],null,null,null,null,null))],null,null)}function s(l){return y._21(0,[(l()(),y.Z(0,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.image)})}function r(l){return y._21(0,[(l()(),y.Z(0,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.image)})}function c(l){return y._21(0,[(l()(),y.Z(0,0,null,null,11,"ion-fab",[["right",""]],null,null,null,R.b,R.a)),y.Y(1,1228800,null,2,H.a,[O.a],null,null),y._17(335544320,5,{_mainButton:0}),y._17(603979776,6,{_fabLists:1}),(l()(),y._19(-1,0,["\n                "])),(l()(),y.Z(5,0,null,0,5,"button",[["class","ColorTelegraaf2"],["ion-fab",""],["mini",""]],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.setHideArticle(l.parent.parent.context.$implicit.id)&&e}return e},B.b,B.a)),y.Y(6,49152,[[5,4]],0,$.a,[w.a,y.j,y.z],null,null),(l()(),y._19(-1,0,["\n                  "])),(l()(),y.Z(8,0,null,0,1,"ion-icon",[["name","eye-off"],["role","img"]],[[2,"hide",null]],null,null,null,null)),y.Y(9,147456,null,0,L.a,[w.a,y.j,y.z],{name:[0,"name"]},null),(l()(),y._19(-1,0,["\n                "])),(l()(),y._19(-1,0,["\n              "]))],function(l,n){l(n,9,0,"eye-off")},function(l,n){l(n,8,0,y._11(n,9)._hidden)})}function _(l){return y._21(0,[(l()(),y.Z(0,0,null,null,11,"ion-fab",[["right",""]],null,null,null,R.b,R.a)),y.Y(1,1228800,null,2,H.a,[O.a],null,null),y._17(335544320,7,{_mainButton:0}),y._17(603979776,8,{_fabLists:1}),(l()(),y._19(-1,0,["\n                "])),(l()(),y.Z(5,0,null,0,5,"button",[["class","ColorNOS2"],["ion-fab",""],["mini",""]],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.setHideArticle(l.parent.parent.context.$implicit.id)&&e}return e},B.b,B.a)),y.Y(6,49152,[[7,4]],0,$.a,[w.a,y.j,y.z],null,null),(l()(),y._19(-1,0,["\n                  "])),(l()(),y.Z(8,0,null,0,1,"ion-icon",[["name","eye-off"],["role","img"]],[[2,"hide",null]],null,null,null,null)),y.Y(9,147456,null,0,L.a,[w.a,y.j,y.z],{name:[0,"name"]},null),(l()(),y._19(-1,0,["\n                "])),(l()(),y._19(-1,0,["\n              "]))],function(l,n){l(n,9,0,"eye-off")},function(l,n){l(n,8,0,y._11(n,9)._hidden)})}function d(l){return y._21(0,[(l()(),y.Z(0,0,null,null,11,"ion-fab",[["right",""]],null,null,null,R.b,R.a)),y.Y(1,1228800,null,2,H.a,[O.a],null,null),y._17(335544320,9,{_mainButton:0}),y._17(603979776,10,{_fabLists:1}),(l()(),y._19(-1,0,["\n                "])),(l()(),y.Z(5,0,null,0,5,"button",[["class","ColorNU2"],["ion-fab",""],["mini",""]],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.setHideArticle(l.parent.parent.context.$implicit.id)&&e}return e},B.b,B.a)),y.Y(6,49152,[[9,4]],0,$.a,[w.a,y.j,y.z],null,null),(l()(),y._19(-1,0,["\n                  "])),(l()(),y.Z(8,0,null,0,1,"ion-icon",[["name","eye-off"],["role","img"]],[[2,"hide",null]],null,null,null,null)),y.Y(9,147456,null,0,L.a,[w.a,y.j,y.z],{name:[0,"name"]},null),(l()(),y._19(-1,0,["\n                "])),(l()(),y._19(-1,0,["\n              "]))],function(l,n){l(n,9,0,"eye-off")},function(l,n){l(n,8,0,y._11(n,9)._hidden)})}function g(l){return y._21(0,[(l()(),y.Z(0,0,null,null,10,"div",[],null,null,null,null,null)),(l()(),y._19(-1,null,["\n              "])),(l()(),y.U(16777216,null,null,1,null,c)),y.Y(3,16384,null,0,W.i,[y.I,y.F],{ngIf:[0,"ngIf"]},null),(l()(),y._19(-1,null,["\n              "])),(l()(),y.U(16777216,null,null,1,null,_)),y.Y(6,16384,null,0,W.i,[y.I,y.F],{ngIf:[0,"ngIf"]},null),(l()(),y._19(-1,null,["\n              "])),(l()(),y.U(16777216,null,null,1,null,d)),y.Y(9,16384,null,0,W.i,[y.I,y.F],{ngIf:[0,"ngIf"]},null),(l()(),y._19(-1,null,["\n            "]))],function(l,n){l(n,3,0,"De Telegraaf"==n.parent.context.$implicit.site);l(n,6,0,"NOS"==n.parent.context.$implicit.site);l(n,9,0,"NU.nl"==n.parent.context.$implicit.site)},null)}function m(l){return y._21(0,[(l()(),y.Z(0,0,null,null,5,"ion-card-title",[["class","TitleFeed"]],null,null,null,null,null)),y.Y(1,16384,null,0,q.a,[w.a,y.j,y.z],null,null),(l()(),y._19(-1,null,["\n                "])),(l()(),y.Z(3,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),y._19(4,null,["",""])),(l()(),y._19(-1,null,["\n              "]))],null,function(l,n){l(n,4,0,n.parent.context.$implicit.title)})}function p(l){return y._21(0,[(l()(),y.Z(0,0,null,null,5,"ion-card-title",[["class","editTitleFeed"]],null,null,null,null,null)),y.Y(1,16384,null,0,q.a,[w.a,y.j,y.z],null,null),(l()(),y._19(-1,null,["\n                "])),(l()(),y.Z(3,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),y._19(4,null,["",""])),(l()(),y._19(-1,null,["\n              "]))],null,function(l,n){l(n,4,0,n.parent.context.$implicit.title)})}function h(l){return y._21(0,[(l()(),y.Z(0,0,null,null,2,"p",[["class","descriptionFeed"]],null,null,null,null,null)),(l()(),y._19(1,null,["","..."])),y._13(0,W.r,[])],null,function(l,n){var u=n.component;l(n,1,0,y._20(n,1,0,y._11(n,2).transform(u.htmlToPlaintext(n.parent.context.$implicit.description),0,120)))})}function f(l){return y._21(0,[(l()(),y.Z(0,0,null,null,2,"p",[["class","editDescriptionFeed"]],null,null,null,null,null)),(l()(),y._19(1,null,["","..."])),y._13(0,W.r,[])],null,function(l,n){var u=n.component;l(n,1,0,y._20(n,1,0,y._11(n,2).transform(u.htmlToPlaintext(n.parent.context.$implicit.description),0,120)))})}function b(l){return y._21(0,[(l()(),y.Z(0,0,null,null,2,"ion-badge",[["class","ColorTelegraaf"],["item-end",""]],null,null,null,null,null)),y.Y(1,16384,null,0,X.a,[w.a,y.j,y.z],null,null),(l()(),y._19(2,null,["","\n            "]))],null,function(l,n){l(n,2,0,n.parent.context.$implicit.site)})}function v(l){return y._21(0,[(l()(),y.Z(0,0,null,null,2,"ion-badge",[["class","ColorNOS"],["item-end",""]],null,null,null,null,null)),y.Y(1,16384,null,0,X.a,[w.a,y.j,y.z],null,null),(l()(),y._19(2,null,["",""]))],null,function(l,n){l(n,2,0,n.parent.context.$implicit.site)})}function Y(l){return y._21(0,[(l()(),y.Z(0,0,null,null,2,"ion-badge",[["class","ColorNU"],["item-end",""]],null,null,null,null,null)),y.Y(1,16384,null,0,X.a,[w.a,y.j,y.z],null,null),(l()(),y._19(2,null,["",""]))],null,function(l,n){l(n,2,0,n.parent.context.$implicit.site)})}function Z(l){return y._21(0,[(l()(),y.Z(0,0,null,null,2,"ion-badge",[["class","ColorTelegraaf"],["item-end",""]],null,null,null,null,null)),y.Y(1,16384,null,0,X.a,[w.a,y.j,y.z],null,null),(l()(),y._19(2,null,["","\n            "]))],null,function(l,n){l(n,2,0,n.parent.context.$implicit.datum)})}function k(l){return y._21(0,[(l()(),y.Z(0,0,null,null,2,"ion-badge",[["class","ColorNOS"],["item-end",""]],null,null,null,null,null)),y.Y(1,16384,null,0,X.a,[w.a,y.j,y.z],null,null),(l()(),y._19(2,null,["",""]))],null,function(l,n){l(n,2,0,n.parent.context.$implicit.datum)})}function j(l){return y._21(0,[(l()(),y.Z(0,0,null,null,2,"ion-badge",[["class","ColorNU"],["item-end",""]],null,null,null,null,null)),y.Y(1,16384,null,0,X.a,[w.a,y.j,y.z],null,null),(l()(),y._19(2,null,["",""]))],null,function(l,n){l(n,2,0,n.parent.context.$implicit.datum)})}function z(l){return y._21(0,[(l()(),y.Z(0,0,null,null,112,"ion-col",[["class","col"],["col-lg-6",""],["col-md-6",""],["col-sm-6",""],["col-xl-6",""]],null,null,null,null,null)),y.Y(1,16384,null,0,K.a,[],null,null),(l()(),y._19(-1,null,["\n        "])),(l()(),y.Z(3,0,null,null,108,"ion-card",[],null,null,null,null,null)),y.Y(4,16384,null,0,G.a,[w.a,y.j,y.z],null,null),(l()(),y._19(-1,null,["\n          "])),(l()(),y.Z(6,0,null,null,10,"div",[["class","ion-card-image-wrapper"]],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.viewEntry({record:l.context.$implicit})&&e}return e},null,null)),(l()(),y._19(-1,null,["\n            "])),(l()(),y.U(16777216,null,null,1,null,o)),y.Y(9,16384,null,0,W.i,[y.I,y.F],{ngIf:[0,"ngIf"]},null),(l()(),y._19(-1,null,["\n            "])),(l()(),y.U(16777216,null,null,1,null,s)),y.Y(12,16384,null,0,W.i,[y.I,y.F],{ngIf:[0,"ngIf"]},null),(l()(),y._19(-1,null,["\n            "])),(l()(),y.U(16777216,null,null,1,null,r)),y.Y(15,16384,null,0,W.i,[y.I,y.F],{ngIf:[0,"ngIf"]},null),(l()(),y._19(-1,null,["\n          "])),(l()(),y._19(-1,null,["\n          "])),(l()(),y.Z(18,0,null,null,23,"ion-card-content",[],null,null,null,null,null)),y.Y(19,16384,null,0,J.a,[w.a,y.j,y.z],null,null),(l()(),y._19(-1,null,["\n            "])),(l()(),y.U(16777216,null,null,1,null,g)),y.Y(22,16384,null,0,W.i,[y.I,y.F],{ngIf:[0,"ngIf"]},null),(l()(),y._19(-1,null,["\n            "])),(l()(),y.Z(24,0,null,null,7,"div",[["id","title"]],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.viewEntry({record:l.context.$implicit})&&e}return e},null,null)),(l()(),y._19(-1,null,["\n              "])),(l()(),y.U(16777216,null,null,1,null,m)),y.Y(27,16384,null,0,W.i,[y.I,y.F],{ngIf:[0,"ngIf"]},null),(l()(),y._19(-1,null,["\n              "])),(l()(),y.U(16777216,null,null,1,null,p)),y.Y(30,16384,null,0,W.i,[y.I,y.F],{ngIf:[0,"ngIf"]},null),(l()(),y._19(-1,null,["\n            "])),(l()(),y._19(-1,null,["\n            "])),(l()(),y.Z(33,0,null,null,7,"div",[["id","description"]],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.viewEntry({record:l.context.$implicit})&&e}return e},null,null)),(l()(),y._19(-1,null,["\n              "])),(l()(),y.U(16777216,null,null,1,null,h)),y.Y(36,16384,null,0,W.i,[y.I,y.F],{ngIf:[0,"ngIf"]},null),(l()(),y._19(-1,null,["\n              "])),(l()(),y.U(16777216,null,null,1,null,f)),y.Y(39,16384,null,0,W.i,[y.I,y.F],{ngIf:[0,"ngIf"]},null),(l()(),y._19(-1,null,["\n            "])),(l()(),y._19(-1,null,["\n          "])),(l()(),y._19(-1,null,["\n          "])),(l()(),y.Z(43,0,null,null,18,"ion-item",[["class","itemBadge item item-block"]],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.viewEntry({record:l.context.$implicit})&&e}return e},Q.b,Q.a)),y.Y(44,1097728,null,3,ll.a,[nl.a,w.a,y.j,y.z,[2,ul.a]],null,null),y._17(335544320,11,{contentLabel:0}),y._17(603979776,12,{_buttons:1}),y._17(603979776,13,{_icons:1}),y.Y(48,16384,null,0,el.a,[],null,null),(l()(),y._19(-1,2,["\n            "])),(l()(),y.Z(50,0,null,0,1,"ion-icon",[["item-start",""],["name","contact"],["role","img"]],[[2,"hide",null]],null,null,null,null)),y.Y(51,147456,[[13,4]],0,L.a,[w.a,y.j,y.z],{name:[0,"name"]},null),(l()(),y._19(-1,2,["\n            "])),(l()(),y.U(16777216,null,4,1,null,b)),y.Y(54,16384,null,0,W.i,[y.I,y.F],{ngIf:[0,"ngIf"]},null),(l()(),y._19(-1,2,["\n            "])),(l()(),y.U(16777216,null,4,1,null,v)),y.Y(57,16384,null,0,W.i,[y.I,y.F],{ngIf:[0,"ngIf"]},null),(l()(),y._19(-1,2,["\n            "])),(l()(),y.U(16777216,null,4,1,null,Y)),y.Y(60,16384,null,0,W.i,[y.I,y.F],{ngIf:[0,"ngIf"]},null),(l()(),y._19(-1,2,["\n          "])),(l()(),y._19(-1,null,["\n          "])),(l()(),y.Z(63,0,null,null,18,"ion-item",[["class","itemBadge item item-block"]],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.viewEntry({record:l.context.$implicit})&&e}return e},Q.b,Q.a)),y.Y(64,1097728,null,3,ll.a,[nl.a,w.a,y.j,y.z,[2,ul.a]],null,null),y._17(335544320,14,{contentLabel:0}),y._17(603979776,15,{_buttons:1}),y._17(603979776,16,{_icons:1}),y.Y(68,16384,null,0,el.a,[],null,null),(l()(),y._19(-1,2,["\n            "])),(l()(),y.Z(70,0,null,0,1,"ion-icon",[["item-start",""],["name","time"],["role","img"]],[[2,"hide",null]],null,null,null,null)),y.Y(71,147456,[[16,4]],0,L.a,[w.a,y.j,y.z],{name:[0,"name"]},null),(l()(),y._19(-1,2,["\n            "])),(l()(),y.U(16777216,null,4,1,null,Z)),y.Y(74,16384,null,0,W.i,[y.I,y.F],{ngIf:[0,"ngIf"]},null),(l()(),y._19(-1,2,["\n            "])),(l()(),y.U(16777216,null,4,1,null,k)),y.Y(77,16384,null,0,W.i,[y.I,y.F],{ngIf:[0,"ngIf"]},null),(l()(),y._19(-1,2,["\n            "])),(l()(),y.U(16777216,null,4,1,null,j)),y.Y(80,16384,null,0,W.i,[y.I,y.F],{ngIf:[0,"ngIf"]},null),(l()(),y._19(-1,2,["\n          "])),(l()(),y._19(-1,null,["\n          "])),(l()(),y.Z(83,0,null,null,27,"div",[["class","socialLikeComments"],["id","socialLikeComments"]],null,null,null,null,null)),(l()(),y._19(-1,null,["\n            "])),(l()(),y.Z(85,0,null,null,24,"ion-segment",[["color","lightAppKleur"]],[[2,"segment-disabled",null]],null,null,null,null)),y.Y(86,1196032,null,1,al.a,[w.a,y.j,y.z,[2,E.k]],{color:[0,"color"]},null),y._17(603979776,17,{_buttons:1}),(l()(),y._19(-1,null,["\n              "])),(l()(),y.Z(89,0,null,null,5,"ion-segment-button",[["class","segment-button"],["role","button"],["tappable",""],["value","likes"]],[[2,"segment-button-disabled",null],[2,"segment-activated",null],[1,"aria-pressed",0]],[[null,"click"]],function(l,n,u){var e=!0,a=l.component;if("click"===n){e=!1!==y._11(l,90).onClick()&&e}if("click"===n){e=!1!==a.kaas()&&e}return e},tl.b,tl.a)),y.Y(90,114688,[[17,4]],0,il.a,[],{value:[0,"value"]},null),(l()(),y._19(-1,0,["\n                "])),(l()(),y.Z(92,0,null,0,1,"ion-icon",[["name","heart"],["role","img"]],[[2,"hide",null]],null,null,null,null)),y.Y(93,147456,null,0,L.a,[w.a,y.j,y.z],{name:[0,"name"]},null),(l()(),y._19(-1,0,["\n              "])),(l()(),y._19(-1,null,["\n              "])),(l()(),y.Z(96,0,null,null,5,"ion-segment-button",[["class","segment-button"],["role","button"],["tappable",""],["value","comment"]],[[2,"segment-button-disabled",null],[2,"segment-activated",null],[1,"aria-pressed",0]],[[null,"click"]],function(l,n,u){var e=!0,a=l.component;if("click"===n){e=!1!==y._11(l,97).onClick()&&e}if("click"===n){e=!1!==a.goComments()&&e}return e},tl.b,tl.a)),y.Y(97,114688,[[17,4]],0,il.a,[],{value:[0,"value"]},null),(l()(),y._19(-1,0,["\n                "])),(l()(),y.Z(99,0,null,0,1,"ion-icon",[["name","text"],["role","img"]],[[2,"hide",null]],null,null,null,null)),y.Y(100,147456,null,0,L.a,[w.a,y.j,y.z],{name:[0,"name"]},null),(l()(),y._19(-1,0,["\n              "])),(l()(),y._19(-1,null,["\n              "])),(l()(),y.Z(103,0,null,null,5,"ion-segment-button",[["class","segment-button"],["role","button"],["tappable",""],["value","share"]],[[2,"segment-button-disabled",null],[2,"segment-activated",null],[1,"aria-pressed",0]],[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==y._11(l,104).onClick()&&e}return e},tl.b,tl.a)),y.Y(104,114688,[[17,4]],0,il.a,[],{value:[0,"value"]},null),(l()(),y._19(-1,0,["\n                "])),(l()(),y.Z(106,0,null,0,1,"ion-icon",[["name","share"],["role","img"]],[[2,"hide",null]],null,null,null,null)),y.Y(107,147456,null,0,L.a,[w.a,y.j,y.z],{name:[0,"name"]},null),(l()(),y._19(-1,0,["\n              "])),(l()(),y._19(-1,null,["\n            "])),(l()(),y._19(-1,null,["\n          "])),(l()(),y._19(-1,null,["\n        "])),(l()(),y._19(-1,null,["\n      "]))],function(l,n){var u=n.component;l(n,9,0,!n.context.$implicit.image);l(n,12,0,"NOS.nl"==n.context.$implicit.site);l(n,15,0,"NOS.nl"!=n.context.$implicit.site||"NU.nl"!=n.context.$implicit.site);l(n,22,0,1==u.rol);l(n,27,0,1!=u.rol);l(n,30,0,1==u.rol);l(n,36,0,1!=u.rol);l(n,39,0,1==u.rol);l(n,51,0,"contact");l(n,54,0,"De Telegraaf"==n.context.$implicit.site);l(n,57,0,"NOS"==n.context.$implicit.site);l(n,60,0,"NU.nl"==n.context.$implicit.site);l(n,71,0,"time");l(n,74,0,"De Telegraaf"==n.context.$implicit.site);l(n,77,0,"NOS"==n.context.$implicit.site);l(n,80,0,"NU.nl"==n.context.$implicit.site);l(n,86,0,"lightAppKleur");l(n,90,0,"likes");l(n,93,0,"heart");l(n,97,0,"comment");l(n,100,0,"text");l(n,104,0,"share");l(n,107,0,"share")},function(l,n){l(n,50,0,y._11(n,51)._hidden);l(n,70,0,y._11(n,71)._hidden);l(n,85,0,y._11(n,86)._disabled);l(n,89,0,y._11(n,90)._disabled,y._11(n,90).isActive,y._11(n,90).isActive);l(n,92,0,y._11(n,93)._hidden);l(n,96,0,y._11(n,97)._disabled,y._11(n,97).isActive,y._11(n,97).isActive);l(n,99,0,y._11(n,100)._hidden);l(n,103,0,y._11(n,104)._disabled,y._11(n,104).isActive,y._11(n,104).isActive);l(n,106,0,y._11(n,107)._hidden)})}function C(l){return y._21(0,[y._17(671088640,1,{searchbar:0}),(l()(),y.Z(1,0,null,null,47,"ion-header",[],null,null,null,null,null)),y.Y(2,16384,null,0,ol.a,[w.a,y.j,y.z,[2,S.a]],null,null),(l()(),y._19(-1,null,["\n  "])),(l()(),y.Z(4,0,null,null,23,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,sl.b,sl.a)),y.Y(5,49152,null,0,F.a,[rl.a,[2,S.a],[2,cl.a],w.a,y.j,y.z],null,null),(l()(),y._19(-1,3,["\n    "])),(l()(),y.U(16777216,null,0,1,null,e)),y.Y(8,16384,null,0,W.i,[y.I,y.F],{ngIf:[0,"ngIf"]},null),(l()(),y._19(-1,3,["\n    "])),(l()(),y.U(16777216,null,3,1,null,a)),y.Y(11,16384,null,0,W.i,[y.I,y.F],{ngIf:[0,"ngIf"]},null),(l()(),y._19(-1,3,["\n    "])),(l()(),y.U(16777216,null,3,1,null,t)),y.Y(14,16384,null,0,W.i,[y.I,y.F],{ngIf:[0,"ngIf"]},null),(l()(),y._19(-1,3,["\n    "])),(l()(),y.Z(16,0,null,2,10,"ion-buttons",[["end",""]],null,null,null,null,null)),y.Y(17,16384,null,1,x.a,[w.a,y.j,y.z,[2,U.a],[2,F.a]],null,null),y._17(603979776,3,{_buttons:1}),(l()(),y._19(-1,null,["\n      "])),(l()(),y.Z(20,0,null,null,5,"button",[["icon-only",""],["ion-button",""]],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!=(l.component.isSearchbaropened=!0)&&e}return e},T.b,T.a)),y.Y(21,1097728,[[3,4]],0,I.a,[[8,""],w.a,y.j,y.z],null,null),(l()(),y._19(-1,0,["\n        "])),(l()(),y.U(16777216,null,0,1,null,i)),y.Y(24,16384,null,0,W.i,[y.I,y.F],{ngIf:[0,"ngIf"]},null),(l()(),y._19(-1,0,["\n      "])),(l()(),y._19(-1,null,["\n    "])),(l()(),y._19(-1,3,["\n  "])),(l()(),y._19(-1,null,["\n  "])),(l()(),y.Z(29,0,null,null,18,"ion-segment",[["color","lightAppKleur"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"segment-disabled",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0;if("ngModelChange"===n){e=!1!==(l.component.datepicker=u)&&e}return e},null,null)),y.Y(30,671744,null,0,E.n,[[8,null],[8,null],[8,null],[8,null]],{model:[0,"model"]},{update:"ngModelChange"}),y._15(2048,null,E.k,null,[E.n]),y.Y(32,16384,null,0,E.l,[E.k],null,null),y.Y(33,1196032,null,1,al.a,[w.a,y.j,y.z,[2,E.k]],{color:[0,"color"]},null),y._17(603979776,4,{_buttons:1}),(l()(),y._19(-1,null,["\n    "])),(l()(),y.Z(36,0,null,null,2,"ion-segment-button",[["class","segment-button"],["role","button"],["tappable",""],["value","vandaag"]],[[2,"segment-button-disabled",null],[2,"segment-activated",null],[1,"aria-pressed",0]],[[null,"click"]],function(l,n,u){var e=!0,a=l.component;if("click"===n){e=!1!==y._11(l,37).onClick()&&e}if("click"===n){e=!1!==a.load()&&e}return e},tl.b,tl.a)),y.Y(37,114688,[[4,4]],0,il.a,[],{value:[0,"value"]},null),(l()(),y._19(-1,0,["\n      Vandaag\n    "])),(l()(),y._19(-1,null,["\n    "])),(l()(),y.Z(40,0,null,null,2,"ion-segment-button",[["class","segment-button"],["role","button"],["tappable",""],["value","gisteren"]],[[2,"segment-button-disabled",null],[2,"segment-activated",null],[1,"aria-pressed",0]],[[null,"click"]],function(l,n,u){var e=!0,a=l.component;if("click"===n){e=!1!==y._11(l,41).onClick()&&e}if("click"===n){e=!1!==a.loadYesterday()&&e}return e},tl.b,tl.a)),y.Y(41,114688,[[4,4]],0,il.a,[],{value:[0,"value"]},null),(l()(),y._19(-1,0,["\n      Gisteren\n    "])),(l()(),y._19(-1,null,["\n    "])),(l()(),y.Z(44,0,null,null,2,"ion-segment-button",[["class","segment-button"],["role","button"],["tappable",""],["value","driedagengeleden"]],[[2,"segment-button-disabled",null],[2,"segment-activated",null],[1,"aria-pressed",0]],[[null,"click"]],function(l,n,u){var e=!0,a=l.component;if("click"===n){e=!1!==y._11(l,45).onClick()&&e}if("click"===n){e=!1!==a.load3DaysAgo()&&e}return e},tl.b,tl.a)),y.Y(45,114688,[[4,4]],0,il.a,[],{value:[0,"value"]},null),(l()(),y._19(-1,0,["\n      3 dagen geleden\n    "])),(l()(),y._19(-1,null,["\n  "])),(l()(),y._19(-1,null,["\n"])),(l()(),y._19(-1,null,["\n"])),(l()(),y.Z(50,0,null,null,27,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,_l.b,_l.a)),y.Y(51,4374528,null,0,dl.a,[w.a,O.a,gl.a,y.j,y.z,rl.a,ml.a,y.u,[2,S.a],[2,cl.a]],null,null),(l()(),y._19(-1,1,["\n  "])),(l()(),y.Z(53,0,null,2,5,"ion-refresher",[],[[2,"refresher-active",null],[4,"top",null]],[[null,"ionRefresh"]],function(l,n,u){var e=!0;if("ionRefresh"===n){e=!1!==l.component.doRefresh(u)&&e}return e},null,null)),y.Y(54,212992,null,0,pl.a,[O.a,dl.a,y.u,hl.l],null,{ionRefresh:"ionRefresh"}),(l()(),y._19(-1,null,["\n    "])),(l()(),y.Z(56,0,null,null,1,"ion-refresher-content",[],[[1,"state",0]],null,null,fl.b,fl.a)),y.Y(57,114688,null,0,bl.a,[pl.a,w.a],null,null),(l()(),y._19(-1,null,["\n  "])),(l()(),y._19(-1,1,["\n  "])),(l()(),y.Z(60,0,null,1,9,"ion-grid",[["class","grid"]],null,null,null,null,null)),y.Y(61,16384,null,0,vl.a,[],null,null),(l()(),y._19(-1,null,["\n    "])),(l()(),y.Z(63,0,null,null,5,"ion-row",[["class","row"]],null,null,null,null,null)),y.Y(64,16384,null,0,Yl.a,[],null,null),(l()(),y._19(-1,null,["\n      "])),(l()(),y.U(16777216,null,null,1,null,z)),y.Y(67,802816,null,0,W.h,[y.I,y.F,y.p],{ngForOf:[0,"ngForOf"]},null),(l()(),y._19(-1,null,["\n    "])),(l()(),y._19(-1,null,["\n  "])),(l()(),y._19(-1,1,["\n  "])),(l()(),y.Z(71,0,null,1,5,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],function(l,n,u){var e=!0;if("ionInfinite"===n){e=!1!==l.component.doInfinite(u)&&e}return e},null,null)),y.Y(72,1196032,null,0,Zl.a,[dl.a,y.u,y.j,gl.a],null,{ionInfinite:"ionInfinite"}),(l()(),y._19(-1,null,["\n    "])),(l()(),y.Z(74,0,null,null,1,"ion-infinite-scroll-content",[],[[1,"state",0]],null,null,kl.b,kl.a)),y.Y(75,114688,null,0,jl.a,[Zl.a,w.a],null,null),(l()(),y._19(-1,null,["\n  "])),(l()(),y._19(-1,1,["\n"])),(l()(),y._19(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,8,0,!u.isSearchbaropened);l(n,11,0,!u.isSearchbaropened);l(n,14,0,u.isSearchbaropened);l(n,24,0,!u.isSearchbaropened);l(n,30,0,u.datepicker);l(n,33,0,"lightAppKleur");l(n,37,0,"vandaag");l(n,41,0,"gisteren");l(n,45,0,"driedagengeleden"),l(n,54,0),l(n,57,0);l(n,67,0,u.items),l(n,75,0)},function(l,n){l(n,4,0,y._11(n,5)._hidden,y._11(n,5)._sbPadding);l(n,29,0,y._11(n,32).ngClassUntouched,y._11(n,32).ngClassTouched,y._11(n,32).ngClassPristine,y._11(n,32).ngClassDirty,y._11(n,32).ngClassValid,y._11(n,32).ngClassInvalid,y._11(n,32).ngClassPending,y._11(n,33)._disabled);l(n,36,0,y._11(n,37)._disabled,y._11(n,37).isActive,y._11(n,37).isActive);l(n,40,0,y._11(n,41)._disabled,y._11(n,41).isActive,y._11(n,41).isActive);l(n,44,0,y._11(n,45)._disabled,y._11(n,45).isActive,y._11(n,45).isActive);l(n,50,0,y._11(n,51).statusbarPadding,y._11(n,51)._hasRefresher);l(n,53,0,"inactive"!==y._11(n,54).state,y._11(n,54)._top);l(n,56,0,y._11(n,57).r.state);l(n,74,0,y._11(n,75).inf.state)})}u.d(n,"a",function(){return Al});var y=u(0),T=u(20),I=u(15),w=u(3),P=u(33),A=u(21),S=u(6),F=u(25),x=u(35),U=u(28),L=u(22),N=u(42),V=u(36),M=u(277),D=u(99),O=u(5),E=u(19),R=u(410),H=u(128),B=u(411),$=u(80),W=u(18),q=u(125),X=u(124),K=u(69),G=u(79),J=u(92),Q=u(52),ll=u(26),nl=u(23),ul=u(45),el=u(46),al=u(100),tl=u(205),il=u(73),ol=u(34),sl=u(37),rl=u(8),cl=u(17),_l=u(47),dl=u(27),gl=u(10),ml=u(30),pl=u(98),hl=u(11),fl=u(412),bl=u(139),vl=u(70),Yl=u(71),Zl=u(95),kl=u(413),jl=u(129),zl=u(111),Cl=u(12),yl=u(32),Tl=u(141),Il=u(84),wl=u(81),Pl=y.X({encapsulation:2,styles:[],data:{}}),Al=y.V("page-feed",zl.a,function(l){return y._21(0,[(l()(),y.Z(0,0,null,null,1,"page-feed",[],null,null,null,C,Pl)),y.Y(1,49152,null,0,zl.a,[cl.a,Cl.a,A.a,yl.c,Tl.a,Il.a,wl.a,O.a],null,null)],null,null)},{},{},[])},394:function(l,n,u){"use strict";function e(l){return a._21(0,[(l()(),a.Z(0,0,null,null,30,"ion-header",[["no-border-bottom",""]],null,null,null,null,null)),a.Y(1,16384,null,0,t.a,[i.a,a.j,a.z,[2,o.a]],null,null),(l()(),a._19(-1,null,["\n  "])),(l()(),a.Z(3,0,null,null,26,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,s.b,s.a)),a.Y(4,49152,null,0,r.a,[c.a,[2,o.a],[2,_.a],i.a,a.j,a.z],null,null),(l()(),a._19(-1,3,["\n    "])),(l()(),a.Z(6,0,null,0,8,"button",[["class","fakeCenter"],["ion-button",""],["menuToggle",""],["right",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==a._11(l,8).toggle()&&e}return e},d.b,d.a)),a.Y(7,1097728,[[1,4]],0,g.a,[[8,""],i.a,a.j,a.z],null,null),a.Y(8,1064960,null,0,m.a,[p.a,[2,o.a],[2,g.a],[2,r.a]],{menuToggle:[0,"menuToggle"]},null),a.Y(9,16384,null,1,h.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),a._17(603979776,1,{_buttons:1}),(l()(),a._19(-1,0,["\n        "])),(l()(),a.Z(12,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(13,147456,null,0,b.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._19(-1,0,["\n    "])),(l()(),a._19(-1,3,["\n      "])),(l()(),a.Z(16,0,null,3,2,"ion-title",[],null,null,null,v.b,v.a)),a.Y(17,49152,null,0,Y.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),(l()(),a._19(-1,0,["Misdaad"])),(l()(),a._19(-1,3,["\n        "])),(l()(),a.Z(20,0,null,0,8,"button",[["ion-button",""],["menuToggle",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==a._11(l,22).toggle()&&e}return e},d.b,d.a)),a.Y(21,1097728,[[2,4]],0,g.a,[[8,""],i.a,a.j,a.z],null,null),a.Y(22,1064960,null,0,m.a,[p.a,[2,o.a],[2,g.a],[2,r.a]],{menuToggle:[0,"menuToggle"]},null),a.Y(23,16384,null,1,h.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),a._17(603979776,2,{_buttons:1}),(l()(),a._19(-1,0,["\n            "])),(l()(),a.Z(26,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(27,147456,null,0,b.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._19(-1,0,["\n        "])),(l()(),a._19(-1,3,["\n    "])),(l()(),a._19(-1,null,["\n"])),(l()(),a._19(-1,null,["\n"]))],function(l,n){l(n,8,0,"");l(n,13,0,"menu");l(n,22,0,"");l(n,27,0,"menu")},function(l,n){l(n,3,0,a._11(n,4)._hidden,a._11(n,4)._sbPadding);l(n,6,0,a._11(n,8).isHidden);l(n,12,0,a._11(n,13)._hidden);l(n,20,0,a._11(n,22).isHidden);l(n,26,0,a._11(n,27)._hidden)})}u.d(n,"a",function(){return z});var a=u(0),t=u(34),i=u(3),o=u(6),s=u(37),r=u(25),c=u(8),_=u(17),d=u(20),g=u(15),m=u(33),p=u(21),h=u(35),f=u(28),b=u(22),v=u(42),Y=u(36),Z=u(164),k=u(12),j=a.X({encapsulation:2,styles:[],data:{}}),z=a.V("page-misdaad",Z.a,function(l){return a._21(0,[(l()(),a.Z(0,0,null,null,1,"page-misdaad",[],null,null,null,e,j)),a.Y(1,49152,null,0,Z.a,[_.a,k.a],null,null)],null,null)},{},{},[])},395:function(l,n,u){"use strict";function e(l){return s._21(0,[(l()(),s.Z(0,0,null,null,0,"img",[["src","../assets/imgs/noimage.jpg"]],null,null,null,null,null))],null,null)}function a(l){return s._21(0,[(l()(),s.Z(0,0,null,null,2,"button",[["class","ColorTelegraaf"],["ion-button",""],["round",""]],null,[[null,"click"]],function(l,n,u){var e=!0,a=l.component;if("click"===n){e=!1!==a.openPagina(a.link)&&e}return e},r.b,r.a)),s.Y(1,1097728,null,0,c.a,[[8,""],_.a,s.j,s.z],{round:[0,"round"]},null),(l()(),s._19(2,0,["",""]))],function(l,n){l(n,1,0,"")},function(l,n){l(n,2,0,n.component.site)})}function t(l){return s._21(0,[(l()(),s.Z(0,0,null,null,2,"button",[["class","ColorNOS"],["ion-button",""],["round",""]],null,[[null,"click"]],function(l,n,u){var e=!0,a=l.component;if("click"===n){e=!1!==a.openPagina(a.link)&&e}return e},r.b,r.a)),s.Y(1,1097728,null,0,c.a,[[8,""],_.a,s.j,s.z],{round:[0,"round"]},null),(l()(),s._19(2,0,["",""]))],function(l,n){l(n,1,0,"")},function(l,n){l(n,2,0,n.component.site)})}function i(l){return s._21(0,[(l()(),s.Z(0,0,null,null,2,"button",[["class","ColorNU"],["ion-button",""],["round",""]],null,[[null,"click"]],function(l,n,u){var e=!0,a=l.component;if("click"===n){e=!1!==a.openPagina(a.link)&&e}return e},r.b,r.a)),s.Y(1,1097728,null,0,c.a,[[8,""],_.a,s.j,s.z],{round:[0,"round"]},null),(l()(),s._19(2,0,["",""]))],function(l,n){l(n,1,0,"")},function(l,n){l(n,2,0,n.component.site)})}function o(l){return s._21(0,[(l()(),s.Z(0,0,null,null,8,"ion-header",[],null,null,null,null,null)),s.Y(1,16384,null,0,d.a,[_.a,s.j,s.z,[2,g.a]],null,null),(l()(),s._19(-1,null,["\n  "])),(l()(),s.Z(3,0,null,null,0,"meta",[["charset","UTF-8"]],null,null,null,null,null)),(l()(),s._19(-1,null,["\n  "])),(l()(),s.Z(5,0,null,null,2,"ion-navbar",[["class","nieuwsNavTitle toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,m.b,m.a)),s.Y(6,49152,null,0,p.a,[h.a,[2,g.a],[2,f.a],_.a,s.j,s.z],null,null),(l()(),s._19(7,3,["",""])),(l()(),s._19(-1,null,["\n"])),(l()(),s._19(-1,null,["\n"])),(l()(),s.Z(10,0,null,null,34,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,b.b,b.a)),s.Y(11,4374528,null,0,v.a,[_.a,Y.a,Z.a,s.j,s.z,h.a,k.a,s.u,[2,g.a],[2,f.a]],null,null),(l()(),s._19(-1,1,["\n  "])),(l()(),s.Z(13,0,null,1,30,"ion-card",[["class","nieuwsCard"]],null,null,null,null,null)),s.Y(14,16384,null,0,j.a,[_.a,s.j,s.z],null,null),(l()(),s._19(-1,null,["\n    "])),(l()(),s.U(16777216,null,null,1,null,e)),s.Y(17,16384,null,0,z.i,[s.I,s.F],{ngIf:[0,"ngIf"]},null),(l()(),s._19(-1,null,["\n    "])),(l()(),s.Z(19,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),s._19(-1,null,["\n    "])),(l()(),s.Z(21,0,null,null,5,"ion-card-header",[["class","headerText"],["text-wrap",""]],null,null,null,null,null)),s.Y(22,16384,null,0,C.a,[_.a,s.j,s.z],null,null),(l()(),s._19(23,null,["\n      ","\n      "])),(l()(),s.Z(24,0,null,null,1,"p",[["class","nieuwsDatum"]],null,null,null,null,null)),(l()(),s._19(25,null,["",""])),(l()(),s._19(-1,null,["\n    "])),(l()(),s._19(-1,null,["\n\n    "])),(l()(),s.Z(28,0,null,null,14,"ion-card-content",[],null,null,null,null,null)),s.Y(29,16384,null,0,y.a,[_.a,s.j,s.z],null,null),(l()(),s._19(-1,null,["\n\n      "])),(l()(),s.Z(31,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s._19(32,null,["",""])),(l()(),s._19(-1,null,["\n\n\n      "])),(l()(),s.U(16777216,null,null,1,null,a)),s.Y(35,16384,null,0,z.i,[s.I,s.F],{ngIf:[0,"ngIf"]},null),(l()(),s._19(-1,null,["\n      "])),(l()(),s.U(16777216,null,null,1,null,t)),s.Y(38,16384,null,0,z.i,[s.I,s.F],{ngIf:[0,"ngIf"]},null),(l()(),s._19(-1,null,["\n      "])),(l()(),s.U(16777216,null,null,1,null,i)),s.Y(41,16384,null,0,z.i,[s.I,s.F],{ngIf:[0,"ngIf"]},null),(l()(),s._19(-1,null,["\n    "])),(l()(),s._19(-1,null,["\n  "])),(l()(),s._19(-1,1,["\n"])),(l()(),s._19(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,17,0,!u.image);l(n,35,0,"De Telegraaf"==u.site);l(n,38,0,"NOS"==u.site);l(n,41,0,"NU.nl"==u.site)},function(l,n){var u=n.component;l(n,5,0,s._11(n,6)._hidden,s._11(n,6)._sbPadding);l(n,7,0,u.title);l(n,10,0,s._11(n,11).statusbarPadding,s._11(n,11)._hasRefresher);l(n,19,0,s._2(1,"",u.image,""));l(n,23,0,u.title);l(n,25,0,u.datum);l(n,32,0,u.htmlToPlaintext(u.description))})}u.d(n,"a",function(){return A});var s=u(0),r=u(20),c=u(15),_=u(3),d=u(34),g=u(6),m=u(37),p=u(25),h=u(8),f=u(17),b=u(47),v=u(27),Y=u(5),Z=u(10),k=u(30),j=u(79),z=u(18),C=u(177),y=u(92),T=u(222),I=u(12),w=u(145),P=s.X({encapsulation:2,styles:[],data:{}}),A=s.V("page-nieuws",T.a,function(l){return s._21(0,[(l()(),s.Z(0,0,null,null,1,"page-nieuws",[],null,null,null,o,P)),s.Y(1,49152,null,0,T.a,[f.a,I.a,w.a],null,null)],null,null)},{},{},[])},396:function(l,n,u){"use strict";function e(l){return d._21(0,[(l()(),d.Z(0,0,null,null,0,"img",[["class","avatar-profiel"]],[[8,"src",4]],[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.presentActionSheet()&&e}return e},null,null))],null,function(l,n){l(n,0,0,d._2(1,"",n.component.myphoto,""))})}function a(l){return d._21(0,[(l()(),d.Z(0,0,null,null,1,"div",[["class","validatieText"]],null,null,null,null,null)),(l()(),d._19(-1,null,["Naam moet ingevuld zijn."]))],null,null)}function t(l){return d._21(0,[(l()(),d.Z(0,0,null,null,1,"div",[["class","validatieText"]],null,null,null,null,null)),(l()(),d._19(-1,null,["Ongeldige naam."]))],null,null)}function i(l){return d._21(0,[(l()(),d.Z(0,0,null,null,1,"div",[["class","validatieText"]],null,null,null,null,null)),(l()(),d._19(-1,null,["De minimale lengte zijn 3 letters."]))],null,null)}function o(l){return d._21(0,[(l()(),d.Z(0,0,null,null,10,"div",[["class","alert alert-danger"],["required",""]],null,null,null,null,null)),(l()(),d._19(-1,null,["\n            "])),(l()(),d.U(16777216,null,null,1,null,a)),d.Y(3,16384,null,0,g.i,[d.I,d.F],{ngIf:[0,"ngIf"]},null),(l()(),d._19(-1,null,["\n            "])),(l()(),d.U(16777216,null,null,1,null,t)),d.Y(6,16384,null,0,g.i,[d.I,d.F],{ngIf:[0,"ngIf"]},null),(l()(),d._19(-1,null,["\n            "])),(l()(),d.U(16777216,null,null,1,null,i)),d.Y(9,16384,null,0,g.i,[d.I,d.F],{ngIf:[0,"ngIf"]},null),(l()(),d._19(-1,null,["\n          "]))],function(l,n){var u=n.component;l(n,3,0,u.form.get("username").hasError("required"));l(n,6,0,u.form.get("username").hasError("pattern"));l(n,9,0,u.form.get("username").hasError("minLength"))},null)}function s(l){return d._21(0,[(l()(),d.Z(0,0,null,null,1,"div",[["class","validatieText"]],null,null,null,null,null)),(l()(),d._19(-1,null,["Email moet ingevuld zijn"]))],null,null)}function r(l){return d._21(0,[(l()(),d.Z(0,0,null,null,1,"div",[["class","validatieText"]],null,null,null,null,null)),(l()(),d._19(-1,null,["Ongeldige Email!"]))],null,null)}function c(l){return d._21(0,[(l()(),d.Z(0,0,null,null,7,"div",[["class","alert alert-danger"],["required",""]],null,null,null,null,null)),(l()(),d._19(-1,null,["\n            "])),(l()(),d.U(16777216,null,null,1,null,s)),d.Y(3,16384,null,0,g.i,[d.I,d.F],{ngIf:[0,"ngIf"]},null),(l()(),d._19(-1,null,["\n            "])),(l()(),d.U(16777216,null,null,1,null,r)),d.Y(6,16384,null,0,g.i,[d.I,d.F],{ngIf:[0,"ngIf"]},null),(l()(),d._19(-1,null,["\n          "]))],function(l,n){var u=n.component;l(n,3,0,u.form.get("email").hasError("required"));l(n,6,0,u.form.get("email").hasError("pattern"))},null)}function _(l){return d._21(0,[(l()(),d.Z(0,0,null,null,32,"ion-header",[],null,null,null,null,null)),d.Y(1,16384,null,0,m.a,[p.a,d.j,d.z,[2,h.a]],null,null),(l()(),d._19(-1,null,["\n  "])),(l()(),d.Z(3,0,null,null,28,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,f.b,f.a)),d.Y(4,49152,null,0,b.a,[v.a,[2,h.a],[2,Y.a],p.a,d.j,d.z],null,null),(l()(),d._19(-1,3,["\n    "])),(l()(),d.Z(6,0,null,0,8,"button",[["ion-button",""],["menuToggle",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==d._11(l,8).toggle()&&e}return e},Z.b,Z.a)),d.Y(7,1097728,[[1,4]],0,k.a,[[8,""],p.a,d.j,d.z],null,null),d.Y(8,1064960,null,0,j.a,[z.a,[2,h.a],[2,k.a],[2,b.a]],{menuToggle:[0,"menuToggle"]},null),d.Y(9,16384,null,1,C.a,[p.a,d.j,d.z,[2,y.a],[2,b.a]],null,null),d._17(603979776,1,{_buttons:1}),(l()(),d._19(-1,0,["\n      "])),(l()(),d.Z(12,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),d.Y(13,147456,null,0,T.a,[p.a,d.j,d.z],{name:[0,"name"]},null),(l()(),d._19(-1,0,["\n    "])),(l()(),d._19(-1,3,["\n    "])),(l()(),d.Z(16,0,null,3,2,"ion-title",[["class","profielPadding"]],null,null,null,I.b,I.a)),d.Y(17,49152,null,0,w.a,[p.a,d.j,d.z,[2,y.a],[2,b.a]],null,null),(l()(),d._19(-1,0,["Profiel"])),(l()(),d._19(-1,3,["\n    "])),(l()(),d.Z(20,0,null,2,10,"ion-buttons",[["end",""]],null,null,null,null,null)),d.Y(21,16384,null,1,C.a,[p.a,d.j,d.z,[2,y.a],[2,b.a]],null,null),d._17(603979776,2,{_buttons:1}),(l()(),d._19(-1,null,["\n      "])),(l()(),d.Z(24,0,null,null,5,"button",[["icon-only",""],["ion-button",""]],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.updateProfile()&&e}return e},Z.b,Z.a)),d.Y(25,1097728,[[2,4]],0,k.a,[[8,""],p.a,d.j,d.z],null,null),(l()(),d._19(-1,0,["\n        "])),(l()(),d.Z(27,0,null,0,1,"ion-icon",[["name","checkmark"],["role","img"]],[[2,"hide",null]],null,null,null,null)),d.Y(28,147456,null,0,T.a,[p.a,d.j,d.z],{name:[0,"name"]},null),(l()(),d._19(-1,0,["\n      "])),(l()(),d._19(-1,null,["\n    "])),(l()(),d._19(-1,3,["\n  "])),(l()(),d._19(-1,null,["\n"])),(l()(),d._19(-1,null,["\n"])),(l()(),d.Z(34,0,null,null,88,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,P.b,P.a)),d.Y(35,4374528,null,0,A.a,[p.a,S.a,F.a,d.j,d.z,v.a,x.a,d.u,[2,h.a],[2,Y.a]],null,null),(l()(),d._19(-1,1,["\n  "])),(l()(),d.Z(37,0,null,1,84,"ion-list",[],null,null,null,null,null)),d.Y(38,16384,null,0,U.a,[p.a,d.j,d.z,S.a,L.l,F.a],null,null),(l()(),d._19(-1,null,["\n    "])),(l()(),d.Z(40,0,null,null,80,"ion-grid",[["class","gridMenu grid"]],null,null,null,null,null)),d.Y(41,16384,null,0,N.a,[],null,null),(l()(),d._19(-1,null,["\n      "])),(l()(),d.Z(43,0,null,null,76,"ion-col",[["class","menuCol col"],["col-12",""]],null,null,null,null,null)),d.Y(44,16384,null,0,V.a,[],null,null),(l()(),d._19(-1,null,["\n        "])),(l()(),d.Z(46,0,null,null,10,"div",[["class","alignCenter"]],null,null,null,null,null)),(l()(),d._19(-1,null,["\n          "])),(l()(),d.U(16777216,null,null,1,null,e)),d.Y(49,16384,null,0,g.i,[d.I,d.F],{ngIf:[0,"ngIf"]},null),(l()(),d._19(-1,null,["\n          "])),(l()(),d.Z(51,0,null,null,4,"div",[["class","fotoWijzigen"]],null,null,null,null,null)),(l()(),d._19(-1,null,["\n            "])),(l()(),d.Z(53,0,null,null,1,"h5",[["class","fotoWijzigenProfiel"]],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.presentActionSheet()&&e}return e},null,null)),(l()(),d._19(-1,null,["Foto Wijzigen"])),(l()(),d._19(-1,null,["\n          "])),(l()(),d._19(-1,null,["\n        "])),(l()(),d._19(-1,null,["\n\n        "])),(l()(),d.Z(58,0,null,null,57,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0;if("submit"===n){e=!1!==d._11(l,60).onSubmit(u)&&e}if("reset"===n){e=!1!==d._11(l,60).onReset()&&e}return e},null,null)),d.Y(59,16384,null,0,M.r,[],null,null),d.Y(60,540672,null,0,M.h,[[8,null],[8,null]],{form:[0,"form"]},null),d._15(2048,null,M.b,null,[M.h]),d.Y(62,16384,null,0,M.m,[M.b],null,null),(l()(),d._19(-1,null,["\n          "])),(l()(),d.Z(64,0,null,null,21,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),d._19(-1,null,["\n            "])),(l()(),d.Z(66,0,null,null,18,"ion-item",[["class","item item-block"]],null,null,null,D.b,D.a)),d.Y(67,278528,null,0,g.g,[d.p,d.q,d.j,d.A],{ngClass:[0,"ngClass"]},null),d._14(68,{"ng-touched":0}),d.Y(69,1097728,null,3,O.a,[E.a,p.a,d.j,d.z,[2,R.a]],null,null),d._17(335544320,3,{contentLabel:0}),d._17(603979776,4,{_buttons:1}),d._17(603979776,5,{_icons:1}),d.Y(73,16384,null,0,H.a,[],null,null),(l()(),d._19(-1,2,[">\n              "])),(l()(),d.Z(75,0,null,1,2,"ion-label",[["floating",""]],null,null,null,null,null)),d.Y(76,16384,[[3,4]],0,B.a,[p.a,d.j,d.z,[8,""],[8,null],[8,null],[8,null]],null,null),(l()(),d._19(-1,null,["Gebruikersnaam"])),(l()(),d._19(-1,2,["\n              "])),(l()(),d.Z(79,0,null,3,4,"ion-input",[["class","form-control"],["formControlName","username"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,$.b,$.a)),d.Y(80,671744,null,0,M.f,[[3,M.b],[8,null],[8,null],[8,null]],{name:[0,"name"]},null),d._15(2048,null,M.k,null,[M.f]),d.Y(82,16384,null,0,M.l,[M.k],null,null),d.Y(83,5423104,null,0,W.a,[p.a,S.a,E.a,v.a,d.j,d.z,[2,A.a],[2,O.a],[2,M.k],F.a],{value:[0,"value"],type:[1,"type"],placeholder:[2,"placeholder"]},null),(l()(),d._19(-1,2,["\n            "])),(l()(),d._19(-1,null,["\n          "])),(l()(),d._19(-1,null,["\n          "])),(l()(),d.U(16777216,null,null,1,null,o)),d.Y(88,16384,null,0,g.i,[d.I,d.F],{ngIf:[0,"ngIf"]},null),(l()(),d._19(-1,null,["\n\n          "])),(l()(),d.Z(90,0,null,null,21,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),d._19(-1,null,["\n            "])),(l()(),d.Z(92,0,null,null,18,"ion-item",[["class","item item-block"]],null,null,null,D.b,D.a)),d.Y(93,278528,null,0,g.g,[d.p,d.q,d.j,d.A],{ngClass:[0,"ngClass"]},null),d._14(94,{"ng-touched":0}),d.Y(95,1097728,null,3,O.a,[E.a,p.a,d.j,d.z,[2,R.a]],null,null),d._17(335544320,6,{contentLabel:0}),d._17(603979776,7,{_buttons:1}),d._17(603979776,8,{_icons:1}),d.Y(99,16384,null,0,H.a,[],null,null),(l()(),d._19(-1,2,["\n              "])),(l()(),d.Z(101,0,null,1,2,"ion-label",[["floating",""]],null,null,null,null,null)),d.Y(102,16384,[[6,4]],0,B.a,[p.a,d.j,d.z,[8,""],[8,null],[8,null],[8,null]],null,null),(l()(),d._19(-1,null,["E-mail"])),(l()(),d._19(-1,2,["\n              "])),(l()(),d.Z(105,0,null,3,4,"ion-input",[["class","form-control"],["formControlName","email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,$.b,$.a)),d.Y(106,671744,null,0,M.f,[[3,M.b],[8,null],[8,null],[8,null]],{name:[0,"name"]},null),d._15(2048,null,M.k,null,[M.f]),d.Y(108,16384,null,0,M.l,[M.k],null,null),d.Y(109,5423104,null,0,W.a,[p.a,S.a,E.a,v.a,d.j,d.z,[2,A.a],[2,O.a],[2,M.k],F.a],{value:[0,"value"],type:[1,"type"],placeholder:[2,"placeholder"]},null),(l()(),d._19(-1,2,["\n            "])),(l()(),d._19(-1,null,["\n          "])),(l()(),d._19(-1,null,["\n          "])),(l()(),d.U(16777216,null,null,1,null,c)),d.Y(114,16384,null,0,g.i,[d.I,d.F],{ngIf:[0,"ngIf"]},null),(l()(),d._19(-1,null,["\n\n        "])),(l()(),d._19(-1,null,["\n        "])),(l()(),d.Z(117,0,null,null,1,"h6",[["class","wachtwoordWijzigen"]],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.wijzigWachtwoord()&&e}return e},null,null)),(l()(),d._19(-1,null,["Wijzig Wachtwoord"])),(l()(),d._19(-1,null,["\n      "])),(l()(),d._19(-1,null,["\n    "])),(l()(),d._19(-1,null,["\n  "])),(l()(),d._19(-1,1,["\n"])),(l()(),d._19(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,8,0,"");l(n,13,0,"menu");l(n,28,0,"checkmark");l(n,49,0,u.myphoto);l(n,60,0,u.form);l(n,67,0,l(n,68,0,u.form.get("username").touched));l(n,80,0,"username");l(n,83,0,d._2(1,"",u.username,""),"text",d._2(1,"",u.username,""));l(n,88,0,u.form.get("username").touched&&u.form.get("username").invalid);l(n,93,0,l(n,94,0,u.form.get("email").touched));l(n,106,0,"email");l(n,109,0,d._2(1,"",u.email,""),"email",d._2(1,"",u.email,""));l(n,114,0,u.form.get("email").touched&&u.form.get("email").invalid)},function(l,n){l(n,3,0,d._11(n,4)._hidden,d._11(n,4)._sbPadding);l(n,6,0,d._11(n,8).isHidden);l(n,12,0,d._11(n,13)._hidden);l(n,27,0,d._11(n,28)._hidden);l(n,34,0,d._11(n,35).statusbarPadding,d._11(n,35)._hasRefresher);l(n,58,0,d._11(n,62).ngClassUntouched,d._11(n,62).ngClassTouched,d._11(n,62).ngClassPristine,d._11(n,62).ngClassDirty,d._11(n,62).ngClassValid,d._11(n,62).ngClassInvalid,d._11(n,62).ngClassPending);l(n,79,0,d._11(n,82).ngClassUntouched,d._11(n,82).ngClassTouched,d._11(n,82).ngClassPristine,d._11(n,82).ngClassDirty,d._11(n,82).ngClassValid,d._11(n,82).ngClassInvalid,d._11(n,82).ngClassPending);l(n,105,0,d._11(n,108).ngClassUntouched,d._11(n,108).ngClassTouched,d._11(n,108).ngClassPristine,d._11(n,108).ngClassDirty,d._11(n,108).ngClassValid,d._11(n,108).ngClassInvalid,d._11(n,108).ngClassPending)})}u.d(n,"a",function(){return el});var d=u(0),g=u(18),m=u(34),p=u(3),h=u(6),f=u(37),b=u(25),v=u(8),Y=u(17),Z=u(20),k=u(15),j=u(33),z=u(21),C=u(35),y=u(28),T=u(22),I=u(42),w=u(36),P=u(47),A=u(27),S=u(5),F=u(10),x=u(30),U=u(62),L=u(11),N=u(70),V=u(69),M=u(19),D=u(52),O=u(26),E=u(23),R=u(45),H=u(46),B=u(56),$=u(144),W=u(72),q=u(166),X=u(12),K=u(68),G=u(154),J=u(155),Q=u(121),ll=u(32),nl=u(64),ul=d.X({encapsulation:2,styles:[],data:{}}),el=d.V("page-profiel",q.a,function(l){return d._21(0,[(l()(),d.Z(0,0,null,null,1,"page-profiel",[],null,null,null,_,ul)),d.Y(1,114688,null,0,q.a,[Y.a,X.a,K.a,G.a,J.a,Q.a,ll.c,nl.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[])},397:function(l,n,u){"use strict";function e(l){return m._21(0,[(l()(),m.Z(0,0,null,null,1,"div",[["class","validatieText"]],null,null,null,null,null)),(l()(),m._19(-1,null,["Naam moet ingevuld zijn."]))],null,null)}function a(l){return m._21(0,[(l()(),m.Z(0,0,null,null,1,"div",[["class","validatieText"]],null,null,null,null,null)),(l()(),m._19(-1,null,["Ongeldige naam."]))],null,null)}function t(l){return m._21(0,[(l()(),m.Z(0,0,null,null,7,"div",[["class","alert alert-danger"],["required",""]],null,null,null,null,null)),(l()(),m._19(-1,null,["\n                      "])),(l()(),m.U(16777216,null,null,1,null,e)),m.Y(3,16384,null,0,p.i,[m.I,m.F],{ngIf:[0,"ngIf"]},null),(l()(),m._19(-1,null,["\n                      "])),(l()(),m.U(16777216,null,null,1,null,a)),m.Y(6,16384,null,0,p.i,[m.I,m.F],{ngIf:[0,"ngIf"]},null),(l()(),m._19(-1,null,["\n                    "]))],function(l,n){var u=n.component;l(n,3,0,u.form.get("username").hasError("required"));l(n,6,0,u.form.get("username").hasError("pattern"))},null)}function i(l){return m._21(0,[(l()(),m.Z(0,0,null,null,1,"div",[["class","validatieText"]],null,null,null,null,null)),(l()(),m._19(-1,null,["Email moet ingevuld zijn"]))],null,null)}function o(l){return m._21(0,[(l()(),m.Z(0,0,null,null,1,"div",[["class","validatieText"]],null,null,null,null,null)),(l()(),m._19(-1,null,["Ongeldige Email!"]))],null,null)}function s(l){return m._21(0,[(l()(),m.Z(0,0,null,null,7,"div",[["class","alert alert-danger"],["required",""]],null,null,null,null,null)),(l()(),m._19(-1,null,["\n                      "])),(l()(),m.U(16777216,null,null,1,null,i)),m.Y(3,16384,null,0,p.i,[m.I,m.F],{ngIf:[0,"ngIf"]},null),(l()(),m._19(-1,null,["\n                      "])),(l()(),m.U(16777216,null,null,1,null,o)),m.Y(6,16384,null,0,p.i,[m.I,m.F],{ngIf:[0,"ngIf"]},null),(l()(),m._19(-1,null,["\n                    "]))],function(l,n){var u=n.component;l(n,3,0,u.form.get("email").hasError("required"));l(n,6,0,u.form.get("email").hasError("pattern"))},null)}function r(l){return m._21(0,[(l()(),m.Z(0,0,null,null,1,"div",[["class","validatieText"]],null,null,null,null,null)),(l()(),m._19(-1,null,["Wachtwoord moet ingevuld zijn"]))],null,null)}function c(l){return m._21(0,[(l()(),m.Z(0,0,null,null,1,"div",[["class","validatieText"]],null,null,null,null,null)),(l()(),m._19(-1,null,["Wachtwoord moet minimaal 8 tekens lang zijn"]))],null,null)}function _(l){return m._21(0,[(l()(),m.Z(0,0,null,null,1,"div",[["class","validatieText"]],null,null,null,null,null)),(l()(),m._19(-1,null,["Wachtwoord moet minstens een hoofdletter, een kleine letter en een cijfer bevatten"]))],null,null)}function d(l){return m._21(0,[(l()(),m.Z(0,0,null,null,10,"div",[["class","alert alert-danger"]],null,null,null,null,null)),(l()(),m._19(-1,null,["\n                      "])),(l()(),m.U(16777216,null,null,1,null,r)),m.Y(3,16384,null,0,p.i,[m.I,m.F],{ngIf:[0,"ngIf"]},null),(l()(),m._19(-1,null,["\n                      "])),(l()(),m.U(16777216,null,null,1,null,c)),m.Y(6,16384,null,0,p.i,[m.I,m.F],{ngIf:[0,"ngIf"]},null),(l()(),m._19(-1,null,["\n                      "])),(l()(),m.U(16777216,null,null,1,null,_)),m.Y(9,16384,null,0,p.i,[m.I,m.F],{ngIf:[0,"ngIf"]},null),(l()(),m._19(-1,null,["\n                    "]))],function(l,n){var u=n.component;l(n,3,0,u.form.get("password").hasError("required"));l(n,6,0,u.form.get("password").hasError("minLength"));l(n,9,0,u.form.get("password").hasError("pattern"))},null)}function g(l){return m._21(0,[(l()(),m.Z(0,0,null,null,120,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,h.b,h.a)),m.Y(1,4374528,null,0,f.a,[b.a,v.a,Y.a,m.j,m.z,Z.a,k.a,m.u,[2,j.a],[2,z.a]],null,null),(l()(),m._19(-1,1,["\n  "])),(l()(),m.Z(3,0,null,1,116,"ion-grid",[["class","gridPadding grid"],["style","height: 100%"]],null,null,null,null,null)),m.Y(4,16384,null,0,C.a,[],null,null),(l()(),m._19(-1,null,["\n    "])),(l()(),m.Z(6,0,null,null,112,"ion-row",[["align-items-center",""],["class","row"],["justify-content-center",""],["style","height: 100%"]],null,null,null,null,null)),m.Y(7,16384,null,0,y.a,[],null,null),(l()(),m._19(-1,null,["\n\n      "])),(l()(),m.Z(9,0,null,null,108,"ion-col",[["class","col"],["col-12",""]],null,null,null,null,null)),m.Y(10,16384,null,0,T.a,[],null,null),(l()(),m._19(-1,null,["\n        "])),(l()(),m.Z(12,0,null,null,7,"div",[["class","ValidatieText"]],null,null,null,null,null)),(l()(),m._19(-1,null,["\n          "])),(l()(),m.Z(14,0,null,null,1,"h2",[["class","WelkomText2"]],null,null,null,null,null)),(l()(),m._19(-1,null,["Meld je nu aan"])),(l()(),m._19(-1,null,["\n          "])),(l()(),m.Z(17,0,null,null,1,"p",[["class","gavederText"]],null,null,null,null,null)),(l()(),m._19(-1,null,["Maak een account aan om verder te gaan!"])),(l()(),m._19(-1,null,["\n        "])),(l()(),m._19(-1,null,["\n        "])),(l()(),m.Z(21,0,null,null,95,"div",[["class","ValidatieLogin"]],null,null,null,null,null)),(l()(),m._19(-1,null,["\n                  "])),(l()(),m.Z(23,0,null,null,83,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0;if("submit"===n){e=!1!==m._11(l,25).onSubmit(u)&&e}if("reset"===n){e=!1!==m._11(l,25).onReset()&&e}return e},null,null)),m.Y(24,16384,null,0,I.r,[],null,null),m.Y(25,540672,null,0,I.h,[[8,null],[8,null]],{form:[0,"form"]},null),m._15(2048,null,I.b,null,[I.h]),m.Y(27,16384,null,0,I.m,[I.b],null,null),(l()(),m._19(-1,null,["\n                    "])),(l()(),m.Z(29,0,null,null,21,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),m._19(-1,null,["\n                      "])),(l()(),m.Z(31,0,null,null,18,"ion-item",[["class","item item-block"]],null,null,null,w.b,w.a)),m.Y(32,278528,null,0,p.g,[m.p,m.q,m.j,m.A],{ngClass:[0,"ngClass"]},null),m._14(33,{"ng-touched":0}),m.Y(34,1097728,null,3,P.a,[A.a,b.a,m.j,m.z,[2,S.a]],null,null),m._17(335544320,1,{contentLabel:0}),m._17(603979776,2,{_buttons:1}),m._17(603979776,3,{_icons:1}),m.Y(38,16384,null,0,F.a,[],null,null),(l()(),m._19(-1,2,[">\n                        "])),(l()(),m.Z(40,0,null,1,2,"ion-label",[["floating",""]],null,null,null,null,null)),m.Y(41,16384,[[1,4]],0,x.a,[b.a,m.j,m.z,[8,""],[8,null],[8,null],[8,null]],null,null),(l()(),m._19(-1,null,["Gebruikersnaam"])),(l()(),m._19(-1,2,["\n                        "])),(l()(),m.Z(44,0,null,3,4,"ion-input",[["class","form-control"],["formControlName","username"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0;if("ngModelChange"===n){e=!1!==(l.component.username=u)&&e}return e},U.b,U.a)),m.Y(45,671744,null,0,I.f,[[3,I.b],[8,null],[8,null],[8,null]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),m._15(2048,null,I.k,null,[I.f]),m.Y(47,16384,null,0,I.l,[I.k],null,null),m.Y(48,5423104,null,0,L.a,[b.a,v.a,A.a,Z.a,m.j,m.z,[2,f.a],[2,P.a],[2,I.k],Y.a],{type:[0,"type"]},null),(l()(),m._19(-1,2,["\n                      "])),(l()(),m._19(-1,null,["\n                    "])),(l()(),m._19(-1,null,["\n                    "])),(l()(),m.U(16777216,null,null,1,null,t)),m.Y(53,16384,null,0,p.i,[m.I,m.F],{ngIf:[0,"ngIf"]},null),(l()(),m._19(-1,null,["\n\n                    "])),(l()(),m.Z(55,0,null,null,21,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),m._19(-1,null,["\n                      "])),(l()(),m.Z(57,0,null,null,18,"ion-item",[["class","item item-block"]],null,null,null,w.b,w.a)),m.Y(58,278528,null,0,p.g,[m.p,m.q,m.j,m.A],{ngClass:[0,"ngClass"]},null),m._14(59,{"ng-touched":0}),m.Y(60,1097728,null,3,P.a,[A.a,b.a,m.j,m.z,[2,S.a]],null,null),m._17(335544320,4,{contentLabel:0}),m._17(603979776,5,{_buttons:1}),m._17(603979776,6,{_icons:1}),m.Y(64,16384,null,0,F.a,[],null,null),(l()(),m._19(-1,2,["\n                        "])),(l()(),m.Z(66,0,null,1,2,"ion-label",[["floating",""]],null,null,null,null,null)),m.Y(67,16384,[[4,4]],0,x.a,[b.a,m.j,m.z,[8,""],[8,null],[8,null],[8,null]],null,null),(l()(),m._19(-1,null,["E-mail"])),(l()(),m._19(-1,2,["\n                        "])),(l()(),m.Z(70,0,null,3,4,"ion-input",[["class","form-control"],["formControlName","email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0;if("ngModelChange"===n){e=!1!==(l.component.email=u)&&e}return e},U.b,U.a)),m.Y(71,671744,null,0,I.f,[[3,I.b],[8,null],[8,null],[8,null]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),m._15(2048,null,I.k,null,[I.f]),m.Y(73,16384,null,0,I.l,[I.k],null,null),m.Y(74,5423104,null,0,L.a,[b.a,v.a,A.a,Z.a,m.j,m.z,[2,f.a],[2,P.a],[2,I.k],Y.a],{type:[0,"type"]},null),(l()(),m._19(-1,2,["\n                      "])),(l()(),m._19(-1,null,["\n                    "])),(l()(),m._19(-1,null,["\n                    "])),(l()(),m.U(16777216,null,null,1,null,s)),m.Y(79,16384,null,0,p.i,[m.I,m.F],{ngIf:[0,"ngIf"]},null),(l()(),m._19(-1,null,["\n\n                    "])),(l()(),m.Z(81,0,null,null,21,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),m._19(-1,null,["\n                      "])),(l()(),m.Z(83,0,null,null,18,"ion-item",[["class","item item-block"]],null,null,null,w.b,w.a)),m.Y(84,278528,null,0,p.g,[m.p,m.q,m.j,m.A],{ngClass:[0,"ngClass"]},null),m._14(85,{"ng-touched":0}),m.Y(86,1097728,null,3,P.a,[A.a,b.a,m.j,m.z,[2,S.a]],null,null),m._17(335544320,7,{contentLabel:0}),m._17(603979776,8,{_buttons:1}),m._17(603979776,9,{_icons:1}),m.Y(90,16384,null,0,F.a,[],null,null),(l()(),m._19(-1,2,["\n                        "])),(l()(),m.Z(92,0,null,1,2,"ion-label",[["floating",""]],null,null,null,null,null)),m.Y(93,16384,[[7,4]],0,x.a,[b.a,m.j,m.z,[8,""],[8,null],[8,null],[8,null]],null,null),(l()(),m._19(-1,null,["Wachtwoord"])),(l()(),m._19(-1,2,["\n                        "])),(l()(),m.Z(96,0,null,3,4,"ion-input",[["class","form-control"],["formControlName","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0;if("ngModelChange"===n){e=!1!==(l.component.password=u)&&e}return e},U.b,U.a)),m.Y(97,671744,null,0,I.f,[[3,I.b],[8,null],[8,null],[8,null]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),m._15(2048,null,I.k,null,[I.f]),m.Y(99,16384,null,0,I.l,[I.k],null,null),m.Y(100,5423104,null,0,L.a,[b.a,v.a,A.a,Z.a,m.j,m.z,[2,f.a],[2,P.a],[2,I.k],Y.a],{type:[0,"type"]},null),(l()(),m._19(-1,2,["\n                      "])),(l()(),m._19(-1,null,["\n                    "])),(l()(),m._19(-1,null,["\n                    "])),(l()(),m.U(16777216,null,null,1,null,d)),m.Y(105,16384,null,0,p.i,[m.I,m.F],{ngIf:[0,"ngIf"]},null),(l()(),m._19(-1,null,["\n                  "])),(l()(),m._19(-1,null,["\n\n                  "])),(l()(),m.Z(108,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),m._19(-1,null,["\n                  "])),(l()(),m.Z(110,0,null,null,5,"div",[["class","Validatie2Login"]],null,null,null,null,null)),(l()(),m._19(-1,null,["\n                    "])),(l()(),m.Z(112,0,null,null,2,"button",[["class","loginButton"],["ion-button",""]],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.onSubmit()&&e}return e},N.b,N.a)),m.Y(113,1097728,null,0,V.a,[[8,""],b.a,m.j,m.z],null,null),(l()(),m._19(-1,0,["Registreren"])),(l()(),m._19(-1,null,["\n                  "])),(l()(),m._19(-1,null,["\n                "])),(l()(),m._19(-1,null,["\n      "])),(l()(),m._19(-1,null,["\n    "])),(l()(),m._19(-1,null,["\n  "])),(l()(),m._19(-1,1,["\n"])),(l()(),m._19(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,25,0,u.form);l(n,32,0,l(n,33,0,u.form.get("username").touched));l(n,45,0,"username",u.username);l(n,48,0,"text");l(n,53,0,u.form.get("username").touched&&u.form.get("username").invalid);l(n,58,0,l(n,59,0,u.form.get("email").touched));l(n,71,0,"email",u.email);l(n,74,0,"email");l(n,79,0,u.form.get("email").touched&&u.form.get("email").invalid);l(n,84,0,l(n,85,0,u.form.get("password").touched));l(n,97,0,"password",u.password);l(n,100,0,"password");l(n,105,0,u.form.get("password").touched&&u.form.get("password").invalid)},function(l,n){l(n,0,0,m._11(n,1).statusbarPadding,m._11(n,1)._hasRefresher);l(n,23,0,m._11(n,27).ngClassUntouched,m._11(n,27).ngClassTouched,m._11(n,27).ngClassPristine,m._11(n,27).ngClassDirty,m._11(n,27).ngClassValid,m._11(n,27).ngClassInvalid,m._11(n,27).ngClassPending);l(n,44,0,m._11(n,47).ngClassUntouched,m._11(n,47).ngClassTouched,m._11(n,47).ngClassPristine,m._11(n,47).ngClassDirty,m._11(n,47).ngClassValid,m._11(n,47).ngClassInvalid,m._11(n,47).ngClassPending);l(n,70,0,m._11(n,73).ngClassUntouched,m._11(n,73).ngClassTouched,m._11(n,73).ngClassPristine,m._11(n,73).ngClassDirty,m._11(n,73).ngClassValid,m._11(n,73).ngClassInvalid,m._11(n,73).ngClassPending);l(n,96,0,m._11(n,99).ngClassUntouched,m._11(n,99).ngClassTouched,m._11(n,99).ngClassPristine,m._11(n,99).ngClassDirty,m._11(n,99).ngClassValid,m._11(n,99).ngClassInvalid,m._11(n,99).ngClassPending)})}u.d(n,"a",function(){return B});var m=u(0),p=u(18),h=u(47),f=u(27),b=u(3),v=u(5),Y=u(10),Z=u(8),k=u(30),j=u(6),z=u(17),C=u(70),y=u(71),T=u(69),I=u(19),w=u(52),P=u(26),A=u(23),S=u(45),F=u(46),x=u(56),U=u(144),L=u(72),N=u(20),V=u(15),M=u(168),D=u(12),O=u(68),E=u(32),R=u(81),H=m.X({encapsulation:2,styles:[],data:{}}),B=m.V("page-register",M.a,function(l){return m._21(0,[(l()(),m.Z(0,0,null,null,1,"page-register",[],null,null,null,g,H)),m.Y(1,114688,null,0,M.a,[z.a,D.a,O.a,E.c,R.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[])},398:function(l,n,u){"use strict";function e(l){return t._21(0,[(l()(),t.Z(0,0,null,null,13,"ion-item",[["class"," item item-block"]],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.openAdmin()&&e}return e},i.b,i.a)),t.Y(1,1097728,null,3,o.a,[s.a,r.a,t.j,t.z,[2,c.a]],null,null),t._17(335544320,16,{contentLabel:0}),t._17(603979776,17,{_buttons:1}),t._17(603979776,18,{_icons:1}),t.Y(5,16384,null,0,_.a,[],null,null),(l()(),t._19(-1,2,["\n    "])),(l()(),t.Z(7,0,null,1,5,"ion-label",[],null,null,null,null,null)),t.Y(8,16384,[[16,4]],0,d.a,[r.a,t.j,t.z,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),t._19(-1,null,["\n      "])),(l()(),t.Z(10,0,null,null,1,"ion-icon",[["class","iconInstellingen"],["name","settings"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(11,147456,null,0,g.a,[r.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t._19(-1,null,["\n      Admin panel\n    "])),(l()(),t._19(-1,2,["\n  "]))],function(l,n){l(n,11,0,"settings")},function(l,n){l(n,10,0,t._11(n,11)._hidden)})}function a(l){return t._21(0,[t._17(402653184,1,{nav:0}),(l()(),t.Z(1,0,null,null,30,"ion-header",[["no-border-bottom",""]],null,null,null,null,null)),t.Y(2,16384,null,0,m.a,[r.a,t.j,t.z,[2,p.a]],null,null),(l()(),t._19(-1,null,["\n  "])),(l()(),t.Z(4,0,null,null,26,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,h.b,h.a)),t.Y(5,49152,null,0,f.a,[b.a,[2,p.a],[2,v.a],r.a,t.j,t.z],null,null),(l()(),t._19(-1,3,["\n    "])),(l()(),t.Z(7,0,null,0,8,"button",[["class","fakeCenter"],["ion-button",""],["menuToggle",""],["right",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==t._11(l,9).toggle()&&e}return e},Y.b,Y.a)),t.Y(8,1097728,[[2,4]],0,Z.a,[[8,""],r.a,t.j,t.z],null,null),t.Y(9,1064960,null,0,k.a,[j.a,[2,p.a],[2,Z.a],[2,f.a]],{menuToggle:[0,"menuToggle"]},null),t.Y(10,16384,null,1,z.a,[r.a,t.j,t.z,[2,C.a],[2,f.a]],null,null),t._17(603979776,2,{_buttons:1}),(l()(),t._19(-1,0,["\n      "])),(l()(),t.Z(13,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(14,147456,null,0,g.a,[r.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t._19(-1,0,["\n    "])),(l()(),t._19(-1,3,["\n    "])),(l()(),t.Z(17,0,null,3,2,"ion-title",[],null,null,null,y.b,y.a)),t.Y(18,49152,null,0,T.a,[r.a,t.j,t.z,[2,C.a],[2,f.a]],null,null),(l()(),t._19(-1,0,["Instellingen"])),(l()(),t._19(-1,3,["\n    "])),(l()(),t.Z(21,0,null,0,8,"button",[["ion-button",""],["menuToggle",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==t._11(l,23).toggle()&&e}return e},Y.b,Y.a)),t.Y(22,1097728,[[3,4]],0,Z.a,[[8,""],r.a,t.j,t.z],null,null),t.Y(23,1064960,null,0,k.a,[j.a,[2,p.a],[2,Z.a],[2,f.a]],{menuToggle:[0,"menuToggle"]},null),t.Y(24,16384,null,1,z.a,[r.a,t.j,t.z,[2,C.a],[2,f.a]],null,null),t._17(603979776,3,{_buttons:1}),(l()(),t._19(-1,0,["\n      "])),(l()(),t.Z(27,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(28,147456,null,0,g.a,[r.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t._19(-1,0,["\n    "])),(l()(),t._19(-1,3,["\n  "])),(l()(),t._19(-1,null,["\n"])),(l()(),t._19(-1,null,["\n\n"])),(l()(),t.Z(33,0,null,null,87,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,I.b,I.a)),t.Y(34,4374528,null,0,w.a,[r.a,P.a,A.a,t.j,t.z,b.a,S.a,t.u,[2,p.a],[2,v.a]],null,null),(l()(),t._19(-1,1,["\n  "])),(l()(),t.Z(36,0,null,1,13,"ion-item",[["class"," item item-block"]],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.goProfiel()&&e}return e},i.b,i.a)),t.Y(37,1097728,null,3,o.a,[s.a,r.a,t.j,t.z,[2,c.a]],null,null),t._17(335544320,4,{contentLabel:0}),t._17(603979776,5,{_buttons:1}),t._17(603979776,6,{_icons:1}),t.Y(41,16384,null,0,_.a,[],null,null),(l()(),t._19(-1,2,["\n    "])),(l()(),t.Z(43,0,null,1,5,"ion-label",[["class","DarkLabel"]],null,null,null,null,null)),t.Y(44,16384,[[4,4]],0,d.a,[r.a,t.j,t.z,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),t._19(-1,null,["\n      "])),(l()(),t.Z(46,0,null,null,1,"ion-icon",[["class","iconInstellingen"],["name","person"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(47,147456,null,0,g.a,[r.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t._19(-1,null,["\n      Bewerk Profiel\n    "])),(l()(),t._19(-1,2,["\n  "])),(l()(),t._19(-1,1,["\n  "])),(l()(),t.Z(51,0,null,1,13,"ion-item",[["class"," item item-block"]],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.rapporteer()&&e}return e},i.b,i.a)),t.Y(52,1097728,null,3,o.a,[s.a,r.a,t.j,t.z,[2,c.a]],null,null),t._17(335544320,7,{contentLabel:0}),t._17(603979776,8,{_buttons:1}),t._17(603979776,9,{_icons:1}),t.Y(56,16384,null,0,_.a,[],null,null),(l()(),t._19(-1,2,["\n    "])),(l()(),t.Z(58,0,null,1,5,"ion-label",[["class","DarkLabel"]],null,null,null,null,null)),t.Y(59,16384,[[7,4]],0,d.a,[r.a,t.j,t.z,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),t._19(-1,null,["\n      "])),(l()(),t.Z(61,0,null,null,1,"ion-icon",[["class","iconInstellingen"],["name","document"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(62,147456,null,0,g.a,[r.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t._19(-1,null,["\n      Raporteer probleem\n    "])),(l()(),t._19(-1,2,["\n  "])),(l()(),t._19(-1,1,["\n  "])),(l()(),t.Z(66,0,null,1,13,"ion-item",[["class"," item item-block"]],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.overOns()&&e}return e},i.b,i.a)),t.Y(67,1097728,null,3,o.a,[s.a,r.a,t.j,t.z,[2,c.a]],null,null),t._17(335544320,10,{contentLabel:0}),t._17(603979776,11,{_buttons:1}),t._17(603979776,12,{_icons:1}),t.Y(71,16384,null,0,_.a,[],null,null),(l()(),t._19(-1,2,["\n    "])),(l()(),t.Z(73,0,null,1,5,"ion-label",[["class","DarkLabel"]],null,null,null,null,null)),t.Y(74,16384,[[10,4]],0,d.a,[r.a,t.j,t.z,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),t._19(-1,null,["\n      "])),(l()(),t.Z(76,0,null,null,1,"ion-icon",[["class","iconInstellingen"],["name","eye"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(77,147456,null,0,g.a,[r.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t._19(-1,null,["\n      Over ons\n    "])),(l()(),t._19(-1,2,["\n  "])),(l()(),t._19(-1,1,["\n  "])),(l()(),t.Z(81,0,null,1,20,"ion-item",[["class"," item item-block"]],null,null,null,i.b,i.a)),t.Y(82,1097728,null,3,o.a,[s.a,r.a,t.j,t.z,[2,c.a]],null,null),t._17(335544320,13,{contentLabel:0}),t._17(603979776,14,{_buttons:1}),t._17(603979776,15,{_icons:1}),t.Y(86,16384,null,0,_.a,[],null,null),(l()(),t._19(-1,2,["\n    "])),(l()(),t.Z(88,0,null,1,5,"ion-label",[["class","DarkLabel"]],null,null,null,null,null)),t.Y(89,16384,[[13,4]],0,d.a,[r.a,t.j,t.z,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),t._19(-1,null,["\n      "])),(l()(),t.Z(91,0,null,null,1,"ion-icon",[["class","iconInstellingen"],["name","moon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(92,147456,null,0,g.a,[r.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t._19(-1,null,["\n      Light/Dark\n    "])),(l()(),t._19(-1,2,["\n    "])),(l()(),t.Z(95,0,null,4,5,"ion-toggle",[],[[2,"toggle-disabled",null],[2,"toggle-checked",null],[2,"toggle-activated",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"keyup"]],function(l,n,u){var e=!0,a=l.component;if("keyup"===n){e=!1!==t._11(l,96)._keyup(u)&&e}if("ngModelChange"===n){e=!1!==(a.toggleStatus=u)&&e}if("ionChange"===n){e=!1!==a.toggleAppTheme()&&e}return e},F.b,F.a)),t.Y(96,1228800,null,0,x.a,[s.a,r.a,P.a,t.j,t.z,U.a,[2,o.a],L.l,A.a,t.u],null,{ionChange:"ionChange"}),t._15(1024,null,N.j,function(l){return[l]},[x.a]),t.Y(98,671744,null,0,N.n,[[8,null],[8,null],[8,null],[2,N.j]],{model:[0,"model"]},{update:"ngModelChange"}),t._15(2048,null,N.k,null,[N.n]),t.Y(100,16384,null,0,N.l,[N.k],null,null),(l()(),t._19(-1,2,["\n  "])),(l()(),t._19(-1,1,["\n  "])),(l()(),t.U(16777216,null,1,1,null,e)),t.Y(104,16384,null,0,V.i,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t._19(-1,1,["\n  "])),(l()(),t.Z(106,0,null,1,13,"ion-item",[["class"," item item-block"]],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.uitloggen()&&e}return e},i.b,i.a)),t.Y(107,1097728,null,3,o.a,[s.a,r.a,t.j,t.z,[2,c.a]],null,null),t._17(335544320,19,{contentLabel:0}),t._17(603979776,20,{_buttons:1}),t._17(603979776,21,{_icons:1}),t.Y(111,16384,null,0,_.a,[],null,null),(l()(),t._19(-1,2,["\n    "])),(l()(),t.Z(113,0,null,1,5,"ion-label",[],null,null,null,null,null)),t.Y(114,16384,[[19,4]],0,d.a,[r.a,t.j,t.z,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),t._19(-1,null,["\n      "])),(l()(),t.Z(116,0,null,null,1,"ion-icon",[["class","iconInstellingen"],["name","log-out"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(117,147456,null,0,g.a,[r.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t._19(-1,null,["\n      Uitloggen\n    "])),(l()(),t._19(-1,2,["\n  "])),(l()(),t._19(-1,1,["\n"])),(l()(),t._19(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,9,0,"");l(n,14,0,"menu");l(n,23,0,"");l(n,28,0,"menu");l(n,47,0,"person");l(n,62,0,"document");l(n,77,0,"eye");l(n,92,0,"moon");l(n,98,0,u.toggleStatus);l(n,104,0,1==u.rol);l(n,117,0,"log-out")},function(l,n){l(n,4,0,t._11(n,5)._hidden,t._11(n,5)._sbPadding);l(n,7,0,t._11(n,9).isHidden);l(n,13,0,t._11(n,14)._hidden);l(n,21,0,t._11(n,23).isHidden);l(n,27,0,t._11(n,28)._hidden);l(n,33,0,t._11(n,34).statusbarPadding,t._11(n,34)._hasRefresher);l(n,46,0,t._11(n,47)._hidden);l(n,61,0,t._11(n,62)._hidden);l(n,76,0,t._11(n,77)._hidden);l(n,91,0,t._11(n,92)._hidden);l(n,95,0,t._11(n,96)._disabled,t._11(n,96)._value,t._11(n,96)._activated,t._11(n,100).ngClassUntouched,t._11(n,100).ngClassTouched,t._11(n,100).ngClassPristine,t._11(n,100).ngClassDirty,t._11(n,100).ngClassValid,t._11(n,100).ngClassInvalid,t._11(n,100).ngClassPending);l(n,116,0,t._11(n,117)._hidden)})}u.d(n,"a",function(){return q});var t=u(0),i=u(52),o=u(26),s=u(23),r=u(3),c=u(45),_=u(46),d=u(56),g=u(22),m=u(34),p=u(6),h=u(37),f=u(25),b=u(8),v=u(17),Y=u(20),Z=u(15),k=u(33),j=u(21),z=u(35),C=u(28),y=u(42),T=u(36),I=u(47),w=u(27),P=u(5),A=u(10),S=u(30),F=u(694),x=u(140),U=u(51),L=u(11),N=u(19),V=u(18),M=u(82),D=u(54),O=u(41),E=u(109),R=u(85),H=u(68),B=u(32),$=u(64),W=t.X({encapsulation:2,styles:[],data:{}}),q=t.V("page-settings",E.a,function(l){return t._21(0,[(l()(),t.Z(0,0,null,null,2,"page-settings",[],null,null,null,a,W)),t._15(135680,null,M.a,M.a,[[2,p.a],[2,v.a],b.a,r.a,P.a,t.j,t.u,t.z,t.i,L.l,D.a,[2,O.a],A.a,t.k]),t.Y(2,49152,null,0,E.a,[R.a,P.a,v.a,H.a,B.c,$.a],null,null)],null,null)},{},{},[])},399:function(l,n,u){"use strict";function e(l){return a._21(0,[a._17(402653184,1,{slider:0}),(l()(),a.Z(1,0,null,null,46,"ion-header",[["no-border-bottom",""]],null,null,null,null,null)),a.Y(2,16384,null,0,t.a,[i.a,a.j,a.z,[2,o.a]],null,null),(l()(),a._19(-1,null,["\n  "])),(l()(),a.Z(4,0,null,null,26,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,s.b,s.a)),a.Y(5,49152,null,0,r.a,[c.a,[2,o.a],[2,_.a],i.a,a.j,a.z],null,null),(l()(),a._19(-1,3,["\n    "])),(l()(),a.Z(7,0,null,0,8,"button",[["class","fakeCenter"],["ion-button",""],["menuToggle",""],["right",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==a._11(l,9).toggle()&&e}return e},d.b,d.a)),a.Y(8,1097728,[[2,4]],0,g.a,[[8,""],i.a,a.j,a.z],null,null),a.Y(9,1064960,null,0,m.a,[p.a,[2,o.a],[2,g.a],[2,r.a]],{menuToggle:[0,"menuToggle"]},null),a.Y(10,16384,null,1,h.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),a._17(603979776,2,{_buttons:1}),(l()(),a._19(-1,0,["\n        "])),(l()(),a.Z(13,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(14,147456,null,0,b.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._19(-1,0,["\n    "])),(l()(),a._19(-1,3,["\n      "])),(l()(),a.Z(17,0,null,3,2,"ion-title",[],null,null,null,v.b,v.a)),a.Y(18,49152,null,0,Y.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),(l()(),a._19(-1,0,["Sources"])),(l()(),a._19(-1,3,["\n        "])),(l()(),a.Z(21,0,null,0,8,"button",[["ion-button",""],["menuToggle",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==a._11(l,23).toggle()&&e}return e},d.b,d.a)),a.Y(22,1097728,[[3,4]],0,g.a,[[8,""],i.a,a.j,a.z],null,null),a.Y(23,1064960,null,0,m.a,[p.a,[2,o.a],[2,g.a],[2,r.a]],{menuToggle:[0,"menuToggle"]},null),a.Y(24,16384,null,1,h.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),a._17(603979776,3,{_buttons:1}),(l()(),a._19(-1,0,["\n            "])),(l()(),a.Z(27,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(28,147456,null,0,b.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._19(-1,0,["\n        "])),(l()(),a._19(-1,3,["\n    "])),(l()(),a._19(-1,null,["\n      "])),(l()(),a.Z(32,0,null,null,14,"ion-segment",[["color","dark"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"segment-disabled",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0;if("ngModelChange"===n){e=!1!==(l.component.page=u)&&e}return e},null,null)),a.Y(33,671744,null,0,Z.n,[[8,null],[8,null],[8,null],[8,null]],{model:[0,"model"]},{update:"ngModelChange"}),a._15(2048,null,Z.k,null,[Z.n]),a.Y(35,16384,null,0,Z.l,[Z.k],null,null),a.Y(36,1196032,null,1,k.a,[i.a,a.j,a.z,[2,Z.k]],{color:[0,"color"]},null),a._17(603979776,4,{_buttons:1}),(l()(),a._19(-1,null,["\n        "])),(l()(),a.Z(39,0,null,null,2,"ion-segment-button",[["class","segment-button"],["role","button"],["tappable",""],["value","0"]],[[2,"segment-button-disabled",null],[2,"segment-activated",null],[1,"aria-pressed",0]],[[null,"click"]],function(l,n,u){var e=!0,t=l.component;if("click"===n){e=!1!==a._11(l,40).onClick()&&e}if("click"===n){e=!1!==t.selectedTab(0)&&e}return e},j.b,j.a)),a.Y(40,114688,[[4,4]],0,z.a,[],{value:[0,"value"]},null),(l()(),a._19(-1,0,["\n          Subscribed\n        "])),(l()(),a._19(-1,null,["\n        "])),(l()(),a.Z(43,0,null,null,2,"ion-segment-button",[["class","segment-button"],["role","button"],["tappable",""],["value","1"]],[[2,"segment-button-disabled",null],[2,"segment-activated",null],[1,"aria-pressed",0]],[[null,"click"]],function(l,n,u){var e=!0,t=l.component;if("click"===n){e=!1!==a._11(l,44).onClick()&&e}if("click"===n){e=!1!==t.selectedTab(1)&&e}return e},j.b,j.a)),a.Y(44,114688,[[4,4]],0,z.a,[],{value:[0,"value"]},null),(l()(),a._19(-1,0,["\n          Suggesties\n        "])),(l()(),a._19(-1,null,["\n      "])),(l()(),a._19(-1,null,["\n"])),(l()(),a._19(-1,null,["\n"])),(l()(),a.Z(49,0,null,null,425,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,C.b,C.a)),a.Y(50,4374528,null,0,y.a,[i.a,T.a,I.a,a.j,a.z,c.a,w.a,a.u,[2,o.a],[2,_.a]],null,null),(l()(),a._19(-1,1,["\n  "])),(l()(),a.Z(52,0,null,1,421,"ion-slides",[],null,[[null,"ionSlideWillChange"]],function(l,n,u){var e=!0;if("ionSlideWillChange"===n){e=!1!==l.component.moveButton(u)&&e}return e},P.b,P.a)),a.Y(53,1228800,[[1,4],["slider",4]],0,A.a,[i.a,T.a,a.u,[2,o.a],a.j,a.z],null,{ionSlideWillChange:"ionSlideWillChange"}),(l()(),a._19(-1,0,["\n    "])),(l()(),a._19(-1,0,["\n    "])),(l()(),a._19(-1,0,["\n    "])),(l()(),a._19(-1,0,["\n    "])),(l()(),a.Z(58,0,null,0,90,"ion-slide",[],null,null,null,S.b,S.a)),a.Y(59,180224,null,0,F.a,[a.j,a.z,A.a],null,null),(l()(),a._19(-1,0,["\n      "])),(l()(),a.Z(61,0,null,0,86,"ion-list",[],null,null,null,null,null)),a.Y(62,16384,null,0,x.a,[i.a,a.j,a.z,T.a,U.l,I.a],null,null),(l()(),a._19(-1,null,["\n        "])),(l()(),a.Z(64,0,null,null,26,"ion-item",[["class","sourceItem item item-block"]],null,null,null,L.b,L.a)),a.Y(65,1097728,null,3,N.a,[V.a,i.a,a.j,a.z,[2,M.a]],null,null),a._17(335544320,5,{contentLabel:0}),a._17(603979776,6,{_buttons:1}),a._17(603979776,7,{_icons:1}),a.Y(69,16384,null,0,D.a,[],null,null),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(71,0,null,0,4,"ion-avatar",[["class","avatar"],["item-start",""]],null,null,null,null,null)),a.Y(72,16384,null,0,O.a,[],null,null),(l()(),a._19(-1,null,["\n            "])),(l()(),a.Z(74,0,null,null,0,"img",[["src","../assets/svg/NOS_logo.svg"]],null,null,null,null,null)),(l()(),a._19(-1,null,["\n          "])),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(77,0,null,2,2,"div",[["class","sourceTekst"]],null,null,null,null,null)),(l()(),a.Z(78,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),a._19(-1,null,["NOS"])),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(81,0,null,2,1,"div",[["class","sourceTekst"]],null,null,null,null,null)),(l()(),a._19(-1,null,["Nieuwsfeed"])),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(84,0,null,4,5,"button",[["class","DeleteClassesButton"],["color","danger"],["ion-button",""],["item-end",""],["outline",""]],null,null,null,d.b,d.a)),a.Y(85,1097728,[[6,4]],0,g.a,[[8,""],i.a,a.j,a.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),a._19(-1,0,["\n            "])),(l()(),a.Z(87,0,null,0,1,"ion-icon",[["class","buttonIcon"],["name","close"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(88,147456,null,0,b.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._19(-1,0,["Verwijderen\n          "])),(l()(),a._19(-1,2,["\n        "])),(l()(),a._19(-1,null,["\n\n        "])),(l()(),a.Z(92,0,null,null,26,"ion-item",[["class","sourceItem item item-block"]],null,null,null,L.b,L.a)),a.Y(93,1097728,null,3,N.a,[V.a,i.a,a.j,a.z,[2,M.a]],null,null),a._17(335544320,8,{contentLabel:0}),a._17(603979776,9,{_buttons:1}),a._17(603979776,10,{_icons:1}),a.Y(97,16384,null,0,D.a,[],null,null),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(99,0,null,0,4,"ion-avatar",[["class","avatar"],["item-start",""]],null,null,null,null,null)),a.Y(100,16384,null,0,O.a,[],null,null),(l()(),a._19(-1,null,["\n            "])),(l()(),a.Z(102,0,null,null,0,"img",[["src","../assets/svg/telegraaf.svg"]],null,null,null,null,null)),(l()(),a._19(-1,null,["\n          "])),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(105,0,null,2,2,"div",[["class","sourceTekst"]],null,null,null,null,null)),(l()(),a.Z(106,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),a._19(-1,null,["De Telegraaf"])),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(109,0,null,2,1,"div",[["class","sourceTekst"]],null,null,null,null,null)),(l()(),a._19(-1,null,["Nieuwsfeed"])),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(112,0,null,4,5,"button",[["class","DeleteClassesButton"],["color","danger"],["ion-button",""],["item-end",""],["outline",""]],null,null,null,d.b,d.a)),a.Y(113,1097728,[[9,4]],0,g.a,[[8,""],i.a,a.j,a.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),a._19(-1,0,["\n            "])),(l()(),a.Z(115,0,null,0,1,"ion-icon",[["class","buttonIcon"],["name","close"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(116,147456,null,0,b.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._19(-1,0,["Verwijderen\n          "])),(l()(),a._19(-1,2,["\n        "])),(l()(),a._19(-1,null,["\n\n        "])),(l()(),a.Z(120,0,null,null,26,"ion-item",[["class","sourceItem item item-block"]],null,null,null,L.b,L.a)),a.Y(121,1097728,null,3,N.a,[V.a,i.a,a.j,a.z,[2,M.a]],null,null),a._17(335544320,11,{contentLabel:0}),a._17(603979776,12,{_buttons:1}),a._17(603979776,13,{_icons:1}),a.Y(125,16384,null,0,D.a,[],null,null),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(127,0,null,0,4,"ion-avatar",[["class","avatar"],["item-start",""]],null,null,null,null,null)),a.Y(128,16384,null,0,O.a,[],null,null),(l()(),a._19(-1,null,["\n            "])),(l()(),a.Z(130,0,null,null,0,"img",[["src","../assets/svg/nu.nl.svg"]],null,null,null,null,null)),(l()(),a._19(-1,null,["\n          "])),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(133,0,null,2,2,"div",[["class","sourceTekst"]],null,null,null,null,null)),(l()(),a.Z(134,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),a._19(-1,null,["NU.NL"])),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(137,0,null,2,1,"div",[["class","sourceTekst"]],null,null,null,null,null)),(l()(),a._19(-1,null,["Nieuwsfeed"])),(l()(),a._19(-1,2,["\n        "])),(l()(),a.Z(140,0,null,4,5,"button",[["class","DeleteClassesButton"],["color","danger"],["ion-button",""],["item-end",""],["outline",""]],null,null,null,d.b,d.a)),a.Y(141,1097728,[[12,4]],0,g.a,[[8,""],i.a,a.j,a.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),a._19(-1,0,["\n            "])),(l()(),a.Z(143,0,null,0,1,"ion-icon",[["class","buttonIcon"],["name","close"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(144,147456,null,0,b.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._19(-1,0,["Verwijderen\n          "])),(l()(),a._19(-1,2,["\n        "])),(l()(),a._19(-1,null,["\n\n      "])),(l()(),a._19(-1,0,["\n    "])),(l()(),a._19(-1,0,["\n    "])),(l()(),a.Z(150,0,null,0,322,"ion-slide",[],null,null,null,S.b,S.a)),a.Y(151,180224,null,0,F.a,[a.j,a.z,A.a],null,null),(l()(),a._19(-1,0,["\n      "])),(l()(),a.Z(153,0,null,0,318,"ion-list",[],null,null,null,null,null)),a.Y(154,16384,null,0,x.a,[i.a,a.j,a.z,T.a,U.l,I.a],null,null),(l()(),a._19(-1,null,["\n        "])),(l()(),a._19(-1,null,["\n        "])),(l()(),a._19(-1,null,["\n        "])),(l()(),a._19(-1,null,["\n        "])),(l()(),a.Z(159,0,null,null,9,"ion-item",[["class","sourceTitel item item-block"]],null,null,null,L.b,L.a)),a.Y(160,1097728,null,3,N.a,[V.a,i.a,a.j,a.z,[2,M.a]],null,null),a._17(335544320,14,{contentLabel:0}),a._17(603979776,15,{_buttons:1}),a._17(603979776,16,{_icons:1}),a.Y(164,16384,null,0,D.a,[],null,null),(l()(),a._19(-1,2,["\n              "])),(l()(),a.Z(166,0,null,2,1,"h4",[["class","TitelSources"]],null,null,null,null,null)),(l()(),a._19(-1,null,["Nieuwsfeed"])),(l()(),a._19(-1,2,["\n        "])),(l()(),a._19(-1,null,["\n        "])),(l()(),a.Z(170,0,null,null,26,"ion-item",[["class","sourceItem item item-block"]],null,null,null,L.b,L.a)),a.Y(171,1097728,null,3,N.a,[V.a,i.a,a.j,a.z,[2,M.a]],null,null),a._17(335544320,17,{contentLabel:0}),a._17(603979776,18,{_buttons:1}),a._17(603979776,19,{_icons:1}),a.Y(175,16384,null,0,D.a,[],null,null),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(177,0,null,0,4,"ion-avatar",[["class","avatar"],["item-start",""]],null,null,null,null,null)),a.Y(178,16384,null,0,O.a,[],null,null),(l()(),a._19(-1,null,["\n            "])),(l()(),a.Z(180,0,null,null,0,"img",[["src","../assets/svg/Volkskrant.svg"]],null,null,null,null,null)),(l()(),a._19(-1,null,["\n          "])),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(183,0,null,2,2,"div",[["class","sourceTekst"]],null,null,null,null,null)),(l()(),a.Z(184,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),a._19(-1,null,["De Volkskrant"])),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(187,0,null,2,1,"div",[["class","sourceTekst"]],null,null,null,null,null)),(l()(),a._19(-1,null,["Nieuwsfeed"])),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(190,0,null,4,5,"button",[["class","ImportClassesButton"],["color","green"],["ion-button",""],["item-end",""],["outline",""]],null,null,null,d.b,d.a)),a.Y(191,1097728,[[18,4]],0,g.a,[[8,""],i.a,a.j,a.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),a._19(-1,0,["\n            "])),(l()(),a.Z(193,0,null,0,1,"ion-icon",[["class","buttonIcon"],["name","checkmark"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(194,147456,null,0,b.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._19(-1,0,["Toevoegen\n          "])),(l()(),a._19(-1,2,["\n        "])),(l()(),a._19(-1,null,["\n\n        "])),(l()(),a.Z(198,0,null,null,26,"ion-item",[["class","sourceItem item item-block"]],null,null,null,L.b,L.a)),a.Y(199,1097728,null,3,N.a,[V.a,i.a,a.j,a.z,[2,M.a]],null,null),a._17(335544320,20,{contentLabel:0}),a._17(603979776,21,{_buttons:1}),a._17(603979776,22,{_icons:1}),a.Y(203,16384,null,0,D.a,[],null,null),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(205,0,null,0,4,"ion-avatar",[["class","avatar"],["item-start",""]],null,null,null,null,null)),a.Y(206,16384,null,0,O.a,[],null,null),(l()(),a._19(-1,null,["\n            "])),(l()(),a.Z(208,0,null,null,0,"img",[["src","../assets/svg/AD.svg"]],null,null,null,null,null)),(l()(),a._19(-1,null,["\n          "])),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(211,0,null,2,2,"div",[["class","sourceTekst"]],null,null,null,null,null)),(l()(),a.Z(212,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),a._19(-1,null,["Algemeen Dagblad"])),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(215,0,null,2,1,"div",[["class","sourceTekst"]],null,null,null,null,null)),(l()(),a._19(-1,null,["Nieuwsfeed"])),(l()(),a._19(-1,2,["\n        "])),(l()(),a.Z(218,0,null,4,5,"button",[["class","ImportClassesButton"],["color","green"],["ion-button",""],["item-end",""],["outline",""]],null,null,null,d.b,d.a)),a.Y(219,1097728,[[21,4]],0,g.a,[[8,""],i.a,a.j,a.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),a._19(-1,0,["\n            "])),(l()(),a.Z(221,0,null,0,1,"ion-icon",[["class","buttonIcon"],["name","checkmark"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(222,147456,null,0,b.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._19(-1,0,["Toevoegen\n          "])),(l()(),a._19(-1,2,["\n        "])),(l()(),a._19(-1,null,["\n\n\n        "])),(l()(),a.Z(226,0,null,null,26,"ion-item",[["class","sourceItem item item-block"]],null,null,null,L.b,L.a)),a.Y(227,1097728,null,3,N.a,[V.a,i.a,a.j,a.z,[2,M.a]],null,null),a._17(335544320,23,{contentLabel:0}),a._17(603979776,24,{_buttons:1}),a._17(603979776,25,{_icons:1}),a.Y(231,16384,null,0,D.a,[],null,null),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(233,0,null,0,4,"ion-avatar",[["class","avatar"],["item-start",""]],null,null,null,null,null)),a.Y(234,16384,null,0,O.a,[],null,null),(l()(),a._19(-1,null,["\n            "])),(l()(),a.Z(236,0,null,null,0,"img",[["src","../assets/svg/RTL_Nederland.svg"]],null,null,null,null,null)),(l()(),a._19(-1,null,["\n          "])),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(239,0,null,2,2,"div",[["class","sourceTekst"]],null,null,null,null,null)),(l()(),a.Z(240,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),a._19(-1,null,["RTL Nieuws"])),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(243,0,null,2,1,"div",[["class","sourceTekst"]],null,null,null,null,null)),(l()(),a._19(-1,null,["Nieuwsfeed"])),(l()(),a._19(-1,2,["\n        "])),(l()(),a.Z(246,0,null,4,5,"button",[["class","ImportClassesButton"],["color","green"],["ion-button",""],["item-end",""],["outline",""]],null,null,null,d.b,d.a)),a.Y(247,1097728,[[24,4]],0,g.a,[[8,""],i.a,a.j,a.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),a._19(-1,0,["\n            "])),(l()(),a.Z(249,0,null,0,1,"ion-icon",[["class","buttonIcon"],["name","checkmark"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(250,147456,null,0,b.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._19(-1,0,["Toevoegen\n          "])),(l()(),a._19(-1,2,["\n        "])),(l()(),a._19(-1,null,["\n\n        "])),(l()(),a.Z(254,0,null,null,26,"ion-item",[["class","sourceItem item item-block"]],null,null,null,L.b,L.a)),a.Y(255,1097728,null,3,N.a,[V.a,i.a,a.j,a.z,[2,M.a]],null,null),a._17(335544320,26,{contentLabel:0}),a._17(603979776,27,{_buttons:1}),a._17(603979776,28,{_icons:1}),a.Y(259,16384,null,0,D.a,[],null,null),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(261,0,null,0,4,"ion-avatar",[["class","avatar"],["item-start",""]],null,null,null,null,null)),a.Y(262,16384,null,0,O.a,[],null,null),(l()(),a._19(-1,null,["\n            "])),(l()(),a.Z(264,0,null,null,0,"img",[["src","../assets/svg/De_Gelderlander.svg"]],null,null,null,null,null)),(l()(),a._19(-1,null,["\n          "])),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(267,0,null,2,2,"div",[["class","sourceTekst"]],null,null,null,null,null)),(l()(),a.Z(268,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),a._19(-1,null,["De Gelderlander"])),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(271,0,null,2,1,"div",[["class","sourceTekst"]],null,null,null,null,null)),(l()(),a._19(-1,null,["Nieuwsfeed"])),(l()(),a._19(-1,2,["\n        "])),(l()(),a.Z(274,0,null,4,5,"button",[["class","ImportClassesButton"],["color","green"],["ion-button",""],["item-end",""],["outline",""]],null,null,null,d.b,d.a)),a.Y(275,1097728,[[27,4]],0,g.a,[[8,""],i.a,a.j,a.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),a._19(-1,0,["\n            "])),(l()(),a.Z(277,0,null,0,1,"ion-icon",[["class","buttonIcon"],["name","checkmark"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(278,147456,null,0,b.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._19(-1,0,["Toevoegen\n          "])),(l()(),a._19(-1,2,["\n        "])),(l()(),a._19(-1,null,["\n\n        "])),(l()(),a.Z(282,0,null,null,9,"ion-item",[["class","sourceTitel item item-block"]],null,null,null,L.b,L.a)),a.Y(283,1097728,null,3,N.a,[V.a,i.a,a.j,a.z,[2,M.a]],null,null),a._17(335544320,29,{contentLabel:0}),a._17(603979776,30,{_buttons:1}),a._17(603979776,31,{_icons:1}),a.Y(287,16384,null,0,D.a,[],null,null),(l()(),a._19(-1,2,["\n              "])),(l()(),a.Z(289,0,null,2,1,"h4",[["class","TitelSources"]],null,null,null,null,null)),(l()(),a._19(-1,null,["Tech"])),(l()(),a._19(-1,2,["\n        "])),(l()(),a._19(-1,null,["\n\n        "])),(l()(),a.Z(293,0,null,null,26,"ion-item",[["class","sourceItem item item-block"]],null,null,null,L.b,L.a)),a.Y(294,1097728,null,3,N.a,[V.a,i.a,a.j,a.z,[2,M.a]],null,null),a._17(335544320,32,{contentLabel:0}),a._17(603979776,33,{_buttons:1}),a._17(603979776,34,{_icons:1}),a.Y(298,16384,null,0,D.a,[],null,null),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(300,0,null,0,4,"ion-avatar",[["class","avatar"],["item-start",""]],null,null,null,null,null)),a.Y(301,16384,null,0,O.a,[],null,null),(l()(),a._19(-1,null,["\n            "])),(l()(),a.Z(303,0,null,null,0,"img",[["src","../assets/svg/Tweakers.svg"]],null,null,null,null,null)),(l()(),a._19(-1,null,["\n          "])),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(306,0,null,2,2,"div",[["class","sourceTekst"]],null,null,null,null,null)),(l()(),a.Z(307,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),a._19(-1,null,["Tweakers"])),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(310,0,null,2,1,"div",[["class","sourceTekst"]],null,null,null,null,null)),(l()(),a._19(-1,null,["Tech"])),(l()(),a._19(-1,2,["\n        "])),(l()(),a.Z(313,0,null,4,5,"button",[["class","ImportClassesButton"],["color","green"],["ion-button",""],["item-end",""],["outline",""]],null,null,null,d.b,d.a)),a.Y(314,1097728,[[33,4]],0,g.a,[[8,""],i.a,a.j,a.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),a._19(-1,0,["\n            "])),(l()(),a.Z(316,0,null,0,1,"ion-icon",[["class","buttonIcon"],["name","checkmark"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(317,147456,null,0,b.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._19(-1,0,["Toevoegen\n          "])),(l()(),a._19(-1,2,["\n        "])),(l()(),a._19(-1,null,["\n\n        "])),(l()(),a.Z(321,0,null,null,9,"ion-item",[["class","sourceTitel item item-block"]],null,null,null,L.b,L.a)),a.Y(322,1097728,null,3,N.a,[V.a,i.a,a.j,a.z,[2,M.a]],null,null),a._17(335544320,35,{contentLabel:0}),a._17(603979776,36,{_buttons:1}),a._17(603979776,37,{_icons:1}),a.Y(326,16384,null,0,D.a,[],null,null),(l()(),a._19(-1,2,["\n              "])),(l()(),a.Z(328,0,null,2,1,"h4",[["class","TitelSources"]],null,null,null,null,null)),(l()(),a._19(-1,null,["Sport"])),(l()(),a._19(-1,2,["\n        "])),(l()(),a._19(-1,null,["\n\n        "])),(l()(),a.Z(332,0,null,null,26,"ion-item",[["class","sourceItem item item-block"]],null,null,null,L.b,L.a)),a.Y(333,1097728,null,3,N.a,[V.a,i.a,a.j,a.z,[2,M.a]],null,null),a._17(335544320,38,{contentLabel:0}),a._17(603979776,39,{_buttons:1}),a._17(603979776,40,{_icons:1}),a.Y(337,16384,null,0,D.a,[],null,null),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(339,0,null,0,4,"ion-avatar",[["class","avatar"],["item-start",""]],null,null,null,null,null)),a.Y(340,16384,null,0,O.a,[],null,null),(l()(),a._19(-1,null,["\n            "])),(l()(),a.Z(342,0,null,null,0,"img",[["src","../assets/svg/Fifa.svg"]],null,null,null,null,null)),(l()(),a._19(-1,null,["\n          "])),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(345,0,null,2,2,"div",[["class","sourceTekst"]],null,null,null,null,null)),(l()(),a.Z(346,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),a._19(-1,null,["Fifa"])),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(349,0,null,2,1,"div",[["class","sourceTekst"]],null,null,null,null,null)),(l()(),a._19(-1,null,["Sport"])),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(352,0,null,4,5,"button",[["class","ImportClassesButton"],["color","green"],["ion-button",""],["item-end",""],["outline",""]],null,null,null,d.b,d.a)),a.Y(353,1097728,[[39,4]],0,g.a,[[8,""],i.a,a.j,a.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),a._19(-1,0,["\n            "])),(l()(),a.Z(355,0,null,0,1,"ion-icon",[["class","buttonIcon"],["name","checkmark"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(356,147456,null,0,b.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._19(-1,0,["Toevoegen\n          "])),(l()(),a._19(-1,2,["\n        "])),(l()(),a._19(-1,null,["\n\n        "])),(l()(),a.Z(360,0,null,null,26,"ion-item",[["class","sourceItem item item-block"]],null,null,null,L.b,L.a)),a.Y(361,1097728,null,3,N.a,[V.a,i.a,a.j,a.z,[2,M.a]],null,null),a._17(335544320,41,{contentLabel:0}),a._17(603979776,42,{_buttons:1}),a._17(603979776,43,{_icons:1}),a.Y(365,16384,null,0,D.a,[],null,null),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(367,0,null,0,4,"ion-avatar",[["class","avatar"],["item-start",""]],null,null,null,null,null)),a.Y(368,16384,null,0,O.a,[],null,null),(l()(),a._19(-1,null,["\n            "])),(l()(),a.Z(370,0,null,null,0,"img",[["src","../assets/svg/FoxSports.svg"]],null,null,null,null,null)),(l()(),a._19(-1,null,["\n          "])),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(373,0,null,2,2,"div",[["class","sourceTekst"]],null,null,null,null,null)),(l()(),a.Z(374,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),a._19(-1,null,["Fox Sports Go"])),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(377,0,null,2,1,"div",[["class","sourceTekst"]],null,null,null,null,null)),(l()(),a._19(-1,null,["Sport"])),(l()(),a._19(-1,2,["\n        "])),(l()(),a.Z(380,0,null,4,5,"button",[["class","ImportClassesButton"],["color","green"],["ion-button",""],["item-end",""],["outline",""]],null,null,null,d.b,d.a)),a.Y(381,1097728,[[42,4]],0,g.a,[[8,""],i.a,a.j,a.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),a._19(-1,0,["\n            "])),(l()(),a.Z(383,0,null,0,1,"ion-icon",[["class","buttonIcon"],["name","checkmark"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(384,147456,null,0,b.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._19(-1,0,["Toevoegen\n          "])),(l()(),a._19(-1,2,["\n        "])),(l()(),a._19(-1,null,["\n\n        "])),(l()(),a.Z(388,0,null,null,26,"ion-item",[["class","sourceItem item item-block"]],null,null,null,L.b,L.a)),a.Y(389,1097728,null,3,N.a,[V.a,i.a,a.j,a.z,[2,M.a]],null,null),a._17(335544320,44,{contentLabel:0}),a._17(603979776,45,{_buttons:1}),a._17(603979776,46,{_icons:1}),a.Y(393,16384,null,0,D.a,[],null,null),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(395,0,null,0,4,"ion-avatar",[["class","avatar"],["item-start",""]],null,null,null,null,null)),a.Y(396,16384,null,0,O.a,[],null,null),(l()(),a._19(-1,null,["\n            "])),(l()(),a.Z(398,0,null,null,0,"img",[["src","../assets/svg/NuSport.svg"]],null,null,null,null,null)),(l()(),a._19(-1,null,["\n          "])),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(401,0,null,2,2,"div",[["class","sourceTekst"]],null,null,null,null,null)),(l()(),a.Z(402,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),a._19(-1,null,["Nu Sport"])),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(405,0,null,2,1,"div",[["class","sourceTekst"]],null,null,null,null,null)),(l()(),a._19(-1,null,["Sport"])),(l()(),a._19(-1,2,["\n        "])),(l()(),a.Z(408,0,null,4,5,"button",[["class","ImportClassesButton"],["color","green"],["ion-button",""],["item-end",""],["outline",""]],null,null,null,d.b,d.a)),a.Y(409,1097728,[[45,4]],0,g.a,[[8,""],i.a,a.j,a.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),a._19(-1,0,["\n            "])),(l()(),a.Z(411,0,null,0,1,"ion-icon",[["class","buttonIcon"],["name","checkmark"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(412,147456,null,0,b.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._19(-1,0,["Toevoegen\n          "])),(l()(),a._19(-1,2,["\n        "])),(l()(),a._19(-1,null,["\n\n        "])),(l()(),a.Z(416,0,null,null,26,"ion-item",[["class","sourceItem item item-block"]],null,null,null,L.b,L.a)),a.Y(417,1097728,null,3,N.a,[V.a,i.a,a.j,a.z,[2,M.a]],null,null),a._17(335544320,47,{contentLabel:0}),a._17(603979776,48,{_buttons:1}),a._17(603979776,49,{_icons:1}),a.Y(421,16384,null,0,D.a,[],null,null),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(423,0,null,0,4,"ion-avatar",[["class","avatar"],["item-start",""]],null,null,null,null,null)),a.Y(424,16384,null,0,O.a,[],null,null),(l()(),a._19(-1,null,["\n            "])),(l()(),a.Z(426,0,null,null,0,"img",[["src","../assets/svg/rtlz.svg"]],null,null,null,null,null)),(l()(),a._19(-1,null,["\n          "])),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(429,0,null,2,2,"div",[["class","sourceTekst"]],null,null,null,null,null)),(l()(),a.Z(430,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),a._19(-1,null,["RTL Z "])),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(433,0,null,2,1,"div",[["class","sourceTekst"]],null,null,null,null,null)),(l()(),a._19(-1,null,["Sport"])),(l()(),a._19(-1,2,["\n        "])),(l()(),a.Z(436,0,null,4,5,"button",[["class","ImportClassesButton"],["color","green"],["ion-button",""],["item-end",""],["outline",""]],null,null,null,d.b,d.a)),a.Y(437,1097728,[[48,4]],0,g.a,[[8,""],i.a,a.j,a.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),a._19(-1,0,["\n            "])),(l()(),a.Z(439,0,null,0,1,"ion-icon",[["class","buttonIcon"],["name","checkmark"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(440,147456,null,0,b.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._19(-1,0,["Toevoegen\n          "])),(l()(),a._19(-1,2,["\n        "])),(l()(),a._19(-1,null,["\n\n        "])),(l()(),a.Z(444,0,null,null,26,"ion-item",[["class","sourceItem item item-block"]],null,null,null,L.b,L.a)),a.Y(445,1097728,null,3,N.a,[V.a,i.a,a.j,a.z,[2,M.a]],null,null),a._17(335544320,50,{contentLabel:0}),a._17(603979776,51,{_buttons:1}),a._17(603979776,52,{_icons:1}),a.Y(449,16384,null,0,D.a,[],null,null),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(451,0,null,0,4,"ion-avatar",[["class","avatar"],["item-start",""]],null,null,null,null,null)),a.Y(452,16384,null,0,O.a,[],null,null),(l()(),a._19(-1,null,["\n            "])),(l()(),a.Z(454,0,null,null,0,"img",[["src","../assets/svg/Voetbalzone.svg"]],null,null,null,null,null)),(l()(),a._19(-1,null,["\n          "])),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(457,0,null,2,2,"div",[["class","sourceTekst"]],null,null,null,null,null)),(l()(),a.Z(458,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),a._19(-1,null,["Voetbalzone"])),(l()(),a._19(-1,2,["\n          "])),(l()(),a.Z(461,0,null,2,1,"div",[["class","sourceTekst"]],null,null,null,null,null)),(l()(),a._19(-1,null,["Sport"])),(l()(),a._19(-1,2,["\n        "])),(l()(),a.Z(464,0,null,4,5,"button",[["class","ImportClassesButton"],["color","green"],["ion-button",""],["item-end",""],["outline",""]],null,null,null,d.b,d.a)),a.Y(465,1097728,[[51,4]],0,g.a,[[8,""],i.a,a.j,a.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),a._19(-1,0,["\n            "])),(l()(),a.Z(467,0,null,0,1,"ion-icon",[["class","buttonIcon"],["name","checkmark"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(468,147456,null,0,b.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._19(-1,0,["Toevoegen\n          "])),(l()(),a._19(-1,2,["\n        "])),(l()(),a._19(-1,null,["\n\n\n      "])),(l()(),a._19(-1,0,["\n    "])),(l()(),a._19(-1,0,["\n  "])),(l()(),a._19(-1,1,["\n"])),(l()(),a._19(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,9,0,"");l(n,14,0,"menu");l(n,23,0,"");l(n,28,0,"menu");l(n,33,0,u.page);l(n,36,0,"dark");l(n,40,0,"0");l(n,44,0,"1");l(n,85,0,"danger","");l(n,88,0,"close");l(n,113,0,"danger","");l(n,116,0,"close");l(n,141,0,"danger","");l(n,144,0,"close");l(n,191,0,"green","");l(n,194,0,"checkmark");l(n,219,0,"green","");l(n,222,0,"checkmark");l(n,247,0,"green","");l(n,250,0,"checkmark");l(n,275,0,"green","");l(n,278,0,"checkmark");l(n,314,0,"green","");l(n,317,0,"checkmark");l(n,353,0,"green","");l(n,356,0,"checkmark");l(n,381,0,"green","");l(n,384,0,"checkmark");l(n,409,0,"green","");l(n,412,0,"checkmark");l(n,437,0,"green","");l(n,440,0,"checkmark");l(n,465,0,"green","");l(n,468,0,"checkmark")},function(l,n){l(n,4,0,a._11(n,5)._hidden,a._11(n,5)._sbPadding);l(n,7,0,a._11(n,9).isHidden);l(n,13,0,a._11(n,14)._hidden);l(n,21,0,a._11(n,23).isHidden);l(n,27,0,a._11(n,28)._hidden);l(n,32,0,a._11(n,35).ngClassUntouched,a._11(n,35).ngClassTouched,a._11(n,35).ngClassPristine,a._11(n,35).ngClassDirty,a._11(n,35).ngClassValid,a._11(n,35).ngClassInvalid,a._11(n,35).ngClassPending,a._11(n,36)._disabled);l(n,39,0,a._11(n,40)._disabled,a._11(n,40).isActive,a._11(n,40).isActive);l(n,43,0,a._11(n,44)._disabled,a._11(n,44).isActive,a._11(n,44).isActive);l(n,49,0,a._11(n,50).statusbarPadding,a._11(n,50)._hasRefresher);l(n,87,0,a._11(n,88)._hidden);l(n,115,0,a._11(n,116)._hidden);l(n,143,0,a._11(n,144)._hidden);l(n,193,0,a._11(n,194)._hidden);l(n,221,0,a._11(n,222)._hidden);l(n,249,0,a._11(n,250)._hidden);l(n,277,0,a._11(n,278)._hidden);l(n,316,0,a._11(n,317)._hidden);l(n,355,0,a._11(n,356)._hidden);l(n,383,0,a._11(n,384)._hidden);l(n,411,0,a._11(n,412)._hidden);l(n,439,0,a._11(n,440)._hidden);l(n,467,0,a._11(n,468)._hidden)})}u.d(n,"a",function(){return B});var a=u(0),t=u(34),i=u(3),o=u(6),s=u(37),r=u(25),c=u(8),_=u(17),d=u(20),g=u(15),m=u(33),p=u(21),h=u(35),f=u(28),b=u(22),v=u(42),Y=u(36),Z=u(19),k=u(100),j=u(205),z=u(73),C=u(47),y=u(27),T=u(5),I=u(10),w=u(30),P=u(370),A=u(74),S=u(371),F=u(101),x=u(62),U=u(11),L=u(52),N=u(26),V=u(23),M=u(45),D=u(46),O=u(123),E=u(167),R=u(12),H=a.X({encapsulation:2,styles:[],data:{}}),B=a.V("page-sources",E.a,function(l){return a._21(0,[(l()(),a.Z(0,0,null,null,1,"page-sources",[],null,null,null,e,H)),a.Y(1,49152,null,0,E.a,[_.a,R.a],null,null)],null,null)},{},{},[])},400:function(l,n,u){"use strict";function e(l){return a._21(0,[(l()(),a.Z(0,0,null,null,30,"ion-header",[["no-border-bottom",""]],null,null,null,null,null)),a.Y(1,16384,null,0,t.a,[i.a,a.j,a.z,[2,o.a]],null,null),(l()(),a._19(-1,null,["\n  "])),(l()(),a.Z(3,0,null,null,26,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,s.b,s.a)),a.Y(4,49152,null,0,r.a,[c.a,[2,o.a],[2,_.a],i.a,a.j,a.z],null,null),(l()(),a._19(-1,3,["\n    "])),(l()(),a.Z(6,0,null,0,8,"button",[["class","fakeCenter"],["ion-button",""],["menuToggle",""],["right",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==a._11(l,8).toggle()&&e}return e},d.b,d.a)),a.Y(7,1097728,[[1,4]],0,g.a,[[8,""],i.a,a.j,a.z],null,null),a.Y(8,1064960,null,0,m.a,[p.a,[2,o.a],[2,g.a],[2,r.a]],{menuToggle:[0,"menuToggle"]},null),a.Y(9,16384,null,1,h.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),a._17(603979776,1,{_buttons:1}),(l()(),a._19(-1,0,["\n        "])),(l()(),a.Z(12,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(13,147456,null,0,b.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._19(-1,0,["\n    "])),(l()(),a._19(-1,3,["\n      "])),(l()(),a.Z(16,0,null,3,2,"ion-title",[],null,null,null,v.b,v.a)),a.Y(17,49152,null,0,Y.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),(l()(),a._19(-1,0,["Sport"])),(l()(),a._19(-1,3,["\n        "])),(l()(),a.Z(20,0,null,0,8,"button",[["ion-button",""],["menuToggle",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==a._11(l,22).toggle()&&e}return e},d.b,d.a)),a.Y(21,1097728,[[2,4]],0,g.a,[[8,""],i.a,a.j,a.z],null,null),a.Y(22,1064960,null,0,m.a,[p.a,[2,o.a],[2,g.a],[2,r.a]],{menuToggle:[0,"menuToggle"]},null),a.Y(23,16384,null,1,h.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),a._17(603979776,2,{_buttons:1}),(l()(),a._19(-1,0,["\n            "])),(l()(),a.Z(26,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(27,147456,null,0,b.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._19(-1,0,["\n        "])),(l()(),a._19(-1,3,["\n    "])),(l()(),a._19(-1,null,["\n"])),(l()(),a._19(-1,null,["\n"]))],function(l,n){l(n,8,0,"");l(n,13,0,"menu");l(n,22,0,"");l(n,27,0,"menu")},function(l,n){l(n,3,0,a._11(n,4)._hidden,a._11(n,4)._sbPadding);l(n,6,0,a._11(n,8).isHidden);l(n,12,0,a._11(n,13)._hidden);l(n,20,0,a._11(n,22).isHidden);l(n,26,0,a._11(n,27)._hidden)})}u.d(n,"a",function(){return z});var a=u(0),t=u(34),i=u(3),o=u(6),s=u(37),r=u(25),c=u(8),_=u(17),d=u(20),g=u(15),m=u(33),p=u(21),h=u(35),f=u(28),b=u(22),v=u(42),Y=u(36),Z=u(162),k=u(12),j=a.X({encapsulation:2,styles:[],data:{}}),z=a.V("page-sport",Z.a,function(l){return a._21(0,[(l()(),a.Z(0,0,null,null,1,"page-sport",[],null,null,null,e,j)),a.Y(1,49152,null,0,Z.a,[_.a,k.a],null,null)],null,null)},{},{},[])},401:function(l,n,u){"use strict";function e(l){return a._21(0,[(l()(),a.Z(0,0,null,null,30,"ion-header",[["no-border-bottom",""]],null,null,null,null,null)),a.Y(1,16384,null,0,t.a,[i.a,a.j,a.z,[2,o.a]],null,null),(l()(),a._19(-1,null,["\n  "])),(l()(),a.Z(3,0,null,null,26,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,s.b,s.a)),a.Y(4,49152,null,0,r.a,[c.a,[2,o.a],[2,_.a],i.a,a.j,a.z],null,null),(l()(),a._19(-1,3,["\n    "])),(l()(),a.Z(6,0,null,0,8,"button",[["class","fakeCenter"],["ion-button",""],["menuToggle",""],["right",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==a._11(l,8).toggle()&&e}return e},d.b,d.a)),a.Y(7,1097728,[[1,4]],0,g.a,[[8,""],i.a,a.j,a.z],null,null),a.Y(8,1064960,null,0,m.a,[p.a,[2,o.a],[2,g.a],[2,r.a]],{menuToggle:[0,"menuToggle"]},null),a.Y(9,16384,null,1,h.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),a._17(603979776,1,{_buttons:1}),(l()(),a._19(-1,0,["\n        "])),(l()(),a.Z(12,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(13,147456,null,0,b.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._19(-1,0,["\n    "])),(l()(),a._19(-1,3,["\n      "])),(l()(),a.Z(16,0,null,3,2,"ion-title",[],null,null,null,v.b,v.a)),a.Y(17,49152,null,0,Y.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),(l()(),a._19(-1,0,["Tech"])),(l()(),a._19(-1,3,["\n        "])),(l()(),a.Z(20,0,null,0,8,"button",[["ion-button",""],["menuToggle",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==a._11(l,22).toggle()&&e}return e},d.b,d.a)),a.Y(21,1097728,[[2,4]],0,g.a,[[8,""],i.a,a.j,a.z],null,null),a.Y(22,1064960,null,0,m.a,[p.a,[2,o.a],[2,g.a],[2,r.a]],{menuToggle:[0,"menuToggle"]},null),a.Y(23,16384,null,1,h.a,[i.a,a.j,a.z,[2,f.a],[2,r.a]],null,null),a._17(603979776,2,{_buttons:1}),(l()(),a._19(-1,0,["\n            "])),(l()(),a.Z(26,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(27,147456,null,0,b.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._19(-1,0,["\n        "])),(l()(),a._19(-1,3,["\n    "])),(l()(),a._19(-1,null,["\n"])),(l()(),a._19(-1,null,["\n"]))],function(l,n){l(n,8,0,"");l(n,13,0,"menu");l(n,22,0,"");l(n,27,0,"menu")},function(l,n){l(n,3,0,a._11(n,4)._hidden,a._11(n,4)._sbPadding);l(n,6,0,a._11(n,8).isHidden);l(n,12,0,a._11(n,13)._hidden);l(n,20,0,a._11(n,22).isHidden);l(n,26,0,a._11(n,27)._hidden)})}u.d(n,"a",function(){return z});var a=u(0),t=u(34),i=u(3),o=u(6),s=u(37),r=u(25),c=u(8),_=u(17),d=u(20),g=u(15),m=u(33),p=u(21),h=u(35),f=u(28),b=u(22),v=u(42),Y=u(36),Z=u(165),k=u(12),j=a.X({encapsulation:2,styles:[],data:{}}),z=a.V("page-tech",Z.a,function(l){return a._21(0,[(l()(),a.Z(0,0,null,null,1,"page-tech",[],null,null,null,e,j)),a.Y(1,49152,null,0,Z.a,[_.a,k.a],null,null)],null,null)},{},{},[])},402:function(l,n,u){"use strict";function e(l){return t._21(0,[(l()(),t.Z(0,0,null,null,8,"ion-slide",[],null,null,null,i.b,i.a)),t.Y(1,180224,null,0,o.a,[t.j,t.z,s.a],null,null),(l()(),t._19(-1,0,["\n      "])),(l()(),t.Z(3,0,null,0,0,"img",[["class","slide-image"]],[[8,"src",4]],null,null,null,null)),(l()(),t._19(-1,0,["\n      "])),(l()(),t.Z(5,0,null,0,0,"h2",[["class","slide-title"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t._19(-1,0,["\n      "])),(l()(),t.Z(7,0,null,0,0,"p",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t._19(-1,0,["\n    "]))],null,function(l,n){l(n,3,0,n.context.$implicit.image);l(n,5,0,n.context.$implicit.title);l(n,7,0,n.context.$implicit.description)})}function a(l){return t._21(0,[(l()(),t.Z(0,0,null,null,30,"ion-header",[["no-border-bottom",""]],null,null,null,null,null)),t.Y(1,16384,null,0,r.a,[c.a,t.j,t.z,[2,_.a]],null,null),(l()(),t._19(-1,null,["\n  "])),(l()(),t.Z(3,0,null,null,26,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,d.b,d.a)),t.Y(4,49152,null,0,g.a,[m.a,[2,_.a],[2,p.a],c.a,t.j,t.z],null,null),(l()(),t._19(-1,3,["\n    "])),(l()(),t.Z(6,0,null,0,8,"button",[["class","fakeCenter"],["ion-button",""],["menuToggle",""],["right",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==t._11(l,8).toggle()&&e}return e},h.b,h.a)),t.Y(7,1097728,[[1,4]],0,f.a,[[8,""],c.a,t.j,t.z],null,null),t.Y(8,1064960,null,0,b.a,[v.a,[2,_.a],[2,f.a],[2,g.a]],{menuToggle:[0,"menuToggle"]},null),t.Y(9,16384,null,1,Y.a,[c.a,t.j,t.z,[2,Z.a],[2,g.a]],null,null),t._17(603979776,1,{_buttons:1}),(l()(),t._19(-1,0,["\n        "])),(l()(),t.Z(12,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(13,147456,null,0,k.a,[c.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t._19(-1,0,["\n    "])),(l()(),t._19(-1,3,["\n      "])),(l()(),t.Z(16,0,null,3,2,"ion-title",[],null,null,null,j.b,j.a)),t.Y(17,49152,null,0,z.a,[c.a,t.j,t.z,[2,Z.a],[2,g.a]],null,null),(l()(),t._19(-1,0,["Tutorial"])),(l()(),t._19(-1,3,["\n        "])),(l()(),t.Z(20,0,null,0,8,"button",[["ion-button",""],["menuToggle",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==t._11(l,22).toggle()&&e}return e},h.b,h.a)),t.Y(21,1097728,[[2,4]],0,f.a,[[8,""],c.a,t.j,t.z],null,null),t.Y(22,1064960,null,0,b.a,[v.a,[2,_.a],[2,f.a],[2,g.a]],{menuToggle:[0,"menuToggle"]},null),t.Y(23,16384,null,1,Y.a,[c.a,t.j,t.z,[2,Z.a],[2,g.a]],null,null),t._17(603979776,2,{_buttons:1}),(l()(),t._19(-1,0,["\n            "])),(l()(),t.Z(26,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(27,147456,null,0,k.a,[c.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t._19(-1,0,["\n        "])),(l()(),t._19(-1,3,["\n    "])),(l()(),t._19(-1,null,["\n"])),(l()(),t._19(-1,null,["\n"])),(l()(),t.Z(32,0,null,null,25,"ion-content",[["class","tutorial-page"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,C.b,C.a)),t.Y(33,4374528,null,0,y.a,[c.a,T.a,I.a,t.j,t.z,m.a,w.a,t.u,[2,_.a],[2,p.a]],null,null),(l()(),t._19(-1,1,["\n  "])),(l()(),t.Z(35,0,null,1,21,"ion-slides",[["pager",""]],null,null,null,P.b,P.a)),t.Y(36,1228800,null,0,s.a,[c.a,T.a,t.u,[2,_.a],t.j,t.z],{pager:[0,"pager"]},null),(l()(),t._19(-1,0,["\n    "])),(l()(),t.U(16777216,null,0,1,null,e)),t.Y(39,802816,null,0,A.h,[t.I,t.F,t.p],{ngForOf:[0,"ngForOf"]},null),(l()(),t._19(-1,0,["\n    "])),(l()(),t.Z(41,0,null,0,14,"ion-slide",[],null,null,null,i.b,i.a)),t.Y(42,180224,null,0,o.a,[t.j,t.z,s.a],null,null),(l()(),t._19(-1,0,["\n      "])),(l()(),t.Z(44,0,null,0,0,"img",[["class","slide-image"],["src","../../assets/imgs/ica-slidebox-img-4.png"]],null,null,null,null,null)),(l()(),t._19(-1,0,["\n      "])),(l()(),t.Z(46,0,null,0,1,"h2",[["class","slide-title"]],null,null,null,null,null)),(l()(),t._19(-1,null,["Ready to Play?"])),(l()(),t._19(-1,0,["\n      "])),(l()(),t.Z(49,0,null,0,5,"button",[["clear",""],["color","primary"],["icon-end",""],["ion-button",""],["large",""]],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.tutorialDone()&&e}return e},h.b,h.a)),t.Y(50,1097728,null,0,f.a,[[8,""],c.a,t.j,t.z],{color:[0,"color"],large:[1,"large"],clear:[2,"clear"]},null),(l()(),t._19(-1,0,["\n        Continue\n        "])),(l()(),t.Z(52,0,null,0,1,"ion-icon",[["name","arrow-forward"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(53,147456,null,0,k.a,[c.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t._19(-1,0,["\n      "])),(l()(),t._19(-1,0,["\n    "])),(l()(),t._19(-1,0,["\n  "])),(l()(),t._19(-1,1,["\n"])),(l()(),t._19(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,8,0,"");l(n,13,0,"menu");l(n,22,0,"");l(n,27,0,"menu");l(n,36,0,"");l(n,39,0,u.slides);l(n,50,0,"primary","","");l(n,53,0,"arrow-forward")},function(l,n){l(n,3,0,t._11(n,4)._hidden,t._11(n,4)._sbPadding);l(n,6,0,t._11(n,8).isHidden);l(n,12,0,t._11(n,13)._hidden);l(n,20,0,t._11(n,22).isHidden);l(n,26,0,t._11(n,27)._hidden);l(n,32,0,t._11(n,33).statusbarPadding,t._11(n,33)._hasRefresher);l(n,52,0,t._11(n,53)._hidden)})}u.d(n,"a",function(){return U});var t=u(0),i=u(371),o=u(101),s=u(74),r=u(34),c=u(3),_=u(6),d=u(37),g=u(25),m=u(8),p=u(17),h=u(20),f=u(15),b=u(33),v=u(21),Y=u(35),Z=u(28),k=u(22),j=u(42),z=u(36),C=u(47),y=u(27),T=u(5),I=u(10),w=u(30),P=u(370),A=u(18),S=u(112),F=u(12),x=t.X({encapsulation:2,styles:[],data:{}}),U=t.V("page-tutorial",S.a,function(l){return t._21(0,[(l()(),t.Z(0,0,null,null,1,"page-tutorial",[],null,null,null,a,x)),t.Y(1,49152,null,0,S.a,[p.a,F.a,T.a],null,null)],null,null)},{},{},[])},403:function(l,n,u){"use strict";function e(l){return r._21(0,[(l()(),r.Z(0,0,null,null,30,"ion-header",[["no-border-bottom",""]],null,null,null,null,null)),r.Y(1,16384,null,0,X.a,[K.a,r.j,r.z,[2,G.a]],null,null),(l()(),r._19(-1,null,["\n  "])),(l()(),r.Z(3,0,null,null,26,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,J.b,J.a)),r.Y(4,49152,null,0,Q.a,[ll.a,[2,G.a],[2,nl.a],K.a,r.j,r.z],null,null),(l()(),r._19(-1,3,["\n    "])),(l()(),r.Z(6,0,null,0,8,"button",[["class","fakeCenter"],["ion-button",""],["menuToggle",""],["right",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==r._11(l,8).toggle()&&e}return e},ul.b,ul.a)),r.Y(7,1097728,[[1,4]],0,el.a,[[8,""],K.a,r.j,r.z],null,null),r.Y(8,1064960,null,0,al.a,[tl.a,[2,G.a],[2,el.a],[2,Q.a]],{menuToggle:[0,"menuToggle"]},null),r.Y(9,16384,null,1,il.a,[K.a,r.j,r.z,[2,ol.a],[2,Q.a]],null,null),r._17(603979776,1,{_buttons:1}),(l()(),r._19(-1,0,["\n        "])),(l()(),r.Z(12,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),r.Y(13,147456,null,0,sl.a,[K.a,r.j,r.z],{name:[0,"name"]},null),(l()(),r._19(-1,0,["\n    "])),(l()(),r._19(-1,3,["\n      "])),(l()(),r.Z(16,0,null,3,2,"ion-title",[],null,null,null,rl.b,rl.a)),r.Y(17,49152,null,0,cl.a,[K.a,r.j,r.z,[2,ol.a],[2,Q.a]],null,null),(l()(),r._19(-1,0,["Favorieten"])),(l()(),r._19(-1,3,["\n        "])),(l()(),r.Z(20,0,null,0,8,"button",[["ion-button",""],["menuToggle",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==r._11(l,22).toggle()&&e}return e},ul.b,ul.a)),r.Y(21,1097728,[[2,4]],0,el.a,[[8,""],K.a,r.j,r.z],null,null),r.Y(22,1064960,null,0,al.a,[tl.a,[2,G.a],[2,el.a],[2,Q.a]],{menuToggle:[0,"menuToggle"]},null),r.Y(23,16384,null,1,il.a,[K.a,r.j,r.z,[2,ol.a],[2,Q.a]],null,null),r._17(603979776,2,{_buttons:1}),(l()(),r._19(-1,0,["\n            "])),(l()(),r.Z(26,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),r.Y(27,147456,null,0,sl.a,[K.a,r.j,r.z],{name:[0,"name"]},null),(l()(),r._19(-1,0,["\n        "])),(l()(),r._19(-1,3,["\n    "])),(l()(),r._19(-1,null,["\n"])),(l()(),r._19(-1,null,["\n"]))],function(l,n){l(n,8,0,"");l(n,13,0,"menu");l(n,22,0,"");l(n,27,0,"menu")},function(l,n){l(n,3,0,r._11(n,4)._hidden,r._11(n,4)._sbPadding);l(n,6,0,r._11(n,8).isHidden);l(n,12,0,r._11(n,13)._hidden);l(n,20,0,r._11(n,22).isHidden);l(n,26,0,r._11(n,27)._hidden)})}function a(l){return r._21(0,[(l()(),r.Z(0,0,null,null,15,"ion-row",[["align-items-center",""],["class","splash row"],["justify-content-center",""],["style","height: 100%"]],null,null,null,null,null)),r.Y(1,16384,null,0,vl.a,[],null,null),(l()(),r._19(-1,null,["\n    "])),(l()(),r.Z(3,0,null,null,11,"div",[["class","spinner"]],null,null,null,null,null)),(l()(),r._19(-1,null,["\n      "])),(l()(),r.Z(5,0,null,null,3,"div",[["class","NewsAgeLogo"]],null,null,null,null,null)),(l()(),r._19(-1,null,["\n        "])),(l()(),r.Z(7,0,null,null,0,"img",[["class","NewsAge"],["src","../assets/imgs/NewsAgeLogo.png"]],null,null,null,null,null)),(l()(),r._19(-1,null,["\n      "])),(l()(),r._19(-1,null,["\n      "])),(l()(),r.Z(10,0,null,null,3,"div",[["class","loader"]],null,null,null,null,null)),(l()(),r._19(-1,null,["\n        "])),(l()(),r.Z(12,0,null,null,0,"img",[["src","../assets/svg/spinner/tail-spin.svg"]],null,null,null,null,null)),(l()(),r._19(-1,null,["\n      "])),(l()(),r._19(-1,null,["\n    "])),(l()(),r._19(-1,null,["\n  "]))],null,null)}function t(l){return r._21(0,[(l()(),r.Z(0,0,null,null,13,"button",[["class","item item-block"],["detail-none",""],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(l,n,u){var e=!0,a=l.component;if("click"===n){e=!1!==r._11(l,6).close()&&e}if("click"===n){e=!1!==a.openPage(l.context.$implicit)&&e}return e},Yl.b,Yl.a)),r.Y(1,1097728,null,3,Zl.a,[kl.a,K.a,r.j,r.z,[2,jl.a]],null,null),r._17(335544320,8,{contentLabel:0}),r._17(603979776,9,{_buttons:1}),r._17(603979776,10,{_icons:1}),r.Y(5,16384,null,0,zl.a,[],null,null),r.Y(6,16384,null,0,Cl.a,[tl.a],{menuClose:[0,"menuClose"]},null),(l()(),r._19(-1,2,["\n          "])),(l()(),r.Z(8,0,null,2,1,"ion-icon",[["role","img"],["slot","start"]],[[2,"hide",null]],null,null,null,null)),r.Y(9,147456,[[10,4]],0,sl.a,[K.a,r.j,r.z],{name:[0,"name"]},null),(l()(),r._19(-1,2,["\n          "])),(l()(),r.Z(11,0,null,2,1,"span",[["class","menu-titles"]],null,null,null,null,null)),(l()(),r._19(12,null,["\n            ","\n          "])),(l()(),r._19(-1,2,["\n        "]))],function(l,n){l(n,6,0,"");l(n,9,0,n.context.$implicit.icon)},function(l,n){l(n,8,0,r._11(n,9)._hidden);l(n,12,0,n.context.$implicit.title)})}function i(l){return r._21(0,[r._17(402653184,1,{nav:0}),(l()(),r._19(-1,null,["\n"])),(l()(),r.Z(2,0,null,null,5,"ion-grid",[["class","gridPadding grid"],["style","height: 100%"]],null,null,null,null,null)),r.Y(3,16384,null,0,yl.a,[],null,null),(l()(),r._19(-1,null,["\n  "])),(l()(),r.U(16777216,null,null,1,null,a)),r.Y(6,16384,null,0,Tl.i,[r.I,r.F],{ngIf:[0,"ngIf"]},null),(l()(),r._19(-1,null,["\n"])),(l()(),r._19(-1,null,["\n"])),(l()(),r._19(-1,null,["\n"])),(l()(),r._19(-1,null,["\n"])),(l()(),r.Z(11,0,null,null,58,"ion-menu",[["id","myMenu"],["role","navigation"]],[[8,"className",0]],null,null,Il.b,Il.a)),r._15(6144,null,wl.a,null,[Pl.a]),r.Y(13,245760,null,2,Pl.a,[tl.a,r.j,K.a,Al.a,r.z,Sl.a,Fl.l,xl.a,ll.a],{content:[0,"content"],id:[1,"id"],swipeEnabled:[2,"swipeEnabled"]},null),r._17(335544320,2,{menuContent:0}),r._17(335544320,3,{menuNav:0}),(l()(),r._19(-1,0,["\n  "])),(l()(),r.Z(17,0,null,0,51,"ion-content",[["id","contentAnimation"],["menuToggle",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null],[8,"hidden",0]],[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==r._11(l,19).toggle()&&e}return e},Ul.b,Ul.a)),r.Y(18,4374528,[[2,4]],0,Ll.a,[K.a,Al.a,xl.a,r.j,r.z,ll.a,Sl.a,r.u,[2,G.a],[2,nl.a]],null,null),r.Y(19,1064960,null,0,al.a,[tl.a,[2,G.a],[2,el.a],[2,Q.a]],{menuToggle:[0,"menuToggle"]},null),r.Y(20,16384,null,1,il.a,[K.a,r.j,r.z,[2,ol.a],[2,Q.a]],null,null),r._17(603979776,4,{_buttons:1}),(l()(),r._19(-1,1,["\n    "])),(l()(),r.Z(23,0,null,1,44,"ion-list",[],null,null,null,null,null)),r.Y(24,16384,null,0,Nl.a,[K.a,r.j,r.z,Al.a,Fl.l,xl.a],null,null),(l()(),r._19(-1,null,["\n      "])),(l()(),r.Z(26,0,null,null,16,"ion-navbar",[["class","menuNavBar toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,J.b,J.a)),r.Y(27,49152,null,0,Q.a,[ll.a,[2,G.a],[2,nl.a],K.a,r.j,r.z],null,null),(l()(),r._19(-1,3,["\n        "])),(l()(),r.Z(29,0,null,3,12,"ion-grid",[["class","gridMenu grid"]],null,null,null,null,null)),r.Y(30,16384,null,0,yl.a,[],null,null),(l()(),r._19(-1,null,["\n          "])),(l()(),r.Z(32,0,null,null,8,"ion-col",[["class","menuCol col"],["col-9",""]],null,null,null,null,null)),r.Y(33,16384,null,0,Vl.a,[],null,null),(l()(),r._19(-1,null,["\n            "])),(l()(),r.Z(35,0,null,null,0,"img",[["class","avatar-menu"]],[[8,"src",4]],null,null,null,null)),(l()(),r._19(-1,null,["\n            "])),(l()(),r.Z(37,0,null,null,2,"h5",[["ngClass","usernameMenu"]],null,null,null,null,null)),r.Y(38,278528,null,0,Tl.g,[r.p,r.q,r.j,r.A],{ngClass:[0,"ngClass"]},null),(l()(),r._19(39,null,["",""])),(l()(),r._19(-1,null,["\n          "])),(l()(),r._19(-1,null,["\n        "])),(l()(),r._19(-1,3,["\n      "])),(l()(),r._19(-1,null,["\n      "])),(l()(),r.Z(44,0,null,null,9,"ion-item",[["class","item item-block"]],null,null,null,Yl.b,Yl.a)),r.Y(45,1097728,null,3,Zl.a,[kl.a,K.a,r.j,r.z,[2,jl.a]],null,null),r._17(335544320,5,{contentLabel:0}),r._17(603979776,6,{_buttons:1}),r._17(603979776,7,{_icons:1}),r.Y(49,16384,null,0,zl.a,[],null,null),(l()(),r._19(-1,2,["\n        "])),(l()(),r.U(16777216,null,2,1,null,t)),r.Y(52,802816,null,0,Tl.h,[r.I,r.F,r.p],{ngForOf:[0,"ngForOf"]},null),(l()(),r._19(-1,2,["\n      "])),(l()(),r._19(-1,null,["\n      "])),(l()(),r.Z(55,0,null,null,11,"ion-footer",[["class","footerMenu"]],null,null,null,null,null)),r.Y(56,16384,null,0,Ml.a,[K.a,r.j,r.z,[2,G.a]],null,null),(l()(),r._19(-1,null,["\n        "])),(l()(),r.Z(58,0,null,null,7,"ion-toolbar",[["class","toolbarFooter toolbar"]],[[2,"statusbar-padding",null]],null,null,Dl.b,Dl.a)),r.Y(59,49152,null,0,ol.a,[K.a,r.j,r.z],null,null),(l()(),r._19(-1,3,["\n          "])),(l()(),r.Z(61,0,null,3,3,"div",[["class","versienummer"]],null,null,null,null,null)),(l()(),r.Z(62,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),r._19(-1,null,["©NewsAge"])),(l()(),r._19(-1,null,[" V5.0.6"])),(l()(),r._19(-1,3,["\n        "])),(l()(),r._19(-1,null,["\n      "])),(l()(),r._19(-1,null,["\n    "])),(l()(),r._19(-1,1,["\n  "])),(l()(),r._19(-1,0,["\n"])),(l()(),r._19(-1,null,["\n\n\n"])),(l()(),r._19(-1,null,["\n"])),(l()(),r.Z(72,0,null,null,2,"ion-nav",[["swipeBackEnabled","false"]],[[8,"className",0]],null,null,Ol.b,Ol.a)),r._15(6144,null,wl.a,null,[El.a]),r.Y(74,4374528,[[1,4],["content",4]],0,El.a,[[2,G.a],[2,nl.a],ll.a,K.a,Al.a,r.j,r.u,r.z,r.i,Fl.l,Rl.a,[2,Hl.a],xl.a,r.k],{swipeBackEnabled:[0,"swipeBackEnabled"],root:[1,"root"]},null),(l()(),r._19(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,6,0,u.showSplash);l(n,13,0,r._11(n,74),"myMenu",!1);l(n,19,0,"");l(n,38,0,"usernameMenu");l(n,52,0,u.pages);l(n,74,0,"false",u.rootPage)},function(l,n){var u=n.component;l(n,11,0,u.selectedTheme);l(n,17,0,r._11(n,18).statusbarPadding,r._11(n,18)._hasRefresher,r._11(n,19).isHidden);l(n,26,0,r._11(n,27)._hidden,r._11(n,27)._sbPadding);l(n,35,0,r._2(1,"",u.profilepicture,""));l(n,39,0,u.username);l(n,58,0,r._11(n,59)._sbPadding);l(n,72,0,u.selectedTheme)})}function o(l){return r._21(0,[(l()(),r.Z(0,0,null,null,76,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,Ul.b,Ul.a)),r.Y(1,4374528,null,0,Ll.a,[K.a,Al.a,xl.a,r.j,r.z,ll.a,Sl.a,r.u,[2,G.a],[2,nl.a]],null,null),(l()(),r._19(-1,1,["\n  "])),(l()(),r.Z(3,0,null,1,72,"ion-grid",[["class","gridPadding grid"],["style","height: 100%"]],null,null,null,null,null)),r.Y(4,16384,null,0,yl.a,[],null,null),(l()(),r._19(-1,null,["\n    "])),(l()(),r.Z(6,0,null,null,68,"ion-row",[["align-items-center",""],["class","row"],["justify-content-center",""],["style","height: 100%"]],null,null,null,null,null)),r.Y(7,16384,null,0,vl.a,[],null,null),(l()(),r._19(-1,null,["\n\n      "])),(l()(),r.Z(9,0,null,null,64,"ion-col",[["class","col"],["col-12",""]],null,null,null,null,null)),r.Y(10,16384,null,0,Vl.a,[],null,null),(l()(),r._19(-1,null,["\n        "])),(l()(),r.Z(12,0,null,null,7,"div",[["class","ValidatieText"]],null,null,null,null,null)),(l()(),r._19(-1,null,["\n          "])),(l()(),r.Z(14,0,null,null,1,"h2",[["class","WelkomText"]],null,null,null,null,null)),(l()(),r._19(-1,null,["Welkom"])),(l()(),r._19(-1,null,["\n          "])),(l()(),r.Z(17,0,null,null,1,"p",[["class","gavederText"]],null,null,null,null,null)),(l()(),r._19(-1,null,["Log-in om verder te gaan.."])),(l()(),r._19(-1,null,["\n        "])),(l()(),r._19(-1,null,["\n        "])),(l()(),r.Z(21,0,null,null,51,"div",[["class","ValidatieLogin"]],null,null,null,null,null)),(l()(),r._19(-1,null,["\n          "])),(l()(),r.Z(23,0,null,null,16,"ion-item",[["class","darkThemeLogin item item-block"]],null,null,null,Yl.b,Yl.a)),r.Y(24,1097728,null,3,Zl.a,[kl.a,K.a,r.j,r.z,[2,jl.a]],null,null),r._17(335544320,1,{contentLabel:0}),r._17(603979776,2,{_buttons:1}),r._17(603979776,3,{_icons:1}),r.Y(28,16384,null,0,zl.a,[],null,null),(l()(),r._19(-1,2,["\n            "])),(l()(),r.Z(30,0,null,1,2,"ion-label",[["color","primary"],["floating",""]],null,null,null,null,null)),r.Y(31,16384,[[1,4]],0,Kl.a,[K.a,r.j,r.z,[8,""],[8,null],[8,null],[8,null]],{color:[0,"color"]},null),(l()(),r._19(-1,null,["Email"])),(l()(),r._19(-1,2,["\n            "])),(l()(),r.Z(34,0,null,3,4,"ion-input",[["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0;if("ngModelChange"===n){e=!1!==(l.component.email=u)&&e}return e},Gl.b,Gl.a)),r.Y(35,671744,null,0,A.n,[[8,null],[8,null],[8,null],[8,null]],{model:[0,"model"]},{update:"ngModelChange"}),r._15(2048,null,A.k,null,[A.n]),r.Y(37,16384,null,0,A.l,[A.k],null,null),r.Y(38,5423104,null,0,Jl.a,[K.a,Al.a,kl.a,ll.a,r.j,r.z,[2,Ll.a],[2,Zl.a],[2,A.k],xl.a],{type:[0,"type"]},null),(l()(),r._19(-1,2,["\n          "])),(l()(),r._19(-1,null,["\n          "])),(l()(),r.Z(41,0,null,null,16,"ion-item",[["class","darkThemeLogin item item-block"]],null,null,null,Yl.b,Yl.a)),r.Y(42,1097728,null,3,Zl.a,[kl.a,K.a,r.j,r.z,[2,jl.a]],null,null),r._17(335544320,4,{contentLabel:0}),r._17(603979776,5,{_buttons:1}),r._17(603979776,6,{_icons:1}),r.Y(46,16384,null,0,zl.a,[],null,null),(l()(),r._19(-1,2,["\n            "])),(l()(),r.Z(48,0,null,1,2,"ion-label",[["color","primary"],["floating",""]],null,null,null,null,null)),r.Y(49,16384,[[4,4]],0,Kl.a,[K.a,r.j,r.z,[8,""],[8,null],[8,null],[8,null]],{color:[0,"color"]},null),(l()(),r._19(-1,null,["Wachtwoord"])),(l()(),r._19(-1,2,["\n            "])),(l()(),r.Z(52,0,null,3,4,"ion-input",[["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0;if("ngModelChange"===n){e=!1!==(l.component.password=u)&&e}return e},Gl.b,Gl.a)),r.Y(53,671744,null,0,A.n,[[8,null],[8,null],[8,null],[8,null]],{model:[0,"model"]},{update:"ngModelChange"}),r._15(2048,null,A.k,null,[A.n]),r.Y(55,16384,null,0,A.l,[A.k],null,null),r.Y(56,5423104,null,0,Jl.a,[K.a,Al.a,kl.a,ll.a,r.j,r.z,[2,Ll.a],[2,Zl.a],[2,A.k],xl.a],{type:[0,"type"]},null),(l()(),r._19(-1,2,["\n          "])),(l()(),r._19(-1,null,["\n          "])),(l()(),r.Z(59,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),r._19(-1,null,["\n          "])),(l()(),r.Z(61,0,null,null,10,"div",[["class","Validatie2Login"]],null,null,null,null,null)),(l()(),r._19(-1,null,["\n            "])),(l()(),r.Z(63,0,null,null,2,"button",[["class","loginButton"],["ion-button",""]],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.signIn()&&e}return e},ul.b,ul.a)),r.Y(64,1097728,null,0,el.a,[[8,""],K.a,r.j,r.z],null,null),(l()(),r._19(-1,0,["Log-in"])),(l()(),r._19(-1,null,["\n            "])),(l()(),r.Z(67,0,null,null,3,"p",[["class","nogGeenAccount"]],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==l.component.goRegister()&&e}return e},null,null)),(l()(),r._19(-1,null,["Nog geen account? "])),(l()(),r.Z(69,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),r._19(-1,null,["Registreer"])),(l()(),r._19(-1,null,["\n          "])),(l()(),r._19(-1,null,["\n        "])),(l()(),r._19(-1,null,["\n      "])),(l()(),r._19(-1,null,["\n    "])),(l()(),r._19(-1,null,["\n  "])),(l()(),r._19(-1,1,["\n"])),(l()(),r._19(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,31,0,"primary");l(n,35,0,u.email);l(n,38,0,"email");l(n,49,0,"primary");l(n,53,0,u.password);l(n,56,0,"password")},function(l,n){l(n,0,0,r._11(n,1).statusbarPadding,r._11(n,1)._hasRefresher);l(n,34,0,r._11(n,37).ngClassUntouched,r._11(n,37).ngClassTouched,r._11(n,37).ngClassPristine,r._11(n,37).ngClassDirty,r._11(n,37).ngClassValid,r._11(n,37).ngClassInvalid,r._11(n,37).ngClassPending);l(n,52,0,r._11(n,55).ngClassUntouched,r._11(n,55).ngClassTouched,r._11(n,55).ngClassPristine,r._11(n,55).ngClassDirty,r._11(n,55).ngClassValid,r._11(n,55).ngClassInvalid,r._11(n,55).ngClassPending)})}Object.defineProperty(n,"__esModule",{value:!0});var s=u(65),r=u(0),c=(u(1),u(9),u(156)),_=u(157),d=function(){return function(l,n){this.navCtrl=l,this.navParams=n}}(),g=u(75),m=u(142),p=u(109),h=u(85),f=u(110),b=u(167),v=u(112),Y=function(){function l(l,n,u,e,a,t,i,o){var s=this;this.platform=l,this.splashScreen=u,this.settings=e,this.modalCtrl=a,this.menuCtrl=t,this.events=i,this.alertCtrl=o,this.rootPage=g.a,this.showSplash=!0,this.settings.getActiveTheme().subscribe(function(l){return s.selectedTheme=l}),l.ready().then(function(){s.splashScreen.hide(),localStorage.getItem("sessionToken")?s.nav.setRoot(f.a):localStorage.getItem("sessionToken")||(s.nav.setRoot(g.a),localStorage.clear()),n.backgroundColorByHexString("#225C73"),s.platform.registerBackButtonAction(function(){1==s.nav.length()&&(s.showedAlert?(s.showedAlert=!1,s.confirmAlert.dismiss()):s.confirmExitApp()),s.nav.pop()}),s.events.subscribe("username",function(l){s.username=l}),s.events.subscribe("profilepicture",function(l){s.profilepicture=l})}),this.pages=[{title:"Home",component:f.a,icon:"home"},{title:"Sources",component:b.a,icon:"star"},{title:"Favorieten",component:d,icon:"heart"},{title:"Notificaties",component:p.a,icon:"notifications"},{title:"Tutorial",component:v.a,icon:"map"},{title:"Instellingen",component:p.a,icon:"settings"}],"light-theme"==localStorage.getItem("themeColor")?this.settings.setActiveTheme("light-theme"):"dark-theme"==localStorage.getItem("themeColor")&&this.settings.setActiveTheme("dark-theme")}return l.prototype.ngOnInit=function(){var l=this;setTimeout(function(){return l.showSplash=!1},3500)},l.prototype.openPage=function(l){this.nav.setRoot(l.component)},l.prototype.confirmExitApp=function(){var l=this;this.showedAlert=!0,this.confirmAlert=this.alertCtrl.create({title:"Sluiten",message:"Wilt u de NewsAge app verlaten ?",buttons:[{text:"Annuleer",handler:function(){l.showedAlert=!1}},{text:"Verlaat",handler:function(){l.platform.exitApp()}}]}),this.confirmAlert.present()},l}(),Z=u(141),k=u(145),j=u(143),z=u(373),C=u(155),y=u(374),T=u(154),I=(u(166),u(162),u(163),u(160),u(164),u(165),u(159),u(158),u(161),u(221)),w=u(219),P=u(32),A=u(19),S=u(375),F=function(){return function(){}}(),x=u(220),U=u(223),L=u(224),N=function(){function l(l){this.http=l}return Object.defineProperty(l.prototype,"name",{get:function(){return this._username},set:function(l){this._username=l},enumerable:!0,configurable:!0}),l}(),V=function(){return function(){}}(),M=u(89),D=u(377),O=u(378),E=u(379),R=u(380),H=u(381),B=u(382),$=u(383),W=u(384),q=u(385),X=u(34),K=u(3),G=u(6),J=u(37),Q=u(25),ll=u(8),nl=u(17),ul=u(20),el=u(15),al=u(33),tl=u(21),il=u(35),ol=u(28),sl=u(22),rl=u(42),cl=u(36),_l=u(12),dl=r.X({encapsulation:2,styles:[],data:{}}),gl=r.V("page-favorieten",d,function(l){return r._21(0,[(l()(),r.Z(0,0,null,null,1,"page-favorieten",[],null,null,null,e,dl)),r.Y(1,49152,null,0,d,[nl.a,_l.a],null,null)],null,null)},{},{},[]),ml=u(393),pl=u(397),hl=u(395),fl=u(390),bl=u(402),vl=u(71),Yl=u(52),Zl=u(26),kl=u(23),jl=u(45),zl=u(46),Cl=u(184),yl=u(70),Tl=u(18),Il=u(697),wl=u(63),Pl=u(132),Al=u(5),Sl=u(30),Fl=u(11),xl=u(10),Ul=u(47),Ll=u(27),Nl=u(62),Vl=u(69),Ml=u(97),Dl=u(258),Ol=u(698),El=u(82),Rl=u(54),Hl=u(41),Bl=u(138),$l=u(64),Wl=u(68),ql=r.X({encapsulation:2,styles:[],data:{}}),Xl=r.V("ng-component",Y,function(l){return r._21(0,[(l()(),r.Z(0,0,null,null,3,"ng-component",[],null,null,null,i,ql)),r._15(4608,null,m.a,m.a,[]),r._15(135680,null,El.a,El.a,[[2,G.a],[2,nl.a],ll.a,K.a,Al.a,r.j,r.u,r.z,r.i,Fl.l,Rl.a,[2,Hl.a],xl.a,r.k]),r.Y(3,114688,null,0,Y,[Al.a,_.a,c.a,h.a,Bl.a,tl.a,$l.a,Wl.a],null,null)],function(l,n){l(n,3,0)},null)},{},{},[]),Kl=u(56),Gl=u(144),Jl=u(72),Ql=u(81),ln=u(84),nn=r.X({encapsulation:2,styles:[],data:{}}),un=r.V("page-home",g.a,function(l){return r._21(0,[(l()(),r.Z(0,0,null,null,1,"page-home",[],null,null,null,o,nn)),r.Y(1,49152,null,0,g.a,[nl.a,Ql.a,P.c,ln.a,tl.a,$l.a,j.a,Al.a,m.a],null,null)],null,null)},{},{},[]),en=u(398),an=u(400),tn=u(392),on=u(389),sn=u(394),rn=u(401),cn=u(388),_n=u(399),dn=u(396),gn=u(387),mn=u(391),pn=u(187),hn=u(121),fn=u(51),bn=u(218),vn=u(91),Yn=u(76),Zn=u(126),kn=u(194),jn=u(189),zn=u(376),Cn=u(372),yn=u(188),Tn=u(185),In=u(190),wn=r.W(V,[M.b],function(l){return r._7([r._8(512,r.i,r.S,[[8,[D.a,O.a,E.a,R.a,H.a,B.a,$.a,W.a,q.a,gl,ml.a,pl.a,hl.a,fl.a,bl.a,Xl,un,en.a,an.a,tn.a,on.a,sn.a,rn.a,cn.a,_n.a,dn.a,gn.a,mn.a]],[3,r.i],r.s]),r._8(5120,r.r,r._16,[[3,r.r]]),r._8(4608,Tl.k,Tl.j,[r.r,[2,Tl.t]]),r._8(5120,r.b,r._1,[]),r._8(5120,r.p,r._9,[]),r._8(5120,r.q,r._12,[]),r._8(4608,s.c,s.q,[Tl.c]),r._8(6144,r.D,null,[s.c]),r._8(4608,s.f,pn.a,[]),r._8(5120,s.d,function(l,n,u,e,a){return[new s.k(l,n),new s.o(u),new s.n(e,a)]},[Tl.c,r.u,Tl.c,Tl.c,s.f]),r._8(4608,s.e,s.e,[s.d,r.u]),r._8(135680,s.m,s.m,[Tl.c]),r._8(4608,s.l,s.l,[s.e,s.m]),r._8(6144,r.B,null,[s.l]),r._8(6144,s.p,null,[s.m]),r._8(4608,r.G,r.G,[r.u]),r._8(4608,s.h,s.h,[Tl.c]),r._8(4608,s.i,s.i,[Tl.c]),r._8(4608,P.i,P.o,[Tl.c,r.w,P.m]),r._8(4608,P.p,P.p,[P.i,P.n]),r._8(5120,P.a,function(l){return[l]},[P.p]),r._8(4608,P.l,P.l,[]),r._8(6144,P.j,null,[P.l]),r._8(4608,P.h,P.h,[P.j]),r._8(6144,P.b,null,[P.h]),r._8(4608,P.f,P.k,[P.b,r.o]),r._8(4608,P.c,P.c,[P.f]),r._8(4608,A.s,A.s,[]),r._8(4608,A.d,A.d,[]),r._8(4608,hn.a,hn.a,[ll.a,K.a]),r._8(4608,Wl.a,Wl.a,[ll.a,K.a]),r._8(4608,$l.a,$l.a,[]),r._8(4608,kl.a,kl.a,[]),r._8(4608,fn.a,fn.a,[Al.a]),r._8(4608,Sl.a,Sl.a,[K.a,Al.a,r.u,xl.a]),r._8(4608,Ql.a,Ql.a,[ll.a,K.a]),r._8(5120,Tl.f,bn.c,[Tl.q,[2,Tl.a],K.a]),r._8(4608,Tl.e,Tl.e,[Tl.f]),r._8(5120,vn.b,vn.d,[ll.a,vn.a]),r._8(5120,Hl.a,Hl.b,[ll.a,vn.b,Tl.e,Yn.b,r.i]),r._8(4608,Bl.a,Bl.a,[ll.a,K.a,Hl.a]),r._8(4608,Zn.a,Zn.a,[ll.a,K.a]),r._8(4608,kn.a,kn.a,[ll.a,K.a,Hl.a]),r._8(4608,jn.a,jn.a,[K.a,Al.a,xl.a,ll.a,Fl.l]),r._8(4608,ln.a,ln.a,[ll.a,K.a]),r._8(4608,Rl.a,Rl.a,[Al.a,K.a]),r._8(5120,zn.a,zn.c,[zn.b]),r._8(4608,_.a,_.a,[]),r._8(4608,c.a,c.a,[]),r._8(4608,h.a,h.a,[]),r._8(4608,Z.a,Z.a,[]),r._8(4608,k.a,k.a,[]),r._8(4608,j.a,j.a,[]),r._8(4608,z.a,z.a,[]),r._8(4608,T.a,T.a,[]),r._8(4608,C.a,C.a,[]),r._8(4608,y.a,y.a,[]),r._8(4608,N,N,[P.c]),r._8(512,Tl.b,Tl.b,[]),r._8(512,r.k,Cn.a,[]),r._8(256,K.b,{mode:"md",scrollAssist:!1,autoFocusAssist:!1},[]),r._8(1024,yn.a,yn.b,[]),r._8(1024,Al.a,Al.b,[s.b,yn.a,r.u]),r._8(1024,K.a,K.c,[K.b,Al.a]),r._8(512,xl.a,xl.a,[Al.a]),r._8(512,tl.a,tl.a,[]),r._8(512,ll.a,ll.a,[K.a,Al.a,[2,tl.a]]),r._8(512,Fl.l,Fl.l,[ll.a]),r._8(256,vn.a,{links:[{loadChildren:"../pages/about/about.module.ngfactory#AboutPageModuleNgFactory",name:"AboutPage",segment:"about",priority:"low",defaultHistory:[]},{loadChildren:"../pages/admin/admin.module.ngfactory#AdminPageModuleNgFactory",name:"AdminPage",segment:"admin",priority:"low",defaultHistory:[]},{loadChildren:"../pages/auto/auto.module.ngfactory#AutoPageModuleNgFactory",name:"AutoPage",segment:"auto",priority:"low",defaultHistory:[]},{loadChildren:"../pages/category/category.module.ngfactory#CategoryPageModuleNgFactory",name:"CategoryPage",segment:"category",priority:"low",defaultHistory:[]},{loadChildren:"../pages/comments/comments.module.ngfactory#CommentsPageModuleNgFactory",name:"CommentsPage",segment:"comments",priority:"low",defaultHistory:[]},{loadChildren:"../pages/economie/economie.module.ngfactory#EconomiePageModuleNgFactory",name:"EconomiePage",segment:"economie",priority:"low",defaultHistory:[]},{loadChildren:"../pages/feed/feed.module.ngfactory#FeedPageModuleNgFactory",name:"FeedPage",segment:"feed",priority:"low",defaultHistory:[]},{loadChildren:"../pages/misdaad/misdaad.module.ngfactory#MisdaadPageModuleNgFactory",name:"MisdaadPage",segment:"misdaad",priority:"low",defaultHistory:[]},{loadChildren:"../pages/nieuws/nieuws.module.ngfactory#NieuwsPageModuleNgFactory",name:"NieuwsPage",segment:"nieuws",priority:"low",defaultHistory:[]},{loadChildren:"../pages/profiel/profiel.module.ngfactory#ProfielPageModuleNgFactory",name:"ProfielPage",segment:"profiel",priority:"low",defaultHistory:[]},{loadChildren:"../pages/register/register.module.ngfactory#RegisterPageModuleNgFactory",name:"RegisterPage",segment:"register",priority:"low",defaultHistory:[]},{loadChildren:"../pages/settings/settings.module.ngfactory#SettingsPageModuleNgFactory",name:"SettingsPage",segment:"settings",priority:"low",defaultHistory:[]},{loadChildren:"../pages/sources/sources.module.ngfactory#SourcesPageModuleNgFactory",name:"SourcesPage",segment:"sources",priority:"low",defaultHistory:[]},{loadChildren:"../pages/sport/sport.module.ngfactory#SportPageModuleNgFactory",name:"SportPage",segment:"sport",priority:"low",defaultHistory:[]},{loadChildren:"../pages/tech/tech.module.ngfactory#TechPageModuleNgFactory",name:"TechPage",segment:"tech",priority:"low",defaultHistory:[]},{loadChildren:"../pages/tutorial/tutorial.module.ngfactory#TutorialPageModuleNgFactory",name:"TutorialPage",segment:"tutorial",priority:"low",defaultHistory:[]},{loadChildren:"../pages/vermaak/vermaak.module.ngfactory#VermaakPageModuleNgFactory",name:"VermaakPage",segment:"vermaak",priority:"low",defaultHistory:[]}]},[]),r._8(512,r.h,r.h,[]),r._8(512,Tn.a,Tn.a,[r.h]),r._8(1024,Yn.b,Yn.c,[Tn.a,r.o]),r._8(1024,r.c,function(l,n,u,e,a,t,i,o,r,c,_,d,g){return[s.s(l),In.a(n),$l.b(u,e),jn.b(a,t,i,o,r),Yn.d(c,_,d,g)]},[[2,r.t],K.a,Al.a,xl.a,K.a,Al.a,xl.a,ll.a,Fl.l,K.a,vn.a,Yn.b,r.u]),r._8(512,r.d,r.d,[[2,r.c]]),r._8(131584,r.f,r.f,[r.u,r.T,r.o,r.k,r.i,r.d]),r._8(512,r.e,r.e,[r.f]),r._8(512,s.a,s.a,[[3,s.a]]),r._8(512,P.e,P.e,[]),r._8(512,P.d,P.d,[]),r._8(512,A.q,A.q,[]),r._8(512,A.i,A.i,[]),r._8(512,A.o,A.o,[]),r._8(512,bn.a,bn.a,[]),r._8(512,S.a,S.a,[]),r._8(512,bn.b,bn.b,[]),r._8(512,F,F,[]),r._8(512,x.a,x.a,[]),r._8(512,U.a,U.a,[]),r._8(512,I.a,I.a,[]),r._8(512,w.a,w.a,[]),r._8(512,L.a,L.a,[]),r._8(512,V,V,[]),r._8(256,P.m,"XSRF-TOKEN",[]),r._8(256,P.n,"X-XSRF-TOKEN",[]),r._8(256,Yn.a,v.a,[]),r._8(256,M.a,Y,[]),r._8(256,Tl.a,"/",[]),r._8(256,zn.b,null,[])])});Object(r.M)(),Object(s.j)().bootstrapModuleFactory(wn)},75:function(l,n,u){"use strict";u.d(n,"a",function(){return s});u(1),u(9);var e=u(168),a=u(32),t=u(206),i=(u.n(t),u(110)),o=(u(142),u(111)),s=(u(143),function(){function l(l,u,e,a,t,s,r,c,_){var d=this;this.navCtrl=l,this.loading=u,this.http=e,this.toastCtrl=a,this.menuCtrl=t,this.events=s,this.screenOrientation=r,this.platform=c,this.keyboard=_,this.token=Math.random().toString(36).substring(7),this.rootPage=n,this.FeedPage=o.a,localStorage.getItem("sessionToken")&&this.navCtrl.setRoot(i.a),this.platform.is("cordova")&&this.platform.ready().then(function(){d.screenOrientation.lock(d.screenOrientation.ORIENTATIONS.PORTRAIT)}),this.menuCtrl.enable(!1,"myMenu"),_.disableScroll(!0)}return n=l,l.prototype.goRegister=function(){this.navCtrl.push(e.a)},l.prototype.signIn=function(){var l=this;if(null==this.email||null==this.password){this.toastCtrl.create({message:"Niet alle velden zijn ingevuld!",duration:3e3,position:"top"}).present()}else{var n=new a.g;n.append("Accept","application/json"),n.append("Content-Type","application/json");var u={headers:n},e={email:this.email,password:this.password},t=this.loading.create({content:"Aan het inloggen..."});t.present().then(function(){l.http.post("http://www.gazoh.net/getgebruiker.php",e,u).subscribe(function(n){l.dataUser=n}),l.http.post("http://www.gazoh.net/login.php",e,u).subscribe(function(n){if(console.log(n),t.dismiss(),"Succesfully logged in!"==n){var u=l.toastCtrl.create({message:"U bent ingelogd!",duration:2500,position:"top",showCloseButton:!0,closeButtonText:"OK"});localStorage.setItem("userId",l.dataUser.id),localStorage.setItem("userName",l.dataUser.username),localStorage.setItem("userEmail",l.dataUser.email),localStorage.setItem("userEmailVerified",l.dataUser.emailVerified),localStorage.setItem("userRole",l.dataUser.rol),localStorage.setItem("userCreationDate",l.dataUser.creationdate),localStorage.setItem("sessionToken",l.token),localStorage.setItem("profilePicture",l.dataUser.profilepicture),l.navCtrl.setRoot(i.a),u.present(),l.events.publish("username",l.dataUser.username),l.events.publish("profilepicture",l.dataUser.profilepicture)}else{(u=l.toastCtrl.create({message:"Uw gegevens zijn onjuist, probeer het nogmaals.",showCloseButton:!0,closeButtonText:"OK",position:"top"})).present()}})})}},l;var n}())},85:function(l,n,u){"use strict";u.d(n,"a",function(){return a});u(1);var e=u(414),a=(u.n(e),function(){function l(){this.theme=new e.BehaviorSubject("light-theme")}return l.prototype.setActiveTheme=function(l){this.theme.next(l)},l.prototype.getActiveTheme=function(){return this.theme.asObservable()},l}())}},[403]);
>>>>>>> 32daaf477586e04aeb2de4e847d33e1290b441bf
