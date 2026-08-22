import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { NavigationItem } from '../../../../shared';

@Component({
  selector: 'app-sidebar-item',
  imports: [RouterLink, MatIconModule],
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.scss',
})
export class SidebarItem {
  readonly item = input.required<NavigationItem>();
}
