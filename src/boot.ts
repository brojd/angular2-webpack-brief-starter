// use this file to bootstrap your application

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app/core/components/app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import './app/global_styles/index.pcss';

let module: any;

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

if (module.hot) {
  module.hot.accept();
}