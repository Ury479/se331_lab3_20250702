<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService'

const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})

const events = ref<any[]>([])
const perPage = 2
const currentPage = computed(() => props.page)

onMounted(() => {
  fetchEvents()
})

function fetchEvents() {
  EventService.getEvents(perPage, currentPage.value)
      .then((response) => {
        events.value = response.data
      })
      .catch((error) => {
        console.error('Failed to fetch events:', error)
      })
}
</script>

<template>
  <section>
    <h2>Events - Page {{ currentPage }}</h2>

    <div v-if="events.length === 0">
      <p>No events found for this page.</p>
    </div>

    <div v-else>
      <EventCard
          v-for="event in events"
          :key="event.id"
          :event="event"
      />
    </div>

    <div style="margin-top: 20px; display: flex; gap: 10px;">
      <router-link
          :to="{ name: 'event-list-view', query: { page: currentPage - 1 } }"
          v-if="currentPage > 1"
      >
        ← Prev
      </router-link>

      <router-link
          :to="{ name: 'event-list-view', query: { page: currentPage + 1 } }"
      >
        Next →
      </router-link>
    </div>
  </section>
</template>

<style scoped>
h2 {
  margin-bottom: 1rem;
}
</style>
