<template>
	<div id="app">
		<img src="./assets/logo.png" alt="logo">
		<h1>Welcome to your Vue.js app!</h1>
		<ul>
			<li>
				<router-link to="/">Home</router-link>
			</li>
			<li>
				<router-link to="/hello">Hello</router-link>
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>
