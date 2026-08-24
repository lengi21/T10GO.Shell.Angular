import { ChangeDetectionStrategy, Component } from '@angular/core';
import { T10goSidebarComponent } from '@t10go-design-system';

import { NAVIGATION_ITEMS } from './config/navigation.config';

@Component({
  selector: 'app-sidebar',
  imports: [T10goSidebarComponent],
  templateUrl: './app-sidebar.html',
  styleUrl: './app-sidebar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppSidebar {
  readonly navigationItems = NAVIGATION_ITEMS;
}
