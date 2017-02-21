import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { SharedModule } from '../../shared_module';
import { ClockService } from './services/clock.service';
import { TimerComponent } from './components/timer/timer.component';

@NgModule({
  imports: [ CommonModule, HttpModule, SharedModule ],
  declarations: [ TimerComponent ],
  exports: [ TimerComponent ],
  providers: [ ClockService ]
})
export class ClockModule { }