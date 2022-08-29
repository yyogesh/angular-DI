import { Inject, Injectable } from '@angular/core';
import { AppConfig, APP_CONFIG } from './config.token';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root'
})
export class SqlLogService implements Logger {

  prefix = 'root'
  constructor(@Inject(APP_CONFIG) private config: AppConfig) {
    console.log("Features :: ", config);
  }

  log(message: string) {
    console.log(`${this.prefix} :: SqlLogService : ${message}`);
  }
}
