import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '@lengi21/t10go-design-system';
import { AppShell } from './layout/app-shell/app-shell';

@Component({
  imports: [RouterModule, AppShell],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly themeService = inject(ThemeService);
}
