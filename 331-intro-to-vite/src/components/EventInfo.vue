<template>
  <div class="space-y-1">
    <div class="text-sm text-gray-600">{{ event.category }}</div>
    <div class="text-sm text-gray-600">{{ event.organizer }}</div>
  </div>
</template>

<script setup lang="ts">
interface Event {
  id: number;
  category: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  petsAllowed: boolean;
  organizer: string;
}

defineProps<{ event: Event }>()
</script>

