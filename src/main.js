import { createApp } from 'vue'
import App from './App.vue'
import shop from '../src/API/shop'

createApp(App).use(shop).mount('#app')
