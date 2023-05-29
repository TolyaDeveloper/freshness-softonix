<template>
  <AsideWithBanners />
  <MostPopularProducts>
    <template #title>
      <BlockTitle class="my-[50px]">Most popular products 🔥</BlockTitle>
    </template>
  </MostPopularProducts>
  <FeedbacksSlider :feedbacks="feedbacks">
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
const feedbacks = ref<IFeedback[]>([])

const getFeedbacks = async () => {
  try {
    const { data } = await homeService.getFeedbacks()

    if (!data) {
      return
    }

    feedbacks.value = data
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  getFeedbacks()
})
</script>
