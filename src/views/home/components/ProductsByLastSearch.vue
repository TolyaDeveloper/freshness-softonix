<template>
  <template v-if="authStore.user">
    <slot name="title" />
    <ProductsSkeleton v-if="!shopStore.productsByLastSearch.length" />
    <ProductContainer v-else :products="shopStore.productsByLastSearch" view="grid" />
  </template>
</template>
<script setup lang="ts">
const authStore = useAuthStore()
const shopStore = useShopStore()

onMounted(() => {
  shopStore.getProductsByLastSearch(4, authStore.user?.last_searched_category)
})
</script>
