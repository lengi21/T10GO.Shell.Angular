import { Component } from '@angular/core';
import { NAVIGATION_ITEMS } from './config/navigation.config';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, MatIcon],
  templateUrl: './app-sidebar.html',
  styleUrl: './app-sidebar.scss',
})
export class AppSidebar {
  readonly navigationItems = NAVIGATION_ITEMS;
}
