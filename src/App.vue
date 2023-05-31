<template>
  <Layout v-loading.fullscreen="store.initialLoading" :layout="$route.meta.layout">
    <router-view />
    <el-backtop :right="70" :bottom="70" />
  </Layout>
</template>

<script setup lang="ts">
import Layout from './layouts/Layout.vue'

const store = useGeneralStore()

onBeforeMount(() => {
  store.getInitialData()
})
</script>
