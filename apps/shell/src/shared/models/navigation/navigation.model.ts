export type T10goNavigationIcon =
  'dashboard' | 'wedding' | 'guests' | 'calendar' | 'settings' | 'list' | 'add';

export interface NavigationItem {
  readonly id: string;
  readonly label: string;
  readonly icon?: T10goNavigationIcon;

  /**
   * Route of this item.
   *
   * Parent navigation items with children normally don't
   * have a route of their own.
   */
  readonly route?: string;

  /**
   * Nested navigation items.
   */
  readonly children?: readonly NavigationItem[];
}
