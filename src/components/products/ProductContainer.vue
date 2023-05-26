<template>
  <ul class="grid-view">
    <template v-if="view === 'grid'">
      <li v-for="product in products" :key="product.id">
        <GridProductCard :product="product" />
      </li>
    </template>
  </ul>
  <ul class="list-view">
    <template v-if="view === 'list'">
      list view
    </template>
  </ul>
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
