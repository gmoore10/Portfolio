<template>
  <v-container id="skillsContainer" style="opacity: 0" skill fluid no-padding fill-height>
    <v-layout row no-padding fill-height>
      <v-flex xs6 fill-height>
        <v-card dark tile flat height="100%" color="white">
          <v-card-text style="color: black" id="skillsFeature">
            <v-card-media src="/img/skills/SkillDAX.png"></v-card-media>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 skillsright center-text>
        <v-card dark tile flat height="100%" class="center-text" color="primary">
          <v-card-text class="center-text">DAX</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { TextPlugin } from 'gsap/TextPlugin'
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
.DAXGreenText {
  color: teal;
}
.DAXBlueText {
  color: blue;
}
.DAXBlackText {
  color: black;
}
</style>