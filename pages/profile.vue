<template>
  <div class="container">
    <div class="profile-container">
      <div>
        <img src="thomas-profile.jpeg"
             alt="profile" class="profile-image">
        <p>{{name}}</p>
        <p>{{email}}</p>
      </div>

      <div class="profile-modes-container">
        <v-btn @click="setShowFutureProfile(false)" depressed elevation="2" rounded>Current Profile</v-btn>
        <v-btn @click="setShowFutureProfile(true)" depressed elevation="2" rounded>Future Profile</v-btn>
      </div>

      <div class="profile-section">
        <h2>WORK EXPERIENCE</h2>
        <ul>
          <li v-for="experience in workexperience" v-bind:key="experience.description">
            {{experience.description}}
          </li>
        </ul>
      </div>

      <div class="profile-section">
        <h2>SKILLS</h2>
        <div class="chips-container">
          <v-chip v-for="(skill, i) in skills" v-bind:key="i" :color="getColorOf(skill)">
            {{skill.name}}
          </v-chip>
        </div>
      </div>

      <div class="profile-section">
        <h2>EDUCATION</h2>
        <ul>
          <li v-for="(education, i) in education" v-bind:key="i" v-bind:style="{ color: education.future ? 'orange' : '', cursor: education.future ? 'pointer' : '' }">{{ education.name }}</li>
        </ul>
      </div>

      <div class="profile-section">
        <h2>SUGGESTED JOBS</h2>
        <ul>
          <li v-for="job in suggestedJobs" v-bind:key="job.title">{{job.title}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapGetters} from 'vuex'
import {Skill} from "~/store/profile";

export default Vue.extend({
  computed: {
    ...mapGetters({
      name: 'profile/name',
      email: 'profile/email',
      skills: 'profile/skills',
      education: 'profile/education',
      suggestedJobs: "profile/suggestedJobs",
      workexperience: "profile/workexperience",
    }),
  },
  data: function () {
    return {
      showFutureProfile: false,
    }
  },
  methods: {
    getColorOf(a: Skill) {
      if (a.future) {
        return 'orange'
      }
      return 'green'
    },
    setShowFutureProfile: function (show: boolean) {
      this.$store.commit('profile/UPDATE_INCLUDE_FUTURE', show)
    }
  }
})
</script>

<style>
  .profile-section {
    margin-top: 32px;
    text-align: left;
  }

  .profile-container {
    max-width: 500px;
    margin-bottom: 100px;
  }

  .profile-image {
    border-radius: 50%;
    height: 160px;
    width: 160px;
    border: 2px solid #19bcf4;
  }

  .profile-modes-container {
    margin-bottom: 32px;
  }

  .profile-modes-container .v-btn {
    background-color: #19bcf4 !important;
    color: white;
  }

  .chips-container {
    margin-left: 24px;
  }

  .v-chip {
    margin-bottom: 8px;
    cursor: pointer;
  }

  .v-chip:not(last-child) {
    margin-right: 8px;
  }

  .profile-section h2 {
    color: rgb(0 0 0 / 0.87);
    letter-spacing: 2px;
    font-weight: 400;
    margin-bottom: 16px;
  }

  li {
    margin: 10px 0;
  }
</style>
