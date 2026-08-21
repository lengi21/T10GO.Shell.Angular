import { NavigationItem } from '../../../../shared';

export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'dashboard',
    route: '/dashboard',
  },
  {
    id: 'weddings',
    label: 'Weddings',
    icon: 'wedding',
    children: [
      {
        id: 'weddings-list',
        label: 'All weddings',
        icon: 'list',
        route: '/weddings',
      },
      {
        id: 'weddings-new',
        label: 'Create wedding',
        icon: 'add',
        route: '/weddings/new',
      },
      {
        id: 'weddings-calendar',
        label: 'Calendar',
        icon: 'calendar',
        route: '/weddings/calendar',
      },
    ],
  },
  {
    id: 'guests',
    label: 'Guests',
    icon: 'guests',
    route: '/guests',
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'settings',
    route: '/settings',
  },
];
