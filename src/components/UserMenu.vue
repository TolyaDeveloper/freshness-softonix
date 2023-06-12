<template>
  <div class="flex items-center">
    <el-tooltip content="Profile">
      <router-link
        class="mr-[20px]"
        :to="{ name: $routeNames.profile }"
        aria-label="Profile page"
      >
        <IconUser />
      </router-link>
    </el-tooltip>
    <el-tooltip content="Shopping cart">
      <router-link
        class="relative mr-[20px]"
        :to="{ name: $routeNames.cart }"
        aria-label="Shopping cart"
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
    </el-tooltip>
    <el-tooltip content="Orders history">
      <router-link
        :to="{ name: $routeNames.orders }"
        aria-label="Orders history"
      >
        <IconStack />
      </router-link>
    </el-tooltip>
    <template v-if="authStore.user?.role === ERoles.admin">
      <el-divider class="mx-[10px]" direction="vertical" />
      <el-tooltip content="New product">
        <router-link :to="{ name: $routeNames.addProduct }">
          <IconAdd />
        </router-link>
      </el-tooltip>
    </template>
    <el-divider class="mx-[10px]" direction="vertical" />
    <el-tooltip content="Logout">
      <el-button
        class="border-none p-0 text-primary-700"
        aria-label="Logout"
        @click="authStore.logout"
      >
        <IconLogout />
      </el-button>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import { ERoles } from '@/types/roles'

const authStore = useAuthStore()

const itemsInCart = computed(() => Object.keys(authStore.user?.cart || {}).length)
</script>
