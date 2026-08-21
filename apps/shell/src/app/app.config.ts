import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { APP_CONFIG, AppConfig, EnvironmentManager } from '@t10go-env-loader';
import { provideT10goIcons } from '@t10go-icons';


export function createAppConfig(config: AppConfig): ApplicationConfig {
  return {
    providers: [
      {
        provide: APP_CONFIG,
        useValue: config,
      },
      provideAppInitializer(() => {
        inject(EnvironmentManager).initialize(config);
      }),
      provideT10goIcons(),
      provideBrowserGlobalErrorListeners(),
      provideRouter(appRoutes),
    ],
  };
}
