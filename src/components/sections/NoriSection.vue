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
        <div class="chat-head">
          <svg class="nori-av nori-av--lg" viewBox="0 0 40 40" aria-hidden="true">
            <circle cx="20" cy="20" r="20" fill="#1E88E5"/>
            <ellipse cx="20" cy="21" rx="13" ry="13.5" fill="#fff"/>
            <ellipse cx="15.5" cy="18" rx="2.2" ry="2.4" fill="#1a2744"/>
            <ellipse cx="24.5" cy="18" rx="2.2" ry="2.4" fill="#1a2744"/>
            <circle cx="16.3" cy="17" r="0.9" fill="#fff"/>
            <circle cx="25.3" cy="17" r="0.9" fill="#fff"/>
            <path d="M16.5 24 Q20 27.5 23.5 24" fill="none" stroke="#1a2744" stroke-width="1.4" stroke-linecap="round"/>
          </svg>
          <div>
            <strong>Nori</strong>
            <span>Ride assistant</span>
          </div>
        </div>

        <div ref="chatBody" class="chat-body">
          <div v-if="messages.length === 0 && !typing" class="chat-welcome">
            <p>Ask me about buses, arrivals, fares, or terminals.</p>
          </div>

          <TransitionGroup name="bubble">
            <div
              v-for="(msg, i) in messages"
              :key="'m' + i"
              class="bubble"
              :class="[msg.from]"
            >
              <svg v-if="msg.from === 'nori'" class="nori-av nori-av--sm" viewBox="0 0 40 40" aria-hidden="true">
                <circle cx="20" cy="20" r="20" fill="#1E88E5"/>
                <ellipse cx="20" cy="21" rx="13" ry="13.5" fill="#fff"/>
                <ellipse cx="15.5" cy="18" rx="2.2" ry="2.4" fill="#1a2744"/>
                <ellipse cx="24.5" cy="18" rx="2.2" ry="2.4" fill="#1a2744"/>
                <circle cx="16.3" cy="17" r="0.9" fill="#fff"/>
                <circle cx="25.3" cy="17" r="0.9" fill="#fff"/>
                <path d="M16.5 24 Q20 27.5 23.5 24" fill="none" stroke="#1a2744" stroke-width="1.4" stroke-linecap="round"/>
              </svg>
              <p>{{ msg.text }}</p>
            </div>
          </TransitionGroup>

          <div v-if="typing" class="bubble nori typing-row">
            <svg class="nori-av nori-av--sm" viewBox="0 0 40 40" aria-hidden="true">
              <circle cx="20" cy="20" r="20" fill="#1E88E5"/>
              <ellipse cx="20" cy="21" rx="13" ry="13.5" fill="#fff"/>
              <ellipse cx="15.5" cy="18" rx="2.2" ry="2.4" fill="#1a2744"/>
              <ellipse cx="24.5" cy="18" rx="2.2" ry="2.4" fill="#1a2744"/>
              <circle cx="16.3" cy="17" r="0.9" fill="#fff"/>
              <circle cx="25.3" cy="17" r="0.9" fill="#fff"/>
              <path d="M16.5 24 Q20 27.5 23.5 24" fill="none" stroke="#1a2744" stroke-width="1.4" stroke-linecap="round"/>
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
  padding: 16px 20px;
  border-bottom: 1px solid var(--line);
  background: var(--surface-blue);
}

.nori-av--lg {
  width: 38px;
  height: 38px;
  flex-shrink: 0;
}

.nori-av--sm {
  width: 26px;
  height: 26px;
  flex-shrink: 0;
  align-self: flex-end;
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
  min-height: 320px;
  max-height: 380px;
  padding: 20px 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  scroll-behavior: smooth;
}

.chat-welcome {
  display: grid;
  place-items: center;
  min-height: 260px;
}

.chat-welcome p {
  color: var(--faint);
  font-size: 14px;
  text-align: center;
}

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
  animation: dotBounce 1.2s ease-in-out infinite;
}

.typing-row .dots span:nth-child(2) {
  animation-delay: 0.15s;
}

.typing-row .dots span:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes dotBounce {
  0%, 60%, 100% {
    transform: translateY(0);
    opacity: 0.4;
  }
  30% {
    transform: translateY(-4px);
    opacity: 1;
  }
}

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

.bubble-enter-active {
  transition: opacity 320ms var(--ease), transform 320ms var(--ease);
}

.bubble-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

@media (max-width: 780px) {
  .nori-grid {
    grid-template-columns: 1fr;
  }

  .chat-demo {
    border-radius: 22px;
  }

  .chat-body {
    min-height: 280px;
    max-height: 340px;
    padding: 16px 14px;
    gap: 10px;
  }

  .chat-welcome {
    min-height: 220px;
  }

  .bubble p {
    font-size: 13px;
    padding: 9px 12px;
  }

  .nori-av--sm {
    width: 22px;
    height: 22px;
  }
}
</style>
