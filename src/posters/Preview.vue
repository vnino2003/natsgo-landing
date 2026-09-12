<script setup>
defineProps({ type: { default: 'tracking', type: String } })
</script>
<template>
 <div class="interface" :class="type">
  <div class="ui-header"><img src="/natsgo-mark.svg" alt=""><b>NatsGo</b><span>●</span></div>
  <template v-if="type === 'tracking'">
   <div class="map-preview">
    <svg viewBox="0 0 500 570" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
     <rect width="500" height="570" fill="#eef2ee"/><path d="M0 0H500V115Q330 75 290 130T0 60Z" fill="#b3e6f7"/>
     <g stroke="white" stroke-width="16" fill="none"><path d="M-40 150L550 450M-20 360L510 180M60 580L250 80M300 600L430 50M-50 480L550 380"/></g>
     <g stroke="#d4dfdf" stroke-width="2" fill="none"><path d="M-40 150L550 450M-20 360L510 180M60 580L250 80M300 600L430 50M-50 480L550 380"/></g>
     <path d="M150 490L207 310L327 264L373 128" stroke="white" stroke-width="16" fill="none"/><path d="M150 490L207 310L327 264L373 128" stroke="#1e88e5" stroke-width="7" stroke-linecap="round" fill="none"/>
     <circle cx="150" cy="490" r="13" fill="#16b978" stroke="white" stroke-width="5"/><circle cx="327" cy="264" r="26" fill="#1e88e5" stroke="white" stroke-width="5"/>
     <g fill="white"><rect x="317" y="250" width="20" height="24" rx="4"/><circle cx="320" cy="277" r="3"/><circle cx="334" cy="277" r="3"/></g><rect x="320" y="254" width="14" height="9" rx="1" fill="#1e88e5"/>
    </svg><span class="map-label">CALAPAN</span><span class="map-demo">Illustrative map</span>
   </div>
   <div class="ui-sheet"><div class="handle"></div><small>LIVE TRACKING</small><h3>Your bus, on the map.</h3><div class="ui-stats"><div><b>08 <em>min</em></b><span>Estimated arrival</span></div><div><b>2.4 <em>km</em></b><span>Distance away</span></div></div><p class="sample-label">Sample route & arrival data</p></div>
  </template>
  <template v-else-if="type === 'arrivals'">
   <div class="arrivals-preview"><small>PLAN YOUR NEXT RIDE</small><h3>Arrivals</h3><p>Predictions near your location</p><div class="prediction-location">⌖ &nbsp; Your selected area</div><div class="arrival-preview-card"><small>PREDICTED PASSING TIME</small><h4>08:15 <em>AM</em></h4><b>NatsCo bus · Sample route</b><p>Based on recorded trip patterns</p><span>Machine learning prediction</span></div><div class="arrival-preview-card later"><small>NEXT PREDICTION</small><h4>08:40 <em>AM</em></h4><b>NatsCo bus · Sample route</b></div><p class="sample-label">Illustrative data · Estimates may vary</p></div>
  </template>
  <template v-else>
   <div class="home-preview"><p>YOUR EVERYDAY COMMUTE</p><h3>Where are<br>you headed?</h3><div class="search-preview">⌕ &nbsp; Find a bus or route</div><div class="preview-tiles"><div>↗<b>Live tracking</b></div><div>◷<b>Arrivals</b></div><div>⌖<b>Terminals</b></div><div>☷<b>Fares & updates</b></div></div><div class="home-note"><small>ONE PLACE TO PLAN</small><h4>A little more clarity.<br>Before every ride.</h4></div></div>
  </template>
  <div class="ui-nav"><span :class="{ selected: type === 'home' }">⌂<small>Home</small></span><span :class="{ selected: type === 'arrivals' }">◷<small>Arrivals</small></span><span :class="{ selected: type === 'tracking' }">↗<small>Track</small></span><span>⌖<small>Terminal</small></span></div>
 </div>
</template>
