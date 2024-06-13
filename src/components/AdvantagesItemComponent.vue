<script setup lang="ts">
import type { AdvantagesItem } from "@/types/advantagesItem";
import PictureComponent from "./PictureComponent.vue";
import { useHtmlDecoder } from "@/hooks/useHtmlDecoder";

const props = defineProps<AdvantagesItem>();

const decodedDescription = useHtmlDecoder(props.description);
</script>

<template>
  <div class="advantages__item">
    <div class="advantages__item-img">
      <PictureComponent :src="props.img" />
    </div>
    <div class="h3 advantages__item-title">{{ props.title }}</div>
    <div class="bod-text--small advantages__item-description">
      {{ decodedDescription }}
    </div>
  </div>
</template>

<style lang="scss">
.advantages__item {
  display: flex;
  flex-direction: column;
  row-gap: 14px;

  text-align: center;

  img {
    width: 200px;
    height: 200px;
  }
}

.advantages__item-title {
  color: var(--color-text-dark);
}
.advantages__item-title,
.advantages__item-description {
  max-width: 350px;
  margin-inline: auto;
}
</style>
