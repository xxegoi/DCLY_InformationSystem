import axios from 'axios';
import router from './router';


var url = window.location.host;
var baseURL = '';
if (url.indexOf('192.168.1.116') >= 0) {
  baseURL = 'http://192.168.1.116:8124'
} else {
  baseURL = 'http://61.143.227.36:8124'
}

const http = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  baseURL: baseURL,
  // baseURL: 'http://localhost:56968/'
})



//请求前附上TOKEN进行验证
http.interceptors.request.use(config => {
  var token = sessionStorage.getItem('token')
  if (token) {
    config.headers.Authorization = token
  }
  return config;
}, err => {
  return Promise.reject(err);
})

//请求异常时的处理，返回登录页或提示权限不足，或服务器错误
http.interceptors.response.use(res => {
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

export default http;
