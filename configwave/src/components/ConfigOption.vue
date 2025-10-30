<template>
  <div class="flex flex-col gap-3 p-4 border-b border-gray-200 dark:border-gray-700">
    <template v-if="option.type === 'Label'">
      <span class="text-gray-700 dark:text-gray-200">{{ option.label }}: {{ option.value }}</span>
    </template>

    <template v-else-if="option.type === 'Switch'">
      <div class="flex items-center justify-between">
        <span>{{ option.label }}</span>
        <!-- Toggle moderno -->
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
        <label class="mb-1 text-sm text-gray-600 dark:text-gray-300">{{ option.label }}</label>
        <input type="text" v-model="option.value"
          class="border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </div>
    </template>

    <template v-else-if="option.type === 'InputBox'">
      <div class="flex flex-col">
        <label class="mb-1 text-sm text-gray-600 dark:text-gray-300">{{ option.label }}</label>
        <textarea v-model="option.value" rows="4"
          class="border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps, watch } from 'vue'
import type { SubOption } from '@/data/settingsData'
import { useTheme } from '@/composables/useTheme'

const { theme, toggleTheme } = useTheme()

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
  /* azul padrão */
}
</style>
