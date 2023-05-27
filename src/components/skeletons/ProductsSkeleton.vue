<template>
  <el-skeleton animated style="height: 335px;">
    <template #template>
      <div class="skeletons-wrapper">
        <div v-for="skeleton in 4" :key="skeleton" class="max-w-[270px] w-full">
          <el-skeleton-item variant="image" style="height: 180px" />
          <el-skeleton-item variant="text" />
          <el-skeleton-item variant="p" />
          <el-skeleton-item variant="text" />
          <el-skeleton-item variant="text" />
        </div>
      </div>
    </template>
  </el-skeleton>
</template>

<style>
.skeletons-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 30px;
}
</style>
