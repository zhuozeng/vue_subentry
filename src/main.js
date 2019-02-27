import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
Vue.prototype.$http = axios

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // let token =JSON.parse(localStorage.getItem('token'))  || ''
  // config.headers.Authorization = token
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

axios.defaults.baseURL = 'http://litc.pro:9999/';
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

// 引入全部组件 
// import Mint from 'mint-ui';
// Vue.use(Mint);

// 引入vant-ui
import { Button,Toast, Cell ,Swipe, SwipeItem,Row, Col ,Search , Tabbar, TabbarItem ,NavBar ,GoodsAction, GoodsActionBigBtn, GoodsActionMiniBtn } from 'vant';

Vue.use(Button , Cell);
Vue.use(Swipe).use(SwipeItem);

Vue.use(Row).use(Col);
Vue.use(Search);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(NavBar);
Vue.use(Toast);
Vue.use(GoodsAction)
  .use(GoodsActionBigBtn)
.use(GoodsActionMiniBtn);

// 全局注册组件
import comment from './components/buttonMain.vue'
Vue.component('comment', comment)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
