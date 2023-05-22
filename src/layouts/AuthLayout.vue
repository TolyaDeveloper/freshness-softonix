<template>
  <div class="app-container">
    <header>
      <top-bar />
      <el-divider class="m-0 border-primary-700 opacity-5" />
      <div class="text-center mt-[40px] mb-[30px]">
        <v-logo />
      </div>
    </header>
    <main class="grow">
      <slot />
    </main>
    <footer>
      <footer-menu />
      <v-copyright />
    </footer>
  </div>
</template>
