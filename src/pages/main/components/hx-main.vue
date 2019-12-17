<template>
	<div class="main">
		<hx-left-menu></hx-left-menu>
		<hx-right-main></hx-right-main>
	</div>
</template>

<script>
	
	import LeftMenu from './hx-left-menu.vue'
	import RightMain from './hx-right-main.vue'
	
	export default {
		components: {
			'hx-left-menu': LeftMenu,
			'hx-right-main': RightMain
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.main {
		flex-grow: 1;
		display: flex;
	}
</style>
