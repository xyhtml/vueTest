import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Jj from '@/components/middle/Jj'
import Yy from '@/components/middle/Yy'
import Loading from '@/components/middle/Loading'
import LoadingMiddle from '@/components/middle/LoadingMiddle'
import Alert from '@/components/middle/Alert'
import Toast from '@/components/middle/Toast'
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
          path: '/loading',
          name: 'loading',
          component: Loading
        },
        {
          path: '/loadingMiddle',
          name: 'loadingMiddle',
          component: LoadingMiddle
        },
        {
          path: '/alert',
          name: 'alert',
          component: Alert
        },
        {
          path: '/toast',
          name: 'toast',
          component: Toast
        }
      ]
    },
    {
      path: '/MobileIndex',
      component: MobileIndex
    }
  ]
})
