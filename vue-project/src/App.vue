<template>
  <Navbar />

  <main :class="[isSettingsOpen ? 'grid md:grid-cols-[1fr_400px] min-h-[calc(100vh-3.5rem)]' : '']">
    <div :class="[isSettingsOpen ? 'w-full overflow-y-auto' : '']">
      <Hero />
      <Timeline />
      <Certificates />
      <Contact />
      <Footer />
    </div>

    <div v-if="isSettingsOpen" id="config-panel" ref="settingsContainer" class="border-t md:border-t-0 md:border-l border-border-main bg-bg-base/50 backdrop-blur-md sticky top-14 h-auto md:h-[calc(100vh-3.5rem)] overflow-y-auto">
      <Settings />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Timeline from './components/Timeline.vue'
import Certificates from './components/Certificates.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import Settings from './components/Settings.vue'
import { isSettingsOpen } from '@/store/settings'
import { loadSettings } from '@/store/theme'

onMounted(() => {
  loadSettings()
})

const settingsContainer = ref<HTMLElement | null>(null)

watch(isSettingsOpen, async (isOpen) => {
  if (isOpen) {
    await nextTick()

    if (settingsContainer.value) {
      settingsContainer.value.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
})
</script>
