<template>
  <el-form-item>
    <el-input
      v-model="modelValue.additionalInformation"
      type="textarea"
      placeholder="Need a specific delivery day? Sending a gitf? Let’s say ..."
      :rows="5"
      resize="none"
    />
  </el-form-item>
</template>

<script setup lang="ts">
const modelValue = defineModel<ICheckout>({ required: true })
</script>
