<template>
  <div class="app-container">
    <header>
      <TopBar />
      <el-divider class="m-0 border-primary-700 opacity-5" />
      <div class="text-center mt-[40px] mb-[30px]">
        <Logo />
      </div>
    </header>
    <main class="grow">
      <slot />
    </main>
    <footer>
      <FooterMenu />
      <Copyright />
    </footer>
  </div>
</template>
