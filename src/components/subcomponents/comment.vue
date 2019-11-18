<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea maxlength="120" placeholder="请输入要吐槽的内容"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title"></div>
                <div class="cmt-body"></div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="loadMore">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            // 默认展示第一页数据
            pageIndex: 1
        }
    },
    props: ['newsId'],
    methods: {
        getComments(){
            // 获取评论列表的接口
            this.$http.get('xxx'+this.newsId)
            //TODO 暂时未写接口，暂时无法处理，这里的处理方式和新闻列表一致

        },
        loadMore(){
            // 1.将pageIndex当前页自增1
            // 2.再次调用获取评论的接口获取评论数据，将其push进入到评论数组中
        }
    }
}
</script>
<style lang="scss" scoped>
    .cmt-container {
        h3 {
            font-size: 18px;
        }
        textarea {
            font-size: 14px;
            height: 85px;
            margin-bottom: 0px;
        }
        .cmt-list {
            margin: 5px 0;
            .cmt-item{
                font-size: 13px;
                .cmt-title{
                    background-color: #ccc;
                    line-height: 30px;
                }
                .cmt-body {
                    line-height: 35;
                    text-indent: 2em;
                }
            }
        }
    }
</style>