<template>
  <v-container id="skillsContainer" fluid no-padding fill-height>
    <v-layout row no-padding fill-height>
      <v-flex xs6 fill-height>
        <v-card dark tile flat height="100%" color="white" style="overflow: hidden">
          <v-card-text style="color: black;" id="skillsFeature">
            <img id="skillImage" src="../assets/SkillMicrosoftSQLServer.png" style="width: 100%;">
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 center-text red>
        <v-card dark tile flat height="100%" class="center-text" color="red">
          <v-container>
            <v-layout row>
              <v-card-text class="center-text display-2">Microsoft SQL Server</v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                Microsoft's SQL Server is a relational database platform built for the enterprise.
                It contains many features common amongst its competitors while also containing a 
                variety of features built for small, medium and large corporations.
              </v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                While a free version exists, it is hampered by limited memory usage and 
                a relatively small maximum database size. If a free RDBMS system is required,
                consider MySQL or PostreSQL instead.
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
export default {
  name: 'SkillMicrosoftSQLServer',
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