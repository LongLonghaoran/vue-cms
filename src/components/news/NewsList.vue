<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/newsinfo/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
                <span>发表时间:{{item.add_time | dateFormat}}</span>
                <span>点击了:{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import {Toast} from "mint-ui";

export default {
    data(){
        return {
            newsList: []
        }
    },
    created(){
        this.getNewsList();
    },
    methods: {
        getNewsList(){
            this.$http.get('news').then(result => {
                if(result.body){
                    this.newsList = result.body;
                }else{
                    Toast('获取新闻列表失败！展现默认数据');
                    this.newsList = [
                        {
                            id: 1,
                            title: 'xxx',
                            add_time: '2019-11-18 22:09:20',
                            zhaiyao: '啦啦啦啦啦啦啦',
                            click:1,
                            img_url: 'https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg'
                        },
                        {
                            id: 3,
                            title: 'xxx',
                            add_time: '2019-11-18 22:09:20',
                            zhaiyao: '啦啦啦啦啦啦啦',
                            click:1,
                            img_url: 'https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg'
                        },
                        {
                            id: 2,
                            title: 'xxx',
                            add_time: '2019-11-18 22:09:20',
                            zhaiyao: '啦啦啦啦啦啦啦',
                            click:1,
                            img_url: 'https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg'
                        }
                    ]
                }
            })
        }
    }
};
</script>
<style lang="scss" scoped>
    .mui-table-view {
        li {
            h1 {
                font-size: 14px;
            }
            .mui-ellipsis {
                font-size: 12px;
                color: #226aff;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>