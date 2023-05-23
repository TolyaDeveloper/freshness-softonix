<template>
  <div class="grid grid-cols-[1fr_minmax(auto,500px)_1fr] items-center gap-[30px] mt-[40px] mb-[50px]">
    <Logo />
    <Search />
    <template v-if="store.user">
      <UserWithCart class="justify-end" />
    </template>
    <template v-else>
      <router-link #default="{ navigate }" :to="{ name: $routeNames.login }" custom>
        <el-button class="ml-auto" role="link" @click="navigate">Login</el-button>
      </router-link>
    </template>
  </div>
</template>

<script setup lang="ts">
const store = useAuthStore()
</script>
