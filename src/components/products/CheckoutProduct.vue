<template>
  <li class="flex items-start flex-col sm:flex-row p-[15px]">
    <div class="mr-[15px] w-[100px] shrink-0">
      <el-image
        class="max-w-[100px] w-full h-[80px] rounded-[12px] shrink-0 block"
        fit="cover"
        :src="imageHasError ? NoProductThumbnail : product.image"
        :alt="product.name"
        @error="imageHasError = true"
      />
      <button
        class="mt-[12px]"
        type="button"
        aria-label="Remove from checkout"
        title="Remove from checkout"
        @click="cartStore.deleteProductFromCart(product.id)"
      >
        <IconTimes class="mr-[6px]" />
        Remove
      </button>
    </div>
    <div class="w-full mt-[30px] sm:mt-0">
      <h3 class="font-poppins font-medium truncate">{{ product.name }}</h3>
      <div class="my-[15px]">
        <div class="grid grid-cols-[auto_auto] justify-between gap-[15px] mb-[6px]">
          <p class="text-primary-500">Category:</p>
          <router-link
            class="text-accent-400 link"
            :to="{ name: $routeNames.products, query: { id: product.category.id } }"
          >
            {{ product.category.name }}
          </router-link>
        </div>
        <div class="grid grid-cols-[auto_auto] justify-between gap-[15px] mb-[6px]">
          <p class="text-primary-500">Farm:</p>
          <p>{{ product.brand.name }}</p>
        </div>
        <div class="grid grid-cols-[auto_auto] justify-between gap-[15px]">
          <p class="text-primary-500">1 unit:</p>
          <p>{{ product.qty }} {{ product.unit }}</p>
        </div>
      </div>
      <el-rate v-if="product.rating" :model-value="product.rating" class="h-[20px]" disabled />
      <div class="flex items-center justify-between">
        <p class="mt-[15px] font-poppins font-semibold text-[18px] text-accent-400">
          {{ $filters.currencyParser(product.price) }}
        </p>
        <div>
          <p class="mb-[4px] flex justify-center">
            <span>{{ quantity * product.qty }}</span>
            &nbsp;
            <span>{{ product.unit }}/{{ product.unit }}s</span>
          </p>
          <QuantityInput v-model="quantity" :disabled="true" :controls="false" />
        </div>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import NoProductThumbnail from '@/assets/images/no-product-thumbnail.png'

const props = defineProps<{
  product: IProduct
}>()

const cartStore = useCartStore()
const authStore = useAuthStore()

const quantity = ref(authStore.user?.cart ? authStore.user?.cart[props.product.id] : 1)

const imageHasError = ref(false)
</script>
