<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <nav>
      <router-link :to="{ name: 'event-detail-view', params: { id } }">Details</router-link> |
      <router-link :to="{ name: 'event-register-view', params: { id } }">Register</router-link> |
      <router-link :to="{ name: 'event-edit-view', params: { id } }">Edit</router-link>
    </nav>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <router-view /> <!-- 嵌套子路由出口 -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import EventService from '@/services/EventService'
import { type Event } from '@/types'

const route = useRoute()
const id = route.params.id as string
const event = ref<Event | null>(null)

onMounted(() => {
  EventService.getEvent(parseInt(id))
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      console.error('Error loading event:', error)
    })
})
</script>
