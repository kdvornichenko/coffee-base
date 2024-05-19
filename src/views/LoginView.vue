<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import { isDark } from "@/functions/darkMode";

import { ref } from "vue";

const email = ref<string>("");
const password = ref<string>("");
const repeatPassword = ref<string>("");
const isEmailChecked = ref<boolean>(false);
const isEmailValid = ref<boolean>(true);
const isUserExist = ref<boolean>(true);

const widthFull = { width: "100%" };

const emailChangeHanler = () => {
  if (isEmailChecked.value === true && isEmailValid.value === true) {
    isEmailChecked.value = false;
    isEmailValid.value = false;
    isUserExist.value = false;
  }
};

const validateEmail = () => {
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  isEmailChecked.value = true;
  if (emailPattern.test(email.value)) {
    // Проверка существования пользователя
    isUserExist.value = checkUserExistence(email.value);
    isEmailValid.value = true;
  } else {
    isEmailValid.value = false;
  }
};

const checkUserExistence = (email: string): boolean => {
  // Здесь должна быть реальная проверка, например, запрос к серверу.
  // Для демонстрации считаем, что пользователь существует, если email заканчивается на "exist.com".
  return email.endsWith("admin@admin.com");
};
</script>

<template>
  <MainLayout>
    <Fieldset class="auth__container" legend="Authorization">
      <div class="auth__part auth__part--register">
        <h2>Enter Your Email</h2>
        <form :onsubmit="false" class="auth__form">
          <InputGroup>
            <FloatLabel class="auth__input auth__input--email">
              <InputText
                id="email"
                type="email"
                v-model="email"
                :style="widthFull"
                :invalid="isEmailChecked && !isEmailValid"
                v-on:input="emailChangeHanler"
              />
              <label for="email">E-mail</label>
            </FloatLabel>
            <Button
              @click="validateEmail"
              :outlined="isEmailChecked && isEmailValid ? false : true"
              :disabled="isEmailChecked && isEmailValid ? true : false"
              :icon="isEmailChecked && isEmailValid ? 'pi pi-check' : 'pi pi-arrow-right'"
            />
          </InputGroup>
          <FloatLabel
            v-if="isEmailChecked && isEmailValid"
            class="auth__input auth__input--password"
          >
            <Password
              id="password"
              v-model="password"
              toggleMask
              :inputStyle="widthFull"
            />
            <label for="password">Password</label>
          </FloatLabel>
          <FloatLabel
            v-if="isEmailChecked && isEmailValid && !isUserExist"
            class="auth__input auth__input--repeat-password"
          >
            <Password
              id="repeatPassword"
              v-model="repeatPassword"
              toggleMask
              :inputStyle="widthFull"
            />
            <label for="repeatPassword">Repeat Password</label>
          </FloatLabel>
        </form>
      </div>
      <div class="auth__part auth__part--services">
        <h2>Log In With Google</h2>
        <Button
          class="auth__btn auth__btn--google"
          icon="pi pi-google"
          label="Google"
          :outlined="isDark()"
        />
      </div>
    </Fieldset>
  </MainLayout>
</template>

<style scoped lang="scss">
.auth__container {
  margin-inline: auto;
  width: 100%;
  max-width: 400px;
}

.auth__title {
  display: flex;
  align-items: center;
  column-gap: 10px;
}

.auth__part--services {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.auth__form {
  display: flex;
  flex-direction: column;
  row-gap: 26px;
  margin-top: 20px;
}

.auth__btn {
  width: 100%;
}

.p-password.p-inputwrapper {
  width: 100%;
  .p-password-input {
    width: 100%;
  }
}
</style>
