<script setup lang="ts">
import LogoComponent from "../LogoComponent.vue";
import NavComponent from "../NavComponent.vue";
import SwitcherComponent from "../SwitcherComponent.vue";
</script>

<template>
  <header>
    <RouterLink to="/">
      <LogoComponent />
    </RouterLink>

    <NavComponent />

    <SwitcherComponent />
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-inline: $unit;

  margin-top: 20px;
}
</style>
