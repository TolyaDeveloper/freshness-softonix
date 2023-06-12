<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-[30px] gap-y-[10px]">
    <el-form-item label="First name" prop="firstname">
      <el-input v-model="modelValue.firstname" />
    </el-form-item>
    <el-form-item label="Last name" prop="lastname">
      <el-input v-model="modelValue.lastname" />
    </el-form-item>
    <el-form-item label="Email address" prop="email">
      <el-input v-model="modelValue.email" />
    </el-form-item>
    <el-form-item label="City" prop="city">
      <el-select
        v-model="modelValue.city"
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
      <el-input v-model="modelValue.street" />
    </el-form-item>
    <el-form-item label="Phone" prop="phone">
      <el-input v-model="modelValue.phone" />
    </el-form-item>
  </div>
</template>

<script setup lang="ts">
import { cities } from '@/constants'

const modelValue = defineModel<ICheckout>({ required: true })
</script>
