<template>
  <div class="flex items-center">
    <p class="mr-[10px]">Products per page:</p>
    <el-select
      v-model="modelValue"
      class="w-[100px]"
    >
      <el-option
        v-for="option in itemsPerPageOptions"
        :key="option.value"
        :value="option.value"
        :label="option.label"
      />
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { itemsPerPageOptions } from '@/views/products/products.constants'

const modelValue = defineModel<number>()
</script>
