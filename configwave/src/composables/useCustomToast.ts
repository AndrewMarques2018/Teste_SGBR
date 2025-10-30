import { reactive } from 'vue'

export type ToastSeverity = 'success' | 'info' | 'warn' | 'error'

export interface ToastItem {
  id: string
  severity?: ToastSeverity
  summary?: string
  detail?: string
  life?: number // ms
}

const defaultLife = 6000

// estado global simples (singleton)
export const toastsState = reactive({
  toasts: [] as ToastItem[],
  add(t: Omit<ToastItem, 'id'>) {
    const id = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`
    const item: ToastItem = { id, ...t, life: t.life ?? defaultLife }
    this.toasts.push(item)
    // auto remove
    setTimeout(() => {
      this.remove(id)
    }, item.life)
    return id
  },
  remove(id: string) {
    const idx = this.toasts.findIndex(t => t.id === id)
    if (idx >= 0) this.toasts.splice(idx, 1)
  }
})

// wrapper mais ergonomico
export function useCustomToast() {
  function add(payload: Omit<ToastItem, 'id'>) {
    return toastsState.add(payload)
  }
  function remove(id: string) { toastsState.remove(id) }
  return { add, remove, toasts: toastsState.toasts }
}
