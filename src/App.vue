<template>
  <div>
    <HeaderTop />
    <HeroSlider id='home' />
    <main class='container'>
      <section id='features'><Features /></section>
      <section id='about'><About /></section>
      <section id='counters'><Counters /></section>
      <section id='contact'><Contact /></section>
    </main>
    <FooterBar />
  </div>
</template>

<script setup>
import HeaderTop from './components/HeaderTop.vue'
import HeroSlider from './components/HeroSlider.vue'
import FooterBar from './components/FooterBar.vue'
import Features from './components/Features.vue'
import Counters from './components/Counters.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
</script>
