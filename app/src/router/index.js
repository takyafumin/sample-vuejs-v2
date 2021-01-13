import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SampleArray from '@/components/SampleArray'
import TodoApp from '@/components/TodoApp'
import BitCoinApp from '@/components/BitCoinApp'
import VOnce from '@/components/VOnce'
import VPre from '@/components/VPre'
import VHtml from '@/components/VHtml'
import VCloak from '@/components/VCloak'

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
    },
    {
      path: '/v-once',
      name: 'VOnce',
      component: VOnce
    },
    {
      path: '/v-pre',
      name: 'VPre',
      component: VPre
    },
    {
      path: '/v-html',
      name: 'VHtml',
      component: VHtml
    },
    {
      path: '/v-cloak',
      name: 'VCloak',
      component: VCloak
    }
  ]
})
