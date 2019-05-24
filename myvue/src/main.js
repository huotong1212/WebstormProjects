// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
//
// Vue.config.productionTip = false
//
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   render: h => h(App),
//   router,
//   components: { App },
//   template: '<App/>'
// })

import Vue from 'vue'
import App from './App'
import router from './router'

// import { Button, Select } from 'element-ui'
// eslint-disable-next-line no-unused-vars
import ElementUI from 'element-ui'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.prototype.$axios = ax

// Vue.use(Button)
// Vue.use(Select)

/* eslint-disable no-new */

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  template: '<App/>',
  components: { App }
})
