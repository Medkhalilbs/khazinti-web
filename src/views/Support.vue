<template>
  <div class="support-page" :dir="isRTL ? 'rtl' : 'ltr'">

    <!-- Header -->
    <div class="support-header">
      <div class="support-header-badge">
        <span class="badge-dot" aria-hidden="true"></span>
        <span>{{ t('support.badge') }}</span>
      </div>
      <h1>{{ t('support.title') }}</h1>
      <p class="support-subtitle">{{ t('support.subtitle') }}</p>
    </div>

    <div class="support-content">

      <!-- Contact cards row -->
      <div class="contact-grid">

        <!-- Email -->
        <a href="mailto:support.khazinti@gmail.com" class="contact-card contact-card--email">
          <div class="contact-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="3"/>
              <path d="M2 7l10 7 10-7"/>
            </svg>
          </div>
          <div class="contact-info">
            <span class="contact-label">{{ t('support.email.label') }}</span>
            <span class="contact-value">support.khazinti@gmail.com</span>
            <span class="contact-hint">{{ t('support.email.hint') }}</span>
          </div>
          <div class="contact-arrow">→</div>
        </a>

        <!-- Discord -->
        <a href="https://discord.gg/BCjBnAk9k" target="_blank" rel="noopener noreferrer" class="contact-card contact-card--discord">
          <div class="contact-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
          </div>
          <div class="contact-info">
            <span class="contact-label">{{ t('support.discord.label') }}</span>
            <span class="contact-value">discord.gg/BCjBnAk9k</span>
            <span class="contact-hint">{{ t('support.discord.hint') }}</span>
          </div>
          <div class="contact-arrow">↗</div>
        </a>

      </div>

      <!-- Response time + info row -->
      <div class="info-grid">
        <div class="info-card">
          <div class="info-icon">⏱️</div>
          <div class="info-body">
            <span class="info-title">{{ t('support.response.title') }}</span>
            <span class="info-desc">{{ t('support.response.desc') }}</span>
          </div>
        </div>
        <div class="info-card">
          <div class="info-icon">🌍</div>
          <div class="info-body">
            <span class="info-title">{{ t('support.languages.title') }}</span>
            <span class="info-desc">{{ t('support.languages.desc') }}</span>
          </div>
        </div>
        <div class="info-card">
          <div class="info-icon">🔒</div>
          <div class="info-body">
            <span class="info-title">{{ t('support.privacy_note.title') }}</span>
            <span class="info-desc">{{ t('support.privacy_note.desc') }}</span>
          </div>
        </div>
      </div>

      <!-- FAQ section -->
      <div class="faq-section">
        <h2 class="faq-title">{{ t('support.faq.title') }}</h2>
        <div class="faq-list">
          <details v-for="(faq, i) in faqs" :key="i" class="faq-item">
            <summary class="faq-question">
              <span>{{ faq.q }}</span>
              <span class="faq-chevron" aria-hidden="true">›</span>
            </summary>
            <p v-if="faq.bugReport" class="faq-answer">
              {{ t('support.faq.a5_before_email') }}
              <a href="mailto:support.khazinti@gmail.com" class="faq-link">support.khazinti@gmail.com</a>
              {{ t('support.faq.a5_after_email') }}
              <a href="https://discord.gg/BCjBnAk9k" target="_blank" rel="noopener noreferrer" class="faq-link">{{ t('support.discord.label') }}</a>{{ t('support.faq.a5_after_discord') }}
            </p>
            <p v-else class="faq-answer">{{ faq.a }}</p>
          </details>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const isRTL = computed(() => locale.value === 'ar')

const faqs = computed(() => [
  { q: t('support.faq.q1'), a: t('support.faq.a1') },
  { q: t('support.faq.q2'), a: t('support.faq.a2') },
  { q: t('support.faq.q3'), a: t('support.faq.a3') },
  { q: t('support.faq.q4'), a: t('support.faq.a4') },
  { q: t('support.faq.q5'), bugReport: true },
  { q: t('support.faq.q6'), a: t('support.faq.a6') },
])
</script>

<style scoped>
.support-page {
  padding-top: 80px;
  min-height: 100vh;
  background: var(--bg-primary);
  color: var(--text-primary);
}

/* ── Header ── */
.support-header {
  text-align: center;
  padding: 4rem 2rem 3rem;
  background: var(--gradient-hero);
}

.support-header-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--primary-dim);
  border: 1px solid var(--primary-border);
  border-radius: 999px;
  padding: 0.35rem 1rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--primary);
  margin-bottom: 1.25rem;
}

.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary);
  animation: pulse 2.5s ease-in-out infinite;
  flex-shrink: 0;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.4; transform: scale(0.75); }
}

.support-header h1 {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.support-subtitle {
  font-size: 1.05rem;
  color: var(--text-secondary);
  max-width: 520px;
  margin: 0 auto;
  line-height: 1.7;
}

/* ── Content wrapper ── */
.support-content {
  max-width: 860px;
  margin: 0 auto;
  padding: 3rem 2rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* ── Contact cards ── */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 16px;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.contact-card:hover {
  border-color: var(--border-strong);
  transform: translateY(-2px);
  box-shadow: var(--shadow-card);
}

.contact-card--email:hover  { border-color: var(--primary); }
.contact-card--discord:hover { border-color: #5865F2; }

.contact-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-card--email .contact-icon {
  background: var(--primary-dim);
  color: var(--primary);
}

.contact-card--email .contact-icon svg { width: 22px; height: 22px; }

.contact-card--discord .contact-icon {
  background: rgba(88, 101, 242, 0.12);
  color: #5865F2;
}

.contact-card--discord .contact-icon svg { width: 24px; height: 24px; }

.contact-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.contact-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-muted);
}

.contact-value {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.contact-hint {
  font-size: 0.78rem;
  color: var(--text-muted);
}

.contact-arrow {
  font-size: 1.1rem;
  color: var(--text-muted);
  flex-shrink: 0;
  transition: color 0.2s, transform 0.2s;
}

.contact-card:hover .contact-arrow {
  color: var(--primary);
  transform: translateX(3px);
}

/* ── Info grid ── */
.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.info-card {
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
  padding: 1.25rem;
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 12px;
}

.info-icon {
  font-size: 1.4rem;
  flex-shrink: 0;
  line-height: 1;
}

.info-body {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.info-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-primary);
}

.info-desc {
  font-size: 0.78rem;
  color: var(--text-muted);
  line-height: 1.5;
}

/* ── FAQ ── */
.faq-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.faq-item {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 12px;
  overflow: hidden;
  transition: border-color 0.2s;
}

.faq-item[open] {
  border-color: var(--border-strong);
}

.faq-question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.1rem 1.25rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
  cursor: pointer;
  list-style: none;
  user-select: none;
  transition: color 0.2s;
}

.faq-question::-webkit-details-marker { display: none; }

.faq-item[open] .faq-question { color: var(--primary); }

.faq-chevron {
  font-size: 1.2rem;
  color: var(--text-muted);
  transition: transform 0.25s ease;
  flex-shrink: 0;
}

.faq-item[open] .faq-chevron {
  transform: rotate(90deg);
  color: var(--primary);
}

.faq-answer {
  padding: 0 1.25rem 1.1rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
  border-top: 1px solid var(--border-color);
  padding-top: 1rem;
}

.faq-link {
  color: var(--primary);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 2px;
}

/* ── RTL ── */
[dir="rtl"] .contact-arrow { transform: scaleX(-1); }
[dir="rtl"] .contact-card:hover .contact-arrow { transform: scaleX(-1) translateX(-3px); }

/* ── Responsive ── */
@media (max-width: 680px) {
  .contact-grid { grid-template-columns: 1fr; }
  .info-grid    { grid-template-columns: 1fr; }

}
</style>
Envoyez un email à support.khazinti@gmail.com avec une description du problème, votre version Android et la version de l'application (visible dans Paramètres → À propos). Les captures d'écran sont toujours utiles.