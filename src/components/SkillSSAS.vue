<template>
  <v-container id="skillsContainer" fluid no-padding fill-height>
    <v-layout row no-padding fill-height>
      <v-flex xs6 fill-height>
        <v-card dark tile flat height="100%" color="white" style="overflow: hidden">
          <v-card-text style="color: black;" id="skillsFeature">
            <img id="skillImage" src="../assets/SkillSSAS.png" style="width: 100%;">
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 center-text red>
        <v-card dark tile flat height="100%" class="center-text" color="red">
          <v-container>
            <v-layout row>
              <v-card-text class="center-text display-2">SSAS</v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text class="no-padding">SQL Server Analysis Services</v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                SSAS is a data analysis engine that, unlike relational database that store
                databases in row format on disk, instead stores databases in columnstore
                format in memory. This allows for very efficient aggregation and application
                of business logic to very large data sets, limited only by the speed at
                which the RAM on a server can send the data to the CPU.
              </v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                Columnstore data sources like SSAS require additional curating and
                optimization. Because SSAS stores data in memory, only data points
                that are actively being used should be included in the stored data
                set. This ensures high levels of efficiency when querying large
                amounts of data out of this system.
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
  name: 'SkillSSAS',
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
