<template>
  <v-container id="skillsContainer" fluid no-padding fill-height>
    <v-layout row no-padding fill-height>
      <v-flex xs6 fill-height>
        <v-card dark tile flat height="100%" color="white" style="overflow: hidden">
          <v-card-text style="color: black;" id="skillsFeature">
            <img id="skillImage" src="../assets/SkillTableau.png" style="width: 100%;">
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 center-text>
        <v-card dark tile flat height="100%" class="center-text" color="primary">
          <v-container>
            <v-layout row>
              <v-card-text class="center-text display-2">Tableau</v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                Tableau is a reporting tool that is designed to present information
                from data sources primarily in a visual or tabular format. It can consumes
                massive datasets and contains a powerful formula engine that allows for
                advanced functions to be applied to data. It also contains a full visual 
                rendering engine that allows for completely customized visual not available
                out-of-box.
              </v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                Tableau's primary competitor is Microsoft's Power BI. Many features are similar,
                but Power BI has a unique feature in that custom visualizations can be created
                and distributed via its community of users. Tableau requires every custom visualization
                to be rebuilt in every report/dashboard designed.
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
  name: 'SkillTableau',
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