<script setup lang="ts">
import { usePassengerStore } from '@/stores/passenger'
import { storeToRefs } from 'pinia'

const store = usePassengerStore()
const { passenger } = storeToRefs(store)
</script>

<template>
  <div v-if="passenger">
    <h2>Passenger Details</h2>
    <p><strong>Name:</strong> {{ passenger.name }}</p>
    <p><strong>Total Trips:</strong> {{ passenger.trips }}</p>
    <p><strong>Number of Airlines:</strong> {{ passenger.airline.length }}</p>
  </div>
</template>
