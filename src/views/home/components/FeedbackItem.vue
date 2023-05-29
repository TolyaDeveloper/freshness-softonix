<template>
  <div
    class="relative max-w-[370px] w-full h-[200px] border border-primary-300
              rounded-[12px] px-[32px] pt-[24px] pb-[40px] text-center bg-white"
  >
    <slot name="content">
      <blockquote class="mb-[20px] font-poppins font-medium text-[15px] multiline-truncate">
        “ {{ feedback.content }} “
      </blockquote>
    </slot>
    <slot name="username">
      <p class="font-poppins font-semibold text-[12px] text-primary-500">
        {{ feedback.username }}
      </p>
    </slot>
    <div class="absolute left-[50%] translate-x-[-50%] bottom-[-22px]">
      <el-avatar
        :size="48"
        :src="feedback.avatar"
        :alt="feedback.avatar"
      >
        <IconUserCircle />
      </el-avatar>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ feedback: IFeedback }>()
</script>
