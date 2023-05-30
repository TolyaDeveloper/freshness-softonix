<template>
  <div>
    <BlockTitle class="mb-[15px]">Rating</BlockTitle>
    <el-checkbox-group v-model="rating" @change="updateRating">
      <el-checkbox label="5">
        <el-rate class="h-[10px]" disabled allow-half />
      </el-checkbox>
      <el-checkbox label="4">
        <el-rate class="h-[10px]" disabled allow-half />
      </el-checkbox>
      <el-checkbox label="3">
        <el-rate class="h-[10px]" disabled allow-half />
      </el-checkbox>
      <el-checkbox label="2">
        <el-rate class="h-[10px]" disabled allow-half />
      </el-checkbox>
      <el-checkbox label="1">
        <el-rate class="h-[10px]" disabled allow-half />
      </el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script setup lang="ts">
import type { CheckboxValueType } from 'element-plus'

const props = defineProps<{ modelValue: number[] }>()
const emit = defineEmits<{ (e: 'update:modelValue', value: number[]): void }>()

const rating = ref<number[]>(props.modelValue)

const updateRating = (value: CheckboxValueType[]) => {
  emit('update:modelValue', value as number[])
}
</script>
