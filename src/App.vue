<template>
  <Layout :layout="$route.meta.layout">
    <RouterView />
  </Layout>
</template>

<script setup lang="ts">
import Layout from './layouts/Layout.vue'
</script>
