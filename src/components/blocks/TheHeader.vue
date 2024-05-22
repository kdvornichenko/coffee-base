<script setup lang="ts">
import { ref } from "vue";
import LogoComponent from "../LogoComponent.vue";
import NavComponent from "../NavComponent.vue";
import SwitcherComponent from "../ThemeSwitcherComponent.vue";
import { getAuth } from "firebase/auth";

const isLoggedIn = ref<boolean>(false);

const checkCurrentUser = () => {
  const user = getAuth().currentUser;
  user ? (isLoggedIn.value = true) : (isLoggedIn.value = false);
};

checkCurrentUser();
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
      <RouterLink v-if="!isLoggedIn" to="/login">
        <Button label="Log in" />
      </RouterLink>

      <RouterLink v-else="isLoggedIn" to="/profile">
        <Button label="Profile" />
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
  transition: $trs;
  opacity: 0;
}

.header__right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 20px;
}
</style>
