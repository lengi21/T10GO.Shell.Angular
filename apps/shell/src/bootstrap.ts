import { bootstrapApplication } from '@angular/platform-browser';

import { createAppConfig } from './app/app.config';
import { App } from './app/app';
import { AppConfig } from '@t10go-env-loader';


export async function bootstrap(config: AppConfig): Promise<void> {
  await bootstrapApplication(App, createAppConfig(config));
}
