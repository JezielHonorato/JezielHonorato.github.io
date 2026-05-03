<template>
  <section id="sobre" class="max-w-180 mx-auto px-6 sm:px-8 py-20">
    <p class="font-mono text-xs tracking-widest text-text-400 mb-10">// # SOBRE</p>

    <div class="grid grid-cols-2 sm:grid-cols-3 gap-px bg-text-200 border border-text-200 rounded-xl overflow-hidden mb-16">
      <div v-for="stat in stats" :key="stat.label" class="bg-background-50 p-6 text-center transition hover:bg-background-100">
        <div class="text-2xl sm:text-3xl font-semibold text-text-900 mb-1">
          {{ stat.value }}
        </div>
        <div class="text-xs text-text-500 tracking-wide">
          {{ stat.label }}
        </div>
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-10">
      <div>
        <h2 class="text-2xl sm:text-3xl text-text-900 mb-4">Quem sou eu</h2>

        <p class="text-text-600 leading-relaxed">
          {{ texto }}
        </p>
      </div>

      <div>
        <div class="flex flex-wrap gap-2">
          <span v-for="skill in skills" :key="skill" class="px-3 py-1 text-xs font-mono border border-text-200 text-text-600 rounded-sm transition hover:bg-background-100 hover:text-text-900 hover:-translate-y-px">
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Stat {
  value: string
  label: string
}

const stats: Stat[] = [
  { value: '3+', label: 'anos de experiência' },
  { value: '12', label: 'projetos' },
  { value: '5', label: 'certificações' },
]

const skills: string[] = ['Vue', 'TypeScript', 'Node.js', 'PostgreSQL', 'Python', 'php', 'C', 'C++']

const texto = 'técnico em informática e bacharelando em tecnologia da informação, com foco em desenvolvimento e resolução de problemas.'
</script>
