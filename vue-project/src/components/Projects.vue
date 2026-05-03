<template>
  <section id="projetos" class="max-w-180 mx-auto px-6 sm:px-8 py-20">
    <p class="font-mono text-xs tracking-widest text-text-400 mb-10">// # PROJETOS</p>

    <div class="border border-text-200 rounded-xl overflow-hidden divide-y divide-text-200">
      <a v-for="proj in projects" :key="proj.nome" :href="proj.link" target="_blank" class="group flex items-center justify-between gap-4 px-5 py-4 bg-background-50 transition-all duration-200 hover:bg-background-100 hover:-translate-y-px">
        <div>
          <p class="text-sm font-medium text-text-900 mb-1">
            {{ proj.nome }}
          </p>

          <p class="text-xs text-text-500 leading-relaxed">
            {{ proj.desc }}
          </p>
        </div>

        <div class="flex items-center gap-3 shrink-0">
          <span class="text-[11px] font-mono text-text-500">
            {{ proj.tech }}
          </span>

          <span class="text-text-400 text-lg transition group-hover:translate-x-1 group-hover:text-text-900"> → </span>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Project {
  nome: string
  desc: string
  tech: string
  link: string
}

const projects: Project[] = [
  {
    nome: 'Sistema de Protocolos',
    desc: 'Aplicação para controle de documentos com rastreamento e segurança.',
    tech: 'Vue + Laravel',
    link: '#',
  },
  {
    nome: 'Simulador GRUB',
    desc: 'Renderização visual de temas GRUB baseada em arquivos de configuração.',
    tech: 'Python',
    link: '#',
  },
]
</script>
