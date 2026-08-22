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
    icon: 'wedding',
    children: [
      {
        id: 'weddings-overview',
        label: 'Overview',
        route: '/weddings',
      },
      {
        id: 'weddings-guests',
        label: 'Guests',
        route: '/weddings/guests',
      },
      {
        id: 'weddings-events',
        label: 'Events',
        route: '/weddings/events',
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
    id: 'calendar',
    label: 'Calendar',
    icon: 'calendar',
    route: '/calendar',
  },

  {
    id: 'settings',
    label: 'Settings',
    icon: 'settings',
    route: '/settings',
  },
]
