<template>
  <div class="flex items-center">
    <QuantityInput
      v-if="!isAlreadyInCart"
      v-model="quantity"
      class="mr-[24px]"
    />
    <router-link
      v-if="isAlreadyInCart" #default="{ navigate }" :to="{ name: $routeNames.home }"
      custom
    >
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
      class="flex items-center"
      type="primary"
      round
      :disabled="!validateQuantityInput()"
    >
      <IconPlus class="mr-[12px]" />
      Add to cart
    </el-button>
  </div>
</template>

<script setup lang="ts">
defineProps<{ product: IProduct }>()

const quantity = ref(1)
const isAlreadyInCart = ref(false)

const validateQuantityInput = () => {
  return quantity.value >= 1 && !isNaN(quantity.value)
}
</script>
