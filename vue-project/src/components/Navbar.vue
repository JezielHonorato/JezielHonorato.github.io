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
        <IconSettings @click="openSettings()" class="w-4 h-4 cursor-pointer" />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { IconSettings } from '@/icons'
import { toggleSettings } from '@/store/settings'

function openSettings(): void {
  toggleSettings()
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
