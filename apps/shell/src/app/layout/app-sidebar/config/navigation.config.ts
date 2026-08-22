import { NavigationItem } from '../../../../shared';

export const NAVIGATION_ITEMS: NavigationItem[] = [
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
    children: [
      {
        id: 'weddings-overview',
        label: 'Overview',
        icon: 'dashboard',
        route: '/weddings',
      },
      {
        id: 'weddings-guests',
        label: 'Guests',
        icon: 'group',
        route: '/weddings/guests',
      },
      {
        id: 'weddings-events',
        label: 'Events',
        icon: 'events',
        route: '/weddings/events',
      },
      {
        id: 'calendar',
        label: 'Calendar',
        icon: 'calendar',
        route: 'weddings/calendar',
      },
    ],
  },
];
