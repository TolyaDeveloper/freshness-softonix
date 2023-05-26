<template>
  <div class="relative max-w-[270px] w-full border border-primary-300 rounded-[12px] p-[15px]">
    <router-link to="/">
      <div>
        <el-image
          class="max-w-[240px] w-full h-[180px] rounded-[12px]"
          fit="cover"
          :src="imageHasError ? NoProductThumbnail : ''"
          :alt="product.name"
          @error="imageHasError = true"
        />
        <h3 class="mb-[4px] mt-[15px] font-poppins font-medium text-[15px] truncate">
          {{ product.name }}
        </h3>
        <p
          class="truncate text-primary-600 text-[12px]"
        >
          {{ product.description }}
        </p>
        <template v-if="product.rating">
          <el-rate v-model="rating" class="h-[20px]" disabled allow-half />
        </template>
        <p class="mt-[15px] font-poppins font-semibold text-[18px]">
          {{ new Intl.NumberFormat('us', {
            style: 'currency',
            currency: 'USD',
            currencyDisplay: 'code'
          }).format(product.price) }}
        </p>
      </div>
    </router-link>
    <template v-if="isAlreadyInCart">
      <router-link #default="{ navigate }" :to="{ name: $routeNames.home }" custom>
        <el-button
          role="link"
          class="absolute right-[15px] bottom-[10px]"
          round
          @click="navigate"
        >
          View in cart
        </el-button>
      </router-link>
    </template>
    <template v-else>
      <el-button
        class="absolute right-[15px] bottom-[10px]"
        type="primary"
        round
      >
        Buy now
      </el-button>
    </template>
  </div>
</template>

<script setup lang="ts">
import NoProductThumbnail from '@/assets/images/no-product-thumbnail.png'

const props = defineProps<{
  product: IProduct
}>()

const rating = ref(props.product.rating as number)
const isAlreadyInCart = ref(false)
const imageHasError = ref(false)
</script>
