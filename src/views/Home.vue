<template>
  <div class="home" :dir="isRTL ? 'rtl' : 'ltr'">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          <span>100% Offline · 100% Private</span>
        </div>
        <h1 class="hero-title">{{ t('hero.title') }}</h1>
        <p class="hero-subtitle">{{ t('hero.subtitle') }}</p>
        <div class="hero-actions">
          <a href="https://play.google.com/store/apps/details?id=com.medkhalilbs.khazinti" target="_blank" rel="noopener" class="btn-primary">{{ t('hero.cta') }}</a>
          <p class="available-text">{{ t('hero.available') }}</p>
        </div>
      </div>
      <div class="hero-visual">
        <div class="phone-mockup">
          <div class="notch"></div>
          <div class="phone-screen">
            <div class="mock-header">
              <div class="greeting">
                <span class="greet-text">Good morning</span>
              </div>
              <div class="mock-avatar">K</div>
            </div>

            <div class="mock-card">
              <span class="mock-label">Total Balance</span>
              <span class="mock-balance">1,250.50 <span class="currency">TND</span></span>

              <div class="mock-card-actions">
                <div class="action-btn"><span class="icon income">↓</span>Income</div>
                <div class="action-btn"><span class="icon expense">↑</span>Expense</div>
              </div>
            </div>

            <div class="mock-section">
              <div class="section-title">Recent Transactions</div>
              <div class="mock-transactions">
                <div class="mock-tx tx-1">
                  <div class="tx-icon income">💰</div>
                  <div class="tx-info">
                    <span class="tx-name">Salary</span>
                    <span class="tx-date">Today, 09:00</span>
                  </div>
                  <span class="tx-amount positive">+2,500.00</span>
                </div>
                <div class="mock-tx tx-2">
                  <div class="tx-icon expense">🛒</div>
                  <div class="tx-info">
                    <span class="tx-name">Groceries</span>
                    <span class="tx-date">Yesterday, 18:30</span>
                  </div>
                  <span class="tx-amount negative">-85.50</span>
                </div>
                <div class="mock-tx tx-3">
                  <div class="tx-icon expense">🚕</div>
                  <div class="tx-info">
                    <span class="tx-name">Transport</span>
                    <span class="tx-date">12 May, 08:15</span>
                  </div>
                  <span class="tx-amount negative">-12.00</span>
                </div>
              </div>
            </div>

            <!-- Bottom Nav Mock -->
            <div class="mock-bottom-nav">
              <div class="nav-item active">🏠</div>
              <div class="nav-item">📋</div>
              <div class="nav-item">🏦</div>
              <div class="nav-item">⋯</div>
            </div>
          </div>
          <div class="home-indicator"></div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features" id="features">
      <div class="features-header reveal">
        <h2>{{ t('features.title') }}</h2>
        <p>{{ t('features.subtitle') }}</p>
      </div>

      <div class="bento-grid">
        <!-- Offline — large card -->
        <div class="bento-card bento-large reveal">
          <div class="bento-icon">📵</div>
          <h3>{{ t('features.offline.title') }}</h3>
          <p>{{ t('features.offline.desc') }}</p>
          <div class="bento-visual offline-visual">
            <div class="signal-bars">
              <span></span><span></span><span></span>
              <span class="crossed">✕</span>
            </div>
          </div>
        </div>

        <!-- Secure -->
        <div class="bento-card reveal">
          <div class="bento-icon">🔐</div>
          <h3>{{ t('features.secure.title') }}</h3>
          <p>{{ t('features.secure.desc') }}</p>
        </div>

        <!-- Multi-Account -->
        <div class="bento-card reveal">
          <div class="bento-icon">🏦</div>
          <h3>{{ t('features.multi_account.title') }}</h3>
          <p>{{ t('features.multi_account.desc') }}</p>
          <div class="account-types">
            <span class="account-chip">🏦 Bank</span>
            <span class="account-chip">💵 Cash</span>
            <span class="account-chip">👛 Wallet</span>
            <span class="account-chip">🏦 Savings</span>
          </div>
        </div>

        <!-- Budgets -->
        <div class="bento-card reveal">
          <div class="bento-icon">🎯</div>
          <h3>{{ t('features.budgets.title') }}</h3>
          <p>{{ t('features.budgets.desc') }}</p>
          <div class="budget-bar-demo">
            <div class="budget-bar-label">
              <span>Food</span><span>75%</span>
            </div>
            <div class="budget-bar">
              <div class="budget-fill" style="width: 75%; background: #f59e0b;"></div>
            </div>
            <div class="budget-bar-label">
              <span>Transport</span><span>40%</span>
            </div>
            <div class="budget-bar">
              <div class="budget-fill" style="width: 40%; background: #10b981;"></div>
            </div>
          </div>
        </div>

        <!-- Multi-Currency -->
        <div class="bento-card reveal">
          <div class="bento-icon">💱</div>
          <h3>{{ t('features.multi_currency.title') }}</h3>
          <p>{{ t('features.multi_currency.desc') }}</p>
          <div class="currency-chips">
            <span class="currency-chip">TND</span>
            <span class="currency-chip">EUR</span>
            <span class="currency-chip">USD</span>
            <span class="currency-chip">+10</span>
          </div>
        </div>

        <!-- Stats — large card -->
        <div class="bento-card bento-large reveal">
          <div class="bento-icon">📈</div>
          <h3>{{ t('features.stats.title') }}</h3>
          <p>{{ t('features.stats.desc') }}</p>
          <div class="donut-demo">
            <svg viewBox="0 0 80 80" class="donut-chart">
              <circle cx="40" cy="40" r="30" fill="none" stroke="#1e3a5f" stroke-width="12"/>
              <circle cx="40" cy="40" r="30" fill="none" stroke="#C9A962" stroke-width="12"
                stroke-dasharray="75 125" stroke-dashoffset="25" transform="rotate(-90 40 40)"/>
              <circle cx="40" cy="40" r="30" fill="none" stroke="#3b82f6" stroke-width="12"
                stroke-dasharray="35 165" stroke-dashoffset="-50" transform="rotate(-90 40 40)"/>
            </svg>
          </div>
        </div>

        <!-- Subscriptions -->
        <div class="bento-card reveal">
          <div class="bento-icon">📅</div>
          <h3>{{ t('features.subscriptions.title') }}</h3>
          <p>{{ t('features.subscriptions.desc') }}</p>
        </div>

        <!-- Interactive Tour -->
        <div class="bento-card bento-highlight reveal">
          <div class="bento-icon">🧭</div>
          <h3>{{ t('features.tour.title') }}</h3>
          <p>{{ t('features.tour.desc') }}</p>
          <div class="tour-steps">
            <span class="tour-step active">1</span>
            <span class="tour-step">2</span>
            <span class="tour-step">3</span>
            <span class="tour-step">···</span>
            <span class="tour-step">8</span>
          </div>
        </div>

        <!-- Advanced Transactions -->
        <div class="bento-card reveal">
          <div class="bento-icon">📋</div>
          <h3>{{ t('features.transactions.title') }}</h3>
          <p>{{ t('features.transactions.desc') }}</p>
          <div class="view-modes">
            <span class="view-chip active">☰ List</span>
            <span class="view-chip">⊞ Grid</span>
            <span class="view-chip">📅 Calendar</span>
          </div>
        </div>

        <!-- Number Format -->
        <div class="bento-card reveal">
          <div class="bento-icon">🔢</div>
          <h3>{{ t('features.number_format.title') }}</h3>
          <p>{{ t('features.number_format.desc') }}</p>
          <div class="format-preview">
            <span class="format-example active">1,234.56</span>
            <span class="format-example">1 234,56</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Bar -->
    <section class="stats-bar reveal">
      <div class="stat-item">
        <span class="stat-value">100%</span>
        <span class="stat-label">{{ t('stats_bar.offline') }}</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-value">10+</span>
        <span class="stat-label">{{ t('stats_bar.currencies') }}</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-value">0</span>
        <span class="stat-label">{{ t('stats_bar.data') }}</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-value">Free</span>
        <span class="stat-label">{{ t('stats_bar.free') }}</span>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section reveal">
      <div class="cta-content">
        <h2>🚀 Android Exclusive</h2>
        <p>{{ t('hero.subtitle') }}</p>
        <a href="https://play.google.com/store/apps/details?id=com.medkhalilbs.khazinti" target="_blank" rel="noopener" class="btn-primary btn-large">
          {{ t('hero.cta') }}
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const isRTL = computed(() => locale.value === 'ar')

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})
</script>

<style scoped>
/* ─── Base ─── */
.home {
  background: var(--bg-primary, #0a0e1a);
  color: var(--text-primary, #f0f0f0);
  min-height: 100vh;
}

/* ─── Hero ─── */
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  padding: 8rem 6rem 6rem;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 60% 40%, rgba(201, 169, 98, 0.12) 0%, transparent 60%),
              radial-gradient(ellipse at 20% 80%, rgba(30, 58, 95, 0.4) 0%, transparent 50%);
  pointer-events: none;
}

.hero-content {
  flex: 1;
  max-width: 560px;
  z-index: 1;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(201, 169, 98, 0.12);
  border: 1px solid rgba(201, 169, 98, 0.3);
  border-radius: 999px;
  padding: 0.4rem 1rem;
  font-size: 0.85rem;
  color: #C9A962;
  margin-bottom: 1.5rem;
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #C9A962;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}

.hero-title {
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 1.25rem;
  background: linear-gradient(135deg, #f0f0f0 60%, #C9A962);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: rgba(240, 240, 240, 0.7);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.btn-primary {
  display: inline-block;
  background: linear-gradient(135deg, #C9A962, #a8883e);
  color: #0a0e1a;
  font-weight: 700;
  padding: 0.9rem 2.2rem;
  border-radius: 12px;
  text-decoration: none;
  font-size: 1rem;
  transition: transform 0.2s, box-shadow 0.2s;
  align-self: flex-start;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(201, 169, 98, 0.35);
}

.btn-large {
  padding: 1.1rem 2.8rem;
  font-size: 1.1rem;
}

.available-text {
  font-size: 0.85rem;
  color: rgba(240, 240, 240, 0.45);
}

/* ─── Phone Mockup ─── */
.hero-visual {
  flex: 1;
  display: flex;
  justify-content: center;
  z-index: 1;
}

.phone-mockup {
  width: 260px;
  height: 520px;
  background: #111827;
  border-radius: 36px;
  border: 2px solid rgba(201, 169, 98, 0.3);
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255,255,255,0.05);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.notch {
  width: 80px;
  height: 20px;
  background: #0a0e1a;
  border-radius: 0 0 14px 14px;
  margin: 0 auto;
  flex-shrink: 0;
}

.phone-screen {
  flex: 1;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  overflow: hidden;
}

.mock-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.greet-text {
  font-size: 0.7rem;
  color: rgba(240,240,240,0.5);
}

.mock-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: linear-gradient(135deg, #C9A962, #a8883e);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 700;
  color: #0a0e1a;
}

.mock-card {
  background: linear-gradient(135deg, #1e3a5f, #0a1628);
  border-radius: 14px;
  padding: 0.85rem;
  border: 1px solid rgba(201, 169, 98, 0.2);
}

.mock-label {
  display: block;
  font-size: 0.6rem;
  color: rgba(240,240,240,0.5);
  margin-bottom: 0.25rem;
}

.mock-balance {
  display: block;
  font-size: 1.1rem;
  font-weight: 700;
  color: #f0f0f0;
  margin-bottom: 0.6rem;
}

.currency {
  font-size: 0.65rem;
  color: #C9A962;
}

.mock-card-actions {
  display: flex;
  gap: 0.5rem;
}

.action-btn {
  flex: 1;
  background: rgba(255,255,255,0.08);
  border-radius: 8px;
  padding: 0.3rem;
  font-size: 0.55rem;
  text-align: center;
  color: rgba(240,240,240,0.7);
}

.icon.income { color: #10b981; }
.icon.expense { color: #ef4444; }

.mock-section { flex: 1; }

.section-title {
  font-size: 0.6rem;
  color: rgba(240,240,240,0.4);
  margin-bottom: 0.4rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.mock-transactions {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.mock-tx {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255,255,255,0.04);
  border-radius: 8px;
  padding: 0.4rem 0.5rem;
}

.tx-icon {
  font-size: 0.8rem;
  width: 22px;
  height: 22px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.tx-icon.income { background: rgba(16, 185, 129, 0.15); }
.tx-icon.expense { background: rgba(239, 68, 68, 0.15); }

.tx-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.tx-name {
  font-size: 0.6rem;
  font-weight: 600;
  color: #f0f0f0;
}

.tx-date {
  font-size: 0.5rem;
  color: rgba(240,240,240,0.4);
}

.tx-amount {
  font-size: 0.6rem;
  font-weight: 700;
}

.tx-amount.positive { color: #10b981; }
.tx-amount.negative { color: #ef4444; }

.mock-bottom-nav {
  display: flex;
  justify-content: space-around;
  padding: 0.4rem 0.5rem;
  background: rgba(255,255,255,0.04);
  border-top: 1px solid rgba(255,255,255,0.06);
  border-radius: 0 0 12px 12px;
}

.nav-item {
  font-size: 0.9rem;
  opacity: 0.4;
  cursor: pointer;
}

.nav-item.active {
  opacity: 1;
}

.home-indicator {
  width: 80px;
  height: 4px;
  background: rgba(255,255,255,0.2);
  border-radius: 2px;
  margin: 6px auto;
  flex-shrink: 0;
}

/* ─── Features ─── */
.features {
  padding: 6rem;
  max-width: 1400px;
  margin: 0 auto;
}

.features-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.features-header h2 {
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 700;
  background: linear-gradient(135deg, #f0f0f0 60%, #C9A962);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.75rem;
}

.features-header p {
  color: rgba(240,240,240,0.55);
  font-size: 1.05rem;
}

/* ─── Bento Grid ─── */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.bento-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  padding: 1.75rem;
  transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
  position: relative;
  overflow: hidden;
}

.bento-card:hover {
  transform: translateY(-4px);
  border-color: rgba(201, 169, 98, 0.3);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3);
}

.bento-card.bento-large {
  grid-column: span 2;
}

.bento-card.bento-highlight {
  border-color: rgba(201, 169, 98, 0.25);
  background: rgba(201, 169, 98, 0.06);
}

.bento-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.bento-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #f0f0f0;
  margin-bottom: 0.5rem;
}

.bento-card p {
  font-size: 0.9rem;
  color: rgba(240,240,240,0.55);
  line-height: 1.6;
}

/* Account type chips */
.account-types {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 1rem;
}

.account-chip {
  background: rgba(201, 169, 98, 0.1);
  border: 1px solid rgba(201, 169, 98, 0.2);
  border-radius: 999px;
  padding: 0.2rem 0.65rem;
  font-size: 0.72rem;
  color: #C9A962;
}

/* Budget bar demo */
.budget-bar-demo {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.budget-bar-label {
  display: flex;
  justify-content: space-between;
  font-size: 0.72rem;
  color: rgba(240,240,240,0.5);
}

.budget-bar {
  height: 6px;
  background: rgba(255,255,255,0.08);
  border-radius: 3px;
  overflow: hidden;
}

.budget-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.6s ease;
}

/* Currency chips */
.currency-chips {
  display: flex;
  gap: 0.4rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.currency-chip {
  background: rgba(59, 130, 246, 0.12);
  border: 1px solid rgba(59, 130, 246, 0.25);
  border-radius: 8px;
  padding: 0.25rem 0.65rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #93c5fd;
}

/* Donut chart */
.donut-demo {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}

.donut-chart {
  width: 80px;
  height: 80px;
}

/* Tour steps */
.tour-steps {
  display: flex;
  gap: 0.4rem;
  margin-top: 1rem;
  align-items: center;
}

.tour-step {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  color: rgba(240,240,240,0.5);
}

.tour-step.active {
  background: rgba(201, 169, 98, 0.2);
  border-color: #C9A962;
  color: #C9A962;
  font-weight: 700;
}

/* View mode chips */
.view-modes {
  display: flex;
  gap: 0.4rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.view-chip {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  padding: 0.25rem 0.6rem;
  font-size: 0.72rem;
  color: rgba(240,240,240,0.5);
}

.view-chip.active {
  background: rgba(201, 169, 98, 0.15);
  border-color: rgba(201, 169, 98, 0.35);
  color: #C9A962;
}

/* Format preview */
.format-preview {
  display: flex;
  gap: 0.6rem;
  margin-top: 1rem;
}

.format-example {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  padding: 0.3rem 0.75rem;
  font-size: 0.8rem;
  font-family: monospace;
  color: rgba(240,240,240,0.5);
}

.format-example.active {
  background: rgba(201, 169, 98, 0.12);
  border-color: rgba(201, 169, 98, 0.3);
  color: #C9A962;
}

/* ─── Stats Bar ─── */
.stats-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;
  background: rgba(201, 169, 98, 0.06);
  border-top: 1px solid rgba(201, 169, 98, 0.15);
  border-bottom: 1px solid rgba(201, 169, 98, 0.15);
  padding: 2.5rem 6rem;
}

.stat-item {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.stat-value {
  font-size: 2rem;
  font-weight: 800;
  color: #C9A962;
}

.stat-label {
  font-size: 0.85rem;
  color: rgba(240,240,240,0.5);
}

.stat-divider {
  width: 1px;
  height: 48px;
  background: rgba(201, 169, 98, 0.2);
  margin: 0 2rem;
}

/* ─── CTA Section ─── */
.cta-section {
  padding: 6rem;
  text-align: center;
}

.cta-content h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #f0f0f0;
}

.cta-content p {
  color: rgba(240,240,240,0.55);
  margin-bottom: 2rem;
  font-size: 1.05rem;
}

/* ─── Reveal Animation ─── */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* ─── RTL Adjustments ─── */
[dir="rtl"] .btn-primary {
  align-self: flex-end;
}

[dir="rtl"] .hero {
  flex-direction: row-reverse;
}

/* ─── Responsive ─── */
@media (max-width: 1100px) {
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .bento-card.bento-large {
    grid-column: span 2;
  }
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    padding: 6rem 2rem 4rem;
    text-align: center;
  }

  .hero-content {
    max-width: 100%;
  }

  .btn-primary {
    align-self: center;
  }

  .features {
    padding: 4rem 1.5rem;
  }

  .bento-grid {
    grid-template-columns: 1fr;
  }

  .bento-card.bento-large {
    grid-column: span 1;
  }

  .stats-bar {
    flex-direction: column;
    gap: 1.5rem;
    padding: 3rem 2rem;
  }

  .stat-divider {
    width: 48px;
    height: 1px;
    margin: 0;
  }

  .cta-section {
    padding: 4rem 2rem;
  }
}
</style>
