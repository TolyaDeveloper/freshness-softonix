<template>
  <div class="app-container">
    <header>
      <TopBar />
      <el-divider class="m-0 border-primary-700 opacity-5" />
      <MiddleBar />
    </header>
    <main class="grow mt-[15px]">
      <el-breadcrumb v-if="route.name !== $routeNames.home" class="text-[12px]">
        <el-breadcrumb-item
          v-for="breadcrumb in generalStore.breadcrumbs.slice(0, -1)"
          :key="breadcrumb.routeName"
          :to="{ name: $routeNames.home }"
        >
          {{ breadcrumb.title }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          {{ generalStore.breadcrumbs.at(-1)?.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <slot />
    </main>
    <footer class="my-[65px]">
      <FooterMenu />
      <Copyright />
    </footer>
  </div>
</template>

<script setup lang="ts">
const generalStore = useGeneralStore()
const route = useRoute()
</script>
