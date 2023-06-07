<template>
  <Breadcrumbs :breadcrumbs="[{ title: 'Orders history' }]" />
  <BlockTitle class="mt-[30px] mb-[30px] text-center">📦 Orders history</BlockTitle>
  <el-skeleton v-if="isLoading" />
  <div v-else-if="!orders.length" class="text-center mt-[100px]">
    <h2>
      No orders yet
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
    <OrderHistoryProduct
      v-for="order in orders"
      :key="order.id"
      :order="order"
      :products="products"
    />
  </template>
</template>

<script setup lang="ts">
const authStore = useAuthStore()
const orders = ref<IOrder[]>([])
const products = ref<IProduct[]>([])
const isLoading = ref(true)

const getOrdersByUserId = async () => {
  try {
    if (!authStore.user) {
      return
    }

    const { data: userOrders } = await ordersService.getOrdersIdsByUserId(authStore.user.id)

    if (!userOrders?.length) {
      return
    }

    orders.value = userOrders

    const productIds = userOrders.flatMap(order => Object.keys(order.products))

    const { data } = await generalService.getProductsByIds(productIds)

    if (!data?.length) {
      return
    }

    products.value = data
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  getOrdersByUserId()
})
</script>
