<template>
  <v-container id="skillsContainer" fluid no-padding fill-height>
    <v-layout row no-padding fill-height>
      <v-flex xs6 fill-height>
        <v-card dark tile flat height="100%" color="white" style="overflow: hidden">
          <v-card-text style="color: black;" id="skillsFeature">
            <img id="skillImage" src="../assets/SkillCSS.png" style="width: 100%;">
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 center-text>
        <v-card dark tile flat height="100%" class="center-text" color="primary">
          <v-container>
            <v-layout row>
              <v-card-text class="center-text display-2">CSS</v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text class="no-padding">Cascading Stylesheet</v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                CSS is a markup language that provides the design of a website. It
                contains all of the fonts, colors and styles that are applied to
                a web page. CSS can be applied inline to specific HTML tags
                (not recommended in most cases) or they can be included in the
                head tag of HTML as a separate file for your browser to download.
              </v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                CSS in its pure form comes with a few problems, including violating
                the DRY (Don't Repeat Yourself) principle of programming. Because of
                this, alternative markup such as SASS can be used in place of CSS which
                provides features such as mixins, variables and nestable classes. While
                browsers cannot render markup like SASS, a transpiler can be used to
                convert SASS to CSS automatically for a browser to consume.
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
import { TweenLite } from 'gsap'

export default {
  name: 'SkillCSS',
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
