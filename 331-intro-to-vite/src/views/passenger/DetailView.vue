<script setup lang="ts">
import { toRefs } from 'vue'
import { type Passenger } from '@/types'

const props = defineProps<{
  passenger: Passenger
  id: string
}>()

const { passenger } = toRefs(props)
</script>

<template>
  <div>
    <h2>Passenger Details</h2>
    <p><strong>Name:</strong> {{ passenger.name }}</p>
    <p><strong>Total Trips:</strong> {{ passenger.trips }}</p>
    <p><strong>Number of Airlines:</strong> {{ passenger.airline.length }}</p>
  </div>
</template>
