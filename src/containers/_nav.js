export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Overview',
        to: '/overview',
        icon: 'cil-speedometer',
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['VIDEO DEMOS'],
      },
      {
        _name: 'CSidebarNavItem',
        name: '2d Replay',
        to: '/replay',
        icon: 'cil-media-play',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Positions',
        to: '/positions',
        icon: 'cil-location-pin',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Grenades',
        to: '/grenades',
        icon: 'cil-drop',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Kills',
        to: '/kills',
        icon: 'cil-drop',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Strategy',
        to: '/strategy',
        icon: 'cil-map',
      },
    ],
  },
];
