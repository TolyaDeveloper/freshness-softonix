<template>
  <Layout :layout="$route.meta.layout">
    <router-view />
  </Layout>
</template>

<script setup lang="ts">
import Layout from './layouts/Layout.vue'
</script>
