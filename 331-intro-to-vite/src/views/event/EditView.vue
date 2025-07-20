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
    <h1>Edit: {{ event.title }}</h1>
    <p>Edit event here</p>
  </div>
</template>
