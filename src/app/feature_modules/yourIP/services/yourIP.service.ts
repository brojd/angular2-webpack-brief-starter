import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class YourIPService {

  constructor(private http: Http) {}

  getIP() {
    this.http.get('https://jsonip.com/')
      .map(res => { debugger; });
  }

}