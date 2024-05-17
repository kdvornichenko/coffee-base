<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import IconsComponent from "./IconsComponent.vue";

const isDark = useDark({
  selector: "html",
  attribute: "data-theme",
  valueDark: "dark",
  valueLight: "light",
  disableTransition: false,
});
const toggleDark = useToggle(isDark);
</script>

<template>
  <div class="theme-switcher">
    <label>
      <input type="checkbox" name="switcher" @change="toggleDark()" />
      <div class="theme-swither__wrapper">
        <span class="theme-switcher__moon">
          <IconsComponent name="moon" />
        </span>
        <span class="theme-switcher__sun">
          <IconsComponent name="sun" />
        </span>
      </div>
    </label>
  </div>
</template>

<style scoped lang="scss">
input {
  display: none;
}

label {
  display: block;
  width: 40px;
  height: 40px;

  padding: 5px;

  background-color: $grey-700;
  border-radius: 100%;
  box-shadow: 0 0 10px 2px $grey-100;
  transition: $trs;

  overflow: hidden;

  .theme-swither__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    row-gap: 20px;

    transition: $trs;
    transition-timing-function: ease-in-out;
    span {
      display: block;

      width: 30px;
      height: 30px;
      cursor: pointer;
      transition: $trs;
      &:last-child {
        rotate: 180deg;
      }
    }
  }
}
</style>
