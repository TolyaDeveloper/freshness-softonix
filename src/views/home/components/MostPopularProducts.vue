<template>
  <ProductContainer :products="store.mostPopularProducts" view="grid" />
</template>

<script setup lang="ts">
const store = useShopStore()

onMounted(() => {
  store.getMostPopularProducts(4)
})
</script>
