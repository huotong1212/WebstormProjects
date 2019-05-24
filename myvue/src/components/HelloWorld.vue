<template>
  <div class="hello">
    <h1 v-bind:title="hint">{{ msg }}</h1>
    <h2 v-text="msg"></h2>
    <h3 v-html="msg"></h3>
    <h3 v-if=true>1234545</h3>
    <h3 v-if="Math.random()>0.5">显示</h3>
    <h3 v-else>隐藏</h3>
    <h3 v-show="!is_show">1234545</h3>
<!--    <h3 class="active" v-bind:class="vLoading">342</h3>-->
    <button v-on:click="clickHandler">Essential Links</button>
    <input v-model="msg"/>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <child></child>
  </div>
</template>

<script>
var Child = {
  template: '<h1>我是局部子组件!</h1>'
}

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      hint: '提示信息',
      is_show: true
    }
  },
  methods: {
    clickHandler (e) {
      // alert('click')
      console.log('handler click')
      console.log(this)
      this.is_show = !this.is_show
    }
  },
  components: {
    'child': Child
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
