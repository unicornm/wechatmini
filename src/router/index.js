import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloLPP1 from '@/components/HelloLPP2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/lpp',
      name: 'HelloLPP',
      component: HelloLPP1
    }
  ]
})
