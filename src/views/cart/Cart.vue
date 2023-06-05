<template>
  <Breadcrumbs :breadcrumbs="[{ title: 'Cart' }]" />
  <BlockTitle class="mt-[30px] mb-[30px] text-center">🛒 Cart</BlockTitle>
  <el-skeleton v-if="loading" />
  <div v-else-if="!cartStore.cartProducts.length" class="text-center mt-[100px]">
    <h2 class="text-[18px]">
      No products in cart
    </h2>
    <router-link
      #default="{ navigate }"
      :to="{ name: $routeNames.home }"
      custom
    >
      <el-button
        class="mt-[15px]"
        role="link"
        round
        size="large"
        @click="navigate"
      >
        Shop
      </el-button>
    </router-link>
  </div>
  <template v-else>
    <ul>
      <CartProduct
        v-for="product in cartStore.cartProducts"
        :key="product.id"
        class="mb-[15px]"
        :product="product"
      />
    </ul>
    <p v-if="cartStore.cartProducts.length" class="text-right  text-[18px]">
      <span class="block">Total: <span class="font-bold">{{ $filters.currencyParser(totalPrice) }}</span></span>
      <router-link
        #default="{ navigate }"
        :to="{ name: $routeNames.checkout }"
        custom
      >
        <el-button
          class="mt-[15px]"
          role="link"
          round
          size="large"
          type="primary"
          @click="navigate"
        >
          Checkout
          <IconArrowRight class="ml-[12px] stroke-white" />
        </el-button>
      </router-link>
    </p>
  </template>
</template>

<script setup lang="ts">
const cartStore = useCartStore()
const loading = ref(true)

const getCartProducts = async () => {
  await cartStore.getProductsFromUserCart()

  loading.value = false
}

const totalPrice = computed(() => {
  return cartStore.getTotalCartPrice()
})

onMounted(() => {
  getCartProducts()
})
</script>
