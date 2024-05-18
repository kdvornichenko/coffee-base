import { ref } from 'vue'
import { defineStore } from 'pinia'

type darkMode = 'dark' | 'light'

export const useDarkModeStore = defineStore('darkMode', () => {
  const mode = ref<darkMode>('dark');
  const isDark = () => mode.value === 'dark';

  return isDark
})
