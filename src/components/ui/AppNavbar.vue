<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { appLinks, navItems } from '../../data/landingContent'

const compact = ref(false)

function onScroll() {
  compact.value = window.scrollY > 24
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="nav-wrap" :class="{ compact }">
    <a class="brand" href="#" aria-label="NatsGo home">
      <img src="/natsgo-icon.svg" alt="" width="30" height="30" />
      <span>Nats<em>Go</em></span>
    </a>

    <nav aria-label="Landing page sections">
      <a
        v-for="item in navItems"
        :key="item.id"
        :href="item.href"
      >
        {{ item.label }}
      </a>
    </nav>

    <div class="nav-actions">
      <a
        class="nav-web-link"
        :href="appLinks.web || undefined"
        :aria-disabled="!appLinks.web"
        @click="!appLinks.web && $event.preventDefault()"
      >
        Open web app
      </a>
      <a
        class="nav-action"
        :href="appLinks.android || undefined"
        :aria-disabled="!appLinks.android"
        aria-label="Download Android app"
        title="Download Android app"
        @click="!appLinks.android && $event.preventDefault()"
      >
        Download now
      </a>
    </div>
  </header>
</template>

<style scoped>
.nav-wrap {
  position: fixed;
  top: 16px;
  left: 50%;
  z-index: 50;
  width: min(1010px, calc(100% - 40px));
  height: 58px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 18px;
  transform: translateX(-50%);
  border: 1px solid transparent;
  border-radius: 999px;
  padding: 0 8px 0 12px;
  transition:
    top 260ms var(--ease),
    width 260ms var(--ease),
    background 220ms var(--ease),
    border-color 220ms var(--ease),
    box-shadow 220ms var(--ease),
    height 220ms var(--ease);
}

.nav-wrap.compact {
  top: 12px;
  width: min(920px, calc(100% - 28px));
  height: 52px;
  border-color: rgba(255, 255, 255, 0.74);
  background: rgba(255, 255, 255, 0.74);
  box-shadow: var(--shadow-sm);
  backdrop-filter: blur(18px);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  min-width: 0;
}

.brand img {
  border-radius: 9px;
  box-shadow: 0 8px 18px rgba(30, 136, 229, 0.16);
}

.brand span {
  color: var(--text);
  font-family: Sora, Inter, sans-serif;
  font-size: 17px;
  font-weight: 850;
  letter-spacing: -0.04em;
}

.brand em {
  color: var(--brand);
  font-style: normal;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

nav a {
  border-radius: 999px;
  padding: 7px 12px;
  color: var(--muted);
  font-size: 13px;
  font-weight: 750;
  transition:
    color 180ms var(--ease),
    background 180ms var(--ease);
}

nav a:hover {
  color: var(--text);
  background: rgba(30, 136, 229, 0.08);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.nav-web-link {
  color: var(--muted);
  font-size: 13px;
  font-weight: 800;
  white-space: nowrap;
  transition: color 180ms var(--ease);
}

.nav-web-link:hover {
  color: var(--text);
}

.nav-action {
  display: inline-flex;
  height: 38px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 999px;
  padding: 0 16px;
  background: var(--brand);
  color: #fff;
  font-size: 13px;
  font-weight: 800;
  box-shadow: 0 12px 28px rgba(30, 136, 229, 0.24);
  white-space: nowrap;
}

.nav-web-link[aria-disabled="true"],
.nav-action[aria-disabled="true"] {
  cursor: default;
}

@media (max-width: 740px) {
  .nav-wrap {
    top: 12px;
    width: min(100% - 28px, 1010px);
    grid-template-columns: 1fr auto;
    gap: 10px;
  }

  .nav-wrap.compact {
    top: 10px;
    width: min(100% - 20px, 920px);
  }

  nav {
    display: none;
  }

  .nav-actions {
    gap: 9px;
  }

  .nav-action {
    height: 36px;
    padding: 0 13px;
    font-size: 12px;
  }

  .nav-web-link {
    font-size: 12px;
  }
}

@media (max-width: 380px) {
  .brand span {
    display: none;
  }
}
</style>
