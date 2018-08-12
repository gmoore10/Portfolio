import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        currentSkillComponent: '',
        windowHeight: '',
        windowWidth: ''
    },
    getters: {
        getWindowSize: state => {
            const windowWidth = state.windowWidth;
            const windowHeight = state.windowHeight;
            return { windowWidth, windowHeight }
        },
        getCurrentSkillComponent: state => {
            return state.currentSkillComponent
        }
    },
    mutations: {
        saveWindowSize() {
            this.state.windowHeight = window.innerHeight,
            this.state.windowWidth = window.innerWidth
        }
    }
})