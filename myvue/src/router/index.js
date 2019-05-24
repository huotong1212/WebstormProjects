import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NewCom from '@/components/NewCom'

Vue.use(Router)
// 注册
Vue.component('runoob', {
  // 声明 props
  props: ['message', 'todo'],
  template: '<div><h1>我是全局组件!</h1><h2>{{message}}</h2><h3>{{ todo.text }}</h3></div>'
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/newCom',
      name: 'NewCom',
      component: NewCom
    }
  ]
})
