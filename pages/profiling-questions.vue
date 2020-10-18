<template>
  <div class="container">
    <div>
      <div v-for="question in filterQuestions()" v-bind:key="question.question" class="question">
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
              v-bind:class="{ 'reject-btn': answer.leave }"
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
              label: 'No, Thanks',
              outlined: true,
              leave: true
            },
            {
              label: 'Sure'
            }
          ]
        },
        {
          question: "Are you currently employed?",
          answers: [
            {
              label: 'Skip'
            },
            {
              label: 'No',
            },
            {
              label: 'Yes'
            }
          ]
        },
        {
          question: "Are you urgently in need of a job?",
          answers: [
            {
              label: 'Skip'
            },
            {
              label: 'No'
            },
            {
              label: 'Yes'
            }
          ]
        },
        {
          question: "Thank you! We have prepared your profile.",
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
  max-width: 250px;
  margin: 64px auto 0 auto;
}

.question:first-child {
  margin-top: 100px;
}

.question {
  margin-top: 30vh;
  margin-bottom: 30vh;
}
</style>
