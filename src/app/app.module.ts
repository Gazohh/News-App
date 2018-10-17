import { BrowserModule } from '@angular/platform-browser';
import { Component, ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from "../pages/register/register";
import { HttpClientModule } from '@angular/common/http';
import { FavorietenPage } from "../pages/favorieten/favorieten";
import { FeedPage } from "../pages/feed/feed";
import { ReactiveFormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';
import { FavorietenPageModule } from "../pages/favorieten/favorieten.module";
import { FeedPageModule } from "../pages/feed/feed.module";
import { RegisterPageModule } from "../pages/register/register.module";
import { SettingsPage } from "../pages/settings/settings";
import { SettingsProvider } from '../providers/settings/settings';
import { Network } from '@ionic-native/network';
import { CategoryPage } from "../pages/category/category";
import { SportPage } from "../pages/sport/sport";
import { EconomiePage } from "../pages/economie/economie";
import { AnimatesDirective, AnimationService } from 'css-animator';
import { AutoPage } from "../pages/auto/auto";
import { MisdaadPage } from "../pages/misdaad/misdaad";
import { TechPage } from "../pages/tech/tech";
import { VermaakPage } from "../pages/vermaak/vermaak";
import { NieuwsPage } from "../pages/nieuws/nieuws";
import { NieuwsPageModule } from "../pages/nieuws/nieuws.module";
import { CategoryPageModule } from "../pages/category/category.module";
import { AdminPage } from "../pages/admin/admin";
import { AdminPageModule } from "../pages/admin/admin.module";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SourcesPage } from "../pages/sources/sources";
import { TutorialPageModule } from "../pages/tutorial/tutorial.module";

import { SocialSharing } from '@ionic-native/social-sharing';


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
    AnimatesDirective,
    AdminPage,
    SourcesPage
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
    NieuwsPage,
    AdminPage,
    SourcesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SettingsProvider,
    Network,
    SocialSharing,
    SettingsProvider,
    AnimationService,
    SocialSharing,
    InAppBrowser
  ]

})
export class AppModule {

}
