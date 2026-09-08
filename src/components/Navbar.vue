<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="navbar-container">
      <router-link to="/" class="navbar-brand">
        <img src="../assets/icon_app.png" alt="Khazinti Logo" class="app-logo" />
        <span class="brand-text">Khazinti</span>
      </router-link>

      <div class="navbar-links">
        <router-link to="/" class="nav-link" exact-active-class="nav-link--active">{{ t('nav.home') }}</router-link>
        <router-link to="/privacy" class="nav-link" active-class="nav-link--active">{{ t('nav.privacy') }}</router-link>
        <router-link to="/changelog" class="nav-link" active-class="nav-link--active">{{ t('nav.changelog') }}</router-link>
        <router-link to="/support" class="nav-link" active-class="nav-link--active">{{ t('nav.support') }}</router-link>
        <LanguageSwitcher />
        <button class="theme-toggle" @click="toggleTheme" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
          <Transition name="icon-swap" mode="out-in">
            <span v-if="isDark" key="sun">☀️</span>
            <span v-else key="moon">🌙</span>
          </Transition>
        </button>
      </div>

      <button
        class="mobile-toggle"
        @click.stop="mobileOpen = !mobileOpen"
        :aria-expanded="mobileOpen"
        aria-label="Toggle menu"
      >
        <span class="hamburger" :class="{ open: mobileOpen }"></span>
      </button>
    </div>

    <!-- Mobile overlay backdrop -->
    <Transition name="fade">
      <div
        v-if="mobileOpen"
        class="mobile-backdrop"
        @click="mobileOpen = false"
      ></div>
    </Transition>

    <Transition name="slide">
      <div v-if="mobileOpen" class="mobile-menu">
        <router-link
          to="/"
          class="nav-link mobile-nav-link"
          exact-active-class="nav-link--active"
          @click="mobileOpen = false"
        >{{ t('nav.home') }}</router-link>
        <router-link
          to="/privacy"
          class="nav-link mobile-nav-link"
          active-class="nav-link--active"
          @click="mobileOpen = false"
        >{{ t('nav.privacy') }}</router-link>
        <router-link
          to="/changelog"
          class="nav-link mobile-nav-link"
          active-class="nav-link--active"
          @click="mobileOpen = false"
        >{{ t('nav.changelog') }}</router-link>
        <router-link
          to="/support"
          class="nav-link mobile-nav-link"
          active-class="nav-link--active"
          @click="mobileOpen = false"
        >{{ t('nav.support') }}</router-link>
        <div class="mobile-menu-footer">
          <LanguageSwitcher />
          <button class="theme-toggle mobile-theme-toggle" @click="toggleTheme">
            <span v-if="isDark">☀️ {{ t('nav.light_mode') || 'Light Mode' }}</span>
            <span v-else>🌙 {{ t('nav.dark_mode') || 'Dark Mode' }}</span>
          </button>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t } = useI18n()
const mobileOpen = ref(false)
const isDark = ref(true)
const isScrolled = ref(false)

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'dark'
  isDark.value = savedTheme === 'dark'
  applyTheme(savedTheme)

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 20
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleResize)

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleResize)
  })
})

const handleResize = () => {
  if (window.innerWidth > 768) {
    mobileOpen.value = false
  }
}

const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme)
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  applyTheme(theme)
  localStorage.setItem('theme', theme)
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--bg-nav);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border-color);
  transition: background-color 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
}

.navbar.scrolled {
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  border-bottom-color: var(--border-strong);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.875rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  text-decoration: none;
  flex-shrink: 0;
}

.app-logo {
  height: 32px;
  width: auto;
  border-radius: 8px;
}

.brand-text {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--text-primary);
  letter-spacing: -0.01em;
  transition: color 0.2s;
}

.navbar-links {
  display: flex;
  align-items: center;
  gap: 1.75rem;
}

.nav-link {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-decoration: none;
  padding: 0.25rem 0;
  border-bottom: 2px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease;
  white-space: nowrap;
}

.nav-link:hover {
  color: var(--primary);
}

.nav-link--active {
  color: var(--primary);
  border-bottom-color: var(--primary);
}

.theme-toggle {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  color: var(--text-primary);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
  flex-shrink: 0;
  font-size: 1rem;
}

.theme-toggle:hover {
  background: var(--bg-card-hover);
  border-color: var(--border-strong);
  transform: scale(1.08);
}

.icon-swap-enter-active,
.icon-swap-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.icon-swap-enter-from {
  opacity: 0;
  transform: rotate(-30deg) scale(0.8);
}
.icon-swap-leave-to {
  opacity: 0;
  transform: rotate(30deg) scale(0.8);
}

.mobile-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 10;
}

.hamburger {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-primary);
  position: relative;
  transition: background 0.25s;
  border-radius: 2px;
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  left: 0;
  width: 22px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: transform 0.25s ease, top 0.25s ease;
}

.hamburger::before { top: -7px; }
.hamburger::after  { top:  7px; }

.hamburger.open { background: transparent; }
.hamburger.open::before { transform: rotate(45deg);  top: 0; }
.hamburger.open::after  { transform: rotate(-45deg); top: 0; }

.mobile-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 998;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.mobile-menu {
  position: relative;
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0.5rem 0 1rem;
  border-top: 1px solid var(--border-color);
  background: var(--bg-nav);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.mobile-nav-link {
  display: block;
  padding: 0.875rem 2rem;
  font-size: 1rem;
  border-bottom: none;
  border-left: 3px solid transparent;
  transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
}

.mobile-nav-link:hover {
  background: var(--bg-card);
  color: var(--primary);
}

.mobile-nav-link.nav-link--active {
  border-left-color: var(--primary);
  background: var(--primary-dim);
  border-bottom: none;
}

.mobile-menu-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem 2rem 0;
  gap: 1rem;
  border-top: 1px solid var(--border-color);
  margin-top: 0.5rem;
}

.mobile-theme-toggle {
  width: auto;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  gap: 0.5rem;
  flex-shrink: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 768px) {
  .navbar-links  { display: none; }
  .mobile-toggle { display: block; }
}
</style>
