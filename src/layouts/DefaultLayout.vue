<template>
  <div class="app-container">
    <header>
      <top-bar />
      <el-divider class="m-0 border-primary-700 opacity-5" />
      <middle-bar />
      <nav-bar />
    </header>
    <main class="grow">
      <slot />
    </main>
    <footer class="my-[65px]">
      <footer-menu />
      <v-copyright />
    </footer>
  </div>
</template>
