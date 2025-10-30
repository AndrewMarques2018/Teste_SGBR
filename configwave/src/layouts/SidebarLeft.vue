<template>
  <aside
    class="w-16 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col justify-between py-4 items-center fixed h-screen"
  >
    <!-- Top icons -->
    <div class="flex flex-col gap-6">
      <SidebarButton
        v-for="item in topItems"
        :key="item.label"
        :icon="item.icon"
        :label="item.label"
        :route="item.route"
        :active="isActive(item.route)"
      />
    </div>

    <!-- Bottom icons -->
    <div class="flex flex-col gap-6 mb-4">
      <SidebarButton
        v-for="item in bottomItems"
        :key="item.label"
        :icon="item.icon"
        :label="item.label"
        :route="item.route"
        :active="isActive(item.route)"
      />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import SidebarButton from '@/components/SidebarButton.vue'

interface MenuItem {
  label: string
  icon: string
  route: string
}

const route = useRoute()

const topItems: MenuItem[] = [
  { label: 'Home', icon: 'pi pi-home', route: '/' },
]

const bottomItems: MenuItem[] = [
  { label: 'Configurações', icon: 'pi pi-cog', route: '/settings' },
  { label: 'Perfil', icon: 'pi pi-user', route: '/profile' },
]

function isActive(path: string) {
  return route.path === path
}
</script>
