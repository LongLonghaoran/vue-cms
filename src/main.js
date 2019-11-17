import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import router from './router';

import VueResource from 'vue-resource';
Vue.use(VueResource);

import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';
import './lib/mui/fonts/mui-icons-extra.ttf';

import app from './App.vue';

// 按需导入mint-ui中的组件
import {Header} from 'mint-ui'
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header)

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router // 挂载路由对象到实例上
})