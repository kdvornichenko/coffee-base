<script setup lang="ts">
import LogoComponent from "../LogoComponent.vue";
import NavComponent from "../NavComponent.vue";
import SwitcherComponent from "../ThemeSwitcherComponent.vue";
</script>

<template>
  <header class="header">
    <div class="header__left">
      <RouterLink to="/">
        <LogoComponent />
      </RouterLink>
    </div>

    <div class="header__middle">
      <NavComponent />
    </div>

    <div class="header__right">
      <SwitcherComponent />
      <RouterLink to="/login">
        <Button label="Log in" />
      </RouterLink>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: grid;
  grid-template-columns: 200px 1fr 200px;

  padding-inline: $unit;

  margin-top: 20px;
}

.header__right {
  display: flex;
  align-items: center;
  column-gap: 20px;
}
</style>
