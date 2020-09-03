import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)

import {
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  Pagination,
  Menu,
  MenuItem,
  MenuItemGroup,
  Tooltip,
  Submenu,
  Loading,
  MessageBox,
  Message,
} from 'element-ui';

Vue.use(Button).use(ButtonGroup).use(Table).use(TableColumn).use(Pagination).use(Menu).use(MenuItem).use(MenuItemGroup).use(Tooltip).use(Submenu)
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

import animate from "animate.css";
Vue.use(animate);

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')