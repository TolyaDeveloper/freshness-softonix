<template>
  <div>
    <BlockTitle class="mb-[15px]">Brands</BlockTitle>
    <el-checkbox-group v-model="modelValue">
      <el-checkbox
        v-for="brand in brands.slice(0, isListExpanded ? props.brands.length : limit)"
        :key="brand.id"
        class="block"
        :label="brand.id"
      >
        {{ brand.name }}
      </el-checkbox>
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
const isListExpanded = ref(false)
</script>
