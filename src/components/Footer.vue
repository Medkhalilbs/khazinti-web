<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-brand">
        <div class="logo-mark">
          <span class="bar bar-k"></span>
          <span class="bar bar-1"></span>
          <span class="bar bar-2"></span>
          <span class="bar bar-3"></span>
        </div>
        <div>
          <h3 class="brand-name">Khazinti <span class="arabic">خزينتي</span></h3>
          <p class="tagline">{{ t('footer.tagline') }}</p>
        </div>
      </div>

      <div class="footer-links">
        <div class="link-group">
          <h4>{{ t('footer.links') }}</h4>
          <router-link to="/">{{ t('nav.home') }}</router-link>
          <router-link to="/privacy">{{ t('footer.privacy') }}</router-link>
        </div>
        <div class="link-group">
          <h4>{{ t('footer.contact') }}</h4>
          <a href="mailto:support.khazinti@gmail.com">support.khazinti@gmail.com</a>
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
  background: #060911;
  border-top: 1px solid rgba(201, 169, 98, 0.1);
  padding: 4rem 2rem 0;
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

.logo-mark {
  display: flex;
  align-items: flex-end;
  gap: 3px;
  height: 24px;
  margin-top: 4px;
}

.bar {
  display: block;
  width: 3px;
  border-radius: 2px;
  background: #ffffff;
}

.bar-k { height: 24px; }
.bar-1 { height: 12px; }
.bar-2 { height: 17px; }
.bar-3 { height: 22px; background: #C9A962; }

.brand-name {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: #ffffff;
  margin: 0;
}

.arabic {
  color: #C9A962;
  font-size: 0.95rem;
}

.tagline {
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
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
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.2s;
}

.link-group a:hover {
  color: #C9A962;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding: 1.5rem 0;
  text-align: center;
}

.footer-bottom p {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.4);
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
