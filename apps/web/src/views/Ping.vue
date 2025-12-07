<script setup lang="ts">
import { ref } from 'vue'

const message = ref('')
const response = ref('')
const error = ref('')
const loading = ref(false)

async function sendPing() {
  if (!message.value.trim())
    return

  loading.value = true
  error.value = ''
  response.value = ''

  try {
    const res = await fetch(`/api/ping?msg=${message.value}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }

    const data = await res.json() as { msg: string }
    response.value = data.msg
  }
  catch (err) {
    error.value = err instanceof Error ? err.message : 'An unknown error occurred'
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
    <h1 class="text-2xl font-bold mb-6 text-center">
      Ping Pong Test
    </h1>

    <div class="mb-6">
      <label for="message" class="block text-sm font-medium mb-2">Message:</label>
      <input
        id="message"
        v-model="message"
        type="text"
        placeholder="Enter a message"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      >
    </div>

    <button
      :disabled="loading || !message.trim()"
      class="w-full bg-primary text-white py-2 px-4 rounded-md font-medium hover:bg-primary/90 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      @click="sendPing"
    >
      {{ loading ? 'Sending...' : 'Send Ping' }}
    </button>

    <div v-if="response" class="mt-6 p-4 bg-gray-100 rounded-md">
      <h2 class="font-semibold mb-2">
        Response:
      </h2>
      <p class="text-gray-700">
        {{ response }}
      </p>
    </div>

    <div v-if="error" class="mt-6 p-4 bg-red-100 text-red-700 rounded-md">
      <h2 class="font-semibold mb-2">
        Error:
      </h2>
      <p>{{ error }}</p>
    </div>
  </div>
</template>
