<template>
  <li class="flex items-center justify-between border border-primary-300 rounded-[12px] p-[15px]">
    <div class="flex items-center">
      <el-image
        class="max-w-[80px] w-full h-[80px] rounded-[12px] shrink-0"
        fit="cover"
        :src="imageHasError ? NoProductThumbnail : product.image"
        :alt="product.name"
        @error="imageHasError = true"
      />
      <div class="ml-[30px] max-w-[150px] shrink-0 w-full">
        <slot name="title">
          <h3 class="font-poppins font-medium text-[15px] truncate">
            {{ product.name }}
          </h3>
        </slot>
        <p class="font-poppins font-semibold text-[18px] text-accent-400">
          {{ $filters.currencyParser(product.price) }}
        </p>
      </div>
      <QuantityInput v-model="quantity" class="ml-[30px]" />
      <p class="ml-[15px] font-poppins flex">
        <span>{{ quantity * product.qty }}</span>
        &nbsp;
        <span>{{ product.unit }}/{{ product.unit }}s</span>
      </p>
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
      <button
        class="ml-[15px]"
        type="button"
        aria-label="Delete from cart"
        title="Delete from cart"
        @click="cartStore.deleteProductFromCart(product.id)"
      >
        <IconDelete class="hover:stroke-secondary-500" />
      </button>
    </div>
  </li>
</template>

<script setup lang="ts">
import NoProductThumbnail from '@/assets/images/no-product-thumbnail.png'

const props = defineProps<{
  product: IProduct
}>()

const authStore = useAuthStore()
const cartStore = useCartStore()

const quantity = ref(authStore.user?.cart ? authStore.user?.cart[props.product.id] : 1)
const imageHasError = ref(false)

watch(quantity, () => {
  if (validateQuantityInput()) {
    cartStore.editProductCartUnits(props.product.id, quantity.value)
  }
})

const validateQuantityInput = () => {
  return quantity.value >= 1 && !isNaN(quantity.value)
}
</script>
