<template>
	<div class="index">
		
		<hx-header></hx-header>
		
		<hx-main></hx-main>
		
		<hx-footer></hx-footer>
		
	</div>
</template>

<script>
	import MainService from './service/main-service.js'
	import Header from './components/hx-header.vue'
	import Main from './components/hx-main.vue'
	import Footer from './components/hx-footer.vue'
	
	export default {
		components: {
			'hx-header': Header,
			'hx-main': Main,
			'hx-footer': Footer
		},
		beforeCreate() {
			this.mainService = new MainService()
		},
		data() {
			return {
				activeIndex: '1',
				activeIndex2: '1'
			}
		},
		mounted() {
			this.init()
		},
		methods: {
			init() {
				
			},
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
			test() {
				this.mainService.test({ id: 'dfdfdf' }).then(function(data) {
					console.log(data)
				})
			}
		}
	}
</script>

<style>
	.index {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
</style>
