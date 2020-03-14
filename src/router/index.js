import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Found from '../components/Found.vue'
import Mine from '../components/Mine.vue'
import Jinrongzixun from '../components/Jinrongzixun'
Vue.use(VueRouter)


const router = new VueRouter({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/mine', component: Mine},
    {path: '/found', component: Found,},
    {
      path: '/home',
      component: Home,
    },
    {path:'/jinrongzixun',component:Jinrongzixun}
  ]
})

export default router
