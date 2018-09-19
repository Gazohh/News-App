import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
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
import {SettingsProvider} from "../providers/settings/settings";
import {SettingsPage} from "../pages/settings/settings";


@NgModule({
    declarations: [
        MyApp,
        HomePage,
        RegisterPage,
        FavorietenPage,
        FeedPage,
        SettingsPage

    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(MyApp, {
            scrollAssist: false,
            autoFocusAssist: false
        }),
        ReactiveFormsModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        RegisterPage,
        FavorietenPage,
        FeedPage,
        SettingsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        HttpClientModule,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        RssProvider,
        SettingsProvider
    ]

})
export class AppModule {

}
