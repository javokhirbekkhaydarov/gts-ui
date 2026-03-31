import './assets/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Tooltip from 'primevue/tooltip'

const app = createApp(App)

app.directive('tooltip', Tooltip)
app.use(PrimeVue)
app.use(router)

app.mount('#app')
