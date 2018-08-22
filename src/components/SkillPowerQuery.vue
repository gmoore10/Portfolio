<template>
  <v-container id="skillsContainer" fluid no-padding fill-height>
    <v-layout row no-padding fill-height>
      <v-flex xs6 fill-height>
        <v-card dark tile flat height="100%" color="white" style="overflow: hidden">
          <v-card-text style="color: black;" id="skillsFeature">
            <img id="skillImage" src="../assets/SkillPowerQuery.png" style="width: 100%;">
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 center-text orange>
        <v-card dark tile flat height="100%" class="center-text" color="orange">
          <v-container>
            <v-layout row>
              <v-card-text class="center-text display-2">Power Query</v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                Power Query is a data access engine that can act as an "Extract-Transform-Load"
                tool in limited says. It can ingest a data set, manipulate it by removing fields
                or adjusted values, and then sending it off to be stored in Analysis Services or 
                a Power BI data source.
              </v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                Power Query is simplistic in nature and does not replace a skill like SQL. It
                can manipulate data sets in simple ways but cannot accomplish more advanced
                modifications such as regex pattern matching.
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
export default {
  name: 'SkillPowerQuery',
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