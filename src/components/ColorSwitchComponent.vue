<script setup lang="ts">
import { primaryColorPalettes, surfaceColorPallets } from "@/data/colors.data";
import { updatePrimaryPalette, updateSurfacePalette } from "primevue/themes";
import { ref } from "vue";

const primaryColors = ref<ColorPalette[]>(primaryColorPalettes);
const surfaceColors = ref<ColorPalette[]>(surfaceColorPallets);

const selectedPrimaryColor = ref<string>("noir");
const selectedSurfaceColor = ref<string>("noir");

const colorChangeHandler = (type: string, palette: ColorPalette) => {
  if (type === "primary") {
    selectedPrimaryColor.value = palette.name;
    updatePrimaryPalette(palette.palette);
  } else if ((type = "surface")) {
    selectedSurfaceColor.value = palette.name;
    updateSurfacePalette(palette.palette);
  }
};
</script>

<template>
  <div class="color-switch__container">
    <Button
      v-for="primaryColor of primaryColors"
      class="color-switch__btn"
      :key="primaryColor.name"
      :title="primaryColor.name"
      @click="colorChangeHandler('primary', primaryColor)"
      :class="{ 'active-color': selectedPrimaryColor === primaryColor.name }"
      :style="{
        backgroundColor: `${
          primaryColor.name === 'noir' ? 'var(--color-text)' : primaryColor.palette['500']
        }`,
      }"
      :rounded="true"
    ></Button>
  </div>
  <div class="color-switch__container">
    <Button
      v-for="surfaceColor of surfaceColors"
      class="color-switch__btn"
      :key="surfaceColor.name"
      :title="surfaceColor.name"
      @click="colorChangeHandler('surface', surfaceColor)"
      :class="{ 'active-color': selectedSurfaceColor === surfaceColor.name }"
      :style="{
        backgroundColor: `${
          surfaceColor.name === 'noir' ? 'var(--color-text)' : surfaceColor.palette['500']
        }`,
      }"
      :rounded="true"
    ></Button>
  </div>
</template>

<style scoped lang="scss">
.color-switch__container {
  display: flex;
  align-items: center;
  column-gap: 10px;

  margin-top: 10px;
}
.color-switch__btn {
  width: 20px;
  height: 20px;

  padding: 0;

  border: none;
  outline-offset: 1px;

  &:hover {
    &:not(:disabled) {
      border: none;
    }
  }

  &.active-color {
    outline: var(--p-primary-color) solid 3px;
  }
}
</style>
