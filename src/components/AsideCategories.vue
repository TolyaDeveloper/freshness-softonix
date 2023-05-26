<template>
  <aside>
    <BlockTitle class="mb-[15px]">{{ title }}</BlockTitle>
    <ul>
      <li
        v-for="category in categories.slice(0, dynamicMaxItemsCount)"
        :key="category.id"
        class="mb-[6px] text-accent-400"
      >
        <router-link :to="`${category.name}`">
          {{ category.name }}
        </router-link>
      </li>
    </ul>
    <el-button
      v-if="dynamicMaxItemsCount < categories.length"
      class="mt-[35px] flex items-center text-primary-700 font-bold font-poppins hover:text-primary-600"
      type="info"
      size="large"
      round
      @click="expandList"
    >
      {{ buttonTitle }}
      <IconArrowRight class="ml-[12px]" />
    </el-button>
  </aside>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  title: string
  categories: ICategory[]
  buttonTitle?: string
  maxItems?: number
}>(), {
  maxItems: 5,
  buttonTitle: 'More categories'
})

const dynamicMaxItemsCount = ref(props.maxItems)

const expandList = () => {
  dynamicMaxItemsCount.value = props.categories.length
}
</script>
