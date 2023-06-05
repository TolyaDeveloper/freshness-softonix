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
      :disabled="!validateQuantityInput()"
      :is-already-in-cart="isAlreadyInCart"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ product: IProduct }>()

const quantity = ref(1)
const authStore = useAuthStore()

const validateQuantityInput = () => {
  return quantity.value >= 1 && !isNaN(quantity.value)
}

const isAlreadyInCart = computed(() => {
  return authStore.user?.cart ? props.product.id in authStore.user.cart : false
})
</script>
