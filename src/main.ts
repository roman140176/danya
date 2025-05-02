import { createApp } from 'vue'
import App from './App.vue'
import VueEasyLightbox from 'vue-easy-lightbox'
import './assets/tailwind.css'
import './style.css'


const app = createApp(App)
app.component('VueEasyLightbox', VueEasyLightbox)

app.mount('#app')