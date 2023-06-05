<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-[30px] gap-y-[10px]">
    <el-form-item label="First name" prop="firstname">
      <el-input v-model="(modelValue as ICheckout).firstname" />
    </el-form-item>
    <el-form-item label="Last name" prop="lastname">
      <el-input v-model="(modelValue as ICheckout).lastname" />
    </el-form-item>
    <el-form-item label="Email address" prop="email">
      <el-input v-model="(modelValue as ICheckout).email" />
    </el-form-item>
    <el-form-item label="City" prop="city">
      <el-select
        v-model="(modelValue as ICheckout).city"
        placeholder="Select a city"
      >
        <el-option
          v-for="city in cities"
          :key="city.label"
          :label="city.label"
          :value="city.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="Street" prop="street">
      <el-input v-model="(modelValue as ICheckout).street" />
    </el-form-item>
  </div>
</template>

<script setup lang="ts">
import { cities } from '@/constants/cities'

const modelValue = defineModel<ICheckout>()
</script>
