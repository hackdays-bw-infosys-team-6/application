<template>
  <div class="container">
    <div>
      <h1 class="title setup-title">Skill Match</h1>
      <div class="links">

        <div class="login">
          <v-text-field label="Email" solo></v-text-field>
          <v-text-field label="Password" solo></v-text-field>
          <v-btn depressed elevation="2" rounded to="/profile">Login</v-btn>
        </div>

        <v-btn depressed elevation="2" rounded to="/sign-up" class="next-btn">Sign Up</v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'setup'
})
</script>

<style>
.login {
  display: flex;
  flex-direction: column;
}

.next-btn {
  margin-top: 64px;
}
</style>
