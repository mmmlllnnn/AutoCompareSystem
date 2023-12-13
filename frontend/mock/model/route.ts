export const routeModel: Record<Auth.RoleType, AuthRoute.Route[]> = {
  super: [
    {
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
            },
            {
              name: 'multi-menu_first_second-new',
              path: '/multi-menu/first/second-new',
              component: 'multi',
              children: [
                {
                  name: 'multi-menu_first_second-new_third',
                  path: '/multi-menu/first/second-new/third',
                  component: 'self',
                  meta: {
                    title: '三级菜单',
                    i18nTitle: 'routes.multi-menu.first.second-new.third',
                    requiresAuth: true,
                    icon: 'mdi:menu'
                  }
                }
              ],
              meta: {
                title: '二级菜单(有子菜单)',
                i18nTitle: 'routes.multi-menu.first.second-new._value',
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
        title: '多级菜单',
        i18nTitle: 'routes.multi-menu._value',
        icon: 'carbon:menu',
        order: 1
      }
    },
		{
			name: 'cvicseTools',
			path: '/cvicseTools',
			component: 'basic',
			children: [
				{
					name: 'cvicseTools_getfromname',
					path: '/cvicseTools/getfromname',
					component: 'self',
					meta: {
						title: '获取表单和语句配置',
						requiresAuth: true,
						icon: 'mdi:menu'
					}
				}
			],
			meta: {
				title: '工具',
				// i18nTitle: 'routes.multi-menu._value',
				icon: 'carbon:menu',
				order: 1
			}
		},
		{
			name: 'datacompare',
			path: '/datacompare',
			component: 'basic',
			children: [
				{
					name: 'datacompare_getstatistcomparedata',
					path: '/datacompare/getstatistcomparedata',
					component: 'self',
					meta: {
						title: '统计',
						requiresAuth: true,
						icon: 'mdi:menu'
					}
				}
			],
			meta: {
				title: '数据对比',
				// i18nTitle: 'routes.multi-menu._value',
				icon: 'carbon:menu',
				order: 2
			}
		}

  ],
  admin: [
    {
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
            },
            {
              name: 'multi-menu_first_second-new',
              path: '/multi-menu/first/second-new',
              component: 'multi',
              children: [
                {
                  name: 'multi-menu_first_second-new_third',
                  path: '/multi-menu/first/second-new/third',
                  component: 'self',
                  meta: {
                    title: '三级菜单',
                    i18nTitle: 'routes.multi-menu.first.second-new.third',
                    requiresAuth: true,
                    icon: 'mdi:menu'
                  }
                }
              ],
              meta: {
                title: '二级菜单(有子菜单)',
                i18nTitle: 'routes.multi-menu.first.second-new._value',
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
        title: '多级菜单',
        i18nTitle: 'routes.multi-menu._value',
        icon: 'carbon:menu',
        order: 1
      }
    },
		{
			name: 'cvicsetools',
			path: '/cvicsetools',
			component: 'basic',
			children: [
				{
					name: 'cvicsetools_getfromname',
					path: '/cvicsetools/getfromname',
					component: 'self',
					meta: {
						title: '获取表单和语句配置',
						requiresAuth: true,
						icon: 'mdi:menu'
					}
				}
			],
			meta: {
				title: '工具',
				// i18nTitle: 'routes.multi-menu._value',
				icon: 'carbon:menu',
				order: 1
			}
		},
		{
			name: 'dataCompare',
			path: '/dataCompare',
			component: 'basic',
			children: [
				{
					name: 'dataCompare_getstatistcomparedata',
					path: '/dataCompare/getstatistcomparedata',
					component: 'self',
					meta: {
						title: '统计',
						requiresAuth: true,
						icon: 'mdi:menu'
					}
				}
			],
			meta: {
				title: '数据对比',
				// i18nTitle: 'routes.multi-menu._value',
				icon: 'carbon:menu',
				order: 2
			}
		}

  ],
  user: [
    {
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
            },
            {
              name: 'multi-menu_first_second-new',
              path: '/multi-menu/first/second-new',
              component: 'multi',
              children: [
                {
                  name: 'multi-menu_first_second-new_third',
                  path: '/multi-menu/first/second-new/third',
                  component: 'self',
                  meta: {
                    title: '三级菜单',
                    i18nTitle: 'routes.multi-menu.first.second-new.third',
                    requiresAuth: true,
                    icon: 'mdi:menu'
                  }
                }
              ],
              meta: {
                title: '二级菜单(有子菜单)',
                i18nTitle: 'routes.multi-menu.first.second-new._value',
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
        title: '多级菜单',
        i18nTitle: 'routes.multi-menu._value',
        icon: 'carbon:menu',
        order: 1
      }
    },
		{
			name: 'cvicsetools',
			path: '/cvicsetools',
			component: 'basic',
			children: [
				{
					name: 'cvicsetools_getfromname',
					path: '/cvicsetools/getfromname',
					component: 'self',
					meta: {
						title: '获取表单和语句配置',
						requiresAuth: true,
						icon: 'mdi:menu'
					}
				}
			],
			meta: {
				title: '工具',
				// i18nTitle: 'routes.multi-menu._value',
				icon: 'carbon:menu',
				order: 1
			}
		},
		{
			name: 'dataCompare',
			path: '/dataCompare',
			component: 'basic',
			children: [
				{
					name: 'dataCompare_getstatistcomparedata',
					path: '/dataCompare/getstatistcomparedata',
					component: 'self',
					meta: {
						title: '统计',
						requiresAuth: true,
						icon: 'mdi:menu'
					}
				}
			],
			meta: {
				title: '数据对比',
				// i18nTitle: 'routes.multi-menu._value',
				icon: 'carbon:menu',
				order: 2
			}
		}

  ]
};
