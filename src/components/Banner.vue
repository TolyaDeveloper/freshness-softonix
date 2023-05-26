<template>
  <div class="relative max-w-[420px] w-full h-[280px] bg-accent-100 px-[32px] pb-[32px] pt-[48px] rounded-[12px]">
    <el-image
      class="absolute inset-0 image"
      :src="BannerBackground"
      fit="cover"
      :alt="title"
    />
    <div class="relative flex flex-col items-start h-full z-10 truncate">
      <slot name="subfocus">
        <p v-if="subfocus" class="mb-[10px] text-accent-400 font-poppins text-[12px] font-semibold">
          {{ subfocus }}
        </p>
      </slot>
      <slot name="title">
        <p class="font-poppins text-[22px] font-semibold">
          {{ title }}
        </p>
      </slot>
      <router-link #default="{ navigate }" :to="to" custom>
        <el-button
          class="mt-auto bg-transparent border-2 border-accent-400 font-poppins font-semibold"
          role="link"
          size="large"
          round
          @click="navigate"
        >
          {{ linkTitle }}
        </el-button>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

import BannerBackground from '@/assets/images/banner-background.png'

withDefaults(defineProps<{
  title: string
  to: RouteLocationRaw
  subfocus?: string
  linkTitle?: string
}>(), {
  linkTitle: 'Read'
})

</script>

<style lang="scss">
.image image {
  @apply rounded-[12px]
}
</style>
