<script setup lang="ts">
import type { AdvantagesItem } from "@/types/advantagesItem";
import AdvantagesItemComponent from "../AdvantagesItemComponent.vue";

const advantagesItems: AdvantagesItem[] = [
  {
    img: "advantages1",
    title: "1. Verified teachers",
    description:
      "Our community has over 10,000 expert tutors&nbsp;&mdash; all with prior teaching experience, vetted by&nbsp;our team.",
  },
  {
    img: "advantages2",
    title: "2. Affordable lessons",
    description:
      "With lesson prices starting at&nbsp;$20, Verbling provides remote language learning to&nbsp;fit any budget.",
  },
  {
    img: "advantages3",
    title: "3.Convenience & flexibility",
    description:
      "We&nbsp;make learning happen on&nbsp;your schedule. Book lessons whenever you want to&nbsp;learn.",
  },
];
</script>

<template>
  <div class="advantages container--block">
    <div class="advantages__header">
      <h2 class="h2 advantages__title">Top-notch teachers, limitless learning</h2>
      <p class="body-text advantages__description">
        Language learning on&nbsp;your schedule, with teachers you can trust. For language
        learners just like you.
      </p>
    </div>

    <div class="advantages__items">
      <div v-for="(item, index) in advantagesItems">
        <AdvantagesItemComponent
          :key="index"
          :img="item.img"
          :title="item.title"
          :description="item.description"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.advantages__header {
  display: flex;
  flex-direction: column;

  width: 100%;
  row-gap: 15px;

  text-align: center;
}

.advantages__title {
  color: var(--color-text-dark);
}

.advantages__items {
  margin-top: 30px;

  @include yo(
    "margin-top",
    (
      $mob: 30px,
      $desktop-md: 60px,
    )
  );

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-evenly;
  column-gap: 15px;

  @media (max-width: $tab-sm) {
    grid-template-columns: 1fr;
  }
}
</style>
