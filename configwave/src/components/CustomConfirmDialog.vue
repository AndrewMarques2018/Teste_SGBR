<template>
  <Transition name="fade">
    <div
      v-if="visible"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
    >
      <div
        class="bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-lg shadow-xl w-[90%] max-w-sm p-5"
      >
        <h3 class="text-lg font-semibold mb-2">{{ options.header || 'Confirmação' }}</h3>
        <p class="text-sm mb-5">{{ options.message || 'Tem certeza?' }}</p>

        <div class="flex justify-end gap-3">
          <button
            @click="reject"
            class="px-4 py-2 rounded-md border border-gray-300 dark:border-slate-600 hover:bg-gray-100 dark:hover:bg-slate-700 text-sm"
          >
            {{ options.rejectLabel || 'Cancelar' }}
          </button>
          <button
            @click="accept"
            class="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm"
          >
            {{ options.acceptLabel || 'Confirmar' }}
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { confirmState } from '@/composables/useCustomConfirm'

const visible = ref(false)
const options = reactive<any>({})

confirmState.open = (opts: any) => {
  Object.assign(options, opts)
  visible.value = true
}

function accept() {
  visible.value = false
  confirmState.resolve(true)
}
function reject() {
  visible.value = false
  confirmState.resolve(false)
}
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
</style>
