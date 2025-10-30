<template>
  <div class="flex flex-col gap-3 p-4 border-b border-gray-200 dark:border-gray-700">
    <template v-if="option.type === 'Label'">
      <span class="text-gray-700 dark:text-gray-200">{{ option.label }}: {{ option.value }}</span>
    </template>

    <template v-else-if="option.type === 'Switch'">
      <div class="flex items-center justify-between">
        <span>{{ option.label }}</span>
        <button
          class="relative inline-flex items-center h-6 w-12 rounded-full transition-colors duration-300 focus:outline-none"
          :class="option.value ? 'bg-toggleOn' : 'bg-toggleOff dark:bg-gray-600'" @click="onSwitchClick(option)">
          <span class="inline-block w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300"
            :class="option.value ? 'translate-x-6' : 'translate-x-1'"></span>
        </button>
      </div>
    </template>

    <template v-else-if="option.type === 'InputLine'">
      <div class="flex flex-col">
        <label class="mb-1 text-sm text-gray-600 dark:text-gray-300">{{
          option.label
        }}</label>
        <input type="text" v-model="option.value"
          class="border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </div>
    </template>

    <template v-else-if="option.type === 'InputBox'">
      <div class="flex flex-col">
        <label class="mb-1 text-sm text-gray-600 dark:text-gray-300">{{
          option.label
        }}</label>
        <textarea v-model="option.value" rows="4"
          class="border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
      </div>
    </template>

    <template v-else-if="option.type === 'Image'">
      <div class="flex items-center gap-4">
        <Avatar :image="option.value" class="mr-2" size="xlarge" shape="circle" />
        <div class="flex flex-col">
          <span class="text-sm text-gray-600 dark:text-gray-300">{{
            option.label
          }}</span>
        </div>
      </div>
    </template>

    <template v-else-if="option.type === 'List'">
      <div class="flex flex-col">
        <label class="mb-2 text-sm text-gray-600 dark:text-gray-300">{{
          option.label
        }}</label>

        <Accordion :activeIndex="null" unstyled>
          <AccordionTab v-for="(item, index) in (option.value as FaqItem[])" :key="index" :header="item.question"
            :pt="tabStyles" unstyled>
            <p class="m-0">
              {{ item.answer }}
            </p>
          </AccordionTab>
        </Accordion>
      </div>
    </template>

    <template v-else-if="option.type === 'Button'">
      <Button :label="option.label" icon="pi pi-sign-out" :pt="buttonStyles" @click="handleButtonClick(option.value)" />
    </template>
  </div>
</template>

<script setup lang="ts">

import type { SubOption, FaqItem } from '@/data/settingsData'
import { useTheme } from '@/composables/useTheme'

import Avatar from 'primevue/avatar'
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'

import Button from 'primevue/button'
import { useConfirm } from 'primevue/useconfirm' // Para o modal
import { useToast } from 'primevue/usetoast'     // Para o feedback
import { watch } from 'vue'

import { useCustomToast } from '@/composables/useCustomToast'
import { useCustomConfirm } from '@/composables/useCustomConfirm'
const { add } = useCustomToast()
const { require } = useCustomConfirm()

const confirm = useConfirm()
const { theme, toggleTheme } = useTheme()

/**
 * Lida com o clique em qualquer SubOption do tipo 'Button'.
 * Usa o 'action' (do option.value) para decidir o que fazer.
 */
function handleButtonClick(action: string) {
  if (action === 'logout_action') {
    triggerLogoutConfirmation()
  }
}

async function triggerLogoutConfirmation() {
  const confirmed = await require({
    header: 'Confirmação',
    message: 'Tem certeza que deseja sair?',
    acceptLabel: 'Confirmar',
    rejectLabel: 'Cancelar',
  })

  if (confirmed) {
    console.log('Usuário confirmou o logout.')
    add({
      severity: 'info',
      summary: 'Logout realizado',
      detail: 'Você saiu da sua conta.',
    })
  } else {
    console.log('Usuário cancelou.')
  }
}

const tabStyles = {
  root: 'rounded-xl mb-3 overflow-hidden border border-gray-200 dark:border-[#2f3b43] bg-white dark:bg-[#152026] shadow-sm',

  header: 'select-none ml-[15px]',

  headerAction: {
    class: [
      'flex items-center justify-between w-full px-5 py-3', // <-- Título à esquerda, ícone à direita
      'gap-3',
      'text-gray-800 dark:text-gray-200',
      'bg-transparent',
      'transition-colors duration-200 ease-in-out',
      'cursor-pointer',
      'rounded-t-lg',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400',
      'focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#152026]',
      'hover:bg-gray-50 dark:hover:bg-[#0f262d]'
    ].join(' ')
  },

  headerIcon: [
    'ml-auto', // empurra pra direita
    'text-gray-500 dark:text-gray-400',
    'transition-transform duration-300 ease-in-out',
    // a classe abaixo é funcional se PrimeVue adicionar group-data-[state=open] no wrapper
    // caso não, usaremos CSS adicional (veja nota)
    'group-data-[state=open]:rotate-180'
  ].join(' '),

  headerTitle: [
    'font-semibold text-base tracking-wide',
    'text-left',      // garante alinhamento à esquerda
    'flex-1',         // ocupa o espaço disponível entre left + icon
    'mr-3'            // pequeno espaçamento entre título e ícone
  ].join(' '),

  content: 'px-5 pb-5 pt-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed bg-transparent',


  transition: 'overflow-hidden transition-all duration-300 ease-in-out'
};

const buttonStyles = {
  root: {
    class: [
      'w-full text-left p-3',
      'bg-transparent', // Sem fundo
      'text-red-500 dark:text-red-400', // Cor de perigo
      'hover:bg-red-50 dark:hover:bg-red-900/30', // Hover sutil
      'transition-colors duration-200 rounded-lg',
      'border-none shadow-none outline-none', // Limpo
      'focus-visible:ring-2 focus-visible:ring-red-400', // Foco acessível
    ],
  },
  label: 'font-medium',
  icon: 'mr-2',
}

const props = defineProps<{
  option: SubOption
}>()

function onSwitchClick(option: any) {
  if (option.label === 'Tema escuro') {
    toggleTheme()
    option.value = theme.value === 'dark'
  } else {
    option.value = !option.value
  }
}

// Mantém sincronizado quando tema mudar de fora
watch(theme, (newVal) => {
  const isDark = newVal === 'dark'
  if (props.option.label === 'Tema escuro') props.option.value = isDark
})
</script>

<style scoped>
.toggle-switch {
  width: 2.5rem;
  height: 1.2rem;
  accent-color: #3b82f6;
}
</style>