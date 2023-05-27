<template>
  <AsideWithBanners />
  <MostPopularProducts>
    <template #title>
      <BlockTitle class="my-[50px]">Most popular products 🔥</BlockTitle>
    </template>
  </MostPopularProducts>
  <FeedbacksSlider :feedbacks="store.feedbacks">
    <template #title>
      <BlockTitle class="my-[50px]">Our clients say</BlockTitle>
    </template>
  </FeedbacksSlider>
  <ProductsByLastSearch>
    <template #title>
      <BlockTitle class="my-[50px]">
        Recommendations based on your searches 🔍
      </BlockTitle>
    </template>
  </ProductsByLastSearch>
</template>

<script setup lang="ts">
import { useShopStore } from '@/store/modules/shop.store'

const store = useShopStore()

onMounted(() => {
  store.getFeedbacks()
})
</script>
