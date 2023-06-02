<template>
  <div class="relative inline-block">
    <el-input
      v-model="modelValue"
      class="w-[120px] input text-left input"
    />
    <p class="absolute right-[15px] top-[50%] translate-y-[-50%] border-l pl-[10px] bg-primary-100">{{ unit }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ unit: string }>()

const modelValue = defineModel<number>()
</script>
