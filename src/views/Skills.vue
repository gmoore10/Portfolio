<template>
  <div class="skills page" style="position: relative">
    <v-chip color="primary"
            @click="animateIt"
            id="animateTrigger"
            text-color="white">Primary</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="animateTrigger"
            text-color="white">HTML</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="animateTrigger"
            text-color="white">CSS</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="animateTrigger"
            text-color="white">JavaScript</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="animateTrigger"
            text-color="white">VueJS</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="animateTrigger"
            text-color="white">.NET Core 2.x</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="animateTrigger"
            text-color="white">C#</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="animateTrigger"
            text-color="white">NodeJS</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="animateTrigger"
            text-color="white">EF Core 2.x</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="animateTrigger"
            text-color="white">Sequelize</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="animateTrigger"
            text-color="white">MySQL</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="animateTrigger"
            text-color="white">Microsoft SQL Server</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="animateTrigger"
            text-color="white">Crystal Reports</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="animateTrigger"
            text-color="white">SSRS</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="animateTrigger"
            text-color="white">Functions</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="animateTrigger"
            text-color="white">Report Logic</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="animateTrigger"
            text-color="white">T-SQL</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="animateTrigger"
            text-color="white">Tableau</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="animateTrigger"
            text-color="white">Power BI</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="animateTrigger"
            text-color="white">Formula Languages</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="animateTrigger"
            text-color="white">DAX</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="animateTrigger"
            text-color="white">Power Query</v-chip>
    <v-chip color="primary"
            @click="animateIt"
            id="animateTrigger"
            text-color="white">SQL Server Analysis Services</v-chip>
  </div>
</template>

<script>
import { TweenLite, TimelineLite } from 'gsap'

export default {
  name: 'Skills',
  methods: {
    animateIt: (sender) => {

      const t1 = new TimelineMax()
      t1.to('#animate', 0.25, {
        width: '95vw',
        height: '95vh',
        backgroundColor: '#1976d2',
      })
      t1.to('#animate', 0.25, {
        top: '100px',
        left: '100px'
      }, '-= 0.25')
    }
  },
  mounted () {
  }
}
</script>
