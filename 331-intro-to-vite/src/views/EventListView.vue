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
const perPage = 4
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
    <h2>Events - Page {{ page }}</h2>

    <div class="events">
      <EventCard
          v-for="event in events"
          :key="event.id"
          :event="event"
      />
    </div>

    <div class="pagination" style="margin-top: 20px;">
      <RouterLink
          v-if="page !== 1"
          :to="{ name: 'event-list-view', query: { page: page - 1 } }"
          rel="prev"
      >
        ← Prev Page
      </RouterLink>

      <RouterLink
          :to="{ name: 'event-list-view', query: { page: page + 1 } }"
          rel="next"
      >
        Next Page →
      </RouterLink>
    </div>
  </section>
</template>


<style scoped>
h2 {
  margin-bottom: 1rem;
}
</style>
