<template>
  <el-card class="max-w-[500px] w-full mx-auto">
    <el-form
      ref="formRef"
      :model="formModel"
      :rules="formRules"
      label-position="top"
      @submit.prevent="submitForm"
    >
      <el-form-item label="Name" prop="name">
        <el-input v-model="formModel.name" />
      </el-form-item>
      <el-form-item label="Description" prop="description">
        <el-input v-model="formModel.description" type="textarea" resize="none" :rows="3" />
      </el-form-item>
      <el-form-item label="Category" prop="category">
        <el-select
          v-model="formModel.category"
          placeholder="Select a category"
        >
          <el-option
            v-for="category in generalStore.categories"
            :key="category.id"
            :value="category.id"
            :label="category.name"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="Brand" prop="brand">
        <el-select
          v-model="formModel.brand"
          placeholder="Select a brand"
          popper-class="custom-popper"
        >
          <el-option
            v-for="brand in generalStore.brands"
            :key="brand.id"
            :value="brand.id"
            :label="brand.name"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="Price" prop="price">
        <el-input v-model="formModel.price" />
      </el-form-item>
      <el-form-item label="Product unit" prop="unit">
        <el-input v-model="formModel.unit" placeholder="G, KG, Liters..." />
      </el-form-item>
      <el-form-item label="1 unit measure" prop="qty">
        <el-input v-model="formModel.qty" placeholder="100g, 1kg..." />
      </el-form-item>
      <el-button class="ml-auto block" type="primary" native-type="submit">
        Save
      </el-button>
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
import { notificationHandler } from '@/helpers'

const props = defineProps<{ product?: IProduct }>()

const generalStore = useGeneralStore()
const formRef = useElFormRef()

const formModel = useElFormModel({
  name: props.product?.name ?? '',
  description: props.product?.description ?? '',
  category: props.product?.category.id ?? '',
  brand: props.product?.brand.id ?? '',
  price: props.product?.price ?? '',
  unit: props.product?.unit ?? '',
  qty: props.product?.qty ?? ''
})

const formRules = useElFormRules({
  name: [
    useRequiredRule()
  ],
  description: [
    useRequiredRule()
  ],
  category: [
    useRequiredRule()
  ],
  brand: [
    useRequiredRule()
  ],
  price: [
    useRequiredRule()
  ],
  unit: [
    useRequiredRule()
  ],
  qty: [
    useRequiredRule()
  ]
})

onMounted(() => {
  generalStore.getBrands()
})

const updateProduct = async () => {
  try {
    if (!props.product) {
      return
    }

    await productDetailsService.updateProduct(formModel, props.product?.id) // types issue

    notificationHandler('Product updated', { type: 'success' })
  } catch (error) {
    notificationHandler(error as Error)
  }
}

const submitForm = () => {
  formRef.value.validate(async valid => {
    if (valid) {
      updateProduct()
    }
  })
}

</script>
