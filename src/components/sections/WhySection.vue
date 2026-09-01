<script setup>
import { commuterPoints } from '../../data/landingContent'
</script>

<template>
  <section class="section why" id="commuters">
    <div class="wrap why-grid">
      <div class="section-head reveal">
        <p class="section-kicker">For commuters</p>
        <h2 class="section-title">Less waiting. Less asking around.</h2>
      </div>

      <div class="why-list reveal" style="transition-delay: .1s">
        <article v-for="item in commuterPoints" :key="item.title" class="why-item">
          <span></span>
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.body }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 64px;
  align-items: start;
}

.why-list {
  display: grid;
  gap: 12px;
}

.why-item {
  display: grid;
  grid-template-columns: 12px 1fr;
  gap: 18px;
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 22px;
  background: rgba(255, 255, 255, 0.66);
  box-shadow: var(--shadow-sm);
}

.why-item > span {
  width: 10px;
  height: 10px;
  margin-top: 8px;
  border-radius: 999px;
  background: var(--brand);
  box-shadow: 0 0 0 6px rgba(30, 136, 229, 0.1);
}

.why-item h3 {
  color: var(--text);
  font-family: Sora, Inter, sans-serif;
  font-size: 18px;
  letter-spacing: -0.035em;
  line-height: 1.2;
}

.why-item p {
  margin-top: 8px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.7;
}

@media (max-width: 780px) {
  .why-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .why-item {
    grid-template-columns: 9px 1fr;
    gap: 14px;
    border-radius: 20px;
    padding: 16px;
  }

  .why-item > span {
    width: 8px;
    height: 8px;
    margin-top: 7px;
  }

  .why-item h3 {
    font-size: 16px;
  }

  .why-item p {
    margin-top: 5px;
    font-size: 13px;
    line-height: 1.55;
  }
}
</style>
