<template>
  <template v-if="authStore.user?.quiz_available_since">
    <h2>
      <el-alert type="warning" :closable="false" show-icon>
        Next attemp will be available since {{ new Date(authStore.user.quiz_available_since).toLocaleDateString() }}
      </el-alert>
    </h2>
  </template>
</template>

<script setup lang="ts">
const authStore = useAuthStore()
</script>
