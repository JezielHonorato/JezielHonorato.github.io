<template>
  <section id="trajetoria" class="max-w-180 mx-auto px-6 sm:px-8 py-20">
    <p class="font-mono text-xs tracking-widest text-text-subtle mb-12">// TRAJETÓRIA</p>

    <div class="relative">
      <div class="absolute left-23 top-0 bottom-0 w-px bg-border-main"></div>

      <div v-for="(item, index) in timeline" :key="index" class="grid grid-cols-[70px_1fr] sm:grid-cols-[90px_1fr] gap-6 mb-10">
        <div class="text-right text-xs font-mono text-text-400 pt-1">
          {{ item.ano }}
        </div>

        <div>
          <div v-if="item.tipo === 'primary'" class="group">
            <p class="text-sm font-medium text-text-main">
              {{ item.titulo }}
            </p>

            <p v-if="item.empresa" class="text-xs font-mono text-brand font-bold mb-1">
              {{ item.empresa }}
            </p>

            <p v-if="item.descricao" class="text-sm text-text-muted leading-relaxed">
              {{ item.descricao }}
            </p>
          </div>

          <div v-else class="flex items-center gap-2 text-text-muted">
            <span class="text-xs">•</span>
            <p class="text-xs font-mono">
              {{ item.titulo }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type ItemType = 'primary' | 'secondary'

interface TimelineItem {
  ano: string
  titulo: string
  empresa?: string
  descricao?: string
  tipo: ItemType
}

const timeline: TimelineItem[] = [
  {
    ano: '03/2025',
    titulo: 'Ingresso na UFRN',
    empresa: 'Bacharelado em Tecnologia da Informação',
    descricao: 'Aprofundamento nos conceitos de programação e desenvolvimento de software.',
    tipo: 'primary',
  },
  {
    ano: '12/2023',
    titulo: 'CCNAv7: Switching Routing and Wireless Essentials',
    tipo: 'secondary',
  },
  {
    ano: '11/2023',
    titulo: 'Cloud Basics: Development and Basic Concepts',
    tipo: 'secondary',
  },
  {
    ano: '07/2023',
    titulo: 'CCNAv7: Introduction to Networks',
    tipo: 'secondary',
  },
  {
    ano: '03/2021',
    titulo: 'Primeiro Emprego',
    empresa: '1° ofício de Notas de Parnamirim',
    descricao: 'Realização de atividades administrativas e atendimento ao público.',
    tipo: 'primary',
  },
  {
    ano: '03/2021',
    titulo: 'Ingresso no IFRN',
    empresa: 'Ensino Médio e Técnico em Informática',
    descricao: 'Aprendizagem e desenvolvimento de habilidades técnicas e sociais.',
    tipo: 'primary',
  },
  {
    ano: '2019',
    titulo: 'PIC - Programa de Iniciação Científica Jr',
    tipo: 'secondary',
  },
]
</script>
