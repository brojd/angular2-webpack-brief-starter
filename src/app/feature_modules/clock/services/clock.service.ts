import { Injectable } from '@angular/core';

@Injectable()
export class ClockService {

  getCurrentTimeString(): string {
    const now: Date = new Date();
    const hours: string = now.getHours() < 10 ? '0' + now.getHours() : '' + now.getHours();
    const minutes: string = now.getMinutes() < 10 ? '0' + now.getMinutes() : '' + now.getMinutes();
    const seconds: string = now.getSeconds() < 10 ? '0' + now.getSeconds() : '' + now.getSeconds();
    return hours + ':' + minutes + ':' + seconds;
  }

}