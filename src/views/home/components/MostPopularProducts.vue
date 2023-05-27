<template>
  <slot name="title" />
  <ProductsSkeleton v-if="!store.mostPopularProducts.length" />
  <ProductContainer v-else :products="store.mostPopularProducts" view="grid" />
</template>

<script setup lang="ts">
const store = useShopStore()

onMounted(() => {
  store.getMostPopularProducts(4)
})
</script>
