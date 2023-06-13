<template>
  <Breadcrumbs :breadcrumbs="[{ title: 'Profile' }]" />
  <template v-if="authStore.user?.promocode">
    <h2 class="mt-[30px] mb-[15px]">Your promocode discount for {{ authStore.user.promocode.discount }}%</h2>
    <el-tag class="text-[16px]">{{ authStore.user.promocode.code }}</el-tag>
  </template>
  <h2 class="mt-[30px]">Profile</h2>
  <ProfileForm />
</template>

<script setup lang="ts">
const authStore = useAuthStore()
</script>
