<script setup lang="ts">
import { onMounted, ref } from "vue";

const headingTag = ref<string | undefined>("div");

const props = defineProps({
  tag: String,
  title: String,
  text: String,
});

onMounted(() => {
  headingTag.value = props.tag;
});
</script>

<template>
  <headingTag> {{ props.title }} </headingTag>
  <p>{{ props.text }}</p>
  <form>
    <input type="email" placeholder="Email" />
  </form>
</template>

<style scoped lang="scss"></style>
