const dataCompare: AuthRoute.Route = {
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
};

export default dataCompare;
