<template>
  <component :is="components[props.layout]">
    <slot />
  </component>
</template>

<script setup lang="ts">
import DefaultLayout from './DefaultLayout.vue'
import AuthLayoutLayout from './AuthLayout.vue'

const props = withDefaults(defineProps<{ layout: TLayouts }>(), {
  layout: 'default'
})

const components = {
  default: DefaultLayout,
  auth: AuthLayoutLayout
}

</script>
