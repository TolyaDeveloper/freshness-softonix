<template>
  <el-form
    ref="formRef"
    :model="formModel"
    :rules="formRules"
    :show-message="false"
    @submit.prevent="submitForm"
  >
    <el-form-item class="mb-0" prop="searchQuery">
      <el-input
        v-model="formModel.searchQuery"
        size="large"
        placeholder="Search Products, categories ..."
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
const formRef = useElFormRef()

const formModel = useElFormModel({
  searchQuery: ''
})

const formRules = useElFormRules({
  searchQuery: [
    useRequiredRule()
  ]
})

const submitForm = async () => {
  formRef.value.validate(valid => {
    if (valid) {
      alert('submitted')
    }
  })
}
</script>
