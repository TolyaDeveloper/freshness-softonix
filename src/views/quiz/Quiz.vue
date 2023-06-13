<template>
  <Breadcrumbs :breadcrumbs="[{ title: 'Quiz' }]" />
  <BlockTitle class="mt-[30px] mb-[30px] text-center">🎲 Quiz</BlockTitle>
  <QuizForm v-if="shouldAllowQuiz" />
  <QuizUnavailable v-else />
</template>

<script setup lang="ts">
const authStore = useAuthStore()

const shouldAllowQuiz = computed(() => {
  const currentDate = new Date()

  if (!authStore.user?.quiz_available_since) {
    return true
  }

  const nextMonthDate = new Date(authStore.user.quiz_available_since)

  return currentDate.getTime() > nextMonthDate.getTime()
})
</script>
