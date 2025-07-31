<template>
  <div v-if="passenger">
    <h1>{{ passenger.name }}</h1>
    <nav>
      <RouterLink 
        class="font-bold text-gray-700" 
        exact-active-class="text-green-500" 
        :to="{ name: 'passenger-detail' }"
      >Passenger Details</RouterLink> |
      <RouterLink 
        class="font-bold text-gray-700" 
        exact-active-class="text-green-500" 
        :to="{ name: 'passenger-airlines' }"
      >Airlines</RouterLink> |
      <RouterLink 
        class="font-bold text-gray-700" 
        exact-active-class="text-green-500" 
        :to="{ name: 'passenger-edit' }"
      >Edit</RouterLink>
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
