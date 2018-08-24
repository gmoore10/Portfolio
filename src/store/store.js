import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentSkillComponent: '',
    windowHeight: '',
    windowWidth: '',
    scrollYPosition: ''
  },
  getters: {
    getWindowSize: (state) => {
      const windowWidth = state.windowWidth
      const windowHeight = state.windowHeight
      return {
        windowWidth,
        windowHeight
      }
    },
    getCurrentScrollPosition: (state) => {
      const returned = state.scrollYPosition
      return returned
    },
    getCurrentSkillComponent: (state) => {
      const returned = state.currentSkillComponent
      return returned
    }
  },
  mutations: {
    saveWindowSize () {
      this.state.windowHeight = window.innerHeight
      this.state.windowWidth = window.innerWidth
    },
    saveScrollPosition () {
      this.state.scrollYPosition = window.scrollY
    }
  }
})
