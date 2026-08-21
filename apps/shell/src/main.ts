import { initFederation } from '@angular-architects/native-federation';
import { bootstrapApplication } from '@angular/platform-browser';

import { App } from './app/app';
import { appConfig } from './app/app.config';

import { loadAppConfig } from './app/config/app-config.loader';

import { loadFederationManifest } from './app/config/federation-loader';

async function main() {
  const config = await loadAppConfig();

  const manifest = await loadFederationManifest();

  const nativeManifest = createNativeFederationManifest(manifest);

  await initFederation(nativeManifest);

  await bootstrapApplication(AppComponent, appConfig(config, manifest));
}

main().catch((error) => {
  console.error('Application bootstrap failed', error);

  renderFatalConfigurationError(error);
});
