import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.css'
import Vue3Toasity from 'vue3-toastify'
import 'vue3-toastify/dist/index.css';

createApp(App).use(Vue3Toasity).use(router).mount('#app')