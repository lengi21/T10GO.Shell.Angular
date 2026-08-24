import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  AppTheme,
  ThemeService,
  T10goContextMenuComponent,
  T10goSliderComponent,
} from '@t10go-design-system';

@Component({
  selector: 'app-header',
  imports: [RouterLink, T10goContextMenuComponent, T10goSliderComponent],
  templateUrl: './app-header.html',
  styleUrl: './app-header.scss',
})
export class AppHeader {
  private readonly themeService = inject(ThemeService);

  protected readonly themePosition = computed(() => {
    const positions: Record<AppTheme, number> = { system: 0, light: 1, dark: 2 };
    return positions[this.themeService.theme()];
  });

  protected readonly formatTheme = (position: number): string =>
    ['System', 'Light', 'Dark'][Math.round(position)] ?? 'System';

  protected setTheme(position: number): void {
    const themes: AppTheme[] = ['system', 'light', 'dark'];
    this.themeService.setTheme(themes[Math.round(position)] ?? 'system');
  }
}
