<script setup lang="ts">
import LogoImg from "@/assets/img/logo.jpg";
</script>
<template>
  <div
    class="preloader animate__animated animate__zoomInDown animate__fast animate__repeat-1"
  >
    <div class="preloader__wrapper"><img :src="LogoImg" /></div>
    <div class="preloader__wrapper"><img :src="LogoImg" /></div>
  </div>
</template>

<style scoped lang="scss">
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  &.is-loaded {
    .preloader__wrapper {
      &:first-child {
        translate: -100% 0;
      }
      &:last-child {
        translate: 100% 0;
      }
    }
  }
}
.preloader__wrapper {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 50%;
  overflow: hidden;
  transition: $trs;
  background-color: $grey-100;
  &:last-child {
    left: unset;
    right: 0;
    img {
      translate: -50% 0;
    }
  }
}

img {
  width: 100vw;
  height: 100dvh;
  //   opacity: 0;
}
</style>
