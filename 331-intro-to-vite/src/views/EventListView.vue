<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import { type Event } from '@/types'
import { ref, onMounted, computed } from 'vue'
import EventService from '@/services/EventService'

const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})

const page = computed(() => props.page)
const events = ref<Event[]>([])
const perPage = 2

onMounted(() => {
  EventService.getEvents(perPage, page.value).then((response) => {
    events.value = response.data
  })
})
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
