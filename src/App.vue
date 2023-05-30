<template>
  <Layout v-loading.fullscreen="store.initialLoading" :layout="$route.meta.layout">
    <router-view />
  </Layout>
</template>

<script setup lang="ts">
import Layout from './layouts/Layout.vue'

const store = useGeneralStore()

onBeforeMount(() => {
  store.getInitialData()
})
</script>
