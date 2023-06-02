<template>
  <div>
    <BlockTitle class="mb-[15px]">Brands</BlockTitle>
    <el-checkbox-group v-model="modelValue">
      <transition-group name="brands">
        <el-checkbox
          v-for="brand in sortedBrands.slice(0, isListExpanded ? props.brands.length : dynamicListSize)"
          :key="brand.id"
          class="block"
          :label="brand.id"
        >
          {{ brand.name }}
        </el-checkbox>
      </transition-group>
    </el-checkbox-group>
    <el-button
      class="mt-[20px]"
      type="default"
      round
      @click="isListExpanded = !isListExpanded"
    >
      {{ isListExpanded ? 'Show less' : 'Show more' }}
    </el-button>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  brands: IBrand[]
  limit?: number
}>(),
{
  limit: 5
})

const modelValue = defineModel<string[]>()
const dynamicListSize = computed(() => {
  return (modelValue.value?.length ?? 0) > props.limit ? modelValue.value?.length : props.limit
})

const sortedBrands = computed(() => {
  return [...props.brands].sort((a, b) => {
    const aInFilter = modelValue.value?.includes(a.id)
    const bInFilter = modelValue.value?.includes(b.id)

    if (aInFilter && !bInFilter) {
      return -1
    }

    if (!aInFilter && bInFilter) {
      return 1
    }

    return 0
  })
})

const isListExpanded = ref(false)
</script>

<style lang="scss" scoped>
.brands-move,
.brands-enter-active,
.brands-leave-active {
  transition: transform 0.2s ease;
}

.brands-enter-from,
.brands-leave-to {
  opacity: 0;
  transform: translateY(15px);
}

.brands-leave-active {
  position: absolute;
}
</style>
