<template>
  <dt class="inline font-semibold text-gray-900">
    <component :is="iconName" class="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
    {{ name }}
  </dt>
  {{ ' ' }}
  <dd class="inline">{{ description }}</dd>
</template>

<script setup>
import * as IconsSolid from '@heroicons/vue/20/solid'

const props = defineProps({
  icon: String,
  name: String,
  description: String
})

const iconName = computed(() => {
  return IconsSolid[props.icon];
})

</script>

<style scoped lang="scss">

</style>
