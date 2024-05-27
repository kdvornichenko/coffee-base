<script setup lang="ts">
const props = defineProps({
  src: String,
});
</script>

<template>
  <picture>
    <source :srcset="'/src/assets/img/webp/' + props.src + '.webp'" />
    <img :src="'/src/assets/img/webp/' + props.src + '.png'" alt="" />
  </picture>
</template>

<style scoped lang="scss">
img {
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: relative;
  width: 100%;
}
</style>
