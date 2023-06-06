<template>
  <div>
    <el-form-item prop="paymentMethod">
      <el-radio-group
        v-model="(modelValue as ICheckout).paymentMethod"
        class="w-full"
      >
        <div class="mb-[15px] bg-white rounded-[12px] p-[15px] border border-primary-300">
          <div
            class="flex items-center justify-between "
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
          <div v-if="modelValue?.paymentMethod === 'CARD'">
            <el-form-item label="Card number" prop="cardNumber">
              <el-input v-model="(modelValue as ICheckout).cardNumber" />
            </el-form-item>
            <div class="mt-[10px] flex">
              <el-form-item class="grow" label="Card holder" prop="ecardHoldermail">
                <el-input v-model="(modelValue as ICheckout).cardHolder" />
              </el-form-item>
              <el-form-item class="ml-[15px] w-[120px]" label="CVC" prop="cardCVC">
                <el-input v-model="(modelValue as ICheckout).cardCVC" placeholder="mm/yy" @input="handleCVC" />
              </el-form-item>
            </div>
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

const handleCVC = (value: string) => {
  if (value.length === 2) {
    value = value.slice(0, 2) + '/';

    (modelValue.value as ICheckout).cardCVC = value

    return
  }

  if (value.at(-1) === '/') {
    (modelValue.value as ICheckout).cardCVC = ''
  }
}
</script>
