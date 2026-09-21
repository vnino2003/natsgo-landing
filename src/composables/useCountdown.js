import { ref, onMounted, onUnmounted } from 'vue'

export function useCountdown(target) {
  const days = ref(0)
  const hours = ref(0)
  const minutes = ref(0)
  const seconds = ref(0)
  const launched = ref(false)
  let timer = null

  function update() {
    const diff = target.getTime() - Date.now()
    if (diff <= 0) {
      launched.value = true
      days.value = hours.value = minutes.value = seconds.value = 0
      if (timer) clearInterval(timer)
      return
    }
    days.value = Math.floor(diff / 86400000)
    hours.value = Math.floor((diff % 86400000) / 3600000)
    minutes.value = Math.floor((diff % 3600000) / 60000)
    seconds.value = Math.floor((diff % 60000) / 1000)
  }

  onMounted(() => {
    update()
    timer = setInterval(update, 1000)
  })

  onUnmounted(() => {
    if (timer) clearInterval(timer)
  })

  return { days, hours, minutes, seconds, launched }
}
