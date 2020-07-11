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
  redirect: '/main',
  component: resolve => require(['@/views/index'], resolve),
  meta: {
    title: '首页'
  },
  children: [{
    path: "/main",
    name: "main",
    component: resolve => require(['@/views/main'], resolve),
    meta: {
      title: '首页'
    },
  }, {
    path: "/table",
    name: "table",
    component: resolve => require(['@/views/table'], resolve),
    meta: {
      title: '表格'
    },
  }, {
    path: "/vueRippleDirective",
    name: "vueRippleDirective",
    component: resolve => require(['@/views/vueRippleDirective'], resolve),
    meta: {
      title: '水波纹'
    },
  }, {
    path: "/mapEchart",
    name: "mapEchart",
    component: resolve => require(['@/views/mapEchart'], resolve),
    meta: {
      title: '中国地图'
    },
  }, {
    path: "/mixEchart",
    name: "mixEchart",
    component: resolve => require(['@/views/mixEchart'], resolve),
    meta: {
      title: '混合图表'
    },
  }, ]
}]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next()
})
export default router