
import Request from '../../../common/scripts/request/request.js'

class MainService {
	
	constructor() {
		this.request = new Request()
	}
	
	listMenus(options) {
		return this.request.post('tcnp-web/menu/queryMenuListByUserFuncId', options)
	}
	
	test(options) {
		return this.request.get('index', options)
	}
	
	
	
}

export default MainService
