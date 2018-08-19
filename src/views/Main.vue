<template>
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
</template>

<script>
import { TimelineLite, TweenLite } from 'gsap'

export default {
  name: 'Skills',
  methods: {
    animateIt (sender) {
      const that = this
      const t1 = new TimelineLite()
      t1.to('#animate', 0.001, {
        left: sender.clientX + 'px',
        top: sender.clientY + 'px',
        display: 'block'
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
      console.log(windowSize.windowHeight)
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
