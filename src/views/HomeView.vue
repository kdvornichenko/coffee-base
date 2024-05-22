<script setup lang="ts">
import CTA from "@/components/blocks/CTA.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import HeroImg from "@/assets/img/hero.png";
</script>

<template>
  <MainLayout>
    <CTA
      tag="h1"
      text="With professional teachers, flexible learning schedules and courses for all levels you will speak confidently in&nbsp;no&nbsp;time."
      btn="Get Started"
      :img="HeroImg"
    >
      <template v-slot:title>
        <p>Effective english courses for teenagers (hate <span>kids</span>)</p>
      </template>
    </CTA>
  </MainLayout>
</template>

<style scoped lang="scss"></style>
