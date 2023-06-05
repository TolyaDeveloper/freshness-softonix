<template>
  <div
    class="grid sm:grid-cols-[1fr_1fr] md:grid-cols-[1fr] lg:grid-cols-[270px_1fr_200px] grid-rows-[280px] gap-[30px]
           items-center border border-primary-300 rounded-[12px]"
  >
    <el-image
      class="lg:max-w-[270px] w-full h-[280px] rounded-[12px]"
      fit="cover"
      :src="imageHasError ? NoProductThumbnail : product.image"
      :alt="product.name"
      @error="imageHasError = true"
    />
    <div class="p-[15px] lg:p-0">
      <h2 class="mb-[5px] truncate font-poppins font-semibold text-[18px]">
        {{ product.name }}
      </h2>
      <p class="mb-[8px] truncate text-[12px] text-primary-600">
        {{ product.description }}
      </p>
      <el-rate v-if="product.rating" :model-value="product.rating" class="h-[20px]" disabled allow-half />
      <div class="mt-[20px] grid grid-cols-[auto_1fr] gap-x-[30px] gap-y-[10px] text-primary-600">
        <p>Brand</p>
        <p>{{ product.brand.name }}</p>
        <p class="font-bold">{{ product.qty }} {{ product.unit }}</p>
      </div>
    </div>
    <div class="p-[15px] lg:p-0">
      <p class="mb-[15px] font-poppins font-semibold text-[18px]">
        {{ $filters.currencyParser(product.price) }}
      </p>
      <router-link
        #default="{ navigate }"
        :to="{ name: $routeNames.productDetails, params: { id: product.id } }"
        custom
      >
        <el-button
          class="flex items-center font-poppins text-[15px] font-bold"
          role="link"
          round
          type="primary"
          size="large"
          @click="navigate"
        >
          Product Detail
          <IconArrowRight class="ml-[12px] stroke-white" />
        </el-button>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import NoProductThumbnail from '@/assets/images/no-product-thumbnail.png'

defineProps<{
  product: IProduct
}>()

const imageHasError = ref(false)
</script>
