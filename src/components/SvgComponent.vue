<script setup lang="ts">
import { computed } from "vue";
import * as svg from "../assets/img/svg";

const props = defineProps<{
  name: keyof typeof svg;
}>();

const icon = computed(() => {
  return svg[props.name];
});
</script>

<template>
  <component :is="icon" />
</template>
