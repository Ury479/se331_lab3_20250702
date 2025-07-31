<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import { usePassengerStore } from '@/stores/passenger'
import { storeToRefs } from 'pinia'

const router = useRouter()
const messageStore = useMessageStore()
const passengerStore = usePassengerStore()
const { passenger } = storeToRefs(passengerStore)

const updatePassenger = () => {
  // If the update API call successful
  messageStore.updateMessage('Update is in progress')
  setTimeout(() => {
    messageStore.resetMessage()
    router.push({ name: 'passenger-list' })
  }, 5000)
}
</script>

<template>
  <div v-if="passenger">
    <h2>Edit Passenger: {{ passenger.name }}</h2>
    <p><strong>Name:</strong> {{ passenger.name }}</p>
    <p><strong>Total Trips:</strong> {{ passenger.trips }}</p>
    <p><strong>Number of Airlines:</strong> {{ passenger.airline.length }}</p>
    <button @click="updatePassenger" class="py-2 px-5 bg-green-500 text-white border-none rounded cursor-pointer mt-2 hover:bg-green-600">Update Passenger Details</button>
  </div>
</template>
