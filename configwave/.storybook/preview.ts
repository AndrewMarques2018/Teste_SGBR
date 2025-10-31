// .storybook/preview.ts

import { setup, type Preview } from '@storybook/vue3'
import { app } from '@storybook/vue3'

// 1. Importar Serviços e Módulos do PrimeVue
import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'

import CustomConfirmDialog from '../src/components/CustomConfirmDialog.vue'
import CustomToast from '../src/components/CustomToast.vue'

import '../src/styles/tailwind.css'
import 'primeicons/primeicons.css'

// 4. Registrar globalmente no Storybook
setup((app) => {
  app.use(PrimeVue, { ripple: true })
  app.use(ConfirmationService)
  
  app.component('CustomConfirmDialog', CustomConfirmDialog)
  app.component('CustomToast', CustomToast)
})

// 5. Adicionar um "decorator" que envolve TODAS as histórias
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // O Decorator é o "palco"
  decorators: [
    (story) => ({
      components: { story, CustomConfirmDialog, CustomToast },
      template: `
        <div class="font-sans">
          <story />
          
          <ConfirmDialog />
          <Toast />
        </div>
      `,
    }),
  ],
}

export default preview