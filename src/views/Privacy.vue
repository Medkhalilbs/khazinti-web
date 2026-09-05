<template>
  <div class="privacy-page">
    <div class="privacy-header">
      <h1>{{ t('privacy.title') }}</h1>
      <p class="last-updated">{{ t('privacy.last_updated') }}</p>
      <LanguageSwitcher class="privacy-lang" />
    </div>

    <div class="privacy-content">
      <!-- Introduction -->
      <section class="policy-section">
        <h2>{{ t('privacy.intro.title') }}</h2>
        <p>{{ t('privacy.intro.content') }}</p>
      </section>

      <!-- Data Collection -->
      <section class="policy-section">
        <h2>{{ t('privacy.data_collection.title') }}</h2>
        <p>{{ t('privacy.data_collection.content') }}</p>
        <ul>
          <li v-for="(item, index) in tm('privacy.data_collection.items')" :key="index">
            {{ rt(item) }}
          </li>
        </ul>
      </section>

      <!-- Data Storage -->
      <section class="policy-section">
        <h2>{{ t('privacy.data_storage.title') }}</h2>
        <p>{{ t('privacy.data_storage.content') }}</p>
        <ul>
          <li v-for="(item, index) in tm('privacy.data_storage.items')" :key="index">
            {{ rt(item) }}
          </li>
        </ul>
      </section>

      <!-- Third Party -->
      <section class="policy-section">
        <h2>{{ t('privacy.third_party.title') }}</h2>
        <p>{{ t('privacy.third_party.content') }}</p>
        <ul>
          <li v-for="(item, index) in tm('privacy.third_party.items')" :key="index">
            {{ rt(item) }}
          </li>
        </ul>
      </section>

      <!-- Notifications -->
      <section class="policy-section">
        <h2>{{ t('privacy.notifications.title') }}</h2>
        <p>{{ t('privacy.notifications.content') }}</p>
        <ul>
          <li v-for="(item, index) in tm('privacy.notifications.items')" :key="index">
            {{ rt(item) }}
          </li>
        </ul>
      </section>

      <!-- User Rights -->
      <section class="policy-section">
        <h2>{{ t('privacy.user_rights.title') }}</h2>
        <p>{{ t('privacy.user_rights.content') }}</p>
        <ul>
          <li v-for="(item, index) in tm('privacy.user_rights.items')" :key="index">
            {{ rt(item) }}
          </li>
        </ul>
      </section>

      <!-- Children -->
      <section class="policy-section">
        <h2>{{ t('privacy.children.title') }}</h2>
        <p>{{ t('privacy.children.content') }}</p>
      </section>

      <!-- Changes -->
      <section class="policy-section">
        <h2>{{ t('privacy.changes.title') }}</h2>
        <p>{{ t('privacy.changes.content') }}</p>
      </section>

      <!-- Contact -->
      <section class="policy-section">
        <h2>{{ t('privacy.contact.title') }}</h2>
        <p>{{ t('privacy.contact.content') }}</p>
        <a href="mailto:support.khazinti@gmail.com" class="contact-email">
          {{ t('privacy.contact.email') }}
        </a>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'

const { t, tm, rt } = useI18n()
</script>

<style scoped>
.privacy-page {
  padding-top: 80px;
  min-height: 100vh;
}

.privacy-header {
  text-align: center;
  padding: 4rem 2rem 3rem;
  background: linear-gradient(180deg, var(--bg-gradient-start, rgba(10,14,26,0.8)) 0%, transparent 100%);
}

.privacy-header h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: var(--text-primary, #F5F0E8);
  margin-bottom: 0.5rem;
}

.last-updated {
  color: var(--text-muted, #8B8B9A);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.privacy-lang {
  margin-top: 1rem;
}

.privacy-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.policy-section {
  margin-bottom: 3rem;
  padding: 2rem;
  background: var(--card-bg, rgba(255,255,255,0.03));
  border: 1px solid var(--border-color, rgba(255,255,255,0.08));
  border-radius: 16px;
}

.policy-section h2 {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--accent-gold, #C9A962);
  margin-bottom: 1rem;
}

.policy-section p {
  color: var(--text-secondary, #B8B8C8);
  line-height: 1.7;
  margin-bottom: 1rem;
}

.policy-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.policy-section ul li {
  color: var(--text-secondary, #B8B8C8);
  line-height: 1.7;
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.policy-section ul li::before {
  content: "•";
  color: var(--accent-gold, #C9A962);
  position: absolute;
  left: 0;
}

.contact-email {
  display: inline-block;
  margin-top: 0.5rem;
  color: var(--accent-gold, #C9A962);
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;
}

.contact-email:hover {
  opacity: 0.8;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .privacy-content {
    padding: 1rem;
  }
  
  .policy-section {
    padding: 1.5rem;
  }
}
</style>
