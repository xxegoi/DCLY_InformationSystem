// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import HeaderAsideLayout from './layouts/HeaderAsideLayout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import TestData from './pages/TestData';

import NotPermission from './pages/NotPermission';
import YzkTrack from './pages/YzkTrack';
import ServerException from './pages/ServerException';

import RoleManage from './pages/RoleManage';
import YzkList from './pages/YzkList';
import GylcManage from './pages/GylcManage';
import Test123 from './pages/Test123';
import NotFound from './pages/NotFound';

const routerConfig = [
  {
    path: '/',
    layout: HeaderAsideLayout,
    component: Dashboard,
  },
  {
    path: '/Login',
    layout: HeaderAsideLayout,
    component: Login,
  },
  {
    path: '/TestData',
    layout: HeaderAsideLayout,
    component: TestData,
  },
  {
    path: '/NotPermission',
    layout: HeaderAsideLayout,
    component: NotPermission,
  },
  {
    path: '/YZKTrack',
    layout: HeaderAsideLayout,
    component: YzkTrack,
  },
  {
    path: '/ServerException',
    layout: HeaderAsideLayout,
    component: ServerException,
  },
  {
    path: '/RoleManage',
    layout: HeaderAsideLayout,
    component: RoleManage,
  },
  {
    path: '/YzkList',
    layout: HeaderAsideLayout,
    component: YzkList,
  },
  {
    path: '/GylcManage',
    layout: HeaderAsideLayout,
    component: GylcManage,
  },
  {
    path: '/Test123',
    layout: HeaderAsideLayout,
    component: Test123,
  },
  {
    path: '*',
    layout: HeaderAsideLayout,
    component: NotFound,
  },
];

export default routerConfig;
