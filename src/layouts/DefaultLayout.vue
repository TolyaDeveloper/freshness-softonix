<template>
  <div v-loading.fullscreen="loading" class="app-container">
    <header>
      <TopBar />
      <el-divider class="m-0 border-primary-700 opacity-5" />
      <MiddleBar />
    </header>
    <main class="grow mt-[15px]">
      <slot />
    </main>
    <footer class="my-[65px]">
      <FooterMenu />
      <Copyright />
    </footer>
  </div>
</template>

<script setup lang="ts">
defineProps<{ loading: boolean }>()
</script>
