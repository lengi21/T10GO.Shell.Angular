import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { APP_CONFIG, AppConfig, EnvironmentManager } from '@lengi21/t10go-env-loader';
import { provideHttpClient } from '@angular/common/http';


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
      provideHttpClient(),
      provideBrowserGlobalErrorListeners(),
      provideRouter(appRoutes),
    ],
  };
}
