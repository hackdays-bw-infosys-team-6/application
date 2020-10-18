<template>
  <div class="landing-page-container">
    <div class="pitch-container hide-on-mobile">
      <h1>Skill match</h1>

      <p>Are you looking to pivot your career after a layoff?</p>
      <p>Skill Match offers an intelligent profiling solution to determine the best course of action for your career. Where other platforms offer you more of the same, the Skill Match platform is able to truly understand your wishes and is able create drastic change in your career.</p>

      <ul>
        <li>Intelligently personalised</li>
        <li>Re-skill yourself for future job market</li>
        <li>Find real jobs through our affiliates</li>
      </ul>

      <p>Join today, by signing up and downloading our application for your smartphone.</p>

      <div class="screenshot-container">
        <img src="screenshot-profile.png" alt="" srcset="">
        <img src="screenshot-courses.png" alt="" srcset="">
      </div>
    </div>
    <div class="login-container">
      <h1 class="title setup-title hide-on-desktop">Skill Match</h1>
      <h1 class="title setup-title hide-on-mobile">Welcome</h1>
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
p {
  margin: 16px 0;
  color: #000000de;
}

.landing-page-container {
  display: flex;
  flex-direction: row;
}

.pitch-container {
  background: white;
  width: calc(100vw - 400px);
  min-height: 100vh;
  padding: 50px;
}

.login-container {
  width: 100%;
  max-width: 400px;
  text-align: center;
  margin-top: 15vh;
  min-height: 85vh;
}

.screenshot-container {
  display: flex;
  justify-content: space-around;
  margin-top: 64px;
}

.screenshot-container img {
  background: #19bcf4;
  padding: 2px;
  border-radius: 20px;
  width: 150px;
}

.login {
  display: flex;
  flex-direction: column;
}

.next-btn {
  margin-top: 64px;
}

.pitch-container h1 {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #19bcf4;
  font-weight: 300;
  font-size: 64px;
  letter-spacing: 1px;
  margin-bottom: 30px;
}

.pitch-container ul {
  margin: 40px 0;
  list-style-type: circle;
  padding-left: 40px;
}

.pitch-container li {
  margin: 10px 0;
}

@media (max-width: 600px) {
  .hide-on-mobile {
    display: none !important;
  }
}

@media (min-width: 601px) {
  .hide-on-desktop {
    display: none !important;
  }
}

</style>
