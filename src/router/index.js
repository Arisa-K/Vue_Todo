import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/TodoList'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/world',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
