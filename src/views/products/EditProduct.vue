<template>
  <el-skeleton v-if="isLoading" />
  <template v-if="product">
    <Breadcrumbs
      :breadcrumbs="[
        { title: product.name, to: { name: $routeNames.productDetails, params: { id: product.id } } },
        { title: 'Edit' }
      ]"
    />
    <BlockTitle class="mt-[30px] text-center">✏️ Edit product</BlockTitle>
    <ProductForm class="mt-[50px]" :product="product" />
  </template>
</template>

<script setup lang="ts">
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
