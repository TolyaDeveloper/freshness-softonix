<template>
  <template v-if="view === 'grid'">
    <ul class="grid-view">
      <li v-for="product in products" :key="product.id">
        <GridProductCard :product="product" />
      </li>
    </ul>
  </template>
  <template v-if="view === 'list'">
    <ul class="list-view">
      <li v-for="product in products" :key="product.id">
        <ListProductCard :product="product" />
      </li>
    </ul>
  </template>
</template>

<script setup lang="ts">
defineProps<{ products: IProduct[]; view: TProductViews }>()
</script>

<style lang="scss">
.grid-view {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 30px;
}

.list-view {
  li + li {
    margin-top: 30px;
  }
}
</style>
