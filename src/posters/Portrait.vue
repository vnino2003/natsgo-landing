<script setup>
import Screen from './Screen.vue'
import Nori from './Nori.vue'
import NearbyAlert from './NearbyAlert.vue'
</script>
<template>
 <article class="poster portrait" aria-label="Main NatsGo launch poster">
  <svg class="portrait-route" viewBox="0 0 1080 1350" aria-hidden="true"><path d="M1190 260C680 160 1040 920 380 1000S120 1250 -90 1180"/></svg>
  <header><div class="wordmark"><img src="/natsgo-mark.svg" alt="NatsGo logo"><span>Nats<em>Go</em></span></div><span class="portrait-category">COMING OCTOBER 5</span></header>
  <section class="portrait-title"><h1>Track your bus.<br><em>Plan your commute.</em></h1><p>NATSCO bus tracking for Calapan–Naujan.</p></section>
  <div class="portrait-glow" aria-hidden="true"></div>
  <section class="portrait-benefits" aria-label="Commuter benefits">
   <p class="kicker">PLAN YOUR TRIP WITH NATSGO</p>
   <div><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 11 15-7-7 15-2-6z"/></svg><h2>Find your bus.</h2><p>Live locations & ETA</p></div>
   <div><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/></svg><h2>Plan your time.</h2><p>Predicted arrivals</p></div>
   <div><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 10c0 5-6 10-6 10S6 15 6 10a6 6 0 1 1 12 0Z"/><circle cx="12" cy="10" r="2"/></svg><h2>Know your stop.</h2><p>Terminal information</p></div>
   <div><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h5l10-5v16L9 15H4zM8 15l2 6H6l-2-6"/></svg><h2>Fares & travel updates</h2><p>Promos, announcements<br>and advisories</p></div>
  </section>
  <div class="portrait-device"><div class="phone"><Screen type="tracking"/></div></div>
  <div class="portrait-eta"><span class="clock-icon">◷</span><div><small>LIVE BUS ETA</small><span class="eta-route">CALAPAN → NAUJAN</span><b>14 <em>min ETA</em></b><span>At capture · Seen 2 min ago</span></div></div>
  <div class="portrait-nori"><Nori/><p><b>Meet Nori.</b><br>Your in-app guide.</p></div>
  <div class="service-strip"><b>Calapan <i>↔</i> Naujan</b><small>Oriental Mindoro</small></div>
  <NearbyAlert class="portrait-nearby"/>
  <footer><div class="portrait-launch"><span class="launch-label">YOUR NEXT COMMUTE STARTS HERE</span><strong>Launching October 5</strong><span class="portrait-platforms">On Web & Android</span></div><div class="portrait-footer-route"><span>CALAPAN ↔ NAUJAN</span><small>Oriental Mindoro</small></div></footer>
 </article>
</template>
