<template>
  <div class="container">
    <div>
      <h1 class="title">Sign Up</h1>
      <div class="links">
        <input type="text" name="email" placeholder="email">
        <input type="text" name="password" placeholder="set password">

        <nuxt-link to="/upload-profile">Create Profile</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
.links {
  padding-top: 15px;
}
</style>
