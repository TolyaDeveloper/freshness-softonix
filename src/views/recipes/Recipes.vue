<template>
  <Breadcrumbs :breadcrumbs="[{ title: 'Recipes' }]" />
  <BlockTitle class="my-[30px] text-center">🥗 Our tasty recipes</BlockTitle>
  <el-skeleton v-if="isLoading" />
  <div v-else-if="!recipePreviews.length" class="text-center mt-[100px]">
    <h2>
      No recipes yet
    </h2>
  </div>
  <el-timeline v-else>
    <el-timeline-item
      v-for="recipePreview in recipePreviews"
      :key="recipePreview.id"
      placement="top"
      :timestamp="new Date(recipePreview.created_at).toLocaleDateString()"
    >
      <el-card>
        <h3>
          <router-link
            class="text-accent-400 underline"
            :to="{ name: $routeNames.recipeDetails, params: { id: recipePreview.id } }"
          >
            {{ recipePreview.name }}
          </router-link>
        </h3>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>

<script setup lang="ts">
const recipePreviews = ref<Pick<TRecipe, 'id' | 'name' | 'created_at'>[]>([])
const isLoading = ref(true)

const getRecipePreviews = async () => {
  try {
    const { data } = await recipesService.getRecipePreviews()

    if (!data) {
      return
    }

    recipePreviews.value = data
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  getRecipePreviews()
})
</script>
