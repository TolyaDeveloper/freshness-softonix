<template>
  <el-card class="max-w-[500px] w-full mx-auto">
    <el-upload
      drag
      :limit="1"
      :auto-upload="false"
      list-type="picture"
      :on-change="handleFileChange"
      :on-remove="handleFileRemove"
    >
      <p>Drop product image here or click to upload</p>
      <img
        v-if="imageUri"
        class="mt-[30px] max-w-[200px] w-full h-[200px] object-cover rounded-[12px]"
        :src="imageUri"
        :alt="product?.name"
      >
    </el-upload>
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
        <el-input v-model="formModel.qty" placeholder="1, 300, 100..." />
      </el-form-item>
      <el-button class="ml-auto block" type="primary" native-type="submit" :loading="isLoading">
        Save
      </el-button>
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
import type { UploadFile, UploadProps } from 'element-plus'

import { notificationHandler } from '@/helpers'
import { routeNames } from '@/router/route-names'

const props = defineProps<{ product?: TProduct }>()

const file = ref<TNullable<UploadFile>>(null)
const imageUri = ref<string | null | undefined>(props.product?.image)
const isLoading = ref(false)

const route = useRoute()
const { push } = useRouter()
const generalStore = useGeneralStore()
const formRef = useElFormRef()

const formModel = useElFormModel({
  name: props.product?.name ?? '',
  description: props.product?.description ?? '',
  category: props.product?.category.id ?? '',
  brand: props.product?.brand.id ?? '',
  price: props.product?.price ?? 0,
  unit: props.product?.unit ?? '',
  qty: props.product?.qty ?? 0
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

const handleFileChange: UploadProps['onChange'] = (uploadFile) => {
  file.value = uploadFile
  imageUri.value = uploadFile.url
}

const handleFileRemove: UploadProps['onRemove'] = () => {
  file.value = null
  imageUri.value = props.product?.image
}

const uploadImage = async () => {
  try {
    if (file.value) {
      const data = await filesService.uploadProductImage(file.value)

      if (!data) {
        return
      }

      imageUri.value = data.productUrl
    }
  } catch (error) {
    notificationHandler(error as Error)
  }
}

const updateProduct = async () => {
  isLoading.value = true

  try {
    if (!props.product) {
      return
    }

    await uploadImage()
    await productDetailsService.updateProduct({ ...formModel, image: imageUri.value }, props.product.id)

    notificationHandler('Product updated', { type: 'success' })
    push({ name: routeNames.productDetails, params: { id: props.product.id } })
  } catch (error) {
    notificationHandler(error as Error)
  } finally {
    isLoading.value = false
  }
}

const addProduct = async () => {
  isLoading.value = true

  try {
    await uploadImage()
    await productDetailsService.createProduct({ ...formModel, image: imageUri.value })

    notificationHandler('Product created', { type: 'success' })
    push({ name: routeNames.home })
  } catch (error) {
    notificationHandler(error as Error)
  } finally {
    isLoading.value = false
  }
}

const submitForm = () => {
  formRef.value.validate(async valid => {
    if (valid) {
      route.name === routeNames.editProduct ? updateProduct() : addProduct()
    }
  })
}
</script>

<style lang="scss">
.custom-popper {
  .el-select-dropdown__wrap {
    overflow-y: scroll;
  }

  .el-scrollbar__bar.is-vertical {
    display: none;
  }
}
</style>
