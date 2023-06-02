<template>
  <div class="flex">
    <button
      class="flex items-center"
      :class="{ active: modelValue === 'grid' }"
      type="button"
      title="Grid view"
      @click="modelValue = 'grid'"
    >
      <p class="mr-[4px]">
        Grid view
      </p>
      <IconGridView />
    </button>
    <button
      class="ml-[25px] flex items-center"
      :class="{ active: modelValue === 'list' }"
      type="button"
      title="List view"
      @click="modelValue = 'list'"
    >
      <p class="mr-[4px]">
        List view
      </p>
      <IconListView />
    </button>
  </div>
</template>

<script setup lang="ts">
const modelValue = defineModel<TProductViews>()
</script>

<style lang="scss" scoped>
.active {
  @apply text-accent-400 transition-colors ease-linear;

  svg {
    @apply stroke-accent-400 transition-colors ease-linear;
  }
}
</style>
