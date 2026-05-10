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
  background: linear-gradient(180deg, rgba(30, 58, 95, 0.3) 0%, transparent 100%);
  border-bottom: 1px solid rgba(201, 169, 98, 0.1);
}

.privacy-header h1 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  color: #ffffff;
  margin: 0 0 0.75rem;
}

.last-updated {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.4);
  margin: 0 0 1.5rem;
}

.privacy-lang {
  display: inline-flex;
}

.privacy-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 2rem 6rem;
}

.policy-section {
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.policy-section:last-child {
  border-bottom: none;
}

.policy-section h2 {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.4rem;
  color: #C9A962;
  margin: 0 0 1rem;
}

.policy-section p {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 1rem;
}

.policy-section ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
}

.policy-section li {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.65);
  padding: 0.75rem 0 0.75rem 1.5rem;
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
}

.policy-section li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 1.1rem;
  width: 6px;
  height: 6px;
  background: #C9A962;
  border-radius: 50%;
}

.contact-email {
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: #C9A962;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  background: rgba(201, 169, 98, 0.1);
  border: 1px solid rgba(201, 169, 98, 0.3);
  border-radius: 12px;
  margin-top: 0.5rem;
  transition: background 0.2s, transform 0.2s;
}

.contact-email:hover {
  background: rgba(201, 169, 98, 0.2);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .privacy-header h1 {
    font-size: 1.75rem;
  }
  .privacy-content {
    padding: 2rem 1.5rem 4rem;
  }
}
</style>
