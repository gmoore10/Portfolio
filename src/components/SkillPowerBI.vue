<template>
  <v-container id="skillsContainer" fluid no-padding fill-height>
    <v-layout row no-padding fill-height>
      <v-flex xs6 fill-height>
        <v-card dark tile flat height="100%" color="white" style="overflow: hidden">
          <v-card-text style="color: black;" id="skillsFeature">
            <img id="skillImage" src="../assets/SkillPowerBI.png" style="width: 100%;">
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 center-text>
        <v-card dark tile flat height="100%" class="center-text" color="primary">
          <v-container>
            <v-layout row>
              <v-card-text class="center-text display-2">Power BI</v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                Power BI is an analysis tool designed to provide reporting in primarily
                a visual format. Unlike its sister product, SSRS, it is not designed
                for printing reports or for pixel-perfect reporting where design is
                key. Power BI can consume a variety of data sources using the Power Query
                engine and can work with massive amounts of data (1 billion+ records).
              </v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                Power BI's underlying data engine is nearly identical to its enterprise
                cousin, SQL Server Analysis Services. It utilizes the DAX query engine
                to manipulate data prior to displaying it and can also take advantage
                of the M query language for advanced consumption of data sources.
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
import { TweenLite } from 'gsap'

export default {
  name: 'SkillPowerBI',
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
