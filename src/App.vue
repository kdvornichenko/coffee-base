<script setup lang="ts">
import { RouterView } from "vue-router";
import TheHeader from "./components/blocks/TheHeader.vue";
</script>

<template>
  <div class="container">
    <TheHeader />
  </div>
  <RouterView />
</template>

<style lang="scss">
@import "@/assets/scss/main.scss";

.container {
  padding-inline: 70px;
  margin-top: 20px;
}
</style>
