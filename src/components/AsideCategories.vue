<template>
  <el-skeleton v-if="generalStore.initialLoading" :rows="5" />
  <aside v-else>
    <BlockTitle class="mb-[15px]">Category menu</BlockTitle>
    <ul>
      <li
        v-for="category in generalStore.categories"
        :key="category.id"
        class="mb-[6px] text-accent-400"
      >
        <router-link
          class="link"
          :to="{ name: $routeNames.products, query: { ...route.query, id: category.id } }"
        >
          {{ category.name }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
const generalStore = useGeneralStore()
const route = useRoute()
</script>
