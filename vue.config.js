const fs = require('fs')
module.exports = {
	css: {
		loaderOptions: {
			sass: {
				data: fs.readFileSync('src/common/styles/styles.scss', 'utf-8')
			}
		}
	},
	assetsDir: 'static',
	publicPath: './'
}
