<template>
  <div v-if="passenger">
    <h1>{{ passenger.name }}</h1>
    <nav>
      <RouterLink :to="{ name: 'passenger-detail' }">Passenger Details</RouterLink> |
      <RouterLink :to="{ name: 'passenger-airlines' }">Airlines</RouterLink> |
      <RouterLink :to="{ name: 'passenger-edit' }">Edit</RouterLink>
    </nav>
    <RouterView :passenger="passenger" />
  </div>
</template>

<script setup lang="ts">
import { usePassengerStore } from '@/stores/passenger'
import { storeToRefs } from 'pinia'

const store = usePassengerStore()
const { passenger } = storeToRefs(store)
</script>
