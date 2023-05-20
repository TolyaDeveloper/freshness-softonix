<template>
  <RouterLink :to="{ name: $routeNames.home }" aria-label="Go home">
    <LogoIcon />
  </RouterLink>
</template>

<script setup lang="ts">
import LogoIcon from '@/assets/icons/LogoIcon.vue'
</script>
