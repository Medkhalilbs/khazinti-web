<template>
  <nav class="navbar">
    <div class="navbar-container">
      <router-link to="/" class="navbar-brand">
        <div class="logo-mark">
          <span class="bar bar-k"></span>
          <span class="bar bar-1"></span>
          <span class="bar bar-2"></span>
          <span class="bar bar-3"></span>
        </div>
        <span class="brand-text">Khazinti</span>
      </router-link>

      <div class="navbar-links">
        <router-link to="/" class="nav-link">{{ t('nav.home') }}</router-link>
        <router-link to="/privacy" class="nav-link">{{ t('nav.privacy') }}</router-link>
        <LanguageSwitcher />
      </div>

      <button class="mobile-toggle" @click="mobileOpen = !mobileOpen" aria-label="Toggle menu">
        <span class="hamburger" :class="{ open: mobileOpen }"></span>
      </button>
    </div>

    <Transition name="slide">
      <div v-if="mobileOpen" class="mobile-menu">
        <router-link to="/" class="nav-link" @click="mobileOpen = false">{{ t('nav.home') }}</router-link>
        <router-link to="/privacy" class="nav-link" @click="mobileOpen = false">{{ t('nav.privacy') }}</router-link>
        <LanguageSwitcher />
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t } = useI18n()
const mobileOpen = ref(false)
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(10, 14, 26, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(201, 169, 98, 0.1);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
}

.logo-mark {
  display: flex;
  align-items: flex-end;
  gap: 3px;
  height: 28px;
}

.bar {
  display: block;
  width: 4px;
  border-radius: 2px;
  background: #ffffff;
}

.bar-k { height: 28px; }
.bar-1 { height: 14px; }
.bar-2 { height: 20px; }
.bar-3 { height: 26px; background: #C9A962; }

.brand-text {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: #ffffff;
}

.navbar-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #C9A962;
}

.mobile-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.hamburger {
  display: block;
  width: 24px;
  height: 2px;
  background: #fff;
  position: relative;
  transition: background 0.2s;
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  left: 0;
  width: 24px;
  height: 2px;
  background: #fff;
  transition: transform 0.2s;
}

.hamburger::before { top: -7px; }
.hamburger::after { top: 7px; }

.hamburger.open { background: transparent; }
.hamburger.open::before { transform: rotate(45deg); top: 0; }
.hamburger.open::after { transform: rotate(-45deg); top: 0; }

.mobile-menu {
  display: none;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 2rem 1.5rem;
  border-top: 1px solid rgba(201, 169, 98, 0.1);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 768px) {
  .navbar-links { display: none; }
  .mobile-toggle { display: block; }
  .mobile-menu { display: flex; }
}
</style>
