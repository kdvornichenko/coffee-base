<script setup lang="ts"></script>

<template>
  <nav>
    <ul>
      <RouterLink to="/tutors">
        <li>Tutors</li>
      </RouterLink>
      <RouterLink to="/clases">
        <li>Group classes</li>
      </RouterLink>
      <RouterLink to="/training">
        <li>Corporate training</li>
      </RouterLink>
      <RouterLink to="/job">
        <li>Become a&nbsp;tutor</li>
      </RouterLink>
      <RouterLink to="/faq">
        <li>FAQ</li>
      </RouterLink>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  ul {
    display: flex;
    column-gap: 30px;
    @include yo(
      "column-gap",
      (
        $mob: 10px,
        $desktop-md: 30px,
      )
    );
  }
}
</style>
