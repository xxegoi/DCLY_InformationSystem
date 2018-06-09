import Vue from 'vue';
import Router from 'vue-router';
import routerConfig from './routerConfig';
import axios from './axios';
import qs from 'querystring';
import { isNullOrUndefined } from 'util';

/**
 * 将路由配置扁平化
 * @param {Array} config 路由配置
 * @return {Route}
 * @example
 * const routes = [
 *   {
 *     path: '/dashboard/analysis',
 *     component: HeaderAsideLayout,
 *     children: [
 *       {
 *         path: '',
 *         component: Dashboard,
 *       },
 *     ],
 *   },
 * ];
 */

const routerMap = [];

const recursiveRouterConfig = (config = []) => {
  config.forEach((item) => {
    const route = {
      path: item.path,
      component: item.layout,
      children: [
        {
          path: '',
          component: item.component,
        },
      ],
    };

    if (Array.isArray(item.children)) {
      recursiveRouterConfig(item.children);
    }
    routerMap.push(route);
  });

  return routerMap;
};

const routes = recursiveRouterConfig(routerConfig);

Vue.use(Router);

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  var token = sessionStorage.getItem('token');
  if (isNullOrUndefined(token) && to.fullPath !== '/Login') {
    next('/Login');
    return;
  } 
  next();
})


export default router;
