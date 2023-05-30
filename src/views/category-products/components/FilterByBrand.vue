<template>
  <div>
    <BlockTitle class="mb-[15px]">Brands</BlockTitle>
    <el-checkbox-group v-model="modelValue">
      <el-checkbox label="Brand 1">
        <p>Brand 1</p>
      </el-checkbox>
      <el-checkbox label="Brand 2">
        <p>Brand 2</p>
      </el-checkbox>
      <el-checkbox label="Brand 3">
        <p>Brand 3</p>
      </el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script setup lang="ts">
const modelValue = defineModel()
</script>
