<script setup lang="ts">
import { ref } from "vue";
import LogoComponent from "../LogoComponent.vue";
import { useRouter } from "vue-router";
import { getAuth } from "firebase/auth";
import ThemeSwitcherComponent from "../ThemeSwitcherComponent.vue";

const isLoggedIn = ref<boolean>(false);

const checkCurrentUser = () => {
  const user = getAuth().currentUser;
  user ? (isLoggedIn.value = true) : (isLoggedIn.value = false);
};

const router = useRouter();

const items = ref([
  {
    label: "Tutors",
    icon: "pi pi-users",
    items: [
      {
        label: "All Tutors",
        route: "/tutors",
      },
    ],
  },
  {
    label: "Introduction",
    icon: "pi pi-link",
    command: () => {
      router.push("/introduction");
    },
  },
  {
    themeSwitcher: true,
  },
]);

checkCurrentUser();
</script>

<template>
  <header class="header">
    <Menubar :model="items">
      <template #start>
        <RouterLink to="/">
          <LogoComponent />
        </RouterLink>
      </template>

      <template #item="{ item, props, hasSubmenu }">
        <router-link
          v-if="item.route"
          v-slot="{ href, navigate }"
          :to="item.route"
          custom
        >
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
          <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
        </a>

        <ThemeSwitcherComponent
          v-if="item.themeSwitcher"
          class="theme-switcher--mobile"
        />
      </template>

      <template #end>
        <ThemeSwitcherComponent />
      </template>
    </Menubar>

    <!-- <div class="header__right"> -->
    <!-- <RouterLink v-if="!isLoggedIn" to="/login">
        <Button label="Log in" />
      </RouterLink>

      <RouterLink v-else="isLoggedIn" to="/profile">
        <Button label="Profile" />
      </RouterLink> -->
    <!-- </div> -->
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding-inline: $unit;

  transition: $trs;
  opacity: 0;

  position: sticky;
  top: 20px;
  z-index: 10;

  .p-menubar {
    width: 100%;
    backdrop-filter: blur(20px);
    background: none;
  }

  @media (min-width: 961px) {
    .theme-switcher--mobile {
      display: none;
    }
  }
}

// Некоторая стилизация p-menubar в вайле header.scss

.header__right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 20px;
}
</style>
