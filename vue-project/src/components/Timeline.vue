<template>
  <section id="trajetoria" class="max-w-180 mx-auto px-6 sm:px-8 py-20">
    <p class="font-mono text-xs tracking-widest text-text-400 mb-12">// # TRAJETÓRIA</p>

    <div class="relative">
      <div class="absolute left-18 top-0 bottom-0 w-px bg-text-200"></div>

      <div v-for="(item, index) in timeline" :key="index" class="grid grid-cols-[70px_1fr] sm:grid-cols-[90px_1fr] gap-6 mb-10">
        <div class="text-right text-xs font-mono text-text-400 pt-1">
          {{ item.ano }}
        </div>

        <div>
          <div v-if="item.tipo === 'primary'" class="group">
            <p class="text-sm font-medium text-text-900">
              {{ item.titulo }}
            </p>

            <p v-if="item.empresa" class="text-xs font-mono text-primary-500 mb-1">
              {{ item.empresa }}
            </p>

            <p v-if="item.descricao" class="text-sm text-text-600 leading-relaxed">
              {{ item.descricao }}
            </p>

            <div v-if="item.tags" class="flex flex-wrap gap-2 mt-3">
              <span v-for="tag in item.tags" :key="tag" class="px-2 py-0.5 text-[10px] font-mono bg-background-100 text-text-500 rounded-sm">
                {{ tag }}
              </span>
            </div>
          </div>

          <div v-else class="flex items-center gap-2 text-text-500">
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
  tags?: string[]
  tipo: ItemType
}

const timeline: TimelineItem[] = [
  {
    ano: '03/2025',
    titulo: 'Ingresso na UFRN',
    empresa: 'Bacharelado em Tecnologia da Informação',
    descricao: 'Aprofundamento nos conceitos de programação e desenvolvimento de software.',
    tags: ['C', 'C++', 'Inteligência Artificial', 'python'],
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
    tags: ['Comunicação', 'Organização', 'Proatividade'],
    tipo: 'primary',
  },
  {
    ano: '03/2021',
    titulo: 'Ingresso no IFRN',
    empresa: 'Ensino Médio e Técnico em Informática',
    descricao: 'Aprendizagem e desenvolvimento de habilidades técnicas e sociais e inspiração para entrar no ramo de tecnologia.',
    tags: ['Typescript', 'Node', 'Python', 'mySQL', 'PHP', 'Redes', 'JS'],
    tipo: 'primary',
  },
  {
    ano: '2019-2020',
    titulo: 'PIC - Programa de Iniciação Científica Jr',
    tipo: 'secondary',
  },
]
</script>
