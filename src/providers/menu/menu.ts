import {HttpClient} from '@angular/common/http';
import {Component, Injectable, ViewChild} from '@angular/core';
import {FeedPage} from "../../pages/feed/feed";
import {SportPage} from "../../pages/sport/sport";
import {EconomiePage} from "../../pages/economie/economie";
import {TechPage} from "../../pages/tech/tech";
import {SettingsPage} from "../../pages/settings/settings";
import {TutorialPage} from "../../pages/tutorial/tutorial";
import {FavorietenPage} from "../../pages/favorieten/favorieten";
import {VermaakPage} from "../../pages/vermaak/vermaak";
import {SourcesPage} from "../../pages/sources/sources";
import {LifestylePage} from "../../pages/lifestyle/lifestyle";
import {HomePage} from "../../pages/home/home";
import {Nav} from 'ionic-angular';


@Injectable()
export class MenuProvider {
    @ViewChild(Nav) nav: Nav;

    constructor(public http: HttpClient) {

    }

    getSideMenus() {
        return [{
            title: 'Startpagina',
            component: FeedPage,
            icon: 'home'
        },
            {
                title: 'Favorieten',
                component: FavorietenPage,
                icon: 'heart'
            },
            {
                title: 'Bronnen',
                component: SourcesPage,
                icon: 'brush'
            },
            {
                title: 'Categorieen',
                icon: 'apps',
                subPages: [
                    {
                        title: 'Sport',
                        component: SportPage,
                        icon: 'football'
                    },
                    {
                        title: 'Technologie',
                        component: TechPage,
                        icon: 'desktop'
                    },
                    {
                        title: 'Financieel',
                        component: EconomiePage,
                        icon: 'cash'
                    },
                    {
                        title: 'Lifestyle',
                        component: LifestylePage,
                        icon: 'woman'
                    }
                ]
            },
            {
                title: 'Tutorial',
                component: TutorialPage,
                icon: 'book'
            },
            {
                title: 'Instellingen',
                component: SettingsPage,
                icon: 'settings'
            }
        ]
    }

    uitloggen() {
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userEmailVerified');
        localStorage.removeItem('userRole');
        localStorage.removeItem('userCreationDate');
        localStorage.removeItem('sessionToken');
        localStorage.removeItem('profilePicture');

    }

}
