import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import Home from './vue/pages/Home'
import Hello from './vue/pages/Hello'

// Import styles
import './sass/styles.scss'

// install router
Vue.use(Router)

// routing
var router = new Router()

router.map({
	'/': {
		component: Home
	},
	'/hello': {
		component: Hello
	}
})

router.start(App, '#app')
