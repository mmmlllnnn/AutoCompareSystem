const multiMenu: AuthRoute.Route = {
  name: 'multi-menu',
  path: '/multi-menu',
  component: 'basic',
  children: [
    {
      name: 'multi-menu_first',
      path: '/multi-menu/first',
      component: 'multi',
      children: [
        {
          name: 'multi-menu_first_second',
          path: '/multi-menu/first/second',
          component: 'self',
          meta: {
            title: '二级菜单',
            i18nTitle: 'routes.multi-menu.first.second',
            requiresAuth: true,
            icon: 'mdi:menu'
          }
        }
      ],
      meta: {
        title: '一级菜单',
        i18nTitle: 'routes.multi-menu.first._value',
        icon: 'mdi:menu'
      }
    }
  ],
  meta: {
    title: '待做菜单',
    i18nTitle: 'routes.multi-menu._value',
    icon: 'carbon:menu',
    order: 8
  }
};

export default multiMenu;
