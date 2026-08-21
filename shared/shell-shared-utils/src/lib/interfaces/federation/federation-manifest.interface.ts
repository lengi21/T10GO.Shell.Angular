import { FederationApplication } from './federation-application.interface';
import { FederationSlots } from './federation-slot.interface';

export interface FederationManifest {
  /**
   * Version of the T10GO federation manifest schema.
   */
  version: string;

  /**
   * Federated applications known to the shell.
   */
  applications: Record<string, FederationApplication>;

  /**
   * UI extension points.
   */
  slots?: FederationSlots;
}

export type NativeFederationManifest = Record<string, string>;
