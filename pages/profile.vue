<template>
  <div class="container">
    <div>
      <h1 class="title">Profile</h1>

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
        </p>
      </div>

      <div class="profile-section">
        <h2>EDUCATION</h2>
        <ul>
          <li v-for="education in profile.education" v-bind:key="education">{{education}}</li>
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
  }
})
</script>

<style>
.profile-section {
  margin-top: 32px;
}
</style>
