<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import Nori from './Nori.vue'
import Preview from './Screen.vue'
import Portrait from './Portrait.vue'
import HowItWorks from './HowItWorks.vue'
import NearbyAlert from './NearbyAlert.vue'
const posters = [
 { id: 'launch', label: '01 / The introduction', kicker: 'YOUR COMMUTE, CONNECTED.', title: 'Track NATSCO buses\nwith NatsGo.', body: 'Check bus locations and estimated arrival times, plan ahead with predicted arrivals, and get nearby-bus alerts on Android.' },
 { id: 'tracking', label: '02 / Live tracking', kicker: 'LIVE BUS TRACKING', title: 'Track your bus.\nBefore you leave.', body: 'View NATSCO buses on the map, check their latest location updates, and see estimated arrival times for your route.' },
 { id: 'nori', label: '03 / Meet Nori', kicker: 'YOUR NATSGO ASSISTANT', title: 'Meet Nori.\nYour in-app guide.', body: 'Ask Nori about routes, fares, and arrivals. Get guidance on where to find the information you need for your trip.' },
 { id: 'access', label: '04 / Web + Android', kicker: 'AVAILABLE ON WEB & ANDROID', title: 'Your commute.\nOne app.', body: 'Access bus tracking and travel information in your mobile browser, or install the NatsGo Android app.' },
 { id: 'arrivals', label: '05 / Predicted arrivals', kicker: 'PREDICTED ARRIVALS', title: 'Know when to\nexpect your bus.', body: 'Plan ahead with predicted passing times. NatsGo uses machine learning and recorded trip patterns to estimate when buses may arrive.' },
]
posters.push({ id: 'terminals', label: '06 / Terminals', kicker: 'TERMINAL INFORMATION', title: 'Find your terminal.\nPlan your departure.', body: 'Check NATSCO terminal locations, operating hours, and bus information before you travel.' })
posters.push({ id: 'portrait', label: '07 / Main poster', width: 1080, height: 1350 })
posters.push({ id: 'how-it-works', label: '08 / Your first trip' })
const current = ref(location.hash.slice(1) || 'launch')
const poster = computed(() => posters.find(p => p.id === current.value) || posters[0])
const canvas = computed(() => ({ width: poster.value.width || 1920, height: poster.value.height || 1080 }))
const clean = new URLSearchParams(location.search).has('clean')
const scale = ref(1)
const chatScreenshot = ref(sessionStorage.getItem('natsgo-poster-chat') || '/screenshots/campaign/nori.jpg')
const uploadError = ref('')
async function loadChat(event) {
 const file = event.target.files?.[0]
 if (!file) return
 uploadError.value = ''
 if (!['image/png', 'image/jpeg', 'image/webp'].includes(file.type)) { uploadError.value = 'Choose a PNG, JPEG, or WebP screenshot.'; return }
 const reader = new FileReader()
 reader.onload = () => {
  chatScreenshot.value = String(reader.result)
  try { sessionStorage.setItem('natsgo-poster-chat', chatScreenshot.value) }
  catch { uploadError.value = 'Screenshot loaded for this view. Use this tab for capture; image is too large to retain in a new tab.' }
 }
 reader.onerror = () => { uploadError.value = 'Could not read this screenshot. Please try again.' }
 reader.readAsDataURL(file)
}
function resize() { scale.value = Math.max(.05, Math.min(innerWidth / canvas.value.width, (innerHeight - (clean ? 0 : 92)) / canvas.value.height)) }
function navigate() { current.value = location.hash.slice(1) || 'launch'; document.title = `NatsGo — ${poster.value.label}`; resize() }
onMounted(() => { resize(); navigate(); addEventListener('resize', resize); addEventListener('hashchange', navigate) })
onUnmounted(() => { removeEventListener('resize', resize); removeEventListener('hashchange', navigate) })
</script>
<template>
 <nav v-if="!clean" class="studio" aria-label="Poster pages"><a v-for="p in posters" :key="p.id" :href="`#${p.id}`" :aria-current="poster.id === p.id ? 'page' : undefined">{{ p.label }}</a><a :href="`?clean#${poster.id}`" target="_blank">Open clean page ↗</a><span>{{ canvas.width }} × {{ canvas.height }}</span></nav>
 <div v-if="!clean && poster.id === 'nori'" class="screenshot-tools"><label>Use your real chat screenshot <input type="file" accept="image/png,image/jpeg,image/webp" @change="loadChat"></label><span v-if="uploadError" role="status">{{ uploadError }}</span></div>
 <main class="viewport" :style="{ width: `${canvas.width * scale}px`, height: `${canvas.height * scale}px` }">
  <Portrait v-if="poster.id === 'portrait'" :style="{ transform: `scale(${scale})` }"/>
  <HowItWorks v-else-if="poster.id === 'how-it-works'" :style="{ transform: `scale(${scale})` }"/>
  <article v-else class="poster" :class="poster.id" :style="{ transform: `scale(${scale})` }" :aria-label="poster.label">
   <svg class="route-art" viewBox="0 0 1920 1080" aria-hidden="true"><path d="M800 1150C780 600 1470 900 1370 460S1670 -80 2070 180"/><circle cx="1370" cy="460" r="13"/><circle cx="1040" cy="812" r="10"/></svg>
   <header><div class="wordmark"><img src="/natsgo-mark.svg" alt="NatsGo logo"><span>Nats<em>Go</em></span></div><span class="release"><i></i> COMING OCTOBER 5</span></header>
   <section class="copy"><p class="kicker">{{ poster.kicker }}</p><h1 v-if="poster.id === 'launch'">Track NATSCO buses<br>with <em>NatsGo</em>.</h1><h1 v-else>{{ poster.title }}</h1><p class="description">{{ poster.body }}</p>
    <div v-if="poster.id === 'launch'" class="benefits"><span>Live locations & ETA</span><span>Nearby alerts on Android</span><span>Predicted arrivals</span><span>Terminal details</span><span>Fares & promos</span><span>Announcements</span><span>Travel advisories</span></div>
    <div v-if="poster.id === 'tracking'" class="steps"><p><b>01</b> Find your bus</p><p><b>02</b> Check its progress</p><p><b>03</b> Plan your commute</p></div>
    <div v-if="poster.id === 'nori'" class="benefits"><span>Buses & arrivals</span><span>Fares & terminals</span></div>
    <div v-if="poster.id === 'access'" class="access-labels"><div><b>Mobile web</b><span>Right in your browser</span></div><div><b>Android app</b><span>Right on your home screen</span></div></div>
    <div v-if="poster.id === 'arrivals'" class="prediction-explainer"><span>Recorded trips</span><i>→</i><span>Learned patterns</span><i>→</i><span>Predicted arrivals</span></div>
   </section>
   <section class="visual" aria-label="Product presentation">
    <template v-if="poster.id === 'launch'"><div class="phone secondary"><Preview type="home"/></div><div class="phone primary"><Preview/></div><div class="launch-nori"><Nori/></div></template>
    <template v-if="poster.id === 'tracking'"><div class="tracking-orbit"></div><div class="phone track-phone"><Preview type="details"/></div><div class="eta-callout"><span class="clock-icon">◷</span><div><small>LIVE BUS ETA</small><span class="eta-route">CALAPAN → NAUJAN</span><b>14 <em>min ETA</em></b><span>At capture · Seen 2 min ago</span></div></div><NearbyAlert class="tracking-alert"/></template>
    <template v-if="poster.id === 'nori'"><div class="nori-halo"></div><Nori class="hero-nori"/><div class="phone chat-phone"><img v-if="chatScreenshot" class="real-chat" :src="chatScreenshot" alt="Actual Nori assistant screen"><div v-else class="chat-screenshot-slot"><span class="capture-symbol">▧</span><b>Your conversation<br>with Nori.</b><p>Real chat screenshot goes here</p><small>Show a question and Nori’s reply<br>inside the actual app.</small></div></div></template>
    <template v-if="poster.id === 'access'"><div class="mobile-platform platform-web"><div class="device-label"><span>◎</span> Mobile web</div><div class="phone"><Preview type="home"/></div></div><div class="mobile-platform platform-android"><div class="device-label"><span>↗</span> Android app</div><div class="phone"><Preview type="home"/></div></div><div class="access-nori"><Nori/></div></template>
    <NearbyAlert v-if="poster.id === 'access'" class="access-alert"/>
    <template v-if="poster.id === 'arrivals'"><div class="arrival-disc"></div><div class="phone arrivals-phone"><Preview type="arrivals"/></div><div class="ml-callout"><span class="ml-symbol">✧</span><div><small>POWERED BY</small><b>Machine learning</b><p>Arrival predictions based<br>on recorded trip patterns.</p></div></div></template>
    <template v-if="poster.id === 'terminals'"><div class="arrival-disc"></div><div class="phone terminal-phone"><Preview type="terminals"/></div><div class="terminal-features"><p><b>01</b> Find your terminal</p><p><b>02</b> Check operating hours</p><p><b>03</b> View bus information</p></div></template>
   </section>
   <footer><div class="availability"><span class="availability-date">COMING OCTOBER 5</span><b>Available on <span class="platform-chip"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/></svg> Web</span><span class="availability-plus">&</span><span class="platform-chip"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 15a7 7 0 0 1 14 0v3H5zM8 8 6 5m10 3 2-3"/><circle cx="9" cy="13" r=".7"/><circle cx="15" cy="13" r=".7"/></svg> Android</span></b></div><span class="footer-route">CALAPAN ↔ NAUJAN</span></footer>
  </article>
 </main>
</template>
