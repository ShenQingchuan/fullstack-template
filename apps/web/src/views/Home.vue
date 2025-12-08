<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-4">
    <div class="max-w-3xl mx-auto text-center">
      <!-- Main Title -->
      <h1 class="text-6xl tracking-tight mb-8">
        {{ t('home_title') }}
      </h1>

      <!-- Subtitle -->
      <p class="text-xl text-gray-600 mb-16 leading-relaxed">
        {{ t('home_subtitle') }}
      </p>

      <!-- CTA Buttons -->
      <div class="space-y-4">
        <router-link
          to="/ping"
          class="inline-block px-12 py-4 bg-black text-white font-medium tracking-wider hover:bg-gray-900 transition-colors duration-200"
        >
          {{ t('home_get_started') }}
        </router-link>

        <div class="pt-4">
          <router-link
            to="/ping"
            class="inline-block px-8 py-3 border border-black text-black font-medium tracking-wider hover:bg-black hover:text-white transition-colors duration-200"
          >
            {{ t('home_try_example') }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
