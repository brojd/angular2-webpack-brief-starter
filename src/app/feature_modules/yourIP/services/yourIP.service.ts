import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class YourIPService {

  constructor(private http: Http) {}

  getIP() {
    return this.http.get('https://jsonip.com/')
      .map(res => res.json());
  }

}