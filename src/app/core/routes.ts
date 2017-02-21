import { TimerComponent } from '../feature_modules/clock/components/timer/timer.component';
import { YourIPComponent } from '../feature_modules/yourIP/components/yourIP/yourIP.component';

export const routes: {}[] = [
  {
    path: '',
    redirectTo: 'timer',
    pathMatch: 'full'
  },
  {
    path: 'timer',
    component: TimerComponent
  },
  {
    path: 'yourIP',
    component: YourIPComponent
  }
];