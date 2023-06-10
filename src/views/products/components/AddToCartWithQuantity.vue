<template>
  <div class="flex items-center">
    <QuantityInput
      v-if="!isAlreadyInCart"
      v-model="quantity"
      class="mr-[24px]"
    />
    <AddToCart
      :product="product"
      :units="quantity"
      :disabled="!validateQuantityInput(quantity)"
      :is-already-in-cart="isAlreadyInCart"
    />
  </div>
</template>

<script setup lang="ts">
import { validateQuantityInput } from '@/helpers'

const props = defineProps<{ product: TProduct }>()

const quantity = ref(1)
const authStore = useAuthStore()

const isAlreadyInCart = computed(() => {
  return authStore.user?.cart ? props.product.id in authStore.user.cart : false
})
</script>
