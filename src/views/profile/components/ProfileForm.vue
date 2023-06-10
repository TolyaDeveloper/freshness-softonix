<template>
  <el-form
    ref="formRef"
    class="max-w-[500px] w-full mt-[30px]"
    :model="editFormModel"
    :rules="formRules"
    label-position="top"
    :hide-required-asterisk="!isEditMode"
    @submit.prevent="submitForm"
  >
    <el-form-item label="Email" prop="email">
      <el-input v-model="editFormModel.email" disabled />
    </el-form-item>
    <el-form-item label="First Name" prop="firstname">
      <el-input ref="inputRef" v-model="editFormModel.firstname" :disabled="!isEditMode" />
    </el-form-item>
    <el-form-item label="Last Name" prop="lastname">
      <el-input v-model="editFormModel.lastname" :disabled="!isEditMode" />
    </el-form-item>
    <el-form-item label="Default delivery city" prop="city">
      <el-select
        v-model="editFormModel.city"
        :disabled="!isEditMode"
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
    <el-form-item label="Default delivery street" prop="street">
      <el-input v-model="editFormModel.street" :disabled="!isEditMode" />
    </el-form-item>
    <el-form-item label="Phone" prop="phone">
      <el-input v-model="editFormModel.phone" :disabled="!isEditMode" />
    </el-form-item>
    <div class="mt-16">
      <template v-if="isEditMode">
        <el-button type="success" native-type="submit" :loading="isLoading" :disabled="isLoading">
          Save
        </el-button>
        <el-button type="default" @click="removeEditMode">
          Cancel
        </el-button>
      </template>
      <template v-else>
        <el-button type="default" @click="setEditMode">
          Edit profile
        </el-button>
      </template>
    </div>
  </el-form>
</template>

<script setup lang="ts">
import { cities } from '@/constants/cities'
import { notificationHandler } from '@/helpers'

const formRef = useElFormRef()
const authStore = useAuthStore()
const { user } = storeToRefs(authStore)

const inputRef = ref<TNullable<HTMLInputElement>>(null)
const isLoading = ref(false)
const isEditMode = ref(false)

let formModel = useElFormModel({
  email: user.value?.email,
  firstname: user.value?.firstname,
  lastname: user.value?.lastname,
  city: user.value?.city,
  street: user.value?.street,
  phone: user.value?.phone
})

let editFormModel = useElFormModel({ ...formModel })

const setEditMode = () => {
  isEditMode.value = true

  inputRef.value?.focus()
}

const removeEditMode = () => {
  editFormModel = useElFormModel({ ...formModel })

  isEditMode.value = false
}

const formRules = useElFormRules({
  firstname: [
    useRequiredRule()
  ],
  lastname: [
    useRequiredRule()
  ]
})

const submitForm = () => {
  formRef.value.validate(async valid => {
    if (valid) {
      isLoading.value = true

      try {
        const { email, ...updatedProfile } = editFormModel
        const { error } = await authService.updateProfile(user.value?.id, updatedProfile)

        if (error) {
          throw new Error(error.message)
        }

        formModel = { ...editFormModel }
        authStore.user = { ...authStore.user, ...updatedProfile } as TUser
        isEditMode.value = false
        notificationHandler('Account updated', { type: 'success' })
      } catch (error) {
        notificationHandler(error as Error)
      } finally {
        isLoading.value = false
      }
    }
  })
}
</script>
