import { createApp } from 'vue'
// import router from './router'

import App from './App.vue'

// views components
import { createRouter, createWebHistory } from 'vue-router'
import AppHome from './pages/AppHome.vue'
import AppPortfolio from './pages/AppPortfolio.vue'
import AppContact from './pages/AppContact.vue'
import AppProject from './pages/AppProject.vue'



const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', name: 'home', component: AppHome },
		{ path: '/portfolio', name: 'portfolio', component: AppPortfolio },
		{ path: '/contact', name: 'contact', component: AppContact },
		{ path: '/project/:id', name: 'project', component: AppProject }
	],
})

createApp(App).use(router).mount('#app')