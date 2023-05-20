<template>
  <div class="app-container">
    <header>
      <TopBar />
      <ElDivider class="m-0 border-primary-700 opacity-5" />
      <MiddleBar />
      <NavBar />
    </header>
    <main class="grow">
      <slot />
    </main>
    <footer class="my-[65px]">
      <FooterMenu />
      <Copyright />
    </footer>
  </div>
</template>
