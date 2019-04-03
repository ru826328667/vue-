import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: '设备'
      }
    },
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
        title: '设备'
      }
    }
  ]
})
