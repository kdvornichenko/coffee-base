<script setup lang="ts">
import { defineProps, ref, watch } from "vue";

const props = defineProps({
  src: String,
});

const srcWebp = ref("");
const srcPng = ref("");

const importImages = async (src: string) => {
  srcWebp.value = (await import(`@/assets/img/webp/${src}.webp`)).default;
  srcPng.value = (await import(`@/assets/img/${src}.png`)).default;
};

watch(
  () => props.src,
  (newSrc) => {
    if (newSrc) {
      importImages(newSrc);
    }
  },
  { immediate: true }
);
</script>

<template>
  <picture>
    <source :srcset="srcWebp" />
    <img :src="srcPng" alt="" />
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
