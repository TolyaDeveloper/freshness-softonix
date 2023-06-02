<template>
  <el-breadcrumb>
    <el-breadcrumb-item :to="{ name: $routeNames.home }">
      {{ homeTitle }}
    </el-breadcrumb-item>
    <el-breadcrumb-item
      v-for="breadcrumb in breadcrumbs.slice(0, -1)"
      :key="breadcrumb.routeName"
      :to="{ name: breadcrumb.routeName }"
    >
      {{ breadcrumb.title }}
    </el-breadcrumb-item>
    <el-breadcrumb-item>
      {{ breadcrumbs.at(-1)?.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  breadcrumbs: IBreadcrumb[]
  homeTitle?: string
}>(), {
  homeTitle: 'Homepage'
})
</script>
