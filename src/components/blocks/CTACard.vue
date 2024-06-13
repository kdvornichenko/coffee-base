<script setup lang="ts">
import PictureComponent from "../PictureComponent.vue";
import SvgComponent from "../SvgComponent.vue";
</script>
<template>
  <div class="cta-card container--block">
    <div class="cta-card__text">
      <div class="cta-card__text-content">
        <h2 class="h2 cta-card__title">Learn English for everyday situations</h2>
        <p class="body-text cta-card__description">
          Through our rotation of international teachers, you’ll be exposed to a wide
          variety of accents, all contexts, expressions and cultures.
        </p>
        <Button class="cta-card__btn" label="Start learning" />
      </div>

      <div class="cta-card__divider">
        <SvgComponent name="divider" />
      </div>

      <div class="cta-card__quote">
        <div class="cta-card__quote-text body-text">
          “My&nbsp;time slot didn&rsquo;t work well, thanks to&nbsp;teacher&rsquo;s
          patience and tips, very helpful!”
        </div>

        <div class="cta-card__quote-author">
          <span class="cta-card__quote-author__name"> Leonardo DiCaprio</span>,
          <span class="cta-card__quote-author__age">17 years old</span>
        </div>
      </div>
    </div>

    <div class="cta-card__card">
      <div class="cta-card__card">
        <PictureComponent src="cta-card" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.cta-card {
  display: flex;
}

.cta-card__text-content {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}

.cta-card__title {
  color: var(--color-text-dark);
}

.cta-card__btn {
  width: fit-content;
}

.cta-card__quote-author {
  margin-top: 14px;
  font-weight: 500;
}

.cta-card__quote-author__name {
  color: var(--color-text-dark);
}

.cta-card__divider {
  display: flex;
  margin-block: 40px;
}
</style>
