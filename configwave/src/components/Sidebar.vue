<template>
  <div
    :class="[
      'h-screen flex flex-col justify-between items-center py-4',
      currentTheme.sidebar,
      'transition-all duration-300 w-16'
    ]"
  >
    <!-- Top icons -->
    <div class="flex flex-col gap-6 items-center">
      <TooltipLabel text="Home" position="right">
        <i
          class="pi pi-home text-xl cursor-pointer"
          :class="currentTheme.text"
          @click="$router.push('/home')"
        ></i>
      </TooltipLabel>
    </div>

    <!-- Bottom icons -->
    <div class="flex flex-col gap-6 items-center">
      <TooltipLabel text="Configurações" position="right">
        <i
          class="pi pi-cog text-xl cursor-pointer"
          :class="currentTheme.text"
          @click="$router.push('/settings')"
        ></i>
      </TooltipLabel>

      <TooltipLabel text="Perfil" position="right">
        <i
          class="pi pi-user text-xl cursor-pointer"
          :class="currentTheme.text"
          @click="$router.push('/profile')"
        ></i>
      </TooltipLabel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '@/composables/useTheme';
import { computed } from 'vue';
import { themes } from '@/styles/theme';
import TooltipLabel from './TooltipLabel.vue';

const { theme } = useTheme();
const currentTheme = computed(() => themes[theme.value]);
</script>
