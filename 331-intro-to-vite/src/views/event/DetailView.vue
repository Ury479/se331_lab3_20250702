<script setup lang="ts">
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'
import { toRefs } from 'vue'
import { type Event } from '@/types'

const props = defineProps<{
  event: Event
  id: string
}>()

const { event } = toRefs(props)
const store = useMessageStore()
const { message } = storeToRefs(store)
</script>

<template>
  <div>
    <div id="flashMessage" class="animate-fade" v-if="message">
      <h4>{{ message }}</h4>
    </div>
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
