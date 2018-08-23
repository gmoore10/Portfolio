<template>
<v-content>
  <section>
    <v-parallax :src="require('@/assets/ExampleConspectus_light.png')" height="700">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
          <v-avatar
            size="125"
            color="grey lighten-4"
          >
            <img src="../assets/me.jpg" alt="avatar">
          </v-avatar>
            <h1 class="primary--text mb-2 display-1 text-xs-center">Garrett Moore</h1>
            <div class="primary--text subheading mb-3 text-xs-center">Developer/Designer/Data Architect</div>
            <div class="primary--text subheading mb-3 text-xs-center"><a href="https://www.linkedin.com/in/garrett-t-moore/" target="_blank">LinkedIn</a></div>
            <div class="primary--text subheading mb-3 text-xs-center"><a href="mailto:gmoore7@gmail.com" target="_blank">Email Me</a></div>
          </v-layout>
</v-parallax>
  </section>
  <section>
    <v-layout
          column
          wrap
          primary
          white--text
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">Example Projects</h2>
              <span class="subheading">
                Check out some of my past work below
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <img src="../assets/ExampleVastara.png" style="width: 400px; height: 250px;" alt="" />
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline white--text text-xs-center"><a href="http://137.117.93.108/vastara/" style="color: white" target="_blank">Vastara</a></div>
                    </v-card-title>
                    <v-card-text class="white--text">
                      Marketing website revolving around data management for collection-based services such as 
                      surveys or forms.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <img src="../assets/ExampleDollarsAndSense.png" style="width: 400px; height: 250px;" alt="" />
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline white--text text-xs-center"><a href="http://45.32.223.115/" style="color: white" target="_blank">Dollars and Sense</a></div>
                    </v-card-title>
                    <v-card-text class="white--text">
                      Built to handle your budget, this example showcases the Vue JS single page application framework.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <img src="../assets/ExampleConspectus.png" style="width: 400px; height: 250px;" alt="" />
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline white--text text-xs-center"><a href="http://137.117.93.108/" style="color: white" target="_blank">Events Dashboard</a></div>
                    </v-card-title>
                    <v-card-text class="white--text">
                      Designed to show advanced analytics of events in an easily digestible format. Shows
                      attendance, conversion rates and demographics.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
</v-layout>
  </section>
  <section style="padding-top: 10px; padding-bottom: 20px;">
    <v-layout
          column
          wrap
          align-center
        >
    <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="primary--text headline">My Skills</h2>
              <span class="primary--text subheading">
                Click on any skill below to see an example of my work and gain some insight on
                the benefits and drawbacks of each technology.
              </span>
            </div>
          </v-flex>
    <div class="skills page" style="position: relative">
    <table id="skillsTable">
      <tr>
        <th></th>
        <th>
          <v-chip color="blue-grey lighten-1" style="display: block; width: 100%; text-align: center"
            text-color="white">Web</v-chip>
        </th>
        <th>
          <v-chip label color="blue-grey lighten-1" style="display: block; width: 100%; text-align: center"
            text-color="white">Reporting</v-chip>
        </th>
        <th>
          <v-chip label class="trap" color="blue-grey lighten-1" style="display: block; width: 100%; text-align: center"
            text-color="white"><div class="innertrap">Analysis</div></v-chip>
        </th>
      </tr>
      <tr>
        <td>Presentation</td>
        <td>
          <v-chip color="primary"
            @click="animateIt"
            id="SkillHTML"
            text-color="white">HTML</v-chip>
          <v-chip color="primary"
            @click="animateIt"
            id="SkillCSS"
            text-color="white">CSS</v-chip>
            <br />
          <v-chip color="primary"
            @click="animateIt"
            id="SkillJavaScript"
            text-color="white">JavaScript</v-chip>
          <v-chip color="primary"
            @click="animateIt"
            id="SkillVueJS"
            text-color="white">VueJS</v-chip>
        </td>
        <td>
          <v-chip label color="primary"
            @click="animateIt"
            id="SkillCrystalReports"
            text-color="white">Crystal Reports</v-chip>
          <v-chip label color="primary"
            @click="animateIt"
            id="SkillSSRS"
            text-color="white">SSRS</v-chip>
        </td>
        <td>
          <v-chip color="primary"
            @click="animateIt"
            class="trap"
            id="SkillTableau"
            text-color="white"><div class="innertrap">Tableau</div></v-chip>
          <v-chip color="primary"
            @click="animateIt"
            class="trap"
            id="SkillPowerBI"
            text-color="white"><div class="innertrap">Power BI</div></v-chip>
        </td>
      </tr>
      <tr>
        <td>Business Logic</td>
        <td>
          <v-chip color="green"
            @click="animateIt"
            id="SkillDotNetCore2x"
            text-color="white">.NET Core 2.x</v-chip>
          <br />
          <v-chip color="green"
            @click="animateIt"
            id="SkillCSharp"
            text-color="white">C#</v-chip>
          <v-chip color="green"
            @click="animateIt"
            id="SkillNodeJS"
            text-color="white">NodeJS</v-chip>
        </td>
        <td>
          <v-chip color="green"
            @click="animateIt"
            class="trap"
            id="SkillFormulaLanguages"
            text-color="white"><div class="innertrap">Formula Languages</div></v-chip>
        </td>
        <td>
          <v-chip color="green"
            @click="animateIt"
            class="trap"
            id="SkillFormulaLanguages"
            text-color="white"><div class="innertrap">Formula Languages</div></v-chip>
        </td>
      </tr>
      <tr>
        <td>Data Access</td>
        <td>
          <v-chip color="orange"
            @click="animateIt"
            id="SkillEFCore2x"
            text-color="white">EF Core 2.x</v-chip>
          <v-chip color="orange"
            @click="animateIt"
            id="SkillSequelize"
            text-color="white">Sequelize</v-chip>
          </td>
        <td>
          <v-chip label color="orange"
            @click="animateIt"
            id="SkillTSQL"
            text-color="white">T-SQL</v-chip>
        </td>
        <td>
          <v-chip color="orange"
            @click="animateIt"
            class="trap"
            id="SkillDAX"
            text-color="white"><div class="innertrap">DAX</div></v-chip>
          <v-chip color="orange"
            @click="animateIt"
            class="trap"
            id="SkillPowerQuery"
            text-color="white"><div class="innertrap">Power Query</div></v-chip>
        </td>
      </tr>
      <tr>
        <td>Data Storage</td>
        <td>
          <v-chip color="red"
            @click="animateIt"
            id="SkillMySQL"
            text-color="white">MySQL</v-chip>
          <br />
          <v-chip color="red"
            @click="animateIt"
            id="SkillMicrosoftSQLServer"
            text-color="white">Microsoft SQL Server</v-chip>
        </td>
        <td>
          <v-chip label color="red"
            @click="animateIt"
            id="SkillMicrosoftSQLServer"
            text-color="white">Microsoft SQL Server</v-chip>
        </td>
        <td>
          <v-chip color="red"
            @click="animateIt"
            class="trap"
            id="SkillSSAS"
            text-color="white"><div class="innertrap">SQL Server Analysis Services</div></v-chip>
          <br />
          <v-chip color="red"
            @click="animateIt"
            class="trap"
            id="SkillMicrosoftSQLServer"
            text-color="white"><div class="innertrap">Microsoft SQL Server</div></v-chip>
        </td>
      </tr>
    </table>
  </div>
  </v-layout>
  </section>
</v-content>
</template>

<script>
import { TimelineLite, TweenLite } from 'gsap'

export default {
  name: 'Main',
  data: {
    animation: ''
  },
  methods: {
    animateIt (sender) {
      const that = this
      console.log(sender)
      that.animation = new TimelineLite()
      that.animation.to('#animate', 0.001, {
        left: sender.clientX + 'px',
        top: sender.clientY + this.$store.getters.getCurrentScrollPosition + 'px',
        display: 'block'
      })
      .to('#animate', 0.25, {
        width: '95vw',
        height: '95vh',
        backgroundColor: '#1976d2',
      })
        .to('#animate', 0.25, {
        top: (this.$store.getters.getWindowSize.windowHeight * 0.025) + this.$store.getters.getCurrentScrollPosition + 'px',
        left: this.$store.getters.getWindowSize.windowWidth * 0.025 + 'px',
      }, '-= 0.25')
      .add( function() {
        console.log(sender.target.parentNode)
        if(sender.target.parentNode.id === "") {
          that.renderComponent(sender.target.parentNode.parentNode.id)
        } else {
          that.renderComponent(sender.target.parentNode.id)
        }
      })
    },
    renderComponent (id) {
      this.$store.state.currentSkillComponent = id
      const windowSize = this.$store.getters.getWindowSize
    }
  },
  computed: {
    currentSkill () {
      return this.$store.getters.getCurrentSkillComponent
    }
  },
  watch: {
    currentSkill(value) {
      if(value === '') {
        this.animation.reverse()
      }
    }
  },
  mounted () {
  }
}
</script>

<style>

#skillsTable > tr > td:first-child {
  min-width: 110px;
}

#skillsTable > tr:nth-child(2) > td:first-child {
  background-color: #1976d2;
  color: white;
  text-align: center;
}

#skillsTable > tr:nth-child(3) > td:first-child {
  background-color: #4caf50;
  color: white;
  text-align: center;
}

#skillsTable > tr:nth-child(4) > td:first-child {
  background-color: #ff9800;
  color: white;
  text-align: center;
}

#skillsTable > tr:nth-child(5) > td:first-child {
  background-color: #f44336;
  color: white;
  text-align: center;
}

#skillsTable > tr > th:not(:first-child) {
  padding: 5px;
}

#skillsTable > tr > td:not(:first-child) {
  padding: 5px;
}

.trap {
  -webkit-transform: skew(20deg);
  -moz-transform: skew(20deg); 
  -o-transform: skew(20deg);
  transform: skew(20deg);
  border-radius: 0;
}

.innertrap {
  -webkit-transform: skew(-20deg);
  -moz-transform: skew(-20deg); 
  -o-transform: skew(-20deg);
  transform: skew(-20deg);
}
</style>
