<template>
  <div class="container">
    <div>
      <h1 class="title">Welcome</h1>
      <div class="links">

        <v-text-field label="Email" solo></v-text-field>
        <v-text-field label="Password" type="password" solo></v-text-field>
        <v-text-field label="Repeat Password" type="password" solo></v-text-field>
        <v-file-input chips truncate-length="15" label="Upload your Resume"></v-file-input>
        <v-file-input chips truncate-length="15" label="LinkedIn"></v-file-input>

        <v-btn depressed elevation="2" rounded to="/profiling-questions" class="next-btn">Next</v-btn>
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
.next-btn {
  margin-top: 64px;
}
</style>
