<script setup lang="ts">
import router from "@/router";
import { getAuth, signOut } from "firebase/auth";

const handleSignOut = () => {
  signOut(getAuth()).then(() => {
    router.push("/login");
  });
};
</script>

<template>
  <Button @click="handleSignOut" label="Sign Out" />
</template>

<style scoped lang="scss"></style>
