<template>
  <div id="app" :class="{ 'rtl': isRTL }">
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const { locale } = useI18n()
const isRTL = computed(() => locale.value === 'ar')
</script>

<style>
.rtl {
  direction: rtl;
  text-align: right;
}
</style>
