<template>
    <div class="p-6 pt-0">
    <h1 class="text-2xl font-bold mb-6">Perfil</h1>

    <div v-if="isLoading">
      <p>Carregando perfil...</p>
    </div>

    <div v-else-if="isError">
      <p class="text-red-500">
        Ocorreu um erro ao carregar seu perfil: {{ error?.message }}
      </p>
    </div>

    <div v-else>
      <ConfigOption v-for="field in profileFields" :key="field.label" :option="field" />
    </div>

     
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import ConfigOption from '@/components/ConfigOption.vue'
import { settingsData, type SubOption } from '@/data/settingsData'
import { useUserProfile } from '@/composables/useUserProfile' // (Ajuste o caminho se necessário)

const { profile: user, isLoading, isError, error } = useUserProfile()

const profileFields = ref<SubOption[]>(settingsData.value.profile)

// 3. Usa watchEffect para atualizar os campos QUANDO os dados do usuário chegarem.
watchEffect(() => {
  if (user.value) {
    profileFields.value = settingsData.value.profile.map(field => {
      const modelKey = (field as any).modelKey // Usamos 'any' para segurança
      // cast para Record<string, any> para permitir indexação dinâmica sem erro do TS
      if (modelKey && (user.value as Record<string, any>)[modelKey] !== undefined) {

        return {
          ...field,
          value: (user.value as Record<string, any>)[modelKey]
        }
      }
      return field
    })
  } else {
    profileFields.value = settingsData.value.profile
  }
})
</script>