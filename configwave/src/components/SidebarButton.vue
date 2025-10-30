<template>
  <router-link
    :to="route"
    class="relative flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-200"
    :class="[
      active
        ? 'bg-gray-200 dark:bg-gray-700 text-blue-500'
        : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-400'
    ]"
  >
    <i :class="['pi', icon, 'text-xl']"></i>

    <!-- Tooltip flutuante -->
    <div
      class="absolute left-14 px-2 py-1 rounded-md bg-gray-900 text-white text-sm whitespace-nowrap opacity-0 pointer-events-none transition-opacity duration-200"
    >
      {{ label }}
    </div>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  label: string
  active?: boolean
  route: string
}>()
</script>

<style scoped>
a:hover div {
  opacity: 1;
}
</style>
