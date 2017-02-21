import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Custom feature modules
import { ClockModule } from '../feature_modules/clock';
import { YourIPModule } from '../feature_modules/yourIP';

// App component used during bootstrap
import { AppComponent }  from './components/app/app.component';

@NgModule({
  imports:      [ BrowserModule, ClockModule, YourIPModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }