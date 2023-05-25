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
      <el-form-item label="First Name" prop="firstname">
        <el-input v-model="formModel.firstname" />
      </el-form-item>
      <el-form-item label="Last Name" prop="lastname">
        <el-input v-model="formModel.lastname" />
      </el-form-item>
      <el-form-item label="Default delivery city" prop="address.city">
        <el-select
          v-model="formModel.address.city"
          placeholder="Select a city"
          clearable
        >
          <el-option
            v-for="city in cities"
            :key="city.label"
            :label="city.label"
            :value="city.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="Default delivery street" prop="address.street">
        <el-input v-model="formModel.address.street" />
      </el-form-item>
      <el-button class="ml-auto block" type="primary" native-type="submit" :loading="isLoading">
        Sign up
      </el-button>
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
import { cities } from '@/constants/cities'
import { ElNotification } from 'element-plus'

const formRef = useElFormRef()
const { signup } = useAuthStore()
const router = useRouter()
const { $routeNames } = useGlobalProperties()

const isLoading = ref(false)

const formModel = useElFormModel({
  email: '',
  password: '',
  confirmPassword: '',
  firstname: '',
  lastname: '',
  address: {
    city: '',
    street: ''
  }
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
  firstname: [
    useRequiredRule()
  ],
  lastname: [
    useRequiredRule()
  ]
})

const notifySuccessfulSignUp = () => {
  ElNotification({
    title: 'Account created',
    message: 'Now, check your email to confirm it',
    type: 'success',
    duration: 0
  })
}

const notifyFailedSignUp = (message: string) => {
  ElNotification({
    title: 'Signup error',
    message,
    type: 'error',
    duration: 0
  })
}

const submitForm = () => {
  formRef.value.validate(async valid => {
    if (valid) {
      const { confirmPassword, ...credentials } = formModel
      isLoading.value = true

      try {
        await signup(credentials)

        notifySuccessfulSignUp()
        router.push({ name: $routeNames.login })
      } catch (error) {
        if (error instanceof Error) {
          notifyFailedSignUp(error.message)
        }
      } finally {
        isLoading.value = false
      }
    }
  })
}

</script>
