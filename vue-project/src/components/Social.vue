<template>
  <div class="flex gap-4 flex-wrap items-center text-sm">
    <a v-for="item in socials" :key="item.label" :href="item.link" target="_blank" class="flex items-center gap-2 font-mono text-text-600 hover:text-text-900 transition">
      <component :is="item.icon" class="w-4 h-4" />
      <span class="hidden sm:inline">{{ item.label }}</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { IconGithub, IconLinkedin, IconMail } from '@/icons'

interface Social {
  label: string
  link: string
  icon: any
}

const socials: Social[] = [
  {
    label: 'github/jezielhonorato',
    link: 'https://github.com/jezielhonorato',
    icon: IconGithub,
  },
  {
    label: 'linkedin',
    link: 'https://linkedin.com/in/jezielhonorato',
    icon: IconLinkedin,
  },
  {
    label: 'jezielh.ss@gmail.com',
    link: 'mailto:jezielh.ss@gmail.com',
    icon: IconMail,
  },
]
</script>
