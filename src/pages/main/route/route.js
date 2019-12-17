const Main = r => require.ensure([], () => r(require('@/pages/main/hx-index.vue')), 'main')

import dataRoutes from '@/pages/datagovnce/route/route.js'

const mainRoutes = [{
	'path': '/main',
	'name': 'main',
	'component': Main,
	'children': dataRoutes
}]

export default mainRoutes
