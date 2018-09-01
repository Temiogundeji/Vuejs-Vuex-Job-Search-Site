import Vue from 'vue'
import Router from 'vue-router'
import landingPage from '@/components/Pages/landingPage.vue'
import siteLogin  from '@/components/Pages/siteLogin.vue'
import signUp from '@/components/Pages/signUp.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'landing-page', component: landingPage},
    {path: '/login', name: 'site-login', component: siteLogin},
    {path: '/signup', name: 'sign-up', component: signUp}
  ]
})
