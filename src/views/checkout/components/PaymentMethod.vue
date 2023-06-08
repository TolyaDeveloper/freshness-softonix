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
              <el-input v-model="modelValue.cardNumber" @input="handleCardNumber" />
            </el-form-item>
            <div class="mt-[10px] flex">
              <el-form-item class="grow" label="Card holder" prop="cardHolder">
                <el-input v-model="modelValue.cardHolder" />
              </el-form-item>
              <el-form-item class="ml-[15px] w-[120px]" label="Expiration date" prop="cardExpirationDate">
                <el-input
                  v-model="modelValue.cardExpirationDate"
                  placeholder="mm/yy"
                  @input="handleExpirationDate"
                />
              </el-form-item>
              <el-form-item class="ml-[15px] w-[120px]" label="CVC" prop="cardCVC">
                <el-input v-model="modelValue.cardCVC" />
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
const modelValue = defineModel<ICheckout>({ required: true })

const handleExpirationDate = (value: string) => {
  value = value.replace(/\D/g, '')

  if (value.length > 2) {
    value = value.slice(0, 2) + '/' + value.slice(2)
  }

  (modelValue.value as ICheckout).cardExpirationDate = value
}

const handleCardNumber = (value: string) => {
  const cardNumber = value.replace(/\D/g, '')
  const cardNumberLength = cardNumber.length

  let maskedCardNumber = ''

  for (let i = 0; i < cardNumberLength; i++) {
    if (i > 0 && i % 4 === 0) {
      maskedCardNumber += ' '
    }
    maskedCardNumber += cardNumber[i]
  }

  (modelValue.value as ICheckout).cardNumber = maskedCardNumber
}
</script>
