<template>
  <section id="certificados" class="max-w-180 mx-auto px-6 sm:px-8 py-20">
    <p class="font-mono text-xs tracking-widest text-text-400 mb-10">// CERTIFICADOS</p>

    <div class="grid sm:grid-cols-2 gap-4">
      <div v-for="cert in certs" :key="cert.nome" @click="openCert(cert)" class="group cursor-pointer block p-5 rounded-xl border border-text-200 bg-background-50 transition-all duration-200 hover:-translate-y-0.5 hover:bg-bg-hover hover:border-text-300 hover:shadow-sm">
        <p class="text-sm font-medium text-text-900 mb-1 leading-snug">
          {{ cert.nome }}
        </p>

        <p class="text-xs font-mono text-text-500 tracking-wide">
          {{ cert.org }}
        </p>
      </div>
    </div>

    <div class="mt-8 border-l-2 border-brand pl-4">
      <p class="text-sm text-text-700 leading-relaxed">
        <span class="font-semibold">Ps:</span>
        Menções honrosas na 14ª, 15ª e 16ª edições da Olimpíada Brasileira de Matemática das Escolas Públicas (OBMEP). Integrante da Brigada de Incêndio entre 2024 e 2026, conforme as Instruções Técnicas IT 17/2018 e IT 17/2022 do Corpo de Bombeiros Militar do Rio Grande do Norte (CBMRN).
      </p>
    </div>

    <div v-if="selected" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4" @click="closeCert">
      <div class="bg-background-50 w-full max-w-4xl rounded-lg p-4 shadow-lg" @click.stop>
        <div class="flex items-center justify-between mb-3">
          <p class="text-sm font-medium text-text-900">
            {{ selected.nome }}
          </p>

          <button @click="closeCert" class="text-text-400 hover:text-text-900 transition text-sm">✕</button>
        </div>

        <div class="w-full">
          <img v-if="isImage(selected.file)" :src="selected.file" class="w-full rounded-md" />

          <iframe v-else :src="selected.file" class="w-full h-[70vh] rounded-md"></iframe>
        </div>

        <div class="mt-3 flex justify-end">
          <a :href="selected.file" target="_blank" class="text-xs text-text-500 hover:text-text-900 transition"> abrir em nova aba → </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Cert {
  nome: string
  org: string
  file: string
}

const certs: Cert[] = [
  {
    nome: 'Cloud Basics: Development and Basic Concepts',
    org: 'Huawei',
    file: '/certs/huawei.png',
  },
  {
    nome: 'Técnico em Informatica',
    org: 'IFRN',
    file: '/certs/diploma.pdf',
  },
  {
    nome: 'CCNA: Introduction to Networks',
    org: 'Cisco',
    file: '/certs/ccna-introduction.pdf',
  },
  {
    nome: 'CCNA: Switching, Routing, and Wireless Essentials',
    org: 'Cisco',
    file: '/certs/ccna-switching.pdf',
  },
  {
    nome: 'Introduction to Cybersecurity',
    org: 'Cisco',
    file: '/certs/ccna-cyber.pdf',
  },
]

// Estado do modal
const selected = ref<Cert | null>(null)

function openCert(cert: Cert) {
  selected.value = cert
}

function closeCert() {
  selected.value = null
}

function isImage(file: string) {
  return file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')
}
</script>
