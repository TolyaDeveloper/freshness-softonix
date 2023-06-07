<template>
  <Breadcrumbs
    class="mb-[30px]"
    :breadcrumbs="[{ title: 'Cart', to: {name: $routeNames.cart} }, { title: 'Checkout page' }]"
  />
  <div class="grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-[30px] justify-between items-start">
    <el-form
      ref="formRef"
      label-position="top"
      :model="formModel"
      :rules="formRules"
      @submit.prevent="submitForm"
    >
      <h2 class="mb-[5px] font-poppins text-[22px] font-semibold">Billing info</h2>
      <div class="mb-[30px] flex justify-between flex-wrap text-[12px] text-primary-500">
        <p class="mr-[10px]">Please enter your billing info</p>
        <p>Step 1 of 3</p>
      </div>
      <BillingInfo v-model="formModel" />
      <h2 class="mt-[50px] mb-[5px] font-poppins text-[22px] font-semibold">Payment method</h2>
      <div class="mb-[30px] flex justify-between flex-wrap text-[12px] text-primary-500">
        <p class="mr-[10px]">Please enter your payment method</p>
        <p>Step 2 of 3</p>
      </div>
      <PaymentMethod v-model="formModel" />
      <h2 class="mt-[50px] mb-[5px] font-poppins text-[22px] font-semibold">Additional information</h2>
      <div class="mb-[30px] flex justify-between flex-wrap text-[12px] text-primary-500">
        <p class="mr-[10px]">We are getting to the end. Just few clicks and your order si ready!</p>
        <p>Step 3 of 3</p>
      </div>
      <AdditionalInformation v-model="formModel" />
      <el-button type="primary" size="large" native-type="submit" :loading="isLoading">
        Complete order
      </el-button>
    </el-form>
    <OrderSummary />
  </div>
</template>

<script setup lang="ts">
import { notificationHandler } from '@/helpers'
import { routeNames } from '@/router/route-names'

const formRef = useElFormRef()
const authStore = useAuthStore()
const router = useRouter()
const isLoading = ref(false)

const formModel = useElFormModel({
  firstname: authStore.user?.firstname ?? '',
  lastname: authStore.user?.lastname ?? '',
  email: authStore.user?.email ?? '',
  city: authStore.user?.city ?? '',
  street: authStore.user?.street ?? '',
  paymentMethod: 'CARD',
  additionalInformation: '',
  cardNumber: '',
  cardHolder: '',
  cardExpirationDate: '',
  cardCVC: ''
})

const formRules = useElFormRules({
  firstname: [
    useRequiredRule()
  ],
  lastname: [
    useRequiredRule()
  ],
  email: [
    useRequiredRule(),
    useEmailRule()
  ],
  city: [
    useRequiredRule()
  ],
  street: [
    useRequiredRule()
  ],
  paymentMethod: [
    useRequiredRule()
  ]
})

const createOrder = async () => {
  try {
    isLoading.value = true

    if (!authStore.user) {
      return
    }

    await checkoutService.createOrder(authStore.user.id, authStore.user.cart as Record<string, number>)
    await cartService.updateCart({}, authStore.user.id)

    authStore.user.cart = {}
    router.replace({ name: routeNames.orders })
    notificationHandler('Order successfully created', { type: 'success' })
  } catch (error) {
    notificationHandler(error as Error)
  } finally {
    isLoading.value = false
  }
}

const submitForm = () => {
  formRef.value.validate(async valid => {
    if (valid) {
      createOrder()
    }
  })
}
</script>
