import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { APP_CONFIG, AppConfig, EnvironmentManager } from '@lengi21/t10go-env-loader';
import { provideT10goAuth } from '@lengi21/t10go-auth-client';


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
      provideT10goAuth({
        authApiUrl: config.services.auth,
        shellUrl: config.shellUrl,
        protectedApiUrls: [config.services.api, config.services['weddingApi']],
      }),
      provideBrowserGlobalErrorListeners(),
      provideRouter(appRoutes),
    ],
  };
}
