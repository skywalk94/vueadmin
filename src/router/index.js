import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/main',
  component: () => import( /* webpackChunkName: "index" */ '@/views/index'),
  meta: {
    title: '首页'
  },
  children: [{
    path: "/main",
    component: () => import( /* webpackChunkName: "main" */ '@/views/main'),
    meta: {
      title: '首页'
    },
  }, {
    path: "/one",
    component: () => import( /* webpackChunkName: "one" */ '@/views/one'),
    meta: {
      title: '选项一'
    },
  }, {
    path: "/two",
    component: () => import( /* webpackChunkName: "two" */ '@/views/two'),
    meta: {
      title: '选项二'
    },
  }, {
    path: "/three",
    component: () => import( /* webpackChunkName: "three" */ '@/views/three'),
    meta: {
      title: '选项三'
    },
  }]
},
{
  path: "/login",
  component: () => import( /* webpackChunkName: "login" */ '@/views/login'),
  meta: {
    title: '登录'
  },
}
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  NProgress.start();
  if (!localStorage.getItem("userInfo")) {
    if (to.path == '/login') {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    if (to.path == '/login') {
      next({
        path: '/'
      })
    } else {
      next()
    }
  }
  NProgress.done()
})

router.afterEach(() => {
  NProgress.done()
})

export default router