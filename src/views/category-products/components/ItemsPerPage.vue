<template>
  <div class="flex items-center">
    <p class="mr-[10px]">Products per page:</p>
    <el-select
      v-model="priceSortType"
      class="w-[100px]"
      @change="updateSelect"
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
import { itemsPerPageOptions } from '@/views/category-products/category-products.constants'

const props = defineProps<{ modelValue: number }>()
const emit = defineEmits<{ (e: 'update:modelValue', value: number): void }>()

const updateSelect = (value: number) => {
  emit('update:modelValue', value)
}

const priceSortType = ref<number>(props.modelValue)
</script>
