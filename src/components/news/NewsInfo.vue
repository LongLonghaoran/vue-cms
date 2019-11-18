<template>
    <div class="newsinfo-container">
        <h3 class="title">{{newsInfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{newsInfo.add_time | dateFormat}}</span>
            <span>点击:{{ newsInfo.click }}次</span>
        </p>
        <hr>
        <!-- 内容区域 -->
        <div class="content">
            {{newsInfo.content}}
        </div>
        <!-- 评论区域 -->
        <comment-box></comment-box>
    </div>
</template>
<script>
// 导入评论子组件
import comment from '../subcomponents/comment.vue';
export default {
    data(){
        return {
            id: this.$route.params.id,
            newsInfo: {
                        title: '标题',
                        add_time: new Date(),
                        content:'内容内容内容内容内容内容内容',
                        click: 10
                    }
        }
    },
    created(){

    },
    methods: {
        getNewsInfo(){
            // 获取新闻详情
            this.$http.get('api/getnew/'+this.id).then(result => {
                if(result.body){
                    this.newsInfo = result.body.message;
                }else{
                    Toast('获取新闻失败');
                    this.newsInfo = {
                        title: '标题',
                        add_time: new Date(),
                        content:'内容内容内容内容内容内容内容',
                        click: 10
                    }
                }
            })
        }
    },
    components: {
        'comment-box': comment
    }
}
</script>
<style lang="scss" scoped>
    .newsinfo-container {
        padding: 0 4px;
        .title {
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: red;
        }
        .subtitle {
            color: #226aff;
            font-size: 13px;
            display: flex;
            justify-content: space-between;
        }
        .content {
            
        }
    }
</style>