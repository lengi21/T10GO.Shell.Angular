import {
  EnvironmentProviders,
  inject,
  makeEnvironmentProviders,
  provideAppInitializer,
} from '@angular/core';

import { T10goIconRegistry } from './icon-registry';

export function provideT10goIcons(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideAppInitializer(() => {
      inject(T10goIconRegistry).register();
    }),
  ]);
}
