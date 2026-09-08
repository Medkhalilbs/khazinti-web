<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-brand">
        <img src="../assets/icon_app.png" alt="Khazinti Logo" class="app-logo" />
        <div>
          <h3 class="brand-name">Khazinti <span class="arabic">خزينتي</span></h3>
          <p class="tagline">{{ t('footer.tagline') }}</p>
        </div>
      </div>

      <div class="footer-links">
        <div class="link-group">
          <h4>{{ t('footer.links') }}</h4>
          <router-link to="/">{{ t('nav.home') }}</router-link>
          <router-link to="/changelog">{{ t('nav.changelog') }}</router-link>
          <router-link to="/privacy">{{ t('footer.privacy') }}</router-link>
        </div>
        <div class="link-group">
          <h4>{{ t('footer.contact') }}</h4>
          <a href="mailto:support.khazinti@gmail.com">support.khazinti@gmail.com</a>
          <a href="https://discord.gg/BCjBnAk9k" target="_blank" rel="noopener noreferrer">{{ t('footer.discord') }}</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} Khazinti. {{ t('footer.rights') }}</p>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  padding: 4rem 2rem 0;
  transition: background-color 0.3s, border-color 0.3s;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3rem;
  padding-bottom: 3rem;
}

.footer-brand {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.app-logo {
  height: 32px;
  width: auto;
  border-radius: 6px;
  margin-top: 4px;
}

.brand-name {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--text-primary);
  margin: 0;
}

.arabic {
  color: #C9A962;
  font-size: 0.95rem;
}

.tagline {
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  color: var(--text-muted);
  margin: 0.25rem 0 0;
}

.footer-links {
  display: flex;
  gap: 4rem;
}

.link-group h4 {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 0.85rem;
  color: #C9A962;
  margin: 0 0 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.link-group a {
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.2s;
}

.link-group a:hover {
  color: #C9A962;
}

.footer-bottom {
  border-top: 1px solid var(--border-card);
  padding: 1.5rem 0;
  text-align: center;
}

.footer-bottom p {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  color: var(--text-muted);
  margin: 0;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    gap: 2rem;
  }
  .footer-links {
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
