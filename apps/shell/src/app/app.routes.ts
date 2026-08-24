import { Route } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { SettingsPage } from './settings/settings';
import { AppShell } from './layout/app-shell/app-shell';
import { AuthCallbackPage, AuthConfirmationPage, AuthPage } from './auth/auth.pages';

export const appRoutes: Route[] = [
  {
    path: 'auth/login',
    component: AuthPage,
    data: { mode: 'login' },
  },
  {
    path: 'auth/register',
    component: AuthPage,
    data: { mode: 'register' },
  },
  { path: 'auth/callback', component: AuthCallbackPage },
  { path: 'auth/confirmed', component: AuthConfirmationPage },
  {
    path: '',
    component: AppShell,
    children: [
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
      { path: '', pathMatch: 'full', redirectTo: 'wedding/dashboard' },
    ],
  },
];
