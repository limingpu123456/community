// import Vue from 'vue'
// import Router from 'vue-router'
//
// Vue.use(Router)
//
// /* Layout */
// import Layout from '@/layout'
// import Test from '@/views/test.vue'
//
// /**
//  * Note: 路由配置项
//  *
//  * hidden: true                     // 当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
//  * alwaysShow: true                 // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
//  *                                  // 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
//  *                                  // 若你想不管路由下面的 children 声明的个数都显示你的根路由
//  *                                  // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
//  * redirect: noRedirect             // 当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
//  * name:'router-name'               // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
//  * query: '{"id": 1, "name": "ry"}' // 访问路由的默认传递参数
//  * meta : {
//     noCache: true                   // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
//     title: 'title'                  // 设置该路由在侧边栏和面包屑中展示的名字
//     icon: 'svg-name'                // 设置该路由的图标，对应路径src/assets/icons/svg
//     breadcrumb: false               // 如果设置为false，则不会在breadcrumb面包屑中显示
//     activeMenu: '/system/user'      // 当路由设置了该属性，则会高亮相对应的侧边栏。
//   }
//  */
//
// // 公共路由
// export const constantRoutes = [
//   {
//     path: '/redirect',
//     component: Layout,
//     hidden: true,
//     children: [
//       {
//         path: '/redirect/:path(.*)',
//         component: (resolve) => require(['@/views/redirect'], resolve)
//       }
//     ]
//   },
//   {
//     path: '/login',
//     component: (resolve) => require(['@/views/login'], resolve),
//     hidden: true
//   },
//   {
//     path: '/register',
//     component: (resolve) => require(['@/views/register'], resolve),
//     hidden: true
//   },
//   {
//     path: '/404',
//     component: (resolve) => require(['@/views/error/404'], resolve),
//     hidden: true
//   },
//   {
//     path: '/401',
//     component: (resolve) => require(['@/views/error/401'], resolve),
//     hidden: true
//   },
//   // {
//   //   path: '',
//   //   component: Layout,
//   //   redirect: 'index',
//   //   children: [
//   //     {
//   //       path: 'index',
//   //       component: (resolve) => require(['@/views/index'], resolve),
//   //       name: 'Index',
//   //       meta: { title: '首页', icon: 'dashboard', affix: true }
//   //     }
//   //   ]
//   // },
//   {
//     path: '/',
//     component: Layout,
//     redirect: '/dashboard',
//     hidden: true,
//     children: [
//       {
//         path: 'dashboard',
//         component: () => import('@/views/dashboard/index'),
//         name: 'Dashboard',
//         meta: { title: '首页', icon: 'dashboard', affix: true }
//       }
//     ]
//   },
//   {
//     path: '/user',
//     component: Layout,
//     hidden: true,
//     redirect: 'noredirect',
//     children: [
//       {
//         path: 'profile',
//         component: (resolve) => require(['@/views/system/user/profile/index'], resolve),
//         name: 'Profile',
//         meta: { title: '个人中心', icon: 'user' }
//       }
//     ]
//   },
//   {
//     path: '/system/user-auth',
//     component: Layout,
//     hidden: true,
//     children: [
//       {
//         path: 'role/:userId(\\d+)',
//         component: (resolve) => require(['@/views/system/user/authRole'], resolve),
//         name: 'AuthRole',
//         meta: { title: '分配角色', activeMenu: '/system/user'}
//       }
//     ]
//   },
//   {
//     path: '/system/role-auth',
//     component: Layout,
//     hidden: true,
//     children: [
//       {
//         path: 'user/:roleId(\\d+)',
//         component: (resolve) => require(['@/views/system/role/authUser'], resolve),
//         name: 'AuthUser',
//         meta: { title: '分配用户', activeMenu: '/system/role'}
//       }
//     ]
//   },
//   {
//     path: '/system/dict-data',
//     component: Layout,
//     hidden: true,
//     children: [
//       {
//         path: 'index/:dictId(\\d+)',
//         component: (resolve) => require(['@/views/system/dict/data'], resolve),
//         name: 'Data',
//         meta: { title: '字典数据', activeMenu: '/system/dict'}
//       }
//     ]
//   },
//   {
//     path: '/monitor/job-log',
//     component: Layout,
//     hidden: true,
//     children: [
//       {
//         path: 'index',
//         component: (resolve) => require(['@/views/monitor/job/log'], resolve),
//         name: 'JobLog',
//         meta: { title: '调度日志', activeMenu: '/monitor/job'}
//       }
//     ]
//   },
//   {
//     path: '/tool/gen-edit',
//     component: Layout,
//     hidden: true,
//     children: [
//       {
//         path: 'index',
//         component: (resolve) => require(['@/views/tool/gen/editTable'], resolve),
//         name: 'GenEdit',
//         meta: { title: '修改生成配置', activeMenu: '/tool/gen'}
//       }
//     ]
//   },
//   {
//     path: '/test',
//     component: Test
//   }
// ]
//
// export default new Router({
//   mode: 'history', // 去掉url中的#
//   scrollBehavior: () => ({ y: 0 }),
//   routes: constantRoutes
// })

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* 布局 */
import Layout from '@/layout'

/**
 * 注意：只有当route children.length大于等于1时，才会出现子菜单
 * 详情见: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   如果设置为true，则项目将不会显示在边栏中（默认值为false）
 * alwaysShow: true               如果设置为true, 将始终显示根菜单
 *                                如果未设置AlwaysShow，则当项具有多个子路由时,
 *                                它将成为嵌套模式，否则不显示根菜单
 * redirect: noRedirect           当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
 * name:'router-name'             设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * meta : {
    roles: ['admin','editor']    控制页面角色（可以设置多个角色）
    title: 'title'               设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'             设置该路由的图标
    noCache: true                如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
    affix: true                  如果设置为true，则标签将粘贴在“标签”视图中。
    breadcrumb: false            如果设置为false，该项将隐藏在breadcrumb中（默认值为true）
    activeMenu: '/example/list'  如果设置路径，侧边栏将突出显示您设置的路径。
  }
 */

/**
 * 固定路由
 * 没有权限要求的基页，可以访问所有角色
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/error',
    component: () => import('@/views/error-page/error'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    hidden: true,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/sys/user/profile/index'),
        name: 'Profile',
        meta: { title: '个人中心', icon: 'user', noCache: true }
      }
    ]
  }
]

/**
 * 异步路由
 * 需要根据用户角色动态加载的路由
 */
export const asyncRoutes = [
  {

  }
]

export const errorRoutes = [
  // 404页必须放在末尾！
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
