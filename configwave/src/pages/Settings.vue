<template>
  <div class="flex h-full">
    <!-- Menu secundário -->
    <div class="w-64 border-r border-gray-200 dark:border-gray-700 p-4">
      <div
        class="flex items-center gap-2 p-2 font-bold text-lg"
      >
        <span>{{ "Configurações" }}</span>
      </div>

      <div
        v-for="option in settingsData.settings"
        :key="option.label"
        class="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
        @click="selectedOption = option"
      >
        <i :class="option.icon"></i>
        <span>{{ option.label }}</span>
      </div>
    </div>

    <!-- Conteúdo das subOpções -->
    <div class="flex-1 p-6">
      <h2 class="text-xl font-bold mb-4">{{ selectedOption?.label || 'Selecione uma opção' }}</h2>
      <div v-if="selectedOption?.subOptions">
        <ConfigOption
          v-for="sub in selectedOption.subOptions"
          :key="sub.label"
          :option="sub"
        />
      </div>
      <div v-else class="text-gray-500 dark:text-gray-400">Nenhuma sub-opção disponível</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ConfigOption from '@/components/ConfigOption.vue'
import { settingsData, Option } from '@/data/settingsData'

const selectedOption = ref<Option | null>(null)
</script>
