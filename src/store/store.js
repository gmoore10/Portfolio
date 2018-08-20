import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        currentSkillComponent: '',
        windowHeight: '',
        windowWidth: '',
        scrollYPosition: '',
    },
    getters: {
        getWindowSize: state => {
            const windowWidth = state.windowWidth;
            const windowHeight = state.windowHeight;
            return { windowWidth, windowHeight }
        },
        getCurrentScrollPosition: state => {
            return state.scrollYPosition
        },
        getCurrentSkillComponent: state => {
            return state.currentSkillComponent
        }
    },
    mutations: {
        saveWindowSize() {
            this.state.windowHeight = window.innerHeight,
            this.state.windowWidth = window.innerWidth
        },
        saveScrollPosition() {
            this.state.scrollYPosition = window.scrollY
        }
    }
})