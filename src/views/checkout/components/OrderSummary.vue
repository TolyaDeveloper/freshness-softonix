<template>
  <div class="max-w-[470px] w-full border border-primary-300 rounded-[12px] p-[15px]">
    <h2 class="mb-[10px] font-poppins text-[22px] font-semibold">
      Order Summary
    </h2>
    <p class="mb-[40px] text-[12px] text-primary-500">
      Price can change depending on shipping method and taxes of your state.
    </p>
    <ul>
      <CheckoutProduct
        v-for="product in cartStore.cartProducts"
        :key="product.id"
        :product="product"
      />
    </ul>
    <el-divider class="border-primary-700 opacity-5" />
    <el-input v-model="promocode" class="mt-[30px]" placeholder="Apply promo code" size="large">
      <template #suffix>
        <el-button
          class="text-primary-700 hover:text-primary-600 text-[12px] sm:text-[14px] font-bold font-poppins"
          type="info"
        >
          Apply now
        </el-button>
      </template>
    </el-input>
    <el-divider class="border-primary-700 opacity-5" />
    <div class="mt-[30px] flex items-center justify-between">
      <p class="font-poppins font-semibold">Total:</p>
      <p class="font-poppins font-semibold text-[20px] text-accent-400">
        {{ $filters.currencyParser(totalPrice) }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { routeNames } from '@/router/route-names'

const cartStore = useCartStore()
const router = useRouter()
const promocode = ref('')

const totalPrice = computed(() => {
  return cartStore.getTotalCartPrice()
})

onMounted(() => {
  if (!cartStore.cartProducts.length) {
    router.push({ name: routeNames.cart })
  }
})

</script>
