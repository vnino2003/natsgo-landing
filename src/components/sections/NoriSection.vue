<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { noriConversation } from '../../data/landingContent'

const section = ref(null)
const chatBody = ref(null)
const messages = ref([])
const typing = ref(false)
const started = ref(false)
let timer = null
let index = 0

function scrollToBottom() {
  nextTick(() => {
    if (!chatBody.value) return
    chatBody.value.scrollTo({ top: chatBody.value.scrollHeight, behavior: 'smooth' })
  })
}

function playNext() {
  if (index >= noriConversation.length) {
    timer = setTimeout(() => {
      messages.value = []
      index = 0
      timer = setTimeout(playNext, 1400)
    }, 4500)
    return
  }

  const msg = noriConversation[index]

  if (msg.from === 'nori') {
    typing.value = true
    scrollToBottom()
    timer = setTimeout(() => {
      typing.value = false
      messages.value = [...messages.value, msg]
      index++
      scrollToBottom()
      timer = setTimeout(playNext, 1800)
    }, Math.min(900 + msg.text.length * 10, 2200))
  } else {
    messages.value = [...messages.value, msg]
    index++
    scrollToBottom()
    timer = setTimeout(playNext, 1100)
  }
}

onMounted(() => {
  const io = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !started.value) {
        started.value = true
        timer = setTimeout(playNext, 600)
        io.disconnect()
      }
    },
    { threshold: 0.2 }
  )
  if (section.value) io.observe(section.value)
})

onUnmounted(() => {
  if (timer) clearTimeout(timer)
})

const P = {
  avatar: 'M747 104C752 110 742 137 731 162L728 180C765 269 789 356 774 440C750 538 614 634 516 689Q504 697 492 689C387 614 257 505 235 425C211 337 251 271 291 232C393 112 528 78 674 94Q727 97 747 104Z',
  body: 'M747 104C752 110 742 137 731 162L728 180C765 269 789 356 774 440C751 589 704 745 630 839C618 855 604 865 609 876C628 894 635 919 605 923C578 930 555 921 550 907L542 890Q511 895 475 890C475 914 459 929 424 924C386 925 374 911 383 891L397 867C400 856 392 844 382 830C306 713 260 577 235 461C217 375 240 292 291 232C393 112 528 78 674 94Q727 97 747 104Z',
  face: 'M492 184C367 178 282 270 282 382C282 484 396 590 486 643Q505 660 524 644C637 554 700 473 700 379C700 264 607 179 492 184Z',
  armL: 'M282 566C246 579 218 626 188 650C173 658 158 662 161 678C161 694 180 709 195 710C232 713 270 658 297 625Z',
  armR: 'M726 567C765 579 788 621 815 648C830 663 850 671 848 689C847 709 826 716 810 708C772 690 746 655 718 625Z',
  armLEdge: 'M266 588C242 610 220 648 194 667',
  armREdge: 'M751 587C779 615 789 643 819 672',
  browL: 'M382 285Q402 270 422 285',
  browR: 'M582 285Q602 270 622 285',
  mouth: 'M476 461Q504 481 532 461',
}
</script>

<template>
  <section ref="section" class="section nori-section">
    <div class="wrap nori-grid">
      <div class="section-head reveal">
        <p class="section-kicker">AI Assistant</p>
        <h2 class="section-title">Meet Nori.</h2>
        <p class="section-sub">
          A built-in ride assistant inside NatsGo that helps commuters check buses,
          arrivals, fares, and route details without leaving the app.
        </p>
      </div>

      <div class="chat-demo reveal" style="transition-delay: .12s">
        <!-- Chat header with animated Nori avatar -->
        <div class="chat-head">
          <svg class="nori-av nori-av--hd" viewBox="188 52 635 685" fill="none" aria-hidden="true">
            <path :d="P.avatar" fill="#1E88E5"/>
            <path :d="P.face" fill="#fff"/>
            <g class="nori-eyes"><ellipse cx="404" cy="357" rx="23" ry="34" fill="#1F2937"/><ellipse cx="601" cy="357" rx="23" ry="34" fill="#1F2937"/><ellipse cx="410" cy="345" rx="6.5" ry="8" fill="#fff"/><ellipse cx="607" cy="345" rx="6.5" ry="8" fill="#fff"/></g>
            <path :d="P.browL" stroke="#1F2937" stroke-width="9" stroke-linecap="round"/><path :d="P.browR" stroke="#1F2937" stroke-width="9" stroke-linecap="round"/>
            <ellipse cx="358" cy="423" rx="30" ry="14" fill="#1E88E5" opacity="0.1"/><ellipse cx="647" cy="423" rx="30" ry="14" fill="#1E88E5" opacity="0.1"/>
            <path :d="P.mouth" stroke="#1F2937" stroke-width="8" stroke-linecap="round" fill="none"/>
          </svg>
          <div>
            <strong>Nori</strong>
            <span>Ride assistant</span>
          </div>
        </div>

        <div ref="chatBody" class="chat-body">
          <!-- Welcome state with full Nori mascot -->
          <div v-if="messages.length === 0 && !typing" class="chat-welcome">
            <svg class="nori-welcome" viewBox="100 65 800 890" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id="nla-l" x1="190" y1="566" x2="282" y2="724" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#37a6fa"/><stop offset=".45" stop-color="#1E88E5"/><stop offset="1" stop-color="#0863bd"/>
                </linearGradient>
                <linearGradient id="nla-r" x1="727" y1="580" x2="839" y2="736" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#1E88E5"/><stop offset=".5" stop-color="#1684e3"/><stop offset="1" stop-color="#075ba9"/>
                </linearGradient>
                <radialGradient id="nla-sh">
                  <stop stop-color="#1F2937" stop-opacity=".14"/><stop offset="1" stop-color="#1F2937" stop-opacity="0"/>
                </radialGradient>
              </defs>
              <ellipse cx="504" cy="938" rx="164" ry="16" fill="url(#nla-sh)"/>
              <g class="nori-body-group">
                <g class="nori-arm nori-arm--left">
                  <path :d="P.armL" fill="url(#nla-l)"/>
                  <path :d="P.armLEdge" stroke="#71c6ff" stroke-opacity=".4" stroke-width="5" stroke-linecap="round"/>
                </g>
                <g class="nori-arm nori-arm--right">
                  <path :d="P.armR" fill="url(#nla-r)"/>
                  <path :d="P.armREdge" stroke="#71c6ff" stroke-opacity=".22" stroke-width="5" stroke-linecap="round"/>
                </g>
                <path :d="P.body" fill="#1E88E5"/>
                <path :d="P.face" fill="#fff"/>
                <g class="nori-face-full">
                  <ellipse cx="358" cy="423" rx="30" ry="14" fill="#1E88E5" opacity="0.11"/>
                  <ellipse cx="647" cy="423" rx="30" ry="14" fill="#1E88E5" opacity="0.11"/>
                  <path :d="P.browL" stroke="#1F2937" stroke-width="9" stroke-linecap="round"/>
                  <path :d="P.browR" stroke="#1F2937" stroke-width="9" stroke-linecap="round"/>
                  <g class="nori-eyes">
                    <ellipse cx="404" cy="357" rx="23" ry="34" fill="#1F2937"/>
                    <ellipse cx="601" cy="357" rx="23" ry="34" fill="#1F2937"/>
                    <ellipse cx="410" cy="345" rx="6.5" ry="8" fill="#fff"/>
                    <ellipse cx="607" cy="345" rx="6.5" ry="8" fill="#fff"/>
                    <circle cx="397" cy="374" r="3" fill="#fff" opacity=".2"/>
                    <circle cx="594" cy="374" r="3" fill="#fff" opacity=".2"/>
                  </g>
                  <path :d="P.mouth" stroke="#1F2937" stroke-width="8" stroke-linecap="round" fill="none"/>
                </g>
              </g>
            </svg>
            <p>Ask me about buses, arrivals, fares, or terminals.</p>
          </div>

          <!-- Conversation bubbles -->
          <TransitionGroup name="bubble">
            <div
              v-for="(msg, i) in messages"
              :key="'m' + i"
              class="bubble"
              :class="[msg.from]"
            >
              <svg v-if="msg.from === 'nori'" class="nori-av nori-av--sm" viewBox="188 52 635 685" fill="none" aria-hidden="true">
                <path :d="P.avatar" fill="#1E88E5"/>
                <path :d="P.face" fill="#fff"/>
                <g class="nori-eyes"><ellipse cx="404" cy="357" rx="23" ry="34" fill="#1F2937"/><ellipse cx="601" cy="357" rx="23" ry="34" fill="#1F2937"/><ellipse cx="410" cy="345" rx="6.5" ry="8" fill="#fff"/><ellipse cx="607" cy="345" rx="6.5" ry="8" fill="#fff"/></g>
                <path :d="P.browL" stroke="#1F2937" stroke-width="9" stroke-linecap="round"/><path :d="P.browR" stroke="#1F2937" stroke-width="9" stroke-linecap="round"/>
                <path :d="P.mouth" stroke="#1F2937" stroke-width="8" stroke-linecap="round" fill="none"/>
              </svg>
              <p>{{ msg.text }}</p>
            </div>
          </TransitionGroup>

          <!-- Typing indicator -->
          <div v-if="typing" class="bubble nori typing-row">
            <svg class="nori-av nori-av--sm" viewBox="188 52 635 685" fill="none" aria-hidden="true">
              <path :d="P.avatar" fill="#1E88E5"/>
              <path :d="P.face" fill="#fff"/>
              <g class="nori-eyes"><ellipse cx="404" cy="357" rx="23" ry="34" fill="#1F2937"/><ellipse cx="601" cy="357" rx="23" ry="34" fill="#1F2937"/><ellipse cx="410" cy="345" rx="6.5" ry="8" fill="#fff"/><ellipse cx="607" cy="345" rx="6.5" ry="8" fill="#fff"/></g>
              <path :d="P.browL" stroke="#1F2937" stroke-width="9" stroke-linecap="round"/><path :d="P.browR" stroke="#1F2937" stroke-width="9" stroke-linecap="round"/>
              <path :d="P.mouth" stroke="#1F2937" stroke-width="8" stroke-linecap="round" fill="none"/>
            </svg>
            <div class="dots"><span></span><span></span><span></span></div>
          </div>
        </div>

        <div class="chat-foot">
          <span>Ask about your ride…</span>
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M4 10h12M12 6l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.nori-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(28px, 5vw, 68px);
  align-items: center;
}

/* ── Chat panel ── */

.chat-demo {
  border: 1px solid var(--line);
  border-radius: 28px;
  background: var(--surface);
  box-shadow: var(--shadow-md);
  overflow: hidden;
}

.chat-head {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  border-bottom: 1px solid var(--line);
  background: var(--surface-blue);
}

.chat-head strong {
  display: block;
  font-size: 14px;
  font-weight: 750;
  color: var(--text);
}

.chat-head span {
  font-size: 12px;
  color: var(--brand);
  font-weight: 650;
}

.chat-body {
  min-height: 340px;
  max-height: 400px;
  padding: 20px 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  scroll-behavior: smooth;
}

/* ── Welcome state ── */

.chat-welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  min-height: 280px;
}

.nori-welcome {
  width: 130px;
  height: auto;
}

.chat-welcome p {
  color: var(--faint);
  font-size: 14px;
  text-align: center;
}

/* ── Nori avatar (compact head) ── */

.nori-av {
  flex-shrink: 0;
}

.nori-av--hd {
  width: 44px;
  height: 44px;
}

.nori-av--sm {
  width: 28px;
  height: 28px;
  align-self: flex-end;
}

/* ── Nori animations ── */

.nori-eyes {
  transform-origin: 504px 357px;
  animation: nori-blink 4.2s ease-in-out infinite;
}

.nori-body-group {
  transform-origin: 504px 900px;
  animation: nori-breathe 5.8s ease-in-out infinite;
}

.nori-arm--left {
  transform-origin: 276px 591px;
  animation: nori-arm-l 6.4s ease-in-out infinite;
}

.nori-arm--right {
  transform-origin: 732px 591px;
  animation: nori-arm-r 5.6s ease-in-out infinite;
}

@keyframes nori-blink {
  0%, 92%, 100% { transform: scaleY(1); }
  95%, 97% { transform: scaleY(0.07); }
}

@keyframes nori-breathe {
  0%, 100% { transform: translateY(0) scaleY(1); }
  50% { transform: translateY(-3px) scaleY(1.004); }
}

@keyframes nori-arm-l {
  0%, 100% { transform: rotate(5deg); }
  50% { transform: rotate(-3deg); }
}

@keyframes nori-arm-r {
  0%, 100% { transform: rotate(-4deg); }
  50% { transform: rotate(3deg); }
}

/* ── Bubbles ── */

.bubble {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  max-width: 88%;
}

.bubble p {
  padding: 10px 14px;
  border-radius: 18px;
  font-size: 14px;
  line-height: 1.55;
}

.bubble.nori {
  align-self: flex-start;
}

.bubble.nori p {
  background: var(--surface-soft);
  color: var(--text);
  border-bottom-left-radius: 6px;
}

.bubble.user {
  align-self: flex-end;
  flex-direction: row-reverse;
}

.bubble.user p {
  background: var(--brand);
  color: #fff;
  border-bottom-right-radius: 6px;
}

/* ── Typing dots ── */

.typing-row .dots {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 12px 16px;
  background: var(--surface-soft);
  border-radius: 18px;
  border-bottom-left-radius: 6px;
}

.typing-row .dots span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--faint);
  animation: dot-bounce 1.2s ease-in-out infinite;
}

.typing-row .dots span:nth-child(2) { animation-delay: 0.15s; }
.typing-row .dots span:nth-child(3) { animation-delay: 0.3s; }

@keyframes dot-bounce {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
  30% { transform: translateY(-4px); opacity: 1; }
}

/* ── Footer ── */

.chat-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 18px;
  border-top: 1px solid var(--line);
}

.chat-foot span {
  color: var(--faint);
  font-size: 14px;
}

.chat-foot svg {
  width: 20px;
  height: 20px;
  color: var(--faint);
}

/* ── Transitions ── */

.bubble-enter-active {
  transition: opacity 320ms var(--ease), transform 320ms var(--ease);
}

.bubble-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

/* ── Responsive ── */

@media (max-width: 780px) {
  .nori-grid {
    grid-template-columns: 1fr;
  }

  .chat-demo {
    border-radius: 22px;
  }

  .chat-body {
    min-height: 300px;
    max-height: 360px;
    padding: 16px 14px;
    gap: 10px;
  }

  .chat-welcome {
    min-height: 240px;
  }

  .nori-welcome {
    width: 100px;
  }

  .bubble p {
    font-size: 13px;
    padding: 9px 12px;
  }

  .nori-av--hd {
    width: 38px;
    height: 38px;
  }

  .nori-av--sm {
    width: 24px;
    height: 24px;
  }
}

/* ── Reduced motion ── */

@media (prefers-reduced-motion: reduce) {
  .nori-eyes,
  .nori-body-group,
  .nori-arm--left,
  .nori-arm--right {
    animation: none !important;
  }
}
</style>
