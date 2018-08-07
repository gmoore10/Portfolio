import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Contact from '@/views/Contact'
import Projects from '@/views/Projects'
import Skills from '@/views/Skills'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/projects', name: 'Projects', component: Projects },
    { path: '/skills', name: 'Skills', component: Skills },
    { path: '/contact', name: 'Contact', component: Contact }
  ]
})
