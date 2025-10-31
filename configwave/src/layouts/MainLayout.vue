<template>
	<div class="flex h-dvh bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
		<SidebarLeft />
		<main class="flex-1 ml-0 p-1 md:p-6 overflow-auto">
			<router-view />
		</main>
	</div>
</template>

<script setup lang="ts">
import SidebarLeft from '@/layouts/SidebarLeft.vue'
</script>