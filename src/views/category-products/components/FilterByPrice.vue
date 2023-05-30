<template>
  <el-select
    v-model="modelValue"
  >
    <el-option
      v-for="option in priceFilterOptions"
      :key="option.value"
      :value="option.value"
      :label="option.label"
    />
  </el-select>
</template>

<script setup lang="ts">
import { priceFilterOptions } from '@/views/category-products/category-products.constants'

const modelValue = defineModel<TPriceFilters>()
</script>
