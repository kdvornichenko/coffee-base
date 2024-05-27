<script setup lang="ts">
import CTA from "@/components/blocks/CTA.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import { ref } from "vue";
</script>

<template>
  <MainLayout>
    <CTA btn="Get Started" img="hero">
      <template v-slot:title>
        Effective english courses for teenagers (hate
        <span>kids</span>)
      </template>
      <template v-slot:text>
        With professional teachers, flexible learning schedules and courses for all levels
        you will speak confidently in&nbsp;no&nbsp;time.
      </template>
    </CTA>
  </MainLayout>
</template>

<style scoped lang="scss"></style>
