import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { ThemeService } from '@t10go-design-system';
import { MatDatepickerToggle } from '@angular/material/datepicker';

@Component({
  imports: [NxWelcome, RouterModule, MatDatepickerToggle],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly themeService = inject(ThemeService);
}
