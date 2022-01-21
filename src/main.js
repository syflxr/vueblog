import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入element-ui
import Element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
Vue.use(Element)
import axios from 'axios'
import  './assets/css/global.css'
//引入markdown相关
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)


axios.defaults.baseURL="http://127.0.0.1:8003/"
Vue.prototype.$axios = axios //


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
