<template>
  <div class="relative inline-block">
    <el-input-number
      v-model="modelValue"
      class="w-[120px] input-number"
      :min="1"
      :disabled="disabled"
      :controls="controls"
      @input="value => $emit('input', value)"
    />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  disabled?: boolean
  controls?: boolean
}>(), {
  disabled: false,
  controls: true
})

defineEmits(['input'])

const modelValue = defineModel<number>()
</script>
