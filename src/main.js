import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/index.scss';
// import VueRouter from 'vue-router';
import router from './components/router.js';

// const router = VueRouter.createRouter({
//     history: VueRouter.createWebHashHistory(),
//     routes, // short for `routes: routes`
//   })
//   const routes = [
//     { path: '/', component: Home },
//     { path: '/about', component: About },
//   ]

// createApp(App).mount('#app')
const app = createApp(App)
app.use(router)
app.mount('#app')

