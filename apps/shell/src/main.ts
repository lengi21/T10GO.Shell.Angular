import { renderStartupError } from './run-cofig-error';
import { loadAppConfig } from '@t10go-env-loader';
import { bootstrap } from './bootstrap';

loadAppConfig()
  .then((config) => bootstrap(config))
  .catch((error) => {
    console.error('Application startup failed', error);

    renderStartupError(error);
  });
