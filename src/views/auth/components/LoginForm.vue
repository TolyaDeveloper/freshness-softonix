<template>
  <el-card class="max-w-[500px] w-full mx-auto">
    <p class="text-center mb-6">
      Do not have an account?&nbsp;
      <router-link
        class="underline text-accent-400"
        :to="{ name: $routeNames.signup }"
      >
        Sign up
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
      <el-button class="ml-auto block" type="primary" native-type="submit" :loading="isLoading">
        Log in
      </el-button>
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
import { ElNotification } from 'element-plus'

const formRef = useElFormRef()
const { login } = useAuthStore()
const isLoading = ref(false)
const router = useRouter()
const { $routeNames } = useGlobalProperties()

const formModel = useElFormModel({
  email: '',
  password: ''
})

const formRules = useElFormRules({
  email: [
    useRequiredRule(),
    useEmailRule()
  ],
  password: [
    useRequiredRule(),
    useMinLenRule(6)
  ]
})

const notifyFailedLogin = (message: string) => {
  ElNotification({
    title: 'Login error',
    message,
    type: 'error',
    duration: 0
  })
}

const submitForm = () => {
  formRef.value.validate(valid => {
    if (valid) {
      isLoading.value = true

      login(formModel)
        .then(() => {
          router.push({ name: $routeNames.home })
        })
        .catch((error) => {
          notifyFailedLogin(error.message)
        })
        .finally(() => {
          isLoading.value = false
        })
    }
  })
}
</script>
