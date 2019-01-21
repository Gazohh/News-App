webpackJsonp([1],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(17);
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
        // Theme
        if (localStorage.getItem("themeColor")) {
            this.currentTheme = localStorage.getItem("themeColor");
            console.log(this.currentTheme);
        }
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
            selector: 'page-admin',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\admin\admin.html"*/'<ion-header no-border-bottom>\n\n    <ion-navbar>\n\n        <ion-title *ngIf="!isSearchbaropened" class="adminTitle">Admin</ion-title>\n\n        <!-- Searchbar  -->\n\n        <ion-searchbar #searchbar *ngIf="isSearchbaropened" [showCancelButton]="true" (ionCancel)="resetChanges()"\n\n                       (ionInput)="search($event)" placeholder="Waar zijn we naar op zoek?"\n\n                       class="slideInRight"></ion-searchbar>\n\n        <!-- Searchbar icon -->\n\n        <ion-buttons end *ngIf="checklist == \'artikelen\'">\n\n            <button ion-button icon-only (click)="isSearchbaropened=true">\n\n                <ion-icon name="search" *ngIf="!isSearchbaropened"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-buttons end *ngIf="checklist == \'gebruikers\'">\n\n            <button ion-button icon-only (click)="isSearchbaropened=true">\n\n                <ion-icon name="search"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n    <ion-segment [(ngModel)]="checklist" color="primary">\n\n        <ion-segment-button value="artikelen" (click)="selectArtikelen()">\n\n            Verborgen\n\n        </ion-segment-button>\n\n        <ion-segment-button value="gebruikers" (click)="selectGebruikers()">\n\n            Gebruikers\n\n        </ion-segment-button>\n\n    </ion-segment>\n\n</ion-header>\n\n<ion-content padding>\n\n    <div *ngIf="checklist == \'artikelen\'">\n\n        <ion-card *ngFor="let item of artikelenlijst" col-md-6 class="ionCard">\n\n            <!-- Images van nieuwsfeed -->\n\n            <div class="ion-card-image-wrapper" (click)="viewEntry({ record: item })">\n\n                <img *ngIf="!item.image" src="../assets/imgs/noimage.jpg">\n\n                <img [src]="item.image" *ngIf="item.site == \'NOS.nl\'">\n\n                <img [src]="item.image" *ngIf="item.site != \'NOS.nl\' || item.site != \'NU.nl\'">\n\n            </div>\n\n            <ion-card-content class="cardContentFeed">\n\n                <!-- Avatar -->\n\n                <div id="AvatarFeed" (click)="viewEntry({ record: item })">\n\n                    <ion-avatar *ngIf="item.site == \'NOS\' && currentTheme == \'light-theme\'" class="avatarNOS" item-start>\n\n                        <img src="../assets/svg/NOS_logo.svg" class="avatar-feedNOS"/>\n\n                    </ion-avatar>\n\n                    <ion-avatar *ngIf="item.site == \'NOS\' && currentTheme == \'dark-theme\'" class="avatarNOS" item-start>\n\n                        <img src="../assets/svg/NOS_logo_Wit.svg" class="avatar-feedNOS"/>\n\n                    </ion-avatar>\n\n                    <ion-avatar *ngIf="item.site == \'De Telegraaf\' && currentTheme == \'light-theme\'" class="avatarTelegraaf" item-start>\n\n                        <img src="../assets/svg/Telegraaf.svg" class="avatar-feedTelegraaf"/>\n\n                    </ion-avatar>\n\n                    <ion-avatar *ngIf="item.site == \'De Telegraaf\' && currentTheme == \'dark-theme\'" class="avatarTelegraaf" item-start>\n\n                        <img src="../assets/svg/Telegraaf_Wit.svg" class="avatar-feedTelegraaf"/>\n\n                    </ion-avatar>\n\n                    <ion-avatar *ngIf="item.site == \'NU.nl\'" class="avatar" item-start>\n\n                        <img src="../assets/svg/nu.nl.svg" class="avatar-feed"/>\n\n                    </ion-avatar>\n\n                    <div class="uitgeverFeed" *ngIf="item.site == \'De Telegraaf\'">{{item.site}}</div>\n\n                    <div class="uitgeverFeedNU" *ngIf="item.site == \'NU.nl\'">{{item.site}}</div>\n\n                    <div class="uitgeverFeedNOS" *ngIf="item.site == \'NOS\'"></div>\n\n                </div>\n\n                <!-- Uitgever -->\n\n                <div id="uitgeverFeed" (click)="viewEntry({ record: item })">\n\n                    <!-- Title  -->\n\n                    <div id="title">\n\n                        <ion-card-title *ngIf="item.site == \'De Telegraaf\' || item.site == \'NU.nl\'"><strong\n\n                                class="cardTitle">{{item.title}}</strong></ion-card-title>\n\n                        <ion-card-title *ngIf="item.site == \'NOS\'" id="ionCardNOS"><strong\n\n                                class="cardTitleNOS">{{item.title}}</strong></ion-card-title>\n\n                    </div>\n\n                    <!-- description  -->\n\n                    <div id="description">\n\n                        <p class="descriptionFeed">{{htmlToPlaintext(item.description) |\n\n                            slice:0:120}}...</p>\n\n                    </div>\n\n                    <!-- Datum -->\n\n                    <div id="datumFeed" class="datumFeed">\n\n                        <span>{{item.datum}}</span>\n\n                    </div>\n\n                </div>\n\n                <!-- Social Buttons - Comments - Unhide-->\n\n                <div id="socialLikeComments" class="socialLikeComments">\n\n                    <button ion-button icon-start clear *ngIf="item.site == \'De Telegraaf\'"\n\n                            class="socialTelegraafShare" (click)="showConfirmHide(item.id)">\n\n                        <ion-icon name="eye"></ion-icon>\n\n                    </button>\n\n                    <button ion-button icon-start clear *ngIf="item.site == \'NOS\'"\n\n                            class="socialNOSShare" (click)="showConfirmHide(item.id)">\n\n                        <ion-icon name="eye"></ion-icon>\n\n                    </button>\n\n                    <button ion-button icon-start clear *ngIf="item.site == \'NU.nl\'"\n\n                            class="socialNuShare" (click)="showConfirmHide(item.id)">\n\n                        <ion-icon name="eye"></ion-icon>\n\n                    </button>\n\n                    <button ion-button icon-start clear *ngIf="item.site == \'De Telegraaf\'"\n\n                            class="socialTelegraaf" (click)="viewComments({ record: item })">\n\n                        <ion-icon name="chatbubbles" class="darkChatTelegraaf"></ion-icon>\n\n                        <div>{{item.comments}}</div>\n\n                    </button>\n\n                    <button ion-button icon-start clear *ngIf="item.site == \'NOS\'" class="socialNOS"\n\n                            (click)="viewComments({ record: item })">\n\n                        <ion-icon name="chatbubbles" class="darkChatNOS"></ion-icon>\n\n                        <div>{{item.comments}}</div>\n\n                    </button>\n\n                    <button ion-button icon-start clear *ngIf="item.site == \'NU.nl\'" class="socialNu"\n\n                            (click)="viewComments({ record: item })">\n\n                        <ion-icon name="chatbubbles" class="darkChatNU"></ion-icon>\n\n                        <div>{{item.comments}}</div>\n\n                    </button>\n\n                </div>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n    <ion-list *ngFor="let user of gebruikerslijst">\n\n        <ion-item-sliding #item>\n\n            <ion-item class="adminUsers">\n\n                <ion-avatar class="avatar" item-start>\n\n                    <img src="{{user.profilepicture}}" class="avatar-profiel"/>\n\n                </ion-avatar>\n\n                <h3>ID: <strong>{{user.id}}</strong></h3>\n\n                <h3>Email <strong>{{user.email}}</strong></h3>\n\n            </ion-item>\n\n            <ion-item-options side="right">\n\n                <button ion-button (click)="unread(item)" class="deleteSlide">\n\n                    <span class="spanHide">Bewe</span>\n\n                    <ion-icon name="trash" class="iconAdmin"></ion-icon>\n\n                </button>\n\n                <button ion-button (click)="unread(item)" class="BewerkSlide">\n\n                    <span class="spanHide">Dele</span>\n\n                    <ion-icon name="create" class="iconAdmin"></ion-icon>\n\n                </button>\n\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\admin\admin.html"*/,
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

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feed_feed__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TutorialPage = /** @class */ (function () {
    function TutorialPage(navCtrl, navParams, platform, storage, toastCtrl, http, network, settings) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.network = network;
        this.settings = settings;
        this.theme = localStorage.getItem('themeColor');
        this.slides = [
            {
                title: "Welkom bij NewsAge",
                description: "Welkom! bij de tutorial vertellen wij kort even hoe u onze app gebruikt.",
                image: "../../assets/imgs/NewsAgeLogo.png",
            },
            {
                title: "Hoe gebruik je NewsAge?",
                icon: 'star',
                description: "Het gebruik van NewsAge is eigenlijk als u \"the hang of it\" krijgt best simpel, U heeft een " +
                    "startpagina waar al het algemene nieuws op komt, " +
                    "daarnaast kunt u in de bronnen aanvinken op welke nieuwspagina u wilt subscriben, dit in 1 knop verder " +
                    "kunt u ook uw profiel aanpassen en kunt u artikelen liken, sharen en als u wilt een reactie plaatsen " +
                    "onder het artikel."
            },
            {
                title: "Vragen?",
                description: "Als u verder nog vragen hebt over de app, kunt u ze mailen naar ons via: newsage2018@gmail.com " +
                    "de FAQ worden dan in slides gedaan en zo word de tutorial bijgewerkt.",
                image: "../../assets/imgs/NewsAgeLogo.png",
            }
        ];
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
    }
    TutorialPage.prototype.ionViewWillEnter = function () {
        this.getSource();
    };
    TutorialPage.prototype.tutorialDone = function () {
        localStorage.setItem("TutorialShown", "true");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__feed_feed__["a" /* FeedPage */]);
    };
    TutorialPage.prototype.getSource = function () {
        var _this = this;
        if (this.network.type != "none") {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = { headers: headers };
            var data = {
                userId: localStorage.getItem("userId"),
            };
            this.http.post('http://gazoh.net/getsources.php', data, options)
                .subscribe(function (data) {
                _this.sourceData = data;
                _this.NOS = _this.sourceData[0].NOS;
                _this.TGF = _this.sourceData[0].TGF;
                _this.NUNL = _this.sourceData[0].NUNL;
                _this.KNVB = _this.sourceData[0].KNVB;
                _this.TWKS = _this.sourceData[0].TWKS;
                _this.storage.set('NOS', _this.sourceData[0].NOS);
                _this.storage.set('TGF', _this.sourceData[0].TGF);
                _this.storage.set('NUNL', _this.sourceData[0].NUNL);
                _this.storage.set('KNVB', _this.sourceData[0].KNVB);
                _this.storage.set('TWKS', _this.sourceData[0].TWKS);
                console.log(_this.sourceData);
                console.log("NOS: " + _this.NOS);
                console.log("Telegraaf : " + _this.TGF);
                console.log("NU.NL: " + _this.NUNL);
                console.log("KNVB: " + _this.KNVB);
                console.log("Tweakers: " + _this.TWKS);
            });
        }
        else if (this.network.type == "none") {
            // Get NOS Status from Storage
            this.storage.get('NOS').then(function (NOS) {
                _this.NOS = NOS;
            });
            // Get Telegraaf Status from Storage
            this.storage.get('TGF').then(function (TGF) {
                _this.TGF = TGF;
            });
            // Get NU.NL Status from Storage
            this.storage.get('NUNL').then(function (NUNL) {
                _this.NUNL = NUNL;
            });
            // Get KNVB Status from Storage
            this.storage.get('KNVB').then(function (KNVB) {
                _this.KNVB = KNVB;
            });
            // Get Tweakers Status from Storage
            this.storage.get('TWKS').then(function (TWKS) {
                _this.TWKS = TWKS;
            });
        }
    };
    TutorialPage.prototype.subscribeSource = function (source) {
        var _this = this;
        if (this.network.type != "none") {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = { headers: headers };
            var data = {
                sourceName: source,
                userId: localStorage.getItem("userId"),
            };
            this.http.post('http://gazoh.net/subscribesource.php', data, options)
                .subscribe(function (data) {
                if (data == "subscribed") {
                    _this.getSource();
                    var toast = _this.toastCtrl.create({
                        message: "" + source + " is toegevoegd.",
                        duration: 3500,
                        position: "bottom"
                    });
                    toast.present();
                }
                else if (data == "error") {
                    var toast = _this.toastCtrl.create({
                        message: "Er is iets niet goed gegaan, probeer het later opnieuw.",
                        duration: 3500,
                        position: "bottom"
                    });
                    toast.present();
                }
            });
        }
        else if (this.network.type == "none") {
            var toast = this.toastCtrl.create({
                message: "Er is geen internet verbinding, probeer het later opnieuw.",
                duration: 5000,
                position: "bottom"
            });
            toast.present();
        }
    };
    TutorialPage.prototype.unsubscribeSource = function (source) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = { headers: headers };
        var data = {
            sourceName: source,
            userId: localStorage.getItem("userId"),
        };
        this.http.post('http://gazoh.net/unsubscribesource.php', data, options)
            .subscribe(function (data) {
            if (data == "unsubscribed") {
                _this.getSource();
                var toast = _this.toastCtrl.create({
                    message: "" + source + " is verwijderd.",
                    duration: 3500,
                    position: "bottom"
                });
                toast.present();
            }
            else if (data == "error") {
                var toast = _this.toastCtrl.create({
                    message: "Er is iets niet goed gegaan, probeer het later opnieuw.",
                    duration: 3500,
                    position: "bottom"
                });
                toast.present();
            }
        });
    };
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\tutorial\tutorial.html"*/'<ion-header no-border-bottom>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Voorbereiding</ion-title>\n\n        <button class="fakeCenter" ion-button menuToggle end>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="tutorial-page">\n\n    <ion-slides pager>\n\n        <ion-slide class="slider">\n\n\n\n            <img class="tutorialFoto1" src="../assets/imgs/tutorial1.png">\n\n            <h2 class="slide-title">NewsAge</h2>\n\n            <p>Welkom, je bevindt zich nu op de tutorial pagina. Hier vertellen wij kort wat je moet weten over de app.</p>\n\n        </ion-slide>\n\n        <ion-slide class="slider">\n\n            <img class="tutorialFoto1" src="../assets/imgs/tutorial2.png">\n\n            <h2 class="slide-title">Bronnen</h2>\n\n            <p>\n\n                Door in het menu op Bronnen te klikken vind je een overzicht van het laatste nieuws over alle onderwerpen die je wilt volgen.\n\n                Per categorie kun je eenvoudig het meest recente nieuws lezen. Je kunt ook gepersonaliseerd de bronnen aanpassen en naar je voorkeuren af te stemmen.\n\n            </p>\n\n        </ion-slide>\n\n        <ion-slide class="sliderSources">\n\n            <ion-item class="sourceItem">\n\n                <ion-avatar class="avatarTelegraafSources" item-start>\n\n                    <img src="../assets/svg/Telegraaf.svg" *ngIf="selectedTheme == \'light-theme\'">\n\n                    <img src="../assets/svg/Telegraaf_Wit.svg" *ngIf="selectedTheme == \'dark-theme\'">\n\n                </ion-avatar>\n\n                <div><b class="sourceTekstFeed">De Telegraaf</b></div>\n\n                <div class="sourceTekst">Nieuwsfeed</div>\n\n                <button ion-button outline item-end class="ImportClassesButton" *ngIf="TGF == 0"\n\n                        (click)="subscribeSource(\'De Telegraaf\')">\n\n                    <ion-icon name="checkmark" class="buttonIcon"></ion-icon>\n\n                    Toevoegen\n\n                </button>\n\n                <button ion-button outline item-end color="danger" class="DeleteClassesButton" *ngIf="TGF == 1"\n\n                        (click)="unsubscribeSource(\'De Telegraaf\')">\n\n                    <ion-icon name="close" class="buttonIcon"></ion-icon>\n\n                    Verwijderen\n\n                </button>\n\n            </ion-item>\n\n            <ion-item class="sourceItem">\n\n                <ion-avatar class="avatar" item-start>\n\n                    <img class="avatar-feedNU" src="../assets/svg/nu.nl.svg">\n\n                </ion-avatar>\n\n                <div><b class="sourceTekstFeed">NU.nl</b></div>\n\n                <div class="sourceTekst">Nieuwsfeed</div>\n\n                <button ion-button outline item-end class="ImportClassesButton" *ngIf="NUNL == 0"\n\n                        (click)="subscribeSource(\'NU.NL\')">\n\n                    <ion-icon name="checkmark" class="buttonIcon"></ion-icon>\n\n                    Toevoegen\n\n                </button>\n\n                <button ion-button outline item-end color="danger" class="DeleteClassesButton" *ngIf="NUNL == 1"\n\n                        (click)="unsubscribeSource(\'NU.NL\')">\n\n                    <ion-icon name="close" class="buttonIcon"></ion-icon>\n\n                    Verwijderen\n\n                </button>\n\n            </ion-item>\n\n            <ion-item class="sourceItem">\n\n                <ion-avatar class="avatar" item-start>\n\n                    <img src="../assets/svg/NOS_logo.svg" *ngIf="selectedTheme == \'light-theme\'">\n\n                    <img src="../assets/svg/NOS_logo_Wit.svg" *ngIf="selectedTheme == \'dark-theme\'">\n\n                </ion-avatar>\n\n                <div><b class="sourceTekstFeed">NOS</b></div>\n\n                <div class="sourceTekst">Nieuwsfeed</div>\n\n                <button ion-button outline item-end class="ImportClassesButton" *ngIf="NOS == 0"\n\n                        (click)="subscribeSource(\'NOS\')">\n\n                    <ion-icon name="checkmark" class="buttonIcon"></ion-icon>\n\n                    Toevoegen\n\n                </button>\n\n                <button ion-button outline item-end color="danger" class="DeleteClassesButton" *ngIf="NOS == 1"\n\n                        (click)="unsubscribeSource(\'NOS\')">\n\n                    <ion-icon name="close" class="buttonIcon"></ion-icon>\n\n                    Verwijderen\n\n                </button>\n\n            </ion-item>\n\n            <ion-item class="sourceItem">\n\n                <ion-avatar class="avatar" item-start>\n\n                    <img class="avatarTWKS" src="../assets/svg/Tweakers.svg">\n\n                </ion-avatar>\n\n                <div><b class="sourceTekstFeed">Tweakers</b></div>\n\n                <div class="sourceTekst">Tech</div>\n\n                <button ion-button outline item-end class="ImportClassesButton" *ngIf="TWKS == 0"\n\n                        (click)="subscribeSource(\'Tweakers\')">\n\n                    <ion-icon name="checkmark" class="buttonIcon"></ion-icon>\n\n                    Toevoegen\n\n                </button>\n\n                <button ion-button outline item-end color="danger" class="DeleteClassesButton" *ngIf="TWKS == 1"\n\n                        (click)="unsubscribeSource(\'Tweakers\')">\n\n                    <ion-icon name="close" class="buttonIcon"></ion-icon>\n\n                    Verwijderen\n\n                </button>\n\n            </ion-item>\n\n            <ion-item class="sourceItem">\n\n                <ion-avatar class="avatar" item-start>\n\n                    <img src="../assets/svg/knvb.svg">\n\n                </ion-avatar>\n\n                <div><b class="sourceTekstFeed">KNVB</b></div>\n\n                <div class="sourceTekst">Sport</div>\n\n                <button ion-button outline item-end class="ImportClassesButton" *ngIf="KNVB == 0"\n\n                        (click)="subscribeSource(\'KNVB\')">\n\n                    <ion-icon name="checkmark" class="buttonIcon"></ion-icon>\n\n                    Toevoegen\n\n                </button>\n\n                <button ion-button outline item-end color="danger" class="DeleteClassesButton" *ngIf="KNVB == 1"\n\n                        (click)="unsubscribeSource(\'KNVB\')">\n\n                    <ion-icon name="close" class="buttonIcon"></ion-icon>\n\n                    Verwijderen\n\n                </button>\n\n            </ion-item>\n\n        </ion-slide>\n\n        <ion-slide class="slider">\n\n            <img class="tutorialFoto1" src="../assets/imgs/tutorial3.png">\n\n            <h2 class="slide-title">\n\n                Delen met je vrienden!\n\n            </h2>\n\n            <p>\n\n                Via elk social media platform deel je gemakkelijk alle artikelen link met jouw vrienden.\n\n            </p>\n\n        </ion-slide>\n\n        <ion-slide class="slider">\n\n            <img class="tutorialFoto1" src="../assets/imgs/tutorial4.png">\n\n            <h2 class="slide-title">\n\n                Vragen?\n\n            </h2>\n\n            <p>\n\n                Hebt je nog vragen over de App, dan kan je mailen naar newsage2018@gmail.com.\n\n            </p>\n\n        </ion-slide>\n\n        <ion-slide class="sliderDoorgaan">\n\n            <h2 class="slide-title">Ben je er klaar voor?</h2>\n\n            <button ion-button large clear icon-end color="lightAppKleur" (click)="tutorialDone()" class="bounce">\n\n                Laten we starten!\n\n            </button>\n\n        </ion-slide>\n\n    </ion-slides>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\tutorial\tutorial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__["a" /* SettingsProvider */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EconomiePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comments_comments__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lijstweer_lijstweer__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var EconomiePage = /** @class */ (function () {
    function EconomiePage(navCtrl, navParams, menuCtrl, http, network, toastCtrl, loadingCtrl, platform, events, screenOrientation, alertCtrl, socialSharing, geolocation, storage, transfer, file) {
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
        this.transfer = transfer;
        this.file = file;
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
        this.TIMER_IN_MS = 100;
        this.slice = 5;
        this.storageDirectory = '';
        // Select Items
        this.selectOptions = {
            title: 'Bekijk'
        };
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
            if (this.datepicker == "vandaag") {
                offlinealert.present();
                this.getOfflineDataToday();
            }
            else if (this.datepicker == "gisteren") {
                this.getOfflineDataYesterday();
            }
            else if (this.datepicker == "driedagengeleden") {
                this.getOfflineData3DaysAgo();
            }
        }
        if (localStorage.getItem("themeColor")) {
            this.currentTheme = localStorage.getItem("themeColor");
            console.log(this.currentTheme);
        }
    }
    // ---------------------------------------------------------------------------------------------
    // Hier eindigt de constructor
    // ---------------------------------------------------------------------------------------------
    //
    EconomiePage.prototype.onChange = function (SelectedValue) {
        SelectedValue = SelectedValue;
        console.log(SelectedValue);
        if (this.network.type != "none") {
            if (this.datepicker == "vandaag") {
                this.load();
                this.content.scrollToTop(0);
            }
            else if (this.datepicker == "gisteren") {
                this.loadYesterday();
                this.content.scrollToTop(0);
            }
            else if (this.datepicker == "driedagengeleden") {
                this.load3DaysAgo();
                this.content.scrollToTop(0);
            } // else if (this.datepicker == "HetWeer") {
            //     this.weerData();
            // }
        }
        else if (this.network.type == "none") {
            if (this.datepicker == "vandaag") {
                this.getOfflineDataToday();
            }
            else if (this.datepicker == "gisteren") {
                this.getOfflineDataYesterday();
            }
            else if (this.datepicker == "driedagengeleden") {
                this.getOfflineData3DaysAgo();
            }
        }
    };
    // Alert of je de artikel wilt hiden
    EconomiePage.prototype.showConfirmHide = function (postId) {
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
    // Als netwerk online is of offline is
    EconomiePage.prototype.ionViewWillEnter = function () {
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
            // Get offline data
            if (this.datepicker == "vandaag") {
                this.getOfflineDataToday();
            }
            else if (this.datepicker == "gisteren") {
                this.getOfflineDataYesterday();
            }
            else if (this.datepicker == "driedagengeleden") {
                this.getOfflineData3DaysAgo();
            }
        }
    };
    // Custom Spinner loader
    EconomiePage.prototype.presentLoadingCustom = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<div class=\"custom-spinner-container\"><img src=\"../assets/svg/spinner/tail-spin.svg\"><br> <p>Laden...</p>\n     </div>",
            duration: 610
        });
        loading.present();
    };
    // Laad data pas zodra je bent ingelogt
    EconomiePage.prototype.loadData = function () {
        localStorage.getItem(this.key);
        if (this.key != null && this.key != undefined) {
            this.items = JSON.parse(this.key);
        }
    };
    //
    EconomiePage.prototype.htmlToPlaintext = function (text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
    // Redirect to NieuwsPage
    EconomiePage.prototype.viewEntry = function (param) {
        this.navCtrl.push('NieuwsPage', param);
    };
    // Doorverbinden naar de CommentsPage
    EconomiePage.prototype.viewComments = function (param) {
        if (this.network.type != "none") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__comments_comments__["a" /* CommentsPage */], param);
        }
        else if (this.network.type == "none") {
            var toast = this.toastCtrl.create({
                message: "Actie kon niet worden uitgevoerd, geen internet verbinding gevonden.",
                duration: 3500,
                position: "bottom"
            });
            toast.present();
        }
    };
    // Zoek functie
    EconomiePage.prototype.search = function (event) {
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
    EconomiePage.prototype.resetChanges = function () {
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
            else if (this.datepicker == "HetWeer") {
                this.isSearchbaropened = false;
            }
        }
        else {
            this.items = this.artikelen;
            this.isSearchbaropened = false;
        }
    };
    // Zodra de pagina is geladen
    EconomiePage.prototype.ionViewDidLoad = function () {
        this.menuCtrl.enable(true, 'myMenu');
        if (this.network.type != "none") {
            this.setOfflineToday();
            this.setOfflineYesterday();
            this.setOffline3DaysAgo();
        }
    };
    // Segment Alle nieuws van Vandaag
    EconomiePage.prototype.load = function () {
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
            .post('http://gazoh.net/getdataeconomie.php', data, options)
            .subscribe(function (data) {
            _this.items = data;
            _this.artikelen = data;
            _this.items.sort(function (a, b) {
                var dateA = new Date(a.datum.replace(' ', 'T'));
                var dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: "De pagina die u wilt bekijken kan niet worden weergegeven, bekijk uw internetverbinding",
                duration: 3500,
                position: "top"
            });
            toast.present();
            console.log("Http error is: " + error);
        });
    };
    EconomiePage.prototype.loadWithSpinner = function () {
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
            .post('http://gazoh.net/getdataeconomie.php', data, options)
            .subscribe(function (data) {
            _this.items = data;
            _this.artikelen = data;
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                duration: 3500,
                position: "top"
            });
            toast.present();
            console.log("Http error is: " + error);
        });
        this.presentLoadingCustom();
    };
    // Segment Alle nieuws van Gisteren
    EconomiePage.prototype.loadYesterday = function () {
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
            .post('http://gazoh.net/getdataeconomieyesterday.php', data, options)
            .subscribe(function (data) {
            _this.items = data;
            _this.artikelen = data;
            _this.items.sort(function (a, b) {
                var dateA = new Date(a.datum.replace(' ', 'T'));
                var dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                duration: 3500,
                position: "top"
            });
            toast.present();
            console.log("Http error is: " + error);
        });
        this.presentLoadingCustom();
    };
    // Segment Alle nieuws van Gisteren
    EconomiePage.prototype.load3DaysAgo = function () {
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
            .post('http://gazoh.net/getdataeconomie3daysago.php', data, options)
            .subscribe(function (data) {
            _this.items = data;
            _this.artikelen = data;
            console.log("Offline data set in storage: offlineData3DaysAgo");
            _this.storage.set("offlineData3DaysAgo", data);
            _this.items.sort(function (a, b) {
                var dateA = new Date(a.datum.replace(' ', 'T'));
                var dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                duration: 3500,
                position: "top"
            });
            toast.present();
            console.log("Http error is: " + error);
        });
        this.presentLoadingCustom();
    };
    // De pull to refresh
    EconomiePage.prototype.doRefresh = function (refresher) {
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
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    EconomiePage.prototype.setLike = function (articleId) {
        var _this = this;
        if (this.network.type != "none") {
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
                if (data == "liked")
                    setTimeout(function () {
                        _this.disabled = false;
                    }, _this.TIMER_IN_MS);
                {
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
        else if (this.network.type == "none") {
            var toast = this.toastCtrl.create({
                message: "Actie kon niet worden uitgevoerd, geen internet verbinding gevonden.",
                duration: 3500,
                position: "bottom"
            });
            toast.present();
            if (this.network.type == "none") {
                this.disabled = true;
            }
            else {
                this.disabled = false;
            }
        }
    };
    EconomiePage.prototype.shareInfo = function (articleTitle, articleImage, articleLink) {
        this.socialSharing.share('Bekijk "' + articleTitle + '" via de Newsage app', "NewsAge", articleImage, articleLink);
    };
    EconomiePage.prototype.dislike = function (articleId, articleTitle) {
        var _this = this;
        if (this.network.type != "none") {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options_1 = { headers: headers };
            var data_1 = {
                articleId: articleId,
                userId: this.userId
            };
            var alert_1 = this.alertCtrl.create({
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
                            _this.http.post('http://gazoh.net/unlike.php', data_1, options_1)
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
            alert_1.present();
        }
        else if (this.network.type == "none") {
            var toast = this.toastCtrl.create({
                message: "Actie kon niet worden uitgevoerd, geen internet verbinding gevonden.",
                duration: 3500,
                position: "bottom"
            });
            toast.present();
        }
    };
    EconomiePage.prototype.setHideArticle = function (postId) {
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
                    position: "bottom",
                    showCloseButton: true,
                    closeButtonText: "OK"
                });
                toast.present();
            }
        });
    };
    EconomiePage.prototype.getOfflineDataToday = function () {
        var _this = this;
        this.storage.get("offlineDataEconomieVandaag").then(function (data) {
            _this.items = data;
            _this.artikelen = data;
            _this.items.sort(function (a, b) {
                var dateA = new Date(a.datum.replace(' ', 'T'));
                var dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        });
    };
    EconomiePage.prototype.getOfflineDataYesterday = function () {
        var _this = this;
        this.storage.get("offlineDataEconomieGisteren").then(function (data) {
            _this.items = data;
            _this.artikelen = data;
            _this.items.sort(function (a, b) {
                var dateA = new Date(a.datum.replace(' ', 'T'));
                var dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        });
    };
    EconomiePage.prototype.getOfflineData3DaysAgo = function () {
        var _this = this;
        this.storage.get("offlineDataEconomie3DagenGeleden").then(function (data) {
            _this.items = data;
            _this.artikelen = data;
            _this.items.sort(function (a, b) {
                var dateA = new Date(a.datum.replace(' ', 'T'));
                var dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        });
    };
    EconomiePage.prototype.goLijstWeerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__lijstweer_lijstweer__["a" /* LijstweerPage */]);
    };
    EconomiePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            _this.slice += 5;
            infiniteScroll.complete();
        }, 200);
    };
    EconomiePage.prototype.setOfflineToday = function () {
        var _this = this;
        if (this.network.type != "none") {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = { headers: headers };
            var data = {
                userId: localStorage.getItem('userId')
            };
            this.http
                .post('http://gazoh.net/getdataeconomie.php', data, options)
                .subscribe(function (data) {
                _this.storage.set("offlineDataEconomieVandaag", data);
                console.log("Offline data set in storage: offlineDataEconomieVandaag");
            }, function (error) {
                var toast = _this.toastCtrl.create({
                    message: "De pagina die u wilt bekijken kan niet worden weergegeven, bekijk uw internetverbinding",
                    duration: 3500,
                    position: "top"
                });
                toast.present();
                console.log("Http error is: " + error);
            });
        }
    };
    EconomiePage.prototype.setOfflineYesterday = function () {
        var _this = this;
        if (this.network.type != "none") {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = { headers: headers };
            var data = {
                userId: localStorage.getItem('userId')
            };
            this.http
                .post('http://gazoh.net/getdataeconomieyesterday.php', data, options)
                .subscribe(function (data) {
                _this.storage.set("offlineDataEconomieGisteren", data);
                console.log("Offline data set in storage: offlineDataEconomieGisteren");
            }, function (error) {
                var toast = _this.toastCtrl.create({
                    message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                    duration: 3500,
                    position: "top"
                });
                toast.present();
                console.log("Http error is: " + error);
            });
        }
    };
    EconomiePage.prototype.setOffline3DaysAgo = function () {
        var _this = this;
        if (this.network.type != "none") {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = { headers: headers };
            var data = {
                userId: localStorage.getItem('userId')
            };
            this.http
                .post('http://gazoh.net/getdataeconomie3daysago.php', data, options)
                .subscribe(function (data) {
                _this.storage.set("offlineDataEconomie3DagenGeleden", data);
                console.log("Offline data set in storage: offlineDataEconomie3DagenGeleden");
            }, function (error) {
                var toast = _this.toastCtrl.create({
                    message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                    duration: 3500,
                    position: "top"
                });
                toast.present();
                console.log("Http error is: " + error);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Searchbar */])
    ], EconomiePage.prototype, "searchbar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], EconomiePage.prototype, "content", void 0);
    EconomiePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-economie',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\economie\economie.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle *ngIf="!isSearchbaropened">\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title *ngIf="!isSearchbaropened" class="algemeenText">Financieel</ion-title>\n\n        <!-- Searchbar  -->\n\n        <ion-searchbar #searchbar *ngIf="isSearchbaropened" [showCancelButton]="true" (ionCancel)="resetChanges()"\n\n                       (ionInput)="search($event)" placeholder="Waar zijn we naar op zoek?"\n\n                       class="slideInRight"></ion-searchbar>\n\n        <!-- Searchbar icon -->\n\n        <ion-buttons end\n\n                     *ngIf="this.datepicker == \'vandaag\' || this.datepicker == \'gisteren\' || this.datepicker == \'driedagengeleden\'">\n\n            <button ion-button icon-only (click)="isSearchbaropened=true">\n\n                <ion-icon name="search" *ngIf="!isSearchbaropened"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-buttons end *ngIf="this.datepicker == \'HetWeer\'">\n\n            <button ion-button icon-only (click)="goLijstWeerPage()">\n\n                <ion-icon name="search"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-buttons end *ngIf="!isSearchbaropened" class="moreFeed">\n\n            <ion-icon class="calenderIcon" name="calendar"></ion-icon>\n\n            <ion-list class="listMore">\n\n                <ion-select #newSelect [(ngModel)]="datepicker" (ionChange)="onChange(datepicker)"\n\n                            [selectOptions]="selectOptions" cancelText="Annuleer" okText="Ok" class="SelectMore">\n\n                    <ion-option value="vandaag">Vandaag</ion-option>\n\n                    <ion-option value="gisteren">Gisteren</ion-option>\n\n                    <ion-option value="driedagengeleden">Drie dagen geleden</ion-option>\n\n                    <!--<ion-option value="HetWeer">Het weer</ion-option>-->\n\n                </ion-select>\n\n            </ion-list>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <!-- Swipe up refresher  -->\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content pullingIcon="arrow-dropdown"\n\n                               pullingText="Sleep omlaag om te verversen"></ion-refresher-content>\n\n    </ion-refresher>\n\n    <!-- Grid -->\n\n    <ion-grid class="feedGrid">\n\n        <ion-col>\n\n            <ion-row>\n\n                <ion-card *ngFor="let item of (items ? items.slice(0,slice): [])" col-md-6 class="ionCard">\n\n                    <!-- Images van nieuwsfeed -->\n\n                    <div class="ion-card-image-wrapper" (tap)="viewEntry({ record: item })">\n\n                        <img class="fullHeight" src="../assets/imgs/volkskrant.png" *ngIf="item.site ? item.site == \'Volkskrant Economie\' : noimage">\n\n                        <img class="fullHeight" [src]="item.image" *ngIf="item.site == \'NOS\' || item.site == \'De Telegraaf\' || item.site == \'NU.nl\' || item.site == \'KNVB\' || item.site == \'NU.nl Economie\' && network.type != \'none\'">\n\n                        <img *ngIf="noimage" src="../assets/imgs/noimage.jpg">\n\n                    </div>\n\n                    <ion-card-content class="cardContentFeed">\n\n                        <!-- Avatar -->\n\n                        <div id="AvatarFeed" (tap)="viewEntry({ record: item })">\n\n                            <ion-avatar *ngIf="item.site == \'NU.nl Economie\'" class="avatar" item-start>\n\n                                <img src="../assets/svg/nu.nl.svg" class="avatar-feed"/>\n\n                            </ion-avatar>\n\n                            <ion-avatar *ngIf="item.site == \'Volkskrant Economie\' && currentTheme == \'light-theme\'" class="avatar" item-start>\n\n                                <img src="../assets/svg/Volkskrant.svg" class="avatar-feed"/>\n\n                            </ion-avatar>\n\n                            <ion-avatar *ngIf="item.site == \'Volkskrant Economie\' && currentTheme == \'dark-theme\'" class="avatar" item-start>\n\n                                <img src="../assets/svg/Volkskrant_wit.svg" class="avatar-feed"/>\n\n                            </ion-avatar>\n\n                            <div class="uitgeverFeedNU" *ngIf="item.site == \'NU.nl Economie\'">{{item.site}}</div>\n\n                            <div class="uitgeverFeedNU" *ngIf="item.site == \'Volkskrant Economie\'">{{item.site}}</div>\n\n                        </div>\n\n                        <!-- Uitgever -->\n\n                        <div id="uitgeverFeed" (tap)="viewEntry({ record: item })">\n\n                            <!-- Title  -->\n\n                            <div id="title">\n\n                                <ion-card-title *ngIf="item.site == \'De Telegraaf\'"><strong class="cardTitle">{{item.title}}</strong></ion-card-title>\n\n                                <ion-card-title *ngIf="item.site == \'NOS\'" id="ionCardNOS"><strong class="cardTitleNOS">{{item.title}}</strong></ion-card-title>\n\n                                <ion-card-title *ngIf="item.site == \'Tweakers\'"><strong class="cardTitleNOS">{{item.title}}</strong></ion-card-title>\n\n                                <ion-card-title *ngIf="item.site == \'KNVB\'"><strong class="cardTitleNOS">{{item.title}}</strong></ion-card-title>\n\n                                <ion-card-title *ngIf="item.site == \'NU.nl Economie\'"><strong class="cardTitleNOS">{{item.title}}</strong></ion-card-title>\n\n                                <ion-card-title *ngIf="item.site == \'Volkskrant Economie\'"><strong class="cardTitle">{{item.title}}</strong></ion-card-title>\n\n\n\n                            </div>\n\n                            <!-- description  -->\n\n                            <div id="description">\n\n                                <p class="descriptionFeed">{{htmlToPlaintext(item.description) |\n\n                                    slice:0:120}}...</p>\n\n                            </div>\n\n                            <!-- Datum -->\n\n                            <div id="datumFeed" class="datumFeed">\n\n                                <span>{{item.datum}}</span>\n\n                            </div>\n\n                        </div>\n\n                        <!-- Social Buttons - Comments - likes - Share -->\n\n                        <div id="socialLikeComments" class="socialLikeComments">\n\n                            <!---->\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'NU.nl Economie\' && rol == 1"\n\n                                    class="ColorDarkAppShare" (click)="showConfirmHide(item.id)">\n\n                                <ion-icon name="trash"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'Volkskrant Economie\' && rol == 1"\n\n                                    class="ColorDarkAppShare" (click)="showConfirmHide(item.id)">\n\n                                <ion-icon name="trash"></ion-icon>\n\n                            </button>\n\n                            <!---->\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'NU.nl Economie\'" class="ColorDarkAppShare"\n\n                                    (click)="shareInfo(item.title, item.image, item.link)">\n\n                                <ion-icon name="share-alt"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'Volkskrant Economie\'" class="ColorDarkAppShare"\n\n                                    (click)="shareInfo(item.title, item.image, item.link)">\n\n                                <ion-icon name="share-alt"></ion-icon>\n\n                            </button>\n\n                            <!---->\n\n                            <button class="socialNu" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'NU.nl Economie\' && item.liked == 0" [disabled]="disabled"\n\n                                    (click)="setLike(item.id)">\n\n                                <ion-icon name="heart-outline" class="ColorDarkApp"></ion-icon>\n\n                                <div class="ColorDarkAppTextDarkTheme">{{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialNu" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'Volkskrant Economie\' && item.liked == 0" [disabled]="disabled"\n\n                                    (click)="setLike(item.id)">\n\n                                <ion-icon name="heart-outline" class="ColorDarkApp"></ion-icon>\n\n                                <div class="ColorDarkAppTextDarkTheme">{{item.likes}}</div>\n\n                            </button>\n\n                            <!---->\n\n                            <button class="socialNu" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'NU.nl Economie\' && item.liked == 1"\n\n                                    (click)="dislike(item.id, item.title)">\n\n                                <ion-icon name="heart" class="ColorDarkApp"></ion-icon>\n\n                                <div class="ColorDarkAppTextDarkTheme">{{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialNu" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'Volkskrant Economie\' && item.liked == 1"\n\n                                    (click)="dislike(item.id, item.title)">\n\n                                <ion-icon name="heart" class="ColorDarkApp"></ion-icon>\n\n                                <div class="ColorDarkAppTextDarkTheme">{{item.likes}}</div>\n\n                            </button>\n\n                            <!---->\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'NU.nl Economie\'" class="socialNu"\n\n                                    (click)="viewComments({ record: item })">\n\n                                <ion-icon name="chatbubbles" class="ColorDarkApp"></ion-icon>\n\n                                <div class="ColorDarkAppTextDarkTheme">{{item.comments}}</div>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'Volkskrant Economie\'" class="socialNu"\n\n                                    (click)="viewComments({ record: item })">\n\n                                <ion-icon name="chatbubbles" class="ColorDarkApp"></ion-icon>\n\n                                <div class="ColorDarkAppTextDarkTheme">{{item.comments}}</div>\n\n                            </button>\n\n                            <!---->\n\n                        </div>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ion-row>\n\n            <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n                <ion-infinite-scroll-content\n\n                        loadingSpinner="bubbles"\n\n                        loadingText="Meer artikelen inladen...">\n\n                </ion-infinite-scroll-content>\n\n            </ion-infinite-scroll>\n\n        </ion-col>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\economie\economie.html"*/,
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
            __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__["a" /* File */]])
    ], EconomiePage);
    return EconomiePage;
}());

//# sourceMappingURL=economie.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LifestylePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comments_comments__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lijstweer_lijstweer__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var LifestylePage = /** @class */ (function () {
    function LifestylePage(navCtrl, navParams, menuCtrl, http, network, toastCtrl, loadingCtrl, platform, events, screenOrientation, alertCtrl, socialSharing, geolocation, storage, transfer, file) {
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
        this.transfer = transfer;
        this.file = file;
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
        this.TIMER_IN_MS = 100;
        this.slice = 5;
        this.storageDirectory = '';
        // Select Items
        this.selectOptions = {
            title: 'Bekijk'
        };
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
            if (this.datepicker == "vandaag") {
                offlinealert.present();
                this.getOfflineDataToday();
            }
            else if (this.datepicker == "gisteren") {
                this.getOfflineDataYesterday();
            }
            else if (this.datepicker == "driedagengeleden") {
                this.getOfflineData3DaysAgo();
            }
        }
        if (localStorage.getItem("themeColor")) {
            this.currentTheme = localStorage.getItem("themeColor");
            console.log(this.currentTheme);
        }
    }
    // ---------------------------------------------------------------------------------------------
    // Hier eindigt de constructor
    // ---------------------------------------------------------------------------------------------
    //
    LifestylePage.prototype.onChange = function (SelectedValue) {
        SelectedValue = SelectedValue;
        console.log(SelectedValue);
        if (this.network.type != "none") {
            if (this.datepicker == "vandaag") {
                this.load();
                this.content.scrollToTop(0);
            }
            else if (this.datepicker == "gisteren") {
                this.loadYesterday();
                this.content.scrollToTop(0);
            }
            else if (this.datepicker == "driedagengeleden") {
                this.load3DaysAgo();
                this.content.scrollToTop(0);
            } // else if (this.datepicker == "HetWeer") {
            //     this.weerData();
            // }
        }
        else if (this.network.type == "none") {
            if (this.datepicker == "vandaag") {
                this.getOfflineDataToday();
            }
            else if (this.datepicker == "gisteren") {
                this.getOfflineDataYesterday();
            }
            else if (this.datepicker == "driedagengeleden") {
                this.getOfflineData3DaysAgo();
            }
        }
    };
    // Alert of je de artikel wilt hiden
    LifestylePage.prototype.showConfirmHide = function (postId) {
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
    // Als netwerk online is of offline is
    LifestylePage.prototype.ionViewWillEnter = function () {
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
            // Get offline data
            if (this.datepicker == "vandaag") {
                this.getOfflineDataToday();
            }
            else if (this.datepicker == "gisteren") {
                this.getOfflineDataYesterday();
            }
            else if (this.datepicker == "driedagengeleden") {
                this.getOfflineData3DaysAgo();
            }
        }
    };
    // Custom Spinner loader
    LifestylePage.prototype.presentLoadingCustom = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<div class=\"custom-spinner-container\"><img src=\"../assets/svg/spinner/tail-spin.svg\"><br> <p>Laden...</p>\n     </div>",
            duration: 610
        });
        loading.present();
    };
    // Laad data pas zodra je bent ingelogt
    LifestylePage.prototype.loadData = function () {
        localStorage.getItem(this.key);
        if (this.key != null && this.key != undefined) {
            this.items = JSON.parse(this.key);
        }
    };
    //
    LifestylePage.prototype.htmlToPlaintext = function (text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
    // Redirect to NieuwsPage
    LifestylePage.prototype.viewEntry = function (param) {
        this.navCtrl.push('NieuwsPage', param);
    };
    // Doorverbinden naar de CommentsPage
    LifestylePage.prototype.viewComments = function (param) {
        if (this.network.type != "none") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__comments_comments__["a" /* CommentsPage */], param);
        }
        else if (this.network.type == "none") {
            var toast = this.toastCtrl.create({
                message: "Actie kon niet worden uitgevoerd, geen internet verbinding gevonden.",
                duration: 3500,
                position: "bottom"
            });
            toast.present();
        }
    };
    // Zoek functie
    LifestylePage.prototype.search = function (event) {
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
    LifestylePage.prototype.resetChanges = function () {
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
            else if (this.datepicker == "HetWeer") {
                this.isSearchbaropened = false;
            }
        }
        else {
            this.items = this.artikelen;
            this.isSearchbaropened = false;
        }
    };
    // Zodra de pagina is geladen
    LifestylePage.prototype.ionViewDidLoad = function () {
        this.menuCtrl.enable(true, 'myMenu');
        if (this.network.type != "none") {
            this.setOfflineToday();
            this.setOfflineYesterday();
            this.setOffline3DaysAgo();
        }
    };
    // Segment Alle nieuws van Vandaag
    LifestylePage.prototype.load = function () {
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
            .post('http://gazoh.net/getdatalifestyle.php', data, options)
            .subscribe(function (data) {
            _this.items = data;
            _this.artikelen = data;
            _this.items.sort(function (a, b) {
                var dateA = new Date(a.datum.replace(' ', 'T'));
                var dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: "De pagina die u wilt bekijken kan niet worden weergegeven, bekijk uw internetverbinding",
                duration: 3500,
                position: "top"
            });
            toast.present();
            console.log("Http error is: " + error);
        });
    };
    LifestylePage.prototype.loadWithSpinner = function () {
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
            .post('http://gazoh.net/getdatalifestyle.php', data, options)
            .subscribe(function (data) {
            _this.items = data;
            _this.artikelen = data;
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                duration: 3500,
                position: "top"
            });
            toast.present();
            console.log("Http error is: " + error);
        });
        this.presentLoadingCustom();
    };
    // Segment Alle nieuws van Gisteren
    LifestylePage.prototype.loadYesterday = function () {
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
            .post('http://gazoh.net/getdatalifestyleyesterday.php', data, options)
            .subscribe(function (data) {
            _this.items = data;
            _this.artikelen = data;
            _this.items.sort(function (a, b) {
                var dateA = new Date(a.datum.replace(' ', 'T'));
                var dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                duration: 3500,
                position: "top"
            });
            toast.present();
            console.log("Http error is: " + error);
        });
        this.presentLoadingCustom();
    };
    // Segment Alle nieuws van Gisteren
    LifestylePage.prototype.load3DaysAgo = function () {
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
            .post('http://gazoh.net/getdatalifestyle3daysago.php', data, options)
            .subscribe(function (data) {
            _this.items = data;
            _this.artikelen = data;
            console.log("Offline data set in storage: offlineData3DaysAgo");
            _this.storage.set("offlineData3DaysAgo", data);
            _this.items.sort(function (a, b) {
                var dateA = new Date(a.datum.replace(' ', 'T'));
                var dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                duration: 3500,
                position: "top"
            });
            toast.present();
            console.log("Http error is: " + error);
        });
        this.presentLoadingCustom();
    };
    // De pull to refresh
    LifestylePage.prototype.doRefresh = function (refresher) {
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
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    LifestylePage.prototype.setLike = function (articleId) {
        var _this = this;
        if (this.network.type != "none") {
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
                if (data == "liked")
                    setTimeout(function () {
                        _this.disabled = false;
                    }, _this.TIMER_IN_MS);
                {
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
        else if (this.network.type == "none") {
            var toast = this.toastCtrl.create({
                message: "Actie kon niet worden uitgevoerd, geen internet verbinding gevonden.",
                duration: 3500,
                position: "bottom"
            });
            toast.present();
            if (this.network.type == "none") {
                this.disabled = true;
            }
            else {
                this.disabled = false;
            }
        }
    };
    LifestylePage.prototype.shareInfo = function (articleTitle, articleImage, articleLink) {
        this.socialSharing.share('Bekijk "' + articleTitle + '" via de Newsage app', "NewsAge", articleImage, articleLink);
    };
    LifestylePage.prototype.dislike = function (articleId, articleTitle) {
        var _this = this;
        if (this.network.type != "none") {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options_1 = { headers: headers };
            var data_1 = {
                articleId: articleId,
                userId: this.userId
            };
            var alert_1 = this.alertCtrl.create({
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
                            _this.http.post('http://gazoh.net/unlike.php', data_1, options_1)
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
            alert_1.present();
        }
        else if (this.network.type == "none") {
            var toast = this.toastCtrl.create({
                message: "Actie kon niet worden uitgevoerd, geen internet verbinding gevonden.",
                duration: 3500,
                position: "bottom"
            });
            toast.present();
        }
    };
    LifestylePage.prototype.setHideArticle = function (postId) {
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
                    position: "bottom",
                    showCloseButton: true,
                    closeButtonText: "OK"
                });
                toast.present();
            }
        });
    };
    LifestylePage.prototype.getOfflineDataToday = function () {
        var _this = this;
        this.storage.get("offlineDataLifestyleVandaag").then(function (data) {
            _this.items = data;
            _this.artikelen = data;
            _this.items.sort(function (a, b) {
                var dateA = new Date(a.datum.replace(' ', 'T'));
                var dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        });
    };
    LifestylePage.prototype.getOfflineDataYesterday = function () {
        var _this = this;
        this.storage.get("offlineDataLifestyleGisteren").then(function (data) {
            _this.items = data;
            _this.artikelen = data;
            _this.items.sort(function (a, b) {
                var dateA = new Date(a.datum.replace(' ', 'T'));
                var dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        });
    };
    LifestylePage.prototype.getOfflineData3DaysAgo = function () {
        var _this = this;
        this.storage.get("offlineDataLifestyle3DagenGeleden").then(function (data) {
            _this.items = data;
            _this.artikelen = data;
            _this.items.sort(function (a, b) {
                var dateA = new Date(a.datum.replace(' ', 'T'));
                var dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        });
    };
    LifestylePage.prototype.goLijstWeerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__lijstweer_lijstweer__["a" /* LijstweerPage */]);
    };
    LifestylePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            _this.slice += 5;
            infiniteScroll.complete();
        }, 200);
    };
    LifestylePage.prototype.setOfflineToday = function () {
        var _this = this;
        if (this.network.type != "none") {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = { headers: headers };
            var data = {
                userId: localStorage.getItem('userId')
            };
            this.http
                .post('http://gazoh.net/getdatalifestyle.php', data, options)
                .subscribe(function (data) {
                _this.storage.set("offlineDataLifestyleVandaag", data);
                console.log("Offline data set in storage: offlineDataLifestyleVandaag");
            }, function (error) {
                var toast = _this.toastCtrl.create({
                    message: "De pagina die u wilt bekijken kan niet worden weergegeven, bekijk uw internetverbinding",
                    duration: 3500,
                    position: "top"
                });
                toast.present();
                console.log("Http error is: " + error);
            });
        }
    };
    LifestylePage.prototype.setOfflineYesterday = function () {
        var _this = this;
        if (this.network.type != "none") {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = { headers: headers };
            var data = {
                userId: localStorage.getItem('userId')
            };
            this.http
                .post('http://gazoh.net/getdatalifestyleyesterday.php', data, options)
                .subscribe(function (data) {
                _this.storage.set("offlineDataLifestyleGisteren", data);
                console.log("Offline data set in storage: offlineDataLifestyleGisteren");
            }, function (error) {
                var toast = _this.toastCtrl.create({
                    message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                    duration: 3500,
                    position: "top"
                });
                toast.present();
                console.log("Http error is: " + error);
            });
        }
    };
    LifestylePage.prototype.setOffline3DaysAgo = function () {
        var _this = this;
        if (this.network.type != "none") {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = { headers: headers };
            var data = {
                userId: localStorage.getItem('userId')
            };
            this.http
                .post('http://gazoh.net/getdatalifestyle3daysago.php', data, options)
                .subscribe(function (data) {
                _this.storage.set("offlineDataLifestyle3DagenGeleden", data);
                console.log("Offline data set in storage: offlineDataLifestyle3DagenGeleden");
            }, function (error) {
                var toast = _this.toastCtrl.create({
                    message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                    duration: 3500,
                    position: "top"
                });
                toast.present();
                console.log("Http error is: " + error);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Searchbar */])
    ], LifestylePage.prototype, "searchbar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], LifestylePage.prototype, "content", void 0);
    LifestylePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lifestyle',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\lifestyle\lifestyle.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle *ngIf="!isSearchbaropened">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title *ngIf="!isSearchbaropened" class="algemeenText">Lifestyle</ion-title>\n\n    <!-- Searchbar  -->\n\n    <ion-searchbar #searchbar *ngIf="isSearchbaropened" [showCancelButton]="true" (ionCancel)="resetChanges()"\n\n                   (ionInput)="search($event)" placeholder="Waar zijn we naar op zoek?"\n\n                   class="slideInRight"></ion-searchbar>\n\n    <!-- Searchbar icon -->\n\n    <ion-buttons end\n\n                 *ngIf="this.datepicker == \'vandaag\' || this.datepicker == \'gisteren\' || this.datepicker == \'driedagengeleden\'">\n\n      <button ion-button icon-only (click)="isSearchbaropened=true">\n\n        <ion-icon name="search" *ngIf="!isSearchbaropened"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end *ngIf="this.datepicker == \'HetWeer\'">\n\n      <button ion-button icon-only (click)="goLijstWeerPage()">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end *ngIf="!isSearchbaropened" class="moreFeed">\n\n      <ion-icon class="calenderIcon" name="calendar"></ion-icon>\n\n      <ion-list class="listMore">\n\n        <ion-select #newSelect [(ngModel)]="datepicker" (ionChange)="onChange(datepicker)"\n\n                    [selectOptions]="selectOptions" cancelText="Annuleer" okText="Ok" class="SelectMore">\n\n          <ion-option value="vandaag">Vandaag</ion-option>\n\n          <ion-option value="gisteren">Gisteren</ion-option>\n\n          <ion-option value="driedagengeleden">Drie dagen geleden</ion-option>\n\n          <!--<ion-option value="HetWeer">Het weer</ion-option>-->\n\n        </ion-select>\n\n      </ion-list>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- Swipe up refresher  -->\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown"\n\n                           pullingText="Sleep omlaag om te verversen"></ion-refresher-content>\n\n  </ion-refresher>\n\n  <!-- Grid -->\n\n  <ion-grid class="feedGrid">\n\n    <ion-col>\n\n      <ion-row>\n\n        <ion-card *ngFor="let item of (items ? items.slice(0,slice): [])" col-md-6 class="ionCard">\n\n          <!-- Images van nieuwsfeed -->\n\n          <div class="ion-card-image-wrapper" (tap)="viewEntry({ record: item })">\n\n            <img class="fullHeight" src="../assets/imgs/beautylab.png" *ngIf="item.site == \'Beautylab\'">\n\n            <img class="fullHeight" src="../assets/imgs/libelle.png" *ngIf="item.site == \'Libelle\'">\n\n            <img *ngIf="!item.image" src="../assets/imgs/noimage.jpg">\n\n          </div>\n\n          <ion-card-content class="cardContentFeed">\n\n            <!-- Avatar -->\n\n            <div id="AvatarFeed" (tap)="viewEntry({ record: item })">\n\n              <ion-avatar *ngIf="item.site == \'Beautylab\'" class="avatar" item-start>\n\n                <img src="../assets/svg/Beautylab.svg" class="avatar-feed"/>\n\n              </ion-avatar>\n\n              <ion-avatar *ngIf="item.site == \'Libelle\' && currentTheme == \'light-theme\'" class="avatar" item-start>\n\n                <img src="../assets/svg/libelle.svg" class="avatar-feed"/>\n\n              </ion-avatar>\n\n              <ion-avatar *ngIf="item.site == \'Libelle\' && currentTheme == \'dark-theme\'" class="avatar" item-start>\n\n                <img src="../assets/svg/libelle_wit.svg" class="avatar-feed"/>\n\n              </ion-avatar>\n\n              <div class="uitgeverFeedBeautylab" *ngIf="item.site == \'Beautylab\'">{{item.site}}</div>\n\n              <div class="uitgeverFeedLibelle" *ngIf="item.site == \'Libelle\'">{{item.site}}</div>\n\n            </div>\n\n            <!-- Uitgever -->\n\n            <div id="uitgeverFeed" (tap)="viewEntry({ record: item })">\n\n              <!-- Title  -->\n\n              <div id="title">\n\n              <ion-card-title *ngIf="item.site == \'Beautylab\'"><strong class="cardTitleBeautylab">{{item.title}}</strong></ion-card-title>\n\n                <ion-card-title *ngIf="item.site == \'Libelle\'"><strong class="cardTitleBeautylab">{{item.title}}</strong></ion-card-title>\n\n              </div>\n\n              <!-- description  -->\n\n              <div id="description">\n\n                <p class="descriptionFeed">{{htmlToPlaintext(item.description) |\n\n                  slice:0:120}}...</p>\n\n              </div>\n\n              <!-- Datum -->\n\n              <div id="datumFeed" class="datumFeed">\n\n                <span>{{item.datum}}</span>\n\n              </div>\n\n            </div>\n\n            <!-- Social Buttons - Comments - likes - Share -->\n\n            <div id="socialLikeComments" class="socialLikeComments">\n\n              <!---->\n\n              <button ion-button icon-start clear *ngIf="item.site == \'Beautylab\' && rol == 1"\n\n                      class="ColorDarkAppShare" (click)="showConfirmHide(item.id)">\n\n                <ion-icon name="trash"></ion-icon>\n\n              </button>\n\n              <button ion-button icon-start clear *ngIf="item.site == \'Libelle\' && rol == 1"\n\n                      class="ColorDarkAppShare" (click)="showConfirmHide(item.id)">\n\n                <ion-icon name="trash"></ion-icon>\n\n              </button>\n\n              <!---->\n\n              <button ion-button icon-start clear *ngIf="item.site == \'Beautylab\'" class="ColorDarkAppShare"\n\n                      (click)="shareInfo(item.title, item.image, item.link)">\n\n                <ion-icon name="share-alt"></ion-icon>\n\n              </button>\n\n              <button ion-button icon-start clear *ngIf="item.site == \'Libelle\'" class="ColorDarkAppShare"\n\n                      (click)="shareInfo(item.title, item.image, item.link)">\n\n                <ion-icon name="share-alt"></ion-icon>\n\n              </button>\n\n              <!---->\n\n              <button class="socialKnvb" ion-button icon-start clear\n\n                      *ngIf="item.site == \'Beautylab\' && item.liked == 0" [disabled]="disabled"\n\n                      (click)="setLike(item.id)">\n\n                <ion-icon name="heart-outline" class="ColorDarkApp"></ion-icon>\n\n                <div class="ColorDarkAppTextDarkTheme">{{item.likes}}</div>\n\n              </button>\n\n              <button class="socialKnvb" ion-button icon-start clear\n\n                      *ngIf="item.site == \'Libelle\' && item.liked == 0" [disabled]="disabled"\n\n                      (click)="setLike(item.id)">\n\n                <ion-icon name="heart-outline" class="ColorDarkApp"></ion-icon>\n\n                <div class="ColorDarkAppTextDarkTheme">{{item.likes}}</div>\n\n              </button>\n\n              <!---->\n\n              <button class="socialKnvb" ion-button icon-start clear\n\n                      *ngIf="item.site == \'Beautylab\' && item.liked == 1"\n\n                      (click)="dislike(item.id, item.title)">\n\n                <ion-icon name="heart" class="ColorDarkApp"></ion-icon>\n\n                <div class="ColorDarkAppTextDarkTheme">{{item.likes}}</div>\n\n              </button>\n\n              <button class="socialKnvb" ion-button icon-start clear\n\n                      *ngIf="item.site == \'Libelle\' && item.liked == 1"\n\n                      (click)="dislike(item.id, item.title)">\n\n                <ion-icon name="heart" class="ColorDarkApp"></ion-icon>\n\n                <div class="ColorDarkAppTextDarkTheme">{{item.likes}}</div>\n\n              </button>\n\n              <!---->\n\n              <button ion-button icon-start clear *ngIf="item.site == \'Beautylab\'" class="socialKnvb"\n\n                      (click)="viewComments({ record: item })">\n\n                <ion-icon name="chatbubbles" class="ColorDarkApp"></ion-icon>\n\n                <div class="ColorDarkAppTextDarkTheme">{{item.comments}}</div>\n\n              </button>\n\n              <button ion-button icon-start clear *ngIf="item.site == \'Libelle\'" class="socialKnvb"\n\n                      (click)="viewComments({ record: item })">\n\n                <ion-icon name="chatbubbles" class="ColorDarkApp"></ion-icon>\n\n                <div class="ColorDarkAppTextDarkTheme">{{item.comments}}</div>\n\n              </button>\n\n              <!---->\n\n            </div>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-row>\n\n      <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n        <ion-infinite-scroll-content\n\n                loadingSpinner="bubbles"\n\n                loadingText="Meer artikelen inladen...">\n\n        </ion-infinite-scroll-content>\n\n      </ion-infinite-scroll>\n\n    </ion-col>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\lifestyle\lifestyle.html"*/,
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
            __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__["a" /* File */]])
    ], LifestylePage);
    return LifestylePage;
}());

//# sourceMappingURL=lifestyle.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WijzigwachtwoordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(17);
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
    function WijzigwachtwoordPage(navCtrl, navParams, http, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
    }
    WijzigwachtwoordPage.prototype.ngOnInit = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            oldpassword: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(8)]),
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
    WijzigwachtwoordPage.prototype.updateWachtwoord = function (event) {
        var _this = this;
        if (this.password != this.password2 || this.password2 != this.password) {
            this.pass1 = "Wachtwoord niet gelijk";
        }
        else if (this.form.valid) {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = { headers: headers };
            var data = {
                userId: localStorage.getItem('userId'),
                oldpassword: this.oldpassword,
                newpassword: this.password,
            };
            this.http
                .post('http://gazoh.net/wijzigwachtwoord.php', data, options)
                .subscribe(function (data) {
                if (data == "password updated") {
                    var alert_1 = _this.alertCtrl.create({
                        title: "Succes",
                        message: "Je wachtwoord is succesvol gewijzigd.",
                        buttons: [{
                                text: "OK",
                                handler: function () {
                                    _this.navCtrl.pop();
                                }
                            }]
                    });
                    alert_1.present();
                }
                else if (data == "No matching password") {
                    _this.valMessage = data;
                    console.log(_this.valMessage);
                }
            });
        }
        else if (this.form.invalid) {
            this.validateAllFormFields(this.form); //{7}
        }
    };
    WijzigwachtwoordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wijzigwachtwoord',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\wijzigwachtwoord\wijzigwachtwoord.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title class="wachtwoordWijzigenPadding">Wachtwoord Wijzigen</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="updateWachtwoord($event)">\n\n        <ion-icon name="checkmark"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <form novalidate [formGroup]="form">\n\n    <div class="form-group">\n\n      <ion-item [ngClass]="{ \'ng-touched\' : form.get(\'oldpassword\').touched }">\n\n        <ion-label stacked>Oud Wachtwoord</ion-label>\n\n        <ion-input type="password" formControlName="oldpassword" class="form-control" [(ngModel)]="oldpassword"></ion-input>\n\n      </ion-item>\n\n    </div>\n\n    <div class="alert alert-danger" *ngIf="form.get(\'oldpassword\').touched && form.get(\'oldpassword\').invalid || valMessage == \'No matching password\'">\n\n      <div class="validatieText" *ngIf="form.get(\'oldpassword\').hasError(\'required\')">Wachtwoord moet ingevuld zijn</div>\n\n      <div class="validatieText" *ngIf="valMessage == \'No matching password\'">Wachtwoord is niet hetzelfde</div>\n\n    </div>\n\n\n\n\n\n    <div class="form-group">\n\n      <ion-item [ngClass]="{ \'ng-touched\' : form.get(\'password\').touched }">\n\n        <ion-label stacked>Nieuwe Wachtwoord</ion-label>\n\n        <ion-input type="password" formControlName="password" class="form-control" [(ngModel)]="password"></ion-input>\n\n      </ion-item>\n\n    </div>\n\n    <div class="alert alert-danger" *ngIf="form.get(\'password\').touched && form.get(\'password\').invalid">\n\n      <div class="validatieText" *ngIf="form.get(\'password\').hasError(\'required\')">Wachtwoord moet ingevuld zijn</div>\n\n      <div class="validatieText" *ngIf="form.get(\'password\').hasError(\'minLength\')">Wachtwoord moet minimaal 8 tekens lang zijn</div>\n\n      <div class="validatieText" *ngIf="form.get(\'password\').hasError(\'pattern\')">Wachtwoord moet minstens een hoofdletter, een kleine letter en een cijfer bevatten</div>\n\n    </div>\n\n\n\n    <div class="form-group">\n\n      <ion-item [ngClass]="{ \'ng-touched\' : form.get(\'password2\').touched }">\n\n        <ion-label stacked>Herhaal Nieuw Wachtwoord</ion-label>\n\n        <ion-input type="password" formControlName="password2" class="form-control" [(ngModel)]="password2"></ion-input>\n\n      </ion-item>\n\n    </div>\n\n    <div class="alert alert-danger" *ngIf="form.get(\'password2\').touched && form.get(\'password2\').invalid || this.password != this.password2 || this.password2 != this.password">\n\n      <div class="validatieText" *ngIf="form.get(\'password2\').hasError(\'required\')">Wachtwoord moet ingevuld zijn</div>\n\n      <div class="validatieText" *ngIf="form.get(\'password2\').hasError(\'minLength\')">Wachtwoord moet minimaal 8 tekens lang zijn</div>\n\n      <div class="validatieText" *ngIf="form.get(\'password2\').hasError(\'pattern\')">Wachtwoord moet minstens een hoofdletter, een kleine letter en een cijfer bevatten</div>\n\n    </div>\n\n    <div class="alert alert-danger" *ngIf="this.password != this.password2 || this.password2 != this.password">\n\n      <div class="validatieText">Wachtwoord is niet gelijk</div>\n\n    </div>\n\n\n\n\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\wijzigwachtwoord\wijzigwachtwoord.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], WijzigwachtwoordPage);
    return WijzigwachtwoordPage;
}());

//# sourceMappingURL=wijzigwachtwoord.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SourcesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(25);
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
    function SourcesPage(navCtrl, navParams, http, toastCtrl, storage, network) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.network = network;
        this.page = "0";
        // Theme
        if (localStorage.getItem("themeColor")) {
            this.currentTheme = localStorage.getItem("themeColor");
            console.log(this.currentTheme);
        }
    }
    SourcesPage.prototype.selectedTab = function (ind) {
        this.slider.slideTo(ind);
    };
    SourcesPage.prototype.ionViewWillEnter = function () {
        this.getSource();
    };
    SourcesPage.prototype.getSource = function () {
        var _this = this;
        if (this.network.type != "none") {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = { headers: headers };
            var data = {
                userId: localStorage.getItem("userId"),
            };
            this.http.post('http://gazoh.net/getsources.php', data, options)
                .subscribe(function (data) {
                _this.sourceData = data;
                _this.NOS = _this.sourceData[0].NOS;
                _this.VLKK = _this.sourceData[0].VLKK;
                _this.VLKKE = _this.sourceData[0].VLKKE;
                _this.TGF = _this.sourceData[0].TGF;
                _this.NUNL = _this.sourceData[0].NUNL;
                _this.KNVB = _this.sourceData[0].KNVB;
                _this.TWKS = _this.sourceData[0].TWKS;
                _this.NUNLFIN = _this.sourceData[0].NUNLFIN;
                _this.LBL = _this.sourceData[0].LBL;
                _this.BTYL = _this.sourceData[0].BTYL;
                _this.storage.set('NOS', _this.sourceData[0].NOS);
                _this.storage.set('VLKK', _this.sourceData[0].VLKK);
                _this.storage.set('VLKKE', _this.sourceData[0].VLKKE);
                _this.storage.set('TGF', _this.sourceData[0].TGF);
                _this.storage.set('NUNL', _this.sourceData[0].NUNL);
                _this.storage.set('KNVB', _this.sourceData[0].KNVB);
                _this.storage.set('TWKS', _this.sourceData[0].TWKS);
                _this.storage.set('NUNLFIN', _this.sourceData[0].NUNLFIN);
                _this.storage.set('LBL', _this.sourceData[0].LBL);
                _this.storage.set('BTYL', _this.sourceData[0].BTYL);
                console.log(_this.sourceData);
                console.log("NOS: " + _this.NOS);
                console.log("Volkskrant: " + _this.VLKK);
                console.log("Telegraaf : " + _this.TGF);
                console.log("NU.NL: " + _this.NUNL);
                console.log("KNVB: " + _this.KNVB);
                console.log("Tweakers: " + _this.TWKS);
                console.log("NU.nl Financieel: " + _this.NUNLFIN);
                console.log("Volkskrant Economie: " + _this.VLKKE);
                console.log("Libelle: " + _this.LBL);
                console.log("Beautylab: " + _this.BTYL);
            });
        }
        else if (this.network.type == "none") {
            // Get NOS Status from Storage
            this.storage.get('NOS').then(function (NOS) {
                _this.NOS = NOS;
            });
            // Get Volkskrant Status from Storage
            this.storage.get('VLKK').then(function (VLKK) {
                _this.VLKK = VLKK;
            });
            // Get Telegraaf Status from Storage
            this.storage.get('TGF').then(function (TGF) {
                _this.TGF = TGF;
            });
            // Get NU.NL Status from Storage
            this.storage.get('NUNL').then(function (NUNL) {
                _this.NUNL = NUNL;
            });
            // Get KNVB Status from Storage
            this.storage.get('KNVB').then(function (KNVB) {
                _this.KNVB = KNVB;
            });
            // Get Tweakers Status from Storage
            this.storage.get('TWKS').then(function (TWKS) {
                _this.TWKS = TWKS;
            });
            // Get NU.nl Financieel Status from Storage
            this.storage.get('NUNLFIN').then(function (NUNLFIN) {
                _this.NUNLFIN = NUNLFIN;
            });
            // Get Libelle Status from Storage
            this.storage.get('LBL').then(function (LBL) {
                _this.LBL = LBL;
            });
            // Get Beautylab Status from Storage
            this.storage.get('BTYL').then(function (BTYL) {
                _this.BTYL = BTYL;
            });
            // Get Volkskrant Economie Status from Storage
            this.storage.get('VLKKE').then(function (VLKKE) {
                _this.VLKKE = VLKKE;
            });
        }
    };
    SourcesPage.prototype.subscribeSource = function (source) {
        var _this = this;
        if (this.network.type != "none") {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = { headers: headers };
            var data = {
                sourceName: source,
                userId: localStorage.getItem("userId"),
            };
            this.http.post('http://gazoh.net/subscribesource.php', data, options)
                .subscribe(function (data) {
                if (data == "subscribed") {
                    _this.getSource();
                    var toast = _this.toastCtrl.create({
                        message: "" + source + " is toegevoegd.",
                        duration: 3500,
                        position: "bottom"
                    });
                    toast.present();
                }
                else if (data == "error") {
                    var toast = _this.toastCtrl.create({
                        message: "Er is iets niet goed gegaan, probeer het later opnieuw.",
                        duration: 3500,
                        position: "bottom"
                    });
                    toast.present();
                }
            });
        }
        else if (this.network.type == "none") {
            var toast = this.toastCtrl.create({
                message: "Er is geen internet verbinding, probeer het later opnieuw.",
                duration: 5000,
                position: "bottom"
            });
            toast.present();
        }
    };
    SourcesPage.prototype.unsubscribeSource = function (source) {
        var _this = this;
        if (this.network.type != "none") {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = { headers: headers };
            var data = {
                sourceName: source,
                userId: localStorage.getItem("userId"),
            };
            this.http.post('http://gazoh.net/unsubscribesource.php', data, options)
                .subscribe(function (data) {
                if (data == "unsubscribed") {
                    _this.getSource();
                    var toast = _this.toastCtrl.create({
                        message: "" + source + " is verwijderd.",
                        duration: 3500,
                        position: "bottom"
                    });
                    toast.present();
                }
                else if (data == "error") {
                    var toast = _this.toastCtrl.create({
                        message: "Er is iets niet goed gegaan, probeer het later opnieuw.",
                        duration: 3500,
                        position: "bottom"
                    });
                    toast.present();
                }
            });
        }
        else if (this.network.type == "none") {
            var toast = this.toastCtrl.create({
                message: "Er is geen internet verbinding, probeer het later opnieuw.",
                duration: 5000,
                position: "bottom"
            });
            toast.present();
        }
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
            selector: 'page-sources',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\sources\sources.html"*/'<ion-header no-border-bottom>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle right class="fakeCenter">\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Bronnen</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n    <ion-segment color="darkAppKleur" [(ngModel)]="page">\n\n        <ion-segment-button value="0" (click)="selectedTab(0)">\n\n            Geabboneerd\n\n        </ion-segment-button>\n\n        <ion-segment-button value="1" (click)="selectedTab(1)">\n\n            Suggesties\n\n        </ion-segment-button>\n\n    </ion-segment>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-slides #slider (ionSlideWillChange)="moveButton($event)">\n\n        <!--  -->\n\n        <!-- Alle Sources die zijn geimport -->\n\n        <!--  -->\n\n        <ion-slide>\n\n            <ion-list>\n\n                <ion-item class="sourceItem" *ngIf="NOS == 1">\n\n                    <ion-avatar class="avatar" item-start>\n\n                        <img src="../assets/svg/NOS_logo.svg" *ngIf="currentTheme == \'light-theme\'">\n\n                        <img src="../assets/svg/NOS_logo_Wit.svg" *ngIf="currentTheme == \'dark-theme\'">\n\n                    </ion-avatar>\n\n                    <div><b class="sourceTekstFeed">NOS</b></div>\n\n                    <div class="sourceTekst">Algemeen</div>\n\n                    <button ion-button outline item-end color="danger" class="DeleteClassesButton" *ngIf="NOS == 1"\n\n                            (click)="unsubscribeSource(\'NOS\')">\n\n                        <ion-icon name="checkmark" class="buttonIcon"></ion-icon>\n\n                        Verwijderen\n\n                    </button>\n\n                </ion-item>\n\n                <ion-item class="sourceItem" *ngIf="VLKK == 1">\n\n                    <ion-avatar class="avatar" item-start>\n\n                        <img src="../assets/svg/Volkskrant.svg" *ngIf="currentTheme == \'light-theme\'">\n\n                        <img src="../assets/svg/Volkskrant_wit.svg" *ngIf="currentTheme == \'dark-theme\'">\n\n                    </ion-avatar>\n\n                    <div><b class="sourceTekstFeed">Volkskrant</b></div>\n\n                    <div class="sourceTekst">Algemeen</div>\n\n                    <button ion-button outline item-end color="danger" class="DeleteClassesButton" *ngIf="VLKK == 1"\n\n                            (click)="unsubscribeSource(\'Volkskrant\')">\n\n                        <ion-icon name="checkmark" class="buttonIcon"></ion-icon>\n\n                        Verwijderen\n\n                    </button>\n\n                </ion-item>\n\n                <ion-item class="sourceItem" *ngIf="TGF == 1">\n\n                    <ion-avatar class="avatarTelegraafSources" item-start>\n\n                        <img src="../assets/svg/Telegraaf.svg" *ngIf="currentTheme == \'light-theme\'">\n\n                        <img src="../assets/svg/Telegraaf_Wit.svg" *ngIf="currentTheme == \'dark-theme\'">\n\n                    </ion-avatar>\n\n                    <div><b class="sourceTekstFeed">De Telegraaf</b></div>\n\n                    <div class="sourceTekst">Algemeen</div>\n\n                    <button ion-button outline item-end color="danger" class="DeleteClassesButton" *ngIf="TGF == 1"\n\n                            (click)="unsubscribeSource(\'De Telegraaf\')">\n\n                        <ion-icon name="checkmark" class="buttonIcon"></ion-icon>\n\n                        Verwijderen\n\n                    </button>\n\n                </ion-item>\n\n                <ion-item class="sourceItem" *ngIf="NUNL == 1">\n\n                    <ion-avatar class="avatar" item-start>\n\n                        <img class="avatar-feedNU" src="../assets/svg/nu.nl.svg">\n\n                    </ion-avatar>\n\n                    <div><b class="sourceTekstFeed">NU.nl</b></div>\n\n                    <div class="sourceTekst">Algemeen</div>\n\n                    <button ion-button outline item-end color="danger" class="DeleteClassesButton" *ngIf="NUNL == 1"\n\n                            (click)="unsubscribeSource(\'NU.NL\')">\n\n                        <ion-icon name="checkmark" class="buttonIcon"></ion-icon>\n\n                        Verwijderen\n\n                    </button>\n\n                </ion-item>\n\n                <ion-item class="sourceItem" *ngIf="TWKS == 1">\n\n                    <ion-avatar class="avatar" item-start>\n\n                        <img class="avatarTWKS" src="../assets/svg/Tweakers.svg">\n\n                    </ion-avatar>\n\n                    <div><b class="sourceTekstFeed">Tweakers</b></div>\n\n                    <div class="sourceTekst">Tech</div>\n\n                    <button ion-button outline item-end color="danger" class="DeleteClassesButton" *ngIf="TWKS == 1"\n\n                            (click)="unsubscribeSource(\'Tweakers\')">\n\n                        <ion-icon name="checkmark" class="buttonIcon"></ion-icon>\n\n                        Verwijderen\n\n                    </button>\n\n                </ion-item>\n\n                <ion-item class="sourceItem" *ngIf="KNVB == 1">\n\n                    <ion-avatar class="avatar" item-start>\n\n                        <img src="../assets/svg/knvb.svg">\n\n                    </ion-avatar>\n\n                    <div><b class="sourceTekstFeed">KNVB</b></div>\n\n                    <div class="sourceTekst">Sport</div>\n\n                    <button ion-button outline item-end color="danger" class="DeleteClassesButton" *ngIf="KNVB == 1"\n\n                            (click)="unsubscribeSource(\'KNVB\')">\n\n                        <ion-icon name="checkmark" class="buttonIcon"></ion-icon>\n\n                        Verwijderen\n\n                    </button>\n\n                </ion-item>\n\n                <ion-item class="sourceItem" *ngIf="NUNLFIN == 1">\n\n                    <ion-avatar class="avatar" item-start>\n\n                        <img class="avatar-feedNU" src="../assets/svg/nu.nl.svg">\n\n                    </ion-avatar>\n\n                    <div><b class="sourceTekstFeed">NU.nl</b></div>\n\n                    <div class="sourceTekst">Economie</div>\n\n                    <button ion-button outline item-end color="danger" class="DeleteClassesButton" *ngIf="NUNLFIN == 1"\n\n                            (click)="unsubscribeSource(\'NU.nl Financieel\')">\n\n                        <ion-icon name="checkmark" class="buttonIcon"></ion-icon>\n\n                        Verwijderen\n\n                    </button>\n\n                </ion-item>\n\n                <ion-item class="sourceItem" *ngIf="VLKKE == 1">\n\n                    <ion-avatar class="avatar" item-start>\n\n                        <img src="../assets/svg/Volkskrant.svg" *ngIf="currentTheme == \'light-theme\'">\n\n                        <img src="../assets/svg/Volkskrant_wit.svg" *ngIf="currentTheme == \'dark-theme\'">\n\n                    </ion-avatar>\n\n                    <div><b class="sourceTekstFeed">Volkskrant</b></div>\n\n                    <div class="sourceTekst">Economie</div>\n\n                    <button ion-button outline item-end color="danger" class="DeleteClassesButton" *ngIf="VLKKE == 1"\n\n                            (click)="unsubscribeSource(\'Volkskrant Economie\')">\n\n                        <ion-icon name="checkmark" class="buttonIcon"></ion-icon>\n\n                        Verwijderen\n\n                    </button>\n\n                </ion-item>\n\n                <ion-item class="sourceItem" *ngIf="BTYL == 1">\n\n                    <ion-avatar class="avatar" item-start>\n\n                        <img src="../assets/svg/Beautylab.svg">\n\n                    </ion-avatar>\n\n                    <div><b class="sourceTekstFeed">Beautylab</b></div>\n\n                    <div class="sourceTekst">Lifestyle</div>\n\n                    <button ion-button outline item-end color="danger" class="DeleteClassesButton" *ngIf="BTYL == 1"\n\n                            (click)="unsubscribeSource(\'Beautylab\')">\n\n                        <ion-icon name="checkmark" class="buttonIcon"></ion-icon>\n\n                        Verwijderen\n\n                    </button>\n\n                </ion-item>\n\n                <ion-item class="sourceItem" *ngIf="LBL == 1">\n\n                    <ion-avatar class="avatar" item-start>\n\n                        <img src="../assets/svg/libelle.svg" *ngIf="currentTheme == \'light-theme\'">\n\n                        <img src="../assets/svg/libelle_wit.svg" *ngIf="currentTheme == \'dark-theme\'">\n\n                    </ion-avatar>\n\n                    <div><b class="sourceTekstFeed">Libelle</b></div>\n\n                    <div class="sourceTekst">Lifestyle</div>\n\n                    <button ion-button outline item-end color="danger" class="DeleteClassesButton" *ngIf="LBL == 1"\n\n                            (click)="unsubscribeSource(\'Libelle\')">\n\n                        <ion-icon name="checkmark" class="buttonIcon"></ion-icon>\n\n                        Verwijderen\n\n                    </button>\n\n                </ion-item>\n\n            </ion-list>\n\n        </ion-slide>\n\n        <ion-slide>\n\n            <ion-list>\n\n                <!--  -->\n\n                <!-- Alle Sources die je kunt importen -->\n\n                <!--  -->\n\n                <ion-item class="sourceTitel" *ngIf="NOS != 1 || VLKK != 1 || TGF != 1 || NUNL != 1">\n\n                    <h4 class="TitelSources">Algemeen</h4>\n\n                </ion-item>\n\n                <ion-item class="sourceItem" *ngIf="NOS == 0">\n\n                    <ion-avatar class="avatar" item-start>\n\n                        <img src="../assets/svg/NOS_logo.svg" *ngIf="currentTheme == \'light-theme\'">\n\n                        <img src="../assets/svg/NOS_logo_Wit.svg" *ngIf="currentTheme == \'dark-theme\'">\n\n                    </ion-avatar>\n\n                    <div><b class="sourceTekstFeed">NOS</b></div>\n\n                    <div class="sourceTekst">Algemeen</div>\n\n                    <button ion-button outline item-end class="ImportClassesButton" *ngIf="NOS == 0"\n\n                            (click)="subscribeSource(\'NOS\')">\n\n                        <ion-icon name="checkmark" class="buttonIcon"></ion-icon>\n\n                        Toevoegen\n\n                    </button>\n\n                </ion-item>\n\n                <ion-item class="sourceItem" *ngIf="VLKK == 0">\n\n                    <ion-avatar class="avatar" item-start>\n\n                        <img src="../assets/svg/Volkskrant.svg" *ngIf="currentTheme == \'light-theme\'">\n\n                        <img src="../assets/svg/Volkskrant_wit.svg" *ngIf="currentTheme == \'dark-theme\'">\n\n                    </ion-avatar>\n\n                    <div><b class="sourceTekstFeed">Volkskrant</b></div>\n\n                    <div class="sourceTekst">Algemeen</div>\n\n                    <button ion-button outline item-end class="ImportClassesButton" *ngIf="VLKK == 0"\n\n                            (click)="subscribeSource(\'Volkskrant\')">\n\n                        <ion-icon name="checkmark" class="buttonIcon"></ion-icon>\n\n                        Toevoegen\n\n                    </button>\n\n                </ion-item>\n\n                <ion-item class="sourceItem" *ngIf="TGF == 0">\n\n                    <ion-avatar class="avatarTelegraafSources" item-start>\n\n                        <img src="../assets/svg/Telegraaf.svg" *ngIf="currentTheme == \'light-theme\'">\n\n                        <img src="../assets/svg/Telegraaf_Wit.svg" *ngIf="currentTheme == \'dark-theme\'">\n\n                    </ion-avatar>\n\n                    <div><b class="sourceTekstFeed">De Telegraaf</b></div>\n\n                    <div class="sourceTekst">Algemeen</div>\n\n                    <button ion-button outline item-end class="ImportClassesButton" *ngIf="TGF == 0"\n\n                            (click)="subscribeSource(\'De Telegraaf\')">\n\n                        <ion-icon name="checkmark" class="buttonIcon"></ion-icon>\n\n                        Toevoegen\n\n                    </button>\n\n                </ion-item>\n\n                <ion-item class="sourceItem" *ngIf="NUNL == 0">\n\n                    <ion-avatar class="avatar" item-start>\n\n                        <img class="avatar-feedNU" src="../assets/svg/nu.nl.svg">\n\n                    </ion-avatar>\n\n                    <div><b class="sourceTekstFeed">NU.nl</b></div>\n\n                    <div class="sourceTekst">Algemeen</div>\n\n                    <button ion-button outline item-end class="ImportClassesButton" *ngIf="NUNL == 0"\n\n                            (click)="subscribeSource(\'NU.NL\')">\n\n                        <ion-icon name="checkmark" class="buttonIcon"></ion-icon>\n\n                        Toevoegen\n\n                    </button>\n\n                </ion-item>\n\n                <ion-item class="sourceTitel"  *ngIf="TWKS != 1">\n\n                    <h4 class="TitelSources">Tech</h4>\n\n                </ion-item>\n\n                <ion-item class="sourceTitelHidden" *ngIf="TWKS == 1"></ion-item>\n\n                <ion-item class="sourceItem" *ngIf="TWKS == 0">\n\n                    <ion-avatar class="avatar" item-start>\n\n                        <img class="avatarTWKS" src="../assets/svg/Tweakers.svg">\n\n                    </ion-avatar>\n\n                    <div><b class="sourceTekstFeed">Tweakers</b></div>\n\n                    <div class="sourceTekst">Tech</div>\n\n                    <button ion-button outline item-end class="ImportClassesButton" *ngIf="TWKS == 0"\n\n                            (click)="subscribeSource(\'Tweakers\')">\n\n                        <ion-icon name="checkmark" class="buttonIcon"></ion-icon>\n\n                        Toevoegen\n\n                    </button>\n\n                </ion-item>\n\n                <ion-item class="sourceTitel" *ngIf="KNVB != 1">\n\n                    <h4 class="TitelSources">Sport</h4>\n\n                </ion-item>\n\n                <ion-item class="sourceTitelHidden" *ngIf="KNVB == 1"></ion-item>\n\n                <ion-item class="sourceItem" *ngIf="KNVB == 0">\n\n                    <ion-avatar class="avatar" item-start>\n\n                        <img src="../assets/svg/knvb.svg">\n\n                    </ion-avatar>\n\n                    <div><b class="sourceTekstFeed">KNVB</b></div>\n\n                    <div class="sourceTekst">Sport</div>\n\n                    <button ion-button outline item-end class="ImportClassesButton" *ngIf="KNVB == 0"\n\n                            (click)="subscribeSource(\'KNVB\')">\n\n                        <ion-icon name="checkmark" class="buttonIcon"></ion-icon>\n\n                        Toevoegen\n\n                    </button>\n\n                </ion-item>\n\n                <ion-item class="sourceTitel" *ngIf="NUNLFIN != 1 || VLKKE != 1">\n\n                    <h4 class="TitelSources">Financieel</h4>\n\n                </ion-item>\n\n                <ion-item class="sourceTitelHidden" *ngIf="NUNLFIN == 1"></ion-item>\n\n                <ion-item class="sourceItem" *ngIf="NUNLFIN == 0">\n\n                    <ion-avatar class="avatar" item-start>\n\n                        <img class="avatar-feedNU" src="../assets/svg/nu.nl.svg">\n\n                    </ion-avatar>\n\n                    <div><b class="sourceTekstFeed">NU.nl</b></div>\n\n                    <div class="sourceTekst">Economie</div>\n\n                    <button ion-button outline item-end class="ImportClassesButton" *ngIf="NUNLFIN == 0"\n\n                            (click)="subscribeSource(\'NU.nl Financieel\')">\n\n                        <ion-icon name="checkmark" class="buttonIcon"></ion-icon>\n\n                        Toevoegen\n\n                    </button>\n\n                </ion-item>\n\n                <ion-item class="sourceItem" *ngIf="VLKKE == 0">\n\n                    <ion-avatar class="avatar" item-start>\n\n                        <img src="../assets/svg/Volkskrant.svg" *ngIf="currentTheme == \'light-theme\'">\n\n                        <img src="../assets/svg/Volkskrant_wit.svg" *ngIf="currentTheme == \'dark-theme\'">\n\n                    </ion-avatar>\n\n                    <div><b class="sourceTekstFeed">Volkskrant</b></div>\n\n                    <div class="sourceTekst">Economie</div>\n\n                    <button ion-button outline item-end class="ImportClassesButton" *ngIf="VLKKE == 0"\n\n                            (click)="subscribeSource(\'Volkskrant Economie\')">\n\n                        <ion-icon name="checkmark" class="buttonIcon"></ion-icon>\n\n                        Toevoegen\n\n                    </button>\n\n                </ion-item>\n\n                <ion-item class="sourceTitel" *ngIf="BTYL != 1 || LBL != 1">\n\n                    <h4 class="TitelSources">Lifestyle</h4>\n\n                </ion-item>\n\n                <ion-item class="sourceTitelHidden" *ngIf="BTYL == 1 && LBL == 1"></ion-item>\n\n                <ion-item class="sourceItem" *ngIf="BTYL == 0">\n\n                    <ion-avatar class="avatar" item-start>\n\n                        <img src="../assets/svg/Beautylab.svg">\n\n                    </ion-avatar>\n\n                    <div><b class="sourceTekstFeed">Beautylab</b></div>\n\n                    <div class="sourceTekst">Lifestyle</div>\n\n                    <button ion-button outline item-end class="ImportClassesButton" *ngIf="BTYL == 0"\n\n                            (click)="subscribeSource(\'Beautylab\')">\n\n                        <ion-icon name="checkmark" class="buttonIcon"></ion-icon>\n\n                        Toevoegen\n\n                    </button>\n\n                </ion-item>\n\n                <ion-item class="sourceItem" *ngIf="LBL == 0">\n\n                    <ion-avatar class="avatar" item-start>\n\n                        <img src="../assets/svg/libelle.svg" *ngIf="currentTheme == \'light-theme\'">\n\n                        <img src="../assets/svg/libelle_wit.svg" *ngIf="currentTheme == \'dark-theme\'">\n\n                    </ion-avatar>\n\n                    <div><b class="sourceTekstFeed">Libelle</b></div>\n\n                    <div class="sourceTekst">Lifestyle</div>\n\n                    <button ion-button outline item-end class="ImportClassesButton" *ngIf="LBL == 0"\n\n                            (click)="subscribeSource(\'Libelle\')">\n\n                        <ion-icon name="checkmark" class="buttonIcon"></ion-icon>\n\n                        Toevoegen\n\n                    </button>\n\n                </ion-item>\n\n            </ion-list>\n\n        </ion-slide>\n\n    </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\sources\sources.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */]])
    ], SourcesPage);
    return SourcesPage;
}());

//# sourceMappingURL=sources.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comments_comments__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lijstweer_lijstweer__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var SportPage = /** @class */ (function () {
    function SportPage(navCtrl, navParams, menuCtrl, http, network, toastCtrl, loadingCtrl, platform, events, screenOrientation, alertCtrl, socialSharing, geolocation, storage, transfer, file) {
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
        this.transfer = transfer;
        this.file = file;
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
        this.TIMER_IN_MS = 100;
        this.slice = 5;
        this.storageDirectory = '';
        // Select Items
        this.selectOptions = {
            title: 'Bekijk'
        };
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
            if (this.datepicker == "vandaag") {
                offlinealert.present();
                this.getOfflineDataToday();
            }
            else if (this.datepicker == "gisteren") {
                this.getOfflineDataYesterday();
            }
            else if (this.datepicker == "driedagengeleden") {
                this.getOfflineData3DaysAgo();
            }
        }
        if (localStorage.getItem("themeColor")) {
            this.currentTheme = localStorage.getItem("themeColor");
            console.log(this.currentTheme);
        }
    }
    // ---------------------------------------------------------------------------------------------
    // Hier eindigt de constructor
    // ---------------------------------------------------------------------------------------------
    //
    SportPage.prototype.onChange = function (SelectedValue) {
        SelectedValue = SelectedValue;
        console.log(SelectedValue);
        if (this.network.type != "none") {
            if (this.datepicker == "vandaag") {
                this.load();
                this.content.scrollToTop(0);
            }
            else if (this.datepicker == "gisteren") {
                this.loadYesterday();
                this.content.scrollToTop(0);
            }
            else if (this.datepicker == "driedagengeleden") {
                this.load3DaysAgo();
                this.content.scrollToTop(0);
            } // else if (this.datepicker == "HetWeer") {
            //     this.weerData();
            // }
        }
        else if (this.network.type == "none") {
            if (this.datepicker == "vandaag") {
                this.getOfflineDataToday();
            }
            else if (this.datepicker == "gisteren") {
                this.getOfflineDataYesterday();
            }
            else if (this.datepicker == "driedagengeleden") {
                this.getOfflineData3DaysAgo();
            }
        }
    };
    // Alert of je de artikel wilt hiden
    SportPage.prototype.showConfirmHide = function (postId) {
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
    // Als netwerk online is of offline is
    SportPage.prototype.ionViewWillEnter = function () {
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
            // Get offline data
            if (this.datepicker == "vandaag") {
                this.getOfflineDataToday();
            }
            else if (this.datepicker == "gisteren") {
                this.getOfflineDataYesterday();
            }
            else if (this.datepicker == "driedagengeleden") {
                this.getOfflineData3DaysAgo();
            }
        }
    };
    // Custom Spinner loader
    SportPage.prototype.presentLoadingCustom = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<div class=\"custom-spinner-container\"><img src=\"../assets/svg/spinner/tail-spin.svg\"><br> <p>Laden...</p>\n     </div>",
            duration: 610
        });
        loading.present();
    };
    // Laad data pas zodra je bent ingelogt
    SportPage.prototype.loadData = function () {
        localStorage.getItem(this.key);
        if (this.key != null && this.key != undefined) {
            this.items = JSON.parse(this.key);
        }
    };
    //
    SportPage.prototype.htmlToPlaintext = function (text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
    // Redirect to NieuwsPage
    SportPage.prototype.viewEntry = function (param) {
        this.navCtrl.push('NieuwsPage', param);
    };
    // Doorverbinden naar de CommentsPage
    SportPage.prototype.viewComments = function (param) {
        if (this.network.type != "none") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__comments_comments__["a" /* CommentsPage */], param);
        }
        else if (this.network.type == "none") {
            var toast = this.toastCtrl.create({
                message: "Actie kon niet worden uitgevoerd, geen internet verbinding gevonden.",
                duration: 3500,
                position: "bottom"
            });
            toast.present();
        }
    };
    // Zoek functie
    SportPage.prototype.search = function (event) {
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
    SportPage.prototype.resetChanges = function () {
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
            else if (this.datepicker == "HetWeer") {
                this.isSearchbaropened = false;
            }
        }
        else {
            this.items = this.artikelen;
            this.isSearchbaropened = false;
        }
    };
    // Zodra de pagina is geladen
    SportPage.prototype.ionViewDidLoad = function () {
        this.menuCtrl.enable(true, 'myMenu');
        if (this.network.type != "none") {
            this.setOfflineToday();
            this.setOfflineYesterday();
            this.setOffline3DaysAgo();
        }
    };
    // Segment Alle nieuws van Vandaag
    SportPage.prototype.load = function () {
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
            .post('http://gazoh.net/getdatasport.php', data, options)
            .subscribe(function (data) {
            _this.items = data;
            _this.artikelen = data;
            _this.items.sort(function (a, b) {
                var dateA = new Date(a.datum.replace(' ', 'T'));
                var dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: "De pagina die u wilt bekijken kan niet worden weergegeven, bekijk uw internetverbinding",
                duration: 3500,
                position: "top"
            });
            toast.present();
            console.log("Http error is: " + error);
        });
    };
    SportPage.prototype.loadWithSpinner = function () {
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
            .post('http://gazoh.net/getdatasport.php', data, options)
            .subscribe(function (data) {
            _this.items = data;
            _this.artikelen = data;
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                duration: 3500,
                position: "top"
            });
            toast.present();
            console.log("Http error is: " + error);
        });
        this.presentLoadingCustom();
    };
    // Segment Alle nieuws van Gisteren
    SportPage.prototype.loadYesterday = function () {
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
            .post('http://gazoh.net/getdatasportyesterday.php', data, options)
            .subscribe(function (data) {
            _this.items = data;
            _this.artikelen = data;
            _this.items.sort(function (a, b) {
                var dateA = new Date(a.datum.replace(' ', 'T'));
                var dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                duration: 3500,
                position: "top"
            });
            toast.present();
            console.log("Http error is: " + error);
        });
        this.presentLoadingCustom();
    };
    // Segment Alle nieuws van Gisteren
    SportPage.prototype.load3DaysAgo = function () {
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
            .post('http://gazoh.net/getdatasport3daysago.php', data, options)
            .subscribe(function (data) {
            _this.items = data;
            _this.artikelen = data;
            console.log("Offline data set in storage: offlineData3DaysAgo");
            _this.storage.set("offlineData3DaysAgo", data);
            _this.items.sort(function (a, b) {
                var dateA = new Date(a.datum.replace(' ', 'T'));
                var dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                duration: 3500,
                position: "top"
            });
            toast.present();
            console.log("Http error is: " + error);
        });
        this.presentLoadingCustom();
    };
    // De pull to refresh
    SportPage.prototype.doRefresh = function (refresher) {
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
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    SportPage.prototype.setLike = function (articleId) {
        var _this = this;
        if (this.network.type != "none") {
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
                if (data == "liked")
                    setTimeout(function () {
                        _this.disabled = false;
                    }, _this.TIMER_IN_MS);
                {
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
        else if (this.network.type == "none") {
            var toast = this.toastCtrl.create({
                message: "Actie kon niet worden uitgevoerd, geen internet verbinding gevonden.",
                duration: 3500,
                position: "bottom"
            });
            toast.present();
            if (this.network.type == "none") {
                this.disabled = true;
            }
            else {
                this.disabled = false;
            }
        }
    };
    SportPage.prototype.shareInfo = function (articleTitle, articleImage, articleLink) {
        this.socialSharing.share('Bekijk "' + articleTitle + '" via de Newsage app', "NewsAge", articleImage, articleLink);
    };
    SportPage.prototype.dislike = function (articleId, articleTitle) {
        var _this = this;
        if (this.network.type != "none") {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options_1 = { headers: headers };
            var data_1 = {
                articleId: articleId,
                userId: this.userId
            };
            var alert_1 = this.alertCtrl.create({
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
                            _this.http.post('http://gazoh.net/unlike.php', data_1, options_1)
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
            alert_1.present();
        }
        else if (this.network.type == "none") {
            var toast = this.toastCtrl.create({
                message: "Actie kon niet worden uitgevoerd, geen internet verbinding gevonden.",
                duration: 3500,
                position: "bottom"
            });
            toast.present();
        }
    };
    SportPage.prototype.setHideArticle = function (postId) {
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
                    position: "bottom",
                    showCloseButton: true,
                    closeButtonText: "OK"
                });
                toast.present();
            }
        });
    };
    SportPage.prototype.getOfflineDataToday = function () {
        var _this = this;
        this.storage.get("offlineDataSportVandaag").then(function (data) {
            _this.items = data;
            _this.artikelen = data;
            _this.items.sort(function (a, b) {
                var dateA = new Date(a.datum.replace(' ', 'T'));
                var dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        });
    };
    SportPage.prototype.getOfflineDataYesterday = function () {
        var _this = this;
        this.storage.get("offlineDataSportGisteren").then(function (data) {
            _this.items = data;
            _this.artikelen = data;
            _this.items.sort(function (a, b) {
                var dateA = new Date(a.datum.replace(' ', 'T'));
                var dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        });
    };
    SportPage.prototype.getOfflineData3DaysAgo = function () {
        var _this = this;
        this.storage.get("offlineDataSport3DagenGeleden").then(function (data) {
            _this.items = data;
            _this.artikelen = data;
            _this.items.sort(function (a, b) {
                var dateA = new Date(a.datum.replace(' ', 'T'));
                var dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        });
    };
    SportPage.prototype.goLijstWeerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__lijstweer_lijstweer__["a" /* LijstweerPage */]);
    };
    SportPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            _this.slice += 5;
            infiniteScroll.complete();
        }, 200);
    };
    SportPage.prototype.setOfflineToday = function () {
        var _this = this;
        if (this.network.type != "none") {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = { headers: headers };
            var data = {
                userId: localStorage.getItem('userId')
            };
            this.http
                .post('http://gazoh.net/getdatasport.php', data, options)
                .subscribe(function (data) {
                _this.storage.set("offlineDataSportVandaag", data);
                console.log("Offline data set in storage: offlineDataVandaag");
            }, function (error) {
                var toast = _this.toastCtrl.create({
                    message: "De pagina die u wilt bekijken kan niet worden weergegeven, bekijk uw internetverbinding",
                    duration: 3500,
                    position: "top"
                });
                toast.present();
                console.log("Http error is: " + error);
            });
        }
    };
    SportPage.prototype.setOfflineYesterday = function () {
        var _this = this;
        if (this.network.type != "none") {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = { headers: headers };
            var data = {
                userId: localStorage.getItem('userId')
            };
            this.http
                .post('http://gazoh.net/getdatasportyesterday.php', data, options)
                .subscribe(function (data) {
                _this.storage.set("offlineDataSportGisteren", data);
                console.log("Offline data set in storage: offlineDataGisteren");
            }, function (error) {
                var toast = _this.toastCtrl.create({
                    message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                    duration: 3500,
                    position: "top"
                });
                toast.present();
                console.log("Http error is: " + error);
            });
        }
    };
    SportPage.prototype.setOffline3DaysAgo = function () {
        var _this = this;
        if (this.network.type != "none") {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = { headers: headers };
            var data = {
                userId: localStorage.getItem('userId')
            };
            this.http
                .post('http://gazoh.net/getdatasport3daysago.php', data, options)
                .subscribe(function (data) {
                _this.storage.set("offlineDataSport3DagenGeleden", data);
                console.log("Offline data set in storage: offlineData3DagenGeleden");
            }, function (error) {
                var toast = _this.toastCtrl.create({
                    message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                    duration: 3500,
                    position: "top"
                });
                toast.present();
                console.log("Http error is: " + error);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Searchbar */])
    ], SportPage.prototype, "searchbar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], SportPage.prototype, "content", void 0);
    SportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sport',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\sport\sport.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle *ngIf="!isSearchbaropened">\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title *ngIf="!isSearchbaropened" class="algemeenText">Sport</ion-title>\n\n        <!-- Searchbar  -->\n\n        <ion-searchbar #searchbar *ngIf="isSearchbaropened" [showCancelButton]="true" (ionCancel)="resetChanges()"\n\n                       (ionInput)="search($event)" placeholder="Waar zijn we naar op zoek?"\n\n                       class="slideInRight"></ion-searchbar>\n\n        <!-- Searchbar icon -->\n\n        <ion-buttons end\n\n                     *ngIf="this.datepicker == \'vandaag\' || this.datepicker == \'gisteren\' || this.datepicker == \'driedagengeleden\'">\n\n            <button ion-button icon-only (click)="isSearchbaropened=true">\n\n                <ion-icon name="search" *ngIf="!isSearchbaropened"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-buttons end *ngIf="this.datepicker == \'HetWeer\'">\n\n            <button ion-button icon-only (click)="goLijstWeerPage()">\n\n                <ion-icon name="search"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-buttons end *ngIf="!isSearchbaropened" class="moreFeed">\n\n            <ion-icon class="calenderIcon" name="calendar"></ion-icon>\n\n            <ion-list class="listMore">\n\n                <ion-select #newSelect [(ngModel)]="datepicker" (ionChange)="onChange(datepicker)"\n\n                            [selectOptions]="selectOptions" cancelText="Annuleer" okText="Ok" class="SelectMore">\n\n                    <ion-option value="vandaag">Vandaag</ion-option>\n\n                    <ion-option value="gisteren">Gisteren</ion-option>\n\n                    <ion-option value="driedagengeleden">Drie dagen geleden</ion-option>\n\n                    <!--<ion-option value="HetWeer">Het weer</ion-option>-->\n\n                </ion-select>\n\n            </ion-list>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <!-- Swipe up refresher  -->\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Sleep omlaag om te verversen"></ion-refresher-content>\n\n    </ion-refresher>\n\n    <!-- Grid -->\n\n    <ion-grid class="feedGrid">\n\n        <ion-col>\n\n            <ion-row>\n\n                <ion-card *ngFor="let item of (items ? items.slice(0,slice): [])" col-md-6 class="ionCard">\n\n                    <!-- Images van nieuwsfeed -->\n\n                    <div class="ion-card-image-wrapper" (tap)="viewEntry({ record: item })">\n\n                        <img class="fullHeight" src="../assets/imgs/NOS.png" *ngIf="item.site == \'NOS\' && network.type == \'none\'">\n\n                        <img class="fullHeight" src="../assets/imgs/NUNL.png" *ngIf="item.site == \'NU.nl\' && network.type == \'none\'">\n\n                        <img class="fullHeight" src="../assets/imgs/tweakers.png" *ngIf="item.site == \'Tweakers\'">\n\n                        <img class="fullHeight" src="../assets/imgs/telegraaf.png" *ngIf="item.site == \'De Telegraaf\' && network.type == \'none\'">\n\n                        <img class="fullHeight" src="../assets/imgs/KNVB.png" *ngIf="item.site == \'KNVB\' && network.type == \'none\'">\n\n                        <img class="fullHeight" [src]="item.image" *ngIf="item.site == \'NOS\' || item.site == \'De Telegraaf\' || item.site == \'NU.nl\' || item.site == \'KNVB\' && network.type != \'none\'">\n\n                        <img *ngIf="!item.image" src="../assets/imgs/noimage.jpg">\n\n                    </div>\n\n                    <ion-card-content class="cardContentFeed">\n\n                        <!-- Avatar -->\n\n                        <div id="AvatarFeed" (tap)="viewEntry({ record: item })">\n\n                            <ion-avatar *ngIf="item.site == \'NOS\' && currentTheme == \'light-theme\'" class="avatarNOS" item-start>\n\n                                <img src="../assets/svg/NOS_logo.svg" class="avatar-feed"/>\n\n                            </ion-avatar>\n\n                            <ion-avatar *ngIf="item.site == \'NOS\' && currentTheme == \'dark-theme\'" class="avatarNOS" item-start>\n\n                                <img src="../assets/svg/NOS_logo_Wit.svg" class="avatar-feed"/>\n\n                            </ion-avatar>\n\n                            <ion-avatar *ngIf="item.site == \'De Telegraaf\' && currentTheme == \'light-theme\'" class="avatarTelegraaf" item-start>\n\n                                <img src="../assets/svg/Telegraaf.svg" class="avatar-feedTelegraaf"/>\n\n                            </ion-avatar>\n\n                            <ion-avatar *ngIf="item.site == \'De Telegraaf\' && currentTheme == \'dark-theme\'" class="avatarTelegraaf" item-start>\n\n                                <img src="../assets/svg/Telegraaf_Wit.svg" class="avatar-feedTelegraaf"/>\n\n                            </ion-avatar>\n\n                            <ion-avatar *ngIf="item.site == \'NU.nl\'" class="avatar" item-start>\n\n                                <img src="../assets/svg/nu.nl.svg" class="avatar-feed"/>\n\n                            </ion-avatar>\n\n                            <ion-avatar *ngIf="item.site == \'Tweakers\'" class="avatar" item-start>\n\n                                <img src="../assets/svg/Tweakers.svg" class="avatar-feed"/>\n\n                            </ion-avatar>\n\n                            <ion-avatar *ngIf="item.site == \'KNVB\'" class="avatar" item-start>\n\n                                <img src="../assets/svg/knvb.svg" class="avatar-feed"/>\n\n                            </ion-avatar>\n\n                            <div class="uitgeverFeed" *ngIf="item.site == \'De Telegraaf\'">{{item.site}}</div>\n\n                            <div class="uitgeverFeedNU" *ngIf="item.site == \'NU.nl\'">{{item.site}}</div>\n\n                            <div class="uitgeverFeedNU" *ngIf="item.site == \'Tweakers\'">{{item.site}}</div>\n\n                            <div class="uitgeverFeedNU" *ngIf="item.site == \'KNVB\'">{{item.site}}</div>\n\n                        </div>\n\n                        <!-- Uitgever -->\n\n                        <div id="uitgeverFeed" (tap)="viewEntry({ record: item })">\n\n                            <!-- Title  -->\n\n                            <div id="title">\n\n                                <ion-card-title *ngIf="item.site == \'De Telegraaf\' || item.site == \'NU.nl\'"><strong class="cardTitle">{{item.title}}</strong></ion-card-title>\n\n                                <ion-card-title *ngIf="item.site == \'NOS\'" id="ionCardNOS"><strong class="cardTitleNOS">{{item.title}}</strong></ion-card-title>\n\n                                <ion-card-title *ngIf="item.site == \'Tweakers\'"><strong class="cardTitleNOS">{{item.title}}</strong></ion-card-title>\n\n                                <ion-card-title *ngIf="item.site == \'KNVB\'"><strong class="cardTitleNOS">{{item.title}}</strong></ion-card-title>\n\n\n\n                            </div>\n\n                            <!-- description  -->\n\n                            <div id="description">\n\n                                <p class="descriptionFeed">{{htmlToPlaintext(item.description) |\n\n                                    slice:0:120}}...</p>\n\n                            </div>\n\n                            <!-- Datum -->\n\n                            <div id="datumFeed" class="datumFeed">\n\n                                <span>{{item.datum}}</span>\n\n                            </div>\n\n                        </div>\n\n                        <!-- Social Buttons - Comments - likes - Share -->\n\n                        <div id="socialLikeComments" class="socialLikeComments">\n\n                            <!---->\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'De Telegraaf\' && rol == 1"\n\n                                    class="socialTelegraafShare" (click)="showConfirmHide(item.id)">\n\n                                <ion-icon name="trash"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'NOS\' && rol == 1"\n\n                                    class="socialNOSShare" (click)="showConfirmHide(item.id)">\n\n                                <ion-icon name="trash"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'NU.nl\' && rol == 1"\n\n                                    class="socialNuShare" (click)="showConfirmHide(item.id)">\n\n                                <ion-icon name="trash"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'Tweakers\' && rol == 1"\n\n                                    class="socialTweakersShare" (click)="showConfirmHide(item.id)">\n\n                                <ion-icon name="trash"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'KNVB\' && rol == 1"\n\n                                    class="KNVBshare" (click)="showConfirmHide(item.id)">\n\n                                <ion-icon name="trash"></ion-icon>\n\n                            </button>\n\n                            <!---->\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'De Telegraaf\'"\n\n                                    class="socialTelegraafShare"\n\n                                    (click)="shareInfo(item.title, item.image, item.link)">\n\n                                <ion-icon name="share-alt"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'NOS\'" class="socialNOSShare"\n\n                                    (click)="shareInfo(item.title, item.image, item.link)">\n\n                                <ion-icon name="share-alt"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'NU.nl\'" class="socialNuShare"\n\n                                    (click)="shareInfo(item.title, item.image, item.link)">\n\n                                <ion-icon name="share-alt"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'Tweakers\'" class="socialTweakersShare"\n\n                                    (click)="shareInfo(item.title, item.image, item.link)">\n\n                                <ion-icon name="share-alt"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'KNVB\'" class="socialKNVBshare"\n\n                                    (click)="shareInfo(item.title, item.image, item.link)">\n\n                                <ion-icon name="share-alt"></ion-icon>\n\n                            </button>\n\n                            <!---->\n\n                            <button class="socialTelegraaf" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'De Telegraaf\' && item.liked == 0" [disabled]="disabled"\n\n                                    (click)="setLike(item.id)">\n\n                                <ion-icon name="heart-outline" class="likeTelegraaf"></ion-icon>\n\n                                <div class="darkChatComment">{{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialNOS" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'NOS\' && item.liked == 0" [disabled]="disabled"\n\n                                    (click)="setLike(item.id)">\n\n                                <ion-icon name="heart-outline" class="likeNOS"></ion-icon>\n\n                                <div class="darkChatComment"> {{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialNu" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'NU.nl\' && item.liked == 0" [disabled]="disabled"\n\n                                    (click)="setLike(item.id)">\n\n                                <ion-icon name="heart-outline" class="likeNu"></ion-icon>\n\n                                <div class="darkChatComment">{{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialTweakers" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'Tweakers\' && item.liked == 0" [disabled]="disabled"\n\n                                    (click)="setLike(item.id)">\n\n                                <ion-icon name="heart-outline" class="likeTweakers"></ion-icon>\n\n                                <div class="darkChatComment">{{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialKnvb" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'KNVB\' && item.liked == 0" [disabled]="disabled"\n\n                                    (click)="setLike(item.id)">\n\n                                <ion-icon name="heart-outline" class="likeKNVB"></ion-icon>\n\n                                <div class="darkChatComment">{{item.likes}}</div>\n\n                            </button>\n\n                            <!---->\n\n                            <button class="socialTelegraaf" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'De Telegraaf\' && item.liked == 1"\n\n                                    (click)="dislike(item.id, item.title)">\n\n                                <ion-icon name="heart" class="likeTelegraaf"></ion-icon>\n\n                                <div class="darkChatComment">{{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialNOS" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'NOS\' && item.liked == 1"\n\n                                    (click)="dislike(item.id, item.title)">\n\n                                <ion-icon name="heart" class="likeNOS"></ion-icon>\n\n                                <div class="darkChatComment">{{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialNu" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'NU.nl\' && item.liked == 1"\n\n                                    (click)="dislike(item.id, item.title)">\n\n                                <ion-icon name="heart" class="likeNu"></ion-icon>\n\n                                <div class="darkChatComment">{{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialTweakers" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'Tweakers\' && item.liked == 1"\n\n                                    (click)="dislike(item.id, item.title)">\n\n                                <ion-icon name="heart" class="likeTweakers"></ion-icon>\n\n                                <div class="darkChatComment">{{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialKnvb" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'KNVB\' && item.liked == 1"\n\n                                    (click)="dislike(item.id, item.title)">\n\n                                <ion-icon name="heart" class="likeKNVB"></ion-icon>\n\n                                <div class="darkChatComment">{{item.likes}}</div>\n\n                            </button>\n\n                            <!---->\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'De Telegraaf\'"\n\n                                    class="socialTelegraaf" (click)="viewComments({ record: item })">\n\n                                <ion-icon name="chatbubbles" class="darkChatTelegraaf"></ion-icon>\n\n                                <div class="darkChatComment">{{item.comments}}</div>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'NOS\'" class="socialNOS"\n\n                                    (click)="viewComments({ record: item })">\n\n                                <ion-icon name="chatbubbles" class="darkChatNOS"></ion-icon>\n\n                                <div class="darkChatComment">{{item.comments}}</div>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'NU.nl\'" class="socialNu"\n\n                                    (click)="viewComments({ record: item })">\n\n                                <ion-icon name="chatbubbles" class="darkChatNU"></ion-icon>\n\n                                <div class="darkChatComment">{{item.comments}}</div>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'Tweakers\'" class="socialTweakers"\n\n                                    (click)="viewComments({ record: item })">\n\n                                <ion-icon name="chatbubbles" class="darkChatTweakers"></ion-icon>\n\n                                <div class="darkChatComment">{{item.comments}}</div>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'KNVB\'" class="socialKnvb"\n\n                                    (click)="viewComments({ record: item })">\n\n                                <ion-icon name="chatbubbles" class="darkChatKnvb"></ion-icon>\n\n                                <div class="darkChatComment">{{item.comments}}</div>\n\n                            </button>\n\n                            <!---->\n\n                        </div>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ion-row>\n\n            <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n                <ion-infinite-scroll-content\n\n                        loadingSpinner="bubbles"\n\n                        loadingText="Meer artikelen inladen...">\n\n                </ion-infinite-scroll-content>\n\n            </ion-infinite-scroll>\n\n        </ion-col>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\sport\sport.html"*/,
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
            __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__["a" /* File */]])
    ], SportPage);
    return SportPage;
}());

//# sourceMappingURL=sport.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comments_comments__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lijstweer_lijstweer__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var TechPage = /** @class */ (function () {
    function TechPage(navCtrl, navParams, menuCtrl, http, network, toastCtrl, loadingCtrl, platform, events, screenOrientation, alertCtrl, socialSharing, geolocation, storage, transfer, file) {
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
        this.transfer = transfer;
        this.file = file;
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
        this.TIMER_IN_MS = 100;
        this.slice = 5;
        this.storageDirectory = '';
        // Select Items
        this.selectOptions = {
            title: 'Bekijk'
        };
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
            if (this.datepicker == "vandaag") {
                offlinealert.present();
                this.getOfflineDataToday();
            }
            else if (this.datepicker == "gisteren") {
                this.getOfflineDataYesterday();
            }
            else if (this.datepicker == "driedagengeleden") {
                this.getOfflineData3DaysAgo();
            }
        }
        if (localStorage.getItem("themeColor")) {
            this.currentTheme = localStorage.getItem("themeColor");
            console.log(this.currentTheme);
        }
    }
    // ---------------------------------------------------------------------------------------------
    // Hier eindigt de constructor
    // ---------------------------------------------------------------------------------------------
    //
    TechPage.prototype.onChange = function (SelectedValue) {
        SelectedValue = SelectedValue;
        console.log(SelectedValue);
        if (this.network.type != "none") {
            if (this.datepicker == "vandaag") {
                this.load();
                this.content.scrollToTop(0);
            }
            else if (this.datepicker == "gisteren") {
                this.loadYesterday();
                this.content.scrollToTop(0);
            }
            else if (this.datepicker == "driedagengeleden") {
                this.load3DaysAgo();
                this.content.scrollToTop(0);
            } // else if (this.datepicker == "HetWeer") {
            //     this.weerData();
            // }
        }
        else if (this.network.type == "none") {
            if (this.datepicker == "vandaag") {
                this.getOfflineDataToday();
            }
            else if (this.datepicker == "gisteren") {
                this.getOfflineDataYesterday();
            }
            else if (this.datepicker == "driedagengeleden") {
                this.getOfflineData3DaysAgo();
            }
        }
    };
    // Alert of je de artikel wilt hiden
    TechPage.prototype.showConfirmHide = function (postId) {
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
    // Als netwerk online is of offline is
    TechPage.prototype.ionViewWillEnter = function () {
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
            // Get offline data
            if (this.datepicker == "vandaag") {
                this.getOfflineDataToday();
            }
            else if (this.datepicker == "gisteren") {
                this.getOfflineDataYesterday();
            }
            else if (this.datepicker == "driedagengeleden") {
                this.getOfflineData3DaysAgo();
            }
        }
    };
    // Custom Spinner loader
    TechPage.prototype.presentLoadingCustom = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<div class=\"custom-spinner-container\"><img src=\"../assets/svg/spinner/tail-spin.svg\"><br> <p>Laden...</p>\n     </div>",
            duration: 610
        });
        loading.present();
    };
    // Laad data pas zodra je bent ingelogt
    TechPage.prototype.loadData = function () {
        localStorage.getItem(this.key);
        if (this.key != null && this.key != undefined) {
            this.items = JSON.parse(this.key);
        }
    };
    //
    TechPage.prototype.htmlToPlaintext = function (text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
    // Redirect to NieuwsPage
    TechPage.prototype.viewEntry = function (param) {
        this.navCtrl.push('NieuwsPage', param);
    };
    // Doorverbinden naar de CommentsPage
    TechPage.prototype.viewComments = function (param) {
        if (this.network.type != "none") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__comments_comments__["a" /* CommentsPage */], param);
        }
        else if (this.network.type == "none") {
            var toast = this.toastCtrl.create({
                message: "Actie kon niet worden uitgevoerd, geen internet verbinding gevonden.",
                duration: 3500,
                position: "bottom"
            });
            toast.present();
        }
    };
    // Zoek functie
    TechPage.prototype.search = function (event) {
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
    TechPage.prototype.resetChanges = function () {
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
            else if (this.datepicker == "HetWeer") {
                this.isSearchbaropened = false;
            }
        }
        else {
            this.items = this.artikelen;
            this.isSearchbaropened = false;
        }
    };
    // Zodra de pagina is geladen
    TechPage.prototype.ionViewDidLoad = function () {
        this.menuCtrl.enable(true, 'myMenu');
        if (this.network.type != "none") {
            this.setOfflineToday();
            this.setOfflineYesterday();
            this.setOffline3DaysAgo();
        }
    };
    // Segment Alle nieuws van Vandaag
    TechPage.prototype.load = function () {
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
            .post('http://gazoh.net/getdatatech.php', data, options)
            .subscribe(function (data) {
            _this.items = data;
            _this.artikelen = data;
            console.log("Offline data set in storage: offlineDataToday");
            _this.items.sort(function (a, b) {
                var dateA = new Date(a.datum.replace(' ', 'T'));
                var dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: "De pagina die u wilt bekijken kan niet worden weergegeven, bekijk uw internetverbinding",
                duration: 3500,
                position: "top"
            });
            toast.present();
            console.log("Http error is: " + error);
        });
    };
    TechPage.prototype.loadWithSpinner = function () {
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
            .post('http://gazoh.net/getdatatech.php', data, options)
            .subscribe(function (data) {
            _this.items = data;
            _this.artikelen = data;
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                duration: 3500,
                position: "top"
            });
            toast.present();
            console.log("Http error is: " + error);
        });
        this.presentLoadingCustom();
    };
    // Segment Alle nieuws van Gisteren
    TechPage.prototype.loadYesterday = function () {
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
            .post('http://gazoh.net/getdatatechyesterday.php', data, options)
            .subscribe(function (data) {
            _this.items = data;
            _this.artikelen = data;
            _this.items.sort(function (a, b) {
                var dateA = new Date(a.datum.replace(' ', 'T'));
                var dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                duration: 3500,
                position: "top"
            });
            toast.present();
            console.log("Http error is: " + error);
        });
        this.presentLoadingCustom();
    };
    // Segment Alle nieuws van Gisteren
    TechPage.prototype.load3DaysAgo = function () {
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
            .post('http://gazoh.net/getdatatech3daysago.php', data, options)
            .subscribe(function (data) {
            _this.items = data;
            _this.artikelen = data;
            console.log("Offline data set in storage: offlineData3DaysAgo");
            _this.storage.set("offlineData3DaysAgo", data);
            _this.items.sort(function (a, b) {
                var dateA = new Date(a.datum.replace(' ', 'T'));
                var dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                duration: 3500,
                position: "top"
            });
            toast.present();
            console.log("Http error is: " + error);
        });
        this.presentLoadingCustom();
    };
    // De pull to refresh
    TechPage.prototype.doRefresh = function (refresher) {
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
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    TechPage.prototype.setLike = function (articleId) {
        var _this = this;
        if (this.network.type != "none") {
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
                if (data == "liked")
                    setTimeout(function () {
                        _this.disabled = false;
                    }, _this.TIMER_IN_MS);
                {
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
        else if (this.network.type == "none") {
            var toast = this.toastCtrl.create({
                message: "Actie kon niet worden uitgevoerd, geen internet verbinding gevonden.",
                duration: 3500,
                position: "bottom"
            });
            toast.present();
            if (this.network.type == "none") {
                this.disabled = true;
            }
            else {
                this.disabled = false;
            }
        }
    };
    TechPage.prototype.shareInfo = function (articleTitle, articleImage, articleLink) {
        this.socialSharing.share('Bekijk "' + articleTitle + '" via de Newsage app', "NewsAge", articleImage, articleLink);
    };
    TechPage.prototype.dislike = function (articleId, articleTitle) {
        var _this = this;
        if (this.network.type != "none") {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options_1 = { headers: headers };
            var data_1 = {
                articleId: articleId,
                userId: this.userId
            };
            var alert_1 = this.alertCtrl.create({
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
                            _this.http.post('http://gazoh.net/unlike.php', data_1, options_1)
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
            alert_1.present();
        }
        else if (this.network.type == "none") {
            var toast = this.toastCtrl.create({
                message: "Actie kon niet worden uitgevoerd, geen internet verbinding gevonden.",
                duration: 3500,
                position: "bottom"
            });
            toast.present();
        }
    };
    TechPage.prototype.setHideArticle = function (postId) {
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
                    position: "bottom",
                    showCloseButton: true,
                    closeButtonText: "OK"
                });
                toast.present();
            }
        });
    };
    TechPage.prototype.getOfflineDataToday = function () {
        var _this = this;
        this.storage.get("offlineDataTechVandaag").then(function (data) {
            _this.items = data;
            _this.artikelen = data;
            _this.items.sort(function (a, b) {
                var dateA = new Date(a.datum.replace(' ', 'T'));
                var dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        });
    };
    TechPage.prototype.getOfflineDataYesterday = function () {
        var _this = this;
        this.storage.get("offlineDataTechGisteren").then(function (data) {
            _this.items = data;
            _this.artikelen = data;
            _this.items.sort(function (a, b) {
                var dateA = new Date(a.datum.replace(' ', 'T'));
                var dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        });
    };
    TechPage.prototype.getOfflineData3DaysAgo = function () {
        var _this = this;
        this.storage.get("offlineDataTech3DagenGeleden").then(function (data) {
            _this.items = data;
            _this.artikelen = data;
            _this.items.sort(function (a, b) {
                var dateA = new Date(a.datum.replace(' ', 'T'));
                var dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        });
    };
    TechPage.prototype.goLijstWeerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__lijstweer_lijstweer__["a" /* LijstweerPage */]);
    };
    TechPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            _this.slice += 5;
            infiniteScroll.complete();
        }, 200);
    };
    TechPage.prototype.setOfflineToday = function () {
        var _this = this;
        if (this.network.type != "none") {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = { headers: headers };
            var data = {
                userId: localStorage.getItem('userId')
            };
            this.http
                .post('http://gazoh.net/getdatatech.php', data, options)
                .subscribe(function (data) {
                _this.storage.set("offlineDataTechVandaag", data);
                console.log("Offline data set in storage: offlineDataTechVandaag");
            }, function (error) {
                var toast = _this.toastCtrl.create({
                    message: "De pagina die u wilt bekijken kan niet worden weergegeven, bekijk uw internetverbinding",
                    duration: 3500,
                    position: "top"
                });
                toast.present();
                console.log("Http error is: " + error);
            });
        }
    };
    TechPage.prototype.setOfflineYesterday = function () {
        var _this = this;
        if (this.network.type != "none") {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = { headers: headers };
            var data = {
                userId: localStorage.getItem('userId')
            };
            this.http
                .post('http://gazoh.net/getdatatechyesterday.php', data, options)
                .subscribe(function (data) {
                _this.storage.set("offlineDataTechGisteren", data);
                console.log("Offline data set in storage: offlineDataTechGisteren");
            }, function (error) {
                var toast = _this.toastCtrl.create({
                    message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                    duration: 3500,
                    position: "top"
                });
                toast.present();
                console.log("Http error is: " + error);
            });
        }
    };
    TechPage.prototype.setOffline3DaysAgo = function () {
        var _this = this;
        if (this.network.type != "none") {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = { headers: headers };
            var data = {
                userId: localStorage.getItem('userId')
            };
            this.http
                .post('http://gazoh.net/getdatatech3daysago.php', data, options)
                .subscribe(function (data) {
                _this.storage.set("offlineDataTech3DagenGeleden", data);
                console.log("Offline data set in storage: offlineDataTech3DagenGeleden");
            }, function (error) {
                var toast = _this.toastCtrl.create({
                    message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                    duration: 3500,
                    position: "top"
                });
                toast.present();
                console.log("Http error is: " + error);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Searchbar */])
    ], TechPage.prototype, "searchbar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], TechPage.prototype, "content", void 0);
    TechPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tech',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\tech\tech.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle *ngIf="!isSearchbaropened">\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title *ngIf="!isSearchbaropened" class="algemeenText">Tech</ion-title>\n\n        <!-- Searchbar  -->\n\n        <ion-searchbar #searchbar *ngIf="isSearchbaropened" [showCancelButton]="true" (ionCancel)="resetChanges()"\n\n                       (ionInput)="search($event)" placeholder="Waar zijn we naar op zoek?"\n\n                       class="slideInRight"></ion-searchbar>\n\n        <!-- Searchbar icon -->\n\n        <ion-buttons end\n\n                     *ngIf="this.datepicker == \'vandaag\' || this.datepicker == \'gisteren\' || this.datepicker == \'driedagengeleden\'">\n\n            <button ion-button icon-only (click)="isSearchbaropened=true">\n\n                <ion-icon name="search" *ngIf="!isSearchbaropened"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-buttons end *ngIf="this.datepicker == \'HetWeer\'">\n\n            <button ion-button icon-only (click)="goLijstWeerPage()">\n\n                <ion-icon name="search"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-buttons end *ngIf="!isSearchbaropened" class="moreFeed">\n\n            <ion-icon class="calenderIcon" name="calendar"></ion-icon>\n\n            <ion-list class="listMore">\n\n                <ion-select #newSelect [(ngModel)]="datepicker" (ionChange)="onChange(datepicker)"\n\n                            [selectOptions]="selectOptions" cancelText="Annuleer" okText="Ok" class="SelectMore">\n\n                    <ion-option value="vandaag">Vandaag</ion-option>\n\n                    <ion-option value="gisteren">Gisteren</ion-option>\n\n                    <ion-option value="driedagengeleden">Drie dagen geleden</ion-option>\n\n                    <!--<ion-option value="HetWeer">Het weer</ion-option>-->\n\n                </ion-select>\n\n            </ion-list>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <!-- Swipe up refresher  -->\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Sleep omlaag om te verversen"></ion-refresher-content>\n\n    </ion-refresher>\n\n    <!-- Grid -->\n\n    <ion-grid class="feedGrid">\n\n        <ion-col>\n\n            <ion-row>\n\n                <ion-card *ngFor="let item of (items ? items.slice(0,slice): [])" col-md-6 class="ionCard">\n\n                    <!-- Images van nieuwsfeed -->\n\n                    <div class="ion-card-image-wrapper" (tap)="viewEntry({ record: item })">\n\n                        <img class="fullHeight" src="../assets/imgs/NOS.png" *ngIf="item.site == \'NOS\' && network.type == \'none\'">\n\n                        <img class="fullHeight" src="../assets/imgs/NUNL.png" *ngIf="item.site == \'NU.nl\' && network.type == \'none\'">\n\n                        <img class="fullHeight" src="../assets/imgs/tweakers.png" *ngIf="item.site == \'Tweakers\'">\n\n                        <img class="fullHeight" src="../assets/imgs/telegraaf.png" *ngIf="item.site == \'De Telegraaf\' && network.type == \'none\'">\n\n                        <img class="fullHeight" src="../assets/imgs/KNVB.png" *ngIf="item.site == \'KNVB\' && network.type == \'none\'">\n\n                        <img class="fullHeight" [src]="item.image" *ngIf="item.site == \'NOS\' || item.site == \'De Telegraaf\' || item.site == \'NU.nl\' || item.site == \'KNVB\' && network.type != \'none\'">\n\n                        <img *ngIf="!item.image" src="../assets/imgs/noimage.jpg">\n\n                    </div>\n\n                    <ion-card-content class="cardContentFeed">\n\n                        <!-- Avatar -->\n\n                        <div id="AvatarFeed" (tap)="viewEntry({ record: item })">\n\n                            <ion-avatar *ngIf="item.site == \'NOS\' && currentTheme == \'light-theme\'" class="avatarNOS" item-start>\n\n                                <img src="../assets/svg/NOS_logo.svg" class="avatar-feed"/>\n\n                            </ion-avatar>\n\n                            <ion-avatar *ngIf="item.site == \'NOS\' && currentTheme == \'dark-theme\'" class="avatarNOS" item-start>\n\n                                <img src="../assets/svg/NOS_logo_Wit.svg" class="avatar-feed"/>\n\n                            </ion-avatar>\n\n                            <ion-avatar *ngIf="item.site == \'De Telegraaf\' && currentTheme == \'light-theme\'" class="avatarTelegraaf" item-start>\n\n                                <img src="../assets/svg/Telegraaf.svg" class="avatar-feedTelegraaf"/>\n\n                            </ion-avatar>\n\n                            <ion-avatar *ngIf="item.site == \'De Telegraaf\' && currentTheme == \'dark-theme\'" class="avatarTelegraaf" item-start>\n\n                                <img src="../assets/svg/Telegraaf_Wit.svg" class="avatar-feedTelegraaf"/>\n\n                            </ion-avatar>\n\n                            <ion-avatar *ngIf="item.site == \'NU.nl\'" class="avatar" item-start>\n\n                                <img src="../assets/svg/nu.nl.svg" class="avatar-feed"/>\n\n                            </ion-avatar>\n\n                            <ion-avatar *ngIf="item.site == \'Tweakers\'" class="avatar" item-start>\n\n                                <img src="../assets/svg/Tweakers.svg" class="avatar-feed"/>\n\n                            </ion-avatar>\n\n                            <ion-avatar *ngIf="item.site == \'KNVB\'" class="avatar" item-start>\n\n                                <img src="../assets/svg/knvb.svg" class="avatar-feed"/>\n\n                            </ion-avatar>\n\n                            <div class="uitgeverFeed" *ngIf="item.site == \'De Telegraaf\'">{{item.site}}</div>\n\n                            <div class="uitgeverFeedNU" *ngIf="item.site == \'NU.nl\'">{{item.site}}</div>\n\n                            <div class="uitgeverFeedNU" *ngIf="item.site == \'Tweakers\'">{{item.site}}</div>\n\n                            <div class="uitgeverFeedNU" *ngIf="item.site == \'KNVB\'">{{item.site}}</div>\n\n                        </div>\n\n                        <!-- Uitgever -->\n\n                        <div id="uitgeverFeed" (tap)="viewEntry({ record: item })">\n\n                            <!-- Title  -->\n\n                            <div id="title">\n\n                                <ion-card-title *ngIf="item.site == \'De Telegraaf\' || item.site == \'NU.nl\'"><strong class="cardTitle">{{item.title}}</strong></ion-card-title>\n\n                                <ion-card-title *ngIf="item.site == \'NOS\'" id="ionCardNOS"><strong class="cardTitleNOS">{{item.title}}</strong></ion-card-title>\n\n                                <ion-card-title *ngIf="item.site == \'Tweakers\'"><strong class="cardTitleNOS">{{item.title}}</strong></ion-card-title>\n\n                                <ion-card-title *ngIf="item.site == \'KNVB\'"><strong class="cardTitleNOS">{{item.title}}</strong></ion-card-title>\n\n\n\n                            </div>\n\n                            <!-- description  -->\n\n                            <div id="description">\n\n                                <p class="descriptionFeed">{{htmlToPlaintext(item.description) |\n\n                                    slice:0:120}}...</p>\n\n                            </div>\n\n                            <!-- Datum -->\n\n                            <div id="datumFeed" class="datumFeed">\n\n                                <span>{{item.datum}}</span>\n\n                            </div>\n\n                        </div>\n\n                        <!-- Social Buttons - Comments - likes - Share -->\n\n                        <div id="socialLikeComments" class="socialLikeComments">\n\n                            <!---->\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'De Telegraaf\' && rol == 1"\n\n                                    class="socialTelegraafShare" (click)="showConfirmHide(item.id)">\n\n                                <ion-icon name="trash"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'NOS\' && rol == 1"\n\n                                    class="socialNOSShare" (click)="showConfirmHide(item.id)">\n\n                                <ion-icon name="trash"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'NU.nl\' && rol == 1"\n\n                                    class="socialNuShare" (click)="showConfirmHide(item.id)">\n\n                                <ion-icon name="trash"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'Tweakers\' && rol == 1"\n\n                                    class="socialTweakersShare" (click)="showConfirmHide(item.id)">\n\n                                <ion-icon name="trash"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'KNVB\' && rol == 1"\n\n                                    class="KNVBshare" (click)="showConfirmHide(item.id)">\n\n                                <ion-icon name="trash"></ion-icon>\n\n                            </button>\n\n                            <!---->\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'De Telegraaf\'"\n\n                                    class="socialTelegraafShare"\n\n                                    (click)="shareInfo(item.title, item.image, item.link)">\n\n                                <ion-icon name="share-alt"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'NOS\'" class="socialNOSShare"\n\n                                    (click)="shareInfo(item.title, item.image, item.link)">\n\n                                <ion-icon name="share-alt"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'NU.nl\'" class="socialNuShare"\n\n                                    (click)="shareInfo(item.title, item.image, item.link)">\n\n                                <ion-icon name="share-alt"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'Tweakers\'" class="socialTweakersShare"\n\n                                    (click)="shareInfo(item.title, item.image, item.link)">\n\n                                <ion-icon name="share-alt"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'KNVB\'" class="socialKNVBshare"\n\n                                    (click)="shareInfo(item.title, item.image, item.link)">\n\n                                <ion-icon name="share-alt"></ion-icon>\n\n                            </button>\n\n                            <!---->\n\n                            <button class="socialTelegraaf" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'De Telegraaf\' && item.liked == 0" [disabled]="disabled"\n\n                                    (click)="setLike(item.id)">\n\n                                <ion-icon name="heart-outline" class="likeTelegraaf"></ion-icon>\n\n                                <div class="darkChatComment">{{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialNOS" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'NOS\' && item.liked == 0" [disabled]="disabled"\n\n                                    (click)="setLike(item.id)">\n\n                                <ion-icon name="heart-outline" class="likeNOS"></ion-icon>\n\n                                <div class="darkChatComment"> {{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialNu" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'NU.nl\' && item.liked == 0" [disabled]="disabled"\n\n                                    (click)="setLike(item.id)">\n\n                                <ion-icon name="heart-outline" class="likeNu"></ion-icon>\n\n                                <div class="darkChatComment">{{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialTweakers" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'Tweakers\' && item.liked == 0" [disabled]="disabled"\n\n                                    (click)="setLike(item.id)">\n\n                                <ion-icon name="heart-outline" class="likeTweakers"></ion-icon>\n\n                                <div class="darkChatComment">{{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialKnvb" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'KNVB\' && item.liked == 0" [disabled]="disabled"\n\n                                    (click)="setLike(item.id)">\n\n                                <ion-icon name="heart-outline" class="likeKNVB"></ion-icon>\n\n                                <div class="darkChatComment">{{item.likes}}</div>\n\n                            </button>\n\n                            <!---->\n\n                            <button class="socialTelegraaf" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'De Telegraaf\' && item.liked == 1"\n\n                                    (click)="dislike(item.id, item.title)">\n\n                                <ion-icon name="heart" class="likeTelegraaf"></ion-icon>\n\n                                <div class="darkChatComment">{{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialNOS" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'NOS\' && item.liked == 1"\n\n                                    (click)="dislike(item.id, item.title)">\n\n                                <ion-icon name="heart" class="likeNOS"></ion-icon>\n\n                                <div class="darkChatComment">{{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialNu" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'NU.nl\' && item.liked == 1"\n\n                                    (click)="dislike(item.id, item.title)">\n\n                                <ion-icon name="heart" class="likeNu"></ion-icon>\n\n                                <div class="darkChatComment">{{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialTweakers" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'Tweakers\' && item.liked == 1"\n\n                                    (click)="dislike(item.id, item.title)">\n\n                                <ion-icon name="heart" class="likeTweakers"></ion-icon>\n\n                                <div class="darkChatComment">{{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialKnvb" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'KNVB\' && item.liked == 1"\n\n                                    (click)="dislike(item.id, item.title)">\n\n                                <ion-icon name="heart" class="likeKNVB"></ion-icon>\n\n                                <div class="darkChatComment">{{item.likes}}</div>\n\n                            </button>\n\n                            <!---->\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'De Telegraaf\'"\n\n                                    class="socialTelegraaf" (click)="viewComments({ record: item })">\n\n                                <ion-icon name="chatbubbles" class="darkChatTelegraaf"></ion-icon>\n\n                                <div class="darkChatComment">{{item.comments}}</div>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'NOS\'" class="socialNOS"\n\n                                    (click)="viewComments({ record: item })">\n\n                                <ion-icon name="chatbubbles" class="darkChatNOS"></ion-icon>\n\n                                <div class="darkChatComment">{{item.comments}}</div>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'NU.nl\'" class="socialNu"\n\n                                    (click)="viewComments({ record: item })">\n\n                                <ion-icon name="chatbubbles" class="darkChatNU"></ion-icon>\n\n                                <div class="darkChatComment">{{item.comments}}</div>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'Tweakers\'" class="socialTweakers"\n\n                                    (click)="viewComments({ record: item })">\n\n                                <ion-icon name="chatbubbles" class="darkChatTweakers"></ion-icon>\n\n                                <div class="darkChatComment">{{item.comments}}</div>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'KNVB\'" class="socialKnvb"\n\n                                    (click)="viewComments({ record: item })">\n\n                                <ion-icon name="chatbubbles" class="darkChatKnvb"></ion-icon>\n\n                                <div class="darkChatComment">{{item.comments}}</div>\n\n                            </button>\n\n                            <!---->\n\n                        </div>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ion-row>\n\n            <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n                <ion-infinite-scroll-content\n\n                        loadingSpinner="bubbles"\n\n                        loadingText="Meer artikelen inladen...">\n\n                </ion-infinite-scroll-content>\n\n            </ion-infinite-scroll>\n\n        </ion-col>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\tech\tech.html"*/,
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
            __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__["a" /* File */]])
    ], TechPage);
    return TechPage;
}());

//# sourceMappingURL=tech.js.map

/***/ }),

/***/ 185:
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
webpackEmptyAsyncContext.id = 185;

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin/admin.module": [
		230
	],
	"../pages/comments/comments.module": [
		233
	],
	"../pages/economie/economie.module": [
		330
	],
	"../pages/feed/feed.module": [
		331
	],
	"../pages/lifestyle/lifestyle.module": [
		332
	],
	"../pages/lijstweer/lijstweer.module": [
		723,
		0
	],
	"../pages/nieuws/nieuws.module": [
		333
	],
	"../pages/privacybeleid/privacybeleid.module": [
		335
	],
	"../pages/profiel/profiel.module": [
		339
	],
	"../pages/register/register.module": [
		340
	],
	"../pages/settings/settings.module": [
		341
	],
	"../pages/sources/sources.module": [
		342
	],
	"../pages/sport/sport.module": [
		343
	],
	"../pages/tech/tech.module": [
		344
	],
	"../pages/tutorial/tutorial.module": [
		345
	],
	"../pages/vermaak/vermaak.module": [
		346
	],
	"../pages/wijzigwachtwoord/wijzigwachtwoord.module": [
		348
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
webpackAsyncContext.id = 229;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageModule", function() { return AdminPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin__ = __webpack_require__(130);
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

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsPageModule", function() { return CommentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comments__ = __webpack_require__(36);
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

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(44);
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
            username: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9]([._](?![._])|[a-zA-Z0-9]){1,18}[a-zA-Z0-9]$') /*, Validators.minLength(3)*/]),
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
                    else if (res == "username exists") {
                        var alert_2 = _this.alertCtrl.create({
                            title: "Registreren mislukt",
                            subTitle: "Er bestaat al een gebruiker met het zelfde gebruikersnaam!",
                            buttons: ['OK']
                        });
                        alert_2.present();
                    }
                    else if (res == "email exists") {
                        var alert_3 = _this.alertCtrl.create({
                            title: "Registreren mislukt",
                            subTitle: "Er bestaat al een gebruiker met het zelfde email adres!",
                            buttons: ['OK']
                        });
                        alert_3.present();
                    }
                    else {
                        var alert_4 = _this.alertCtrl.create({
                            title: "Mislukt",
                            subTitle: "Er is iets mis gegaan tijdens het registeren probeert u het opnieuw.",
                            buttons: ['OK']
                        });
                        alert_4.present();
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
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\register\register.html"*/'<ion-content>\n\n  <ion-grid style="height: 100%" class="inlogGrid">\n\n    <ion-navbar></ion-navbar>\n\n    <ion-row justify-content-center align-items-center style="height: 100%">\n\n      <ion-col col-12>\n\n        <img class="validatieImage" src="../../assets/imgs/newsAgeZonderText.png"/>\n\n        <div class="ValidatieLogin">\n\n          <form novalidate [formGroup]="form">\n\n            <div class="form-group">\n\n              <ion-item [ngClass]="{ \'ng-touched\' : form.get(\'username\').touched }">\n\n                <ion-label floating class="labelRegistreer">Gebruikersnaam</ion-label>\n\n                <ion-input type="text" formControlName="username" class="form-control" [(ngModel)]="username"></ion-input>\n\n              </ion-item>\n\n            </div>\n\n            <div *ngIf="form.get(\'username\').touched && form.get(\'username\').invalid" class="alert alert-danger" required>\n\n              <div class="validatieText" *ngIf="form.get(\'username\').hasError(\'required\')">Naam moet ingevuld zijn</div>\n\n              <div class="validatieText" *ngIf="form.get(\'username\').hasError(\'pattern\')">Ongeldige naam</div>\n\n            </div>\n\n            <div class="form-group">\n\n              <ion-item [ngClass]="{ \'ng-touched\' : form.get(\'email\').touched }">\n\n                <ion-label floating class="labelRegistreer">E-mail</ion-label>\n\n                <ion-input type="email" formControlName="email" class="form-control" [(ngModel)]="email"></ion-input>\n\n              </ion-item>\n\n            </div>\n\n            <div *ngIf="form.get(\'email\').touched && form.get(\'email\').invalid" class="alert alert-danger" required>\n\n              <div class="validatieText" *ngIf="form.get(\'email\').hasError(\'required\')">Email moet ingevuld zijn</div>\n\n              <div class="validatieText" *ngIf="form.get(\'email\').hasError(\'pattern\')">Ongeldige Email!</div>\n\n            </div>\n\n            <div class="form-group">\n\n              <ion-item [ngClass]="{ \'ng-touched\' : form.get(\'password\').touched }">\n\n                <ion-label floating class="labelRegistreer">Wachtwoord</ion-label>\n\n                <ion-input type="password" formControlName="password" class="form-control" [(ngModel)]="password"></ion-input>\n\n              </ion-item>\n\n            </div>\n\n            <div class="alert alert-danger" *ngIf="form.get(\'password\').touched && form.get(\'password\').invalid ">\n\n              <div class="validatieText" *ngIf="form.get(\'password\').hasError(\'required\')">Wachtwoord moet ingevuld zijn</div>\n\n              <div class="validatieText" *ngIf="form.get(\'password\').hasError(\'minLength\')">Wachtwoord moet minimaal 8 tekens lang zijn</div>\n\n              <div class="validatieText" *ngIf="form.get(\'password\').hasError(\'pattern\')">Wachtwoord moet minstens een hoofdletter, een kleine letter en een cijfer bevatten</div>\n\n            </div>\n\n          </form>\n\n          <br>\n\n          <div class="Validatie2Login">\n\n            <button ion-button round class="registeerButton" (click)="onSubmit()"><span class="loginButtonText">Registreer</span></button>\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\register\register.html"*/,
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

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EconomiePageModule", function() { return EconomiePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__economie__ = __webpack_require__(148);
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

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function() { return FeedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed__ = __webpack_require__(54);
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

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifestylePageModule", function() { return LifestylePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lifestyle__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LifestylePageModule = /** @class */ (function () {
    function LifestylePageModule() {
    }
    LifestylePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lifestyle__["a" /* LifestylePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lifestyle__["a" /* LifestylePage */]),
            ],
        })
    ], LifestylePageModule);
    return LifestylePageModule;
}());

//# sourceMappingURL=lifestyle.module.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NieuwsPageModule", function() { return NieuwsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nieuws__ = __webpack_require__(702);
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

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacybeleidPageModule", function() { return PrivacybeleidPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__privacybeleid__ = __webpack_require__(336);
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

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacybeleidPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(78);
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
            selector: 'page-privacybeleid',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\privacybeleid\privacybeleid.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title class="privacyBeleid">Privacy beleid</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <p class="PrivacyBeleidP">Axa Studios heeft de NewsAge-app gebouwd als een advertentie-ondersteunde app. Deze SERVICE wordt gratis door Axa\n\n        Studios geleverd en is bedoeld voor gebruik zoals het hoort.\n\n        Deze pagina wordt gebruikt om bezoekers te informeren over ons beleid met betrekking tot het verzamelen,\n\n        gebruiken en vrijgeven van persoonlijke informatie als iemand beslist om onze service te gebruiken.\n\n        Als u ervoor kiest om onze Service te gebruiken, stemt u in met het verzamelen en gebruiken van informatie in\n\n        verband met dit beleid. De persoonlijke informatie die we verzamelen, wordt gebruikt voor het leveren en\n\n        verbeteren van de service. We zullen uw informatie niet gebruiken of delen met iemand anders dan zoals\n\n        beschreven in dit privacybeleid.\n\n        De termen die in dit Privacybeleid worden gebruikt, hebben dezelfde betekenis als in onze Algemene voorwaarden,\n\n        die toegankelijk is via NewsAge, tenzij anders gedefinieerd in dit Privacybeleid.\n\n        Informatie verzamelen en gebruiken\n\n        Voor een betere ervaring tijdens het gebruik van onze service, kunnen we van u verlangen dat u ons bepaalde\n\n        persoonlijk identificeerbare informatie verstrekt. De door ons gevraagde informatie wordt door ons bewaard en\n\n        gebruikt zoals beschreven in dit privacybeleid.\n\n        De app maakt gebruik van services van derden die mogelijk informatie verzamelen die wordt gebruikt om u te\n\n        identificeren.\n\n        Link naar het privacybeleid van externe serviceproviders die door de app worden gebruikt\n\n        <br><br>• Google Play-services</p>\n\n    <h3 class="voorwaardenH3">Loggegevens</h3>\n\n    <p class="PrivacyBeleidP">\n\n        We willen u laten weten dat wanneer u onze Service gebruikt, we in geval van een fout in de app gegevens en\n\n        informatie (via producten van derden) op uw telefoon verzamelen, genaamd Loggegevens. Deze loggegevens kunnen\n\n        informatie bevatten zoals het IP-adres (device protocol), de apparaatnaam, de versie van het besturingssysteem,\n\n        de configuratie van de app bij het gebruik van onze service, het tijdstip en de datum van uw gebruik van de\n\n        service en andere statistieken. </p>\n\n    <h3 class="voorwaardenH3"> Cookies</h3>\n\n    <p class="PrivacyBeleidP">\n\n        Cookies zijn bestanden met een kleine hoeveelheid gegevens die vaak worden gebruikt als anonieme unieke ID\'s.\n\n        Deze worden naar uw browser verzonden vanaf de websites die u bezoekt en worden opgeslagen op het interne\n\n        geheugen van uw apparaat.\n\n        Deze Service gebruikt deze "cookies" niet expliciet. De app kan echter code van derden en bibliotheken gebruiken\n\n        die \'cookies\' gebruiken om informatie te verzamelen en hun services te verbeteren. U hebt de mogelijkheid deze\n\n        cookies te accepteren of te weigeren en te weten wanneer een cookie naar uw apparaat wordt verzonden. Als u\n\n        ervoor kiest om onze cookies te weigeren, kunt u sommige delen van deze service mogelijk niet gebruiken.\n\n    </p>\n\n    <h3 class="voorwaardenH3">Dienstverleners</h3>\n\n    <p class="PrivacyBeleidP">\n\n        Om de volgende redenen kunnen we bedrijven en personen van derden in dienst nemen:<br>\n\n        • Om onze service te vergemakkelijken;<br>\n\n        • Om de Service namens ons te leveren;<br>\n\n        • Servicegerelateerde services uitvoeren; of<br>\n\n        • Om ons te helpen bij het analyseren van hoe onze Service wordt gebruikt.<br>\n\n        We willen gebruikers van deze Service informeren dat deze derden toegang hebben tot uw Persoonlijke Informatie.\n\n        De reden is om namens ons de taken uit te voeren die aan hen zijn toegewezen. Ze zijn echter verplicht om de\n\n        informatie voor geen enkel ander doel openbaar te maken of te gebruiken.\n\n        Veiligheid<br>\n\n        We waarderen uw vertrouwen in het verstrekken van uw persoonlijke gegevens, dus we streven ernaar om commercieel\n\n        aanvaardbare middelen te gebruiken om deze te beschermen. Maar vergeet niet dat geen enkele verzendmethode via\n\n        internet of elektronische opslag 100% veilig en betrouwbaar is en we kunnen de absolute veiligheid ervan niet\n\n        garanderen.</p>\n\n    <h3 class="voorwaardenH3">Links naar andere sites</h3>\n\n    <p class="PrivacyBeleidP">\n\n        Deze Service kan links naar andere sites bevatten. Als u op een link van derden klikt, wordt u naar die site\n\n        geleid. Merk op dat deze externe sites niet door ons worden beheerd. Daarom raden wij u ten zeerste aan om het\n\n        Privacybeleid van deze websites te bekijken. We hebben geen controle over en nemen geen verantwoordelijkheid\n\n        voor de inhoud, het privacybeleid of de praktijken van sites of services van derden.\n\n        Privacy van kinderen<br>\n\n        Deze Services richten zich niet tot iemand onder de leeftijd van 13. We verzamelen niet bewust persoonlijk\n\n        identificeerbare informatie van kinderen onder de 13. Als we ontdekken dat een kind jonger dan 13 jaar ons\n\n        persoonlijke informatie heeft verstrekt, verwijderen we dit onmiddellijk van onze servers. Als u een ouder of\n\n        voogd bent en u weet dat uw kind ons persoonlijke informatie heeft verstrekt, neem dan contact met ons op zodat\n\n        we de nodige acties kunnen ondernemen.</p>\n\n    <h3 class="voorwaardenH3">Wijzigingen in dit privacybeleid</h3>\n\n    <p class="PrivacyBeleidP">\n\n        We kunnen ons privacybeleid van tijd tot tijd bijwerken. Daarom wordt u geadviseerd deze pagina regelmatig te\n\n        controleren op eventuele wijzigingen. We zullen u op de hoogte brengen van eventuele wijzigingen door het nieuwe\n\n        Privacybeleid op deze pagina te plaatsen. Deze wijzigingen zijn van kracht onmiddellijk nadat ze op deze pagina\n\n        zijn geplaatst.\n\n        Neem contact met ons op\n\n        Als u vragen of suggesties heeft over ons privacybeleid, aarzel dan niet om contact met ons op te nemen.</p>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\privacybeleid\privacybeleid.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], PrivacybeleidPage);
    return PrivacybeleidPage;
}());

//# sourceMappingURL=privacybeleid.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfielPageModule", function() { return ProfielPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profiel__ = __webpack_require__(97);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(237);
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

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(78);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourcesPageModule", function() { return SourcesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sources__ = __webpack_require__(151);
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

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportPageModule", function() { return SportPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sport__ = __webpack_require__(152);
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

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechPageModule", function() { return TechPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tech__ = __webpack_require__(153);
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

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial__ = __webpack_require__(136);
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

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VermaakPageModule", function() { return VermaakPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vermaak__ = __webpack_require__(347);
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

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VermaakPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
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
            selector: 'page-vermaak',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\vermaak\vermaak.html"*/'<ion-header no-border-bottom>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle right class="fakeCenter">\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n      <ion-title>Entertainment</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\vermaak\vermaak.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], VermaakPage);
    return VermaakPage;
}());

//# sourceMappingURL=vermaak.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WijzigwachtwoordPageModule", function() { return WijzigwachtwoordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wijzigwachtwoord__ = __webpack_require__(150);
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

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feed_feed__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(135);
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
    function CommentsPage(navCtrl, navParams, http, alertCtrl, events, keyboard, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.keyboard = keyboard;
        this.platform = platform;
        this.comments = [];
        this.platform.ready().then(function () {
            keyboard.disableScroll(true);
        });
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
        this.content.scrollToBottom(200);
    };
    // Runs when the page is about to enter and become the active page.
    CommentsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () { return _this.myInput.setFocus(); }, 200);
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
            selector: 'page-comments',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\comments\comments.html"*/'<ion-header no-border-bottom>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle right class="fakeCenter">\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title class="fakePadding">Comments</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-list *ngFor="let comment of comments; let last = last" class="commentSpacing">\n\n        <ion-item-sliding>\n\n            <ion-item>\n\n                {{last ? callFunction() : \'\'}}\n\n                <ion-avatar class="avatar" item-start>\n\n                    <img src="{{comment.profilepicture}}" class="avatar-profiel"/>\n\n                </ion-avatar>\n\n                <p class="commentUsername">{{comment.username}}<span class="commentDate">{{comment.commentDate}}</span>\n\n                </p>\n\n                <p><span class="breakText">{{comment.comment}}</span></p>\n\n            </ion-item>\n\n            <ion-item-options side="right">\n\n                <button ion-button color="danger" item-right *ngIf="userId == comment.userID || userRol == 1"\n\n                        (click)="deleteComment(comment.commentId)">\n\n                    <ion-icon name="trash"></ion-icon>\n\n                    Verwijder\n\n                </button>\n\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n    </ion-list>\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-item class="commentsItem">\n\n        <ion-avatar class="avatarComment" item-start>\n\n            <img src="{{pictureprofile}}" class="avatar-profielComment"/>\n\n        </ion-avatar>\n\n        <ion-input placeholder="Reageer als {{this.username}}" [(ngModel)]="comment" id="inputMessage"\n\n                   #input></ion-input>\n\n        <button ion-button class="sendButton" id="sendButtonId" (click)="postComment()" item-end\n\n                [disabled]="!comment">\n\n            <ion-icon name="send"></ion-icon>\n\n        </button>\n\n    </ion-item>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\comments\comments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */]])
    ], CommentsPage);
    return CommentsPage;
}());

//# sourceMappingURL=comments.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feed_feed__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tutorial_tutorial__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_settings_settings__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__(22);
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
    function HomePage(navCtrl, loading, http, toastCtrl, menuCtrl, events, screenOrientation, platform, keyboard, storage, settings, alertCtrl) {
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
        this.storage = storage;
        this.settings = settings;
        this.alertCtrl = alertCtrl;
        this.token = Math.random().toString(36).substring(7);
        this.rootPage = HomePage_1;
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
        // -------------------------------------
        // Get Active theme dark/light
        // -------------------------------------
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
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
        if (this.form.invalid) {
            this.validateAllFormFields(this.form); //{7}
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
                    .subscribe(function (data) {
                    _this.dataUser = data;
                });
                _this.http.post('http://www.gazoh.net/login.php', data_1, options_1)
                    .subscribe(function (res) {
                    console.log(res);
                    loader_1.dismiss();
                    if (res == "Succesfully logged in!") {
                        // Localstorage Gebruikersdetails
                        localStorage.setItem("userId", _this.dataUser.id);
                        localStorage.setItem("userName", _this.dataUser.username);
                        localStorage.setItem("userEmail", _this.dataUser.email);
                        localStorage.setItem("userEmailVerified", _this.dataUser.emailVerified);
                        localStorage.setItem("userRole", _this.dataUser.rol);
                        localStorage.setItem("userCreationDate", _this.dataUser.creationdate);
                        localStorage.setItem("sessionToken", _this.token);
                        localStorage.setItem("profilePicture", _this.dataUser.profilepicture);
                        localStorage.setItem("themeColor", _this.selectedTheme);
                        console.log(_this.selectedTheme);
                        _this.storage.set('profilepicture', _this.dataUser.profilepicture);
                        _this.storage.set('username', _this.dataUser.username);
                        _this.storage.set('email', _this.dataUser.email);
                        _this.storage.set('emailverified', _this.dataUser.emailVerified);
                        _this.storage.set('rol', _this.dataUser.rol);
                        _this.storage.set('creationdate', _this.dataUser.creationdate);
                        if (localStorage.getItem("TutorialShown") != "true") {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__tutorial_tutorial__["a" /* TutorialPage */]);
                        }
                        else if (localStorage.getItem("TutorialShown") == "true") {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__feed_feed__["a" /* FeedPage */]);
                        }
                        // //Fire username event
                        _this.events.publish("username", _this.dataUser.username);
                        _this.events.publish("profilepicture", _this.dataUser.profilepicture);
                    }
                    else if (res == 'No matching password') {
                        var alert_1 = _this.alertCtrl.create({
                            title: 'Onjuiste Wachtwoord',
                            subTitle: 'Het ingevoerde wachtwoord komt niet overeen. probeer het opnieuw\'',
                            buttons: ['OK']
                        });
                        alert_1.present();
                    }
                    else if (res == null) {
                        var alert_2 = _this.alertCtrl.create({
                            title: 'Onjuiste E-mail',
                            subTitle: 'Het ingevoerde E-mailadres lijkt niet te behoren tot een account. Controleer uw E-mailadres en probeer het opnieuw\'',
                            buttons: ['OK']
                        });
                        alert_2.present();
                    }
                });
            });
        }
    };
    HomePage.prototype.ngOnInit = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_11__angular_forms__["b" /* FormGroup */]({
            password: new __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_11__angular_forms__["g" /* Validators */].required]),
            email: new __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_11__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_11__angular_forms__["g" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_11__angular_forms__["g" /* Validators */].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')])
        });
    };
    // Push terug naar home button
    HomePage.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field); //{3}
            if (control instanceof __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormControl */]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_11__angular_forms__["b" /* FormGroup */]) {
                _this.validateAllFormFields(control); //{6}
            }
        });
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\home\home.html"*/'<ion-content>\n\n    <ion-grid style="height: 100%" class="inlogGrid">\n\n        <ion-row justify-content-center align-items-center style="height: 100%">\n\n            <ion-col col-12>\n\n                <img class="validatieImage" src="../../assets/imgs/newsAgeZonderText.png"/>\n\n                <form novalidate [formGroup]="form">\n\n                    <div class="ValidatieLogin">\n\n                        <div class="form-group">\n\n                            <ion-item [ngClass]="{ \'ng-touched\' : form.get(\'email\').touched }">\n\n                                <ion-label floating class="emailLabel">E-mail</ion-label>\n\n                                <ion-input type="email" formControlName="email" class="form-control"\n\n                                           [(ngModel)]="email"></ion-input>\n\n                            </ion-item>\n\n                        </div>\n\n                        <div *ngIf="form.get(\'email\').touched && form.get(\'email\').invalid" class="alert alert-danger" required>\n\n                            <div class="validatieText" *ngIf="form.get(\'email\').hasError(\'required\')">Email moet ingevuld zijn</div>\n\n                            <div class="validatieText" *ngIf="form.get(\'email\').hasError(\'pattern\')">Ongeldige Email!</div>\n\n                        </div>\n\n                        <div class="form-group">\n\n                            <ion-item [ngClass]="{ \'ng-touched\' : form.get(\'password\').touched }">\n\n                                <ion-label floating class="wachtwoordLabel">Wachtwoord</ion-label>\n\n                                <ion-input type="password" formControlName="password" class="form-control" [(ngModel)]="password"></ion-input>\n\n                            </ion-item>\n\n                        </div>\n\n                        <div class="alert alert-danger"\n\n                             *ngIf="form.get(\'password\').touched && form.get(\'password\').invalid ">\n\n                            <div class="validatieText" *ngIf="form.get(\'password\').hasError(\'required\')">Wachtwoord moet ingevuld zijn</div>\n\n                        </div>\n\n                        <br>\n\n                        <div class="Validatie2Login">\n\n                            <button ion-button round class="loginButton" (click)="signIn()"><span class="loginButtonText">Log-in</span></button>\n\n                            <button ion-button round class="registeerButton" (click)="goRegister()"><span class="loginButtonText">Registreer</span></button>\n\n                        </div>\n\n                    </div>\n\n                </form>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_10__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_feed_feed__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_sport_sport__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_economie_economie__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tech_tech__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tutorial_tutorial__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_favorieten_favorieten__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sources_sources__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_lifestyle_lifestyle__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular__ = __webpack_require__(2);
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
                title: 'Favorieten',
                component: __WEBPACK_IMPORTED_MODULE_8__pages_favorieten_favorieten__["a" /* FavorietenPage */],
                icon: 'heart'
            },
            {
                title: 'Bronnen',
                component: __WEBPACK_IMPORTED_MODULE_9__pages_sources_sources__["a" /* SourcesPage */],
                icon: 'brush'
            },
            {
                title: 'Categorieen',
                icon: 'apps',
                subPages: [
                    {
                        title: 'Sport',
                        component: __WEBPACK_IMPORTED_MODULE_3__pages_sport_sport__["a" /* SportPage */],
                        icon: 'football'
                    },
                    {
                        title: 'Technologie',
                        component: __WEBPACK_IMPORTED_MODULE_5__pages_tech_tech__["a" /* TechPage */],
                        icon: 'desktop'
                    },
                    {
                        title: 'Financieel',
                        component: __WEBPACK_IMPORTED_MODULE_4__pages_economie_economie__["a" /* EconomiePage */],
                        icon: 'cash'
                    },
                    {
                        title: 'Lifestyle',
                        component: __WEBPACK_IMPORTED_MODULE_10__pages_lifestyle_lifestyle__["a" /* LifestylePage */],
                        icon: 'woman'
                    }
                ]
            },
            {
                title: 'Tutorial',
                component: __WEBPACK_IMPORTED_MODULE_7__pages_tutorial_tutorial__["a" /* TutorialPage */],
                icon: 'book'
            },
            {
                title: 'Instellingen',
                component: __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */],
                icon: 'settings'
            }
        ];
    };
    MenuProvider.prototype.uitloggen = function () {
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userEmailVerified');
        localStorage.removeItem('userRole');
        localStorage.removeItem('userCreationDate');
        localStorage.removeItem('sessionToken');
        localStorage.removeItem('profilePicture');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_11_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["l" /* Nav */])
    ], MenuProvider.prototype, "nav", void 0);
    MenuProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], MenuProvider);
    return MenuProvider;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavorietenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comments_comments__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(25);
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
    function FavorietenPage(navCtrl, navParams, http, toastCtrl, storage, network) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.network = network;
        // Theme
        if (localStorage.getItem("themeColor")) {
            this.currentTheme = localStorage.getItem("themeColor");
            console.log(this.currentTheme);
        }
    }
    FavorietenPage.prototype.ionViewWillEnter = function () {
        this.getFavs();
    };
    FavorietenPage.prototype.getFavs = function () {
        var _this = this;
        if (this.network.type != "none") {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = { headers: headers };
            var data = {
                userId: localStorage.getItem('userId')
            };
            this.http.post('http://www.gazoh.net/getliked.php', data, options).subscribe(function (res) {
                _this.likedarticles = res;
                _this.storage.set("offlineFavorieten", res);
                if (_this.likedarticles) {
                    _this.likedarticles.sort(function (a, b) {
                        return +new Date(b.datum) - +new Date(a.datum);
                    });
                }
                console.log(res);
            });
        }
        else if (this.network.type == "none") {
            this.storage.get("offlineFavorieten").then(function (data) {
                _this.likedarticles = data;
                console.log("Favorites received from Storage: offlineFavorieten");
            });
        }
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
        if (this.network.type != "none") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__comments_comments__["a" /* CommentsPage */], param);
        }
        else if (this.network.type == "none") {
            var toast = this.toastCtrl.create({
                message: "Actie kon niet worden uitgevoerd, geen internet verbinding gevonden.",
                duration: 3500,
                position: "bottom"
            });
            toast.present();
        }
    };
    FavorietenPage.prototype.dislike = function (articleId, articleTitle) {
        var _this = this;
        if (this.network.type != "none") {
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
        }
        else if (this.network.type == "none") {
            var toast = this.toastCtrl.create({
                message: "Actie kon niet worden uitgevoerd, geen internet verbinding gevonden.",
                duration: 3500,
                position: "bottom"
            });
            toast.present();
        }
    };
    FavorietenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorieten',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\favorieten\favorieten.html"*/'<ion-header no-border-bottom>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle right class="fakeCenter">\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Favorieten</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-grid class="feedGrid">\n\n        <ion-col class="favorietenCol">\n\n            <ion-row>\n\n                <ion-card *ngFor="let item of likedarticles" col-md-6 class="cardFavorieten">\n\n                    <!-- Images van nieuwsfeed -->\n\n                    <div class="ion-card-image-wrapper" (click)="viewEntry({ record: item })">\n\n                        <img *ngIf="!item.image" src="../assets/imgs/noimage.jpg">\n\n                        <img [src]="item.image" *ngIf="item.site == \'NOS.nl\'">\n\n                        <img [src]="item.image" *ngIf="item.site != \'NOS.nl\' || item.site != \'NU.nl\'">\n\n                    </div>\n\n                    <ion-card-content class="cardContentFeed">\n\n                        <!-- Avatar -->\n\n                        <div id="AvatarFeed" (click)="viewEntry({ record: item })">\n\n                            <ion-avatar *ngIf="item.site == \'NOS\' && currentTheme == \'light-theme\'" class="avatarNOS" item-start>\n\n                                <img src="../assets/svg/NOS_logo.svg" class="avatar-feed"/>\n\n                            </ion-avatar>\n\n                            <ion-avatar *ngIf="item.site == \'NOS\' && currentTheme == \'dark-theme\'" class="avatarNOS" item-start>\n\n                                <img src="../assets/svg/NOS_logo_Wit.svg" class="avatar-feedNOS"/>\n\n                            </ion-avatar>\n\n                            <ion-avatar *ngIf="item.site == \'De Telegraaf\' && currentTheme == \'light-theme\'" class="avatarTelegraaf" item-start>\n\n                                <img src="../assets/svg/Telegraaf.svg" class="avatar-feedTelegraaf"/>\n\n                            </ion-avatar>\n\n                            <ion-avatar *ngIf="item.site == \'De Telegraaf\' && currentTheme == \'dark-theme\'" class="avatarTelegraaf" item-start>\n\n                                <img src="../assets/svg/Telegraaf_Wit.svg" class="avatar-feedTelegraaf"/>\n\n                            </ion-avatar>\n\n                            <ion-avatar *ngIf="item.site == \'NU.nl\'" class="avatar" item-start>\n\n                                <img src="../assets/svg/nu.nl.svg" class="avatar-feed"/>\n\n                            </ion-avatar>\n\n                            <div class="uitgeverFeed" *ngIf="item.site == \'De Telegraaf\'">{{item.site}}</div>\n\n                            <div class="uitgeverFeedNU" *ngIf="item.site == \'NU.nl\'">{{item.site}}</div>\n\n                        </div>\n\n                        <!-- Uitgever -->\n\n                        <div id="uitgeverFeed" (click)="viewEntry({ record: item })">\n\n                            <!-- Title  -->\n\n                            <div id="title">\n\n                                <ion-card-title *ngIf="item.site == \'De Telegraaf\' || item.site == \'NU.nl\'"><strong class="cardTitle">{{item.title}}</strong></ion-card-title>\n\n                                <ion-card-title *ngIf="item.site == \'NOS\'" id="ionCardNOS"><strong class="cardTitleNOS">{{item.title}}</strong></ion-card-title>\n\n                            </div>\n\n                            <!-- description  -->\n\n                            <div id="description">\n\n                                <p class="descriptionFeed">{{htmlToPlaintext(item.description) |\n\n                                    slice:0:120}}...</p>\n\n                            </div>\n\n                            <!-- Datum -->\n\n                            <div id="datumFeed" class="datumFeed">\n\n                                <span>{{item.datum}}</span>\n\n                            </div>\n\n                        </div>\n\n                        <!-- Social Buttons - Comments - likes - Share -->\n\n                        <div id="socialLikeComments" class="socialLikeComments">\n\n                            <!---->\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'De Telegraaf\' && rol == 1"\n\n                                    class="socialTelegraafShare" (click)="showConfirmHide(item.id)">\n\n                                <ion-icon name="trash"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'NOS\' && rol == 1"\n\n                                    class="socialNOSShare" (click)="showConfirmHide(item.id)">\n\n                                <ion-icon name="trash"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'NU.nl\' && rol == 1"\n\n                                    class="socialNuShare" (click)="showConfirmHide(item.id)">\n\n                                <ion-icon name="trash"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'Tweakers\' && rol == 1"\n\n                                    class="socialTweakersShare" (click)="showConfirmHide(item.id)">\n\n                                <ion-icon name="trash"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'KNVB\' && rol == 1"\n\n                                    class="KNVBshare" (click)="showConfirmHide(item.id)">\n\n                                <ion-icon name="trash"></ion-icon>\n\n                            </button>\n\n                            <!---->\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'De Telegraaf\'"\n\n                                    class="socialTelegraafShare"\n\n                                    (click)="shareInfo(item.title, item.image, item.link)">\n\n                                <ion-icon name="share-alt"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'NOS\'" class="socialNOSShare"\n\n                                    (click)="shareInfo(item.title, item.image, item.link)">\n\n                                <ion-icon name="share-alt"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'NU.nl\'" class="socialNuShare"\n\n                                    (click)="shareInfo(item.title, item.image, item.link)">\n\n                                <ion-icon name="share-alt"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'Tweakers\'" class="socialTweakersShare"\n\n                                    (click)="shareInfo(item.title, item.image, item.link)">\n\n                                <ion-icon name="share-alt"></ion-icon>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'KNVB\'" class="socialKNVBshare"\n\n                                    (click)="shareInfo(item.title, item.image, item.link)">\n\n                                <ion-icon name="share-alt"></ion-icon>\n\n                            </button>\n\n                            <!---->\n\n                            <button class="socialTelegraaf" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'De Telegraaf\' && item.liked == 0" [disabled]="disabled"\n\n                                    (click)="setLike(item.id)">\n\n                                <ion-icon name="heart-outline" class="likeTelegraaf"></ion-icon>\n\n                                <div class="darkChatComment">{{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialNOS" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'NOS\' && item.liked == 0" [disabled]="disabled"\n\n                                    (click)="setLike(item.id)">\n\n                                <ion-icon name="heart-outline" class="likeNOS"></ion-icon>\n\n                                <div class="darkChatComment"> {{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialNu" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'NU.nl\' && item.liked == 0" [disabled]="disabled"\n\n                                    (click)="setLike(item.id)">\n\n                                <ion-icon name="heart-outline" class="likeNu"></ion-icon>\n\n                                <div class="darkChatComment">{{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialTweakers" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'Tweakers\' && item.liked == 0" [disabled]="disabled"\n\n                                    (click)="setLike(item.id)">\n\n                                <ion-icon name="heart-outline" class="likeTweakers"></ion-icon>\n\n                                <div class="darkChatComment">{{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialKnvb" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'KNVB\' && item.liked == 0" [disabled]="disabled"\n\n                                    (click)="setLike(item.id)">\n\n                                <ion-icon name="heart-outline" class="likeKNVB"></ion-icon>\n\n                                <div class="darkChatComment">{{item.likes}}</div>\n\n                            </button>\n\n                            <!---->\n\n                            <button class="socialTelegraaf" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'De Telegraaf\' && item.liked == 1"\n\n                                    (click)="dislike(item.id, item.title)">\n\n                                <ion-icon name="heart" class="likeTelegraaf"></ion-icon>\n\n                                <div class="darkChatComment">{{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialNOS" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'NOS\' && item.liked == 1"\n\n                                    (click)="dislike(item.id, item.title)">\n\n                                <ion-icon name="heart" class="likeNOS"></ion-icon>\n\n                                <div class="darkChatComment">{{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialNu" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'NU.nl\' && item.liked == 1"\n\n                                    (click)="dislike(item.id, item.title)">\n\n                                <ion-icon name="heart" class="likeNu"></ion-icon>\n\n                                <div class="darkChatComment">{{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialTweakers" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'Tweakers\' && item.liked == 1"\n\n                                    (click)="dislike(item.id, item.title)">\n\n                                <ion-icon name="heart" class="likeTweakers"></ion-icon>\n\n                                <div class="darkChatComment">{{item.likes}}</div>\n\n                            </button>\n\n                            <button class="socialKnvb" ion-button icon-start clear\n\n                                    *ngIf="item.site == \'KNVB\' && item.liked == 1"\n\n                                    (click)="dislike(item.id, item.title)">\n\n                                <ion-icon name="heart" class="likeKNVB"></ion-icon>\n\n                                <div class="darkChatComment">{{item.likes}}</div>\n\n                            </button>\n\n                            <!---->\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'De Telegraaf\'"\n\n                                    class="socialTelegraaf" (click)="viewComments({ record: item })">\n\n                                <ion-icon name="chatbubbles" class="darkChatTelegraaf"></ion-icon>\n\n                                <div class="darkChatComment">{{item.comments}}</div>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'NOS\'" class="socialNOS"\n\n                                    (click)="viewComments({ record: item })">\n\n                                <ion-icon name="chatbubbles" class="darkChatNOS"></ion-icon>\n\n                                <div class="darkChatComment">{{item.comments}}</div>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'NU.nl\'" class="socialNu"\n\n                                    (click)="viewComments({ record: item })">\n\n                                <ion-icon name="chatbubbles" class="darkChatNU"></ion-icon>\n\n                                <div class="darkChatComment">{{item.comments}}</div>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'Tweakers\'" class="socialTweakers"\n\n                                    (click)="viewComments({ record: item })">\n\n                                <ion-icon name="chatbubbles" class="darkChatTweakers"></ion-icon>\n\n                                <div class="darkChatComment">{{item.comments}}</div>\n\n                            </button>\n\n                            <button ion-button icon-start clear *ngIf="item.site == \'KNVB\'" class="socialKnvb"\n\n                                    (click)="viewComments({ record: item })">\n\n                                <ion-icon name="chatbubbles" class="darkChatKnvb"></ion-icon>\n\n                                <div class="darkChatComment">{{item.comments}}</div>\n\n                            </button>\n\n                            <!---->\n\n                        </div>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ion-row>\n\n        </ion-col>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\favorieten\favorieten.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */]])
    ], FavorietenPage);
    return FavorietenPage;
}());

//# sourceMappingURL=favorieten.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(397);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_screen_orientation__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_header_color__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_photo_viewer__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_sources_sources__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_profiel_profiel__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_sport_sport__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_economie_economie__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_tech_tech__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_admin_admin__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_comments_comments__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_vermaak_vermaak__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_wijzigwachtwoord_wijzigwachtwoord__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_lifestyle_lifestyle__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_nieuws_nieuws_module__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_favorieten_favorieten_module__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_feed_feed_module__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_register_register_module__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_tutorial_tutorial_module__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_settings_settings_module__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_sport_sport_module__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_economie_economie_module__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_tech_tech_module__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_admin_admin_module__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_sources_sources_module__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_profiel_profiel_module__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_wijzigwachtwoord_wijzigwachtwoord_module__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_comments_comments_module__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_vermaak_vermaak_module__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_privacybeleid_privacybeleid_module__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_lifestyle_lifestyle_module__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_menu_menu__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_social_sharing__ = __webpack_require__(50);
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
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comments/comments.module#CommentsPageModule', name: 'CommentsPage', segment: 'comments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/economie/economie.module#EconomiePageModule', name: 'EconomiePage', segment: 'economie', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feed/feed.module#FeedPageModule', name: 'FeedPage', segment: 'feed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lijstweer/lijstweer.module#LijstweerPageModule', name: 'LijstweerPage', segment: 'lijstweer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lifestyle/lifestyle.module#LifestylePageModule', name: 'LifestylePage', segment: 'lifestyle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nieuws/nieuws.module#NieuwsPageModule', name: 'NieuwsPage', segment: 'nieuws', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/privacybeleid/privacybeleid.module#PrivacybeleidPageModule', name: 'PrivacybeleidPage', segment: 'privacybeleid', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profiel/profiel.module#ProfielPageModule', name: 'ProfielPage', segment: 'profiel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sources/sources.module#SourcesPageModule', name: 'SourcesPage', segment: 'sources', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sport/sport.module#SportPageModule', name: 'SportPage', segment: 'sport', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tech/tech.module#TechPageModule', name: 'TechPage', segment: 'tech', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vermaak/vermaak.module#VermaakPageModule', name: 'VermaakPage', segment: 'vermaak', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wijzigwachtwoord/wijzigwachtwoord.module#WijzigwachtwoordPageModule', name: 'WijzigwachtwoordPage', segment: 'wijzigwachtwoord', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_30__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_32__pages_favorieten_favorieten_module__["a" /* FavorietenPageModule */],
                __WEBPACK_IMPORTED_MODULE_33__pages_feed_feed_module__["FeedPageModule"],
                __WEBPACK_IMPORTED_MODULE_34__pages_register_register_module__["RegisterPageModule"],
                __WEBPACK_IMPORTED_MODULE_28__pages_nieuws_nieuws_module__["NieuwsPageModule"],
                __WEBPACK_IMPORTED_MODULE_35__pages_tutorial_tutorial_module__["TutorialPageModule"],
                __WEBPACK_IMPORTED_MODULE_36__pages_settings_settings_module__["SettingsPageModule"],
                __WEBPACK_IMPORTED_MODULE_37__pages_sport_sport_module__["SportPageModule"],
                __WEBPACK_IMPORTED_MODULE_38__pages_economie_economie_module__["EconomiePageModule"],
                __WEBPACK_IMPORTED_MODULE_39__pages_tech_tech_module__["TechPageModule"],
                __WEBPACK_IMPORTED_MODULE_40__pages_admin_admin_module__["AdminPageModule"],
                __WEBPACK_IMPORTED_MODULE_41__pages_sources_sources_module__["SourcesPageModule"],
                __WEBPACK_IMPORTED_MODULE_42__pages_profiel_profiel_module__["ProfielPageModule"],
                __WEBPACK_IMPORTED_MODULE_44__pages_comments_comments_module__["CommentsPageModule"],
                __WEBPACK_IMPORTED_MODULE_43__pages_wijzigwachtwoord_wijzigwachtwoord_module__["WijzigwachtwoordPageModule"],
                __WEBPACK_IMPORTED_MODULE_45__pages_vermaak_vermaak_module__["VermaakPageModule"],
                __WEBPACK_IMPORTED_MODULE_46__pages_privacybeleid_privacybeleid_module__["PrivacybeleidPageModule"],
                __WEBPACK_IMPORTED_MODULE_47__pages_lifestyle_lifestyle_module__["LifestylePageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_sport_sport__["a" /* SportPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_economie_economie__["a" /* EconomiePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_tech_tech__["a" /* TechPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_sources_sources__["a" /* SourcesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_profiel_profiel__["a" /* ProfielPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_comments_comments__["a" /* CommentsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_wijzigwachtwoord_wijzigwachtwoord__["a" /* WijzigwachtwoordPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_vermaak_vermaak__["a" /* VermaakPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_lifestyle_lifestyle__["a" /* LifestylePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["b" /* HttpClientModule */],
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
                __WEBPACK_IMPORTED_MODULE_48__providers_menu_menu__["a" /* MenuProvider */],
                __WEBPACK_IMPORTED_MODULE_49__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_photo_viewer__["a" /* PhotoViewer */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comments_comments__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lijstweer_lijstweer__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__ = __webpack_require__(58);
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
    function FeedPage(navCtrl, navParams, menuCtrl, http, network, toastCtrl, loadingCtrl, platform, events, screenOrientation, alertCtrl, socialSharing, geolocation, storage, transfer, file) {
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
        this.transfer = transfer;
        this.file = file;
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
        this.TIMER_IN_MS = 100;
        this.slice = 5;
        this.storageDirectory = '';
        // Select Items
        this.selectOptions = {
            title: 'Bekijk'
        };
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
                position: "top"
            });
            if (this.datepicker == "vandaag") {
                offlinealert.present();
                this.getOfflineDataToday();
            }
            else if (this.datepicker == "gisteren") {
                this.getOfflineDataYesterday();
            }
            else if (this.datepicker == "driedagengeleden") {
                this.getOfflineData3DaysAgo();
            }
        }
        if (localStorage.getItem("themeColor")) {
            this.currentTheme = localStorage.getItem("themeColor");
            console.log(this.currentTheme);
        }
    }
    // ---------------------------------------------------------------------------------------------
    // Hier eindigt de constructor
    // ---------------------------------------------------------------------------------------------
    //
    FeedPage.prototype.onChange = function (SelectedValue) {
        SelectedValue = SelectedValue;
        console.log(SelectedValue);
        if (this.network.type != "none") {
            if (this.datepicker == "vandaag") {
                this.load();
                this.content.scrollToTop(0);
            }
            else if (this.datepicker == "gisteren") {
                this.loadYesterday();
                this.content.scrollToTop(0);
            }
            else if (this.datepicker == "driedagengeleden") {
                this.load3DaysAgo();
                this.content.scrollToTop(0);
            } // else if (this.datepicker == "HetWeer") {
            //     this.weerData();
            // }
        }
        else if (this.network.type == "none") {
            if (this.datepicker == "vandaag") {
                this.getOfflineDataToday();
            }
            else if (this.datepicker == "gisteren") {
                this.getOfflineDataYesterday();
            }
            else if (this.datepicker == "driedagengeleden") {
                this.getOfflineData3DaysAgo();
            }
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
    // Als netwerk online is of offline is
    FeedPage.prototype.ionViewWillEnter = function () {
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
            // Get offline data
            if (this.datepicker == "vandaag") {
                this.getOfflineDataToday();
            }
            else if (this.datepicker == "gisteren") {
                this.getOfflineDataYesterday();
            }
            else if (this.datepicker == "driedagengeleden") {
                this.getOfflineData3DaysAgo();
            }
        }
    };
    // Custom Spinner loader
    FeedPage.prototype.presentLoadingCustom = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<div class=\"custom-spinner-container\"><img src=\"../assets/svg/spinner/tail-spin.svg\"><br> <p>Laden...</p>\n     </div>",
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
        if (this.network.type != "none") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__comments_comments__["a" /* CommentsPage */], param);
        }
        else if (this.network.type == "none") {
            var toast = this.toastCtrl.create({
                message: "Actie kon niet worden uitgevoerd, geen internet verbinding gevonden.",
                duration: 3500,
                position: "top"
            });
            toast.present();
        }
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
            else if (this.datepicker == "HetWeer") {
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
        if (this.network.type != "none") {
            this.setOfflineToday();
            this.setOfflineYesterday();
            this.setOffline3DaysAgo();
        }
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
            .post('http://gazoh.net/getdatafinal.php', data, options)
            .subscribe(function (data) {
            _this.items = data;
            _this.artikelen = data;
            console.log("Offline data set in storage: offlineDataToday");
            _this.items.sort(function (a, b) {
                var dateA = new Date(a.datum.replace(' ', 'T'));
                var dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: "De pagina die u wilt bekijken kan niet worden weergegeven, bekijk uw internetverbinding",
                duration: 3500,
                position: "top"
            });
            toast.present();
            console.log("Http error is: " + error);
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
            .post('http://gazoh.net/getdatafinal.php', data, options)
            .subscribe(function (data) {
            _this.items = data;
            _this.artikelen = data;
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                duration: 3500,
                position: "top"
            });
            toast.present();
            console.log("Http error is: " + error);
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
            .post('http://gazoh.net/getdatayesterday.php', data, options)
            .subscribe(function (data) {
            _this.items = data;
            _this.artikelen = data;
            _this.items.sort(function (a, b) {
                var dateA = new Date(a.datum.replace(' ', 'T'));
                var dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                duration: 3500,
                position: "top"
            });
            toast.present();
            console.log("Http error is: " + error);
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
            .post('http://gazoh.net/getdata3daysago.php', data, options)
            .subscribe(function (data) {
            _this.items = data;
            _this.artikelen = data;
            console.log("Offline data set in storage: offlineData3DaysAgo");
            _this.storage.set("offlineData3DaysAgo", data);
            _this.items.sort(function (a, b) {
                var dateA = new Date(a.datum.replace(' ', 'T'));
                var dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                duration: 3500,
                position: "top"
            });
            toast.present();
            console.log("Http error is: " + error);
        });
        this.presentLoadingCustom();
    };
    // De pull to refresh
    FeedPage.prototype.doRefresh = function (refresher) {
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
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    FeedPage.prototype.setLike = function (articleId) {
        var _this = this;
        if (this.network.type != "none") {
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
                if (data == "liked")
                    setTimeout(function () {
                        _this.disabled = false;
                    }, _this.TIMER_IN_MS);
                {
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
        else if (this.network.type == "none") {
            var toast = this.toastCtrl.create({
                message: "Actie kon niet worden uitgevoerd, geen internet verbinding gevonden.",
                duration: 3500,
                position: "top"
            });
            toast.present();
            if (this.network.type == "none") {
                this.disabled = true;
            }
            else {
                this.disabled = false;
            }
        }
    };
    FeedPage.prototype.shareInfo = function (articleTitle, articleImage, articleLink) {
        this.socialSharing.share('Bekijk "' + articleTitle + '" via de Newsage app', "NewsAge", articleImage, articleLink);
    };
    FeedPage.prototype.dislike = function (articleId, articleTitle) {
        var _this = this;
        if (this.network.type != "none") {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options_1 = { headers: headers };
            var data_1 = {
                articleId: articleId,
                userId: this.userId
            };
            var alert_1 = this.alertCtrl.create({
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
                            _this.http.post('http://gazoh.net/unlike.php', data_1, options_1)
                                .subscribe(function (data) {
                                if (data == "unliked") {
                                    var toast = _this.toastCtrl.create({
                                        message: '"' + articleTitle + '"' + " is verwijderd uit je favorieten!",
                                        duration: 2500,
                                        position: "top"
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
            alert_1.present();
        }
        else if (this.network.type == "none") {
            var toast = this.toastCtrl.create({
                message: "Actie kon niet worden uitgevoerd, geen internet verbinding gevonden.",
                duration: 3500,
                position: "top"
            });
            toast.present();
        }
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
    FeedPage.prototype.getOfflineDataToday = function () {
        var _this = this;
        this.storage.get("offlineDataVandaag").then(function (data) {
            _this.items = data;
            _this.artikelen = data;
            _this.items.sort(function (a, b) {
                var dateA = new Date(a.datum.replace(' ', 'T'));
                var dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        });
    };
    FeedPage.prototype.getOfflineDataYesterday = function () {
        var _this = this;
        this.storage.get("offlineDataGisteren").then(function (data) {
            _this.items = data;
            _this.artikelen = data;
            _this.items.sort(function (a, b) {
                var dateA = new Date(a.datum.replace(' ', 'T'));
                var dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        });
    };
    FeedPage.prototype.getOfflineData3DaysAgo = function () {
        var _this = this;
        this.storage.get("offlineData3DagenGeleden").then(function (data) {
            _this.items = data;
            _this.artikelen = data;
            _this.items.sort(function (a, b) {
                var dateA = new Date(a.datum.replace(' ', 'T'));
                var dateB = new Date(b.datum.replace(' ', 'T'));
                return dateB.getTime() - dateA.getTime();
            });
        });
    };
    FeedPage.prototype.goLijstWeerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__lijstweer_lijstweer__["a" /* LijstweerPage */]);
    };
    FeedPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            _this.slice += 5;
            infiniteScroll.complete();
        }, 200);
    };
    FeedPage.prototype.setOfflineToday = function () {
        var _this = this;
        if (this.network.type != "none") {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = { headers: headers };
            var data = {
                userId: localStorage.getItem('userId')
            };
            this.http
                .post('http://gazoh.net/getdatafinal.php', data, options)
                .subscribe(function (data) {
                _this.storage.set("offlineDataVandaag", data);
                console.log("Offline data set in storage: offlineDataVandaag");
            }, function (error) {
                var toast = _this.toastCtrl.create({
                    message: "De pagina die u wilt bekijken kan niet worden weergegeven, bekijk uw internetverbinding",
                    duration: 3500,
                    position: "top"
                });
                toast.present();
                console.log("Http error is: " + error);
            });
        }
    };
    FeedPage.prototype.setOfflineYesterday = function () {
        var _this = this;
        if (this.network.type != "none") {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = { headers: headers };
            var data = {
                userId: localStorage.getItem('userId')
            };
            this.http
                .post('http://gazoh.net/getdatayesterday.php', data, options)
                .subscribe(function (data) {
                _this.storage.set("offlineDataGisteren", data);
                console.log("Offline data set in storage: offlineDataGisteren");
            }, function (error) {
                var toast = _this.toastCtrl.create({
                    message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                    duration: 3500,
                    position: "top"
                });
                toast.present();
                console.log("Http error is: " + error);
            });
        }
    };
    FeedPage.prototype.setOffline3DaysAgo = function () {
        var _this = this;
        if (this.network.type != "none") {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = { headers: headers };
            var data = {
                userId: localStorage.getItem('userId')
            };
            this.http
                .post('http://gazoh.net/getdata3daysago.php', data, options)
                .subscribe(function (data) {
                _this.storage.set("offlineData3DagenGeleden", data);
                console.log("Offline data set in storage: offlineData3DagenGeleden");
            }, function (error) {
                var toast = _this.toastCtrl.create({
                    message: "Artikelen konden niet worden ingeladen, probeer het nogmaals over 1 minuut.",
                    duration: 3500,
                    position: "top"
                });
                toast.present();
                console.log("Http error is: " + error);
            });
        }
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
            selector: 'page-feed',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\feed\feed.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle *ngIf="!isSearchbaropened">\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title *ngIf="!isSearchbaropened" class="algemeenText">Algemeen</ion-title>\n\n        <!-- Searchbar  -->\n\n        <ion-searchbar #searchbar *ngIf="isSearchbaropened" [showCancelButton]="true" (ionCancel)="resetChanges()"\n\n                       (ionInput)="search($event)" placeholder="Waar zijn we naar op zoek?"\n\n                       class="slideInRight"></ion-searchbar>\n\n        <!-- Searchbar icon -->\n\n        <ion-buttons end\n\n                     *ngIf="this.datepicker == \'vandaag\' || this.datepicker == \'gisteren\' || this.datepicker == \'driedagengeleden\'">\n\n            <button ion-button icon-only (click)="isSearchbaropened=true">\n\n                <ion-icon name="search" *ngIf="!isSearchbaropened"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-buttons end *ngIf="this.datepicker == \'HetWeer\'">\n\n            <button ion-button icon-only (click)="goLijstWeerPage()">\n\n                <ion-icon name="search"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-buttons end *ngIf="!isSearchbaropened" class="moreFeed">\n\n            <ion-icon class="calenderIcon" name="calendar"></ion-icon>\n\n            <ion-list class="listMore">\n\n                <ion-select #newSelect [(ngModel)]="datepicker" (ionChange)="onChange(datepicker)"\n\n                            [selectOptions]="selectOptions" cancelText="Annuleer" okText="Ok" class="SelectMore">\n\n                    <ion-option value="vandaag">Vandaag</ion-option>\n\n                    <ion-option value="gisteren">Gisteren</ion-option>\n\n                    <ion-option value="driedagengeleden">Drie dagen geleden</ion-option>\n\n                    <!--<ion-option value="HetWeer">Het weer</ion-option>-->\n\n                </ion-select>\n\n            </ion-list>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <!-- Swipe up refresher  -->\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content pullingIcon="arrow-dropdown"\n\n                               pullingText="Sleep omlaag om te verversen"></ion-refresher-content>\n\n    </ion-refresher>\n\n    <!-- Grid -->\n\n    <ion-grid class="feedGrid">\n\n        <ion-col>\n\n            <ion-row>\n\n                <ion-card *ngFor="let item of (items ? items.slice(0,slice): [])" col-md-6 class="ionCard">\n\n                    <!-- Images van nieuwsfeed -->\n\n                    <div class="ion-card-image-wrapper" (tap)="viewEntry({ record: item })">\n\n                        <img class="fullHeight" src="../assets/imgs/NOS.png" *ngIf="item.site == \'NOS\' && network.type == \'none\'">\n\n                        <img class="fullHeight" src="../assets/imgs/NUNL.png" *ngIf="item.site == \'NU.nl\' && network.type == \'none\'">\n\n                        <img class="fullHeight" src="../assets/imgs/tweakers.png" *ngIf="item.site == \'Tweakers\'">\n\n                        <img class="fullHeight" src="../assets/imgs/beautylab.png" *ngIf="item.site == \'Beautylab\'">\n\n                        <img class="fullHeight" src="../assets/imgs/libelle.png" *ngIf="item.site == \'Libelle\'">\n\n                        <img class="fullHeight" src="../assets/imgs/volkskrant.png" *ngIf="item.site == \'Volkskrant\'">\n\n                        <img class="fullHeight" src="../assets/imgs/volkskrant.png" *ngIf="item.site == \'Volkskrant Economie\'">\n\n                        <img class="fullHeight" src="../assets/imgs/telegraaf.png" *ngIf="item.site == \'De Telegraaf\' && network.type == \'none\'">\n\n                        <img class="fullHeight" src="../assets/imgs/KNVB.png" *ngIf="item.site == \'KNVB\' && network.type == \'none\'">\n\n                        <img class="fullHeight" [src]="item.image" *ngIf="item.site == \'NOS\' || item.site == \'De Telegraaf\' || item.site == \'NU.nl\' || item.site == \'KNVB\' || item.site == \'NU.nl Economie\' && network.type != \'none\'">\n\n                        <img class="hideNoImage" *ngIf="!item.image ? !item.image : item.site == \'Volkskrant\' || item.site == \'KNVB\' || item.site == \'Volkskrant Economie\' || item.site == \'Libelle\' || item.site == \'Beautylab\'" src="../assets/imgs/noimage.jpg">\n\n                    </div>\n\n                    <ion-card-content class="cardContentFeed">\n\n                            <!-- Avatar -->\n\n                            <div id="AvatarFeed" (tap)="viewEntry({ record: item })">\n\n                                <ion-avatar *ngIf="item.site == \'NOS\' && currentTheme == \'light-theme\'" class="avatarNOS" item-start>\n\n                                    <img src="../assets/svg/NOS_logo.svg" class="avatar-feed"/>\n\n                                </ion-avatar>\n\n                                <ion-avatar *ngIf="item.site == \'NOS\' && currentTheme == \'dark-theme\'" class="avatarNOS" item-start>\n\n                                    <img src="../assets/svg/NOS_logo_Wit.svg" class="avatar-feed"/>\n\n                                </ion-avatar>\n\n                                <ion-avatar *ngIf="item.site == \'De Telegraaf\' && currentTheme == \'light-theme\'" class="avatarTelegraaf" item-start>\n\n                                    <img src="../assets/svg/Telegraaf.svg" class="avatar-feedTelegraaf"/>\n\n                                </ion-avatar>\n\n                                <ion-avatar *ngIf="item.site == \'De Telegraaf\' && currentTheme == \'dark-theme\'" class="avatarTelegraaf" item-start>\n\n                                    <img src="../assets/svg/Telegraaf_Wit.svg" class="avatar-feedTelegraaf"/>\n\n                                </ion-avatar>\n\n                                <ion-avatar *ngIf="item.site == \'NU.nl\'" class="avatar" item-start>\n\n                                    <img src="../assets/svg/nu.nl.svg" class="avatar-feed"/>\n\n                                </ion-avatar>\n\n                                <ion-avatar *ngIf="item.site == \'NU.nl Economie\'" class="avatar" item-start>\n\n                                    <img src="../assets/svg/nu.nl.svg" class="avatar-feed"/>\n\n                                </ion-avatar>\n\n                                <ion-avatar *ngIf="item.site == \'Tweakers\'" class="avatar" item-start>\n\n                                    <img src="../assets/svg/Tweakers.svg" class="avatar-feed"/>\n\n                                </ion-avatar>\n\n                                <ion-avatar *ngIf="item.site == \'KNVB\'" class="avatar" item-start>\n\n                                    <img src="../assets/svg/knvb.svg" class="avatar-feed"/>\n\n                                </ion-avatar>\n\n                                <ion-avatar *ngIf="item.site == \'Volkskrant\' && currentTheme == \'light-theme\'" class="avatar" item-start>\n\n                                    <img src="../assets/svg/Volkskrant.svg" class="avatar-feed"/>\n\n                                </ion-avatar>\n\n                                <ion-avatar *ngIf="item.site == \'Volkskrant\' && currentTheme == \'dark-theme\'" class="avatar" item-start>\n\n                                    <img src="../assets/svg/Volkskrant_wit.svg" class="avatar-feed"/>\n\n                                </ion-avatar>\n\n                                <ion-avatar *ngIf="item.site == \'Beautylab\'" class="avatar" item-start>\n\n                                    <img src="../assets/svg/Beautylab.svg" class="avatar-feed"/>\n\n                                </ion-avatar>\n\n                                <ion-avatar *ngIf="item.site == \'Libelle\' && currentTheme == \'light-theme\'" class="avatar" item-start>\n\n                                    <img src="../assets/svg/libelle.svg" class="avatar-feed"/>\n\n                                </ion-avatar>\n\n                                <ion-avatar *ngIf="item.site == \'Libelle\' && currentTheme == \'dark-theme\'" class="avatar" item-start>\n\n                                    <img src="../assets/svg/libelle_wit.svg" class="avatar-feed"/>\n\n                                </ion-avatar>\n\n\n\n                                <div class="uitgeverFeed" *ngIf="item.site == \'De Telegraaf\'">{{item.site}}</div>\n\n                                <div class="uitgeverFeedNU" *ngIf="item.site == \'NU.nl\'">{{item.site}}</div>\n\n                                <div class="uitgeverFeedNU" *ngIf="item.site == \'NU.nl Economie\'">{{item.site}}</div>\n\n                                <div class="uitgeverFeedNU" *ngIf="item.site == \'Tweakers\'">{{item.site}}</div>\n\n                                <div class="uitgeverFeedNU" *ngIf="item.site == \'KNVB\'">{{item.site}}</div>\n\n                                <div class="uitgeverFeedNU" *ngIf="item.site == \'Volkskrant\'">{{item.site}}</div>\n\n                                <div class="uitgeverFeedBeautylab" *ngIf="item.site == \'Beautylab\'">{{item.site}}</div>\n\n                                <div class="uitgeverFeedLibelle" *ngIf="item.site == \'Libelle\'">{{item.site}}</div>\n\n                            </div>\n\n                            <!-- Uitgever -->\n\n                            <div id="uitgeverFeed" (tap)="viewEntry({ record: item })">\n\n                                <!-- Title  -->\n\n                                <div id="title">\n\n                                    <ion-card-title *ngIf="item.site == \'De Telegraaf\' || item.site == \'NU.nl\'"><strong class="cardTitle">{{item.title}}</strong></ion-card-title>\n\n                                    <ion-card-title *ngIf="item.site == \'NU.nl Economie\' || item.site == \'NU.nl Economie\'"><strong class="cardTitle">{{item.title}}</strong></ion-card-title>\n\n                                    <ion-card-title *ngIf="item.site == \'NOS\'" id="ionCardNOS"><strong class="cardTitleNOS">{{item.title}}</strong></ion-card-title>\n\n                                    <ion-card-title *ngIf="item.site == \'Tweakers\'"><strong class="cardTitleNOS">{{item.title}}</strong></ion-card-title>\n\n                                    <ion-card-title *ngIf="item.site == \'KNVB\'"><strong class="cardTitleNOS">{{item.title}}</strong></ion-card-title>\n\n                                    <ion-card-title *ngIf="item.site == \'Volkskrant\'"><strong class="cardTitle">{{item.title}}</strong></ion-card-title>\n\n                                    <ion-card-title *ngIf="item.site == \'Beautylab\'"><strong class="cardTitle">{{item.title}}</strong></ion-card-title>\n\n                                    <ion-card-title *ngIf="item.site == \'Libelle\'"><strong class="cardTitle">{{item.title}}</strong></ion-card-title>\n\n                                </div>\n\n                                <!-- description  -->\n\n                                <div id="description">\n\n                                    <p class="descriptionFeed">{{htmlToPlaintext(item.description) |\n\n                                        slice:0:120}}...</p>\n\n                                </div>\n\n                                <!-- Datum -->\n\n                                <div id="datumFeed" class="datumFeed">\n\n                                    <span>{{item.datum}}</span>\n\n                                </div>\n\n                            </div>\n\n                            <!-- Social Buttons - Comments - likes - Share -->\n\n                            <div id="socialLikeComments" class="socialLikeComments">\n\n                                <!---->\n\n                                <button ion-button icon-start clear *ngIf="item.site == \'De Telegraaf\' && rol == 1"\n\n                                        class="ColorDarkAppShare" (click)="showConfirmHide(item.id)">\n\n                                    <ion-icon name="trash"></ion-icon>\n\n                                </button>\n\n                                <button ion-button icon-start clear *ngIf="item.site == \'NOS\' && rol == 1"\n\n                                        class="ColorDarkAppShare" (click)="showConfirmHide(item.id)">\n\n                                    <ion-icon name="trash"></ion-icon>\n\n                                </button>\n\n                                <button ion-button icon-start clear *ngIf="item.site == \'NU.nl\' && rol == 1"\n\n                                        class="ColorDarkAppShare" (click)="showConfirmHide(item.id)">\n\n                                    <ion-icon name="trash"></ion-icon>\n\n                                </button>\n\n                                <button ion-button icon-start clear *ngIf="item.site == \'NU.nl Economie\' && rol == 1"\n\n                                        class="ColorDarkAppShare" (click)="showConfirmHide(item.id)">\n\n                                    <ion-icon name="trash"></ion-icon>\n\n                                </button>\n\n                                <button ion-button icon-start clear *ngIf="item.site == \'Tweakers\' && rol == 1"\n\n                                        class="ColorDarkAppShare" (click)="showConfirmHide(item.id)">\n\n                                    <ion-icon name="trash"></ion-icon>\n\n                                </button>\n\n                                <button ion-button icon-start clear *ngIf="item.site == \'KNVB\' && rol == 1"\n\n                                        class="ColorDarkAppShare" (click)="showConfirmHide(item.id)">\n\n                                    <ion-icon name="trash"></ion-icon>\n\n                                </button>\n\n                                <button ion-button icon-start clear *ngIf="item.site == \'Volkskrant\' && rol == 1"\n\n                                        class="ColorDarkAppShare" (click)="showConfirmHide(item.id)">\n\n                                    <ion-icon name="trash"></ion-icon>\n\n                                </button>\n\n                                <button ion-button icon-start clear *ngIf="item.site == \'Beautylab\' && rol == 1"\n\n                                        class="ColorDarkAppShare" (click)="showConfirmHide(item.id)">\n\n                                    <ion-icon name="trash"></ion-icon>\n\n                                </button>\n\n                                <button ion-button icon-start clear *ngIf="item.site == \'Libelle\' && rol == 1"\n\n                                        class="ColorDarkAppShare" (click)="showConfirmHide(item.id)">\n\n                                    <ion-icon name="trash"></ion-icon>\n\n                                </button>\n\n                                <!---->\n\n                                <button ion-button icon-start clear *ngIf="item.site == \'De Telegraaf\'"\n\n                                        class="ColorDarkAppShare"\n\n                                        (click)="shareInfo(item.title, item.image, item.link)">\n\n                                    <ion-icon name="share-alt"></ion-icon>\n\n                                </button>\n\n                                <button ion-button icon-start clear *ngIf="item.site == \'NOS\'" class="ColorDarkAppShare"\n\n                                        (click)="shareInfo(item.title, item.image, item.link)">\n\n                                    <ion-icon name="share-alt"></ion-icon>\n\n                                </button>\n\n                                <button ion-button icon-start clear *ngIf="item.site == \'NU.nl\'" class="ColorDarkAppShare"\n\n                                        (click)="shareInfo(item.title, item.image, item.link)">\n\n                                    <ion-icon name="share-alt"></ion-icon>\n\n                                </button>\n\n                                <button ion-button icon-start clear *ngIf="item.site == \'NU.nl Economie\'" class="ColorDarkAppShare"\n\n                                        (click)="shareInfo(item.title, item.image, item.link)">\n\n                                    <ion-icon name="share-alt"></ion-icon>\n\n                                </button>\n\n                                <button ion-button icon-start clear *ngIf="item.site == \'Tweakers\'"\n\n                                        class="ColorDarkAppShare"\n\n                                        (click)="shareInfo(item.title, item.image, item.link)">\n\n                                    <ion-icon name="share-alt"></ion-icon>\n\n                                </button>\n\n                                <button ion-button icon-start clear *ngIf="item.site == \'KNVB\'" class="ColorDarkAppShare"\n\n                                        (click)="shareInfo(item.title, item.image, item.link)">\n\n                                    <ion-icon name="share-alt"></ion-icon>\n\n                                </button>\n\n                                <button ion-button icon-start clear *ngIf="item.site == \'Volkskrant\'" class="ColorDarkAppShare"\n\n                                        (click)="shareInfo(item.title, item.image, item.link)">\n\n                                    <ion-icon name="share-alt"></ion-icon>\n\n                                </button>\n\n                                <button ion-button icon-start clear *ngIf="item.site == \'Beautylab\'" class="ColorDarkAppShare"\n\n                                        (click)="shareInfo(item.title, item.image, item.link)">\n\n                                    <ion-icon name="share-alt"></ion-icon>\n\n                                </button>\n\n                                <button ion-button icon-start clear *ngIf="item.site == \'Libelle\'" class="ColorDarkAppShare"\n\n                                        (click)="shareInfo(item.title, item.image, item.link)">\n\n                                    <ion-icon name="share-alt"></ion-icon>\n\n                                </button>\n\n                                <!---->\n\n                                <button class="socialTelegraaf" ion-button icon-start clear\n\n                                        *ngIf="item.site == \'De Telegraaf\' && item.liked == 0" [disabled]="disabled"\n\n                                        (click)="setLike(item.id)">\n\n                                    <ion-icon name="heart-outline" class="ColorDarkApp"></ion-icon>\n\n                                    <div class="ColorDarkAppTextDarkTheme">{{item.likes}}</div>\n\n                                </button>\n\n                                <button class="socialNOS" ion-button icon-start clear\n\n                                        *ngIf="item.site == \'NOS\' && item.liked == 0" [disabled]="disabled"\n\n                                        (click)="setLike(item.id)">\n\n                                    <ion-icon name="heart-outline" class="ColorDarkApp"></ion-icon>\n\n                                    <div class="ColorDarkAppTextDarkTheme"> {{item.likes}}</div>\n\n                                </button>\n\n                                <button class="socialNu" ion-button icon-start clear\n\n                                        *ngIf="item.site == \'NU.nl\' && item.liked == 0" [disabled]="disabled"\n\n                                        (click)="setLike(item.id)">\n\n                                    <ion-icon name="heart-outline" class="ColorDarkApp"></ion-icon>\n\n                                    <div class="ColorDarkAppTextDarkTheme">{{item.likes}}</div>\n\n                                </button>\n\n                                <button class="socialNu" ion-button icon-start clear\n\n                                        *ngIf="item.site == \'NU.nl Economie\' && item.liked == 0" [disabled]="disabled"\n\n                                        (click)="setLike(item.id)">\n\n                                    <ion-icon name="heart-outline" class="ColorDarkApp"></ion-icon>\n\n                                    <div class="ColorDarkAppTextDarkTheme">{{item.likes}}</div>\n\n                                </button>\n\n                                <button class="socialTweakers" ion-button icon-start clear\n\n                                        *ngIf="item.site == \'Tweakers\' && item.liked == 0" [disabled]="disabled"\n\n                                        (click)="setLike(item.id)">\n\n                                    <ion-icon name="heart-outline" class="ColorDarkApp"></ion-icon>\n\n                                    <div class="ColorDarkAppTextDarkTheme">{{item.likes}}</div>\n\n                                </button>\n\n                                <button class="socialKnvb" ion-button icon-start clear\n\n                                        *ngIf="item.site == \'KNVB\' && item.liked == 0" [disabled]="disabled"\n\n                                        (click)="setLike(item.id)">\n\n                                    <ion-icon name="heart-outline" class="ColorDarkApp"></ion-icon>\n\n                                    <div class="ColorDarkAppTextDarkTheme">{{item.likes}}</div>\n\n                                </button>\n\n                                <button class="socialKnvb" ion-button icon-start clear\n\n                                        *ngIf="item.site == \'Volkskrant\' && item.liked == 0" [disabled]="disabled"\n\n                                        (click)="setLike(item.id)">\n\n                                    <ion-icon name="heart-outline" class="ColorDarkApp"></ion-icon>\n\n                                    <div class="ColorDarkAppTextDarkTheme">{{item.likes}}</div>\n\n                                </button>\n\n                                <button class="socialKnvb" ion-button icon-start clear\n\n                                        *ngIf="item.site == \'Beautylab\' && item.liked == 0" [disabled]="disabled"\n\n                                        (click)="setLike(item.id)">\n\n                                    <ion-icon name="heart-outline" class="ColorDarkApp"></ion-icon>\n\n                                    <div class="ColorDarkAppTextDarkTheme">{{item.likes}}</div>\n\n                                </button>\n\n                                <button class="socialKnvb" ion-button icon-start clear\n\n                                        *ngIf="item.site == \'Libelle\' && item.liked == 0" [disabled]="disabled"\n\n                                        (click)="setLike(item.id)">\n\n                                    <ion-icon name="heart-outline" class="ColorDarkApp"></ion-icon>\n\n                                    <div class="ColorDarkAppTextDarkTheme">{{item.likes}}</div>\n\n                                </button>\n\n                                <!---->\n\n                                <button class="socialTelegraaf" ion-button icon-start clear\n\n                                        *ngIf="item.site == \'De Telegraaf\' && item.liked == 1"\n\n                                        (click)="dislike(item.id, item.title)">\n\n                                    <ion-icon name="heart" class="ColorDarkApp"></ion-icon>\n\n                                    <div class="ColorDarkAppTextDarkTheme">{{item.likes}}</div>\n\n                                </button>\n\n                                <button class="socialNOS" ion-button icon-start clear\n\n                                        *ngIf="item.site == \'NOS\' && item.liked == 1"\n\n                                        (click)="dislike(item.id, item.title)">\n\n                                    <ion-icon name="heart" class="ColorDarkApp"></ion-icon>\n\n                                    <div class="ColorDarkAppTextDarkTheme">{{item.likes}}</div>\n\n                                </button>\n\n                                <button class="socialNu" ion-button icon-start clear\n\n                                        *ngIf="item.site == \'NU.nl\' && item.liked == 1"\n\n                                        (click)="dislike(item.id, item.title)">\n\n                                    <ion-icon name="heart" class="ColorDarkApp"></ion-icon>\n\n                                    <div class="ColorDarkAppTextDarkTheme">{{item.likes}}</div>\n\n                                </button>\n\n                                <button class="socialNu" ion-button icon-start clear\n\n                                        *ngIf="item.site == \'NU.nl Economie\' && item.liked == 1"\n\n                                        (click)="dislike(item.id, item.title)">\n\n                                    <ion-icon name="heart" class="ColorDarkApp"></ion-icon>\n\n                                    <div class="ColorDarkAppTextDarkTheme">{{item.likes}}</div>\n\n                                </button>\n\n                                <button class="socialTweakers" ion-button icon-start clear\n\n                                        *ngIf="item.site == \'Tweakers\' && item.liked == 1"\n\n                                        (click)="dislike(item.id, item.title)">\n\n                                    <ion-icon name="heart" class="ColorDarkApp"></ion-icon>\n\n                                    <div class="ColorDarkAppTextDarkTheme">{{item.likes}}</div>\n\n                                </button>\n\n                                <button class="socialKnvb" ion-button icon-start clear\n\n                                        *ngIf="item.site == \'KNVB\' && item.liked == 1"\n\n                                        (click)="dislike(item.id, item.title)">\n\n                                    <ion-icon name="heart" class="ColorDarkApp"></ion-icon>\n\n                                    <div class="ColorDarkAppTextDarkTheme">{{item.likes}}</div>\n\n                                </button>\n\n                                <button class="socialKnvb" ion-button icon-start clear\n\n                                        *ngIf="item.site == \'Volkskrant\' && item.liked == 1"\n\n                                        (click)="dislike(item.id, item.title)">\n\n                                    <ion-icon name="heart" class="ColorDarkApp"></ion-icon>\n\n                                    <div class="ColorDarkAppTextDarkTheme">{{item.likes}}</div>\n\n                                </button>\n\n                                <button class="socialKnvb" ion-button icon-start clear\n\n                                        *ngIf="item.site == \'Beautylab\' && item.liked == 1"\n\n                                        (click)="dislike(item.id, item.title)">\n\n                                    <ion-icon name="heart" class="ColorDarkApp"></ion-icon>\n\n                                    <div class="ColorDarkAppTextDarkTheme">{{item.likes}}</div>\n\n                                </button>\n\n                                <button class="socialKnvb" ion-button icon-start clear\n\n                                        *ngIf="item.site == \'Libelle\' && item.liked == 1"\n\n                                        (click)="dislike(item.id, item.title)">\n\n                                    <ion-icon name="heart" class="ColorDarkApp"></ion-icon>\n\n                                    <div class="ColorDarkAppTextDarkTheme">{{item.likes}}</div>\n\n                                </button>\n\n                                <!---->\n\n                                <button ion-button icon-start clear *ngIf="item.site == \'De Telegraaf\'"\n\n                                        class="socialTelegraaf" (click)="viewComments({ record: item })">\n\n                                    <ion-icon name="chatbubbles" class="ColorDarkApp"></ion-icon>\n\n                                    <div class="ColorDarkAppTextDarkTheme">{{item.comments}}</div>\n\n                                </button>\n\n                                <button ion-button icon-start clear *ngIf="item.site == \'NOS\'" class="socialNOS"\n\n                                        (click)="viewComments({ record: item })">\n\n                                    <ion-icon name="chatbubbles" class="ColorDarkApp"></ion-icon>\n\n                                    <div class="ColorDarkAppTextDarkTheme">{{item.comments}}</div>\n\n                                </button>\n\n                                <button ion-button icon-start clear *ngIf="item.site == \'NU.nl\'" class="socialNu"\n\n                                        (click)="viewComments({ record: item })">\n\n                                    <ion-icon name="chatbubbles" class="ColorDarkApp"></ion-icon>\n\n                                    <div class="ColorDarkAppTextDarkTheme">{{item.comments}}</div>\n\n                                </button>\n\n                                <button ion-button icon-start clear *ngIf="item.site == \'NU.nl Economie\'" class="socialNu"\n\n                                        (click)="viewComments({ record: item })">\n\n                                    <ion-icon name="chatbubbles" class="ColorDarkApp"></ion-icon>\n\n                                    <div class="ColorDarkAppTextDarkTheme">{{item.comments}}</div>\n\n                                </button>\n\n                                <button ion-button icon-start clear *ngIf="item.site == \'Tweakers\'"\n\n                                        class="socialTweakers"\n\n                                        (click)="viewComments({ record: item })">\n\n                                    <ion-icon name="chatbubbles" class="ColorDarkApp"></ion-icon>\n\n                                    <div class="ColorDarkAppTextDarkTheme">{{item.comments}}</div>\n\n                                </button>\n\n                                <button ion-button icon-start clear *ngIf="item.site == \'KNVB\'" class="socialKnvb"\n\n                                        (click)="viewComments({ record: item })">\n\n                                    <ion-icon name="chatbubbles" class="ColorDarkApp"></ion-icon>\n\n                                    <div class="ColorDarkAppTextDarkTheme">{{item.comments}}</div>\n\n                                </button>\n\n                                <button ion-button icon-start clear *ngIf="item.site == \'Volkskrant\'" class="socialKnvb"\n\n                                        (click)="viewComments({ record: item })">\n\n                                    <ion-icon name="chatbubbles" class="ColorDarkApp"></ion-icon>\n\n                                    <div class="ColorDarkAppTextDarkTheme">{{item.comments}}</div>\n\n                                </button>\n\n                                <button ion-button icon-start clear *ngIf="item.site == \'Beautylab\'" class="socialKnvb"\n\n                                        (click)="viewComments({ record: item })">\n\n                                    <ion-icon name="chatbubbles" class="ColorDarkApp"></ion-icon>\n\n                                    <div class="ColorDarkAppTextDarkTheme">{{item.comments}}</div>\n\n                                </button>\n\n                                <button ion-button icon-start clear *ngIf="item.site == \'Libelle\'" class="socialKnvb"\n\n                                        (click)="viewComments({ record: item })">\n\n                                    <ion-icon name="chatbubbles" class="ColorDarkApp"></ion-icon>\n\n                                    <div class="ColorDarkAppTextDarkTheme">{{item.comments}}</div>\n\n                                </button>\n\n                                <!---->\n\n                            </div>\n\n                        </ion-card-content>\n\n                </ion-card>\n\n            </ion-row>\n\n            <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n                <ion-infinite-scroll-content\n\n                        loadingSpinner="bubbles"\n\n                        loadingText="Meer artikelen inladen...">\n\n                </ion-infinite-scroll-content>\n\n            </ion-infinite-scroll>\n\n        </ion-col>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\feed\feed.html"*/,
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
            __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__["a" /* File */]])
    ], FeedPage);
    return FeedPage;
}());

//# sourceMappingURL=feed.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(239);
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

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LijstweerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LijstweerPage = /** @class */ (function () {
    function LijstweerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lijst = [];
        this.lijstbackup = [];
        this.lijst = [
            { title: 'One' },
            { title: 'Two' },
            { title: 'Three' },
            { title: 'Four' },
            { title: 'Five' },
            { title: 'Six' }
        ];
        this.lijstbackup = [
            { title: 'One' },
            { title: 'Two' },
            { title: 'Three' },
            { title: 'Four' },
            { title: 'Five' },
            { title: 'Six' }
        ];
    }
    // Zoek functie
    LijstweerPage.prototype.search = function (event) {
        var serVal = event.target.value;
        if (serVal && serVal.trim() != '') {
            this.lijst = this.lijst.filter(function (item) {
                return (item.title.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
            });
        }
        else {
            this.lijst = this.lijstbackup;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Searchbar */])
    ], LijstweerPage.prototype, "searchbar", void 0);
    LijstweerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lijstweer',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\lijstweer\lijstweer.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title class="lijstPadding">Lijst</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-searchbar\n\n        #searchbar\n\n        [(ngModel)]="myInput"\n\n        [showCancelButton]="shouldShowCancel"\n\n        (ionInput)="search($event)"\n\n        (ionCancel)="resetChanges()"\n\n        (ionClear)="clearItems()" placeholder="Waar zijn we naar op zoek?" class="searchbarLijstWeer">\n\n    </ion-searchbar>\n\n\n\n    <ion-list>\n\n        <ion-item *ngFor="let lijstje of lijst" class="lijstItem">\n\n            {{lijstje.title}}\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\lijstweer\lijstweer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], LijstweerPage);
    return LijstweerPage;
}());

//# sourceMappingURL=lijstweer.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NieuwsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comments_comments__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NieuwsPage = /** @class */ (function () {
    function NieuwsPage(navCtrl, navParams, inAppBrowser, network, socialSharing, http, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.inAppBrowser = inAppBrowser;
        this.network = network;
        this.socialSharing = socialSharing;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.disabled = false;
        this.TIMER_IN_MS = 100;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
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
        this.liked = item.liked;
        this.comments = item.comments;
        this.likes = item.liked;
    };
    NieuwsPage.prototype.htmlToPlaintext = function (text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
    NieuwsPage.prototype.openPagina = function (url) {
        var Options = {
            zoom: 'no',
            location: 'yes',
            toolbar: 'yes',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            disallowoverscroll: 'yes',
            enableViewportScale: 'yes'
        };
        var browser = this.inAppBrowser.create(url, '_blank', Options);
        browser.show();
    };
    NieuwsPage.prototype.shareInfo = function (articleTitle, articleImage, articleLink) {
        this.socialSharing.share('Bekijk "' + articleTitle + '" via de Newsage app', "NewsAge", articleImage, articleLink);
    };
    NieuwsPage.prototype.dislike = function (articleId, articleTitle) {
        var _this = this;
        if (this.network.type != "none") {
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options_1 = { headers: headers };
            var data_1 = {
                articleId: articleId,
                userId: this.userId
            };
            var alert_1 = this.alertCtrl.create({
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
                            _this.http.post('http://gazoh.net/unlike.php', data_1, options_1)
                                .subscribe(function (data) {
                                if (data == "unliked") {
                                    var toast = _this.toastCtrl.create({
                                        message: '"' + articleTitle + '"' + " is verwijderd uit je favorieten!",
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
            alert_1.present();
        }
        else if (this.network.type == "none") {
            var toast = this.toastCtrl.create({
                message: "Actie kon niet worden uitgevoerd, geen internet verbinding gevonden.",
                duration: 3500,
                position: "bottom"
            });
            toast.present();
        }
    };
    NieuwsPage.prototype.viewComments = function (param) {
        if (this.network.type != "none") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__comments_comments__["a" /* CommentsPage */], param);
        }
        else if (this.network.type == "none") {
            var toast = this.toastCtrl.create({
                message: "Actie kon niet worden uitgevoerd, geen internet verbinding gevonden.",
                duration: 3500,
                position: "bottom"
            });
            toast.present();
        }
    };
    NieuwsPage.prototype.setLike = function (articleId) {
        var _this = this;
        if (this.network.type != "none") {
            this.disabled = true;
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = { headers: headers };
            var data = {
                articleId: articleId,
                userId: this.userId
            };
            this.http.post('http://gazoh.net/setlike.php', data, options)
                .subscribe(function (data) {
                if (data == "liked")
                    setTimeout(function () {
                        _this.disabled = false;
                    }, _this.TIMER_IN_MS);
            });
        }
        else if (this.network.type == "none") {
            var toast = this.toastCtrl.create({
                message: "Actie kon niet worden uitgevoerd, geen internet verbinding gevonden.",
                duration: 3500,
                position: "bottom"
            });
            toast.present();
            if (this.network.type == "none") {
                this.disabled = true;
            }
            else {
                this.disabled = false;
            }
        }
    };
    NieuwsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nieuws',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\nieuws\nieuws.html"*/'w<ion-header>\n\n  <meta charset="UTF-8">\n\n  <ion-navbar class="nieuwsNavTitle">{{this.title}}</ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card class="nieuwsCard">\n\n    <img *ngIf="this.image && this.site != \'Tweakers\' && network.type != \'none\'" src="{{this.image}} " class="imageNieuws">\n\n    <img *ngIf="this.site == \'Tweakers\'" src="../assets/imgs/tweakers.png" class="imageNieuwsTweakers">\n\n    <img *ngIf="this.site == \'Beautylab\'" src="../assets/imgs/beautylab.png" class="imageNieuwsTweakers">\n\n    <img *ngIf="this.site == \'Libelle\'" src="../assets/imgs/libelle.png" class="imageNieuwsTweakers">\n\n    <img *ngIf="this.site == \'Volkskrant\'" src="../assets/imgs/volkskrant.png" class="imageNieuwsTweakers">\n\n    <img *ngIf="this.site == \'Volkskrant Economie\'" src="../assets/imgs/volkskrant.png" class="imageNieuwsTweakers">\n\n    <img *ngIf="this.site == \'NOS\' && network.type == \'none\'" src="../assets/imgs/NOS.png" class="imageNieuws">\n\n    <img *ngIf="this.site == \'NU.nl\' && network.type == \'none\'" src="../assets/imgs/NUNL.png" class="imageNieuws">\n\n    <img *ngIf="this.site == \'De Telegraaf\' && network.type == \'none\'" src="../assets/imgs/telegraaf.png" class="imageNieuws">\n\n    <img *ngIf="this.site == \'KNVB\' && network.type == \'none\'" src="../assets/imgs/KNVB.png" class="imageNieuws">\n\n    <ion-card-header class="headerText" text-wrap>\n\n      {{this.title}}\n\n      <p class="nieuwsDatum">{{this.datum}}</p>\n\n    </ion-card-header>\n\n    <ion-card-content class="nieuwsContent">\n\n      <p>{{htmlToPlaintext(this.description)}}</p>\n\n      <button (click)="openPagina(this.link)" ion-button full outline *ngIf="this.site == \'De Telegraaf\'" class="ColorDarkAppNieuws">Lees verder op {{this.site}}</button>\n\n      <button (click)="openPagina(this.link)" ion-button full outline *ngIf="this.site == \'NOS\'" class="ColorDarkAppNieuws">Lees verder op {{this.site}}</button>\n\n      <button (click)="openPagina(this.link)" ion-button full outline *ngIf="this.site == \'NU.nl\'" class="ColorDarkAppNieuws">Lees verder op {{this.site}}</button>\n\n      <button (click)="openPagina(this.link)" ion-button full outline *ngIf="this.site == \'NU.nl Economie\'" class="ColorDarkAppNieuws">Lees verder op {{this.site}}</button>\n\n      <button (click)="openPagina(this.link)" ion-button full outline *ngIf="this.site == \'Tweakers\'" class="ColorDarkAppNieuws">Lees verder op {{this.site}}</button>\n\n      <button (click)="openPagina(this.link)" ion-button full outline *ngIf="this.site == \'KNVB\'" class="ColorDarkAppNieuws">Lees verder op {{this.site}}</button>\n\n      <button (click)="openPagina(this.link)" ion-button full outline *ngIf="this.site == \'Volkskrant\'" class="ColorDarkAppNieuws">Lees verder op {{this.site}}</button>\n\n      <button (click)="openPagina(this.link)" ion-button full outline *ngIf="this.site == \'VLKKE\'" class="ColorDarkAppNieuws">Lees verder op {{this.site}}</button>\n\n      <button (click)="openPagina(this.link)" ion-button full outline *ngIf="this.site == \'BTYL\'" class="ColorDarkAppNieuws">Lees verder op {{this.site}}</button>\n\n      <button (click)="openPagina(this.link)" ion-button full outline *ngIf="this.site == \'LBL\'" class="ColorDarkAppNieuws">Lees verder op {{this.site}}</button>\n\n      <!-- Social Buttons - Comments - likes - Share -->\n\n      <div id="socialLikeComments" class="socialLikeCommentsNieuws">\n\n        <button ion-button icon-start clear *ngIf="this.site == \'De Telegraaf\'"\n\n                class="ColorDarkAppShare"\n\n                (click)="shareInfo(this.title, this.image, this.link)">\n\n          <ion-icon name="share-alt"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-start clear *ngIf="this.site == \'NOS\'" class="ColorDarkAppShare"\n\n                (click)="shareInfo(this.title, this.image, this.link)">\n\n          <ion-icon name="share-alt"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-start clear *ngIf="this.site == \'NU.nl\'" class="ColorDarkAppShare"\n\n                (click)="shareInfo(this.title, this.image, this.link)">\n\n          <ion-icon name="share-alt"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-start clear *ngIf="this.site == \'Tweakers\'"\n\n                class="ColorDarkAppShare"\n\n                (click)="shareInfo(this.title, this.image, this.link)">\n\n          <ion-icon name="share-alt"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-start clear *ngIf="this.site == \'KNVB\'" class="ColorDarkAppShare"\n\n                (click)="shareInfo(this.title, this.image, this.link)">\n\n          <ion-icon name="share-alt"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-start clear *ngIf="this.site == \'Volkskrant\'" class="ColorDarkAppShare"\n\n                (click)="shareInfo(this.title, this.image, this.link)">\n\n          <ion-icon name="share-alt"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-start clear *ngIf="this.site == \'VLKKE\'" class="ColorDarkAppShare"\n\n                (click)="shareInfo(this.title, this.image, this.link)">\n\n          <ion-icon name="share-alt"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-start clear *ngIf="this.site == \'BTYL\'" class="ColorDarkAppShare"\n\n                (click)="shareInfo(this.title, this.image, this.link)">\n\n          <ion-icon name="share-alt"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-start clear *ngIf="this.site == \'LBL\'" class="ColorDarkAppShare"\n\n                (click)="shareInfo(this.title, this.image, this.link)">\n\n          <ion-icon name="share-alt"></ion-icon>\n\n        </button>\n\n        <!---->\n\n        <button class="socialTelegraaf" ion-button icon-start clear\n\n                *ngIf="this.site == \'De Telegraaf\' && this.liked == 0" [disabled]="disabled"\n\n                (click)="setLike(this.id)">\n\n          <ion-icon name="heart-outline" class="ColorDarkApp"></ion-icon>\n\n          <div class="ColorDarkAppTextDarkTheme">{{this.likes}}</div>\n\n        </button>\n\n        <button class="socialNOS" ion-button icon-start clear\n\n                *ngIf="this.site == \'NOS\' && this.liked == 0" [disabled]="disabled"\n\n                (click)="setLike(this.id)">\n\n          <ion-icon name="heart-outline" class="ColorDarkApp"></ion-icon>\n\n          <div class="ColorDarkAppTextDarkTheme"> {{this.likes}}</div>\n\n        </button>\n\n        <button class="socialNu" ion-button icon-start clear\n\n                *ngIf="this.site == \'NU.nl\' && this.liked == 0" [disabled]="disabled"\n\n                (click)="setLike(this.id)">\n\n          <ion-icon name="heart-outline" class="ColorDarkApp"></ion-icon>\n\n          <div class="ColorDarkAppTextDarkTheme">{{this.likes}}</div>\n\n        </button>\n\n        <button class="socialTweakers" ion-button icon-start clear\n\n                *ngIf="this.site == \'Tweakers\' && this.liked == 0" [disabled]="disabled"\n\n                (click)="setLike(this.id)">\n\n          <ion-icon name="heart-outline" class="ColorDarkApp"></ion-icon>\n\n          <div class="ColorDarkAppTextDarkTheme">{{this.likes}}</div>\n\n        </button>\n\n        <button class="socialKnvb" ion-button icon-start clear\n\n                *ngIf="this.site == \'KNVB\' && this.liked == 0" [disabled]="disabled"\n\n                (click)="setLike(this.id)">\n\n          <ion-icon name="heart-outline" class="ColorDarkApp"></ion-icon>\n\n          <div class="ColorDarkAppTextDarkTheme">{{this.likes}}</div>\n\n        </button>\n\n        <button class="socialKnvb" ion-button icon-start clear\n\n                *ngIf="this.site == \'Volkskrant\' && this.liked == 0" [disabled]="disabled"\n\n                (click)="setLike(this.id)">\n\n          <ion-icon name="heart-outline" class="ColorDarkApp"></ion-icon>\n\n          <div class="ColorDarkAppTextDarkTheme">{{this.likes}}</div>\n\n        </button>\n\n        <button class="socialKnvb" ion-button icon-start clear\n\n                *ngIf="this.site == \'VLKKE\' && this.liked == 0" [disabled]="disabled"\n\n                (click)="setLike(this.id)">\n\n          <ion-icon name="heart-outline" class="ColorDarkApp"></ion-icon>\n\n          <div class="ColorDarkAppTextDarkTheme">{{this.likes}}</div>\n\n        </button>\n\n        <button class="socialKnvb" ion-button icon-start clear\n\n                *ngIf="this.site == \'BTYL\' && this.liked == 0" [disabled]="disabled"\n\n                (click)="setLike(this.id)">\n\n          <ion-icon name="heart-outline" class="ColorDarkApp"></ion-icon>\n\n          <div class="ColorDarkAppTextDarkTheme">{{this.likes}}</div>\n\n        </button>\n\n        <button class="socialKnvb" ion-button icon-start clear\n\n                *ngIf="this.site == \'LBL\' && this.liked == 0" [disabled]="disabled"\n\n                (click)="setLike(this.id)">\n\n          <ion-icon name="heart-outline" class="ColorDarkApp"></ion-icon>\n\n          <div class="ColorDarkAppTextDarkTheme">{{this.likes}}</div>\n\n        </button>\n\n        <!---->\n\n        <button class="socialTelegraaf" ion-button icon-start clear\n\n                *ngIf="this.site == \'De Telegraaf\' && this.liked == 1"\n\n                (click)="dislike(this.id, this.title)">\n\n          <ion-icon name="heart" class="ColorDarkApp"></ion-icon>\n\n          <div class="ColorDarkAppTextDarkTheme">{{this.likes}}</div>\n\n        </button>\n\n        <button class="socialNOS" ion-button icon-start clear\n\n                *ngIf="this.site == \'NOS\' && this.liked == 1"\n\n                (click)="dislike(this.id, this.title)">\n\n          <ion-icon name="heart" class="ColorDarkApp"></ion-icon>\n\n          <div class="ColorDarkAppTextDarkTheme">{{this.likes}}</div>\n\n        </button>\n\n        <button class="socialNu" ion-button icon-start clear\n\n                *ngIf="this.site == \'NU.nl\' && this.liked == 1"\n\n                (click)="dislike(this.id, this.title)">\n\n          <ion-icon name="heart" class="ColorDarkApp"></ion-icon>\n\n          <div class="ColorDarkAppTextDarkTheme">{{this.likes}}</div>\n\n        </button>\n\n        <button class="socialTweakers" ion-button icon-start clear\n\n                *ngIf="this.site == \'Tweakers\' && this.liked == 1"\n\n                (click)="dislike(this.id, this.title)">\n\n          <ion-icon name="heart" class="ColorDarkApp"></ion-icon>\n\n          <div class="ColorDarkAppTextDarkTheme">{{this.likes}}</div>\n\n        </button>\n\n        <button class="socialKnvb" ion-button icon-start clear\n\n                *ngIf="this.site == \'KNVB\' && this.liked == 1"\n\n                (click)="dislike(this.id, this.title)">\n\n          <ion-icon name="heart" class="ColorDarkApp"></ion-icon>\n\n          <div class="ColorDarkAppTextDarkTheme">{{this.likes}}</div>\n\n        </button>\n\n        <button class="socialKnvb" ion-button icon-start clear\n\n                *ngIf="this.site == \'Volkskrant\' && this.liked == 1"\n\n                (click)="dislike(this.id, this.title)">\n\n          <ion-icon name="heart" class="ColorDarkApp"></ion-icon>\n\n          <div class="ColorDarkAppTextDarkTheme">{{this.likes}}</div>\n\n        </button>\n\n        <button class="socialKnvb" ion-button icon-start clear\n\n                *ngIf="this.site == \'VLKKE\' && this.liked == 1"\n\n                (click)="dislike(this.id, this.title)">\n\n          <ion-icon name="heart" class="ColorDarkApp"></ion-icon>\n\n          <div class="ColorDarkAppTextDarkTheme">{{this.likes}}</div>\n\n        </button>\n\n        <button class="socialKnvb" ion-button icon-start clear\n\n                *ngIf="this.site == \'BTYL\' && this.liked == 1"\n\n                (click)="dislike(this.id, this.title)">\n\n          <ion-icon name="heart" class="ColorDarkApp"></ion-icon>\n\n          <div class="ColorDarkAppTextDarkTheme">{{this.likes}}</div>\n\n        </button>\n\n        <button class="socialKnvb" ion-button icon-start clear\n\n                *ngIf="this.site == \'LBL\' && this.liked == 1"\n\n                (click)="dislike(this.id, this.title)">\n\n          <ion-icon name="heart" class="ColorDarkApp"></ion-icon>\n\n          <div class="ColorDarkAppTextDarkTheme">{{this.likes}}</div>\n\n        </button>\n\n        <!---->\n\n        <button ion-button icon-start clear *ngIf="this.site == \'De Telegraaf\'"\n\n                class="socialTelegraaf" (click)="viewComments({ record: this.id })">\n\n          <ion-icon name="chatbubbles" class="ColorDarkApp"></ion-icon>\n\n          <div class="ColorDarkAppTextDarkTheme">{{this.comments}}</div>\n\n        </button>\n\n        <button ion-button icon-start clear *ngIf="this.site == \'NOS\'" class="socialNOS"\n\n                (click)="viewComments({ record: this.id })">\n\n          <ion-icon name="chatbubbles" class="ColorDarkApp"></ion-icon>\n\n          <div class="ColorDarkAppTextDarkTheme">{{this.comments}}</div>\n\n        </button>\n\n        <button ion-button icon-start clear *ngIf="this.site == \'NU.nl\'" class="socialNu"\n\n                (click)="viewComments({ record: this.id })">\n\n          <ion-icon name="chatbubbles" class="ColorDarkApp"></ion-icon>\n\n          <div class="ColorDarkAppTextDarkTheme">{{this.comments}}</div>\n\n        </button>\n\n        <button ion-button icon-start clear *ngIf="this.site == \'Tweakers\'"\n\n                class="socialTweakers"\n\n                (click)="viewComments({ record: this.id })">\n\n          <ion-icon name="chatbubbles" class="ColorDarkApp"></ion-icon>\n\n          <div class="ColorDarkAppTextDarkTheme">{{this.comments}}</div>\n\n        </button>\n\n        <button ion-button icon-start clear *ngIf="this.site == \'KNVB\'" class="socialKnvb"\n\n                (click)="viewComments({ record: this.id })">\n\n          <ion-icon name="chatbubbles" class="ColorDarkApp"></ion-icon>\n\n          <div class="ColorDarkAppTextDarkTheme">{{this.comments}}</div>\n\n        </button>\n\n        <button ion-button icon-start clear *ngIf="this.site == \'Volkskrant\'" class="socialKnvb"\n\n                (click)="viewComments({ record: this.id })">\n\n          <ion-icon name="chatbubbles" class="ColorDarkApp"></ion-icon>\n\n          <div class="ColorDarkAppTextDarkTheme">{{this.comments}}</div>\n\n        </button>\n\n        <button ion-button icon-start clear *ngIf="this.site == \'VLKKE\'" class="socialKnvb"\n\n                (click)="viewComments({ record: this.id })">\n\n          <ion-icon name="chatbubbles" class="ColorDarkApp"></ion-icon>\n\n          <div class="ColorDarkAppTextDarkTheme">{{this.comments}}</div>\n\n        </button>\n\n        <button ion-button icon-start clear *ngIf="this.site == \'BTYL\'" class="socialKnvb"\n\n                (click)="viewComments({ record: this.id })">\n\n          <ion-icon name="chatbubbles" class="ColorDarkApp"></ion-icon>\n\n          <div class="ColorDarkAppTextDarkTheme">{{this.comments}}</div>\n\n        </button>\n\n        <button ion-button icon-start clear *ngIf="this.site == \'LBL\'" class="socialKnvb"\n\n                (click)="viewComments({ record: this.id })">\n\n          <ion-icon name="chatbubbles" class="ColorDarkApp"></ion-icon>\n\n          <div class="ColorDarkAppTextDarkTheme">{{this.comments}}</div>\n\n        </button>\n\n        <!---->\n\n      </div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\nieuws\nieuws.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], NieuwsPage);
    return NieuwsPage;
}());

//# sourceMappingURL=nieuws.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_feed_feed__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_menu_menu__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profiel_profiel__ = __webpack_require__(97);
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
    function MyApp(platform, statusBar, splashScreen, settings, modalCtrl, menuCtrl, events, alertCtrl, menuProvider, network, toastCtrl, storage) {
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
        this.storage = storage;
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
            if (_this.network.type == "none") {
                _this.storage.get("profilepicture").then(function (foto) {
                    _this.events.publish('profilepicture', foto);
                });
                _this.storage.get("username").then(function (username) {
                    _this.events.publish('username', username);
                });
                console.log("Profielfoto & username zijn nu offline ingeladen");
            }
            // Voor de menu om de username en profiel foto te setten live
            _this.events.subscribe("username", function (data) {
                _this.username = data;
            });
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
        this.platform.registerBackButtonAction(function () {
            _this.confirmAlert = _this.alertCtrl.create({
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
            _this.confirmAlert.present();
        });
    };
    MyApp.prototype.Uitloggen = function () {
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userEmailVerified');
        localStorage.removeItem('userRole');
        localStorage.removeItem('userCreationDate');
        localStorage.removeItem('sessionToken');
        localStorage.removeItem('profilePicture');
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.goProfielFoto = function () {
        var _this = this;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_11__pages_profiel_profiel__["a" /* ProfielPage */]);
        this.storage.get("profilepicture").then(function (foto) {
            _this.events.publish('profilepicture', foto);
        });
        this.menuCtrl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\app\app.html"*/'<!-- SplashScreen -->\n\n<ion-grid style="height: 100%" class="gridPadding">\n\n  <ion-row justify-content-center align-items-center style="height: 100%" *ngIf="showSplash" class="splash">\n\n    <div class="spinner">\n\n      <div class="NewsAgeLogo">\n\n        <img class="NewsAge" src="../assets/imgs/NewsAgeLogo.png">\n\n      </div>\n\n      <div class="loader">\n\n        <img src="../assets/svg/spinner/tail-spinSplash.svg">\n\n      </div>\n\n    </div>\n\n  </ion-row>\n\n</ion-grid>\n\n<!--  -->\n\n<!-- Menu -->\n\n<ion-menu [class]="selectedTheme" [content]="content" [swipeEnabled]="false">\n\n    <ion-content id="contentAnimation">\n\n        <ion-list>\n\n            <ion-navbar class="menuNavbar">\n\n                <ion-grid class="gridMenu">\n\n                    <ion-col col-9 class="menuCol">\n\n                        <img (click)="goProfielFoto()" src="{{this.profilepicture}}" class="avatar-menu"/>\n\n                        <p ngClass="usernameMenu">{{this.username}}</p>\n\n                    </ion-col>\n\n                </ion-grid>\n\n            </ion-navbar>\n\n            <ion-item ion-item *ngFor="let p of pages;  let i=index" (click)="openPage(p, i);">\n\n               <ion-icon slot="start" [name]="p.icon"></ion-icon>\n\n                <span ion-text class="menuTitle">\n\n                      {{p.title}}\n\n                      <span><ion-icon [name]="selectedMenu == i? \'arrow-dropdown\' : \'arrow-dropright\'" *ngIf="p.subPages" float-right></ion-icon></span>\n\n                </span>\n\n                <!--Child Pages  -->\n\n                <ion-list no-lines [hidden]="selectedMenu != i">\n\n                    <ion-item no-border *ngFor="let subPage of p.subPages;let i2=index" text-wrap\n\n                              (click)="openPage(subPage)">\n\n                         <ion-icon slot="start" [name]="subPage.icon"></ion-icon>\n\n                        <span ion-text color="color2">&nbsp;{{subPage.title}}</span>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </ion-item>\n\n            <ion-item (click)="Uitloggen()" menuClose>\n\n                <ion-icon name="log-out"></ion-icon>\n\n                <span class="loguutIcon">Uitloggen</span>\n\n            </ion-item>\n\n        </ion-list>\n\n    </ion-content>\n\n    <ion-footer class="footerMenu">\n\n        <ion-toolbar class="toolbarFooter">\n\n            <div class="versienummer"><span class="newsAgeFooter">©NewsAge </span><span class="versionnummer">v</span>8.1.3</div>\n\n        </ion-toolbar>\n\n    </ion-footer>\n\n</ion-menu>\n\n\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" [class]="selectedTheme" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\app\app.html"*/,
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavorietenPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorieten__ = __webpack_require__(391);
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

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_admin__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profiel_profiel__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__privacybeleid_privacybeleid__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs__);
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
    function SettingsPage(settings, platform, navCtrl, alertCtrl, http, events, toastCtrl) {
        var _this = this;
        this.settings = settings;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.theme = localStorage.getItem('themeColor');
        this.timer = false;
        this.TIMER_IN_MS = 22000;
        this.timerVal = 20;
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
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userEmailVerified');
        localStorage.removeItem('userRole');
        localStorage.removeItem('userCreationDate');
        localStorage.removeItem('sessionToken');
        localStorage.removeItem('profilePicture');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    SettingsPage.prototype.resendMail = function () {
        var _this = this;
        this.disabled = true;
        setTimeout(function () {
            _this.disabled = false;
        }, this.TIMER_IN_MS);
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
                _this.startTimer();
                var toast = _this.toastCtrl.create({
                    message: 'De verificatiemail is opnieuw verstuurd naar: ' + _this.userEmail,
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
        });
    };
    SettingsPage.prototype.startTimer = function () {
        var _this = this;
        this.timerVar = __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].interval(1000).subscribe(function (x) {
            _this.timerVal = x;
            if (x == 20) {
                _this.timerVar.unsubscribe();
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__profiel_profiel__["a" /* ProfielPage */]);
    };
    SettingsPage.prototype.privacyBeleid = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__privacybeleid_privacybeleid__["a" /* PrivacybeleidPage */]);
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
    ], SettingsPage.prototype, "nav", void 0);
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\settings\settings.html"*/'<ion-header no-border-bottom>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle right class="fakeCenter">\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Instellingen</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-card *ngIf="emailVerified == 0" class="cardVerification">\n\n        <div class="containerVerification">\n\n            <ion-card-header class="verificationHeader">\n\n                <ion-icon name="alert" class="alertIcon"></ion-icon>\n\n                Verifieer je email\n\n            </ion-card-header>\n\n            <ion-card-content class="verificationContent">\n\n                <p class="emailVerificationText">Controleer uw e-mailadres en volg de instructies om uw account te verifiëren. Als u een e-mail niet hebt ontvangen of als het is verlopen, kunt u opnieuw een verzenden.</p>\n\n                <button  *ngIf="!disabled" [disabled]="disabled" ion-button block (click)="resendMail()" class="buttonStuurOpnieuwVerification"><span class="verifyText">Verifieer</span></button>\n\n                <button  *ngIf="disabled && timerVal <= 10" [disabled]="disabled" ion-button block (click)="resendMail()" class="buttonStuurOpnieuwVerification"><span class="verifyText">00:{{20 - timerVal}}</span></button>\n\n                <button  *ngIf="disabled && timerVal > 10" [disabled]="disabled" ion-button block (click)="resendMail()" class="buttonStuurOpnieuwVerification"><span class="verifyText">00:0{{20 - timerVal}}</span></button>\n\n            </ion-card-content>\n\n        </div>\n\n    </ion-card>\n\n    <ion-item class="" (click)="goProfiel()">\n\n        <ion-label class="DarkLabel">\n\n            <ion-icon name="person" class="iconInstellingen"></ion-icon>\n\n            Bewerk Profiel\n\n        </ion-label>\n\n    </ion-item>\n\n    <ion-item class="" (click)="rapporteer()">\n\n        <ion-label class="DarkLabel">\n\n            <ion-icon name="warning" class="iconInstellingen"></ion-icon>\n\n            Raporteer probleem\n\n        </ion-label>\n\n    </ion-item>\n\n    <ion-item class="">\n\n        <ion-label class="DarkLabel">\n\n            <ion-icon name="moon" class="iconInstellingen"></ion-icon>\n\n            Dark Theme\n\n        </ion-label>\n\n        <ion-toggle [(ngModel)]="toggleStatus" (ionChange)="toggleAppTheme()"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item class="" (click)="privacyBeleid()">\n\n        <ion-label class="DarkLabel">\n\n            <ion-icon name="eye-off" class="iconInstellingen"></ion-icon>\n\n            Privacy Beleid\n\n        </ion-label>\n\n    </ion-item>\n\n    <ion-item class="" *ngIf="rol == 1" (click)="openAdmin()">\n\n        <ion-label class="DarkLabel">\n\n            <ion-icon name="construct" class="iconInstellingen"></ion-icon>\n\n            Admin panel\n\n        </ion-label>\n\n    </ion-item>\n\n    <ion-item class="" (click)="uitloggen()">\n\n        <ion-label class="DarkLabel">\n\n            <ion-icon name="log-out" class="iconInstellingen"></ion-icon>\n\n            Uitloggen\n\n        </ion-label>\n\n    </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\settings\settings.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfielPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wijzigwachtwoord_wijzigwachtwoord__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_photo_viewer__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_settings_settings__ = __webpack_require__(55);
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
    function ProfielPage(navCtrl, navParams, alertCtrl, camera, actionSheetCtrl, http, events, photoViewer, storage, network, settings) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.http = http;
        this.events = events;
        this.photoViewer = photoViewer;
        this.storage = storage;
        this.network = network;
        this.settings = settings;
        this.id = localStorage.getItem("userId");
        this.myprofilepic = localStorage.getItem("profilePicture");
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
        if (this.network.type != "none") {
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
        }
        else if (this.network.type == "none") {
            // Get offline profilepicture
            this.storage.get("profilepicture").then(function (foto) {
                _this.myphoto = foto;
            });
            // Get offline username
            this.storage.get("username").then(function (username) {
                _this.username = username;
            });
            // Get offline email
            this.storage.get("email").then(function (email) {
                _this.email = email;
            });
            // Get offline email verified status
            this.storage.get("emailverified").then(function (emailverified) {
                _this.emailVerified = emailverified;
            });
            // Get offline user role
            this.storage.get("rol").then(function (rol) {
                _this.rol = rol;
            });
            // Get offline user creation date
            this.storage.get("creationdate").then(function (creationdate) {
                _this.creationdate = creationdate;
            });
        }
    }
    ProfielPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Kies',
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
        if (this.network.type == "none") {
            var alert_1 = this.alertCtrl.create({
                title: "Geen verbinding",
                subTitle: "U heeft geen werkende internet verbinding, probeer het later opnieuw.",
                buttons: [{
                        text: "OK", handler: function (data) {
                        }
                    }],
            });
            alert_1.present();
        }
        else if (this.network.type != "none") {
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
                            subTitle: "Uw profiel is succesvol bijgewerkt",
                            buttons: [{
                                    text: "OK", handler: function (data) {
                                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__settings_settings__["a" /* SettingsPage */]);
                                    }
                                }],
                        });
                        alert_2.present();
                        _this.events.publish("username", _this.username);
                        _this.events.publish("profilepicture", _this.myphoto);
                        if (_this.storage.set('profilepicture', _this.myphoto)) {
                            console.log("Profiel foto is geset in Storage : " + _this.myphoto);
                        }
                    }
                    else if (res == "No data set!") {
                        var alert_3 = _this.alertCtrl.create({
                            title: "Mislukt",
                            subTitle: "Uw profiel kon niet worden bijgewerkt, probeer het later opnieuw.",
                            buttons: ['OK']
                        });
                        alert_3.present();
                    }
                });
            }
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__settings_settings__["a" /* SettingsPage */]);
    };
    ProfielPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.navBar.backButtonClick = function (e) {
            _this.returnSettings();
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* Navbar */])
    ], ProfielPage.prototype, "navBar", void 0);
    ProfielPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-profiel',template:/*ion-inline-start:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\profiel\profiel.html"*/'<ion-header>\n\n  <ion-navbar #navbar>\n\n    <ion-title class="profielPadding">Profiel</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="updateProfile()">\n\n        <ion-icon name="checkmark"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-grid class="gridMenu">\n\n      <ion-col col-12 class="menuCol">\n\n        <div class="alignCenter">\n\n          <img src="{{myphoto}}" class="avatar-profiel" (click)="presentActionSheet()" />\n\n          <div class="fotoWijzigen">\n\n            <h5 class="fotoWijzigenProfiel" (click)="presentActionSheet()">Foto Wijzigen</h5>\n\n          </div>\n\n        </div>\n\n\n\n        <form novalidate [formGroup]="form">\n\n          <div class="form-group">\n\n            <ion-item [ngClass]="{ \'ng-touched\' : form.get(\'username\').touched }">>\n\n              <ion-label floating>Gebruikersnaam</ion-label>\n\n              <ion-input *ngIf="selectedTheme == \'light-theme\'" type="text" placeholder="{{username}}" value="{{username}}" formControlName="username" class="form-control"></ion-input>\n\n              <ion-input *ngIf="selectedTheme == \'dark-theme\'" type="text" placeholder="{{username}}" value="{{username}}" formControlName="username" class="form-controldark"></ion-input>\n\n            </ion-item>\n\n          </div>\n\n          <div *ngIf="form.get(\'username\').touched && form.get(\'username\').invalid" class="alert alert-danger" required>\n\n            <div class="validatieText" *ngIf="form.get(\'username\').hasError(\'required\')">Naam moet ingevuld zijn.</div>\n\n            <div class="validatieText" *ngIf="form.get(\'username\').hasError(\'pattern\')">Ongeldige naam.</div>\n\n            <div class="validatieText" *ngIf="form.get(\'username\').hasError(\'minLength\')">De minimale lengte zijn 3 letters.</div>\n\n          </div>\n\n\n\n          <div class="form-group">\n\n            <ion-item [ngClass]="{ \'ng-touched\' : form.get(\'email\').touched }">\n\n              <ion-label floating>E-mail</ion-label>\n\n              <ion-input *ngIf="selectedTheme == \'light-theme\'" type="email" placeholder="{{email}}" value="{{email}}" formControlName="email" class="form-control"></ion-input>\n\n              <ion-input *ngIf="selectedTheme == \'dark-theme\'" type="email" placeholder="{{email}}" value="{{email}}" formControlName="email" class="form-controldark"></ion-input>\n\n            </ion-item>\n\n          </div>\n\n          <div *ngIf="form.get(\'email\').touched && form.get(\'email\').invalid" class="alert alert-danger" required>\n\n            <div class="validatieText" *ngIf="form.get(\'email\').hasError(\'required\')">Email moet ingevuld zijn</div>\n\n            <div class="validatieText" *ngIf="form.get(\'email\').hasError(\'pattern\')">Ongeldige Email!</div>\n\n          </div>\n\n\n\n        </form>\n\n        <!--<h6 class="wachtwoordWijzigen" (click)="wijzigWachtwoord()">Wijzig Wachtwoord</h6>-->\n\n      </ion-col>\n\n    </ion-grid>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gazoh-PC\Desktop\Projecten\News-App\src\pages\profiel\profiel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_photo_viewer__["a" /* PhotoViewer */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_10__providers_settings_settings__["a" /* SettingsProvider */]])
    ], ProfielPage);
    return ProfielPage;
}());

//# sourceMappingURL=profiel.js.map

/***/ })

},[392]);
//# sourceMappingURL=main.js.map