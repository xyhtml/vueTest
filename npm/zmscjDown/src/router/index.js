import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Jj from '@/components/middle/Jj'
import Yy from '@/components/middle/Yy'
import Loading from '@/components/middle/Loading'
import LoadingMiddle from '@/components/middle/LoadingMiddle'
import Alert from '@/components/middle/Alert'
import Toast from '@/components/middle/Toast'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/Jj',
          name: 'Jj',
          component: Jj
        },
        {
          path: '/Yy',
          name: 'Yy',
          component: Yy
        },
        {
          path: '/Loading',
          name: 'Loading',
          component: Loading
        },
        {
          path: '/LoadingMiddle',
          name: 'LoadingMiddle',
          component: LoadingMiddle
        },
        {
          path: '/Alert',
          name: 'Alert',
          component: Alert
        },
        {
          path: '/Toast',
          name: 'Toast',
          component: Toast
        }
      ]
    }
  ]
})
