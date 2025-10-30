import { ref } from 'vue'
import { theme, ThemeType } from '@/composables/useTheme'

export type SubOptionType = 'Label' | 'Switch' | 'InputLine' | 'InputBox' | 'Image' | 'List' | 'Button'

export interface FaqItem {
  question: string
  answer: string
}

export interface SubOption {
  label: string
  type: SubOptionType
  value: any
}

export interface Option {
  label: string
  icon: string
  subOptions?: SubOption[]
}

export interface SettingsMenu {
  home: { label: string }
  profile: SubOption[]
  settings: Option[]
}

export const settingsData = ref<SettingsMenu>({
  home: { label: 'Home' },
  profile: [
    {
      label: 'Avatar',
      type: 'Image',
      value: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png', // URL de exemplo
    },
    { label: 'Nome', type: 'InputLine', value: 'John Doe' },
    { label: 'Email', type: 'InputLine', value: 'john@example.com' },
    { label: 'Sobre', type: 'InputBox', value: '' },
    { label: 'Sair', type: 'Button', value: 'logout_action' }
  ],
  settings: [
    {
      label: 'Conta',
      icon: 'pi pi-user',
      subOptions: [
        { label: 'Alterar senha', type: 'InputLine', value: '' },
        { label: 'Dados da conta', type: 'InputLine', value: '' },
      ],
    },
    {
      label: 'Privacidade',
      icon: 'pi pi-lock',
      subOptions: [
        { label: 'Perfil privado', type: 'Switch', value: false },
      ],
    },
    {
      label: 'Tema',
      icon: 'pi pi-palette',
      subOptions: [
        { label: 'Tema escuro', type: 'Switch', value: theme.value }, // funcional
      ],
    },
    {
      label: 'Notificações',
      icon: 'pi pi-bell',
      subOptions: [
        { label: 'Receber notificações', type: 'Switch', value: true },
      ],
    },
    {
      label: 'Ajuda',
      icon: 'pi pi-question-circle',
      subOptions: [
        {
          label: 'FAQ',
          type: 'List',
          value: [
            {
              question: 'Quanto tempo leva para meu pedido chegar?',
              answer:
                'O prazo de entrega varia de 5 a 10 dias úteis, dependendo da sua localização e da forma de envio escolhida.',
            },
            {
              question: 'Como altero minha senha?',
              answer:
                'Vá para a seção "Conta" e clique em "Alterar Senha". Siga as instruções para definir uma nova senha.',
            },
            {
              question: 'Posso usar o sistema offline?',
              answer: 'Não, uma conexão ativa com a internet é necessária.',
            },
          ] as FaqItem[], // Usamos 'as' para garantir a tipagem
        },
        { label: 'Contato', type: 'Label', value: 'andrewmarques2018@gmail.com' },
      ],
    },
  ],
})
