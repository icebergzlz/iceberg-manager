import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import axios from 'axios'

// 5.封装request模块
import { request } from './network/request'

Vue.config.productionTip = false
// use elementui
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// axios.get('/iceberg-base/hello').then(resp => (console.log(resp)))

request({
  url: '/iceberg-base/hello'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
