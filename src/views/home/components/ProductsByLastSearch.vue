<template>
  <div>
    <ProductsSkeleton v-if="isLoading" />
    <template v-else-if="productsByLastSearch.length">
      <slot name="title">
        <BlockTitle class="my-[50px]">
          Recommendations based on your searches 🔍
        </BlockTitle>
      </slot>
      <ProductContainer :products="productsByLastSearch" view="grid" />
    </template>
  </div>
</template>
<script setup lang="ts">
const authStore = useAuthStore()

const productsByLastSearch = ref<TProduct[]>([])
const isLoading = ref(true)

const getProductsByLastSearch = async (limit: number, categoryId: TNullable<string | undefined>) => {
  try {
    if (!categoryId) {
      return
    }

    const { data } = await homeService.getProductsByLastSearch(limit, categoryId)

    if (!data) {
      return
    }

    productsByLastSearch.value = data
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  getProductsByLastSearch(4, authStore.user?.last_searched_category)
})
</script>
