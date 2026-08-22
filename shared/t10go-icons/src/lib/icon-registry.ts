import { Injectable, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

const ICONS = [
  'add',
  'calendar',
  'dashboard',
  'guests',
  'list',
  'settings',
  'wedding',
] as const;

@Injectable({
  providedIn: 'root',
})
export class T10goIconRegistry {
  private readonly iconRegistry = inject(MatIconRegistry);
  private readonly sanitizer = inject(DomSanitizer);

  private registered = false;

  register(): void {
    console.log('[T10GO] registering icons');

    if (this.registered) {
      return;
    }

    this.registered = true;

    for (const name of ICONS) {
      console.log('[T10GO] registering:', `t10go-${name}`);

      this.iconRegistry.addSvgIcon(
        `t10go-${name}`,
        this.sanitizer.bypassSecurityTrustResourceUrl(
          `assets/t10go-icons/${name}.svg`,
        ),
      );
    }
  }
}
