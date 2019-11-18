<template>
    <div> 
        <!-- 轮播图 -->
     <mt-swipe :auto="4000">
         <!-- 在组件中使用循环必须绑定key -->
        <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
            <img :src="item.url" alt="">
        </mt-swipe-item>
    </mt-swipe>
    <!-- 六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/newsList">
                <img src="../../images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="">
                <img src="../../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="">
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="">
                <img src="../../images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="">
                <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="">
                <img src="../../images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div>
            </router-link>
        </li>
    </ul> 
    </div>
</template>
<script>
import {Toast} from 'mint-ui';
export default {
    data(){
        return {
            lunbotuList: []
        }
    },
    created(){
        this.getLunbotu();
    },
    methods: {
        getLunbotu(){
            this.$http.get('lunbo').then(result =>{
                if(result.body){
                    this.lunbotuList = result.body;
                }else{
                    this.lunbotuList = [
                        {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574015405958&di=f55cac44e4d214c492652b217fab0a8f&imgtype=0&src=http%3A%2F%2Faliyunzixunbucket.oss-cn-beijing.aliyuncs.com%2Fjpg%2F6d2ea2acbf896f86cd7322dd6e9a4f86.jpg%3Fx-oss-process%3Dimage%2Fresize%2Cp_100%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Cimage_eXVuY2VzaGk%3D%2Ct_100'},
                        {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574015425157&di=58fbece584f228e9f680e331fd2adb12&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D2459854756%2C3883213966%26fm%3D214%26gp%3D0.jpg'}
                    ]
                    Toast('加载轮播图失败');
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .mint-swipe {
        height: 200px;
        .mint-swipe-item {
            &:nth-of-type(1) {
                background-color: red;
            }
            &:nth-of-type(2) {
                background-color: pink;
            }
            &:nth-of-type(3) {
                background-color: lightblue;
            }
            img {
                width: 100%;
            }
        }
    }
    .mui-table-view.mui-grid-view.mui-grid-9 {
        background-color: #fff;
        border: none;
        li {
            border: none
        }
        img {
            width: 60px;
        }
        .mui-media-body {
            font-size: 13px;
        }
    }
</style>