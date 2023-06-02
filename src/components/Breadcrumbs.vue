<template>
  <el-breadcrumb>
    <el-breadcrumb-item :to="{ name: $routeNames.home }">
      {{ homeTitle }}
    </el-breadcrumb-item>
    <el-breadcrumb-item
      v-for="(breadcrumb, index) in breadcrumbs.slice(0, -1)"
      :key="index"
      :to="breadcrumb.to"
    >
      {{ breadcrumb.title }}
    </el-breadcrumb-item>
    <el-breadcrumb-item>
      {{ breadcrumbs.at(-1)?.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

withDefaults(defineProps<{
  breadcrumbs: { title: string; to?: RouteLocationRaw }[]
  homeTitle?: string
}>(), {
  homeTitle: 'Homepage'
})
</script>
