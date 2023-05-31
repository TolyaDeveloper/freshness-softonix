<template>
  <div
    class="grid grid-cols-[270px_1fr_200px] grid-rows-[280px] gap-[30px] items-center
           border border-primary-300 rounded-[12px]"
  >
    <el-image
      class="max-w-[270px] w-full h-[280px] rounded-[12px]"
      fit="cover"
      :src="imageHasError ? NoProductThumbnail : product.image"
      :alt="product.name"
      @error="imageHasError = true"
    />
    <div>
      <h2 class="mb-[5px] truncate font-poppins font-semibold text-[18px]">
        {{ product.name }}
      </h2>
      <p class="mb-[8px] truncate text-[12px] text-primary-600">
        {{ product.description }}
      </p>
      <el-rate v-if="rating" v-model="rating" class="h-[20px]" disabled allow-half />
      <div class="mt-[20px] grid grid-cols-[auto_1fr] gap-x-[30px] gap-y-[10px] text-primary-500">
        <p>
          Brand
        </p>
        <p>
          {{ product.brand.name }}
        </p>
        <p>
          Stock
        </p>
        <p>
          {{ product.in_stock }} {{ product.unit }}
        </p>
      </div>
    </div>
    <div>
      <p class="mb-[15px] font-poppins font-semibold text-[18px]">
        {{ $filters.currencyParser(product.price) }}
      </p>
      <router-link #default="{ navigate }" :to="{ name: $routeNames.home }" custom>
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

const props = defineProps<{
  product: IProduct
}>()

const rating = ref(props.product.rating)
const imageHasError = ref(false)
</script>
