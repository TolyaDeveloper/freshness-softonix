<template>
  <div class="relative inline-block">
    <el-input-number
      v-model="modelValue"
      class="w-[120px] input-number"
      :min="1"
      :disabled="disabled"
      :controls="controls"
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

const modelValue = defineModel<number>()
</script>

<style lang="scss">
.input-number  {
  span {
    @apply rounded-[12px];

    &:hover {
      @apply bg-primary-300;
    }
  }
}
</style>
