<script setup lang="ts">
import { type Passenger } from '@/types'

defineProps<{
  passenger: Passenger
}>()
</script>

<template>
  <RouterLink :to="{ name: 'passenger-layout', params: { id: passenger._id } }" class="no-underline text-inherit">
    <div class="p-[20px] w-[250px] cursor-pointer border border-gray-600 mb-[18px] hover:scale-101 hover:shadow-sp">
      <h3>{{ passenger.name }}</h3>
      <p><strong>Trips:</strong> {{ passenger.trips }}</p>
      <p><strong>Airlines:</strong> {{ passenger.airline.length }}</p>
    </div>
  </RouterLink>
</template>
