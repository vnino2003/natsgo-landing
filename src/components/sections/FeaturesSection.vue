<script setup>
import { commuterFeatures } from '../../data/landingContent'
</script>

<template>
  <section class="section features" id="operations">
    <div class="wrap">
      <div class="section-head reveal">
        <p class="section-kicker">Features</p>
        <h2 class="section-title">Useful trip details without the extra noise.</h2>
        <p class="section-sub">
          NatsGo keeps the commuter side focused on what helps people ride: nearby buses,
          arrival time, terminals, fares, promos, and route updates.
        </p>
      </div>

      <div class="feature-grid">
        <article
          v-for="(feature, index) in commuterFeatures"
          :key="feature.title"
          class="feature-card reveal"
          :class="{ 'feature-card-wide': feature.wide }"
          :style="{ transitionDelay: `${index * 70}ms` }"
        >
          <span class="feature-index">{{ feature.meta }}</span>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.feature-card {
  min-height: 196px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  border: 1px solid var(--line);
  border-radius: 28px;
  padding: 24px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.84), rgba(255, 255, 255, 0.98)),
    var(--surface);
  box-shadow: var(--shadow-sm);
  transition:
    transform 260ms var(--ease),
    border-color 260ms var(--ease),
    box-shadow 260ms var(--ease);
}

.feature-card:hover {
  transform: translateY(-6px);
  border-color: rgba(30, 136, 229, 0.24);
  box-shadow: var(--shadow-md);
}

.feature-card-wide {
  grid-column: span 2;
}

.feature-index {
  margin-bottom: auto;
  color: var(--brand);
  font-family: Sora, Inter, sans-serif;
  font-size: 13px;
  font-weight: 850;
}

.feature-card h3 {
  max-width: 430px;
  color: var(--text);
  font-family: Sora, Inter, sans-serif;
  font-size: 20px;
  line-height: 1.15;
  letter-spacing: -0.04em;
}

.feature-card p {
  max-width: 460px;
  margin-top: 12px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.7;
}

@media (max-width: 780px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }

  .feature-card-wide {
    grid-column: span 1;
  }

  .feature-card {
    min-height: auto;
    border-radius: 20px;
    padding: 18px;
  }

  .feature-index {
    margin-bottom: 24px;
    font-size: 12px;
  }

  .feature-card h3 {
    font-size: 18px;
  }

  .feature-card p {
    margin-top: 8px;
    font-size: 13px;
    line-height: 1.58;
  }
}
</style>
