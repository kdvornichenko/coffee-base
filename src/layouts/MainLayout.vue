<template>
  <main>
    <div class="container">
      <slot></slot>
    </div>
  </main>
</template>

<style lang="scss">
@import "@/assets/scss/main.scss";

.container {
  padding-inline: $unit;
  margin-top: 20px;
}
</style>
