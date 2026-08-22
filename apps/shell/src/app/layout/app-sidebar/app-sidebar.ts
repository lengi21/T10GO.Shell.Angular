import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NAVIGATION_ITEMS } from './config/navigation.config';
import { SidebarItem } from './navigation-item/sidebar-item.component';

@Component({
  selector: 'app-sidebar',
  imports: [SidebarItem],
  templateUrl: './app-sidebar.html',
  styleUrl: './app-sidebar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppSidebar {
  readonly navigationItems = NAVIGATION_ITEMS;
}
