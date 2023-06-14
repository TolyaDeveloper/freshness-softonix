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
    <el-input
      v-if="!isPromocodeApplied"
      v-model="promocode"
      class="mt-[30px]"
      placeholder="Apply promo code"
      size="large"
    >
      <template #suffix>
        <el-button
          class="text-[12px] sm:text-[14px] font-bold font-poppins"
          type="primary"
          :disabled="!promocode.length"
          @click="applyPromocode"
        >
          Apply now
        </el-button>
      </template>
    </el-input>
    <el-divider v-if="!isPromocodeApplied" class="border-primary-700 opacity-5" />
    <div class="mt-[30px] flex items-center">
      <p class="font-poppins font-semibold">Total:</p>
      <p
        class="ml-auto font-poppins font-semibold text-[20px] text-accent-400"
        :class="{ [`line-through`]: isPromocodeApplied }"
      >
        {{ $filters.currencyParser(cartStore.totalCartPrice) }}
      </p>
      <p
        v-if="isPromocodeApplied"
        class="ml-[30px] font-poppins font-semibold text-[20px] text-accent-400"
      >
        {{ $filters.currencyParser(priceWithPromocode) }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { notificationHandler } from '@/helpers'
import { routeNames } from '@/router/route-names'

const isPromocodeApplied = defineModel<boolean>({ required: true })

const cartStore = useCartStore()
const authStore = useAuthStore()
const router = useRouter()
const promocode = ref('')
const priceWithPromocode = ref(0)

const applyPromocode = () => {
  if (!authStore.user?.promocode || authStore.user?.promocode?.code !== promocode.value) {
    return notificationHandler('Invalid promocode')
  }

  priceWithPromocode.value = Number(
    (
      cartStore.totalCartPrice - cartStore.totalCartPrice * (authStore.user.promocode.discount / 100)
    ).toFixed(2)
  )
  isPromocodeApplied.value = true

  notificationHandler('Promocode successfully applied', { type: 'success' })
}

onMounted(() => {
  if (!cartStore.cartProducts.length) {
    router.push({ name: routeNames.cart })
  }
})

</script>
