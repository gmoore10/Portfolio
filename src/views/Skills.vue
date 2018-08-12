<template>
  <div class="skills page" style="position: relative">
    <v-chip color="primary"
            @click="animateIt"
            id="SkillHTML"
            text-color="white">HTML</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="SkillCSS"
            text-color="white">CSS</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="SkillJavaScript"
            text-color="white">JavaScript</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="SkillVueJS"
            text-color="white">VueJS</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="SkillDotNetCore2x"
            text-color="white">.NET Core 2.x</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="SkillCSharp"
            text-color="white">C#</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="SkillNodeJS"
            text-color="white">NodeJS</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="SkillEFCore2x"
            text-color="white">EF Core 2.x</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="SkillSequelize"
            text-color="white">Sequelize</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="SkillMySQL"
            text-color="white">MySQL</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="SkillMicrosoftSQLServer"
            text-color="white">Microsoft SQL Server</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="SkillCrystalReports"
            text-color="white">Crystal Reports</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="SkillSSRS"
            text-color="white">SSRS</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="SkillFunctions"
            text-color="white">Functions</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="SkillReportLogic"
            text-color="white">Report Logic</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="SkillTSQL"
            text-color="white">T-SQL</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="SkillTableau"
            text-color="white">Tableau</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="SkillPowerBI"
            text-color="white">Power BI</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="SkillFormulaLanguages"
            text-color="white">Formula Languages</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="SkillDAX"
            text-color="white">DAX</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="SkillPowerQuery"
            text-color="white">Power Query</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="SkillSSAS"
            text-color="white">SQL Server Analysis Services</v-chip>
  </div>
</template>

<script>
import { TweenLite, TimelineLite } from 'gsap'

const WINDOW_WIDTH = 0;
const WINDOW_HEIGHT = 1;

export default {
  name: 'Skills',
  methods: {
    animateIt (sender) {
      const that = this
      const t1 = new TimelineMax()
      t1.to('#animate', 0.001, {
        left: sender.clientX + 'px',
        top: sender.clientY + 'px',
      })
      .to('#animate', 0.25, {
        width: '95vw',
        height: '95vh',
        backgroundColor: '#1976d2',
      })
        .to('#animate', 0.25, {
        top: this.$store.getters.getWindowSize.windowHeight * 0.025 + 'px',
        left: this.$store.getters.getWindowSize.windowWidth * 0.025 + 'px',
      }, '-= 0.25')
      .add( function() { that.renderComponent(sender.target.parentNode.id) })
    },
    renderComponent (id) {
      this.$store.state.currentSkillComponent = id
      const windowSize = this.$store.getters.getWindowSize
      console.log(windowSize.windowHeight)
    }
  },
  mounted () {
  }
}
</script>
