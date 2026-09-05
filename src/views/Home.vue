<template>
  <div class="home" :dir="isRTL ? 'rtl' : 'ltr'">

    <!-- ══ Hero ══ -->
    <section class="hero">
      <div class="hero-bg" aria-hidden="true"></div>

      <!-- Left: text + CTA -->
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-dot" aria-hidden="true"></span>
          <span>100% Offline · 100% Private</span>
        </div>

        <h1 class="hero-title">{{ t('hero.title') }}</h1>
        <p class="hero-subtitle">{{ t('hero.subtitle') }}</p>

        <div class="hero-actions">
          <a
            href="https://play.google.com/store/apps/details?id=com.medkhalilbs.khazinti"
            target="_blank"
            rel="noopener noreferrer"
            class="store-btn"
            aria-label="Get it on Google Play"
          >
            <svg class="store-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3.18 23.76c.3.17.65.18.97.05l12.5-7.22-2.76-2.76-10.71 9.93zM.5 1.5C.19 1.83 0 2.33 0 3v18c0 .67.19 1.17.5 1.5l.08.07 10.08-10.08v-.24L.58 1.43.5 1.5zm20.32 8.46l-2.87-1.66-3.11 3.11 3.11 3.11 2.89-1.67c.82-.48.82-1.41-.02-1.89zM4.15.24L16.65 7.46l-2.76 2.76L3.18.24C3.5.11 3.85.12 4.15.24z"/>
            </svg>
            <div class="store-btn-text">
              <span class="store-btn-label">{{ t('hero.get_it_on') }}</span>
              <span class="store-btn-name">Google Play</span>
            </div>
          </a>
          <p class="available-text">{{ t('hero.available') }}</p>
        </div>
      </div>

      <!-- Right: phone mockup -->
      <div class="hero-visual" aria-hidden="true">
        <div class="phone-wrap">
          <div class="phone">
            <!-- Notch -->
            <div class="phone-notch">
              <div class="phone-camera"></div>
            </div>

            <div class="phone-screen">
              <!-- Status bar -->
              <div class="sb">
                <span class="sb-time">2:29</span>
                <div class="sb-icons">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="white">
                    <rect x="0" y="5" width="2.5" height="5" rx="0.8" opacity="0.45"/>
                    <rect x="3.8" y="3.5" width="2.5" height="6.5" rx="0.8" opacity="0.65"/>
                    <rect x="7.6" y="1.5" width="2.5" height="8.5" rx="0.8" opacity="0.85"/>
                    <rect x="11.4" y="0" width="2.5" height="10" rx="0.8"/>
                  </svg>
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="white">
                    <path d="M7 7.5a1.1 1.1 0 1 1 0 2.2A1.1 1.1 0 0 1 7 7.5z"/>
                    <path d="M3.6 5.1C4.5 4.2 5.7 3.7 7 3.7s2.5.5 3.4 1.4l1-1C10.1 2.8 8.6 2.1 7 2.1S3.9 2.8 2.6 4.1z" opacity="0.65"/>
                    <path d="M0.8 2.8C2.2 1.4 4 0.6 7 0.6s4.8.8 6.2 2.2l1-1C12.4 0.2 9.9-.5 7-.5S1.6.2 0 1.8z" opacity="0.35"/>
                  </svg>
                  <svg width="22" height="10" viewBox="0 0 22 10" fill="white">
                    <rect x="0.5" y="1" width="18" height="8" rx="2" stroke="white" stroke-width="1" fill="none" opacity="0.5"/>
                    <rect x="2" y="2.5" width="13" height="5" rx="1" opacity="0.9"/>
                    <path d="M19.5 3.5v3c.9-.4 1.5-1 1.5-1.5s-.6-1.1-1.5-1.5z" opacity="0.5"/>
                  </svg>
                </div>
              </div>

              <!-- App content -->
              <div class="app-content">

                <!-- Header row -->
                <div class="app-header">
                  <div>
                    <div class="greeting">Bonjour 👋</div>
                  </div>
                  <div class="header-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)">
                      <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.1h-15V5h15v14.1zm0-16.1h-15C3.1 3 2 4.1 2 5.3v13.4C2 19.9 3.1 21 4.5 21h15c1.4 0 2.5-1.1 2.5-2.3V5.3C22 4.1 20.9 3 19.5 3z"/>
                    </svg>
                  </div>
                </div>

                <!-- Balance section -->
                <div class="balance-section">
                  <div class="balance-label">SOLDE TOTAL</div>
                  <div class="balance-row">
                    <span class="balance-amount">3 290,246</span>
                    <span class="balance-currency">TND</span>
                    <div class="balance-eye">
                      <svg width="14" height="10" viewBox="0 0 24 16" fill="rgba(255,255,255,0.4)">
                        <path d="M12 0C6.5 0 1.7 3.4 0 8c1.7 4.6 6.5 8 12 8s10.3-3.4 12-8C22.3 3.4 17.5 0 12 0zm0 13.3c-2.9 0-5.3-2.4-5.3-5.3S9.1 2.7 12 2.7s5.3 2.4 5.3 5.3-2.4 5.3-5.3 5.3zm0-8.5c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2 3.2-1.4 3.2-3.2-1.4-3.2-3.2-3.2z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- Income / Expense cards -->
                <div class="ie-row">
                  <div class="ie-card ie-income">
                    <div class="ie-label">REVENU</div>
                    <div class="ie-amount income-text">337,717 TND</div>
                  </div>
                  <div class="ie-card ie-expense">
                    <div class="ie-label">DÉPENSES</div>
                    <div class="ie-amount expense-text">273,772 TND</div>
                  </div>
                </div>

                <!-- Trend row -->
                <div class="trend-row">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#10B981">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                  </svg>
                  <span class="trend-label">Ce mois</span>
                  <span class="trend-value">+63,945 TND</span>
                </div>

                <!-- Accounts section -->
                <div class="section-row">
                  <span class="section-label">MES COMPTES</span>
                  <span class="section-link">GÉRER ›</span>
                </div>

                <div class="accounts-row">
                  <div class="account-card acc-green">
                    <div class="acc-icon-wrap" style="background: #10B981;">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
                    </div>
                    <div class="acc-name">Sodexo</div>
                    <div class="acc-balance">200,000 TND</div>
                    <div class="acc-bar" style="background: #10B981;"></div>
                  </div>
                  <div class="account-card acc-purple">
                    <div class="acc-icon-wrap" style="background: #8B5CF6;">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>
                    </div>
                    <div class="acc-name">Wise</div>
                    <div class="acc-balance">640,00 EUR</div>
                    <div class="acc-bar" style="background: #8B5CF6;"></div>
                  </div>
                </div>

                <!-- Recent transactions -->
                <div class="section-row" style="margin-top: 10px;">
                  <span class="section-label">RÉCENTES</span>
                  <span class="section-link">TOUT ›</span>
                </div>

                <div class="tx-list">
                  <div class="tx-row">
                    <div class="tx-dot" style="background: #EF4444;">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-9.8-3.2l.03-.12.9-1.68h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0 0 20 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96C5 16.1 6.9 18 9 18h11v-2H9.42c-.14 0-.25-.11-.25-.25z"/></svg>
                    </div>
                    <div class="tx-info">
                      <span class="tx-name">Courses</span>
                      <span class="tx-date">Hier · Alimentation</span>
                    </div>
                    <span class="tx-amt tx-expense">-42,500</span>
                  </div>
                  <div class="tx-row">
                    <div class="tx-dot" style="background: #10B981;">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
                    </div>
                    <div class="tx-info">
                      <span class="tx-name">Salaire</span>
                      <span class="tx-date">Lun · Revenu</span>
                    </div>
                    <span class="tx-amt tx-income">+2 500,000</span>
                  </div>
                  <div class="tx-row">
                    <div class="tx-dot" style="background: #F59E0B;">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    </div>
                    <div class="tx-info">
                      <span class="tx-name">Transport</span>
                      <span class="tx-date">Dim · Déplacement</span>
                    </div>
                    <span class="tx-amt tx-expense">-8,000</span>
                  </div>
                </div>

              </div>

              <!-- FAB -->
              <div class="phone-fab">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
              </div>

              <!-- Bottom nav -->
              <div class="phone-nav">
                <div class="pnav-item active">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                  <span>Accueil</span>
                </div>
                <div class="pnav-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zm7.02-2L18 5l-3.99-4v3H7v2h7.01v3z"/></svg>
                  <span>Opérations</span>
                </div>
                <div class="pnav-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zm-8 12h19v-3H2v3zm14-12v7h3v-7h-3zM11.5 1L2 6v2h19V6l-9.5-5z"/></svg>
                  <span>Comptes</span>
                </div>
                <div class="pnav-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                  <span>Plus</span>
                </div>
              </div>
            </div>

            <div class="phone-chin"></div>
          </div>

          <!-- Floating badge: income -->
          <div class="float-badge float-badge--income">
            <span class="fb-icon">↑</span>
            <div>
              <div class="fb-label">Revenu</div>
              <div class="fb-value income-text">+337,717</div>
            </div>
          </div>

          <!-- Floating badge: trend -->
          <div class="float-badge float-badge--trend">
            <span class="fb-icon trend-icon">↗</span>
            <div>
              <div class="fb-label">Ce mois</div>
              <div class="fb-value income-text">+63,945 TND</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ Features ══ -->
    <section class="features" id="features">
      <div class="features-header reveal">
        <span class="section-eyebrow">{{ t('features.eyebrow') }}</span>
        <h2>{{ t('features.title') }}</h2>
        <p>{{ t('features.subtitle') }}</p>
      </div>

      <div class="bento-grid">
        <!-- Offline — large -->
        <div class="bento-card bento-large reveal">
          <div class="bento-icon">📵</div>
          <h3>{{ t('features.offline.title') }}</h3>
          <p>{{ t('features.offline.desc') }}</p>
          <div class="bento-visual offline-visual">
            <div class="signal-bars">
              <span class="bar b1"></span>
              <span class="bar b2"></span>
              <span class="bar b3"></span>
              <span class="bar-x">✕</span>
            </div>
            <span class="offline-label">No connection needed</span>
          </div>
        </div>

        <!-- Secure -->
        <div class="bento-card reveal">
          <div class="bento-icon">🔐</div>
          <h3>{{ t('features.secure.title') }}</h3>
          <p>{{ t('features.secure.desc') }}</p>
          <div class="lock-visual">
            <div class="lock-ring"></div>
          </div>
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
              <span>Food</span><span class="budget-pct warn">75%</span>
            </div>
            <div class="budget-bar">
              <div class="budget-fill" style="width: 75%; background: var(--primary);"></div>
            </div>
            <div class="budget-bar-label">
              <span>Transport</span><span class="budget-pct ok">40%</span>
            </div>
            <div class="budget-bar">
              <div class="budget-fill" style="width: 40%; background: var(--income-color);"></div>
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
            <span class="currency-chip">GBP</span>
            <span class="currency-chip more">+10</span>
          </div>
        </div>

        <!-- Stats — large -->
        <div class="bento-card bento-large reveal">
          <div class="bento-icon">📈</div>
          <h3>{{ t('features.stats.title') }}</h3>
          <p>{{ t('features.stats.desc') }}</p>
          <div class="donut-demo">
            <svg viewBox="0 0 100 100" class="donut-chart" role="img" aria-label="Spending breakdown chart">
              <circle cx="50" cy="50" r="36" fill="none" stroke="var(--border-card)" stroke-width="14"/>
              <circle cx="50" cy="50" r="36" fill="none" stroke="var(--primary)" stroke-width="14"
                stroke-dasharray="90 136" stroke-dashoffset="28" transform="rotate(-90 50 50)"/>
              <circle cx="50" cy="50" r="36" fill="none" stroke="var(--income-color)" stroke-width="14"
                stroke-dasharray="45 181" stroke-dashoffset="-62" transform="rotate(-90 50 50)"/>
              <circle cx="50" cy="50" r="36" fill="none" stroke="#6366f1" stroke-width="14"
                stroke-dasharray="25 201" stroke-dashoffset="-107" transform="rotate(-90 50 50)"/>
            </svg>
            <div class="donut-legend">
              <div class="legend-item"><span class="legend-dot" style="background:var(--primary)"></span>Food 40%</div>
              <div class="legend-item"><span class="legend-dot" style="background:var(--income-color)"></span>Transport 20%</div>
              <div class="legend-item"><span class="legend-dot" style="background:#6366f1"></span>Other 11%</div>
            </div>
          </div>
        </div>

        <!-- Subscriptions -->
        <div class="bento-card reveal">
          <div class="bento-icon">📅</div>
          <h3>{{ t('features.subscriptions.title') }}</h3>
          <p>{{ t('features.subscriptions.desc') }}</p>
          <div class="sub-chips">
            <span class="sub-chip">Netflix · 15 TND</span>
            <span class="sub-chip">Spotify · 8 TND</span>
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
            <span class="format-example">١٬٢٣٤٫٥٦</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ CTA ══ -->
    <section class="cta-section reveal">
      <div class="cta-content">
        <div class="cta-badge">Android</div>
        <h2>{{ t('cta.title') }}</h2>
        <p>{{ t('cta.subtitle') }}</p>
        <a
          href="https://play.google.com/store/apps/details?id=com.medkhalilbs.khazinti"
          target="_blank"
          rel="noopener noreferrer"
          class="store-btn store-btn--large"
          aria-label="Get it on Google Play"
        >
          <svg class="store-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M3.18 23.76c.3.17.65.18.97.05l12.5-7.22-2.76-2.76-10.71 9.93zM.5 1.5C.19 1.83 0 2.33 0 3v18c0 .67.19 1.17.5 1.5l.08.07 10.08-10.08v-.24L.58 1.43.5 1.5zm20.32 8.46l-2.87-1.66-3.11 3.11 3.11 3.11 2.89-1.67c.82-.48.82-1.41-.02-1.89zM4.15.24L16.65 7.46l-2.76 2.76L3.18.24C3.5.11 3.85.12 4.15.24z"/>
          </svg>
          <div class="store-btn-text">
            <span class="store-btn-label">{{ t('hero.get_it_on') }}</span>
            <span class="store-btn-name">Google Play</span>
          </div>
        </a>
      </div>
    </section>

  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const isRTL = computed(() => locale.value === 'ar')

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  )
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
/* ══ Base ══ */
.home {
  background: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
  transition: background-color 0.35s ease, color 0.35s ease;
}

/* ══ Hero ══ */
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 7rem 4rem 5rem;
  position: relative;
  overflow: hidden;
  min-height: 90vh;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: var(--gradient-hero);
  pointer-events: none;
  z-index: 0;
}

.hero-content {
  flex: 1;
  max-width: 520px;
  z-index: 1;
  margin-right: 12%;
}

/* Badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--primary-dim);
  border: 1px solid var(--primary-border);
  border-radius: 999px;
  padding: 0.35rem 0.9rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--primary);
  margin-bottom: 1.25rem;
  letter-spacing: 0.01em;
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

.hero-title {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.9rem, 4vw, 3.2rem);
  font-weight: 700;
  line-height: 1.12;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--text-primary) 55%, var(--primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
}

/* Play Store button */
.store-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: #111827;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px;
  padding: 0.7rem 1.4rem;
  color: white;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  cursor: pointer;
}

.store-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.35);
  border-color: var(--primary-border);
}

.store-icon {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
}

.store-btn-text {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.store-btn-label {
  font-size: 0.7rem;
  opacity: 0.75;
  line-height: 1;
}

.store-btn-name {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1;
}

.store-btn--large {
  padding: 0.9rem 1.8rem;
}

.available-text {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin: 0;
}

/* ══ Phone mockup ══ */
.hero-visual {
  flex-shrink: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.phone-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.phone {
  width: 320px;
  background: #0F1724;
  border-radius: 42px;
  border: 2px solid rgba(255,255,255,0.08);
  box-shadow: var(--shadow-phone);
  overflow: hidden;
  position: relative;
  animation: float 5s ease-in-out infinite;
  flex-shrink: 0;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-10px); }
}

.phone-notch {
  width: 80px;
  height: 22px;
  background: #0F1724;
  border-radius: 0 0 14px 14px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.phone-camera {
  width: 8px;
  height: 8px;
  background: #1a2540;
  border-radius: 50%;
  border: 1.5px solid rgba(255,255,255,0.1);
}

.phone-screen {
  background: #0A0E1A;
  min-height: 620px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.phone-chin {
  height: 18px;
  background: #0F1724;
  display: flex;
  align-items: center;
  justify-content: center;
}

.phone-chin::after {
  content: '';
  width: 60px;
  height: 4px;
  background: rgba(255,255,255,0.15);
  border-radius: 2px;
}

/* Status bar */
.sb {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px 4px;
  background: #0A0E1A;
}

.sb-time {
  font-size: 9px;
  font-weight: 600;
  color: white;
  letter-spacing: 0.02em;
}

.sb-icons {
  display: flex;
  align-items: center;
  gap: 4px;
}

/* App content */
.app-content {
  flex: 1;
  padding: 8px 12px 4px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
}

/* Header */
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.greeting {
  font-size: 10px;
  font-weight: 600;
  color: rgba(255,255,255,0.9);
}

.header-icon {
  width: 24px;
  height: 24px;
  background: rgba(255,255,255,0.06);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Balance */
.balance-section {
  padding: 2px 0;
}

.balance-label {
  font-size: 7px;
  font-weight: 600;
  color: rgba(255,255,255,0.45);
  letter-spacing: 0.08em;
  margin-bottom: 3px;
}

.balance-row {
  display: flex;
  align-items: baseline;
  gap: 4px;
}

.balance-amount {
  font-size: 20px;
  font-weight: 700;
  color: white;
  letter-spacing: -0.02em;
  line-height: 1;
}

.balance-currency {
  font-size: 10px;
  font-weight: 600;
  color: rgba(255,255,255,0.6);
}

.balance-eye {
  margin-left: auto;
  opacity: 0.5;
}

/* Income / Expense row */
.ie-row {
  display: flex;
  gap: 6px;
}

.ie-card {
  flex: 1;
  background: rgba(255,255,255,0.04);
  border-radius: 10px;
  padding: 6px 8px;
  border-left: 2px solid transparent;
}

.ie-income {
  border-left-color: #10B981;
}

.ie-expense {
  border-left-color: #EF4444;
}

.ie-label {
  font-size: 6px;
  font-weight: 600;
  color: rgba(255,255,255,0.4);
  letter-spacing: 0.06em;
  margin-bottom: 2px;
}

.ie-amount {
  font-size: 9px;
  font-weight: 700;
}

.income-text { color: #10B981; }
.expense-text { color: #EF4444; }

/* Trend row */
.trend-row {
  display: flex;
  align-items: center;
  gap: 4px;
  background: rgba(16,185,129,0.08);
  border: 1px solid rgba(16,185,129,0.15);
  border-radius: 8px;
  padding: 5px 8px;
}

.trend-label {
  font-size: 8px;
  color: rgba(255,255,255,0.55);
  flex: 1;
}

.trend-value {
  font-size: 8px;
  font-weight: 700;
  color: #10B981;
}

/* Accounts */
.section-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.section-label {
  font-size: 6.5px;
  font-weight: 700;
  color: rgba(255,255,255,0.4);
  letter-spacing: 0.08em;
}

.section-link {
  font-size: 6.5px;
  font-weight: 600;
  color: #C9A962;
}

.accounts-row {
  display: flex;
  gap: 6px;
}

.account-card {
  flex: 1;
  background: rgba(255,255,255,0.04);
  border-radius: 10px;
  padding: 7px 8px 5px;
  position: relative;
  overflow: hidden;
}

.acc-icon-wrap {
  width: 20px;
  height: 20px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
}

.acc-name {
  font-size: 7px;
  color: rgba(255,255,255,0.5);
  margin-bottom: 2px;
}

.acc-balance {
  font-size: 9px;
  font-weight: 700;
  color: white;
}

.acc-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  opacity: 0.6;
}

/* Transactions list */
.tx-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0 10px;
}

.tx-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.tx-row:last-child {
  border-bottom: none;
}

.tx-dot {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.tx-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
}

.tx-name {
  font-size: 9px;
  font-weight: 600;
  color: rgba(255,255,255,0.9);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tx-date {
  font-size: 7.5px;
  color: rgba(255,255,255,0.4);
}

.tx-amt {
  font-size: 9px;
  font-weight: 700;
  flex-shrink: 0;
}

.tx-income { color: #10B981; }
.tx-expense { color: #EF4444; }

/* FAB */
.phone-fab {
  position: absolute;
  bottom: 38px;
  right: 12px;
  width: 32px;
  height: 32px;
  background: #C9A962;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(201,169,98,0.4);
  z-index: 10;
}

/* Bottom nav */
.phone-nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 6px 4px 4px;
  background: rgba(255,255,255,0.03);
  border-top: 1px solid rgba(255,255,255,0.06);
}

.pnav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  color: rgba(255,255,255,0.35);
  font-size: 6px;
  font-weight: 500;
  min-width: 36px;
}

.pnav-item.active {
  color: #C9A962;
}

/* Floating badges */
.float-badge {
  position: absolute;
  background: rgba(15,23,36,0.92);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  white-space: nowrap;
}

.float-badge--income {
  top: 20%;
  left: -70px;
  animation: float-left 6s ease-in-out infinite;
}

.float-badge--trend {
  bottom: 22%;
  right: -65px;
  animation: float-right 7s ease-in-out infinite;
}

@keyframes float-left {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-8px); }
}

@keyframes float-right {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(8px); }
}

.fb-icon {
  font-size: 16px;
  width: 28px;
  height: 28px;
  background: rgba(16,185,129,0.12);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10B981;
  font-weight: 700;
}

.trend-icon {
  background: rgba(201,169,98,0.12);
  color: #C9A962;
}

.fb-label {
  font-size: 9px;
  color: rgba(255,255,255,0.45);
  line-height: 1;
}

.fb-value {
  font-size: 11px;
  font-weight: 700;
  line-height: 1.3;
}

/* ══ Features ══ */
.features {
  padding: 5rem 5rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.features-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-eyebrow {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.75rem;
}

.features-header h2 {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.features-header p {
  font-size: 1rem;
  color: var(--text-secondary);
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.65;
}

/* Bento grid */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.bento-card {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 16px;
  padding: 1.5rem;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.bento-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-card);
  border-color: var(--border-color);
}

.bento-large {
  grid-column: span 2;
}

.bento-icon {
  font-size: 1.75rem;
  margin-bottom: 0.75rem;
}

.bento-card h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: var(--text-primary);
}

.bento-card p {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

/* Offline visual */
.offline-visual {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.signal-bars {
  display: flex;
  align-items: flex-end;
  gap: 3px;
  height: 20px;
}

.bar {
  display: block;
  width: 5px;
  background: var(--border-strong);
  border-radius: 2px;
}

.b1 { height: 8px; }
.b2 { height: 12px; }
.b3 { height: 16px; }

.bar-x {
  font-size: 14px;
  color: var(--expense-color);
  font-weight: 700;
  line-height: 1;
  margin-left: 2px;
}

.offline-label {
  font-size: 0.8rem;
  color: var(--text-muted);
}

/* Lock visual */
.lock-visual {
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
}

.lock-ring {
  width: 36px;
  height: 36px;
  border: 3px solid var(--primary);
  border-radius: 50%;
  position: relative;
  box-shadow: 0 0 16px var(--primary-glow);
}

/* Account chips */
.account-types {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.25rem;
}

.account-chip {
  background: var(--bg-card-hover);
  border: 1px solid var(--border-card);
  border-radius: 999px;
  padding: 0.25rem 0.6rem;
  font-size: 0.75rem;
  color: var(--text-secondary);
}

/* Budget bars */
.budget-bar-demo {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 0.25rem;
}

.budget-bar-label {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: var(--text-secondary);
}

.budget-pct {
  font-weight: 600;
}

.budget-pct.warn { color: var(--primary); }
.budget-pct.ok   { color: var(--income-color); }

.budget-bar {
  height: 5px;
  background: var(--bg-card-hover);
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
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.25rem;
}

.currency-chip {
  background: var(--primary-dim);
  border: 1px solid var(--primary-border);
  border-radius: 6px;
  padding: 0.25rem 0.6rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--primary);
}

.currency-chip.more {
  background: var(--bg-card-hover);
  border-color: var(--border-card);
  color: var(--text-muted);
}

/* Donut chart */
.donut-demo {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 0.5rem;
}

.donut-chart {
  width: 90px;
  height: 90px;
  flex-shrink: 0;
}

.donut-legend {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.78rem;
  color: var(--text-secondary);
}

.legend-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

/* Sub chips */
.sub-chips {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 0.25rem;
}

.sub-chip {
  background: var(--bg-card-hover);
  border: 1px solid var(--border-card);
  border-radius: 8px;
  padding: 0.35rem 0.7rem;
  font-size: 0.78rem;
  color: var(--text-secondary);
}

/* View modes */
.view-modes {
  display: flex;
  gap: 0.4rem;
  margin-top: 0.25rem;
  flex-wrap: wrap;
}

.view-chip {
  background: var(--bg-card-hover);
  border: 1px solid var(--border-card);
  border-radius: 8px;
  padding: 0.3rem 0.65rem;
  font-size: 0.75rem;
  color: var(--text-secondary);
}

.view-chip.active {
  background: var(--primary-dim);
  border-color: var(--primary-border);
  color: var(--primary);
}

/* Format preview */
.format-preview {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-top: 0.25rem;
}

.format-example {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-secondary);
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  border: 1px solid var(--border-card);
  background: var(--bg-card-hover);
}

.format-example.active {
  color: var(--primary);
  border-color: var(--primary-border);
  background: var(--primary-dim);
}

/* ══ CTA ══ */
.cta-section {
  padding: 5rem 2rem;
  text-align: center;
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.cta-badge {
  display: inline-block;
  background: var(--primary-dim);
  border: 1px solid var(--primary-border);
  color: var(--primary);
  border-radius: 999px;
  padding: 0.3rem 0.9rem;
  font-size: 0.78rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  letter-spacing: 0.05em;
}

.cta-content h2 {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.cta-content p {
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.65;
}

.cta-content .store-btn {
  margin: 0 auto;
}

/* ══ Reveal animation ══ */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.55s ease, transform 0.55s ease;
}

.reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* ══ Responsive ══ */
@media (max-width: 1100px) {
  .hero {
    padding: 6rem 3rem 4rem;
    gap: 2.5rem;
  }

  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .bento-large {
    grid-column: span 2;
  }

  .features {
    padding: 4rem 3rem 3rem;
  }
}

@media (max-width: 820px) {
  .hero {
    flex-direction: column;
    padding: 6rem 2rem 3rem;
    min-height: unset;
    text-align: center;
  }

  .hero-content {
    max-width: 100%;
  }

  .hero-actions {
    align-items: center;
  }

  .hero-visual {
    width: 100%;
    justify-content: center;
  }

  .float-badge--income {
    left: -20px;
    top: 15%;
  }

  .float-badge--trend {
    right: -20px;
    bottom: 18%;
  }
}

@media (max-width: 600px) {
  .bento-grid {
    grid-template-columns: 1fr;
  }

  .bento-large {
    grid-column: span 1;
  }

  .float-badge {
    display: none;
  }

  .phone {
    width: 190px;
  }

  .features {
    padding: 3rem 1.5rem 2rem;
  }
}

/* RTL */
[dir="rtl"] .hero-actions {
  align-items: flex-end;
}

[dir="rtl"] .hero-visual {
  margin-left: 0;
  margin-right: 0;
}
</style>
