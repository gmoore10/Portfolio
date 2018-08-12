<template>
  <v-container id="skillsContainer" fluid no-padding fill-height>
    <v-layout row no-padding fill-height>
      <v-flex xs6 fill-height>
        <v-card dark tile flat height="100%" color="white">
          <v-card-text id="texttest"></v-card-text>
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
export default {
  name: 'SkillPowerQuery',
  mounted () {
    
  }
}
</script>