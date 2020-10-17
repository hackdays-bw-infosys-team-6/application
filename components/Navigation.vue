<template>
  <div class="navigation-links">
    <nuxt-link to="/find-jobs">Find</nuxt-link>
    <nuxt-link to="/inspirations">Inspirations</nuxt-link>
    <nuxt-link to="/saved-jobs">Saved</nuxt-link>
    <nuxt-link to="/learn">Learn</nuxt-link>
    <nuxt-link to="/profile">Profile</nuxt-link>
  </div>
</template>

<style>
.navigation-links {
  position: fixed;
  display: flex;
  justify-content: space-around;
  bottom: 0;
  width: 100%;
  height: 32px;
}
</style>
