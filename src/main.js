import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import router from './router';

// 定义全局过滤器
import moment from 'moment';
// 使用moment.js格式化时间
Vue.filter('dateFormat', (dataStr, patter = 'YYYY-MM-DD HH:mm:ss') => {
    return moment(dataStr).format(patter)
})

import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:8080';

import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';
import './lib/mui/fonts/mui-icons-extra.ttf';

import app from './App.vue';

// 按需导入mint-ui中的组件
import { Header } from 'mint-ui'
import { Swipe, SwipeItem, Button } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router // 挂载路由对象到实例上
})