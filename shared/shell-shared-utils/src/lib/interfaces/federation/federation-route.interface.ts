export interface FederationRoute {
  /**
   * Stable identifier for this route.
   */
  id: string;

  /**
   * Angular route path.
   *
   * Example:
   * "wedding"
   */
  path: string;

  /**
   * What Angular should load.
   */
  type: FederationRouteType;

  /**
   * Native Federation exposed module.
   *
   * Example:
   * "./routes"
   */
  exposedModule: string;

  /**
   * Export name from the remote module.
   *
   * Example:
   * "WEDDING_MANAGER_ROUTES"
   */
  exportName: string;

  /**
   * Optional route metadata.
   */
  metadata?: Record<string, unknown>;
}

export type FederationRouteType = 'children' | 'component';
