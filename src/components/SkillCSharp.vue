<template>
  <v-container id="skillsContainer" fluid no-padding fill-height>
    <v-layout row no-padding fill-height>
      <v-flex xs6 fill-height>
        <v-card dark tile flat height="100%" color="white" style="overflow: hidden">
          <v-card-text style="color: black;" id="skillsFeature">
            <img id="skillImage" src="../assets/SkillCSharp.png" style="width: 100%;">
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 center-text green>
        <v-card dark tile flat height="100%" class="center-text" color="green">
          <v-container>
            <v-layout row>
              <v-card-text class="center-text display-2">C#</v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                C# is a programming language developed by Microsoft and used in their
                suite of .NET products including .NET Framework and .NET Core. C# is 
                a compiled language that gets its roots from the C language. It contains
                many similarities to Java while retaining its own unique implementation 
                of features. It recently became cross-platform with the introduction 
                of .NET Core.
              </v-card-text>
            </v-layout>
            <v-layout row>
              <v-card-text>
                C# is one of several 1st class programming languages available in .NET.
                The others include VB and F#, all of which are compiled down to the same
                intermediate language and then packaged into .DLL files for portability.
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
export default {
  name: 'SkillCSharp',
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