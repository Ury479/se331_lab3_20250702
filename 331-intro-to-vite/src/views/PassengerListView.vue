<script setup lang="ts">
import { type Passenger } from '@/types'
import { ref, computed, watchEffect } from 'vue'
import PassengerCard from '@/components/PassengerCard.vue'
import PassengerService from '@/services/PassengerService'

const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})

const perPage = 10
const page = computed(() => props.page)
const passengers = ref<Passenger[] | null>(null)
const totalPassengers = ref(0)

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalPassengers.value / perPage)
  return page.value < totalPages - 1
})

watchEffect(() => {
  passengers.value = null
  PassengerService.getPassengers(page.value, perPage)
      .then((response) => {
        passengers.value = response.data.data
        totalPassengers.value = response.data.totalPassengers || 0
      })
      .catch((error) => {
        console.error('There was an error!', error)
      })
})
</script>

<template>
  <section>
    <h2>Passengers - Page {{ page + 1 }}</h2>

    <div class="flex flex-wrap gap-4">
      <PassengerCard
          v-for="passenger in passengers"
          :key="passenger._id"
          :passenger="passenger"
      />
    </div>

    <div class="flex w-72 justify-between mt-4">
      <RouterLink
          id="page-prev"
          class="text-left no-underline text-gray-800"
          :to="{ name: 'passenger-list', query: { page: page - 1 } }"
          rel="prev"
          v-if="page !== 0"
      >
        ← Prev Page
      </RouterLink>

      <RouterLink
          id="page-next"
          class="text-right no-underline text-gray-800"
          :to="{ name: 'passenger-list', query: { page: page + 1 } }"
          rel="next"
          v-if="hasNextPage"
      >
        Next Page →
      </RouterLink>
    </div>

  </section>
</template>
