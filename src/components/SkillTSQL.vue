<template>
  <v-container id="skillsContainer" fluid no-padding fill-height>
    <v-layout row no-padding fill-height>
      <v-flex xs6 fill-height>
        <v-card dark tile flat height="100%" color="white" style="overflow: hidden">
          <v-card-text style="color: black;" id="skillsFeature">
            <img id="skillImage" src="../assets/SkillTSQL.png" style="width: 100%;">
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 center-text orange>
        <v-card dark tile flat height="100%" class="center-text" color="orange">
          <v-container>
            <v-layout row>
              <v-card-text class="center-text display-2">T-SQL</v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text class="no-padding">Transact SQL</v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                T-SQL is Microsoft's flavor of SQL used to query its SQL Server database
                engine. T-SQL is an old, mature data querying procedural language that
                allows for very complex queries to be written to achieve desired data sets.
              </v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                T-SQL queries can be many thousands of lines long, or in the case of
                vendor applications, can be millions of lines long. T-SQL is not object-oriented
                which means that all code written in SQL is run in the order that it was written
                in (with the exception of GOTO statements).
              </v-card-text>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex orange style="padding-right: 10px;">
        <v-chip color="orange"
            @click="closeSkill"
            text-color="white">X</v-chip>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { TweenLite } from 'gsap'

export default {
  name: 'SkillTSQL',
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
