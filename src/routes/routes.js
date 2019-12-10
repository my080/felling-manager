import Vue from 'vue'
import VueRouter from 'vue-router'

let routes = []

routes = routes.concat([])

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	base: '/felling-manager/',
	routes: routes
})

export default router