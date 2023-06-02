<template>
  <AsideWithBanners />
  <MostPopularProducts />
  <FeedbacksSlider :feedbacks="feedbacks" />
  <ProductsByLastSearch v-if="authStore.user" />
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
