<template>
  <slot name="title">
    <BlockTitle class="my-[50px]">Most popular products 🔥</BlockTitle>
  </slot>
  <ProductsSkeleton v-if="!mostPopularProducts.length" />
  <ProductContainer v-else :products="mostPopularProducts" view="grid" />
</template>

<script setup lang="ts">
const mostPopularProducts = ref<IProduct[]>([])

const getMostPopularProducts = async (limit: number) => {
  try {
    const { data } = await homeService.getMostPopularProducts(limit)

    if (!data) {
      return
    }

    mostPopularProducts.value = data
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  getMostPopularProducts(4)
})
</script>
