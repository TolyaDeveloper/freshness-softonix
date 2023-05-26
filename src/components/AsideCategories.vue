<template>
  <el-skeleton v-if="!store.categories.length" :rows="5" />
  <aside v-else>
    <BlockTitle class="mb-[15px]">Category menu</BlockTitle>
    <ul>
      <li
        v-for="category in store.categories.slice(0, dynamicMaxItemsCount)"
        :key="category.id"
        class="mb-[6px] text-accent-400"
      >
        <router-link :to="`${category.name}`">
          {{ category.name }}
        </router-link>
      </li>
    </ul>
    <el-button
      v-if="dynamicMaxItemsCount < store.categories.length"
      class="mt-[35px] flex items-center text-primary-700 font-bold font-poppins hover:text-primary-600"
      type="info"
      size="large"
      round
      @click="expandList"
    >
      More categories
      <IconArrowRight class="ml-[12px]" />
    </el-button>
  </aside>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  maxItems?: number
}>(), {
  maxItems: 5
})

const store = useShopStore()

const dynamicMaxItemsCount = ref(props.maxItems)

const expandList = () => {
  dynamicMaxItemsCount.value = store.categories.length
}

onMounted(() => {
  store.getCategories()
})
</script>
