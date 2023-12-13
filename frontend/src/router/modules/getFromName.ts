const cvicseTools: AuthRoute.Route = {
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
};

export default cvicseTools;
