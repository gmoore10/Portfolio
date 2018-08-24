<template>
  <v-container id="skillsContainer" fluid no-padding fill-height>
    <v-layout row no-padding fill-height>
      <v-flex xs6 fill-height>
        <v-card dark tile flat height="100%" color="white" style="overflow: hidden">
          <v-card-text style="color: black;" id="skillsFeature">
            <img id="skillImage" src="../assets/SkillNodeJS.png" style="width: 100%;">
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 center-text green>
        <v-card dark tile flat height="100%" class="center-text" color="green">
          <v-container>
            <v-layout row>
              <v-card-text class="center-text display-2">NodeJS</v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                NodeJS is a server-based implementation of the ES5/ES6 versions of the
                JavaScript programming language. It is designed to run as a backend server
                language that can access data and run logic in ways similar to PHP, C# and
                other languages only known for this feature.
              </v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                NodeJS is uniquely positioned for quick adoption due to it using the
                highly-adopted and unversially-understood JavaScript programming language.
                NodeJS is free and open-source. In its base form, it contains about as
                much functionality as C. However after adding a few packages to a project
                it can run as a full web server.
              </v-card-text>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex green style="padding-right: 10px;">
        <v-chip color="green"
            @click="closeSkill"
            text-color="white">X</v-chip>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { TweenLite } from 'gsap'

export default {
  name: 'SkillNodeJS',
  methods: {
    animateIt () {
      TweenLite.to('#skillsContainer', 0.25, {
        opacity: 1
      })
    },
    closeSkill () {
      this.$store.state.currentSkillComponent = ''
    }
  },
  mounted () {
    this.animateIt()
  }
}
</script>
