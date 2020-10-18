<template>
  <div class="container">
    <div>
      <div v-for="question in filterQuestions()" v-bind:key="question.question" class="question">
        <div>
          <h1 class="title setup-title">{{question.question}}</h1>
          <div class="actions">
            <template v-if="questions.length !== currentQuestion">
              <v-btn
                v-for="answer in question.answers"
                v-bind:key="answer.label"
                depressed
                elevation="2"
                rounded
                :outlined="answer.outlined"
                @click="nextQuestion"
                v-bind:class="{ 'reject-btn': answer.outlined}"
                :to="answer.leave ? '/profile' : undefined"
              >
                {{answer.label}}
              </v-btn>
            </template>
            <v-btn v-if="questions.length === currentQuestion" depressed elevation="2" rounded to="/profile">View Profile</v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'setup',
  methods: {
    nextQuestion: function() {
      this.currentQuestion++;
      setTimeout(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
      }, 50);
    },
    filterQuestions() {
      return this.questions.slice(0, this.currentQuestion)
    }
  },
  data: function() {
    return {
      currentQuestion: 1,
      questions: [
        {
          question: "Hi Thomas, we would like to get to know you better",
          answers: [
            {
              label: 'Sure'
            },
            {
              label: 'No, Thanks',
              outlined: true,
              leave: true
            },
          ]
        },
        {
          question: "Are you currently employed?",
          answers: [
            {
              label: 'No',
            },
            {
              label: 'Yes'
            },
            {
              label: 'Skip',
              outlined: true
            },
          ]
        },
        {
          question: "Are you urgently in need of a job?",
          answers: [
            {
              label: 'No'
            },
            {
              label: 'Yes'
            },
            {
              label: 'Skip',
              outlined: true
            },
          ]
        },
        {
          question: "Are you happy with your current field of work?",
          answers: [
            {
              label: 'No'
            },
            {
              label: 'Somewhat'
            },
            {
              label: 'Yes'
            },
            {
              label: 'Skip',
              outlined: true
            },
          ]
        },
        {
          question: "How long is your remaining career perspective?",
          answers: [
            {
              label: '0 - 5 years'
            },
            {
              label: '5 - 15 years'
            },
            {
              label: '15+ years'
            },
            {
              label: 'Skip',
              outlined: true
            },
          ]
        },
        {
          question: "Based on your current domain knowledge, does any of the following sound interesting?",
          answers: [
            {
              label: 'Quality Assurance'
            },
            {
              label: '3D printing'
            },
            {
              label: 'Embedded Programming'
            },
            {
              label: 'Skip',
              outlined: true
            },
          ]
        },
        {
          question: "Thank you, for allowing us to get to know you! We have prepared your profile.",
          answers: []
        }
      ]
    }
  }
})
</script>

<style>
.reject-btn {
  color: white !important;
}

.actions {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  max-width: 250px;
  margin: 64px auto 0 auto;
}

.actions .v-btn {
  margin-top: 16px;
}

.question {
  height: calc(100vh - 24px);
  display: flex;
  align-items: center;
}
</style>
