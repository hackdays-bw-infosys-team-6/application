<template>
  <div class="container">
    <div>
      <h1 class="title setup-title">Upload Profile</h1>
      <div class="uploads">
        <input type="file" name="" id="">

        <h2>Connect</h2>
        <button>LinkedIn</button>
        <button>Xing</button>

        <nuxt-link to="/profiling-questions">Continue</nuxt-link>
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
.uploads {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
}
</style>
