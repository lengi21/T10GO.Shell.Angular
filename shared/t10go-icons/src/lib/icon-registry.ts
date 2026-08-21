import { Injectable, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Injectable({
  providedIn: 'root',
})
export class T10goIconRegistry {
  private readonly iconRegistry = inject(MatIconRegistry);
  private readonly sanitizer = inject(DomSanitizer);

  private registered = false;

  register(): void {
    if (this.registered) {
      return;
    }

    this.registered = true;

    this.registerIcon('dashboard');
    this.registerIcon('wedding');
    this.registerIcon('guests');
    this.registerIcon('settings');
    this.registerIcon('list');
    this.registerIcon('add');
    this.registerIcon('calendar');
  }

  private registerIcon(name: string): void {
    this.iconRegistry.addSvgIcon(
      `t10go-${name}`,
      this.sanitizer.bypassSecurityTrustResourceUrl(
        `assets/t10go-icons/${name}.svg`,
      ),
    );
  }
}
