<template>
  <v-container id="skillsContainer" fluid no-padding fill-height>
    <v-layout row no-padding fill-height>
      <v-flex xs6 fill-height>
        <v-card dark tile flat height="100%" color="white" style="overflow: hidden">
          <v-card-text style="color: black;" id="skillsFeature">
            <img id="skillImage" src="../assets/SkillMySQL.png" style="width: 100%;">
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 center-text red>
        <v-card dark tile flat height="100%" class="center-text" color="red">
          <v-container>
            <v-layout row>
              <v-card-text class="center-text display-2">MySQL</v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                MySQL is a relational database management system that facilitates row based
                storage of data sets into tables. It also provides a means to query and manipulate
                data sets to gleam useful information out of or store data provided by end users
                or an automated process.
              </v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                MySQL has many competitors and each have their own unique set of features.
                While MySQL is free, it has major backing and funding from Oracle. MySQL
                has paid enterprise options in addition to its free version.
              </v-card-text>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex red style="padding-right: 10px;">
        <v-chip color="red"
            @click="closeSkill"
            text-color="white">X</v-chip>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { TweenLite } from 'gsap'

export default {
  name: 'SkillMySQL',
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
