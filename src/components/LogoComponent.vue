<script setup lang="ts">
import Logo from "@/assets/logo.svg";
import LogoImg from "@/assets/img/logo.jpg";
const logoImg = LogoImg;
</script>

<template>
  <div class="logo">
    <!-- <Logo /> -->
    <img :src="logoImg" />
  </div>
</template>

<style lang="scss" scoped>
.logo {
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  overflow: hidden;
  transition: $trs;

  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
  }
}
</style>
