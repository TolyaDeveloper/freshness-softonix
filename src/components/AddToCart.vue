<template>
  <router-link v-if="isAlreadyInCart" #default="{ navigate }" :to="{ name: $routeNames.cart }" custom>
    <el-button
      role="link"
      round
      @click="navigate"
    >
      View in cart
    </el-button>
  </router-link>
  <el-button
    v-else
    type="primary"
    round
    :disabled="disabled"
    @click="addToCart"
  >
    <slot>
      Buy now
    </slot>
  </el-button>
</template>

<script setup lang="ts">
const props = defineProps<{
  product: TProduct
  units: number
  isAlreadyInCart: boolean
  disabled?: boolean
}>()

const cartStore = useCartStore()

const addToCart = () => {
  cartStore.addProductToCart(props.product.id, props.units)
}
</script>
