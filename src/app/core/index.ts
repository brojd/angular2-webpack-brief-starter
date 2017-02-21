import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

// Custom feature modules
import { ClockModule } from '../feature_modules/clock';
import { YourIPModule } from '../feature_modules/yourIP';

// App routes
import { routes } from './routes';

// App component used during bootstrap
import { AppComponent }  from './components/app/app.component';


@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes, { useHash: true }), ClockModule, YourIPModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }