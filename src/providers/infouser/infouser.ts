import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the InfouserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InfouserProvider {

  constructor(public http: HttpClient) {

  }
  private _username: string;

    get name(): string
    {
        return this._username;
    }
    set name(name: string)
    {
        this._username = name;
    }

    // let kaas = new InfouserProvider();
    // kaas.name = "test";
    // console.log(kaas.name);
}
