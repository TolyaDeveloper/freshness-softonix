<template>
  <div class="my-[30px] grid md:grid-cols-1 lg:grid-cols-2 gap-x-[70px] gap-y-[12px]">
    <div>
      <div class="grid grid-cols-[auto_auto] justify-between gap-[15px]">
        <p class="text-primary-500">Category:</p>
        <router-link :to="{ name: $routeNames.products, query: { id: product.category.id } }">
          {{ product.category.name }}
        </router-link>
      </div>
      <div class="mt-[12px] grid grid-cols-[auto_auto] justify-between gap-[15px]">
        <p class="text-primary-500">Stock:</p>
        <p>{{ product.in_stock > 0 ? 'In stock' : 'Not in stock' }}</p>
      </div>
    </div>
    <div>
      <div class="grid grid-cols-[auto_auto] justify-between gap-[15px]">
        <p class="text-primary-500">Farm:</p>
        <p level="body4">{{ product.brand.name }}</p>
      </div>
      <div class="mt-[12px] grid grid-cols-[auto_auto] justify-between gap-[15px]">
        <p class="text-primary-500">Buy by:</p>
        <p>{{ product.unit }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ product: IProduct }>()
</script>
