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

      <div class="cta-card__text-bottom">
        <div class="cta-card__divider">
          <SvgComponent name="divider" />
        </div>

        <div class="cta-card__quote">
          <div class="cta-card__quote-text body-text--small">
            “My&nbsp;time slot didn&rsquo;t work well, thanks to&nbsp;teacher&rsquo;s
            patience and tips, very helpful!”
          </div>

          <div class="cta-card__quote-author">
            <span class="cta-card__quote-author__name"> Leonardo DiCaprio</span>,
            <span class="cta-card__quote-author__age">17 years old</span>
          </div>
        </div>
      </div>
    </div>

    <div class="cta-card__card">
      <div class="cta-card__img">
        <PictureComponent src="cta-card" />
      </div>
      <div class="cta-card__content">
        <div class="cta-card__content-title">Daily communication</div>
        <ul class="cta-card__list">
          <li>School</li>
          <li>Classes</li>
          <li>Sports</li>
          <li>Friends</li>
        </ul>
        <Button
          class="cta-content__btn"
          label="Watch a&nbsp;video"
          icon="pi pi-play-circle"
        />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
// Некоторые стили находятся в файле CTA-card.scss

.cta-card {
  display: flex;
  justify-content: space-evenly;
  column-gap: 30px;
  @media (max-width: $tab) {
    flex-direction: column;
    row-gap: 60px;
  }
}
.cta-card__text {
  max-width: 40%;
  @media (max-width: $tab) {
    max-width: 100%;
  }
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

.cta-card__text-bottom {
  max-width: 400px;
}

.cta-card__quote-author {
  margin-top: 14px;

  font-size: 14px;
  font-weight: 500;
}

.cta-card__quote-author__name {
  color: var(--color-text-dark);
}

.cta-card__divider {
  display: flex;
  margin-block: 40px;
}

.cta-card__card {
  border-radius: 14px;
  border: 9px solid $white;
  box-shadow: 0 5px 30px 5px #dddddd;
  background-color: $white;

  padding-bottom: 30px;

  position: relative;
  @media (max-width: $tab) {
    width: fit-content;
    margin-inline: auto;
  }
}

.cta-card__img {
  border-radius: 10px;
  overflow: hidden;
}

.cta-card__content {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;

  width: 100%;
  padding-block: 24px;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  text-align: center;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;

  background-color: $white;
}

.cta-card__content-title {
  font-weight: 500;
  color: $black;

  font-size: 24px;

  @include yo(
    "font-size",
    (
      $mob: 24px,
      $desktop-md: 30px,
    )
  );
}

.cta-card__list {
  list-style: none;
  padding: 0;
  margin-top: 12px;
  margin-bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  column-gap: 5px;

  @include yo(
    "column-gap",
    (
      $mob: 5px,
      $desktop-md: 10px,
    )
  );

  li {
    color: $grey-500;

    font-size: 16px;

    &:not(:last-child) {
      display: flex;
      align-items: center;

      column-gap: 5px;

      @include yo(
        "column-gap",
        (
          $mob: 5px,
          $desktop-md: 10px,
        )
      );
      &::after {
        content: "";

        display: inline-block;
        background-color: $grey-500;
        border-radius: 100%;

        width: 2px;
        height: 2px;
      }
    }
  }
}

.cta-content__btn {
  width: fit-content;

  margin-inline: auto;
  margin-top: 24px;
  color: $white;
}
</style>
