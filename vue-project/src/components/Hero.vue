<template>
  <section class="max-w-180 mx-auto px-6 sm:px-8 pt-24 pb-16">
    <p class="flex items-center gap-3 text-xs font-mono tracking-widest text-text-subtle mb-6">
      <span class="w-6 h-px bg-border-main"></span>
      HELLO WORLD
    </p>

    <h1 class="text-[clamp(2.4rem,6vw,4rem)] leading-tight tracking-tight mb-6 text-text-main">
      Olá, sou <br />
      <span class="text-text-muted italic">{{ nome }}</span>
    </h1>

    <p class="text-base sm:text-lg text-text-muted max-w-130 leading-relaxed mb-10">
      {{ descricao }}
    </p>

    <div class="flex flex-wrap gap-3 mb-8">
      <a href="http://lattes.cnpq.br/7716573588456390" class="px-5 py-2.5 cursor-pointer text-sm rounded-md bg-brand text-bg-base font-bold transition-all duration-200 ease-out hover:-translate-y-px hover:shadow-md active:translate-y-0"> Currículo </a>

      <a href="#contato" class="px-5 py-2.5 cursor-pointer text-sm rounded-md border border-border-main text-text-main transition-all duration-200 ease-out hover:-translate-y-px hover:bg-bg-surface active:translate-y-0"> Contato </a>
    </div>

    <Social />
  </section>
</template>

<script setup lang="ts">
import Social from '@/components/Social.vue'

const nome = 'Jeziel Honorato'
const descricao = 'Bacharelando em Tecnologia da Informação.'
</script>
