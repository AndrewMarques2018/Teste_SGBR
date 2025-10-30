import './styles/tailwind.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'

import ConfirmationService from 'primevue/confirmationservice'
import DialogService from 'primevue/dialogservice'
import ToastService from 'primevue/toastservice'

import { VueQueryPlugin } from '@tanstack/vue-query'

const app = createApp(App)

app.use(router)
app.use(VueQueryPlugin)

app.use(PrimeVue, { 
  ripple: true 
})

app.use(ConfirmationService)
app.use(ToastService)
app.use(DialogService)

app.mount('#app')
