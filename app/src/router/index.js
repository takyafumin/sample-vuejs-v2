import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SampleArray from '@/components/SampleArray'
import TodoApp from '@/components/TodoApp'
import BitCoinApp from '@/components/BitCoinApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/array',
      name: 'Array',
      component: SampleArray
    },
    {
      path: '/todo',
      name: 'TodoApp',
      component: TodoApp
    },
    {
      path: '/coin',
      name: 'BitCoinApp',
      component: BitCoinApp
    }
  ]
})
