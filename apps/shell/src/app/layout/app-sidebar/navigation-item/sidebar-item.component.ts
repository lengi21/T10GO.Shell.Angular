import { ChangeDetectionStrategy, Component, forwardRef, input, signal } from '@angular/core';
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
  readonly expanded = signal(false);

  toggleExpanded(): void {
    if (!this.item().children?.length) {
      return;
    }

    this.expanded.update((value) => !value);
  }
}
