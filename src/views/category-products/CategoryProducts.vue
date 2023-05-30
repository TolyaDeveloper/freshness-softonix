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
    <div class="flex items-center">
      <ProductViewsSwitch v-model="productView" />
      <p class="ml-[24px]">
        <el-tag round>{{ totalProducts }}</el-tag>
        <span class="ml-[4px] text-[12px] text-primary-500">Products</span>
      </p>
    </div>
  </div>
  <div class="mt-[20px] flex justify-between items-center">
    <FilterByPrice v-model="filters.priceSortType" />
    <ItemsPerPage v-model="filters.itemsPerPage" />
  </div>
  <div class="grid grid-cols-[270px_1fr] gap-[30px] mt-[70px]">
    <div>
      <AsideCategories />
      <FilterByBrand class="mt-[50px]" />
      <FilterByRating v-model="filters.filterByRating" class="mt-[50px]" />
      <FilterByRangePrice
        v-model="filters.filterByRangePrice" class="mt-[50px]"
        :min="minMaxPrices[0]"
        :max="minMaxPrices[1]"
      />
    </div>
    <div>
      <ProductsSkeleton v-if="isLoading" :view="productView" :limit="1" />
      <ProductContainer v-else :products="categoryProducts" :view="productView" />
    </div>
  </div>
  <el-button class="mt-[30px]" round size="large" type="default" @click="reset">Reset</el-button>
  <div class="mt-[80px] flex items-center justify-between">
    <el-pagination
      v-model:current-page="filters.page"
      v-model:page-size="filters.itemsPerPage"
      :total="totalProducts"
      layout="prev, pager, next"
      background
      small
    />
    <p class="ml-[24px]">
      <el-tag round>{{ totalProducts }}</el-tag>
      <span class="ml-[4px] text-[12px] text-primary-500">Products</span>
    </p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { replace, push } = useRouter()

const totalProducts = ref(0)
const categoryProducts = ref<IProduct[]>([])
const isLoading = ref(true)
const productView = ref<TProductViews>('grid')
const minMaxPrices = ref<[number, number]>([0, 10])

const categoryId = ref<string>(route.params.id as string)
const filters = ref<IFilters>({
  filterByBrand: route.query.filterByBrand as string[] || [],
  filterByRangePrice: [minMaxPrices.value[0], minMaxPrices.value[1]],
  filterByRating: [route.query.filterByRating].flat(1).filter(Boolean).map(Number),
  itemsPerPage: Number(route.query.itemsPerPage) || 3,
  page: Number(route.query.page) || 1,
  priceSortType: route.query.priceSortType as TPriceFilters || 'DEFAULT'
})

const getCategoryProductsWithCount = async () => {
  try {
    isLoading.value = true

    const { data, count } = await categoryProductsService.getCategoryProductsWithCount(
      categoryId.value,
      filters.value
    )

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

const reset = () => {
  replace({ query: {} })
}

watch(() => route.params.id, () => {
  categoryId.value = route.params.id as string

  getCategoryProductsWithCount()

  console.log('watch 1')
}, { immediate: true })

watch(() => filters, () => {
  getCategoryProductsWithCount()

  console.log('watch 2')

  push({ query: { ...filters.value } })
}, { deep: true })
</script>
