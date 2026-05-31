<template>
  <nav class="sticky top-0 z-50 backdrop-blur-md bg-bg-base/80 border-b border-border-main px-6 sm:px-8 h-14 flex items-center justify-between">
    <a class="font-mono text-xs tracking-widest text-text-main"> JEZIEL.HONORATO </a>

    <div class="flex items-center gap-6">
      <ul class="hidden sm:flex gap-6 text-xs font-mono text-text-muted">
        <li v-for="l in links" :key="l.href">
          <a :href="l.href" class="relative transition hover:text-text-main group">
            {{ l.label }}
            <span class="absolute left-0 -bottom-1 h-px w-0 bg-text-main transition-all duration-200 group-hover:w-full"></span>
          </a>
        </li>
      </ul>
      <div class="flex gap-2">
        <button v-for="tema in temas" :key="tema.nome" @click="mudarTema(tema.nome as 'light' | 'dark' | 'kill-bill')" class="w-5 h-5 rounded-full transition" :class="[tema.cor, temaAtual === tema.nome ? 'ring-2 ring-text-main' : '']" />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

onMounted(() => {
  const temaSalvo = (localStorage.getItem('theme') as 'light' | 'dark' | 'kill-bill') ?? 'light'

  mudarTema(temaSalvo)
})

const temaAtual = ref<'light' | 'dark' | 'kill-bill'>('light')

const temas = [
  { nome: 'light', cor: 'bg-white border' },
  { nome: 'dark', cor: 'bg-black' },
  { nome: 'kill-bill', cor: 'bg-yellow-400' },
]

function mudarTema(tema: 'light' | 'dark' | 'kill-bill'): void {
  const root = document.documentElement

  root.classList.remove('dark', 'theme-kill-bill')

  if (tema === 'dark') {
    root.classList.add('dark')
  } 
  if (tema === 'kill-bill') {
    root.classList.add('theme-kill-bill')
  }

  temaAtual.value = tema

  localStorage.setItem('theme', tema)
}

interface Link {
  label: string
  href: string
}

const links: Link[] = [
  // { label: 'sobre', href: '#sobre' },
  { label: 'trajetória', href: '#trajetoria' },
  // { label: 'projetos', href: '#projetos' },
  { label: 'certificados', href: '#certificados' },
  { label: 'contato', href: '#contato' },
]
</script>
