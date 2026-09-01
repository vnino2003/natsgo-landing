<script setup>
import { appLinks } from '../../data/landingContent'
</script>

<template>
  <footer class="footer">
    <div class="wrap footer-inner">
      <a class="footer-brand" href="#" aria-label="NatsGo home">
        <img src="/natsgo-icon.svg" alt="" width="28" height="28" />
        <span>Nats<em>Go</em></span>
      </a>

      <p>Bus tracking for the Natsco Calapan and Naujan route.</p>

      <div class="footer-links">
        <a :href="appLinks.web">Commuter app</a>
        <a href="#operations">Features</a>
        <a href="#faq">Questions</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--line);
  padding: 28px 0;
  background: rgba(255, 255, 255, 0.42);
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.footer-brand {
  display: inline-flex;
  align-items: center;
  gap: 9px;
}

.footer-brand img {
  border-radius: 8px;
}

.footer-brand span {
  color: var(--text);
  font-family: Sora, Inter, sans-serif;
  font-size: 15px;
  font-weight: 850;
  letter-spacing: -0.04em;
}

.footer-brand em {
  color: var(--brand);
  font-style: normal;
}

.footer p,
.footer a {
  color: var(--muted);
  font-size: 13px;
  font-weight: 650;
}

.footer-links {
  display: flex;
  gap: 16px;
}

.footer a:hover {
  color: var(--text);
}

@media (max-width: 760px) {
  .footer-inner {
    display: grid;
    justify-items: start;
  }

  .footer-links {
    flex-wrap: wrap;
  }
}
</style>
