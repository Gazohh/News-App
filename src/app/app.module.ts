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
import {AboutPage} from "../pages/about/about";
import {CommentsPage} from "../pages/comments/comments";


//
// Modules
//
import {NieuwsPageModule} from "../pages/nieuws/nieuws.module";
import {CategoryPageModule} from "../pages/category/category.module";
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {IonicStorageModule} from '@ionic/storage';
import {FavorietenPageModule} from "../pages/favorieten/favorieten.module";
import {FeedPageModule} from "../pages/feed/feed.module";
import {RegisterPageModule} from "../pages/register/register.module";
import {TutorialPageModule} from "../pages/tutorial/tutorial.module";

//
// Providers
//
import { InfouserProvider } from '../providers/infouser/infouser';

@NgModule({
  declarations: [
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
    AboutPage,
    CommentsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      mode: "md",
      scrollAssist: false,
      autoFocusAssist: false
    }),
    ReactiveFormsModule,
    IonicStorageModule.forRoot(),
    FavorietenPageModule,
    FeedPageModule,
    RegisterPageModule,
    NieuwsPageModule,
    CategoryPageModule,
    TutorialPageModule
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
    AboutPage,
    CommentsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SettingsProvider,
    Network,
    SettingsProvider,
    InAppBrowser,
    ScreenOrientation,
    HeaderColor,
    Camera,
    File,
    FileTransfer,
    InfouserProvider
  ]

})
export class AppModule {

}
