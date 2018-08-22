<template>
  <v-container id="skillsContainer" fluid no-padding fill-height>
    <v-layout row no-padding fill-height>
      <v-flex xs6 fill-height>
        <v-card dark tile flat height="100%" color="white" style="overflow: hidden">
          <v-card-text style="color: black;" id="skillsFeature">
            <img id="skillImage" src="../assets/SkillVueJS.png" style="width: 100%;">
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 center-text>
        <v-card dark tile flat height="100%" class="center-text" color="primary">
          <v-container>
            <v-layout row>
              <v-card-text class="center-text display-2">VueJS</v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                VueJS is a web application framework that runs on top of JavaScript to provide
                a more advanced web rendering engine that incorporates modern programming techniques
                such as separation of concerns, precompiling of resources, unit testing and code 
                validation when used with the commandline interface. VueJS can be used to run
                and entire website or can be included on individual pages when needed.
              </v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                VueJS has many competitors, including Angular and ReactJS, each with their own
                advantages and drawbacks. However, as of 2018, VueJS is considered by many to be the fastest
                renderer compared to its competition.
              </v-card-text>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex primary style="padding-right: 10px;">
        <v-chip color="primary"
            @click="closeSkill"
            text-color="white">X</v-chip>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'SkillVueJS',
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