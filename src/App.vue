<template>
  <div id="app">
    <v-app>
      <router-view/>
      <v-toolbar dark color="primary">
        <v-toolbar-title>Copyright &copy; 2018 Garrett Moore. All Rights Reserved</v-toolbar-title>
      </v-toolbar>
      <div id="animate"
           style="display: none; position: absolute; z-index: 1000; top: 50%; left: 50%;">
        <component v-bind:is="currentSkillComponent"></component>
      </div>
    </v-app>
  </div>
</template>

<script>
import Vue from 'vue'
import SkillCrystalReports from './components/SkillCrystalReports'
import SkillCSharp from './components/SkillCSharp'
import SkillCSS from './components/SkillCSS'
import SkillDAX from './components/SkillDAX'
import SkillDotNetCore2x from './components/SkillDotNetCore2x'
import SkillEFCore2x from './components/SkillEFCore2x'
import SkillFormulaLanguages from './components/SkillFormulaLanguages'
import SkillFunctions from './components/SkillFunctions'
import SkillHTML from './components/SkillHTML'
import SkillJavaScript from './components/SkillJavaScript'
import SkillMicrosoftSQLServer from './components/SkillMicrosoftSQLServer'
import SkillMySQL from './components/SkillMySQL'
import SkillNodeJS from './components/SkillNodeJS'
import SkillPowerBI from './components/SkillPowerBI'
import SkillPowerQuery from './components/SkillPowerQuery'
import SkillSequelize from './components/SkillSequelize'
import SkillSSAS from './components/SkillSSAS'
import SkillSSRS from './components/SkillSSRS'
import SkillTableau from './components/SkillTableau'
import SkillTSQL from './components/SkillTSQL'
import SkillVueJS from './components/SkillVueJS'

Vue.component('SkillCrystalReports', SkillCrystalReports)
Vue.component('SkillCSharp', SkillCSharp)
Vue.component('SkillCSS', SkillCSS)
Vue.component('SkillDAX', SkillDAX)
Vue.component('SkillDotNetCore2x', SkillDotNetCore2x)
Vue.component('SkillEFCore2x', SkillEFCore2x)
Vue.component('SkillFormulaLanguages', SkillFormulaLanguages)
Vue.component('SkillFunctions', SkillFunctions)
Vue.component('SkillHTML', SkillHTML)
Vue.component('SkillJavaScript', SkillJavaScript)
Vue.component('SkillMicrosoftSQLServer', SkillMicrosoftSQLServer)
Vue.component('SkillMySQL', SkillMySQL)
Vue.component('SkillNodeJS', SkillNodeJS)
Vue.component('SkillPowerBI', SkillPowerBI)
Vue.component('SkillPowerQuery', SkillPowerQuery)
Vue.component('SkillSequelize', SkillSequelize)
Vue.component('SkillSSAS', SkillSSAS)
Vue.component('SkillSSRS', SkillSSRS)
Vue.component('SkillTableau', SkillTableau)
Vue.component('SkillTSQL', SkillTSQL)
Vue.component('SkillVueJS', SkillVueJS)

export default {
  name: 'App',
  computed: {
    currentSkillComponent () {
      return this.$store.state.currentSkillComponent
    }
  },
  mounted () {
    this.$store.commit('saveWindowSize')

    window.addEventListener('resize', () => {
      this.$store.commit('saveWindowSize')
    })

    window.addEventListener('scroll', () => {
      this.$store.commit('saveScrollPosition')
    })
  }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

body {
  background-color: rgb(233, 233, 233);
  font-family: Arial, Helvetica, sans-serif;
}

#app {
  background: #fff;
  margin: auto;
  height: calc(60% - 50px);
}

.page {
  position: absolute;
  width: inherit;
}

.no-padding {
  padding: 0 !important;
}

#animate {
  border-top: 6px solid #1976d2;
  border-left: 1px solid #1976d2;
  border-right: 1px solid #1976d2;
  border-bottom: 6px solid #1976d2;
  border-radius: 6px;
}
.skillsLeft {
  margin: 0 auto;
  height: 100%;
}
.skillsRight {
  margin: 0 auto;
  height: 100%;
}
.center-text {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}
</style>

