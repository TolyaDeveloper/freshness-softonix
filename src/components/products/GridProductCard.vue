<template>
  <div class="relative max-w-[270px] w-full border border-primary-300 rounded-[12px] p-[15px]">
    <router-link :to="{ name: $routeNames.productDetails, params: { id: product.id } }">
      <div>
        <ProductImage
          class="max-w-[240px] w-full h-[180px] rounded-[12px]"
          :src="product.image"
          :alt="product.name"
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
        <el-rate v-if="product.rating" :model-value="product.rating" class="h-[20px]" disabled />
        <p class="mt-[15px] font-poppins font-semibold text-[18px]">
          {{ $filters.currencyParser(product.price) }}
        </p>
      </div>
    </router-link>
    <div class="absolute right-[15px] bottom-[10px]">
      <AddToCart :product="product" :units="1" :is-already-in-cart="isAlreadyInCart" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  product: IProduct
}>()

const authStore = useAuthStore()

const isAlreadyInCart = computed(() => {
  return authStore.user?.cart ? props.product.id in authStore.user.cart : false
})
</script>
