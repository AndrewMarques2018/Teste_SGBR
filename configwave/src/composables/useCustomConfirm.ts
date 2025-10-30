import { reactive } from 'vue'

export const confirmState = reactive({
  open: (opts: any) => {},
  resolve: (result: boolean) => {},
})

// chamada principal
export function useCustomConfirm() {
  function require(options: {
    header?: string
    message?: string
    acceptLabel?: string
    rejectLabel?: string
  }) {
    return new Promise<boolean>((resolve) => {
      confirmState.resolve = resolve
      confirmState.open(options)
    })
  }

  return { require }
}
