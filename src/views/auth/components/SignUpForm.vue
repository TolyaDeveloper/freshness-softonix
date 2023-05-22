<template>
  <el-card class="max-w-[500px] w-full mx-auto">
    <p class="text-center mb-6">
      Already have an account?&nbsp;
      <router-link
        class="underline text-accent-400"
        :to="{ name: $routeNames.login }"
      >
        Log in
      </router-link>
    </p>
    <el-form
      ref="formRef"
      :model="formModel"
      :rules="formRules"
      label-position="top"
      @submit.prevent="submitForm"
    >
      <el-form-item label="Email" prop="email">
        <el-input v-model="formModel.email" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="formModel.password" type="password" show-password />
      </el-form-item>
      <el-form-item label="Confirm password" prop="confirmPassword">
        <el-input v-model="formModel.confirmPassword" type="password" show-password />
      </el-form-item>
      <el-form-item label="First Name" prop="firstName">
        <el-input v-model="formModel.firstName" />
      </el-form-item>
      <el-form-item label="Last Name" prop="lastName">
        <el-input v-model="formModel.lastName" />
      </el-form-item>
      <el-form-item label="Default delivery address" prop="defaultAddress">
        <el-select
          v-model="formModel.defaultAddress"
          placeholder="Select a city"
          clearable
        >
          <el-option label="Lviv" value="Lviv" />
          <el-option label="Kyiv" value="Kyiv" />
        </el-select>
      </el-form-item>
      <el-button class="ml-auto block" type="primary" native-type="submit">
        Sign up
      </el-button>
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
const formRef = useElFormRef()

const formModel = useElFormModel({
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
  defaultAddress: ''
})

const formRules = useElFormRules({
  email: [
    useRequiredRule(),
    useEmailRule()
  ],
  password: [
    useRequiredRule(),
    useMinLenRule(6)
  ],
  confirmPassword: [
    useRequiredRule(),
    useConfirmPassword(toRefs(formModel).password)
  ],
  firstName: [
    useRequiredRule()
  ],
  lastName: [
    useRequiredRule()
  ]
})

const submitForm = async () => {
  formRef.value.validate(valid => {
    if (valid) {
      alert('submitted')
      console.log(formModel)
      resetForm()
    }
  })
}

const resetForm = () => {
  formRef.value.resetFields()
}
</script>
