<template>
  <div :class="['fixed z-50 p-4 pointer-events-none', positionClass]" aria-live="polite">
    <transition-group name="toast" tag="div">
      <div
        v-for="t in toasts"
        :key="t.id"
        class="pointer-events-auto mb-3 last:mb-0 max-w-sm w-[320px] rounded-lg shadow-lg overflow-hidden"
        :class="toastBgClass(t.severity)"
      >
        <div class="flex items-start gap-3 p-3">
          <div class="mt-0.5">
            <svg v-if="t.severity==='success'" class="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg v-else-if="t.severity==='info'" class="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M12 8v.01M12 12v4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
            </svg>
            <svg v-else-if="t.severity==='warn'" class="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M10.29 3.86L1.82 18a1.99 1.99 0 001.71 3h16.94a1.99 1.99 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" stroke-width="1.4" fill="none"/>
              <path d="M12 9v4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
              <path d="M12 17h.01" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </svg>
            <svg v-else class="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M12 8v.01M12 12v4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
            </svg>
          </div>

          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between gap-3">
              <div class="text-sm font-semibold truncate" :class="textClass">{{ t.summary }}</div>
              <button class="text-xs opacity-80 hover:opacity-100" @click="remove(t.id)">
                ✕
              </button>
            </div>
            <div class="text-sm mt-1 truncate" :class="textClassSecondary">{{ t.detail }}</div>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { toastsState } from '@/composables/useCustomToast'

const props = defineProps<{
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
}>()

const position = props.position || 'top-right'

const positionClass = computed(() => {
  switch (position) {
    case 'top-left': return 'top-4 left-4'
    case 'top-right': return 'top-4 right-4'
    case 'bottom-left': return 'bottom-4 left-4'
    case 'bottom-right': default: return 'bottom-4 right-4'
  }
})

const toasts = toastsState.toasts

function remove(id: string) {
  toastsState.remove(id)
}

function toastBgClass(severity: string | undefined) {
  // background colors work with tailwind; dark mode uses `dark:...`
  switch (severity) {
    case 'success': return 'bg-white dark:bg-slate-800 border border-green-200 dark:border-green-700'
    case 'info': return 'bg-white dark:bg-slate-800 border border-blue-200 dark:border-blue-700'
    case 'warn': return 'bg-white dark:bg-slate-800 border border-yellow-200 dark:border-yellow-700'
    case 'error': return 'bg-white dark:bg-slate-800 border border-red-200 dark:border-red-700'
    default: return 'bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700'
  }
}

const textClass = computed(() => 'text-slate-900 dark:text-slate-100')
const textClassSecondary = computed(() => 'text-slate-700 dark:text-slate-300')
</script>

<style scoped>
.toast-enter-from { transform: translateY(8px); opacity: 0; }
.toast-enter-active { transform: translateY(0); opacity: 1; transition: all .25s cubic-bezier(.2,.8,.2,1); }
.toast-leave-to { transform: translateY(8px); opacity: 0; transition: all .25s cubic-bezier(.2,.8,.2,1); }
</style>
