<script setup lang="ts"></script>
<template>
  <main>
    <div class="container">
      <slot></slot>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  opacity: 0;
  transition: $trs;
}

.container {
  padding-block: 40px;
}
</style>
