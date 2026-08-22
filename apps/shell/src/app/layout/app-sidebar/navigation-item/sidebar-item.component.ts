import { ChangeDetectionStrategy, Component, forwardRef, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { NavigationItem } from '../../../../shared';

@Component({
  selector: 'app-sidebar-item',
  imports: [RouterLink, MatIconModule, forwardRef(() => SidebarItem)],
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarItem {
  readonly item = input.required<NavigationItem>();
}
