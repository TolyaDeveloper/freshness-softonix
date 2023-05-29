<template>
  <el-breadcrumb class="text-[12px]">
    <el-breadcrumb-item :to="{ name: $routeNames.home }">
      Homepage
    </el-breadcrumb-item>
    <el-breadcrumb-item>
      Category name here
    </el-breadcrumb-item>
  </el-breadcrumb>
  <div class="mt-[25px] flex justify-between items-center">
    <h1 class="font-poppins text-[32px] leading-[48px] font-semibold">
      Category name here
    </h1>
    <ProductViewsSwitch v-model="productView" />
  </div>
  <div class="mt-[20px] flex justify-between items-center">
    <FilterByPrice v-model="filters.priceSortType" />
    <ItemsPerPage v-model="filters.itemsPerPage" />
  </div>
  <div class="grid grid-cols-[270px_1fr] gap-[30px] mt-[70px]">
    <AsideCategories />
    <div>
      <ProductsSkeleton v-if="isLoading" :view="productView" :limit="1" />
      <ProductContainer v-else :products="categoryProducts" :view="productView" />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const totalProducts = ref(0)
const categoryProducts = ref<IProduct[]>([])
const isLoading = ref(true)
const productView = ref<TProductViews>('grid')

const filters = ref<IFilters>({
  categoryId: route.params.id as string,
  filterByBrand: [],
  filterByMinPrice: 0,
  filterByMaxPrice: 10,
  filterByRating: [],
  itemsPerPage: 10,
  page: 1,
  priceSortType: 'DEFAULT'
})

const getCategoryProductsWithCount = async () => {
  try {
    isLoading.value = true

    const { data, count } = await categoryProductsService.getCategoryProductsWithCount(filters.value)

    totalProducts.value = count ?? 0

    if (!data) {
      return
    }

    categoryProducts.value = data
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}

watch(() => filters, () => {
  getCategoryProductsWithCount()
}, { deep: true, immediate: true })

watch(() => route.params, () => {
  filters.value.categoryId = route.params.id as string
})
</script>
