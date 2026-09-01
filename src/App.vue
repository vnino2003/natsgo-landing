<script setup>
import { onMounted, ref } from 'vue'
import AppNavbar         from './components/ui/AppNavbar.vue'
import AppFooter         from './components/ui/AppFooter.vue'
import PageIntro         from './components/ui/PageIntro.vue'
import HeroSection       from './components/sections/HeroSection.vue'
import WhySection        from './components/sections/WhySection.vue'
import PhoneShowcase     from './components/sections/PhoneShowcase.vue'
import FeaturesSection   from './components/sections/FeaturesSection.vue'
import HowItWorksSection from './components/sections/HowItWorksSection.vue'
import FaqSection        from './components/sections/FaqSection.vue'
import CtaSection        from './components/sections/CtaSection.vue'

const introVisible = ref(true)
const pageReady = ref(false)

onMounted(() => {
  window.setTimeout(() => {
    pageReady.value = true
  }, 120)

  window.setTimeout(() => {
    introVisible.value = false
  }, 980)

  document.body.classList.add('js-reveal')
  const io = new IntersectionObserver(
    entries => entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('visible')
      io.unobserve(entry.target)
    }),
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  )
  document.querySelectorAll('.reveal').forEach((el, index) => {
    el.style.setProperty('--reveal-delay', `${Math.min(index * 42, 210)}ms`)
    io.observe(el)
  })
})
</script>

<template>
  <PageIntro :visible="introVisible" />

  <div class="site-shell" :class="{ ready: pageReady }">
    <AppNavbar />

    <main>
      <HeroSection />

      <div class="divider"></div>
      <PhoneShowcase />

      <div class="divider"></div>
      <WhySection />

      <div class="divider"></div>
      <FeaturesSection />

      <div class="divider"></div>
      <HowItWorksSection />

      <div class="divider"></div>
      <FaqSection />

      <CtaSection />
    </main>

    <AppFooter />
  </div>
</template>
