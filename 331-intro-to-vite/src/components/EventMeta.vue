<template>
    <div class="text-right text-base">
      <div>{{ category }}</div>
      <div>{{ organizer }}</div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    category: string
    organizer: string
  }>()
  </script>
  