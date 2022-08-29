import { InjectionToken } from "@angular/core";

export interface AppConfig {
  sqlLogEnabled: boolean;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config', {
  providedIn: 'root',
  factory: () => ({
    sqlLogEnabled: false
  })
});

