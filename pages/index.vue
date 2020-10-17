<template>
  <div class="container">
    <div>
      <h1 class="title">Skill Match</h1>
      <div class="links">
        <div class="login">
          <input type="text" name="email" placeholder="email">
          <input type="text" name="password" placeholder="password">
          <nuxt-link to="/profile">Login</nuxt-link>
        </div>

        <nuxt-link to="/sign-up" class="sign-up">Sign Up</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
.links,
.login {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
}

.login {
  padding-top: 32px;
}

.sign-up {
  padding-top: 64px;
}
</style>
