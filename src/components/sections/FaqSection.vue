<script setup>
import { ref } from 'vue'
import { faqs } from '../../data/landingContent'

const open = ref(0)

function toggle(index) {
  open.value = open.value === index ? null : index
}
</script>

<template>
  <section class="section faq" id="faq">
    <div class="wrap faq-grid">
      <div class="section-head reveal">
        <p class="section-kicker">FAQ</p>
        <h2 class="section-title">Straight answers.</h2>
      </div>

      <div class="faq-list reveal" style="transition-delay: .1s">
        <article v-for="(item, index) in faqs" :key="item.q" class="faq-item" :class="{ open: open === index }">
          <button type="button" @click="toggle(index)" :aria-expanded="open === index">
            <span>{{ item.q }}</span>
            <i aria-hidden="true"></i>
          </button>
          <p v-show="open === index">{{ item.a }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 42px;
  align-items: start;
}

.faq-list {
  display: grid;
  gap: 10px;
}

.faq-item {
  border: 1px solid var(--line);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.72);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}

.faq-item button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  border: 0;
  background: transparent;
  padding: 20px 22px;
  color: var(--text);
  cursor: pointer;
}

.faq-item button span {
  font-family: Sora, Inter, sans-serif;
  font-size: 15px;
  font-weight: 750;
  letter-spacing: -0.02em;
  text-align: left;
}

.faq-item button i {
  position: relative;
  width: 28px;
  height: 28px;
  flex: 0 0 auto;
  border-radius: 999px;
  background: var(--surface-blue);
}

.faq-item button i::before,
.faq-item button i::after {
  content: "";
  position: absolute;
  left: 9px;
  right: 9px;
  top: 13px;
  height: 2px;
  border-radius: 99px;
  background: var(--brand);
}

.faq-item button i::after {
  transform: rotate(90deg);
  transition: transform 180ms var(--ease);
}

.faq-item.open button i::after {
  transform: rotate(0);
}

.faq-item p {
  padding: 0 22px 20px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.72;
}

@media (max-width: 780px) {
  .faq-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }
}
</style>
