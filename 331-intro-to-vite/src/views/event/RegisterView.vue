<script setup lang="ts">
import { toRefs } from 'vue'
import { type Event } from '@/types'

const props = defineProps<{
  event: Event
  id: string
}>()

const { event } = toRefs(props)
</script>

<template>
  <div>
    <h1>Register for: {{ event.title }}</h1>
    <p>Register event here</p>
  </div>
</template>
