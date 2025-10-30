<template>
  <div class="flex h-full">
    <!-- Menu secundário -->
    <div class="w-64 border-r border-gray-200 dark:border-gray-700 p-4">
      <div class="flex items-center gap-2 p-2 font-bold text-lg">
        <span>Configurações</span>
      </div>

      <div
        v-for="option in settingsData.settings"
        :key="option.label"
        class="flex items-center gap-2 p-2 rounded cursor-pointer transition-colors duration-200"
        :class="{
          'bg-gray-200 dark:bg-gray-700': optionRoute(option) === route.params.section,
          'hover:bg-gray-100 dark:hover:bg-gray-700': optionRoute(option) !== route.params.section
        }"
        @click="selectOption(option)"
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

      <div v-else class="text-gray-500 dark:text-gray-400">
        Nenhuma sub-opção disponível
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ConfigOption from '@/components/ConfigOption.vue'
import { settingsData, Option } from '@/data/settingsData'

const route = useRoute()
const router = useRouter()

const selectedOption = ref<Option | null>(null)

// Função que gera o slug da rota com base no label
function optionRoute(option: Option) {
  return option.label
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
}

// Função de clique — altera a rota e o estado
function selectOption(option: Option) {
  selectedOption.value = option
  router.push(`/settings/${optionRoute(option)}`)
}

// Sincroniza o selectedOption com a URL (ex: /settings/tema)
function updateSelectedFromRoute() {
  const section = route.params.section as string | undefined
  if (!section) {
    selectedOption.value = null
    return
  }
  // CORRIGIDO: Acessando .value
  const match = settingsData.value.settings.find( 
    (opt) => optionRoute(opt) === section
  )
  selectedOption.value = match || null
}

// Atualiza quando a rota muda
watch(
  () => route.params.section,
  () => updateSelectedFromRoute(),
  { immediate: true }
)

onMounted(() => {
  updateSelectedFromRoute()
})
</script>
