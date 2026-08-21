import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '@t10go-design-system';
import { AppShell } from './layout/app-shell/app-shell';
import { T10goIconRegistry } from '@t10go-icons';

@Component({
  imports: [RouterModule, AppShell],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly themeService = inject(ThemeService);
  private readonly iconRegistry = inject(T10goIconRegistry);

  constructor() {
    this.iconRegistry.register();
  }
}
