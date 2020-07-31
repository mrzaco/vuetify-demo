import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import child from '@/components/child'
import airplanes from '@/view/airplanes'
import test1 from '@/view/test1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: child,
      meta: {
        title: '测试项目'
      }
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: '测试项目'
      }
    },
    {
      path: '/airplanes',
      name: 'airplanes',
      component: airplanes,
      meta: {
        title: '子站点'
      }
    },
    {
      path: '/child',
      name: 'child',
      component: child,
      meta: {
        title: '子站点'
      }
    },
    {
      path: '/test1',
      name: 'test1',
      component: test1,
      meta: {
        title: '子站点'
      }
    }

  ]
})
