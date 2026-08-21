import { FederationManifest } from '../federation';
import { AppConfig } from '../config';

export interface LoadedApplicationConfiguration {
  config: AppConfig;
  manifest: FederationManifest;
}
