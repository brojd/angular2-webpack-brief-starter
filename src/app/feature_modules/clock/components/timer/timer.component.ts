import { Component } from '@angular/core';
import { ClockService } from '../../services/clock.service';

@Component({
  selector: 'timer',
  templateUrl: './timer.template.html',
  styleUrls: ['./timer.stylesheet.pcss' ]
})
export class TimerComponent {

  currentTime: string;
  clockService: ClockService;
  timerInterval: number;

  constructor(clockService: ClockService) {
    this.currentTime = clockService.getCurrentTimeString();
    this.clockService = clockService;
  }

  updateTime(): void {
    this.currentTime = this.clockService.getCurrentTimeString();
  }

  ngOnInit() {
    this.timerInterval = window.setInterval(() => this.updateTime(), 1000);
  }

  ngOnDestroy() {
    window.clearInterval(this.timerInterval);
  }
}