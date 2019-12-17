import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'
import state from './state'

import homeStore from '../pages/home/store/store.js'
import loginStore from '../pages/login/store/store.js'
import mainStore from '../pages/main/store/store.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
	modules: {
		home: homeStore,
		login: loginStore,
		main: mainStore
	}
})

export default store
