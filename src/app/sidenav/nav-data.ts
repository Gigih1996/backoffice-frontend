import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
     {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
     },
     {
      routeLink: 'products',
      icon: 'fal fa-box-open',
      label: 'Product',
      items: [
         {
            routeLink: 'products/level1.1',
            label: 'Level 1.1',
            items: [
               {
                  routeLink: 'products/level2.1',
                  label: 'Level 2.1'
               },
               {
                  routeLink: 'products/level2.2',
                  label: 'Level 2.2',
                  items: [
                     {
                        routeLink: 'products/level3.1',
                        label: 'Level 3.1'
                     },
                     {
                        routeLink: 'products/level3.2',
                        label: 'Level 3.2'
                     }
                  ]
               }
            ]
         },
         {
            routeLink: 'products/level1.2',
            label: 'Level 1.2'
         }
      ]
   },
   {
      routeLink: 'statistics',
      icon: 'fal fa-chart-bar',
      label: 'Statictics'
   },
   {
      routeLink: 'coupens',
      icon: 'fal fa-tags',
      label: 'Coupens',
      items: [
         {
            routeLink:'coupens/list',
            label: 'List Coupens'
         },
         {
            routeLink: 'coupens/create',
            label: 'Create Coupens'
         }
      ]
   },
   {
      routeLink: 'pages',
      icon: 'fal fa-file',
      label: 'Pages'
   },
   {
      routeLink: 'media',
      icon: 'fal fa-camera',
      label: 'Media'
   },
   {
      routeLink: 'setting',
      icon: 'fal fa-cog',
      label: 'settings',
      expanded: false,
      items: [
         {
            routeLink: 'setting/profile',
            label: 'Profile'
         },
         {
            routeLink: 'setting/customize',
            label: 'Customize'
         }
      ]
   },
]