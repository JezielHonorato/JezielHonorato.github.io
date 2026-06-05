<template>
  <section class="p-6 sm:p-8">
    <p class="font-mono text-xs tracking-widest text-text-400 mb-8">// CONFIGURAÇÕES</p>
    <div class="mb-6">
      <h3 class="text-xs font-mono tracking-wider text-text-500 uppercase mb-4">Tema</h3>

      <div class="grid grid-cols-1 gap-2">
        <button v-for="tema in temas" :key="tema.nome" @click="mudarTema(tema.nome)" class="flex items-center cursor-pointer gap-3 w-full px-4 py-3 rounded-lg text-left text-sm font-medium transition-all duration-200" :class="[tema.preview, temaAtual === tema.nome ? 'ring-2 ring-brand scale-[1.01] shadow-sm font-semibold' : 'opacity-70 hover:opacity-100']">
          <span class="w-2 h-2 rounded-full transition-transform" :class="temaAtual === tema.nome ? 'bg-brand scale-125' : 'bg-transparent border border-current'" />
          {{ tema.label }} theme
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { temas, temaAtual, mudarTema } from '@/store/theme'
</script>
