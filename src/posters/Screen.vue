<script setup>
import { computed } from 'vue'
const props = defineProps({ type: { default: 'tracking', type: String } })
const screens = { home: ['home.jpg', 'Home and nearby buses'], tracking: ['tracking.jpg', 'Map and nearby buses'], details: ['bus-details.jpg', 'BUS-01: Calapan to Naujan; captured bus details and estimated arrival'], arrivals: ['arrivals.jpg', 'Predicted arrivals'], terminals: ['terminals.jpg', 'Naujan and Calapan terminals'] }
const screen = computed(() => screens[props.type] || screens.tracking)
</script>
<template><img class="actual-screen" :src="`/screenshots/campaign/${screen[0]}`" :alt="screen[1]" decoding="sync"></template>
