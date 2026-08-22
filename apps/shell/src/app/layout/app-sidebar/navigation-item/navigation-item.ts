import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

import type { NavigationItem } from '../config/navigation.model';

@Component({
  selector: 'app-navigation-item',
  imports: [RouterLink, MatIconModule],
  templateUrl: './navigation-item.html',
  styleUrl: './navigation-item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationItemComponent {
  readonly item = input.required<NavigationItem>();
}
