<script setup>
import { appLinks } from '../../data/landingContent'
</script>

<template>
  <section class="hero" aria-label="NatsGo introduction">
    <div class="hero-map" aria-hidden="true">
      <svg viewBox="0 0 1440 840" preserveAspectRatio="none">
        <path class="map-road map-road-a" d="M-80 650 C180 520 290 620 470 430 C680 210 800 330 1020 160 C1190 30 1320 80 1520 -40"></path>
        <path class="map-road map-road-b" d="M-60 260 C190 360 360 230 560 310 C800 405 900 640 1130 520 C1300 430 1380 520 1510 455"></path>
        <path class="map-road map-road-c" d="M100 900 C240 670 310 560 520 530 C820 485 850 260 1020 260 C1200 258 1290 210 1450 90"></path>
        <path class="route-line" d="M120 670 C285 570 360 608 488 456 C655 258 804 330 976 186 C1128 58 1260 86 1400 8"></path>
      </svg>
    </div>

    <div class="hero-inner wrap">
      <div class="hero-copy">
        <h1>
          Track Natsco buses
          <span>with <em>NatsGo.</em></span>
        </h1>
        <p>
          See live bus location, nearby arrivals, terminal hours, fares, promos, and route updates
          in one simple commuter app.
        </p>
        <div class="hero-actions">
          <a class="btn-primary" :href="appLinks.android">Download now</a>
          <a class="hero-text-link" :href="appLinks.web">Open web app</a>
        </div>
      </div>

      <div class="hero-stage" aria-label="NatsGo mobile app preview">
        <div class="orbit orbit-one"></div>
        <div class="orbit orbit-two"></div>

        <div class="product-shot">
          <img src="/screenshots/commuter-home-hero.png" alt="NatsGo commuter app home screen" />
        </div>
      </div>
    </div>

    <div class="hero-strip" aria-label="NatsGo highlights">
      <span>Live GPS</span>
      <span>Predicted arrivals</span>
      <span>Fare and promo updates</span>
      <span>Terminal visibility</span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  padding: 76px 0 24px;
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 72% 20%, rgba(0, 188, 212, 0.13), transparent 24%),
    radial-gradient(circle at 14% 18%, rgba(30, 136, 229, 0.12), transparent 28%);
  pointer-events: none;
}

.hero-map {
  position: absolute;
  inset: 0;
  opacity: 0.38;
  pointer-events: none;
}

.hero-map svg {
  width: 100%;
  height: 100%;
}

.map-road {
  fill: none;
  stroke: rgba(30, 136, 229, 0.075);
  stroke-width: 24;
  stroke-linecap: round;
}

.map-road-b {
  stroke: rgba(15, 23, 42, 0.04);
  stroke-width: 18;
}

.map-road-c {
  stroke-width: 14;
}

.route-line {
  fill: none;
  stroke: rgba(30, 136, 229, 0.2);
  stroke-width: 5;
  stroke-linecap: round;
  stroke-dasharray: 18 18;
  animation: routeFlow 7s linear infinite;
}

.hero-inner {
  position: relative;
  z-index: 1;
  min-height: calc(100svh - 136px);
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(265px, 0.7fr);
  align-items: center;
  gap: 34px;
}

.hero-copy {
  max-width: 650px;
}

.hero h1 {
  max-width: 600px;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: clamp(38px, 4.45vw, 60px);
  line-height: 1.05;
  letter-spacing: -0.039em;
  font-weight: 720;
}

.hero h1 span {
  display: block;
  margin-top: 8px;
  color: rgba(13, 23, 41, 0.56);
  font-size: 0.66em;
  font-weight: 620;
  letter-spacing: -0.033em;
}

.hero h1 em {
  color: var(--brand);
  font-style: normal;
  font-weight: 740;
}

.hero p {
  max-width: 520px;
  margin-top: 22px;
  color: var(--muted);
  font-size: clamp(16px, 1.65vw, 18px);
  line-height: 1.72;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 18px;
  margin-top: 30px;
}

.hero-text-link {
  color: var(--muted);
  font-size: 14px;
  font-weight: 780;
  transition: color 180ms var(--ease);
}

.hero-text-link:hover {
  color: var(--text);
}

.hero-stage {
  position: relative;
  min-height: 492px;
  display: grid;
  place-items: center;
  padding-top: 18px;
}

.orbit {
  position: absolute;
  border: 1px solid rgba(30, 136, 229, 0.13);
  border-radius: 999px;
  animation: orbitBreathe 6s var(--ease) infinite;
}

.orbit-one {
  width: 320px;
  height: 320px;
}

.orbit-two {
  width: 440px;
  height: 440px;
  animation-delay: -2s;
  opacity: 0.7;
}

.product-shot {
  position: relative;
  z-index: 3;
  width: min(252px, 40vw);
  transform: rotate(-1.2deg);
  filter:
    drop-shadow(0 28px 46px rgba(15, 23, 42, 0.14))
    drop-shadow(0 10px 18px rgba(30, 136, 229, 0.12));
  animation: productFloat 7s var(--ease) infinite;
}

.product-shot img {
  display: block;
  width: 100%;
  height: auto;
}

.hero-strip {
  position: relative;
  z-index: 2;
  width: min(920px, calc(100% - 120px));
  margin: -4px auto 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.66);
  box-shadow: 0 12px 34px rgba(15, 23, 42, 0.07);
  backdrop-filter: blur(14px);
}

.hero-strip span {
  padding: 12px 14px;
  color: var(--muted);
  font-size: 13px;
  font-weight: 760;
  text-align: center;
  border-right: 1px solid var(--line);
}

.hero-strip span:last-child {
  border-right: 0;
}

@keyframes routeFlow {
  to {
    stroke-dashoffset: -72;
  }
}

@keyframes orbitBreathe {
  0%, 100% {
    transform: scale(1);
    opacity: 0.65;
  }
  50% {
    transform: scale(1.04);
    opacity: 1;
  }
}

@keyframes productFloat {
  0%, 100% {
    transform: translateY(-10px) rotate(-1.2deg);
  }
  50% {
    transform: translateY(-22px) rotate(0.8deg);
  }
}

@media (max-width: 960px) {
  .hero {
    min-height: auto;
    padding-bottom: 34px;
  }

  .hero-inner {
    grid-template-columns: 1fr;
    gap: 12px;
    min-height: auto;
    padding-top: 50px;
  }

  .hero-copy {
    max-width: 620px;
  }

  .hero-stage {
    min-height: 360px;
    padding-top: 0;
  }

  .product-shot {
    width: min(210px, 58vw);
  }
}

@media (max-width: 680px) {
  .hero {
    min-height: auto;
    padding-top: 82px;
    padding-bottom: 54px;
  }

  .hero-inner {
    min-height: auto;
    display: grid;
    grid-template-columns: minmax(0, 1fr) 118px;
    gap: 12px;
    align-items: start;
    padding-top: clamp(32px, 9vh, 58px);
  }

  .hero-copy {
    position: relative;
    z-index: 5;
    max-width: 228px;
  }

  .hero h1 {
    max-width: 230px;
    font-size: clamp(30px, 8.6vw, 38px);
    letter-spacing: -0.034em;
  }

  .hero h1 span {
    margin-top: 4px;
    font-size: 0.7em;
  }

  .hero p {
    max-width: 218px;
    margin-top: 16px;
    font-size: 13px;
    line-height: 1.65;
  }

  .hero-actions {
    gap: 12px;
    margin-top: 20px;
  }

  .hero-stage {
    position: relative;
    right: auto;
    bottom: auto;
    z-index: 2;
    width: 132px;
    min-height: 0;
    margin-top: 24px;
    padding-top: 0;
    opacity: 1;
    pointer-events: none;
  }

  .product-shot {
    width: 100%;
    transform: rotate(-0.8deg);
    filter:
      drop-shadow(0 24px 34px rgba(15, 23, 42, 0.12))
      drop-shadow(0 10px 18px rgba(30, 136, 229, 0.1));
  }

  .orbit-one {
    width: 190px;
    height: 190px;
  }

  .orbit-two {
    width: 248px;
    height: 248px;
  }

  .hero-strip {
    display: none;
  }
}

@media (max-width: 420px) {
  .hero-inner {
    grid-template-columns: minmax(0, 1fr) 104px;
    gap: 8px;
    padding-top: clamp(22px, 5vh, 34px);
  }

  .hero h1 {
    max-width: 220px;
  }

  .hero p {
    max-width: 212px;
  }

  .hero-stage {
    width: 116px;
    margin-top: 26px;
  }
}
</style>
