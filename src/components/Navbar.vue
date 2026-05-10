<template>
  <nav class="navbar">
    <div class="navbar-container">
      <router-link to="/" class="navbar-brand">
        <img src="../assets/icon_app.png" alt="Khazinti Logo" class="app-logo" />
        <span class="brand-text">Khazinti</span>
      </router-link>

      <div class="navbar-links">
        <router-link to="/" class="nav-link">{{ t('nav.home') }}</router-link>
        <router-link to="/privacy" class="nav-link">{{ t('nav.privacy') }}</router-link>
        <router-link to="/changelog" class="nav-link">{{ t('nav.changelog') }}</router-link>
        <LanguageSwitcher />
        <button class="theme-toggle" @click="toggleTheme" aria-label="Toggle theme">
          <span v-if="isDark">☀️</span>
          <span v-else>🌙</span>
        </button>
      </div>

      <button class="mobile-toggle" @click="mobileOpen = !mobileOpen" aria-label="Toggle menu">
        <span class="hamburger" :class="{ open: mobileOpen }"></span>
      </button>
    </div>

    <Transition name="slide">
      <div v-if="mobileOpen" class="mobile-menu">
        <router-link to="/" class="nav-link" @click="mobileOpen = false">{{ t('nav.home') }}</router-link>
        <router-link to="/privacy" class="nav-link" @click="mobileOpen = false">{{ t('nav.privacy') }}</router-link>
        <router-link to="/changelog" class="nav-link" @click="mobileOpen = false">{{ t('nav.changelog') }}</router-link>
        <LanguageSwitcher />
        <button class="theme-toggle mobile-theme-toggle" @click="toggleTheme">
          <span v-if="isDark">☀️ Light Mode</span>
          <span v-else>🌙 Dark Mode</span>
        </button>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t } = useI18n()
const mobileOpen = ref(false)
const isDark = ref(true)

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'dark'
  isDark.value = savedTheme === 'dark'
  document.documentElement.setAttribute('data-theme', savedTheme)
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: var(--bg-nav);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-color);
  transition: background-color 0.3s, border-color 0.3s;
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

.app-logo {
  height: 32px;
  width: auto;
  border-radius: 8px;
}

.brand-text {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--text-primary);
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
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #C9A962;
}

.theme-toggle {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.theme-toggle:hover {
  background: var(--bg-card-hover);
  border-color: var(--border-strong);
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
  background: var(--text-primary);
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
  background: var(--text-primary);
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
  border-top: 1px solid var(--border-color);
  background: var(--bg-primary);
}

.mobile-theme-toggle {
  width: auto;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  justify-content: flex-start;
  gap: 0.5rem;
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
