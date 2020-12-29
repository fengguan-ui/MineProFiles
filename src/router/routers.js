import Main from '@/components/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

//  侧边栏文字显示问题：由于项目引用了国际化组件，当前模式为zh-CN，因此需要改动侧边栏文字时，需同步改语言文件 （locale/lang/zh-CN.js）--配置文件禁用i18时，侧边栏读取title

export default [{
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  // 首页
  // {
  //   path: '/',
  //   name: '_home',
  //   redirect: '/home',
  //   component: Main,
  //   meta: {
  //     hideInMenu: true,
  //     notCache: true
  //   },
  //   children: [{
  //     path: '/home',
  //     name: 'home',
  //     meta: {
  //       hideInMenu: true,
  //       title: '首页',
  //       notCache: true,
  //       icon: 'md-home'
  //     },
  //     component: () => import('@/view/single-page/home')
  //   }]
  // },


  // 消息中心
  {
    path: '/message',
    name: 'message',
    component: Main,
    meta: {
      hideInBread: true,
      hideInMenu: true
    },
    children: [{
      path: 'message_page',
      name: 'message_page',
      meta: {
        icon: 'md-notifications',
        title: '消息中心'
      },
      component: () => import('@/view/single-page/message/index.vue')
    }]
  },
  //  其他
  {
    path: '/argu',
    name: 'argu',
    meta: {
      hideInMenu: true
    },
    component: Main,
    children: [{
        path: 'params/:id',
        name: 'params',
        meta: {
          icon: 'md-flower',
          title: route => `{{ params }}-${route.params.id}`,
          notCache: true,
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/view/argu-page/params.vue')
      },
      {
        path: 'query',
        name: 'query',
        meta: {
          icon: 'md-flower',
          title: route => `{{ query }}-${route.query.id}`,
          notCache: true
        },
        component: () => import('@/view/argu-page/query.vue')
      }
    ]
  },
  // 401
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },

  // 500
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  // error_404
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  },
  // 大屏
  {
    path: 'show',
    name: 'show',
    meta: {
      icon: '_diqiu',
      title: '大屏'
    },
    component: () => import('@/view/manage-page/show.vue')
  },
  // 首页
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [{
      path: '/home',
      name: 'home',
      meta: {
        hideInMenu: true,
        title: '首页',
        notCache: true,
        icon: 'md-home'
      },
      component: () => import('@/view/manage-page/showindex')
    }]
  },

  // 产线管理
  {
    path: '/manage_page',
    name: 'manage_page',
    meta: {
      icon: '_shujuku',
      title: '产线管理'
    },
    component: Main,
    children: [
      // {
      //   path: 'showindex',
      //   name: 'showindex',
      //   meta: {
      //     icon: 'md-funnel',
      //     title: '首页看板'
      //   },
      //   component: () => import('@/view/manage-page/showindex')
      // },

      {
        path: 'charts',
        name: 'charts',
        meta: {
          icon: '_bingtu',
          title: '统计分析'
        },
        component: () => import('@/view/manage-page/charts.vue')
      },
      {
        path: 'lcinfo',
        name: 'lcinfo',
        meta: {
          icon: '_jigou',
          title: '料仓信息'
        },
        component: () => import('@/view/manage-page/lcinfo.vue')
      },
      {
        path: 'ddlist',
        name: 'ddlist',
        meta: {
          icon: '_biaoqiankejian',
          title: '订单跟踪'
        },
        component: () => import('@/view/manage-page/ddlist.vue')
      },

      {
        path: 'monitor',
        name: 'monitor',
        meta: {
          icon: '_zhaoxiangji',
          title: '设备监控'
        },
        component: () => import('@/view/manage-page/monitor.vue')
      },
      {
        path: 'managelist',
        name: 'managelist',
        meta: {
          icon: '_biaodan',
          title: '订单管理'
        },
        component: () => import('@/view/manage-page/managelist.vue')
      },
      {
        path: 'measure',
        name: 'measure',
        meta: {
          icon: '_jiekou',
          title: '测量结果'
        },
        component: () => import('@/view/manage-page/measure.vue')
      },
      {
        path: 'qualityAnalysis',
        name: 'qualityAnalysis',
        meta: {
          icon: '_zhuzhuangtu',
          title: '质量分析'
        },
        component: () => import('@/view/manage-page/qualityAnalysis.vue')
      },
      {
        path: 'pieceRecord',
        name: 'pieceRecord',
        meta: {
          icon: '_fuwuqi',
          title: '工件记录'
        },
        component: () => import('@/view/manage-page/pieceRecord.vue')
      },

    ]
  },

  // 产线配置
  {
    path: '/configure_page',
    name: 'configure_page',
    meta: {
      icon: '_xiezuo',
      title: '产线配置'
    },
    component: Main,
    children: [{
        path: 'monitable',
        name: 'monitable',
        meta: {
          icon: '_yuechi',
          title: '设备管理'
        },
        component: () => import('@/view/configure-page/monitable.vue')
      },
      {
        path: 'proconfig',
        name: 'proconfig',
        meta: {
          icon: '_xiezuo',
          title: '产线配置'
        },
        component: () => import('@/view/configure-page/proconfig.vue')
      },
      {
        path: 'process',
        name: 'process',
        meta: {
          icon: '_zuzhicengji',
          title: '工艺配置'
        },
        component: () => import('@/view/configure-page/process.vue')
      }, {
        path: 'qualitytab',
        name: 'qualitytab',
        meta: {
          icon: '_JavaScript',
          title: '质量标准'
        },
        component: () => import('@/view/configure-page/qualitytab.vue')
      },
    ]
  },

  // 系统设置
  {
    path: '/system_page',
    name: 'system_page',
    meta: {
      icon: '_shezhi',
      title: '系统设置'
    },
    component: Main,
    children: [{
        path: 'user',
        name: 'user',
        meta: {
          icon: '_yonghu',
          title: '用户管理'
        },
        component: () => import('@/view/system-page/user.vue')
      },
      {
        path: 'role',
        name: 'role',
        meta: {
          icon: '_dangan',
          title: '角色管理'
        },
        component: () => import('@/view/system-page/role.vue')
      },
      {
        path: 'limits',
        name: 'limits',
        meta: {
          icon: '_yanjing',
          title: '权限管理'
        },
        component: () => import('@/view/system-page/limits.vue')
      },
      {
        path: 'userRole',
        name: 'userRole',
        meta: {
          icon: '_jiekou',
          title: '用户角色'
        },
        component: () => import('@/view/system-page/userRole.vue')
      },
      {
        path: 'roleLimits',
        name: 'roleLimits',
        meta: {
          icon: '_renyuanyichang',
          title: '角色权限'
        },
        component: () => import('@/view/system-page/roleLimits.vue')
      },
      {
        path: 'admin',
        name: 'admin',
        meta: {
          icon: '_zhiwen',
          title: '管理员配置'
        },
        component: () => import('@/view/system-page/admin.vue')
      },
    ]
  },

  // 帮助


  // 新增页-引用外部iconfont文件
  // {
  //   path: '/custom_iconfont',
  //   name: 'custom_iconfont',
  //   meta: {
  //     icon: 'md-menu',
  //     title: '自定义图标'
  //   },
  //   component: Main,
  //   children: [{
  //       path: 'icon_danse',
  //       name: 'icon_danse',
  //       meta: {
  //         icon: 'md-funnel',
  //         title: '单色图标-font'
  //       },
  //       component: () => import('@/view/custom-iconfont/icon-danse.vue')
  //     },

  //   ]
  // },


]
