<template>
  <el-skeleton v-if="view === 'grid'" animated style="height: 335px;">
    <template #template>
      <div class="skeletons-wrapper">
        <div v-for="skeleton in limit" :key="skeleton" class="max-w-[270px] w-full">
          <el-skeleton-item variant="image" style="height: 180px" />
          <el-skeleton-item variant="text" />
          <el-skeleton-item variant="p" />
          <el-skeleton-item variant="text" />
          <el-skeleton-item variant="text" />
        </div>
      </div>
    </template>
  </el-skeleton>
  <el-skeleton v-else animated style="height: 280px;">
    <template #template>
      <div
        v-for="skeleton in limit"
        :key="skeleton"
        class="mb-[30px] grid grid-cols-[1fr] md:grid-cols-[270px_1fr_1fr] md:grid-rows-[280px] gap-[30px] items-center"
      >
        <el-skeleton-item variant="image" style="height: 280px" />
        <div>
          <el-skeleton-item variant="text" />
          <el-skeleton-item variant="text" />
          <el-skeleton-item variant="text" />
          <div>
            <el-skeleton-item variant="p" />
            <el-skeleton-item variant="p" />
          </div>
        </div>
        <div>
          <el-skeleton-item variant="text" />
          <el-skeleton-item variant="text" />
        </div>
      </div>
    </template>
  </el-skeleton>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  limit?: number
  view?: TProductViews
}>(), {
  limit: 4,
  view: 'grid'
})
</script>

<style>
.skeletons-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 30px;
}
</style>
