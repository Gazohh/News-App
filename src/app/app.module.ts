import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {MyApp} from './app.component';
import {SettingsProvider} from '../providers/settings/settings';
import {Network} from '@ionic-native/network';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {ScreenOrientation} from '@ionic-native/screen-orientation';
import {HeaderColor} from '@ionic-native/header-color';
import {File} from '@ionic-native/file';
import {FileTransfer} from '@ionic-native/file-transfer';
import {Camera} from '@ionic-native/camera';
import {Geolocation} from '@ionic-native/geolocation';
import { PhotoViewer } from '@ionic-native/photo-viewer';


//
// Pages
//
import {HomePage} from '../pages/home/home';
import {SettingsPage} from "../pages/settings/settings";
import {SourcesPage} from "../pages/sources/sources";
import {ProfielPage} from "../pages/profiel/profiel";
import {SportPage} from "../pages/sport/sport";
import {EconomiePage} from "../pages/economie/economie";
import {AutoPage} from "../pages/auto/auto";
import {MisdaadPage} from "../pages/misdaad/misdaad";
import {TechPage} from "../pages/tech/tech";
import {AdminPage} from "../pages/admin/admin";
import {CommentsPage} from "../pages/comments/comments";
import {VermaakPage} from "../pages/vermaak/vermaak";
import {WijzigwachtwoordPage} from "../pages/wijzigwachtwoord/wijzigwachtwoord";


//
// Modules
//
import {NieuwsPageModule} from "../pages/nieuws/nieuws.module";
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {IonicStorageModule} from '@ionic/storage';
import {FavorietenPageModule} from "../pages/favorieten/favorieten.module";
import {FeedPageModule} from "../pages/feed/feed.module";
import {RegisterPageModule} from "../pages/register/register.module";
import {TutorialPageModule} from "../pages/tutorial/tutorial.module";
import {SettingsPageModule} from "../pages/settings/settings.module";
import {SportPageModule} from "../pages/sport/sport.module";
import {EconomiePageModule} from "../pages/economie/economie.module";
import {AutoPageModule} from "../pages/auto/auto.module";
import {MisdaadPageModule} from "../pages/misdaad/misdaad.module";
import {TechPageModule} from "../pages/tech/tech.module";
import {AdminPageModule} from "../pages/admin/admin.module";
import {SourcesPageModule} from "../pages/sources/sources.module";
import {ProfielPageModule} from "../pages/profiel/profiel.module";
import {WijzigwachtwoordPageModule} from "../pages/wijzigwachtwoord/wijzigwachtwoord.module";
import {CommentsPageModule} from "../pages/comments/comments.module";
import {VermaakPageModule} from "../pages/vermaak/vermaak.module";
import {PrivacybeleidPageModule} from "../pages/privacybeleid/privacybeleid.module";
import { CacheModule } from "ionic-cache";

//
// Providers
//
import {MenuProvider} from '../providers/menu/menu';
import {SocialSharing} from "@ionic-native/social-sharing";
import { RestApiProvider } from '../providers/rest-api/rest-api';


@NgModule({
    declarations: [
        MyApp,
        HomePage
    ],
    imports: [
        IonicModule.forRoot(MyApp, {
            mode: "md",
            scrollAssist: false,
            autoFocusAssist: false
        }),
        CacheModule.forRoot(),
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        IonicStorageModule.forRoot(),
        FavorietenPageModule,
        FeedPageModule,
        RegisterPageModule,
        NieuwsPageModule,
        TutorialPageModule,
        SettingsPageModule,
        SportPageModule,
        EconomiePageModule,
        AutoPageModule,
        MisdaadPageModule,
        TechPageModule,
        AdminPageModule,
        SourcesPageModule,
        ProfielPageModule,
        CommentsPageModule,
        WijzigwachtwoordPageModule,
        VermaakPageModule,
        PrivacybeleidPageModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        SettingsPage,
        SportPage,
        EconomiePage,
        AutoPage,
        MisdaadPage,
        TechPage,
        AdminPage,
        SourcesPage,
        ProfielPage,
        CommentsPage,
        WijzigwachtwoordPage,
        VermaakPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        HttpClientModule,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        SettingsProvider,
        Network,
        SettingsProvider,
        InAppBrowser,
        ScreenOrientation,
        HeaderColor,
        Camera,
        File,
        FileTransfer,
        MenuProvider,
        SocialSharing,
        Geolocation,
        PhotoViewer,
    RestApiProvider

    ]

})
export class AppModule {

}
