<script setup>
import Screen from './Screen.vue'
</script>
<template>
 <article class="poster how-it-works" aria-label="Your first trip with NatsGo">
  <header><div class="wordmark"><img src="/natsgo-mark.svg" alt="NatsGo logo"><span>Nats<em>Go</em></span></div><span class="release"><i></i> COMING OCTOBER 5</span></header>
  <section class="journey-copy"><p class="kicker">YOUR FIRST TRIP WITH NATSGO</p><h1>Check. Plan.<br>Head out.</h1><p class="description">A few taps before your next ride.</p><div class="journey-steps"><div><b>01</b><p><strong>Open Track</strong><span>Find nearby buses on the map.</span></p></div><div><b>02</b><p><strong>Choose your bus</strong><span>Check its route and latest update.</span></p></div><div><b>03</b><p><strong>Plan your trip</strong><span>Use Arrivals to look ahead.</span></p></div></div></section>
  <div class="journey-devices"><div class="journey-device"><span>FIND YOUR BUS</span><div class="phone"><Screen type="tracking"/></div></div><div class="journey-connector" aria-hidden="true">→</div><div class="journey-device"><span>LOOK AHEAD</span><div class="phone"><Screen type="arrivals"/></div></div></div>
  <footer><div class="availability"><span class="availability-date">COMING OCTOBER 5</span><b>Start on Web & Android</b></div><span class="footer-route">CALAPAN ↔ NAUJAN</span></footer>
 </article>
</template>
