import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  AppTheme,
  ThemeService,
  T10goContextMenuComponent,
  T10goDropdownOption,
  T10goDropdownComponent,
} from '@t10go-design-system';

@Component({
  selector: 'app-header',
  imports: [RouterLink, T10goContextMenuComponent, T10goDropdownComponent],
  templateUrl: './app-header.html',
  styleUrl: './app-header.scss',
})
export class AppHeader {
  protected readonly themeService = inject(ThemeService);

  protected readonly themeOptions: readonly T10goDropdownOption[] = [
    { value: 'system', label: 'System' },
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
  ];

  protected setTheme(theme: string): void {
    if (theme === 'system' || theme === 'light' || theme === 'dark') {
      this.themeService.setTheme(theme as AppTheme);
    }
  }
}
