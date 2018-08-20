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
          <v-card-text class="center-text">DAX</v-card-text>
          <v-card-text class="block">Test</v-card-text>
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
</style>