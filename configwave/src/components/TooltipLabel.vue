<template>
  <div class="relative group">
    <slot />
    <div
      v-if="text"
      :class="[
        'absolute whitespace-nowrap px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 translate-x-2 transition-all duration-200',
        position === 'right' ? 'left-full top-1/2 -translate-y-1/2 ml-2' : '',
        currentTheme.tooltip
      ]"
    >
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '@/composables/useTheme';
import { themes } from '@/styles/theme';
import { computed } from 'vue';

interface Props {
  text: string;
  position?: 'left' | 'right' | 'top' | 'bottom';
}

const props = defineProps<Props>();

const { theme } = useTheme();
const currentTheme = computed(() => themes[theme.value]);
</script>
