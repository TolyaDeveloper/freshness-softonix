<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[270px_1fr_1fr] gap-[30px]">
    <AsideCategories />
    <Banner
      class="order-[-1] lg:order-1"
      title="Recipes"
      subfocus="Read our recipes"
      :to="{ name: $routeNames.recipes }"
    />
    <Banner
      class="order-[-1] lg:order-1"
      title="Quiz game"
      subfocus="Play a game and win promocode"
      to="/quiz"
      link-title="Play"
    />
  </div>
</template>
