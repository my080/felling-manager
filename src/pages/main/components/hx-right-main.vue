<template>
	<div class="right-main">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'right-menu'
	}
</script>

<style>
	.right-main {
		padding: 20px;
		flex-grow: 1;
	}
</style>
