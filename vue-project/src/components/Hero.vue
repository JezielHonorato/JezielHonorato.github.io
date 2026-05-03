<template>
  <section class="max-w-180 mx-auto px-6 sm:px-8 pt-24 pb-16">
    <p class="flex items-center gap-3 text-xs font-mono tracking-widest text-text-500 mb-6">
      <span class="w-6 h-px bg-text-300"></span>
      HELLO WORLD
    </p>

    <h1 class="text-[clamp(2.4rem,6vw,4rem)] leading-tight tracking-tight mb-6 text-text-900">
      Olá, sou <br />
      <span class="text-text-600 italic">{{ nome }}</span>
    </h1>

    <p class="text-base sm:text-lg text-text-600 max-w-130 leading-relaxed mb-10">
      {{ descricao }}
    </p>

    <div class="flex flex-wrap gap-3 mb-8">
      <a href="http://lattes.cnpq.br/7716573588456390" class="px-5 py-2.5 cursor-pointer text-sm rounded-md bg-text-900 text-background-50 transition-all duration-200 ease-out hover:-translate-y-px hover:shadow-md hover:bg-text-800 active:translate-y-0 active:shadow-sm"> Currículo </a>

      <a href="#contato" class="px-5 py-2.5 cursor-pointer text-sm rounded-md border border-text-300 text-text-700 transition-all duration-200 ease-out hover:-translate-y-px hover:border-text-400 hover:bg-background-100 hover:shadow-sm active:translate-y-0"> Contato </a>
    </div>

    <Social />
  </section>
</template>

<script setup lang="ts">
import Social from '@/components/Social.vue'

const nome = 'Jeziel Honorato'
const descricao = 'Bacharelando em Tecnologia da Informação.'
</script>
