import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard/default',
        icon: 'feather icon-home',
        classes: 'nav-item'
      },
      {
        id: 'property-units',
        title: 'Property Units',
        type: 'item',
        url: '/property-units',
        icon: 'feather icon-box',
        classes: 'nav-item'
      },
      {
        id: 'tenants',
        title: 'Tenants',
        type: 'item',
        url: '/tenants',
        icon: 'feather icon-list',
        classes: 'nav-item'
      },
      {
        id: 'reports',
        title: 'Reports',
        type: 'item',
        url: '/reports',
        icon: 'feather icon-clipboard',
        classes: 'nav-item'
      },
      {
        id: 'settings',
        title: 'Settings',
        type: 'item',
        url: '/settings',
        icon: 'feather icon-settings',
        classes: 'nav-item'
      }
    ]
  }
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
