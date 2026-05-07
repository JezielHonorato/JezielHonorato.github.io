<template>
  <nav class="sticky top-0 z-50 backdrop-blur-md bg-background-50/80 border-b border-text-200 px-6 sm:px-8 h-14 flex items-center justify-between">
    <a class="font-mono text-xs tracking-widest text-text-900"> JEZIEL.HONORATO </a>

    <div class="flex items-center gap-6">
      <ul class="hidden sm:flex gap-6 text-xs font-mono text-text-500">
        <li v-for="l in links" :key="l.href">
          <a :href="l.href" class="relative transition hover:text-text-900">
            {{ l.label }}

            <span class="absolute left-0 -bottom-1 h-px w-0 bg-text-900 transition-all duration-200 group-hover:w-full"></span>
          </a>
        </li>
      </ul>

      <button @click="toggleDark" class="flex items-center justify-center w-9 h-9 rounded-md border border-text-200 text-text-600 transition-all duration-200 hover:bg-background-100 hover:text-text-900 hover:-translate-y-px active:translate-y-0">
        <component :is="isDark ? IconSun : IconMoon" class="w-4 h-4" />
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { IconSun, IconMoon } from '@/icons'

const isDark = ref(false)

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})

function toggleDark() {
  document.documentElement.classList.toggle('dark')
  isDark.value = !isDark.value
}

interface Link {
  label: string
  href: string
}

const links: Link[] = [
  { label: 'trajetória', href: '#trajetoria' },
  { label: 'certificados', href: '#certificados' },
  { label: 'contato', href: '#contato' },
]
</script>
