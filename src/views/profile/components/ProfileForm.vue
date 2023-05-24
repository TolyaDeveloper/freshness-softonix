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
    <el-form-item label="Default delivery city" prop="address.city">
      <el-select
        v-model="editFormModel.address.city"
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
    <el-form-item label="Default delivery street" prop="address.street">
      <el-input v-model="formModel.address.street" :disabled="!isEditMode" />
    </el-form-item>
    <div class="flex justify-between items-center mt-16">
      <div>
        <template v-if="isEditMode">
          <el-button type="success" native-type="submit">
            Save
          </el-button>
          <el-button type="default" :loading="isLoading" @click="removeEditMode">
            Cancel
          </el-button>
        </template>
        <template v-else>
          <el-button type="default" :loading="isLoading" @click="setEditMode">
            Edit profile
          </el-button>
        </template>
      </div>
      <el-button type="danger" plain @click="logout">
        Logout
      </el-button>
    </div>
  </el-form>
</template>

<script setup lang="ts">
import { cities } from '@/constants/cities'
import { ElNotification } from 'element-plus'

const formRef = useElFormRef()
const inputRef = ref<TNullable<HTMLInputElement>>(null)
const isLoading = ref(false)
const isEditMode = ref(false)

const store = useAuthStore()
const { user } = storeToRefs(store)
const { logout } = store

const formModel = useElFormModel({
  email: user.value?.email,
  firstname: user.value?.firstname,
  lastname: user.value?.lastname,
  address: {
    city: user.value?.address.city,
    street: user.value?.address.street
  }
})

let editFormModel = useElFormModel({ ...JSON.parse(JSON.stringify(formModel)) })

const setEditMode = () => {
  isEditMode.value = true

  inputRef.value?.focus()
}

const removeEditMode = () => {
  editFormModel = useElFormModel({ ...JSON.parse(JSON.stringify(formModel)) })

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

const notifySuccessfulUpdate = () => {
  ElNotification({
    title: 'Account info updated',
    type: 'success'
  })
}

const submitForm = () => {
  formRef.value.validate(valid => {
    if (valid) {
      notifySuccessfulUpdate()
      isEditMode.value = false
    }
  })
}
</script>
