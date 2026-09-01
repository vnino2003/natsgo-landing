<script setup>
defineProps({
  visible: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <Transition name="intro-fade">
    <div v-if="visible" class="page-intro" role="status" aria-label="Loading NatsGo">
      <div class="intro-card">
        <img src="/natsgo-icon.svg" alt="" width="38" height="38" />
        <span>Nats<em>Go</em></span>
        <i aria-hidden="true"></i>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.page-intro {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: grid;
  place-items: center;
  background:
    radial-gradient(circle at 52% 42%, rgba(30, 136, 229, 0.14), transparent 24%),
    linear-gradient(180deg, #eff8ff 0%, #f8fbff 64%, #ffffff 100%);
}

.intro-card {
  display: grid;
  place-items: center;
  gap: 12px;
  min-width: 156px;
  transform-origin: center;
  animation: introLift 900ms var(--ease) both;
}

.intro-card img {
  border-radius: 12px;
  box-shadow: 0 16px 36px rgba(30, 136, 229, 0.18);
}

.intro-card span {
  color: var(--text);
  font-family: Sora, Inter, sans-serif;
  font-size: 22px;
  font-weight: 850;
  letter-spacing: -0.045em;
  line-height: 1;
}

.intro-card em {
  color: var(--brand);
  font-style: normal;
}

.intro-card i {
  position: relative;
  width: 112px;
  height: 3px;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(30, 136, 229, 0.11);
}

.intro-card i::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--brand), var(--cyan));
  transform-origin: left;
  animation: introProgress 820ms var(--ease) both;
}

.intro-fade-leave-active {
  transition:
    opacity 360ms var(--ease),
    transform 360ms var(--ease);
}

.intro-fade-leave-to {
  opacity: 0;
  transform: scale(1.015);
}

@keyframes introLift {
  from {
    opacity: 0;
    transform: translateY(14px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes introProgress {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .intro-card,
  .intro-card i::before {
    animation: none;
  }

  .intro-fade-leave-active {
    transition: none;
  }
}
</style>
