<script setup>
import { appLinks } from '../../data/landingContent'
</script>

<template>
  <section class="cta-section">
    <div class="wrap cta-card reveal">
      <div>
        <p class="section-kicker">Ready</p>
        <h2>Try the commuter app.</h2>
        <p>
          See how NatsGo presents Natsco bus tracking, arrivals, fares, terminals, and updates.
        </p>
      </div>
      <div class="cta-actions">
        <a
          class="btn-primary cta-download"
          :href="appLinks.android || undefined"
          :aria-disabled="!appLinks.android"
          aria-label="Download Android app"
          @click="!appLinks.android && $event.preventDefault()"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.1 3.6 6.9 1.5a.7.7 0 0 0-1.2.7l1.2 2.1A7 7 0 0 0 5 9v1h14V9a7 7 0 0 0-1.9-4.7l1.2-2.1a.7.7 0 0 0-1.2-.7l-1.2 2.1A7.4 7.4 0 0 0 12 2.5c-1.4 0-2.7.4-3.9 1.1ZM8.5 7a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6Zm7 0a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6ZM5 11.5h14v6.8c0 1-.8 1.7-1.7 1.7H6.7c-1 0-1.7-.8-1.7-1.7v-6.8Zm-2.3.2c.7 0 1.3.6 1.3 1.3v4.2a1.3 1.3 0 0 1-2.6 0V13c0-.7.6-1.3 1.3-1.3Zm18.6 0c.7 0 1.3.6 1.3 1.3v4.2a1.3 1.3 0 0 1-2.6 0V13c0-.7.6-1.3 1.3-1.3Z" />
          </svg>
          Download now
        </a>
        <a
          class="btn-secondary"
          :href="appLinks.web || undefined"
          :aria-disabled="!appLinks.web"
          @click="!appLinks.web && $event.preventDefault()"
        >
          Open web app
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  padding: 92px 0 118px;
}

.cta-card {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  border: 1px solid rgba(255, 255, 255, 0.72);
  border-radius: 34px;
  padding: clamp(30px, 5vw, 54px);
  background:
    radial-gradient(circle at 85% 15%, rgba(0, 188, 212, 0.22), transparent 26%),
    linear-gradient(135deg, #0d1729, #113865 64%, #1468c7);
  color: #fff;
  box-shadow: var(--shadow-md);
}

.cta-card::before {
  content: "";
  position: absolute;
  inset: auto -120px -160px auto;
  width: 360px;
  height: 360px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.22);
}

.cta-card :deep(.section-kicker) {
  color: rgba(255, 255, 255, 0.72);
}

.cta-card :deep(.section-kicker::before) {
  background: var(--green);
}

.cta-card h2 {
  max-width: 650px;
  font-family: Sora, Inter, sans-serif;
  font-size: clamp(33px, 5vw, 60px);
  line-height: 1;
  letter-spacing: -0.055em;
}

.cta-card p:not(.section-kicker) {
  max-width: 570px;
  margin-top: 18px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  line-height: 1.7;
}

.cta-card .btn-primary {
  flex: 0 0 auto;
  background: #fff;
  color: var(--brand-dark);
  box-shadow: 0 20px 42px rgba(0, 0, 0, 0.18);
}

.cta-actions {
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 12px;
}

.cta-download svg {
  width: 18px;
  height: 18px;
  fill: currentColor;
}

.cta-card .btn-secondary {
  border-color: rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.86);
  box-shadow: none;
}

.cta-actions a[aria-disabled="true"] {
  cursor: default;
}

@media (max-width: 780px) {
  .cta-section {
    padding: 58px 0 84px;
  }

  .cta-card {
    display: grid;
    gap: 24px;
    border-radius: 26px;
    padding: 24px;
  }

  .cta-card h2 {
    font-size: 32px;
    letter-spacing: -0.04em;
  }

  .cta-card p:not(.section-kicker) {
    margin-top: 14px;
    font-size: 14px;
    line-height: 1.6;
  }

  .cta-actions {
    display: grid;
    justify-content: stretch;
  }

  .cta-card .btn-primary,
  .cta-card .btn-secondary {
    width: 100%;
  }
}
</style>
