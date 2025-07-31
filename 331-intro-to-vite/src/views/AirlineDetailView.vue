<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { type Airline } from '@/types'
import PassengerService from '@/services/PassengerService'

const airline = ref<Airline | null>(null)
const router = useRouter()

const props = defineProps({
  airlineId: {
    type: String,
    required: true
  }
})

onMounted(() => {
  PassengerService.getAirline(parseInt(props.airlineId))
    .then((response) => {
      airline.value = response.data
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        router.push({
          name: '404-resource-view',
          params: { resource: 'airline' }
        })
      } else {
        router.push({ name: 'network-error-view' })
      }
    })
})
</script>

<template>
  <div v-if="airline">
    <div class="max-w-4xl mx-auto p-5">
      <div class="flex items-center gap-5 mb-8 pb-5 border-b-2 border-gray-200">
        <img :src="airline.logo" :alt="airline.name" class="w-30 h-30 object-contain" />
        <div>
          <h1 class="m-0 mb-2 text-gray-800">{{ airline.name }}</h1>
          <p class="italic text-gray-600 text-lg">{{ airline.slogan }}</p>
        </div>
      </div>
      
      <div class="grid gap-4 mb-8">
        <div class="p-2 bg-gray-50 rounded">
          <strong class="text-gray-800">Country:</strong> {{ airline.country }}
        </div>
        <div class="p-2 bg-gray-50 rounded">
          <strong class="text-gray-800">Headquarters:</strong> {{ airline.head_quaters }}
        </div>
        <div class="p-2 bg-gray-50 rounded">
          <strong class="text-gray-800">Website:</strong> <a :href="airline.website" target="_blank" class="text-blue-600 no-underline hover:underline">{{ airline.website }}</a>
        </div>
        <div class="p-2 bg-gray-50 rounded">
          <strong class="text-gray-800">Established:</strong> {{ airline.established }}
        </div>
      </div>
      
      <button @click="$router.go(-1)" class="bg-blue-500 text-white border-none py-2 px-5 rounded cursor-pointer text-base hover:bg-blue-600">← Back</button>
    </div>
  </div>
  <div v-else>
    <p>Loading airline details...</p>
  </div>
</template>
