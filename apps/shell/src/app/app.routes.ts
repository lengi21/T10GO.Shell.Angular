import { Route } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { SettingsPage } from './settings/settings';

export const appRoutes: Route[] = [
  {
    path: 'settings',
    component: SettingsPage,
  },
  {
    path: 'wedding',
    loadChildren: () =>
      loadRemoteModule('wedding-manager', './routes').then(
        (remote) => remote.WEDDING_MANAGER_ROUTES,
      ),
  },
];
