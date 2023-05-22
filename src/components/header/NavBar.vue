<template>
  <nav
    class="flex items-center h-[55px] bg-primary-100
           mx-[-45px] px-[45px] snap-x overflow-x-auto whitespace-nowrap"
  >
    <ul class="flex">
      <li
        v-for="category in categories"
        :key="category.id"
        class="font-poppins text-[15px] font-medium mr-[55px] hover:text-accent-400 ease-in duration-150"
      >
        <router-link :to="category.slug">{{ category.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const categories = [
  {
    id: 1,
    name: 'Fruits and vegetables',
    slug: '/fruits-and-vegetables'
  },
  {
    id: 2,
    name: 'Meet and fish',
    slug: '/meet-and-fish'
  },
  {
    id: 3,
    name: 'Dairy',
    slug: '/dairy'
  },
  {
    id: 4,
    name: 'Drinks',
    slug: '/drinks'
  }
]
</script>
