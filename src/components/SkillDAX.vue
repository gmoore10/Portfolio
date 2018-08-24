<template>
  <v-container id="skillsContainer" style="opacity: 0" skill fluid no-padding fill-height>
    <v-layout row no-padding fill-height>
      <v-flex xs6 fill-height>
        <v-card dark tile flat height="100%" color="white" style="overflow: hidden">
          <v-card-text style="color: black;" id="skillsFeature">
            <img id="skillImage" src="../assets/SkillDAX.png" style="width: 100%;">
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 center-text orange>
        <v-card dark tile flat height="100%" class="center-text" color="orange">
          <v-container>
            <v-layout row>
              <v-card-text class="center-text display-2">DAX</v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text class="no-padding">Data Analysis Expressions</v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                The DAX expression language is used to query both Power BI data sources
                and SQL Server Analysis Services data sources. The language is
                specfically designed to aggregate very large data sets (billions
                of rows) very quickly against in memory data sources.
              </v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                This particular query language is not suited for returning large amounts of records
                due to how the underlying columnstore engine is designed. If you are looking to
                return large data sets in a row-by-row fashion, consider T-SQL and a row-based
                storage engine such as MySQL, Microsoft SQL Server or PostreSQL.
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
  name: 'SkillDAX',
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

<style>
.block {
  display: block;
}
.no-padding {
  padding: 0px !important;
}
</style>
