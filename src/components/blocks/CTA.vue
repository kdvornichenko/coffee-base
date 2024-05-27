<script setup lang="ts">
import { ref } from "vue";

const email = ref<string>("");

const props = defineProps({
  img: String,
  btn: String,
});
</script>

<template>
  <div class="cta">
    <div class="cta__img">
      <img :src="img" alt="Hero" />
    </div>

    <div class="cta__content">
      <div class="h1 cta__heading">
        <slot name="title" />
      </div>
      <p class="body-text">
        <slot name="text" class="body-text" />
      </p>

      <form class="cta__form">
        <div class="cta__form-content">
          <div class="cta__form-input_wrapper">
            <InputText id="username" type="email" v-model="email" placeholder=" " />
            <label for="email">
              <InputIcon class="pi pi-envelope" />
              <span>Email</span>
            </label>
          </div>
          <Button :label="props.btn" class="cta__form-btn" />
        </div>
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

.cta__form {
  .cta__form-input_wrapper input,
  .cta__form-btn {
    height: 50px;
  }

  .cta__form-input_wrapper {
    position: relative;

    input {
      &:focus,
      &:not(:placeholder-shown),
      &:-webkit-autofill {
        & + label {
          opacity: 0;
        }
      }
    }

    label {
      position: absolute;
      top: 50%;
      left: var(--p-inputtext-padding-x);

      translate: 0 -50%;

      display: flex;
      align-items: center;
      column-gap: 10px;

      opacity: 0.5;

      transition: $trs;
    }
  }
}

.cta__form-content {
  display: flex;
  column-gap: 15px;
}
</style>
