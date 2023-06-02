<template>
  <div class="relative max-w-[270px] w-full border border-primary-300 rounded-[12px] p-[15px]">
    <router-link to="/">
      <div>
        <el-image
          class="max-w-[240px] w-full h-[180px] rounded-[12px]"
          fit="cover"
          :src="imageHasError ? NoProductThumbnail : product.image"
          :alt="product.name"
          @error="imageHasError = true"
        />
        <slot name="title">
          <h3 class="mb-[4px] mt-[15px] font-poppins font-medium text-[15px] truncate">
            {{ product.name }}
          </h3>
        </slot>
        <slot name="description">
          <p class="truncate text-primary-600 text-[12px]">
            {{ product.description }}
          </p>
        </slot>
        <el-rate v-if="product.rating" :model-value="product.rating" class="h-[20px]" disabled allow-half />
        <p class="mt-[15px] font-poppins font-semibold text-[18px]">
          {{ $filters.currencyParser(product.price) }}
        </p>
      </div>
    </router-link>
    <router-link v-if="isAlreadyInCart" #default="{ navigate }" :to="{ name: $routeNames.home }" custom>
      <el-button
        role="link"
        class="absolute right-[15px] bottom-[10px]"
        round
        @click="navigate"
      >
        View in cart
      </el-button>
    </router-link>
    <el-button
      v-else
      class="absolute right-[15px] bottom-[10px]"
      type="primary"
      round
    >
      Buy now
    </el-button>
  </div>
</template>

<script setup lang="ts">
import NoProductThumbnail from '@/assets/images/no-product-thumbnail.png'

defineProps<{
  product: IProduct
}>()

const isAlreadyInCart = ref(false)
const imageHasError = ref(false)
</script>
