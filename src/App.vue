<script setup lang="ts">
import { RouterView } from "vue-router";
import TheHeader from "@/components/blocks/TheHeader.vue";
import PreloaderComponent from "@/components/PreloaderComponent.vue";
</script>

<template>
  <PreloaderComponent />
  <TheHeader />
  <RouterView />
</template>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
