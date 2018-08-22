<template>
  <v-container id="skillsContainer" fluid no-padding fill-height>
    <v-layout row no-padding fill-height>
      <v-flex xs6>
        <v-card dark tile flat color="white" style="overflow: hidden">
          <v-card-text style="color: black;" id="skillsFeature" class="img-wrap">
            <img id="skillImage" src="../assets/SkillCrystalReports.png" class="image">
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 fill-height>
      <v-card dark tile flat height="100%" class="center-text" color="primary">
          <v-container>
            <v-layout row>
              <v-card-text class="center-text display-2">Crystal Reports</v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                SAP Crystal Reports is a pixel-perfect reporting tool that allows for the development
                and consumption of paginated reports. While Crystal Reports has slowed in development
                in recent years, it is still widely used all over the world due to having a very fast
                underlying rendering engine and the flexibility to be included in LOB applications with
                minimal development effort.
              </v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                Crystal Reports is an aging platform that SAP has begun marketing exclusively to small
                businesses rather than large enterprises, and their licensing model reflects that.
                Alternatives include SQL Server Reporting Services, Telerik Reporting Services and others.
              </v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                If your intent is to display advanced visualizations on a dashboard, consider products such
                as Tableau or Power BI instead.
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
  name: 'SkillCrystalReports',
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
.image {
  max-width: 2000px;
}
</style>