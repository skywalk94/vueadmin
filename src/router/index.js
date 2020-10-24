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
    name: 'index',
    redirect: '/main',
    component: () => import( /* webpackChunkName: "index" */ '@/views/index'),
    meta: {
      title: '首页'
    },
    children: [{
        path: "/main",
        name: "main",
        component: () => import( /* webpackChunkName: "main" */ '@/views/main'),
        meta: {
          title: '首页'
        },
      }, {
        path: "/table",
        name: "table",
        component: () => import( /* webpackChunkName: "table" */ '@/views/table'),
        meta: {
          title: '表格'
        },
      }, {
        path: "/vueRippleDirective",
        name: "vueRippleDirective",
        component: () => import( /* webpackChunkName: "vueRippleDirective" */ '@/views/vueRippleDirective'),
        meta: {
          title: '水波纹'
        },
      }, {
        path: "/mapEchart",
        name: "mapEchart",
        component: () => import( /* webpackChunkName: "mapEchart" */ '@/views/mapEchart'),
        meta: {
          title: '中国地图'
        },
      }, {
        path: "/mixEchart",
        name: "mixEchart",
        component: () => import( /* webpackChunkName: "mixEchart" */ '@/views/mixEchart'),
        meta: {
          title: '混合图表'
        },
      },
      {
        path: "/vueDraggable",
        name: "vueDraggable",
        component: () => import( /* webpackChunkName: "vueDraggable" */ '@/views/vueDraggable'),
        meta: {
          title: '列表拖拽'
        },
      },
      {
        path: "/gridLottery",
        name: "gridLottery",
        component: () => import( /* webpackChunkName: "gridLottery" */ '@/views/gridLottery'),
        meta: {
          title: '九宫格抽奖'
        },
      },
      {
        path: "/plateLottery",
        name: "plateLottery",
        component: () => import( /* webpackChunkName: "plateLottery" */ '@/views/plateLottery'),
        meta: {
          title: '大转盘抽奖'
        },
      },
      {
        path: "/cascaderArea",
        name: "cascaderArea",
        component: () => import( /* webpackChunkName: "cascaderArea" */ '@/views/cascaderArea'),
        meta: {
          title: '地址联动'
        },
      },
      {
        path: "/vueCropper",
        name: "vueCropper",
        component: () => import( /* webpackChunkName: "vueCropper" */ '@/views/vueCropper'),
        meta: {
          title: '裁剪图片'
        },
      },
      {
        path: "/html2canvas",
        name: "html2canvas",
        component: () => import( /* webpackChunkName: "html2canvas" */ '@/views/html2canvas'),
        meta: {
          title: 'html生成图片'
        },
      },
      {
        path: "/wangEditor",
        name: "wangEditor",
        component: () => import( /* webpackChunkName: "wangEditor" */ '@/views/wangEditor'),
        meta: {
          title: 'wangEditor富文本'
        },
      },
      {
        path: "/mavonEditor",
        name: "mavonEditor",
        component: () => import( /* webpackChunkName: "mavonEditor" */ '@/views/mavonEditor'),
        meta: {
          title: 'mavonEditor编辑器'
        },
      },
      {
        path: "/error",
        name: "error",
        component: () => import( /* webpackChunkName: "error" */ '@/views/error'),
        meta: {
          title: '错误地址'
        },
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import( /* webpackChunkName: "login" */ '@/views/login'),
    meta: {
      title: '登录'
    },
  },
  {
    path: "*",
    name: "404",
    component: () => import( /* webpackChunkName: "error" */ '@/views/error'),
    meta: {
      title: '404'
    },
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  NProgress.start();
  if (!document.cookie) {
    if (to.path == '/login') {
      next()
    } else {
      next({
        path: '/login'
      })
      NProgress.done()
    }
  } else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router