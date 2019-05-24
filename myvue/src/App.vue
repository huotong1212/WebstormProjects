<template>
  <div id="app">
    <img src="./assets/logo.png">
    <el-button>默认按钮</el-button>
    <runoob v-bind:message="hint" :todo="sites[0]">runoob</runoob>
<!--    <ol>-->
<!--      <runoob v-for="item in sites"  v-bind:todo="item"></runoob>-->
<!--    </ol>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      hint: '我是父组件给全局子组件的数据',
      is_show: true,
      sites: [
        { text: 'Runoob' },
        { text: 'Google' },
        { text: 'Taobao' }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
