<template>
  <div class="container">
    <div>
      <div>
        <button @click="setShowFutureProfile(false)">Current Profile</button>
        <button @click="setShowFutureProfile(true)">Future Profile</button>
      </div>

      <div>
        <img src="https://image.shutterstock.com/image-photo/portrait-mature-blond-man-smiling-600w-682038574.jpg"
             alt="profile" class="profile-image">
        <p>{{name}}</p>
        <p>{{email}}</p>
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
        <v-chip v-for="(skill, i) in skills" v-bind:key="i" :color="getColorOf(skill)">
          {{skill.name}}
        </v-chip>
      </div>

      <div class="profile-section">
        <h2>EDUCATION</h2>
        <ul>
          <li v-for="(education, i) in education" v-bind:key="i">{{ education.name }}</li>
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
  }

  .profile-image {
    border-radius: 50%;
    height: 60px;
    width: 60px;
  }
</style>
