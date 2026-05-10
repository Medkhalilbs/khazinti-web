<template>
  <div class="changelog-page" :dir="isRTL ? 'rtl' : 'ltr'">
    <div class="changelog-hero">
      <div class="hero-glow"></div>
      <div class="container">
        <div class="badge-wrap">
          <span class="badge">v{{ latestVersion }}</span>
        </div>
        <h1>{{ $t('changelog.title') }}</h1>
        <p class="subtitle">{{ $t('changelog.subtitle') }}</p>
      </div>
    </div>

    <div class="container timeline-container">
      <div class="timeline">
        <div
          v-for="(entry, index) in CHANGELOG"
          :key="entry.version"
          class="timeline-entry"
          :class="{ 'is-latest': index === 0 }"
        >
          <div class="timeline-dot" :class="{ 'dot-latest': index === 0 }">
            <span v-if="index === 0" class="dot-pulse"></span>
          </div>
          <div class="timeline-card">
            <div class="card-header">
              <div class="version-info">
                <span class="version-tag" :class="{ 'version-latest': index === 0 }">
                  v{{ entry.version }}
                </span>
                <span v-if="index === 0" class="latest-badge">Latest</span>
              </div>
              <span class="entry-date">{{ formatDate(entry.date) }}</span>
            </div>
            <ul class="changes-list">
              <li
                v-for="(change, ci) in getLocalizedChanges(entry)"
                :key="ci"
                class="change-item"
                :class="getChangeType(change)"
              >
                <span class="change-icon">{{ getChangeIcon(change) }}</span>
                <span class="change-text">{{ stripPrefix(change) }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { CHANGELOG } from '../data/changelog.js'

const { locale } = useI18n()

const isRTL = computed(() => locale.value === 'ar')

const latestVersion = computed(() => CHANGELOG[0]?.version ?? '')

function getLocalizedChanges(entry) {
  if (Array.isArray(entry.changes)) return entry.changes
  // Map website locale to changelog lang key
  const langMap = { en: 'en', fr: 'fr', ar: 'arTN' }
  const key = langMap[locale.value] ?? 'en'
  return entry.changes[key] ?? entry.changes['en']
}

function formatDate(dateStr) {
  const date = new Date(dateStr)
  const langMap = { en: 'en-GB', fr: 'fr-FR', ar: 'ar-TN' }
  return date.toLocaleDateString(langMap[locale.value] ?? 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function getChangeType(change) {
  const lower = change.toLowerCase()
  if (lower.startsWith('fixed') || lower.startsWith('corrigé') || lower.startsWith('تصليح') || lower.startsWith('صلّحنا') || lower.startsWith('إصلاح')) return 'type-fix'
  if (lower.startsWith('added') || lower.startsWith('ajouté') || lower.startsWith('زدنا') || lower.startsWith('جديد')) return 'type-add'
  if (lower.startsWith('removed') || lower.startsWith('supprimé') || lower.startsWith('حذفنا')) return 'type-remove'
  return 'type-improve'
}

function getChangeIcon(change) {
  const type = getChangeType(change)
  if (type === 'type-fix') return '🔧'
  if (type === 'type-add') return '✨'
  if (type === 'type-remove') return '🗑️'
  return '⚡'
}

function stripPrefix(change) {
  // Remove leading tags like "Fixed:", "Added:", "Improved:", etc.
  return change.replace(/^(Fixed|Added|Removed|Improved|Changed|Moved|Polish|UI|Corrigé|Ajouté|Supprimé|Amélioré|Déplacé|Changé|Polissage|Interface|جديد|تصليح|تحسين|نقل|تبديل|تلميع|واجهة|حذفنا|زدنا|حسّنّا|صلّحنا)\s*:\s*/i, '').trim()
}
</script>

<style scoped>
.changelog-page {
  min-height: 100vh;
  background: var(--bg-primary);
  padding-bottom: 6rem;
}

/* ─── Hero ─── */
.changelog-hero {
  position: relative;
  text-align: center;
  padding: 8rem 1.5rem 4rem;
  overflow: hidden;
  border-bottom: 1px solid var(--border-color);
}

.hero-glow {
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 300px;
  background: radial-gradient(ellipse, rgba(201, 169, 98, 0.15) 0%, transparent 70%);
  pointer-events: none;
}

.changelog-hero .container {
  position: relative;
  z-index: 1;
}

.badge-wrap {
  margin-bottom: 1.25rem;
}

.badge {
  display: inline-block;
  background: linear-gradient(135deg, var(--primary), #B8944E);
  color: #0A0E1A;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 0.8rem;
  padding: 0.35rem 1rem;
  border-radius: 999px;
  letter-spacing: 0.05em;
}

.changelog-hero h1 {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 1rem;
}

.subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: var(--text-muted);
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.7;
}

/* ─── Container ─── */
.container {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.timeline-container {
  padding-top: 3.5rem;
}

/* ─── Timeline ─── */
.timeline {
  position: relative;
  padding-left: 2.5rem;
}

[dir='rtl'] .timeline {
  padding-left: 0;
  padding-right: 2.5rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 11px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--primary), var(--border-color) 80%);
}

[dir='rtl'] .timeline::before {
  left: auto;
  right: 11px;
}

/* ─── Entry ─── */
.timeline-entry {
  position: relative;
  margin-bottom: 2.5rem;
}

.timeline-dot {
  position: absolute;
  left: -2.5rem;
  top: 1.25rem;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--bg-secondary);
  border: 2px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.3s;
}

[dir='rtl'] .timeline-dot {
  left: auto;
  right: -2.5rem;
}

.timeline-dot.dot-latest {
  background: var(--primary);
  border-color: var(--primary);
  box-shadow: 0 0 0 4px rgba(201, 169, 98, 0.2);
}

.dot-pulse {
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #0A0E1A;
}

/* ─── Card ─── */
.timeline-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 1.5rem 1.75rem;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.timeline-entry:hover .timeline-card {
  border-color: var(--border-strong);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}

.timeline-entry.is-latest .timeline-card {
  border-color: rgba(201, 169, 98, 0.3);
  background: linear-gradient(135deg, var(--bg-secondary), rgba(201, 169, 98, 0.03));
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.version-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.version-tag {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--text-primary);
}

.version-tag.version-latest {
  background: linear-gradient(135deg, var(--primary), #B8944E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.latest-badge {
  background: rgba(201, 169, 98, 0.15);
  color: var(--primary);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.72rem;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  border: 1px solid rgba(201, 169, 98, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.entry-date {
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  color: var(--text-muted);
}

/* ─── Changes ─── */
.changes-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.change-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  line-height: 1.55;
}

.change-icon {
  flex-shrink: 0;
  font-size: 0.95rem;
  margin-top: 0.05rem;
}

.change-text {
  color: var(--text-secondary);
}

.type-add .change-text { color: #22c55e; }
.type-fix .change-text { color: #60a5fa; }
.type-remove .change-text { color: #f87171; }
.type-improve .change-text { color: var(--text-secondary); }

@media (max-width: 600px) {
  .changelog-hero {
    padding: 6rem 1rem 2.5rem;
  }

  .timeline {
    padding-left: 1.75rem;
  }

  [dir='rtl'] .timeline {
    padding-left: 0;
    padding-right: 1.75rem;
  }

  .timeline-dot {
    left: -1.75rem;
  }

  [dir='rtl'] .timeline-dot {
    left: auto;
    right: -1.75rem;
  }

  .timeline-card {
    padding: 1.25rem;
  }
}
</style>
