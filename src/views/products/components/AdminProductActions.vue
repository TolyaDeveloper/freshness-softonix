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
    >
      <template #reference>
        <el-button type="danger">
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
defineProps<{ product: IProduct }>()

const { push } = useRouter()
</script>
