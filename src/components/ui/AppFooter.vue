<script setup>
import { appLinks } from '../../data/landingContent'
</script>

<template>
  <footer class="footer">
    <div class="wrap footer-grid">
      <div class="footer-col footer-col--brand">
        <a class="footer-brand" href="#" aria-label="NatsGo home">
          <img src="/natsgo-icon.svg" alt="" width="32" height="32" />
          <span>Nats<em>Go</em></span>
        </a>
        <p class="footer-tagline">Real-time bus tracking for the Natsco Calapan–Naujan route.</p>
        <p class="footer-capstone">A capstone project for public transit visibility in Oriental Mindoro.</p>
      </div>

      <div class="footer-col">
        <h4>Product</h4>
        <ul>
          <li><a href="#screens">Experience</a></li>
          <li><a href="#operations">Features</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Get the app</h4>
        <ul>
          <li>
            <a
              :href="appLinks.web || undefined"
              :aria-disabled="!appLinks.web"
              @click="!appLinks.web && $event.preventDefault()"
            >
              Web app
            </a>
          </li>
          <li>
            <a
              :href="appLinks.android || undefined"
              :aria-disabled="!appLinks.android"
              @click="!appLinks.android && $event.preventDefault()"
            >
              Android
            </a>
          </li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Developers</h4>
        <ul class="dev-list">
          <li>Vincent Niño Vertudo</li>
          <li>Argie Delima</li>
          <li>Brent Libang</li>
        </ul>
      </div>
    </div>

    <div class="wrap footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} NatsGo</p>
      <p>Built for commuters.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--line);
  padding: 52px 0 0;
  background: linear-gradient(180deg, rgba(231, 243, 255, 0.3) 0%, rgba(255, 255, 255, 0.6) 100%);
}

/* ── Grid ── */

.footer-grid {
  display: grid;
  grid-template-columns: 1.6fr 0.8fr 0.8fr 1fr;
  gap: 40px;
}

/* ── Brand column ── */

.footer-brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}

.footer-brand img {
  border-radius: 8px;
}

.footer-brand span {
  color: var(--text);
  font-family: var(--font-heading);
  font-size: 18px;
  font-weight: 850;
  letter-spacing: -0.04em;
}

.footer-brand em {
  color: var(--brand);
  font-style: normal;
}

.footer-tagline {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.6;
  max-width: 320px;
}

.footer-capstone {
  color: var(--faint);
  font-size: 12px;
  margin-top: 8px;
  max-width: 320px;
}

/* ── Columns ── */

.footer-col h4 {
  font-size: 12px;
  font-weight: 750;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text);
  margin-bottom: 14px;
}

.footer-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.footer-col a,
.dev-list li {
  color: var(--muted);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: color 180ms var(--ease);
}

.footer-col a:hover {
  color: var(--brand);
}

.footer-col a[aria-disabled="true"] {
  cursor: default;
  opacity: 0.5;
}

.footer-col a[aria-disabled="true"]:hover {
  color: var(--muted);
}

.dev-list li {
  font-size: 13px;
}

/* ── Bottom bar ── */

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  margin-top: 44px;
  border-top: 1px solid var(--line);
}

.footer-bottom p {
  color: var(--faint);
  font-size: 12px;
  font-weight: 500;
}

/* ── Responsive ── */

@media (max-width: 780px) {
  .footer {
    padding: 40px 0 0;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  .footer-col--brand {
    grid-column: 1 / -1;
  }

  .footer-bottom {
    margin-top: 32px;
  }
}

@media (max-width: 480px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}
</style>
