import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataweerProvider {
  dataweer:any;
  title: string;

  constructor(public http: HttpClient) {}

   getRemoteData() {
     this.http.get('https://jsonplaceholder.typicode.com/todos/2').subscribe((data: any) => {
         this.dataweer = data;
         this.title = this.dataweer.title;
         console.log(this.dataweer.id);
       },
         (error: any) => {
           console.dir(error);
         });
  }
}
