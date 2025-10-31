// configwave\src\components\ConfigOption.stories.ts

import type { Meta, StoryObj } from '@storybook/vue3'
import ConfigOption from './ConfigOption.vue'
import type { SubOption, FaqItem } from '@/data/settingsData' // Importe seus tipos

// 1. A "FICHA TÉCNICA" (meta)
const meta: Meta<typeof ConfigOption> = {
  title: 'ConfigWave/ConfigOption', // Onde vai aparecer no menu
  component: ConfigOption,
  tags: ['autodocs'], // Gera a aba 'Docs'
  argTypes: {
    // Descreve a prop 'option' para o painel de Controles
    option: {
      control: 'object',
      description: 'O objeto de configuração (SubOption) que define o tipo e valor',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// 2. OS "ROTEIROS" (Histórias/Variações)

// Variação 1: Input de Linha
export const InputLine: Story = {
  args: {
    option: {
      label: 'Nome',
      type: 'InputLine',
      value: 'John Doe',
      modelKey: 'name',
    } as SubOption,
  },
}

// Variação 2: Input de Caixa (Textarea)
export const InputBox: Story = {
  args: {
    option: {
      label: 'Sobre',
      type: 'InputBox',
      value: 'Desenvolvedor focado em Vue e TypeScript. Gosta de criar componentes bem documentados.',
      modelKey: 'about',
    } as SubOption,
  },
}

// Variação 3: Switch (Ligado)
export const SwitchOn: Story = {
  args: {
    option: {
      label: 'Tema escuro',
      type: 'Switch',
      value: true, // Estado 'ligado'
      modelKey: 'darkMode',
    } as SubOption,
  },
}

// Variação 4: Switch (Desligado)
export const SwitchOff: Story = {
  args: {
    option: {
      label: 'Notificações por Email',
      type: 'Switch',
      value: false, // Estado 'desligado'
      modelKey: 'emailNotifications',
    } as SubOption,
  },
}

// Variação 5: Imagem (Avatar)
export const Image: Story = {
  args: {
    option: {
      label: 'Avatar',
      type: 'Image',
      value: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
      modelKey: 'avatar',
    } as SubOption,
  },
}

// Variação 6: Lista (Accordion/FAQ)
export const List: Story = {
  args: {
    option: {
      label: 'FAQ',
      type: 'List',
      value: [ // Mock de dados para a lista
        { question: 'O que é ConfigWave?', answer: 'É uma aplicação de exemplo.' },
        { question: 'Como mudo meu avatar?', answer: 'Vá para a seção de perfil.' },
        { question: 'Quem fez este app?', answer: 'Um dev incrível!' },
      ] as FaqItem[],
      modelKey: 'faq',
    } as SubOption,
  },
}

// Variação 7: Botão (Logout)
export const Button: Story = {
  args: {
    option: {
      label: 'Sair',
      type: 'Button',
      value: 'logout_action', // A ação que o componente espera
      modelKey: 'logout',
    } as SubOption,
  },
}

// Variação 8: Label (Texto simples)
export const Label: Story = {
  args: {
    option: {
      label: 'Email',
      type: 'Label',
      value: 'email@example.com',
      modelKey: 'email',
    } as SubOption,
  },
}