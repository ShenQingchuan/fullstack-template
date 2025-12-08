<script setup lang="ts">
import Header from './components/Header.vue'
</script>

<template>
  <div class="min-h-screen bg-white text-gray-900">
    <Header />

    <main>
      <router-view />
    </main>
  </div>
</template>
