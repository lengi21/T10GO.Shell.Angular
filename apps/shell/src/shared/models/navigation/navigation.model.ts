export type T10goIconName =
  'dashboard' | 'wedding' | 'guests' | 'settings' | 'list' | 'add' | 'calendar';

export interface NavigationItem {
  readonly id: string;
  readonly label: string;
  readonly icon: T10goIconName;
  readonly route?: string;
  readonly children?: readonly NavigationItem[];
}
