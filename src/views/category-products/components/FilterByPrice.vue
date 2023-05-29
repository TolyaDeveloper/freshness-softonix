<template>
  <el-select
    v-model="priceSortType"
    @change="updateSelect"
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

const props = defineProps<{ modelValue: TPriceFilters }>()
const emit = defineEmits<{ (e: 'update:modelValue', value: TPriceFilters): void }>()

const updateSelect = (value: TPriceFilters) => {
  emit('update:modelValue', value)
}

const priceSortType = ref<TPriceFilters>(props.modelValue)
</script>
