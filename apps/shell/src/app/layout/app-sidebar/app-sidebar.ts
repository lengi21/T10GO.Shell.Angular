import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { T10goSidebarComponent } from '@lengi21/t10go-design-system';
import type { T10goNavigationItem } from '@lengi21/federation-contracts';

import { NAVIGATION_ITEMS } from './config/navigation.config';

@Component({
  selector: 'app-sidebar',
  imports: [T10goSidebarComponent],
  templateUrl: './app-sidebar.html',
  styleUrl: './app-sidebar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppSidebar implements OnInit {
  readonly navigationItems = signal<readonly T10goNavigationItem[]>(NAVIGATION_ITEMS);

  async ngOnInit(): Promise<void> {
    try {
      const remote = await loadRemoteModule('wedding-manager', './navigation');
      const children = remote.WEDDING_MANAGER_NAVIGATION_ITEMS as readonly T10goNavigationItem[];

      this.navigationItems.update((items) =>
        items.map((item) =>
          item.id === 'weddings' ? { ...item, children } : item,
        ),
      );
    } catch (error) {
      console.error('Failed to load Wedding Manager navigation', error);
    }
  }
}
