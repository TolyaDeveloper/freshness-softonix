<template>
  <div class="flex items-center justify-between h-12 snap-x overflow-x-auto whitespace-nowrap">
    <ul class="flex">
      <li class="hover:opacity-70">
        <a href="tel:+420336775664">+420 336 775 664</a>
      </li>
      <li class="ml-[30px] hover:opacity-70">
        <a href="mailto:info@freshnesecom.com">info@freshnesecom.com</a>
      </li>
    </ul>
    <ul class="flex ml-[30px]">
      <li class="text-accent-400">
        <router-link class="link" :to="{ name: $routeNames.recipes }">Our recipes</router-link>
      </li>
      <li class="ml-[40px] text-accent-400">
        <a class="link" href="https://www.youtube.com/@farmfreshtoyou/videos" rel="noopener noreferrer" target="_blank">
          YouTube
        </a>
      </li>
    </ul>
  </div>
</template>
