import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Axios from 'axios'
Vue.prototype.$axios = Axios;

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import animate from "animate.css";
Vue.use(animate);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  Axios,
  render: h => h(App)
}).$mount('#app')