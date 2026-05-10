<template>
  <div class="home">
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
          <a href="#" class="btn-primary">{{ t('hero.cta') }}</a>
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
                <div class="mock-tx">
                  <div class="tx-icon income">💰</div>
                  <div class="tx-info">
                    <span class="tx-name">Salary</span>
                    <span class="tx-date">Today, 09:00</span>
                  </div>
                  <span class="tx-amount positive">+2,500.00</span>
                </div>
                <div class="mock-tx">
                  <div class="tx-icon expense">🛒</div>
                  <div class="tx-info">
                    <span class="tx-name">Groceries</span>
                    <span class="tx-date">Yesterday, 18:30</span>
                  </div>
                  <span class="tx-amount negative">-85.50</span>
                </div>
                <div class="mock-tx">
                  <div class="tx-icon expense">🚕</div>
                  <div class="tx-info">
                    <span class="tx-name">Transport</span>
                    <span class="tx-date">12 May, 08:15</span>
                  </div>
                  <span class="tx-amount negative">-12.00</span>
                </div>
              </div>
            </div>
          </div>
          <div class="home-indicator"></div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="features-inner">
        <div class="section-header">
          <span class="section-eyebrow">Features</span>
          <h2>{{ t('features.title') }}</h2>
          <p>{{ t('features.subtitle') }}</p>
        </div>

        <div class="bento-grid">
          <!-- Offline — large hero card -->
          <div class="bento-card bento-hero" @mouseenter="hoveredFeature = 'offline'" @mouseleave="hoveredFeature = null">
            <div class="bento-icon-wrap" style="--card-color: #22c55e">
              <span class="bento-icon">📵</span>
            </div>
            <div class="bento-text">
              <h3>{{ t('features.offline.title') }}</h3>
              <p>{{ t('features.offline.desc') }}</p>
            </div>
            <div class="bento-glow" style="--glow: rgba(34,197,94,0.12)"></div>
          </div>

          <!-- Multi-Account -->
          <div class="bento-card" @mouseenter="hoveredFeature = 'multi_account'" @mouseleave="hoveredFeature = null">
            <div class="bento-icon-wrap" style="--card-color: #60a5fa">
              <span class="bento-icon">🏦</span>
            </div>
            <div class="bento-text">
              <h3>{{ t('features.multi_account.title') }}</h3>
              <p>{{ t('features.multi_account.desc') }}</p>
            </div>
            <div class="bento-glow" style="--glow: rgba(96,165,250,0.12)"></div>
          </div>

          <!-- Budgets -->
          <div class="bento-card" @mouseenter="hoveredFeature = 'budgets'" @mouseleave="hoveredFeature = null">
            <div class="bento-icon-wrap" style="--card-color: #f59e0b">
              <span class="bento-icon">🎯</span>
            </div>
            <div class="bento-text">
              <h3>{{ t('features.budgets.title') }}</h3>
              <p>{{ t('features.budgets.desc') }}</p>
            </div>
            <div class="bento-glow" style="--glow: rgba(245,158,11,0.12)"></div>
          </div>

          <!-- Multi-Currency -->
          <div class="bento-card" @mouseenter="hoveredFeature = 'multi_currency'" @mouseleave="hoveredFeature = null">
            <div class="bento-icon-wrap" style="--card-color: #a78bfa">
              <span class="bento-icon">💱</span>
            </div>
            <div class="bento-text">
              <h3>{{ t('features.multi_currency.title') }}</h3>
              <p>{{ t('features.multi_currency.desc') }}</p>
            </div>
            <div class="bento-glow" style="--glow: rgba(167,139,250,0.12)"></div>
          </div>

          <!-- Stats — large -->
          <div class="bento-card bento-wide" @mouseenter="hoveredFeature = 'stats'" @mouseleave="hoveredFeature = null">
            <div class="bento-icon-wrap" style="--card-color: #f472b6">
              <span class="bento-icon">📈</span>
            </div>
            <div class="bento-text">
              <h3>{{ t('features.stats.title') }}</h3>
              <p>{{ t('features.stats.desc') }}</p>
            </div>
            <!-- Mini donut preview -->
            <div class="mini-chart">
              <div class="donut"></div>
              <div class="chart-legend">
                <span class="legend-item" style="--dot: #22c55e">Food</span>
                <span class="legend-item" style="--dot: #f59e0b">Transport</span>
                <span class="legend-item" style="--dot: #60a5fa">Bills</span>
              </div>
            </div>
            <div class="bento-glow" style="--glow: rgba(244,114,182,0.12)"></div>
          </div>

          <!-- Secure -->
          <div class="bento-card bento-gold" @mouseenter="hoveredFeature = 'secure'" @mouseleave="hoveredFeature = null">
            <div class="bento-icon-wrap" style="--card-color: #C9A962">
              <span class="bento-icon">🔐</span>
            </div>
            <div class="bento-text">
              <h3>{{ t('features.secure.title') }}</h3>
              <p>{{ t('features.secure.desc') }}</p>
            </div>
            <div class="bento-glow" style="--glow: rgba(201,169,98,0.15)"></div>
          </div>
        </div>

        <!-- Stats bar -->
        <div class="stats-bar">
          <div class="stat-item">
            <span class="stat-number">100%</span>
            <span class="stat-label">Offline</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">10+</span>
            <span class="stat-label">Currencies</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">0</span>
            <span class="stat-label">Data Shared</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">Free</span>
            <span class="stat-label">To Download</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-glow"></div>
      <div class="cta-content">
        <span class="cta-eyebrow">🚀 Android Exclusive</span>
        <h2>Ready to Take Control?</h2>
        <p>Start managing your finances today — no sign-up, no cloud, no tracking.</p>
        <a href="#" class="btn-primary btn-large">{{ t('hero.cta') }}</a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const hoveredFeature = ref(null)
</script>

<style scoped>
.home {
  padding-top: 80px;
}

/* Hero */
.hero {
  position: relative;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 30% 50%, var(--bg-gradient-1) 0%, transparent 60%),
              radial-gradient(ellipse at 70% 80%, var(--bg-gradient-2) 0%, transparent 50%);
}

.hero-content {
  position: relative;
  max-width: 600px;
  z-index: 1;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--border-color);
  border: 1px solid var(--border-strong);
  border-radius: 100px;
  margin-bottom: 2rem;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: #22c55e;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.hero-badge span:last-child {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: #C9A962;
}

.hero-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  line-height: 1.15;
  color: var(--text-primary);
  margin: 0 0 1.5rem;
}

.hero-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin: 0 0 2.5rem;
}

.hero-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 2rem;
  background: linear-gradient(135deg, #C9A962, #B8944E);
  color: #0A0E1A;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 12px;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  width: fit-content;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(201, 169, 98, 0.3);
}

.available-text {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  color: var(--text-muted);
  margin: 0;
}

.hero-visual {
  position: relative;
  z-index: 1;
  margin-left: 4rem;
}

.phone-mockup {
  width: 280px;
  height: 560px;
  background: var(--phone-bg);
  border-radius: 40px;
  border: 4px solid var(--border-strong);
  padding: 0;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;
  position: relative;
  overflow: hidden;
  animation: floatMockup 6s ease-in-out infinite;
}

@keyframes floatMockup {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

.notch {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 24px;
  background: var(--border-strong);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  z-index: 10;
}

.home-indicator {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: var(--text-muted);
  border-radius: 4px;
}

.phone-screen {
  height: 100%;
  padding: 2.5rem 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow-y: auto;
  scrollbar-width: none;
}
.phone-screen::-webkit-scrollbar { display: none; }

.mock-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.greeting {
  display: flex;
  flex-direction: column;
}

.greet-text {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  color: var(--text-muted);
}

.greet-name {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--text-primary);
}

.mock-avatar {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, var(--primary), #B8944E);
  color: #0A0E1A;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1rem;
}

.mock-card {
  background: linear-gradient(135deg, var(--primary), #B8944E);
  border-radius: 20px;
  padding: 1.25rem;
  color: #0A0E1A;
  box-shadow: 0 10px 20px rgba(201, 169, 98, 0.2);
}

.mock-label {
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  color: rgba(10, 14, 26, 0.7);
  margin-bottom: 0.25rem;
}

.mock-balance {
  display: block;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  color: #0A0E1A;
}

.currency {
  font-size: 1rem;
  font-weight: 600;
}

.mock-card-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.25rem;
}

.action-btn {
  flex: 1;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 12px;
  padding: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.8rem;
}

.action-btn .icon {
  width: 20px;
  height: 20px;
  background: rgba(10, 14, 26, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
}

.mock-section {
  flex: 1;
}

.section-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.mock-transactions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.mock-tx {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: var(--tx-bg);
  border-radius: 14px;
}

.tx-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
}

.tx-icon.income { background: rgba(34, 197, 94, 0.15); }
.tx-icon.expense { background: rgba(239, 68, 68, 0.15); }

.tx-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.tx-name {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.85rem;
  color: var(--text-primary);
}

.tx-date {
  font-family: 'Inter', sans-serif;
  font-size: 0.7rem;
  color: var(--text-muted);
}

.tx-amount {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 0.85rem;
}

.tx-amount.positive { color: #22c55e; }
.tx-amount.negative { color: #ef4444; }

/* Features */
.features {
  padding: 6rem 2rem;
  background: var(--bg-primary);
}

.features-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.section-eyebrow {
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--primary);
  background: rgba(201, 169, 98, 0.1);
  border: 1px solid rgba(201, 169, 98, 0.25);
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  margin-bottom: 1.25rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.section-header h2 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  color: var(--text-primary);
  margin: 0 0 1rem;
}

.section-header p {
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  color: var(--text-muted);
  max-width: 520px;
  margin: 0 auto;
  line-height: 1.7;
}

/* Bento Grid */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 1.25rem;
}

.bento-hero {
  grid-column: span 1;
  grid-row: span 2;
}

.bento-wide {
  grid-column: span 2;
}

.bento-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 20px;
  padding: 2rem;
  overflow: hidden;
  transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
  cursor: default;
}

.bento-card:hover {
  border-color: var(--border-strong);
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
}

.bento-gold {
  background: linear-gradient(135deg, var(--bg-card), rgba(201, 169, 98, 0.05));
  border-color: rgba(201, 169, 98, 0.2);
}

.bento-gold:hover {
  border-color: rgba(201, 169, 98, 0.5);
  box-shadow: 0 16px 40px rgba(201, 169, 98, 0.12);
}

/* Glow effect */
.bento-glow {
  position: absolute;
  top: -40px;
  right: -40px;
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, var(--glow) 0%, transparent 70%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s;
}

.bento-card:hover .bento-glow {
  opacity: 1;
}

/* Icon wrap */
.bento-icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: color-mix(in srgb, var(--card-color) 15%, transparent);
  border: 1px solid color-mix(in srgb, var(--card-color) 30%, transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
  transition: transform 0.3s;
}

.bento-card:hover .bento-icon-wrap {
  transform: scale(1.1) rotate(-3deg);
}

.bento-text h3 {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--text-primary);
  margin: 0 0 0.6rem;
}

.bento-text p {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  line-height: 1.65;
  color: var(--text-muted);
  margin: 0;
}

/* Mini chart in stats card */
.mini-chart {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
}

.donut {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: conic-gradient(
    #22c55e 0deg 130deg,
    #f59e0b 130deg 220deg,
    #60a5fa 220deg 360deg
  );
  flex-shrink: 0;
  position: relative;
}

.donut::after {
  content: '';
  position: absolute;
  inset: 16px;
  border-radius: 50%;
  background: var(--bg-card);
}

.chart-legend {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  color: var(--text-secondary);
}

.legend-item::before {
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--dot);
  flex-shrink: 0;
}

/* Stats bar */
.stats-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  margin-top: 3rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 1.75rem 2rem;
  flex-wrap: wrap;
}

.stat-item {
  flex: 1;
  min-width: 120px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.stat-number {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.75rem;
  background: linear-gradient(135deg, var(--primary), #B8944E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.82rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--border-color);
  flex-shrink: 0;
  margin: 0 1rem;
}

/* CTA */
.cta-section {
  padding: 7rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 400px;
  background: radial-gradient(ellipse, rgba(201, 169, 98, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

.cta-eyebrow {
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--primary);
  background: rgba(201, 169, 98, 0.1);
  border: 1px solid rgba(201, 169, 98, 0.25);
  padding: 0.4rem 1rem;
  border-radius: 999px;
  margin-bottom: 1.5rem;
}

.cta-content {
  position: relative;
  z-index: 1;
}

.cta-content h2 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  color: var(--text-primary);
  margin: 0 0 1rem;
}

.cta-content p {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: var(--text-muted);
  margin: 0 0 2.5rem;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}

.btn-large {
  padding: 1.1rem 3rem;
  font-size: 1.05rem;
}

@media (max-width: 900px) {
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .bento-hero {
    grid-column: span 2;
    grid-row: span 1;
  }
  .bento-wide {
    grid-column: span 2;
  }
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 3rem 1.5rem;
  }
  .hero-visual {
    margin-left: 0;
    margin-top: 3rem;
  }
  .hero-actions {
    align-items: center;
  }
  .phone-mockup {
    width: 240px;
    height: 480px;
  }
  .bento-grid {
    grid-template-columns: 1fr;
  }
  .bento-hero,
  .bento-wide {
    grid-column: span 1;
    grid-row: span 1;
  }
  .stats-bar {
    gap: 1rem;
  }
  .stat-divider {
    display: none;
  }
}
</style>
