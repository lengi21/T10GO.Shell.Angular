import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  APP_PALETTES,
  AppPalette,
  AppTheme,
  ThemeService,
  T10goContextMenuComponent,
  T10goDropdownOption,
  T10goDropdownComponent,
  T10goSwatchDropdownComponent,
  T10goSwatchDropdownOption,
} from '@lengi21/t10go-design-system';
import { T10goAuthSession } from '@lengi21/t10go-auth-client';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    T10goContextMenuComponent,
    T10goDropdownComponent,
    T10goSwatchDropdownComponent,
  ],
  templateUrl: './app-header.html',
  styleUrl: './app-header.scss',
})
export class AppHeader {
  protected readonly themeService = inject(ThemeService);
  protected readonly authSession = inject(T10goAuthSession);

  protected readonly themeOptions: readonly T10goDropdownOption[] = [
    { value: 'system', label: 'System' },
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
  ];

  protected readonly paletteOptions: readonly T10goSwatchDropdownOption[] = APP_PALETTES.map(
    (palette) => ({
      value: palette.id,
      label: palette.label,
      colors: palette.colors,
      description: palette.colors.join(' · '),
    }),
  );

  protected setTheme(theme: string): void {
    if (theme === 'system' || theme === 'light' || theme === 'dark') {
      this.themeService.setTheme(theme as AppTheme);
    }
  }

  protected setPalette(palette: string): void {
    if (APP_PALETTES.some((candidate) => candidate.id === palette)) {
      this.themeService.setPalette(palette as AppPalette);
    }
  }

  protected signOut(): void {
    this.authSession.logout();
    window.location.assign('/auth/login');
  }
}
