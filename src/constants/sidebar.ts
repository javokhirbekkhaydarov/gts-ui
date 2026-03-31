import {ISidebarItem} from "@/types/ui";


export const sidebarItems = [
  {
    path: '/',
    icon: 'icon-Outline-Home',
    activeIcon: 'icon-Bold-Home',
    label: 'home',
    code: 'search',
    internal: true,
    pages: ['home']
  },
  {
    path: '/suppliers',
    icon: 'icon-Outline-Ticket',
    activeIcon: 'icon-Bold-Ticket',
    label: 'suppliers',
    code: 'suppliers-list',
    pages: ['suppliers']
  },
  {
    path: '/users',
    icon: 'icon-Outline-2User',
    activeIcon: 'icon-Bold-2User',
    label: 'users',
    code: 'list-staff',
    pages: ['users']
  },
  {
    path: '/search',
    icon: 'icon-Outline-Search',
    activeIcon: 'icon-Bold-Search',
    label: 'search',
    code: 'search',
    internal: true,
    pages: ['search']
  },
  {
    icon: 'icon-Outline-Create',
    activeIcon: 'icon-Bold-Create',
    label: 'extranet',
    pages: ['extranet', 'extranet-create-description', 'extranet-create', 'charter'],
    children: [
      {
        path: '/charter',
        label: 'charters',
        code: 'provider-charter-list',
        pages: ['charter']
      },
      {
        path: '/excursions/extranet',
        label: 'excursion',
        code: 'provider-charter-list',
        pages: ['extranet', 'extranet-create-description', 'extranet-create']
      }
    ]
  },
  {
    path: '/orders',
    icon: 'icon-Outline-Buy',
    activeIcon: 'icon-Bold-Buy',
    label: 'orders',
    code: 'list-own-order',
    internal: true,
    pages: ['orders']
  },
  {
    path: '/new/agreements',
    icon: 'icon-Outline-Document',
    activeIcon: 'icon-Outline-Document',
    label: 'contracts',
    code: 'agreement-list',
    pages: ['agreements', 'agreementsList']
  },
  {
    path: '/community',
    icon: 'icon-Outline-Chat',
    activeIcon: 'icon-Bold-Chat',
    label: 'community',
    code: 'group-community',
    pages: ['community']
  },
  {
    icon: 'icon-Outline-Activity',
    activeIcon: 'icon-Bold-Activity',
    label: 'reports',
    internal: true,
    code: 'customize-list',
    pages: ['reports', 'files'],
    children: [
      {
        path: '/reports',
        label: 'basicIndicators',
        code: 'customize-list',
        internal: true,
        pages: ['reports', 'reports/basic-indicators']
      }
    ]
  },
  {
    icon: 'icon-Outline-Setting',
    activeIcon: 'icon-Bold-Setting',
    label: 'settings',
    pages: ['settings'],
    children: [
      {
        path: '/settings/exchange-rates',
        label: 'currency',
        code: 'get-exchange-rates',
        pages: ['settings/exchange-rates']
      },
      {
        path: '',
        label: 'rules',
        pages: ['settings'],
        accordion: true,
        children: [
          {
            path: '/settings/rule-list',
            label: 'rulesList',
            code: 'rules-user-collection',
            pages: ['settings/rule-list']
          },
          {
            path: '/settings/groups/contracts',
            label: 'groups',
            code: 'rules-groups',
            pages: ['settings/groups/contracts']
          },
          {
            path: '/settings/rules-history',
            label: 'usageHistory',
            code: 'rules-get-history-list',
            pages: ['settings/rules-history']
          }
        ]
      },
      {
        path: '/settings/route-receipt',
        label: 'routeReceipt',
        code: 'receipt-pattern-list',
        pages: ['settings/route-receipt']
      },
      {
        path: '/settings/personalization',
        label: 'personalization',
        code: 'personalization',
        pages: ['settings/personalization']
      },
      {
        path: '/settings/ftp',
        label: 'ftp',
        code: 'ftp',
        pages: ['settings/ftp']
      }
    ]
  }
] as ISidebarItem[]
