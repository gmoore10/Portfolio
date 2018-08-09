<template>
  <v-app>
    <div id="app">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/projects">Projects</router-link> |
        <router-link to="/skills">Skills</router-link> |
        <router-link to="/contact">Contact</router-link>
      </div>
      <transition name="router-anim"
                  enter-active-class="animated fadeIn"
                  leave-active-class="animated fadeOut">
      <router-view/>
      </transition>
    </div>
    <div id="animate" style="display: none; position: absolute; z-index: 1000; top: 50%; left: 50%;">
      <component v-bind:is="currentSkillComponent"></component>
    </div>
  </v-app>
</template>

<script>
import Vue from 'vue'
import SkillDAX from './components/SkillDAX'

Vue.component('SkillDAX', SkillDAX)

export default {
  name: 'App',
  computed: {
    currentSkillComponent() {
      return this.$store.state.currentSkillComponent
    }
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

