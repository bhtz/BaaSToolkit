<template>
  <div v-for="feature in features" :key="feature.name" class="relative pl-9">
    <Feature :icon="feature.icon"
             :name="feature.name"
             :description="feature.description"/>
  </div>
</template>

<script setup>
import Feature from "~/components/Feature.vue";
const props = defineProps({
  panelId: Number
})

const {getItems} = useDirectusItems();

const features = await getItems({
  collection: 'features',
  params:{
    filter:{panel_id: props.panelId}
  }
});

</script>

<style scoped lang="scss">

</style>
