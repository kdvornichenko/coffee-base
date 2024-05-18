<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import { isDark } from "@/functions/darkMode";

import { ref } from "vue";

const email = ref(null);
const password = ref(null);

const widthFull = { width: "100%" };
</script>

<template>
  <MainLayout>
    <Fieldset class="auth__container" legend="Authorization">
      <div class="auth__part auth__part--register">
        <h2>Create an account</h2>
        <form class="auth__form">
          <FloatLabel class="auth__input auth__input--email">
            <InputText id="email" type="email" v-model="email" :style="widthFull" />
            <label for="email">E-mail</label>
          </FloatLabel>
          <FloatLabel class="auth__input auth__input--password">
            <Password
              id="password"
              v-model="password"
              toggleMask
              :inputStyle="widthFull"
            />
            <label for="password">Password</label>
          </FloatLabel>
        </form>
      </div>
      <div class="auth__part auth__part--signin">
        <h2>Sign In With Google</h2>
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

.auth__part--signin {
  margin-top: 40px;
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
