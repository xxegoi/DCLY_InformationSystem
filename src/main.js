import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css';
import './styles/index.scss';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import qs from 'querystring';
import vuex from 'vuex';
import store from './store';

Vue.use(ElementUI);

Vue.config.productionTip = false;

Vue.prototype.$qs = qs;

var url = window.location.host;
var baseURL = '';
if (url.indexOf('192.168.1.116') >= 0) {
  baseURL = 'http://192.168.1.116:8124'
} else {
  baseURL = 'http://61.143.227.36:8124'
}

Vue.prototype.$axios = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  // baseURL: baseURL,
  baseURL: 'http://localhost:56968/'
})

Vue.prototype.$axios.interceptors.request.use(config => {
  var token = sessionStorage.getItem('token')
  if (token) {
    config.headers.Authorization = token
  }
  return config;
}, err => {
  return Promise.reject(err);
})

Vue.prototype.$axios.interceptors.response.use(res => {
  return res;
}, err => {
  var token = sessionStorage.getItem('token')
  switch (err.response.status) {
    case 401:
      if (!token) {
        setTimeout(() => {
          router.replace('/Login')
        });
      } else {
        if (err.response.data.Message) {
          if (err.response.data.Message.indexOf('登录超时') >= 0) {
            router.replace('/Login');
          } else {
            router.push('/NotPermission');
          }
          return;
        } else {
          router.push('/NotPermission');
          return;
        }
      }
    case 404:
      router.push('/NotFound');
      return;
    case 500:
      router.push('/ServerException');
      return;
  }
  return Promise.reject(err)
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');