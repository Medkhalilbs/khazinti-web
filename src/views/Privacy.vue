<template>
  <div class="privacy-page">
    <div class="privacy-header">
      <h1>{{ t('privacy.title') }}</h1>
      <p class="last-updated">{{ t('privacy.last_updated') }}</p>
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
          <li v-for="(item, index) in getList('privacy.data_collection.items')" :key="index">
            {{ item }}
          </li>
        </ul>
      </section>

      <!-- Data Storage -->
      <section class="policy-section">
        <h2>{{ t('privacy.data_storage.title') }}</h2>
        <p>{{ t('privacy.data_storage.content') }}</p>
        <ul>
          <li v-for="(item, index) in getList('privacy.data_storage.items')" :key="index">
            {{ item }}
          </li>
        </ul>
      </section>

      <!-- Third Party -->
      <section class="policy-section">
        <h2>{{ t('privacy.third_party.title') }}</h2>
        <p>{{ t('privacy.third_party.content') }}</p>
        <ul>
          <li v-for="(item, index) in getList('privacy.third_party.items')" :key="index">
            {{ item }}
          </li>
        </ul>
      </section>

      <!-- Notifications -->
      <section class="policy-section">
        <h2>{{ t('privacy.notifications.title') }}</h2>
        <p>{{ t('privacy.notifications.content') }}</p>
        <ul>
          <li v-for="(item, index) in getList('privacy.notifications.items')" :key="index">
            {{ item }}
          </li>
        </ul>
      </section>

      <!-- User Rights -->
      <section class="policy-section">
        <h2>{{ t('privacy.user_rights.title') }}</h2>
        <p>{{ t('privacy.user_rights.content') }}</p>
        <ul>
          <li v-for="(item, index) in getList('privacy.user_rights.items')" :key="index">
            {{ item }}
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

    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'


const { t, tm } = useI18n()

// Safe helper: works with both vue-i18n v9 tm() and plain array messages
function getList(key) {
  try {
    const result = tm(key)
    if (Array.isArray(result)) {
      return result.map(item => (typeof item === 'object' && item !== null) ? item.body || String(item) : String(item))
    }
  } catch (e) {
    // tm() not available or failed
  }
  // Fallback: try t() and split, or return empty
  const raw = t(key)
  if (raw && raw !== key) return [raw]
  return []
}
</script>

<style scoped>
.privacy-page {
  padding-top: 80px;
  min-height: 100vh;
  background: var(--bg-primary);
  color: var(--text-primary);
}

.privacy-header {
  text-align: center;
  padding: 4rem 2rem 3rem;
  background: linear-gradient(180deg, var(--bg-secondary, rgba(10,14,26,0.8)) 0%, transparent 100%);
}

.privacy-header h1 {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.last-updated {
  color: var(--text-muted);
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
  margin-bottom: 2rem;
  padding: 2rem;
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 16px;
}

.policy-section h2 {
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 1rem;
}

.policy-section p {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1rem;
}

.policy-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.policy-section ul li {
  color: var(--text-secondary);
  line-height: 1.7;
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  border-bottom: 1px solid var(--border-color);
}

.policy-section ul li:last-child {
  border-bottom: none;
}

.policy-section ul li::before {
  content: "•";
  color: var(--primary);
  position: absolute;
  left: 0;
  font-weight: 700;
}

.contact-email {
  display: inline-block;
  margin-top: 0.5rem;
  color: var(--primary);
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
