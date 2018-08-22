<template>
  <v-container id="skillsContainer" fluid no-padding fill-height>
    <v-layout row no-padding fill-height>
      <v-flex xs6 fill-height>
        <v-card dark tile flat height="100%" color="white" style="overflow: hidden">
          <v-card-text style="color: black;" id="skillsFeature">
            <img id="skillImage" src="../assets/SkillEFCore2x.png" style="width: 100%;">
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 center-text orange>
        <v-card dark tile flat height="100%" class="center-text" color="orange">
          <v-container>
            <v-layout row>
              <v-card-text class="center-text display-2">EF Core 2.x</v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text class="no-padding">Entity Framework Core</v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                EF Core 2.x is an object relational mapper built for use in .NET Core 2.x
                to develop against a variety of relational and non-relational database
                engines. Object relational mappers allow for LOB application code to access
                data sources in a consistent, repeatable pattern regardless of what the
                underlying data engine is.
              </v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                EF Core 2.x uses a query language called Linq that is standardized across all
                data sources. This allows developers to only have to learn the query language
                once and facilitates the use of multiple storage engines providing flexibility
                to the application being developed.
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
  name: 'SkillEFCore2x',
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