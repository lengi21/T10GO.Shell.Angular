export interface FederationNavigation {
  sidebar?: FederationSidebarNavigation;
}

export interface FederationSidebarNavigation {
  enabled: boolean;

  label: string;

  icon?: string;

  route?: string;

  order?: number;
}
