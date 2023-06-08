<template>
  <el-skeleton v-if="isLoading" />
  <template v-if="product">
    <Breadcrumbs
      :breadcrumbs="[
        { title: product.category.name, to: { name: $routeNames.products, query: { id: product.category.id } } },
        { title: product.name }
      ]"
    />
    <div
      class="mt-[30px] grid grid-cols-1 md:grid-cols-[minmax(320px,_380px)_minmax(320px,_1fr)] xl:grid-cols-[570px_1fr]
             gap-[30px]"
    >
      <ProductImage
        class="max-w-[400px] md:max-w-[570px] w-full h-[300px] md:h-[435px] rounded-[12px]"
        :src="product.image"
        :alt="product.name"
      />
      <div>
        <h1 class="font-poppins font-semibold text-[32px]">
          {{ product.name }}
        </h1>
        <el-rate v-if="product.rating" :model-value="product.rating" class="mt-[15px] h-[20px]" disabled />
        <p class="mt-[30px] text-[17px]">{{ product.description }}</p>
        <DetailedProductParameters :product="product" />
        <div
          class="p-[20px] flex items-center md:items-start lg:items-center justify-between
                 flex-col sm:flex-row md:flex-col lg:flex-row
                 border border-primary-300 rounded-[12px]"
        >
          <p
            class="mr-[20px] mb-[20px] sm:mb-0 md:mb-[20px] lg:mb-0
                   font-poppins font-semibold text-[26px] text-accent-400"
          >
            {{ $filters.currencyParser(product.price) }}
          </p>
          <AddToCartWithQuantity :product="product" />
        </div>
        <template v-if="product.vitamins?.length">
          <p class="mt-[30px] font-poppins font-semibold text-[12px]">Vitamins</p>
          <el-divider class="my-[10px]" />
          <ul>
            <li v-for="vitamin in product.vitamins" :key="vitamin" class="text-primary-600 mb-[5px]">
              {{ vitamin }}
            </li>
          </ul>
        </template>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import { productDetailsService } from '@/views/products/products.service'

const route = useRoute()

const product = ref<TNullable<IProduct>>(null)
const isLoading = ref(true)

const getProductDetails = async () => {
  try {
    const { data } = await productDetailsService.getProductById(route.params.id as string)

    if (!data) {
      return
    }

    product.value = data[0]
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  getProductDetails()
})
</script>
