<template>
  <el-form
    :model="formModel"
    @submit.prevent="submitForm"
  >
    <el-form-item class="mb-0" prop="searchQuery">
      <el-input
        v-model="formModel.searchQuery"
        size="large"
        placeholder="Search Products, categories ..."
      >
        <template #suffix>
          <el-button class="border-none p-0 bg-transparent" native-type="submit" aria-label="Search">
            <IconSearch />
          </el-button>
        </template>
      </el-input>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">

const formModel = useElFormModel({
  searchQuery: ''
})

const submitForm = async () => {
  if (formModel.searchQuery.trim() !== '') {
    alert('submit')
  }
}
</script>
