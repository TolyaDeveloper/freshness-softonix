<template>
  <li class="relative mb-[15px] p-[15px] border border-primary-300 rounded-[12px] list-none">
    <el-tag class="mr-[15px] absolute right-0 top-[50%] translate-y-[-50%]" :type="elTagTypeMappings[order.status]">
      {{ order.status }}
    </el-tag>
    <div v-for="product in orderProducts" :key="product.id">
      <div class="py-[10px] flex items-center">
        <ProductImage
          class="max-w-[80px] w-full h-[80px] rounded-[12px] shrink-0"
          :src="product.image"
          :alt="product.name"
        />
        <div class="ml-[30px] max-w-[150px] shrink-0 w-full">
          <h3 class="font-poppins font-medium text-[15px] truncate">
            {{ product.name }}
          </h3>
          <p class="font-poppins font-semibold text-[18px] text-accent-400">
            {{ $filters.currencyParser(product.price) }}
            <span>/ {{ product.qty }}  {{ product.unit }}</span>
          </p>
          <p class="mt-[10px] text-[12px] font-poppins">Quantity: {{ order.products[product.id] }}</p>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { TagProps } from 'element-plus'

const props = defineProps<{
  order: IOrder
  products: IProduct[]
}>()

const elTagTypeMappings: Record<TOrderStatuses, TagProps['type']> = {
  Processing: 'warning',
  Canceled: 'danger',
  Completed: 'success'
}

const orderProducts = ref(props.products.filter(product => {
  return Object.keys(props.order.products).includes(product.id)
}))
</script>
