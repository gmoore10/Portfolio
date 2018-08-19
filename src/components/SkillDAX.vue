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
      <v-flex xs6 skillsright center-text>
        <v-card dark tile flat height="100%" class="center-text" color="primary">
          <v-card-text class="center-text">DAX</v-card-text>
          <v-card-text class="block center-text">Test</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'SkillDAX',
  methods: {
    animateIt () {
      TweenLite.to('#skillsContainer', 0.25, {
          opacity: 1
      })
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
</style>