<template>
  <v-container id="skillsContainer" fluid no-padding fill-height>
    <v-layout row no-padding fill-height>
      <v-flex xs6 fill-height>
        <v-card dark tile flat height="100%" color="white" style="overflow: hidden">
          <v-card-text style="color: black;" id="skillsFeature">
            <img id="skillImage" src="../assets/SkillJavaScript.png" style="width: 100%;">
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 center-text>
        <v-card dark tile flat height="100%" class="center-text" color="primary">
          <v-container>
            <v-layout row>
              <v-card-text class="center-text display-2">JavaScript</v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                JavaScript is the most popular interpreted scripting language
                available for web browsers today. While it has Java in the name,
                it is not related to the Java language in any way. JavaScript enables
                interactivity on web pages and is considered an integral part of web
                development.
              </v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                Many versions of JavaScript exist, not all of which are universally adopted.
                Because of this, transpilers must be used for newer revisions of JavaScript 
                to ensure compatibility with all modern browsers.
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
  name: 'SkillJavaScript',
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