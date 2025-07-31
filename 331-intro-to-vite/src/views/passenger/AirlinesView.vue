<script setup lang="ts">
import { usePassengerStore } from '@/stores/passenger'
import { storeToRefs } from 'pinia'

const store = usePassengerStore()
const { passenger } = storeToRefs(store)
</script>

<template>
  <div v-if="passenger">
    <h2>Airlines</h2>
    <div v-for="airline in passenger.airline" :key="airline.id" class="border border-gray-300 rounded-lg mb-4 p-4 hover:bg-gray-50">
      <RouterLink :to="{ name: 'airline-detail', params: { airlineId: airline.id } }" class="no-underline text-inherit">
        <div class="flex items-center gap-4">
          <img :src="airline.logo" :alt="airline.name" class="w-15 h-15 object-contain" />
          <div>
            <h3>{{ airline.name }}</h3>
            <p>{{ airline.country }}</p>
            <p>{{ airline.slogan }}</p>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
