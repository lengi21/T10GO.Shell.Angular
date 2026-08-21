import { FederationExpose } from './federation-expose.interface';
import { FederationRemote } from './federation-remote.interface';
import { FederationRoute } from './federation-route.interface';
import { FederationNavigation } from './federation-navigation.interface';

export interface FederationApplication {
  /**
   * Stable application identifier.
   *
   * Example:
   * "wedding-manager"
   */
  id: string;

  /**
   * Human-readable application name.
   */
  name: string;

  /**
   * Repository/project that owns this application.
   *
   * Example:
   * "T10GO.WeddingManager.Angular"
   */
  repository?: string;

  /**
   * Native Federation remote configuration.
   */
  remote: FederationRemote;

  /**
   * Routes exposed by this application.
   */
  routes?: FederationRoute[];

  /**
   * Components/modules exposed by this application.
   */
  exposes?: Record<string, FederationExpose>;

  /**
   * Shell navigation metadata.
   */
  navigation?: FederationNavigation;

  /**
   * Allows an application to be disabled
   * without removing its configuration.
   */
  enabled?: boolean;

  /**
   * Optional application metadata.
   */
  metadata?: Record<string, unknown>;
}
