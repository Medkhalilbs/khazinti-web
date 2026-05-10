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
      <div class="section-header">
        <h2>{{ t('features.title') }}</h2>
        <p>{{ t('features.subtitle') }}</p>
      </div>
      <div class="features-grid">
        <div class="feature-card" v-for="feature in features" :key="feature.key">
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3>{{ t(`features.${feature.key}.title`) }}</h3>
          <p>{{ t(`features.${feature.key}.desc`) }}</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>Ready to Take Control?</h2>
        <p>Start managing your finances today — no sign-up required.</p>
        <a href="#" class="btn-primary btn-large">{{ t('hero.cta') }}</a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const features = [
  { key: 'offline', icon: '📱' },
  { key: 'multi_account', icon: '🏦' },
  { key: 'budgets', icon: '📊' },
  { key: 'multi_currency', icon: '💱' },
  { key: 'stats', icon: '📈' },
  { key: 'secure', icon: '🔒' }
]
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
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 2.25rem;
  color: var(--text-primary);
  margin: 0 0 1rem;
}

.section-header p {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: var(--text-muted);
  margin: 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}

.feature-card {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 16px;
  padding: 2rem;
  transition: border-color 0.3s, transform 0.2s, background-color 0.3s;
}

.feature-card:hover {
  border-color: var(--border-strong);
  background: var(--bg-card-hover);
  transform: translateY(-4px);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.15rem;
  color: var(--text-primary);
  margin: 0 0 0.75rem;
}

.feature-card p {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0;
}

/* CTA */
.cta-section {
  padding: 6rem 2rem;
  text-align: center;
  background: linear-gradient(180deg, transparent 0%, var(--bg-gradient-1) 100%);
}

.cta-content h2 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: var(--text-primary);
  margin: 0 0 1rem;
}

.cta-content p {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: var(--text-muted);
  margin: 0 0 2rem;
}

.btn-large {
  padding: 1.1rem 3rem;
  font-size: 1.1rem;
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
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
