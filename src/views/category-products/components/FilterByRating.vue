<template>
  <div>
    <BlockTitle class="mb-[15px]">Rating</BlockTitle>
    <el-checkbox-group v-model="modelValue">
      <el-checkbox :label="5">
        <el-rate :model-value="5" class="h-[10px]" disabled />
      </el-checkbox>
      <el-checkbox :label="4">
        <el-rate :model-value="4" class="h-[10px]" disabled />
      </el-checkbox>
      <el-checkbox :label="3">
        <el-rate :model-value="3" class="h-[10px]" disabled />
      </el-checkbox>
      <el-checkbox :label="2">
        <el-rate :model-value="2" class="h-[10px]" disabled />
      </el-checkbox>
      <el-checkbox :label="1">
        <el-rate :model-value="1" class="h-[10px]" disabled />
      </el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script setup lang="ts">
const modelValue = defineModel<number[]>()
</script>
