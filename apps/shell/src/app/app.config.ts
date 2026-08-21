import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { APP_CONFIG, AppConfig, EnvironmentManager } from '@t10go-env-loader';


export function createAppConfig(config: AppConfig): ApplicationConfig {
  return {
    providers: [
      {
        provide: APP_CONFIG,
        useValue: config,
      },
      provideBrowserGlobalErrorListeners(), provideRouter(appRoutes),
      provideAppInitializer(() => {
        inject(EnvironmentManager).initialize(config);
      }),
    ],
  };
}
