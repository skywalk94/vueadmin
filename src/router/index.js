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
      path: "/vueRippleDirective",
      name: "vueRippleDirective",
      component: resolve => require(['@/views/vueRippleDirective'], resolve),
    }, {
      path: "/carousel",
      name: "carousel",
      component: resolve => require(['@/views/carousel'], resolve),
    },
    {
      path: "/echarts",
      name: "echarts",
      component: resolve => require(['@/views/echarts'], resolve),
    },
    {
      path: "/table",
      name: "table",
      component: resolve => require(['@/views/table'], resolve),
    },
  ]
}, ]

const router = new VueRouter({
  routes
})

export default router