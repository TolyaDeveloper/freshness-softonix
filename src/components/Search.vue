<template>
  <el-form
    :model="formModel"
    @submit.prevent="submitForm"
  >
    <el-form-item class="mb-0" prop="searchQuery">
      <el-input
        v-model="formModel.searchQuery"
        size="large"
        placeholder="Search Products ..."
        clearable
        @clear="clearSearch"
      >
        <template #suffix>
          <el-button
            class="border-none p-0 bg-transparent"
            native-type="submit"
            aria-label="Search"
          >
            <IconSearch />
          </el-button>
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

const submitForm = async () => {
  if (formModel.searchQuery.trim() !== '') {
    router.push({ name: routeNames.products, query: { ...route.query, searchQuery: formModel.searchQuery } })
  }
}

const clearSearch = () => {
  const query = { ...route.query }
  delete query.searchQuery

  router.push({ query })
}
</script>
