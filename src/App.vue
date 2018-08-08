<template>
  <v-app>
    <div id="animate" style="position: absolute; z-index: 1000; top: 50%; left: 50%;"></div>
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
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

  body {
    background-color: rgb(233, 233, 233);
    font-family: Arial, Helvetica, sans-serif;
  }
  /* html, body {
    height: calc(100% - 50px);
  } */

  #app {
    background: #fff;
    margin: auto;
    height: calc(60% - 50px);
  }

  .page {
    position: absolute;
    width: inherit;
  }
</style>

