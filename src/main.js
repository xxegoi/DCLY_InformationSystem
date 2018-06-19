import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css';
import './styles/index.scss';
import App from './App.vue';
import router from './router';
import axios from './axios';
import qs from 'qs';
import store from './store';

Vue.use(ElementUI);

Vue.config.productionTip = false;

Vue.prototype.$qs = qs;

Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');