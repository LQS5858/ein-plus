export default [
  {
    path: '/',
    name: '主页',
    components: {
      pc: () => import('@/views/index.vue'),
      ipad: () => import('@/views/index.vue'),
      h5: () => import('@/views/index.vue'),
      notebook: () => import('@/views/index.vue')
    }
  },
  {
    path: '/einyun-ui',
    name: '组件页面',
    components: {
      pc: () => import('@/views/home.vue'),
      h5: () => import('@/views/home.vue'),
      ipad: () => import('@/views/home.vue'),
      notebook: () => import('@/views/home.vue'),
    },
    children: [
      {
        path: '',
        name: '贡献指南',
        components: {
          pc: () => import('/packages/Participation/doc/doc.md'),
          ipad: () => import('/packages/Participation/doc/doc.md'),
          h5: () => import('/packages/Participation/doc/doc.md'),
          notebook: () => import('/packages/Participation/doc/doc.md')
        }
      },
      {
        path: 'updatelog',
        name: '更新日志',
        components: {
          pc: () => import('/packages/updatelog/doc/doc.md'),
          ipad: () => import('/packages/updatelog/doc/doc.md'),
          h5: () => import('/packages/updatelog/doc/doc.md'),
          notebook: () => import('/packages/updatelog/doc/doc.md')
        }
      },
      {
        path: 'install',
        name: '安装使用',
        components: {
          pc: () => import('/packages/install/doc/doc.md'),
          ipad: () => import('/packages/install/doc/doc.md'),
          h5: () => import('/packages/install/doc/doc.md'),
          notebook: () => import('/packages/install/doc/doc.md')
        }
      },


      {
        path: 'button',
        name: 'Button 按钮',
        components: {
          pc: () => import('/packages/button/doc/doc.md'),
          ipad: () => import('/packages/button/doc/doc.md'),
          h5: () => import('/packages/button/doc/doc.md'),
          notebook: () => import('/packages/button/doc/doc.md')
        }
      },

      {
        path: 'Space',
        name: 'Space 间距',
        components: {
          pc: () => import('/packages/Space/doc/doc.md'),
          h5: () => import('/packages/Space/doc/doc.md'),
          ipad: () => import('/packages/Space/doc/doc.md'),
          notebook: () => import('/packages/Space/doc/doc.md')
        }
      },
      {
        path: 'badge',
        name: 'badge 徽章',
        components: {
          pc: () => import('/packages/badge/doc/doc.md'),
          h5: () => import('/packages/badge/doc/doc.md'),
          ipad: () => import('/packages/badge/doc/doc.md'),
          notebook: () => import('/packages/badge/doc/doc.md')
        }
      },

      {
        path: 'tabs',
        name: 'Tab 切换',
        components: {
          pc: () => import('/packages/tabs/doc/doc.md'),
          h5: () => import('/packages/tabs/doc/doc.md'),
          ipad: () => import('/packages/tabs/doc/doc.md'),
          notebook: () => import('/packages/tabs/doc/doc.md')
        }
      },

      {
        path: 'backtop',
        name: 'Backtop 回到顶部',
        components: {
          pc: () => import('/packages/backtop/doc/doc.md'),
          ipad: () => import('/packages/backtop/doc/doc.md'),
          h5: () => import('/packages/backtop/doc/doc.md'),
          notebook: () => import('/packages/backtop/doc/doc.md')
        }
      },
      {
        path: 'search',
        name: '搜索',
        components: {
          pc: () => import('/packages/search-pannel/doc/doc.md'),
          h5: () => import('/packages/search-pannel/doc/doc.md'),
          ipad: () => import('/packages/search-pannel/doc/doc.md'),
          notebook: () => import('/packages/search-pannel/doc/doc.md')
        }
      },
      {
        path: 'throttle-button',
        name: 'ThrottleButton',
        components: {
          pc: () => import('/packages/throttle-button/doc/doc.md'),
          h5: () => import('/packages/throttle-button/doc/doc.md'),
          ipad: () => import('/packages/throttle-button/doc/doc.md'),
          notebook: () => import('/packages/throttle-button/doc/doc.md')
        }
      }
    ]
  }
]
