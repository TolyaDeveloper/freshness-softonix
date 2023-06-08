<template>
  <Breadcrumbs
    v-if="categoryName || !route.query.searchQuery"
    :breadcrumbs="[{ title: categoryName }]"
  />
  <div class="mt-[25px] flex justify-between md:items-center flex-col md:flex-row">
    <div v-if="generalStore.initialLoading">
      <el-skeleton style="width: 240px; height: 48px" animated>
        <template #template>
          <el-skeleton-item variant="caption" style="height: 48px" />
        </template>
      </el-skeleton>
    </div>
    <h1 v-else class="font-poppins md:max-w-[350px] text-[32px] leading-[48px] font-semibold md:truncate">
      {{ !route.query.searchQuery ? categoryName : `«Search: ${route.query.searchQuery}»` }}
    </h1>
    <div class="flex items-center mt-[15px] sm:mt-0">
      <ProductViewsSwitch v-model="productView" />
      <p class="ml-[24px]">
        <el-tag round>{{ totalProducts }}</el-tag>
        <span class="ml-[4px] text-[12px] text-primary-500">Products</span>
      </p>
    </div>
  </div>
  <div class="mt-[20px] flex justify-between sm:items-center flex-col sm:flex-row">
    <FilterByPrice v-model="filters.priceSortType" />
    <ItemsPerPage v-model="filters.itemsPerPage" class="mt-[15px] sm:mt-0" />
  </div>
  <button
    class="mt-[20px] flex items-center md:hidden"
    type="button"
    aria-label="Open filters"
    @click="isMobileMenuOpened = !isMobileMenuOpened"
  >
    <IconFilters />
    <span class="ml-[5px] font-poppins">
      {{ isMobileMenuOpened ? 'Hide filters' : 'Open filters' }}
    </span>
  </button>
  <div class="relative grid grid-cols-1 md:grid-cols-[270px_1fr] gap-[30px] mt-[30px] md:mt-[70px]">
    <div
      class="md:block absolute md:static z-10 bg-primary-100 md:bg-transparent p-[15px] md:p-0
             rounded-[12px] border border-primary-300 md:border-none"
      :class="{ [`hidden`]: !isMobileMenuOpened }"
    >
      <AsideCategories />
      <FilterByBrand v-model="filters.filterByBrand" class="mt-[50px]" :brands="brands" />
      <FilterByRating v-model="filters.filterByRating" class="mt-[50px]" />
      <FilterByRangePrice
        v-if="priceRange.length"
        v-model="priceRange" class="mt-[50px]"
        :min="minMaxPrices[0]"
        :max="minMaxPrices[1]"
        @change="getProductsWithCount"
      />
      <el-button class="mt-[30px]" round size="large" type="default" @click="reset">Reset</el-button>
    </div>
    <div>
      <ProductsSkeleton v-if="isLoading" :view="productView" :limit="3" />
      <h2
        v-else-if="!products.length"
        class="text-center font-poppins font-semibold text-[18px]"
      >
        🍴 No products found
      </h2>
      <ProductContainer v-else :products="products" :view="productView" />
    </div>
  </div>
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
const { replace } = useRouter()
const generalStore = useGeneralStore()
const authStore = useAuthStore()

const totalProducts = ref(0)
const products = ref<IProduct[]>([])
const brands = ref<IBrand[]>([])
const isLoading = ref(true)
const productView = ref<TProductViews>('grid')
const minMaxPrices = ref<number[]>([])
const isMobileMenuOpened = ref(false)

const { getFiltersByQuery, defaultFilters } = useFilters()
const filters = ref(getFiltersByQuery())
const priceRange = ref<number[]>([])

const categoryName = computed(() => {
  return findCategory(generalStore.categories, route.query.id as string) ?? ''
})

const getProductsWithCount = async () => {
  isLoading.value = true

  try {
    const { data, count } = await categoryProductsService.getProductsWithCount(
      filters.value,
      priceRange.value,
      route.query.id as string,
      route.query.searchQuery as string
    )

    totalProducts.value = count ?? 0

    if (!data?.length) {
      return
    }

    products.value = data

    if (route.query.searchQuery) {
      authStore.updateLastSearchedCategory(data[0].category.id)
    }
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}

const getMinMaxPrices = async () => {
  try {
    const { data } = await categoryProductsService.getMinMaxPrices({
      filterByBrand: filters.value.filterByBrand,
      filterByRating: filters.value.filterByRating
    }, route.query.id as string)

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
  filters.value = { ...defaultFilters }
  isMobileMenuOpened.value = false
}

onMounted(() => {
  getBrands()
})

watch(() => route.query.searchQuery, async () => {
  if (!route.query.searchQuery) {
    await replace({ query: { ...route.query, ...filters.value, id: generalStore.categories[0].id } })
  }

  reset()
})

watch(() => route.query.id, () => {
  if (!route.query.id) {
    return
  }

  reset()
})

watch(() => filters, () => {
  priceRange.value = []

  getMinMaxPrices()
  getProductsWithCount()

  replace({ query: { ...route.query, ...filters.value } })
}, { deep: true, immediate: true })
</script>
