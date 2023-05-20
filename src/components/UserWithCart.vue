<template>
  <div class="flex items-center">
    <RouterLink to="/profile" aria-label="Open your profile page">
      <UserIcon />
    </RouterLink>
    <RouterLink class="relative ml-10" to="/cart" aria-label="Open your shopping cart">
      <CartIcon />
      <span
        class="absolute left-[-7px] bottom-[-6px] flex justify-center items-center w-[16px] h-[16px]
               rounded-full bg-secondary-400 text-white text-[12px] font-poppins font-semibold
               shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
      >
        {{ itemsInCart > 9 ? "9+" : itemsInCart }}
      </span>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import UserIcon from '@/assets/icons/UserIcon.vue'
import CartIcon from '@/assets/icons/CartIcon.vue'

withDefaults(defineProps<{ itemsInCart?: number }>(),
  { itemsInCart: 0 }
)
</script>
