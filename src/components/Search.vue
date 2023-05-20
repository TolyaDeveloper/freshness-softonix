<template>
  <form autocomplete="off">
    <ElInput
      v-model="searchQuery"
      size="large"
      placeholder="Search Products, categories ..."
    >
      <template #suffix>
        <button type="submit" aria-label="Search">
          <SearchIcon />
        </button>
      </template>
    </ElInput>
  </form>
</template>

<script setup lang="ts">
import SearchIcon from '@/assets/icons/SearchIcon.vue'

const searchQuery = ref('')
</script>
