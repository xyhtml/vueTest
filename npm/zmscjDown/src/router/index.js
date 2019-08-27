import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Jj from '@/components/middle/Jj'
import Yy from '@/components/middle/Yy'
import LoadingVue from '@/components/middle/Loading'
import LoadingMiddleVue from '@/components/middle/LoadingMiddle'
import AlertVue from '@/components/middle/Alert'
import ToastVue from '@/components/middle/Toast'
import MobileIndex from '@/components/mobile/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/jj',
          name: 'jj',
          component: Jj
        },
        {
          path: '/yy',
          name: 'yy',
          component: Yy
        },
        {
          path: '/Loading',
          name: 'Loading',
          component: LoadingVue
        },
        {
          path: '/LoadingMiddle',
          name: 'LoadingMiddle',
          component: LoadingMiddleVue
        },
        {
          path: '/Alert',
          name: 'Alert',
          component: AlertVue
        },
        {
          path: '/Toast',
          name: 'Toast',
          component: ToastVue
        }
      ]
    },
    {
      path: '/MobileIndex',
      component: MobileIndex
    }
  ]
})
