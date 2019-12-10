import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'
import state from './state'

import loginStore from '../pages/login/store/store.js'
import homeStore from '../pages/home/store/store.js'
import comStore from '../pages/compmanage/store/store.js'
import achiStore from '../pages/achimanage/store/store.js'
import sysStore from '../pages/sysadmin/store/store.js'
import govnceStore from '../pages/datagovnce/store/store.js'
import tableStore from '../pages/datatable/store/store.js'
import testStore from '../pages/test/store/store.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
	modules: {
		login: loginStore,
		home: homeStore,
		com: comStore,
		achi: achiStore,
		sys: sysStore,
		govnce: govnceStore,
		table: tableStore,
		test: testStore
	}
})

export default store
