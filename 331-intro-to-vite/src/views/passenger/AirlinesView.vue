<script setup lang="ts">
import { usePassengerStore } from '@/stores/passenger'
import { storeToRefs } from 'pinia'

const store = usePassengerStore()
const { passenger } = storeToRefs(store)
</script>

<template>
  <div v-if="passenger">
    <h2>Airlines</h2>
    <div v-for="airline in passenger.airline" :key="airline.id" class="airline-card">
      <RouterLink :to="{ name: 'airline-detail', params: { airlineId: airline.id } }" class="airline-link">
        <div class="airline-info">
          <img :src="airline.logo" :alt="airline.name" class="airline-logo" />
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

<style scoped>
.airline-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 16px;
}

.airline-link {
  text-decoration: none;
  color: inherit;
}

.airline-info {
  display: flex;
  align-items: center;
  gap: 16px;
}

.airline-logo {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.airline-card:hover {
  background-color: #f5f5f5;
}
</style>
