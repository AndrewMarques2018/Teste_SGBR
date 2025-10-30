<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-6">Perfil</h1>
    <ConfigOption
      v-for="field in profileFields"
      :key="field.label"
      :option="field"
    />
  </div>
</template>

<script setup lang="ts">
import ConfigOption from '@/components/ConfigOption.vue'
import { settingsData } from '@/data/settingsData'

const profileFields = settingsData.value.profile
</script>
