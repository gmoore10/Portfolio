<template>
  <v-container id="skillsContainer" fluid no-padding fill-height>
    <v-layout row no-padding fill-height>
      <v-flex xs6 fill-height>
        <v-card dark tile flat height="100%" color="white" style="overflow: hidden">
          <v-card-text style="color: black;" id="skillsFeature">
            <img id="skillImage" src="../assets/SkillSSRS.png" style="width: 100%;">
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 center-text>
        <v-card dark tile flat height="100%" class="center-text" color="primary">
          <v-container>
            <v-layout row>
              <v-card-text class="center-text display-2">SSRS</v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text class="no-padding">SQL Server Reporting Services</v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                SSRS is a pixel-perfect reporting tool that allows for the development
                and consumption of paginated reports. Although SSRS development has
                slowed in recent years, Microsoft still maintains and supports it as
                an enterprise-grade reporting tool. It contains a feature set similar
                to its competitors such as charts, graphs and tables, but does not include
                much in the way of interactivity.
              </v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                If your intent is to display advanced visualizations on a dashboard,
                consider products such as Tableau or Power BI instead.
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
  name: 'SkillSSRS',
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
