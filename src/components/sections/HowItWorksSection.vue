<script setup>
import { commuterFlow } from '../../data/landingContent'
</script>

<template>
  <section class="section flow" id="how">
    <div class="wrap">
      <div class="section-head reveal">
        <p class="section-kicker">Ride flow</p>
        <h2 class="section-title">Open the app, check the route, plan the ride.</h2>
      </div>

      <div class="flow-line reveal" style="transition-delay: .1s">
        <article v-for="step in commuterFlow" :key="step.title" class="flow-step">
          <span>{{ step.number }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.flow-line {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.flow-line::before {
  content: "";
  position: absolute;
  top: 31px;
  left: 40px;
  right: 40px;
  height: 2px;
  background: linear-gradient(90deg, var(--brand), rgba(30, 136, 229, 0.08));
}

.flow-step {
  position: relative;
  z-index: 1;
  border: 1px solid var(--line);
  border-radius: 28px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: var(--shadow-sm);
}

.flow-step span {
  display: grid;
  place-items: center;
  width: 62px;
  height: 62px;
  margin-bottom: 34px;
  border-radius: 22px;
  background: var(--brand);
  color: #fff;
  font-family: Sora, Inter, sans-serif;
  font-size: 14px;
  font-weight: 850;
  box-shadow: 0 16px 34px rgba(30, 136, 229, 0.24);
}

.flow-step h3 {
  color: var(--text);
  font-family: Sora, Inter, sans-serif;
  font-size: 18px;
  line-height: 1.2;
  letter-spacing: -0.04em;
}

.flow-step p {
  margin-top: 10px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.7;
}

@media (max-width: 780px) {
  .flow-line {
    grid-template-columns: 1fr;
  }

  .flow-line::before {
    display: none;
  }

  .flow-step span {
    width: 42px;
    height: 42px;
    margin-bottom: 18px;
    border-radius: 16px;
    font-size: 12px;
  }

  .flow-step {
    border-radius: 20px;
    padding: 18px;
  }

  .flow-step h3 {
    font-size: 17px;
  }

  .flow-step p {
    margin-top: 7px;
    font-size: 13px;
    line-height: 1.58;
  }
}
</style>
