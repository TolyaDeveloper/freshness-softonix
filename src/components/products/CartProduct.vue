<template>
  <li class="flex items-center justify-between border border-primary-300 rounded-[12px] p-[15px]">
    <div class="flex items-center">
      <ProductImage
        :src="product.image"
        :alt="product.name"
        class="max-w-[80px] w-full h-[80px] rounded-[12px] shrink-0"
      />
      <div class="ml-[30px] max-w-[150px] shrink-0 w-full">
        <h3 class="font-poppins font-medium text-[15px] truncate">
          {{ product.name }}
        </h3>
        <p class="font-poppins font-semibold text-[18px] text-accent-400">
          {{ $filters.currencyParser(product.price) }}
          <span>/ {{ product.qty }}  {{ product.unit }}</span>
        </p>
      </div>
      <QuantityInput v-model="quantity" class="ml-[30px]" />
    </div>
    <div class="flex items-center">
      <router-link
        #default="{ navigate }"
        :to="{ name: $routeNames.productDetails, params: { id: product.id } }"
        custom
      >
        <el-button
          role="link"
          round
          title="View detailed product"
          @click="navigate"
        >
          View
        </el-button>
      </router-link>
      <el-button
        class="ml-[15px]"
        aria-label="Delete from cart"
        title="Delete from cart"
        type="danger"
        round
        @click="cartStore.deleteProductFromCart(product.id)"
      >
        <IconDelete />
      </el-button>
    </div>
  </li>
</template>

<script setup lang="ts">
import { validateQuantityInput } from '@/helpers'

const props = defineProps<{
  product: IProduct
}>()

const authStore = useAuthStore()
const cartStore = useCartStore()

const quantity = ref(authStore.user?.cart?.[props.product.id] || 1)

watch(quantity, () => {
  if (validateQuantityInput(quantity.value)) {
    cartStore.editProductCartUnits(props.product.id, quantity.value)
  }
})
</script>
