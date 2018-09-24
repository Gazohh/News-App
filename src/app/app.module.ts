import {BrowserModule} from '@angular/platform-browser';
import {Component, ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {RegisterPage} from "../pages/register/register";
import {HttpClientModule} from '@angular/common/http';
import {FavorietenPage} from "../pages/favorieten/favorieten";
import {FeedPage} from "../pages/feed/feed";
import {RssProvider} from '../providers/rss/rss';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';
import {FavorietenPageModule} from "../pages/favorieten/favorieten.module";
import {FeedPageModule} from "../pages/feed/feed.module";
import {RegisterPageModule} from "../pages/register/register.module";



@NgModule({
    declarations: [
        MyApp,
        HomePage,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(MyApp, {
            scrollAssist: false,
            autoFocusAssist: false
        }),
        ReactiveFormsModule,
        IonicStorageModule.forRoot(),
        FavorietenPageModule,
        FeedPageModule,
        RegisterPageModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        RegisterPage,
        FavorietenPage,
        FeedPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        HttpClientModule,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        RssProvider
    ]

})
export class AppModule {

}
