import './assets/style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// import './assets/main.css'
import router from './router'
import pinia from './stores'
import 'nprogress/nprogress.css'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
