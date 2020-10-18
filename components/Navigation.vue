<template>
  <v-card>
    <v-footer fixed padless>
      <v-btn v-for="nav in navigations" :key="nav.icon" :to="nav.route" class="mx-4" icon>
        <v-icon size="24px">{{ nav.icon }}</v-icon>
      </v-btn>
    </v-footer>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => {
    return {
      navigations: [
        {
          icon: 'mdi-magnify',
          route: '/find-jobs'
        },
        {
          icon: 'mdi-play-box-multiple',
          route: '/inspirations'
        },
        {
          icon: 'mdi-heart-outline',
          route: '/saved-jobs'
        },
        {
          icon: 'mdi-text-box-multiple',
          route: '/learn'
        },
        {
          icon: 'mdi-account-outline',
          route: '/profile'
        }
      ],
    }
  }
})
</script>

<style>
.v-footer {
  display: flex;
  justify-content: space-around;
  bottom: 0;
  width: 100%;
  height: 50px;
}
</style>
