<script setup lang="ts">
import { onMounted, ref } from "vue";

const headingTag = ref<string | undefined>("div");

const props = defineProps({
  img: String,
  tag: String,
  text: String,
  btn: String,
});

onMounted(() => {
  headingTag.value = props.tag;
});
</script>

<template>
  <div class="cta">
    <div class="cta__img">
      <img :src="img" alt="Hero" />
    </div>
    <div class="cta__content">
      <headingTag class="h1 cta__heading">
        <slot name="title"></slot>
      </headingTag>
      <p class="body-text">{{ props.text }}</p>
      <form>
        <input type="email" placeholder="Email" />
        <Button :label="props.btn" />
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
}

.cta__heading {
  color: var(--color-text-dark);
}

.cta__content {
}
</style>
