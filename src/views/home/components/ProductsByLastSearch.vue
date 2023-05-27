<template>
  <template v-if="authStore.user">
    <ProductsSkeleton v-if="isLoading" />
    <template v-else-if="shopStore.productsByLastSearch.length">
      <slot name="title" />
      <ProductContainer :products="shopStore.productsByLastSearch" view="grid" />
    </template>
  </template>
</template>
<script setup lang="ts">
const authStore = useAuthStore()
const shopStore = useShopStore()

const isLoading = ref(true)

onMounted(async () => {
  await shopStore.getProductsByLastSearch(4, authStore.user?.last_searched_category)

  isLoading.value = false
})
</script>
