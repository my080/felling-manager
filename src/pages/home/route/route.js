const Home = r => require.ensure([], () => r(require('@/pages/home/hx-home.vue')), 'home')

const homeRoutes = [
	{
		'path': '/home',
		'name': 'home',
		'component': Home
	}
]

export default homeRoutes
