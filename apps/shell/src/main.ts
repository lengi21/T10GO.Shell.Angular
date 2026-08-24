import { initFederation } from '@angular-architects/native-federation';
import { loadNativeFederationManifest } from './federation';

loadNativeFederationManifest()
  .then((manifest) => initFederation(manifest))
  .catch((err) => console.error(err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));
