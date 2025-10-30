import { ref } from 'vue'
import { theme, ThemeType } from '@/composables/useTheme'

export type SubOptionType = 'Label' | 'Switch' | 'InputLine' | 'InputBox'

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
    { label: 'Nome', type: 'InputLine', value: 'John Doe' },
    { label: 'Telefone', type: 'InputLine', value: '+55 12345-6789' },
    { label: 'Email', type: 'InputLine', value: 'john@example.com' },
    { label: 'Sobre', type: 'InputBox', value: '' },
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
        { label: 'FAQ', type: 'Label', value: 'Quanto tempo leva para meu pedido chegar? O prazo de entrega varia de 5 a 10 dias úteis, dependendo da sua localização e da forma de envio escolhida. Você pode verificar o prazo exato na página de checkout.' },
        { label: 'Contato', type: 'Label', value: 'andrewmarques2018@gmail.com' },
      ],
    },
  ],
})
