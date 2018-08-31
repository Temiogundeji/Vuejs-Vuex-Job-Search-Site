import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import landingPage from '@/components/Pages/landingPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name:'HelloWorld',
    //   component: HelloWorld
    // },
    {path: '/', name: 'landing-page', component: landingPage}
  ]
})
