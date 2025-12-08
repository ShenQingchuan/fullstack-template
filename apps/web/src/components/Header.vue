<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// Toggle language function
function toggleLanguage() {
  locale.value = locale.value === 'en' ? 'zh' : 'en'
}
</script>

<template>
  <header class="border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-8 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo/Title -->
        <div class="text-xl tracking-wider text-gray-900">
          {{ t('app_name') }}
        </div>

        <!-- Language Toggle -->
        <button
          class="px-4 py-2 text-sm hover:text-gray-600 transition-colors"
          @click="toggleLanguage"
        >
          {{ locale === 'en' ? '中文' : 'EN' }}
        </button>
      </div>
    </div>
  </header>
</template>
