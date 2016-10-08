// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Home from './vue/pages/Home'
import Hello from './vue/pages/Hello'

// Import styles
import './sass/styles.scss'

// install router
Vue.use(VueRouter)

const routes = [
	{ path: '/', component: Home },
	{ path: '/hello', component: Hello }
]

// routing
const router = new VueRouter({
	routes: routes
})

const app = new Vue({
	router,
	...App
})
app.$mount('#app')
