<template>
  <div>
    <el-form-item prop="paymentMethod">
      <el-radio-group
        v-model="(modelValue as ICheckout).paymentMethod"
        class="w-full"
      >
        <div
          class="mb-[15px] flex items-center justify-between bg-white rounded-[12px] p-[15px]
                 border border-primary-300"
        >
          <el-radio
            label="CARD"
            name="paymentMethod"
          >
            Credit card
          </el-radio>
          <div>
            <IconVisa class="mr-[12px]" />
            <IconMastercard />
          </div>
        </div>
        <div class="flex items-center justify-between bg-white rounded-[12px] p-[15px] border border-primary-300">
          <el-radio
            label="CASH_ON_DELIVERY"
            name="paymentMethod"
          >
            Cash on delivery
          </el-radio>
        </div>
      </el-radio-group>
    </el-form-item>
  </div>
</template>

<script setup lang="ts">
const modelValue = defineModel<ICheckout>()
</script>
