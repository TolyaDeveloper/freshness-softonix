<template>
  <el-button-group>
    <el-button
      type="default"
      @click="push({ name: $routeNames.editProduct, params: { id: product.id } })"
    >
      Edit
      <template #icon>
        <IconEdit />
      </template>
    </el-button>
    <el-button
      type="default"
      @click="push({ name: $routeNames.addProduct })"
    >
      New
      <template #icon>
        <IconPlus class="stroke-primary-500" />
      </template>
    </el-button>
    <el-popconfirm
      width="250"
      title="Are you sure to this product?"
      cancel-button-text="Cancel"
      confirm-button-text="Delete"
      confirm-button-type="danger"
      @confirm="deleteProduct"
    >
      <template #reference>
        <el-button type="danger" :loading="isLoading">
          Delete
          <template #icon>
            <IconDelete />
          </template>
        </el-button>
      </template>
    </el-popconfirm>
  </el-button-group>
</template>

<script setup lang="ts">
import { notificationHandler } from '@/helpers'
import { routeNames } from '@/router/route-names'

const props = defineProps<{ product: TProduct }>()

const { push } = useRouter()

const isLoading = ref(false)

const deleteProduct = async () => {
  isLoading.value = true

  try {
    await productDetailsService.deleteProduct(props.product.id)

    notificationHandler('Product has been deleted', { type: 'success' })
    push({ name: routeNames.products, query: { id: props.product.category.id } })
  } catch (error) {
    notificationHandler(error as Error)
  } finally {
    isLoading.value = false
  }
}
</script>
