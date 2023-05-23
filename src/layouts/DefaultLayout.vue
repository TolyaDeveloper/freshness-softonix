<template>
  <div class="app-container">
    <header>
      <TopBar />
      <el-divider class="m-0 border-primary-700 opacity-5" />
      <MiddleBar />
      <NavBar />
    </header>
    <main class="grow mt-[15px]">
      <slot />
    </main>
    <footer class="my-[65px]">
      <FooterMenu />
      <Copyright />
    </footer>
  </div>
</template>
