<template>
  <el-form
    :model="formModel"
    @submit.prevent="submitForm()"
  >
    <el-form-item class="mb-0" prop="searchQuery">
      <el-input
        v-model="formModel.searchQuery"
        size="large"
        placeholder="Search Products, categories ..."
        clearable
        @clear="clearSearch"
      >
        <template #suffix>
          <button type="submit" aria-label="Search">
            <IconSearch />
          </button>
        </template>
      </el-input>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { routeNames } from '@/router/route-names'

const router = useRouter()
const route = useRoute()

const formModel = useElFormModel({
  searchQuery: route.query.searchQuery as string ?? ''
})

const submitForm = async (force?: boolean) => {
  if (formModel.searchQuery.trim() !== '' || force) {
    router.push({ name: routeNames.products, query: { ...route.query, searchQuery: formModel.searchQuery } })
  }
}

const clearSearch = () => {
  const query = { ...route.query }
  delete query.searchQuery

  router.push({ query })
}
</script>
