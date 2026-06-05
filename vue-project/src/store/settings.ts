import { ref } from 'vue'

export type Tema = 'light' | 'dark' | 'kill-bill'

export const isSettingsOpen = ref(false)

export const temaAtual = ref<Tema>('light')

export function toggleSettings() {
  isSettingsOpen.value = !isSettingsOpen.value
}

export function mudarTema(novoTema: Tema): void {
  const root = document.documentElement

  root.classList.remove('dark', 'theme-kill-bill')

  if (novoTema === 'dark') {
    root.classList.add('dark')
  } else if (novoTema === 'kill-bill') {
    root.classList.add('theme-kill-bill')
  }

  temaAtual.value = novoTema

  localStorage.setItem('theme', novoTema)
}
