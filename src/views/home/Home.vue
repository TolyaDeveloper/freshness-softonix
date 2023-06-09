<template>
  <AsideWithBanners />
  <MostPopularProducts />
  <ProductsByLastSearch v-if="authStore.user" />
  <FeedbacksSlider :feedbacks="feedbacks" />
</template>

<script setup lang="ts">
const feedbacks = ref<IFeedback[]>([])
const authStore = useAuthStore()

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
