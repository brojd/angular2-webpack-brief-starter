import { NgModule } from '@angular/core';
import { ClockService } from './services/clock.service';
import { TimerComponent } from './components/timer/timer.component';

@NgModule({
  declarations: [ TimerComponent ],
  exports: [ TimerComponent ],
  providers: [ ClockService ]
})
export class TimerModule { }