<template>
    <div class="jrzx">
        <van-nav-bar
                title="金融资讯"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
                    :immediate-check="false"
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
            >
                <div class="item" v-for=" (item,index) in list" :key="item._id" @click="clickItem(item)">
                    <p>{{item.desc}}</p>
                    <p>{{item.type}}</p>
                    <p>{{item.who}}</p>
                </div>
            </van-list>

        </van-pull-refresh>
    </div>
</template>

<script>
    export default {
        created() {
            this.onLoad();
        },
        data() {
            return {
                pagesize: 20,
                pageno: 1,
                list: [],
                loading: false,
                finished: false,
                refreshing: false
            }
        },
        methods: {
            onClickLeft() {
                this.$router.push('/found')
            },
            async onLoad() {
                if (this.refreshing) {
                    this.list = [];

                }
                // http://gank.io/api/data/Android/10/1
                const {data: res} = await this.$http.get(`http://gank.io/api/data/Android/${this.pagesize}/${this.pageno}`);
                console.log('jinrong', res);
                this.list = this.list.concat(res.results);
                this.loading = false;
                this.pageno++;
                /*这里用箭头函数就可以正常终止
                * 我知道了，因为不用箭头函数，this不是指的vue对象
                * */
                setTimeout(() => {
                    this.refreshing = false;
                }, 500)

            },
            onRefresh() {
                // 清空列表数据
                this.pageno = 1;
                this.finished = false;
                this.refreshing = true;
                // 重新加载数据
                // 将 loading 设置为 true，表示处于加载状态
                this.loading = true;
                this.onLoad();

            },
            clickItem(item){
                window.location.href =item.url; //  跳转链接
            }
        }
    }
</script>

<style scoped lang="less">
    .item {
        background-color: #fff;
        border-bottom: 1px solid #f2f3f5;
        padding: 10px;


    }

    p {
        font-size: 16px;
        margin: 10px 0 10px 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    }

</style>
