import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppHeader } from '../app-header/app-header';
import { AppSidebar } from '../app-sidebar/app-sidebar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shell',
  imports: [AppHeader, AppSidebar, RouterOutlet],
  templateUrl: './app-shell.html',
  styleUrl: './app-shell.scss',
})
export class AppShell {}
