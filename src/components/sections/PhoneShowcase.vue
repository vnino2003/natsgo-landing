<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { appScreens } from '../../data/landingContent'

const activeIndex = ref(0)
const currentScreen = computed(() => appScreens[activeIndex.value])
let timer = null

function setActive(index) {
  activeIndex.value = index
}

function nextScreen() {
  activeIndex.value = (activeIndex.value + 1) % appScreens.length
}

function prevScreen() {
  activeIndex.value = (activeIndex.value - 1 + appScreens.length) % appScreens.length
}

onMounted(() => {
  timer = window.setInterval(nextScreen, 5200)
})

onUnmounted(() => {
  window.clearInterval(timer)
})
</script>

<template>
  <section class="section showcase" id="screens">
    <div class="wrap showcase-grid">
      <div class="section-head reveal">
        <p class="section-kicker">Experience</p>
        <h2 class="section-title">Actual screens from the commuter app.</h2>
        <p class="section-sub">
          Home, predicted arrivals, live tracking, terminals, and account tools shown with the
          current NatsGo interface.
        </p>

        <div class="screen-tabs" aria-label="Choose app screen">
          <button
            v-for="(screen, index) in appScreens"
            :key="screen.title"
            type="button"
            :class="{ active: activeIndex === index }"
            @click="setActive(index)"
          >
            {{ screen.title }}
          </button>
        </div>
      </div>

      <div class="showcase-panel reveal" style="transition-delay: .12s">
        <button class="carousel-button prev" type="button" aria-label="Previous screen" @click="prevScreen">
          <span aria-hidden="true"></span>
        </button>

        <Transition name="screen-swap" mode="out-in">
          <article :key="currentScreen.title" class="screen-focus">
            <div class="screen-art">
              <img :src="currentScreen.image" :alt="currentScreen.alt" loading="lazy" />
            </div>

            <div class="screen-caption">
              <span>{{ String(activeIndex + 1).padStart(2, '0') }} / {{ String(appScreens.length).padStart(2, '0') }}</span>
              <strong>{{ currentScreen.title }}</strong>
              <p>{{ currentScreen.body }}</p>
            </div>
          </article>
        </Transition>

        <button class="carousel-button next" type="button" aria-label="Next screen" @click="nextScreen">
          <span aria-hidden="true"></span>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.showcase {
  overflow: hidden;
}

.showcase-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.86fr) minmax(320px, 1fr);
  gap: clamp(28px, 5vw, 68px);
  align-items: center;
}

.screen-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 28px;
}

.screen-tabs button {
  min-height: 38px;
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0 14px;
  background: rgba(255, 255, 255, 0.68);
  color: var(--muted);
  cursor: pointer;
  font-size: 13px;
  font-weight: 760;
  transition:
    color 180ms var(--ease),
    background 180ms var(--ease),
    border-color 180ms var(--ease),
    transform 180ms var(--ease);
}

.screen-tabs button:hover {
  color: var(--text);
  transform: translateY(-1px);
}

.screen-tabs button.active {
  border-color: rgba(30, 136, 229, 0.24);
  background: var(--brand);
  color: #fff;
}

.showcase-panel {
  position: relative;
  min-height: 540px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(15, 23, 42, 0.075);
  border-radius: 32px;
  padding: 30px 74px 30px;
  background:
    radial-gradient(circle at 50% 22%, rgba(30, 136, 229, 0.14), transparent 34%),
    linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(232, 243, 255, 0.5));
  box-shadow: var(--shadow-md);
  overflow: hidden;
}

.showcase-panel::before {
  content: "";
  position: absolute;
  inset: 30px;
  border-radius: 28px;
  border: 1px solid rgba(30, 136, 229, 0.1);
  pointer-events: none;
}

.screen-focus {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(150px, 255px) minmax(170px, 1fr);
  gap: 28px;
  align-items: center;
  width: 100%;
}

.screen-art {
  display: grid;
  place-items: center;
}

.screen-art img {
  width: min(238px, 100%);
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 24px 38px rgba(15, 23, 42, 0.16));
}

.screen-caption {
  max-width: 260px;
}

.screen-caption span {
  display: inline-flex;
  margin-bottom: 14px;
  border-radius: 999px;
  padding: 6px 10px;
  background: rgba(30, 136, 229, 0.1);
  color: var(--brand);
  font-size: 12px;
  font-weight: 820;
}

.screen-caption strong {
  display: block;
  color: var(--text);
  font-family: Inter, system-ui, sans-serif;
  font-size: clamp(28px, 3.2vw, 42px);
  font-weight: 720;
  letter-spacing: -0.035em;
  line-height: 1.04;
}

.screen-caption p {
  margin-top: 14px;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.7;
}

.carousel-button {
  position: absolute;
  top: 50%;
  z-index: 3;
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transform: translateY(-50%);
  transition:
    transform 180ms var(--ease),
    background 180ms var(--ease),
    border-color 180ms var(--ease);
}

.carousel-button:hover {
  border-color: rgba(30, 136, 229, 0.24);
  background: #fff;
  transform: translateY(-50%) scale(1.04);
}

.carousel-button span {
  width: 10px;
  height: 10px;
  border-top: 2px solid var(--text);
  border-left: 2px solid var(--text);
}

.carousel-button.prev {
  left: 20px;
}

.carousel-button.prev span {
  transform: translateX(2px) rotate(-45deg);
}

.carousel-button.next {
  right: 20px;
}

.carousel-button.next span {
  transform: translateX(-2px) rotate(135deg);
}

.screen-swap-enter-active,
.screen-swap-leave-active {
  transition:
    opacity 360ms var(--ease),
    transform 360ms var(--ease);
}

.screen-swap-enter-from {
  opacity: 0;
  transform: translateX(20px) scale(0.985);
}

.screen-swap-leave-to {
  opacity: 0;
  transform: translateX(-20px) scale(0.985);
}

@media (max-width: 980px) {
  .showcase-grid {
    grid-template-columns: 1fr;
  }

  .showcase-panel {
    min-height: 500px;
  }
}

@media (max-width: 700px) {
  .showcase {
    padding-top: 82px;
  }

  .showcase .section-head {
    margin-bottom: 26px;
  }

  .showcase-panel {
    min-height: auto;
    border-radius: 26px;
    padding: 16px;
  }

  .showcase-panel::before,
  .carousel-button {
    display: none;
  }

  .screen-focus {
    grid-template-columns: 108px minmax(0, 1fr);
    gap: 16px;
    align-items: center;
    text-align: left;
  }

  .screen-art {
    justify-content: start;
  }

  .screen-art img {
    width: 108px;
  }

  .screen-caption {
    max-width: none;
    display: block;
  }

  .screen-caption span {
    margin: 0 0 10px;
    padding: 5px 9px;
    font-size: 11px;
  }

  .screen-caption strong {
    font-size: 22px;
  }

  .screen-caption p {
    margin-top: 8px;
    font-size: 13px;
    line-height: 1.55;
  }

  .screen-tabs {
    overflow-x: auto;
    flex-wrap: nowrap;
    margin-top: 22px;
    padding-bottom: 4px;
  }

  .screen-tabs button {
    flex: 0 0 auto;
    min-height: 34px;
    padding: 0 12px;
    font-size: 12px;
  }
}

@media (max-width: 420px) {
  .screen-focus {
    grid-template-columns: 96px minmax(0, 1fr);
    gap: 14px;
  }

  .screen-art img {
    width: 96px;
  }

  .screen-caption strong {
    font-size: 20px;
  }
}
</style>
