// src/components/SidebarButton.stories.ts

import type { Meta, StoryObj } from '@storybook/vue3'
import SidebarButton from './SidebarButton.vue' // 1. Importe o ATOR

// A Ficha Técnica (meta)
const meta: Meta<typeof SidebarButton> = {
  title: 'ConfigWave/SidebarButton', // 2. Onde vai aparecer no menu
  component: SidebarButton,
  tags: ['autodocs'],
  argTypes: {
    // 3. Descrevendo as props que adivinhamos
    label: { 
      control: 'text', 
      description: 'O texto do tooltip (dica de ferramenta)' 
    },
    icon: { 
      control: 'text', 
      description: 'O ícone do PrimeIcons (ex: pi pi-home)' 
    },
    active: { 
      control: 'boolean', 
      description: 'Define se o botão está no estado ativo' 
    },
    route: { 
      control: 'text', 
      description: 'Para onde o botão navega (usado por <router-link>)' 
    },
  },
  // 4. Adiciona um "decorator" (um invólucro)
  // Isso simula o fundo escuro da sua sidebar real,
  // para que os estados 'ativo' e 'hover' fiquem corretos!
  decorators: [
    (story) => ({
      components: { story },
      template: `
        <div class="w-16 p-4 bg-white dark:bg-gray-800 flex justify-center">
          <story />
        </div>
      `,
    }),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const HomeInactive: Story = {
  args: {
    label: 'Home',
    icon: 'pi pi-home',
    route: '/',
    active: false,
  },
}

export const HomeActive: Story = {
  args: {
    label: 'Home',
    icon: 'pi pi-home',
    route: '/profile',
    active: true, // A única diferença!
  },
}

export const PerfilInactive: Story = {
  args: {
    label: 'Perfil',
    icon: 'pi pi-user',
    route: '/',
    active: false,
  },
}

export const PerfilActive: Story = {
  args: {
    label: 'Perfil',
    icon: 'pi pi-user',
    route: '/profile',
    active: true, // A única diferença!
  },
}

export const SettingsInactive: Story = {
  args: {
    label: 'Configurações',
    icon: 'pi pi-cog',
    route: '/',
    active: false,
  },
}

// Variação 2: Botão Ativo
export const SettingsActive: Story = {
  args: {
    label: 'Configurações',
    icon: 'pi pi-cog',
    route: '/settings',
    active: true, // A única diferença!
  },
}
