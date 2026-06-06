import { ref } from 'vue'

export const temas = [
  {
    nome: 'light',
    label: 'Light',
    preview: 'bg-white border',
  },
  {
    nome: 'dark',
    label: 'Dark',
    preview: 'bg-black',
  },
  {
    nome: 'kill-bill',
    label: 'Kill Bill',
    preview: 'bg-yellow-400',
  },
] as const

// Configurações de tema
export const temaAtual = ref('light')

function applyTheme(tema: string): void {
  const root = document.documentElement

  Object.values(temas.map((t) => t.nome))
    .filter(Boolean)
    .forEach((classe) => {
      root.classList.remove(classe!)
    })

  const classe = temas.find((t) => t.nome === tema)?.nome

  if (classe) {
    root.classList.add(classe)
  }
}

export function mudarTema(tema: string): void {
  applyTheme(tema)

  temaAtual.value = tema

  localStorage.setItem('theme', tema)
}

// Configurações de fonte

export const fontScale = ref(100)
const MAX_SCALE = 140
const MIN_SCALE = 70
const STEP = 10

export function updateHtmlFontSize() {
  document.documentElement.style.fontSize = `${fontScale.value}%`
  localStorage.setItem('user-font-scale', fontScale.value.toString())
}

export function increaseFont(): void {
  if (fontScale.value < MAX_SCALE) {
    fontScale.value += STEP
    updateHtmlFontSize()
  }
}

export function decreaseFont(): void {
  if (fontScale.value > MIN_SCALE) {
    fontScale.value -= STEP
    updateHtmlFontSize()
  }
}

export function normalizeFont(): void {
  fontScale.value = 100
  updateHtmlFontSize()
}

// Carregar configurações iniciais
export function loadSettings(): void {
  const savedScale = localStorage.getItem('user-font-scale')
  if (savedScale) {
    fontScale.value = parseInt(savedScale, 10)
  }

  const temaSalvo = localStorage.getItem('theme')
  const temaExiste = temas.some((tema) => tema.nome === temaSalvo)

  updateHtmlFontSize()
  if (temaExiste) {
    mudarTema(temaSalvo as string)
    return
  }
  mudarTema('light')
}
