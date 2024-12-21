<script setup>
import Navbar from '@/components/Navbar.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Project from '@/views/Project.vue'
import Contact from '@/views/Contact.vue'
import Footer from '@/components/Footer.vue'
import { Analytics } from '@vercel/analytics/vue';
import { SpeedInsights } from "@vercel/speed-insights/vue"
</script>

<template>
  <Analytics />
  <SpeedInsights />
  <Navbar />
  <main>
    <Home />
    <About />
    <Project />
    <Contact />
  </main>
  <Footer />
</template>

<style scoped>
</style>
