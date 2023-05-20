<template>
  <div
    class="text-center min-[500px]:text-left grid grid-cols-1 min-[500px]:grid-cols-2 sm:grid-cols-3 gap-[30px]"
  >
    <div>
      <h2 class="font-poppins text-[18px] font-semibold mb-[15px]">
        Earnings
      </h2>
      <ul>
        <li class="text-accent-400 mb-[15px]">
          <RouterLink to="/profile">Sell on the Market</RouterLink>
        </li>
      </ul>
    </div>
    <div>
      <h2 class="font-poppins text-[18px] font-semibold mb-[15px]">
        Connections
      </h2>
      <ul>
        <li class="text-accent-400 mb-[15px]">
          <a href="https://www.youtube.com/@farmfreshtoyou/videos" rel="noopener noreferrer" target="_blank">
            YouTube
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h2 class="font-poppins text-[18px] font-semibold mb-[15px]">
        Account
      </h2>
      <ul>
        <li class="text-accent-400 mb-[15px]">
          <RouterLink to="/profile">Your account</RouterLink>
        </li>
        <li class="text-accent-400 mb-[15px]">
          <RouterLink to="/cart">Cart</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
