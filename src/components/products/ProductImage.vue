<template>
  <el-image
    fit="cover"
    :src="src ?? ''"
    :alt="alt"
  >
    <template #error>
      <el-image :src="NoProductThumbnail" :alt="alt" fit="cover" />
    </template>
  </el-image>
</template>

<script setup lang="ts">
import NoProductThumbnail from '@/assets/images/no-product-thumbnail.png'

defineProps<{ src: string | null; alt: string }>()
</script>
