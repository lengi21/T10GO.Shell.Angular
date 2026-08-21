import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

export type AppTheme = 'system' | 'light' | 'dark';

const STORAGE_KEY = 't10go-theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  private readonly mediaQuery = isPlatformBrowser(this.platformId)
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : null;

  private currentTheme: AppTheme = 'system';

  constructor() {
    this.initialize();
  }

  get theme(): AppTheme {
    return this.currentTheme;
  }

  setTheme(theme: AppTheme): void {
    this.currentTheme = theme;

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(STORAGE_KEY, theme);
    }

    this.applyTheme();
  }

  private initialize(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.applyTheme();
      return;
    }

    const storedTheme = localStorage.getItem(STORAGE_KEY);

    if (
      storedTheme === 'system' ||
      storedTheme === 'light' ||
      storedTheme === 'dark'
    ) {
      this.currentTheme = storedTheme;
    }

    this.applyTheme();

    this.mediaQuery?.addEventListener('change', () => {
      if (this.currentTheme === 'system') {
        this.applyTheme();
      }
    });
  }

  private applyTheme(): void {
    const resolvedTheme = this.resolveTheme();

    this.document.documentElement.setAttribute('data-theme', resolvedTheme);

    this.document.documentElement.style.colorScheme = resolvedTheme;
  }

  private resolveTheme(): 'light' | 'dark' {
    if (this.currentTheme === 'light') {
      return 'light';
    }

    if (this.currentTheme === 'dark') {
      return 'dark';
    }

    return this.mediaQuery?.matches ? 'dark' : 'light';
  }
}
