// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import VueAxios from 'vue-axios'

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
// Vue.use(VueAxios, axios)

import http from './http'

// 转表单形式用
import qs from 'qs'
Vue.prototype.$http = http
Vue.prototype.qs = qs
Vue.config.devtools = true

Vue.config.productionTip = false
Vue.use(ElementUI)

// 引用压缩版时也能开启vue调试
Vue.config.devtools = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  render: h => h(App)
  // template: '<App/>'
})
