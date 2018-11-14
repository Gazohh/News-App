import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeedPage } from "../../pages/feed/feed";
import { SportPage } from "../../pages/sport/sport";
import { EconomiePage } from "../../pages/economie/economie";
import { MisdaadPage } from "../../pages/misdaad/misdaad";
import { TechPage } from "../../pages/tech/tech";
import { AutoPage } from "../../pages/auto/auto";
import { SettingsPage } from "../../pages/settings/settings";
import { TutorialPage } from "../../pages/tutorial/tutorial";
import { FavorietenPage } from "../../pages/favorieten/favorieten";
import { VermaakPage } from "../../pages/vermaak/vermaak";
import { SourcesPage } from "../../pages/sources/sources";

@Injectable()
export class MenuProvider {

  constructor(public http: HttpClient) {

  }

  getSideMenus() {
    return [{
      title: 'Startpagina',
      component: FeedPage,
      icon: 'home'
    },
    {
      title: 'Sources',
      component: SourcesPage,
      icon: 'star'
    },
    {
        title: 'Categorieen',
        icon: 'filing',
        subPages: [{
            title: 'Sport',
            component: SportPage,
            icon: 'football'
        }, {
            title: 'Economie',
            component: EconomiePage,
            icon: 'cash'
        }, {
            title: 'Misdaad',
            component: MisdaadPage,
            icon: 'warning'
        }, {
            title: 'Technologie',
            component: TechPage,
            icon: 'desktop'
        }, {
            title: "Auto's",
            component: AutoPage,
            icon: 'car'
        }, {
            title: 'Entertainment',
            component: VermaakPage,
            icon: 'contacts'
        }]
    },
    {
      title: 'Favorieten',
      component: FavorietenPage,
      icon: 'heart'
    },
    {
      title: 'Notificaties',
      component: SettingsPage,
      icon: 'notifications'
    },
    {
      title: 'Tutorial',
      component: TutorialPage,
      icon: 'map'
    },
    {
      title: 'Instellingen',
      component: SettingsPage,
      icon: 'settings'
    }
  ]
  }

}
