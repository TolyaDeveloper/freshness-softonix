<template>
  <Layout
    :loading="generalStore.initialLoading"
    :layout="$route.meta.layout"
  >
    <router-view />
    <el-backtop :right="70" :bottom="70" />
  </Layout>
</template>

<script setup lang="ts">
import Layout from './layouts/Layout.vue'

const generalStore = useGeneralStore()

onBeforeMount(() => {
  generalStore.getInitialData()
})
</script>
