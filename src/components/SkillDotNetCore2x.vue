<template>
  <v-container id="skillsContainer" fluid no-padding fill-height>
    <v-layout row no-padding fill-height>
      <v-flex xs6 fill-height>
        <v-card dark tile flat height="100%" color="white" style="overflow: hidden">
          <v-card-text style="color: black;" id="skillsFeature">
            <img id="skillImage" src="../assets/SkillDotNetCore2x.png" style="width: 100%;">
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 center-text green>
        <v-card dark tile flat height="100%" class="center-text" color="green">
          <v-container>
            <v-layout row>
              <v-card-text class="center-text display-2">.NET Core 2.x</v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                .NET Core 2.x is a development framework designed to support the development
                of cross-platform applications. Unlike the .NET Framework, .NET Core is open-source
                and has the ability to run on MacOS, Windows and many flavors of Linux.
                .NET Core contains many modern programming standards including unit testing,
                dependency injection and can be written in either C#.net or VB.net.
              </v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                .NET Core is relatively new to the development scene where it is not yet been
                widely adopted. It also does not support ASP.net Web Forms. If that technology is
                needed, consider the Windows-only .NET Framework.
              </v-card-text>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex green style="padding-right: 10px;">
        <v-chip color="green"
            @click="closeSkill"
            text-color="white">X</v-chip>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { TweenLite } from 'gsap'

export default {
  name: 'SkillDotNetCore2x',
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
