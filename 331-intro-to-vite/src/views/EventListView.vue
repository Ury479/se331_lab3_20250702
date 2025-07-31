<script setup lang="ts">
import { type Event } from '@/types'
import { ref, computed, watchEffect } from 'vue'
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService'

const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})

const perPage = 3
const page = computed(() => props.page)
const events = ref<Event[] | null>(null)
const totalEvents = ref(0)

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / perPage)
  return page.value < totalPages
})

watchEffect(() => {
  EventService.getEvents(perPage, page.value)
      .then((response) => {
        events.value = response.data
        const total = response.headers['x-total-count']
        totalEvents.value = total ? parseInt(total) : 0
      })
      .catch((error) => {
        console.error('There was an error!', error)
      })
})
</script>

<template>
  <section>
    <h2>Events - Page {{ page }}</h2>

    <div class="flex flex-col items-center">
      <EventCard
          v-for="event in events"
          :key="event.id"
          :event="event"
      />
    </div>

    <div class="flex w-72 justify-between mt-4">
      <RouterLink
          id="page-prev"
          :to="{ name: 'event-list', query: { page: page - 1 } }"
          rel="prev"
          v-if="page !== 1"
      >
        ← Prev Page
      </RouterLink>

      <RouterLink
          id="page-next"
          :to="{ name: 'event-list', query: { page: page + 1 } }"
          rel="next"
          v-if="hasNextPage"
      >
        Next Page →
      </RouterLink>
    </div>

  </section>
</template>

