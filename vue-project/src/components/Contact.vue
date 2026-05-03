<template>
  <section id="contato" class="max-w-180 mx-auto px-6 sm:px-8 py-20">
    <p class="font-mono text-xs tracking-widest text-text-400 mb-10">// # CONTATO</p>

    <div class="grid md:grid-cols-2 gap-10">
      <div>
        <h2 class="text-2xl sm:text-3xl text-text-900 mb-4">Vamos conversar</h2>

        <p class="text-text-600 leading-relaxed">Aberto a oportunidades, colaborações ou apenas trocar uma ideia.</p>
      </div>

      <div class="flex flex-col gap-3">
        <a v-for="c in contatos" :key="c.label" :href="c.link" target="_blank" class="group flex items-center gap-3 px-4 py-3 rounded-md border border-text-200 bg-background-50 transition-all duration-200 hover:-translate-y-px hover:bg-background-100 hover:border-text-300">
          <component :is="c.icon" class="w-4 h-4 text-text-500" />

          <span class="text-sm text-text-700 flex-1">
            {{ c.label }}
          </span>

          <span class="text-text-400 transition group-hover:translate-x-1 group-hover:text-text-900"> → </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IconMail, IconInstagram, IconLinkedin } from '@/icons'

interface Contact {
  label: string
  link: string
  icon: any
}

const contatos: Contact[] = [
  {
    label: 'instagram',
    link: 'https://www.instagram.com/jezielhonorato/',
    icon: IconInstagram,
  },
  {
    label: 'linkedin',
    link: 'https://linkedin.com/in/jezielhonorato',
    icon: IconLinkedin,
  },
  {
    label: 'jezielh.ss@gmail.com',
    link: 'mailto:jezielh.ss@email.com',
    icon: IconMail,
  },
]
</script>
