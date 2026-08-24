import type { T10goNavigationItem } from '@lengi21/federation-contracts';

export const NAVIGATION_ITEMS: T10goNavigationItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'dashboard',
    route: '/dashboard',
  },

  {
    id: 'weddings',
    label: 'Weddings',
    icon: 'church',
    route: '/wedding',
  },
];
