<template>
  <slot name="title" />
  <el-carousel
    height="225px"
    :initial-index="1"
    :autoplay="false"
    indicator-position="none"
    arrow="always"
    :loop="false"
    type="card"
  >
    <el-carousel-item v-for="feedback in feedbacks" :key="feedback.id">
      <FeedbackItem
        class="mx-auto"
        :feedback="{ ...feedback }"
      />
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts">
defineProps<{ feedbacks: IFeedback[] }>()
</script>
