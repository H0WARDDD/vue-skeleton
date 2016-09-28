<template>
	<div id="app">
		<img src="assets/logo.png" alt="logo">
		<h1>Welcome to your Vue.js app!</h1>
		<ul>
			<li><a v-link="{ path: '/' }">Home</a></li>
			<li><a v-link="{ path: '/hello' }">Hello</a></li>
		</ul>
		<router-view></router-view>
	</div>
</template>