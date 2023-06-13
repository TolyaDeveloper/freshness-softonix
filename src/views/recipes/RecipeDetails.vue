<template>
  <el-skeleton v-if="isLoading" />
  <template v-if="recipeDetails">
    <Breadcrumbs
      :breadcrumbs="[
        { title: 'Recipes', to: { name: $routeNames.recipes} },
        { title: recipeDetails.name }
      ]"
    />
    <BlockTitle class="my-[30px] text-center">{{ recipeDetails.name }}</BlockTitle>
    <h3 class="font-poppins text-[16px] mb-[30px] text-accent-400">Ingredients:</h3>
    <ul class="ml-[30px] list-disc leading-6">
      <li v-for="(ingredient, index) in recipeDetails.ingredients" :key="index">
        {{ ingredient }}
      </li>
    </ul>
    <h3 class="my-[30px] font-poppins text-[16px] text-accent-400">Instructions:</h3>
    <p class="text-justify leading-6">{{ recipeDetails.instructions }}</p>
    <h3 class="my-[30px] font-poppins text-[16px] text-accent-400">Questions:</h3>
    <el-collapse>
      <el-collapse-item
        v-for="(item, index) in recipeDetails.questions"
        :key="index"
        :title="item.question"
      >
        <p>{{ item.answer }}</p>
      </el-collapse-item>
    </el-collapse>
    <h3
      v-if="recipeDetails.subtitle"
      class="my-[30px] font-poppins text-[14px]"
    >
      {{ recipeDetails.subtitle }}
    </h3>
  </template>
</template>

<script setup lang="ts">
const route = useRoute()

const isLoading = ref(true)
const recipeDetails = ref<TNullable<TRecipe>>(null)

const getRecipeDetailsById = async () => {
  try {
    const { data } = await recipesService.getRecipeDetailsById(route.params.id as string)

    if (!data) {
      return
    }

    recipeDetails.value = data[0]
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  getRecipeDetailsById()
})
</script>
