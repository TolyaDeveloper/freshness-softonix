<template>
  <div
    class="grid grid-cols-2 md:grid-cols-[1fr_minmax(auto,500px)_1fr] items-center gap-[30px] mt-[40px] mb-[50px]"
  >
    <Logo />
    <Search class="order-1 col-span-2 md:order-[0] md:col-span-1" />
    <UserMenu v-if="store.user" class="justify-end" />
    <router-link v-else #default="{ navigate }" :to="{ name: $routeNames.login }" custom>
      <el-button class="ml-auto" role="link" @click="navigate">Login</el-button>
    </router-link>
  </div>
</template>

<script setup lang="ts">
const store = useAuthStore()
</script>
