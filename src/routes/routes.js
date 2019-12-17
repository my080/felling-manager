import Vue from 'vue'
import VueRouter from 'vue-router'

import loginRoute from '../pages/login/route/route.js'
import homeRoute from '../pages/home/route/route.js'
import mainRoute from '../pages/main/route/route.js'

let routes = []

routes = routes.concat(loginRoute, homeRoute, mainRoute)

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	// base: '/felling-manager/',
	routes: routes
})

export default router