<script setup>
import Navbar from '@/components/Navbar.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Project from '@/views/Project.vue'
import Contact from '@/views/Contact.vue'
import Footer from '@/components/Footer.vue'

</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <Home />
    <About />
    <Project />
    <Contact />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
</style>
