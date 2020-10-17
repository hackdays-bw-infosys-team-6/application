<template>
  <div class="container">
    <div>
      <div>
        <button @click="showFutureProfile = false">Current Profile</button>
        <button @click="showFutureProfile = true">Future Profile</button>
      </div>

      <div>
        <img src="https://image.shutterstock.com/image-photo/portrait-mature-blond-man-smiling-600w-682038574.jpg" alt="profile" class="profile-image">
        <p>{{profile.name}}</p>
        <p>{{profile.email}}</p>
      </div>

      <div class="profile-section">
        <h2>WORK EXPERIENCE</h2>
        <ul>
          <li v-for="experience in profile.workexperience" v-bind:key="experience.description">{{experience.description}}</li>
        </ul>
      </div>

      <div class="profile-section">
        <h2>SKILLS</h2>
        <p>
          <span v-for="skill in profile.skills" v-bind:key="skill">{{skill}}</span>
          <template v-if="showFutureProfile">
            <span v-for="skill in profile.futureSkills" v-bind:key="skill">{{skill}}</span>
          </template>
        </p>
      </div>

      <div class="profile-section">
        <h2>EDUCATION</h2>
        <ul>
          <li v-for="education in profile.education" v-bind:key="education">{{education}}</li>
          <template v-if="showFutureProfile">
            <li v-for="education in profile.futureEducation" v-bind:key="education">{{education}}</li>
          </template>
        </ul>
      </div>

      <div class="profile-section">
        <h2>SUGGESTED JOBS</h2>
        <ul>
          <li v-for="job in profile.suggestedJobs" v-bind:key="job.title">{{job.title}}</li>
        </ul>
      </div>
    </div>

    <Navigation />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: function () {
    return {
      showFutureProfile: false,
      profile: {
        name: 'Thomas Müller',
        email: 'thomas.m@hotmail.com',
        workexperience: [
          {
            description: 'Senior Machine Operator | Schäffler | 2005 - 2020'
          },
          {
            description: 'Technician Apprenticeship | FAG | 2002 - 2005'
          }
        ],
        skills: [
          'G-code programming', 'CNC programming', 'Quality Control', 'Maintenance & Repair', 'Welding', 'Plan Management'
        ],
        futureSkills: [
          'Rapid tooling', '3D printing', 'Adaptive Manufacturing'
        ],
        education: [
          'Vocational training in machine technology'
        ],
        futureEducation: [
          'Generative Design for Additive Manufacturing',
          'Rapid Manufacturing',
          'Designing for 3D Printing with Fusion 360',
        ],
        suggestedJobs: [
          {
            title: 'Additive Manufacturing Technican',
            company: 'Tesla',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg',
            location: 'Berlin',
            posted: '3 days ago',
            liked: false
          }
        ]
      }
    }
  },
  methods: {
    setShowFutureProfile: function(show: boolean) {
      this.showFutureProfile = show;
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
