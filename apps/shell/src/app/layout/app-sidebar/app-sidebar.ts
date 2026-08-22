import { Component } from '@angular/core';
import { NAVIGATION_ITEMS } from './config/navigation.config';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SidebarItem } from './navigation-item/sidebar-item.component';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, MatIconModule, SidebarItem],
  templateUrl: './app-sidebar.html',
  styleUrl: './app-sidebar.scss',
})
export class AppSidebar {
  readonly navigationItems = NAVIGATION_ITEMS;
}
