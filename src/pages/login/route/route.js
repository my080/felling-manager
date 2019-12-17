const Login = r => require.ensure([], () => r(require('@/pages/login/hx-index.vue')), 'login')

const loginRoutes = [
	{
		'path': '/login',
		'name': 'login',
		'component': Login
	}
]

export default loginRoutes