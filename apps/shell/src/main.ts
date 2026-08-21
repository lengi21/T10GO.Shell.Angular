import { bootstrapApplication } from '@angular/platform-browser';

import { createAppConfig } from './app/app.config';
import { loadAppConfig } from '@t10go-env-loader';
import { renderConfigurationError } from './run-cofig-error';
import { App } from './app/app';


async function bootstrap(): Promise<void> {
  try {
    const config = await loadAppConfig();

    await bootstrapApplication(App, createAppConfig(config));
  } catch (error) {
    console.error('Application bootstrap failed.', error);

    renderConfigurationError(error);
  }
}

bootstrap();
