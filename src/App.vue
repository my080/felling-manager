<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app',
		components: {}
	}
</script>

<style>
	@import url("common/styles/reset.css");
	@import url("common/styles/common.css");
	
	#app {
		height: 100%;
	}
</style>
