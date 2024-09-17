import { createApp } from 'vue'
// import router from './router'

import App from './App.vue'

//INSTALL FONT AWESOM
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// / import font awesome icon component /
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// / add icons to the library */
library.add(fas, far, fab)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

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