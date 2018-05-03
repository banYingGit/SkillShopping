import Vue from 'vue'
import Router from 'vue-router'
import '../assets/script/auto.screen.js'
import '../assets/css/style.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: resolve => require(['../components/home/index'], resolve)
    },
    {
      path: '/play/way1',
      name: 'PlayWay1',
      component: resolve => require(['../components/home/playWay_1'], resolve)
    },
    {
      path: '/play/way2',
      name: 'PlayWay2',
      component: resolve => require(['../components/home/playWay_2'], resolve)
    },
    {
      path: '/user',
      name: 'User',
      component: resolve => require(['../components/user/user'], resolve)
    },
    {
      path: '/openPrize',
      name: 'OpenPrize',
      component: resolve => require(['../components/openPrize/openPrize'], resolve)
    },
    {
      path: '/order',
      name: 'Order',
      component: resolve => require(['../components/order/order'], resolve)
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['../components/login/login'], resolve)
    },
  ]
})
