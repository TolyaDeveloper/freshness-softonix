<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[270px_1fr_1fr] gap-[30px]">
    <AsideCategories :categories="store.categories" title="Category menu" />
    <Banner
      class="order-[-1] lg:order-1"
      title="Recipes"
      subfocus="Read our recipes"
      to="/recipes"
    />
    <Banner
      class="order-[-1] lg:order-1"
      title="Quiz game"
      subfocus="Play a game and win promocode"
      to="/quiz"
      link-title="Play"
    />
  </div>
</template>

<script setup lang="ts">
import { useShopStore } from '@/store/modules/shop.store'

const store = useShopStore()

onMounted(() => {
  store.getCategories()
})
</script>
