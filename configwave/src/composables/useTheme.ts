import { ref, watch } from 'vue'

export type ThemeType = 'light' | 'dark'

const storedTheme = localStorage.getItem('theme') as ThemeType | null
export const theme = ref<ThemeType>(storedTheme || 'light')

// Aplica classe no <html> ou <body> para o tema
const applyTheme = (t: ThemeType) => {
  document.documentElement.classList.remove('light', 'dark')
  document.documentElement.classList.add(t)
}

applyTheme(theme.value)

// Observa mudanças e atualiza localStorage
watch(theme, (newTheme) => {
  localStorage.setItem('theme', newTheme)
  applyTheme(newTheme)
})

export const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

export const useTheme = () => {
  return { theme, toggleTheme }
}
