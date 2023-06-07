<template>
  <div class="flex items-center">
    <router-link
      :to="{ name: $routeNames.profile }"
      aria-label="Profile page"
      title="Profile page"
    >
      <IconUser />
    </router-link>
    <router-link
      class="relative ml-7"
      :to="{ name: $routeNames.cart }"
      aria-label="Shopping cart"
      title="Shopping cart"
    >
      <IconCart />
      <span
        class="absolute left-[-7px] bottom-[-6px] flex justify-center items-center w-[16px] h-[16px]
               rounded-full bg-secondary-400 text-white text-[12px] font-poppins font-semibold
               shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
      >
        {{ itemsInCart > 9 ? "9+" : itemsInCart }}
      </span>
    </router-link>
    <router-link
      class="ml-7"
      :to="{ name: $routeNames.orders }"
      aria-label="Orders history"
      title="Orders history"
    >
      <IconStack />
    </router-link>
    <el-divider class="mx-[20px]" direction="vertical" />
    <el-button
      class="border-none p-0 text-primary-700"
      aria-label="Logout"
      title="Logout"
      @click="store.logout"
    >
      <IconLogout />
    </el-button>
  </div>
</template>

<script setup lang="ts">
const store = useAuthStore()

const itemsInCart = computed(() => Object.keys(store.user?.cart || {}).length)
</script>
