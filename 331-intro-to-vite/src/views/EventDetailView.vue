<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'
import { type Event } from '@/types'
import EventService from '@/services/EventService'

const event = ref<Event | null>(null)

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

onMounted(() => {
  EventService.getEvent(parseInt(props.id)).then((response) => {
    event.value = response.data
  })
})
</script>

<template>
  <div v-if="event">
    <h2>{{ event.title }}</h2>
    <p>{{ event.description }}</p>
    <p>Organizer: {{ event.organizer }}</p>
    <p>Date: {{ event.date }} | Time: {{ event.time }}</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>
