<template>
  <div class="flex items-center">
    <router-link :to="{ name: $routeNames.profile }" aria-label="Open your profile page">
      <icon-user />
    </router-link>
    <router-link class="relative ml-10" to="/cart" aria-label="Open your shopping cart">
      <icon-cart />
      <span
        class="absolute left-[-7px] bottom-[-6px] flex justify-center items-center w-[16px] h-[16px]
               rounded-full bg-secondary-400 text-white text-[12px] font-poppins font-semibold
               shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
      >
        {{ itemsInCart > 9 ? "9+" : itemsInCart }}
      </span>
    </router-link>
  </div>
</template>

<script setup lang="ts">
const itemsInCart = ref(0)
</script>
