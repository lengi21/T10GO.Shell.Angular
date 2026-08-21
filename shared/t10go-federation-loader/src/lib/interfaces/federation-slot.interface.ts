export interface FederationSlot {
  /**
   * Stable ID of this slot contribution.
   */
  id: string;

  /**
   * Application that owns the expose.
   */
  application: string;

  /**
   * Logical expose ID from the application's
   * `exposes` object.
   */
  expose: string;

  /**
   * Controls rendering order.
   */
  order?: number;

  /**
   * Allows a contribution to be disabled.
   */
  enabled?: boolean;

  /**
   * Optional metadata for the shell.
   */
  metadata?: Record<string, unknown>;
}

export interface FederationSlots {
  sidebar?: FederationSlot[];
  header?: FederationSlot[];
  dashboard?: FederationSlot[];
  modal?: FederationSlot[];
  'context-panel'?: FederationSlot[];
}
