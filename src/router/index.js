import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/Index'
import nba from '@/components/NBA'
import music from '@/components/Music'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/nba',
      name: 'nba',
      component: nba
    },
    {
      path: '/music',
      name: 'music',
      component: music
    }
  ]
})
