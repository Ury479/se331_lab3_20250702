<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'
import Event from '@/types/Event'
import EventService from '@/services/EventService'

const event = ref<Event>(null)

// Dynamically receive ID from route
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

onMounted(() => {
  EventService.getEvent(props.id)
      .then((response) => {
        event.value = response.data
      })
      .catch((error) => {
        console.error('Failed to load event', error)
      })
})
</script>


<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
