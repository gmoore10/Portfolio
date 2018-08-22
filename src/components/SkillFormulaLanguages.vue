<template>
  <v-container id="skillsContainer" fluid no-padding fill-height>
    <v-layout row no-padding fill-height>
      <v-flex xs6 fill-height>
        <v-card dark tile flat height="100%" color="white" style="overflow: hidden">
          <v-card-text style="color: black;" id="skillsFeature">
            <img id="skillImage" src="../assets/SkillFormulaLanguages.png" style="width: 100%;">
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 center-text green>
        <v-card dark tile flat height="100%" class="center-text" color="green">
          <v-container>
            <v-layout row>
              <v-card-text class="center-text display-2">Formula Languages</v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                The various formula languages that are packaged with any reporting tool (Tableau,
                SSRS, Power BI, etc.) are a valuable tool in aiding in the proper display of data
                points on a report. They can handle simple aggregations and formatting and also 
                work with complex window functions to help summarize data sets in meaningful ways.
              </v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                The biggest disadvantage to this tool is that every reporting tool has a different
                formula language used to accomplish the same task. This can cause fragmentation
                in knowledge when multiple reporting platforms are used.
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
export default {
  name: 'SkillFormulaLanguages',
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