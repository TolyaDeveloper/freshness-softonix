<template>
  <div>
    <BlockTitle class="mb-[20px]">Price</BlockTitle>
    <el-slider
      v-model="range"
      range
      :min="props.min"
      :max="props.max"
      @change="updatePrice"
    />
    <div class="flex items-center">
      <div>
        <p class="font-poppins text-[12px] font-semibold">Min</p>
        <el-input v-model="range[0]" disabled />
      </div>
      <span class="mx-[15px] text-primary-500 inline-block mt-[15px]">-</span>
      <div>
        <p class="font-poppins text-[12px] font-semibold">Max</p>
        <el-input v-model="range[1]" disabled />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Arrayable } from 'element-plus/es/utils'

const props = defineProps<{
  modelValue: number[]
  min: number | undefined
  max: number | undefined
}>()
const emit = defineEmits(['update:modelValue'])

const range = ref([props.modelValue[0], props.modelValue[1]])

const updatePrice = (value: Arrayable<number>) => {
  emit('update:modelValue', value)
}
</script>
