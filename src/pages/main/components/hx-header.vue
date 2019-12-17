<template>
	<header>
		<nav>
			<div class="logo">
				<strong>工艺</strong>
				<strong>平台</strong>
			</div>
		</nav>
	</header>
</template>

<script>
	export default {
		
	}
</script>

<style>
	header {
		width: 100%;
		background: $back-color;
		height: 50px;;
		z-index: 10;
	}
	nav {
		padding: 1rem;
		height: 50px;
		box-sizing: border-box;
		width: 100%;
		background: $back-color;
		border-bottom: $border;
		position: fixed;
		background: white;
		z-index: 500;
		color: $green-primary;
		border-bottom: 1px solid #e8e9ed;
	}
</style>
