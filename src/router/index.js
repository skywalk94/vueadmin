import Vue from 'vue'
import VueRouter from 'vue-router'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'index',
  component: resolve => require(['@/views/index'], resolve),
  meta: {
    title: '首页'
  },
  children: [{
    path: "/table",
    name: "table",
    component: resolve => require(['@/views/table'], resolve),
  }, {
    path: "/vueRippleDirective",
    name: "vueRippleDirective",
    component: resolve => require(['@/views/vueRippleDirective'], resolve),
  }, {
    path: "/polyEchart",
    name: "polyEchart",
    component: resolve => require(['@/views/polyEchart'], resolve),
  }, {
    path: "/mixEchart",
    name: "mixEchart",
    component: resolve => require(['@/views/mixEchart'], resolve),
  }, ]
}]

const router = new VueRouter({
  routes
})

export default router