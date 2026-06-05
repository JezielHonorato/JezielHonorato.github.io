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

export type Tema = (typeof temas)[number]['nome']

export const temaAtual = ref<Tema>('light')

const classesTema: Record<Tema, string | null> = {
  light: null,
  dark: 'dark',
  'kill-bill': 'theme-kill-bill',
}

function aplicarTema(tema: Tema): void {
  const root = document.documentElement

  Object.values(classesTema)
    .filter(Boolean)
    .forEach((classe) => {
      root.classList.remove(classe!)
    })

  const classe = classesTema[tema]

  if (classe) {
    root.classList.add(classe)
  }
}

export function mudarTema(tema: Tema): void {
  aplicarTema(tema)

  temaAtual.value = tema

  localStorage.setItem('theme', tema)
}

export function carregarTema(): void {
  const temaSalvo = localStorage.getItem('theme')

  const temaExiste = temas.some((tema) => tema.nome === temaSalvo)

  if (temaExiste) {
    mudarTema(temaSalvo as Tema)
    return
  }

  mudarTema('light')
}
