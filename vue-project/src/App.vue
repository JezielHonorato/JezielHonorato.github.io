<template>
  <Navbar />

  <main>
    <Hero />
    <!-- <About /> -->
    <Timeline />
    <!-- <Projects /> -->
    <Certificates />
    <Contact />
  </main>

  <Footer />
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Timeline from './components/Timeline.vue'
import Projects from './components/Projects.vue'
import Certificates from './components/Certificates.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>
