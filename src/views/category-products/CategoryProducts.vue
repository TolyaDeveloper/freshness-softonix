<template>
  <el-breadcrumb class="text-[12px]">
    <el-breadcrumb-item :to="{ name: $routeNames.home }">
      Homepage
    </el-breadcrumb-item>
    <el-breadcrumb-item v-if="!generalStore.initialLoading">
      {{ categoryName }}
    </el-breadcrumb-item>
  </el-breadcrumb>
  <div class="mt-[25px] flex justify-between items-center">
    <el-skeleton v-if="generalStore.initialLoading" :rows="0" style="height: 48px;" />
    <h1 v-else class="font-poppins text-[32px] leading-[48px] font-semibold">
      {{ categoryName }}
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
      <FilterByBrand v-model="filters.filterByBrand" class="mt-[50px]" :brands="brands" />
      <FilterByRating v-model="filters.filterByRating" class="mt-[50px]" />
      <FilterByRangePrice
        v-if="priceRange.length"
        v-model="priceRange" class="mt-[50px]"
        :min="minMaxPrices[0]"
        :max="minMaxPrices[1]"
        @change="getCategoryProductsWithCount"
      />
    </div>
    <div>
      <ProductsSkeleton v-if="isLoading" :view="productView" :limit="1" />
      <h2
        v-else-if="!categoryProducts.length"
        class="text-center font-poppins font-semibold text-[18px]"
      >
        🍴 No products found
      </h2>
      <ProductContainer v-else :products="categoryProducts" :view="productView" />
    </div>
  </div>
  <el-button class="mt-[30px]" round size="large" type="default" @click="reset">Reset</el-button>
  <div class="mt-[80px] grid grid-cols-3">
    <el-pagination
      v-model:current-page="filters.page"
      v-model:page-size="filters.itemsPerPage"
      class="col-start-2 justify-center"
      :total="totalProducts"
      layout="prev, pager, next"
      background
      small
    />
    <p class="ml-[24px] text-right">
      <el-tag round>{{ totalProducts }}</el-tag>
      <span class="ml-[4px] text-[12px] text-primary-500">Products</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { findCategory } from '@/helpers'

const route = useRoute()
const { replace, push } = useRouter()
const generalStore = useGeneralStore()

const totalProducts = ref(0)
const categoryProducts = ref<IProduct[]>([])
const brands = ref<IBrand[]>([])
const isLoading = ref(true)
const productView = ref<TProductViews>('grid')
const minMaxPrices = ref<number[]>([])

const categoryName = computed(() => {
  return findCategory(generalStore.categories, route.params.id as string)
})
const priceRange = ref<number[]>([])
const filters = ref<IFilters>({
  filterByBrand: [route.query.filterByBrand as string[]].flat(1).filter(Boolean) || [],
  filterByRating: [route.query.filterByRating].flat(1).filter(Boolean).map(Number),
  itemsPerPage: Number(route.query.itemsPerPage) || 3,
  page: Number(route.query.page) || 1,
  priceSortType: route.query.priceSortType as TPriceFilters || 'DEFAULT'
})

const getCategoryProductsWithCount = async () => {
  isLoading.value = true

  try {
    const { data, count } = await categoryProductsService.getCategoryProductsWithCount(
      route.params.id as string,
      filters.value,
      priceRange.value
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

const getMinMaxPrices = async () => {
  try {
    const { data } = await categoryProductsService.getMinMaxPrices(route.params.id as string, {
      filterByBrand: filters.value.filterByBrand,
      filterByRating: filters.value.filterByRating
    })

    if (!data) {
      return
    }

    minMaxPrices.value[0] = Math.floor(data[0].min_price)
    minMaxPrices.value[1] = Math.ceil(data[0].max_price)
    priceRange.value = minMaxPrices.value
  } catch (error) {
    console.error(error)
  }
}

const getBrands = async () => {
  try {
    const { data } = await categoryProductsService.getBrands()

    if (!data) {
      return
    }

    brands.value = data
  } catch (error) {
    console.error(error)
  }
}

const reset = () => {
  replace({ query: {} })

  filters.value = {
    filterByBrand: [],
    filterByRating: [],
    itemsPerPage: 3,
    page: 1,
    priceSortType: 'DEFAULT'
  }
}

onMounted(() => {
  getBrands()
})

watch(() => route.params.id, () => {
  reset()
})

watch(() => filters, () => {
  priceRange.value = []

  getCategoryProductsWithCount()
  getMinMaxPrices()

  push({ query: { ...filters.value } })
}, { deep: true, immediate: true })
</script>
