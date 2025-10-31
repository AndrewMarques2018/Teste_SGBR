<template>
  <div class="flex items-center gap-3">
    <p class="font-medium">Tema</p>
    <InputSwitch v-model="isDark" @change="toggleTheme" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useTheme } from '@/composables/useTheme';
import InputSwitch from 'primevue/inputswitch';

const { theme, toggleTheme: setTheme } = useTheme();
const isDark = ref(theme.value === 'dark');

function toggleTheme() {
  setTheme();
}

watch(theme, (newVal) => {
  isDark.value = newVal === 'dark';
});
</script>
