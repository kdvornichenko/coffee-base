<script setup lang="ts">
import { onMounted, ref } from "vue";

const headingTag = ref<string | undefined>("div");

const props = defineProps({
  tag: String,
  text: String,
});

onMounted(() => {
  headingTag.value = props.tag;
});
</script>

<template>
  <headingTag> {{ props.text }} </headingTag>
</template>

<style scoped lang="scss"></style>
