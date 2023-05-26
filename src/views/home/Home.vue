<template>
  <AsideWithBanners />
  <BlockTitle class="my-[50px]">Most popular products 🔥</BlockTitle>
  <MostPopularProducts />
  <BlockTitle class="my-[50px]">Our clients say</BlockTitle>
  <FeedbacksSlider :feedbacks="store.feedbacks" />
</template>

<script setup lang="ts">
import { useShopStore } from '@/store/modules/shop.store'

const store = useShopStore()

onMounted(() => {
  store.getFeedbacks()
})
</script>
