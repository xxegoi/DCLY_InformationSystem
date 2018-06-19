// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [];

const asideMenuConfig = [
  {
    name: '\u6D4B\u8BD5\u6570\u636E\u67E5\u8BE2\\\u5BFC\u51FA',
    path: '/TestData',
    icon: 'el-icon-tickets',
  },
  {
    name: '运转卡',
    path: '',
    icon: 'el-icon-refresh',
    children: [
      {
        name: '\u8FD0\u8F6C\u5361\u4FE1\u606F\u67E5\u8BE2',
        path: '/YzkList',
        icon: 'home',
      },
      {
        name: '\u8FD0\u8F6C\u5361\u8DDF\u8E2A',
        path: '/YZKTrack',
        icon: 'home',
      },
    ],
  },
  // {
  //   name: '系统管理',
  //   path: '',
  //   icon:'el-icon-setting',
  //   children: [
  //     {
  //       name: '\u7528\u6237\u7BA1\u7406',
  //       path: '/RoleManage',
  //       icon: 'el-icon-setting',
  //     },
  //   ],
  // },
  {
    name: '\u5DE5\u827A\u6D41\u7A0B\u7BA1\u7406',
    path: '/GylcManage',
    icon: 'el-icon-d-caret',
  },
];

export { headerMenuConfig, asideMenuConfig };
