<template>
  <div v-if="passenger">
    <h1>{{ passenger.name }}</h1>
    <nav>
      <RouterLink :to="{ name: 'passenger-detail' }">Passenger Details</RouterLink> |
      <RouterLink :to="{ name: 'passenger-airlines' }">Airlines</RouterLink>
    </nav>
    <RouterView :passenger="passenger" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { type Passenger } from '@/types'
import PassengerService from '@/services/PassengerService'

const passenger = ref<Passenger | null>(null)
const router = useRouter()

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

onMounted(() => {
  PassengerService.getPassenger(props.id)
    .then((response) => {
      passenger.value = response.data
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        router.push({
          name: '404-resource-view',
          params: { resource: 'passenger' }
        })
      } else {
        router.push({ name: 'network-error-view' })
      }
    })
})
</script>
