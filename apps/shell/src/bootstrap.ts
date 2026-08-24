import { bootstrapApplication } from '@angular/platform-browser';

import { createAppConfig } from './app/app.config';
import { App } from './app/app';
import { loadAppConfig } from '@lengi21/t10go-env-loader';
import { renderStartupError } from './run-cofig-error';


async function bootstrap(): Promise<void> {
  const config = await loadAppConfig();

  await bootstrapApplication(App, createAppConfig(config));
}

bootstrap().catch((error) => {
  console.error('Application bootstrap failed', error);

  renderStartupError(error);
});
