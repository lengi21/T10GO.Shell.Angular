export interface FederationRemote {
  /**
   * Native Federation remote name.
   *
   * This must correspond to the `name`
   * in the remote's federation.config.ts.
   */
  name: string;

  /**
   * URL of the remoteEntry.json.
   */
  entry: string;

  /**
   * Optional local-development URL of the remoteEntry.json.
   */
  developmentEntry?: string;
}
