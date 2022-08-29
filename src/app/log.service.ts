import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root'
})
export class LogService implements Logger {
  prefix = 'root'
  constructor() { }

  log(message: string) {
    console.log(`${this.prefix} :: LogService : ${message}`);
  }
}
