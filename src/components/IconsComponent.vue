<script setup lang="ts">
import { computed } from "vue";
import * as icons from "../assets/icons";

const props = defineProps<{
  name: keyof typeof icons;
}>();

const icon = computed(() => {
  return icons[props.name];
});
</script>

<template>
  <component :is="icon" />
</template>
