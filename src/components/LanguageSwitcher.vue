<template>
  <div class="lang-switcher">
    <button
      v-for="lang in languages"
      :key="lang.code"
      :class="['lang-btn', { active: locale === lang.code }]"
      @click="switchLang(lang.code)"
      :title="lang.name"
    >
      {{ lang.label }}
    </button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const languages = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'ar', label: 'عر', name: 'العربية' }
]

function switchLang(code) {
  locale.value = code
  document.documentElement.lang = code
  document.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr'
}
</script>

<style scoped>
.lang-switcher {
  display: flex;
  gap: 0.25rem;
  background: var(--theme-toggle-bg, rgba(255, 255, 255, 0.05));
  border-radius: 8px;
  padding: 0.25rem;
}

.lang-btn {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.35rem 0.6rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background: transparent;
  color: var(--text-muted);
  transition: all 0.2s ease;
}

.lang-btn:hover {
  color: var(--theme-toggle-color, #ffffff);
  background: var(--border-color);
}

.lang-btn.active {
  background: #C9A962;
  color: #0A0E1A;
}
</style>
