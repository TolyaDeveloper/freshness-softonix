<template>
  <el-breadcrumb class="text-[12px]">
    <el-breadcrumb-item :to="{ name: $routeNames.home }">
      Homepage
    </el-breadcrumb-item>
    <el-breadcrumb-item>
      Profile
    </el-breadcrumb-item>
  </el-breadcrumb>
  <h2 class="mt-[30px] font-poppins text-[18px] font-semibold">Profile</h2>
  <ProfileForm />
</template>
