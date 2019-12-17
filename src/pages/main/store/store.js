
const mainStore = {
	actions: {
		changeTest (state, data) {
			state.test = data
		}
	},
	state: {
		test: 'dfdfdf'
	},
	mutations: {
		setTest (state, data) {
			state.test = data
		}
	}
}

export default mainStore