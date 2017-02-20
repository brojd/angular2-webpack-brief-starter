import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Custom feature modules
import { TimerModule } from '../feature_modules/clock';

// App component used during bootstrap
import { AppComponent }  from './components/app/app.component';

@NgModule({
  imports:      [ BrowserModule, TimerModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }