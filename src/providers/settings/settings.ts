import {BehaviorSubject} from 'rxjs/Rx';
import { Injectable } from '@angular/core';

/*
  Generated class for the SettingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SettingsProvider {
    private theme: BehaviorSubject<string>;
  constructor() {
    this.theme = new BehaviorSubject('light-theme')
  }
    setActiveTheme(val) {
        this.theme.next(val);
    }

    getActiveTheme() {
        return this.theme.asObservable();
    }
}
