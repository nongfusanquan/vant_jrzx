<template>
    <div class="bg">
        <div class="mine_top">
            <div class="mine_top_head">
                <img src="../assets/images/my_head_img01.png"/>
                <div class="mine_top_right">
                    <span>开启信用生活</span>
                    <p>登录</p>
                </div>
            </div>
        </div>
        <div class="mine_muti_item">
            <div class="mine_item">
                <img src="../assets/images/my_jindu_icon.png"/>
                <span>进度查询</span>
            </div>
            <div class="mine_item">
                <img src="../assets/images/my_jindu_icon.png"/>
                <span>我的红包</span>
            </div>
            <div class="mine_item">
                <img src="../assets/images/my_jindu_icon.png"/>
                <span>帮助中心</span>
            </div>
            <div class="mine_item">
                <img src="../assets/images/my_jindu_icon.png"/>
                <span>意见反馈</span>
            </div>

        </div>
        <div class="mine_logout">
            <van-button type="info" round @click="click">退出登录</van-button>
        </div>
    </div>
</template>

<script>
    export default {

        methods:{
            click(){
              this.$toast('点击退出');
            }
        }
    }
</script>

<style scoped lang="less">
    .bg {
      height: 100%;
    }
    .van-button{

    }
    .mine_top_head {
        display: flex;
        height: 200px;
        align-items: center;
        background: url("../assets/images/bj_top_my.png") no-repeat center;
        box-sizing: border-box;
        padding-left: 10px;
        padding-right: 10px;

        img {
            width: 80px;
            height: 80px;
        }
    }

    .mine_top_right {
        display: flex;
        flex-direction: column;
        height: 60px;
        color: #fff;
        justify-content: space-between;
        margin-left: 20px;

        p {
            font-size: 16px;
            margin: 0;
        }
    }

    .mine_muti_item {
        padding-left: 10px;
        padding-right: 10px;
        text-align: center;
        background-color: #fff;
        margin-top: 10px;


    }

    .mine_item {
        height: 50px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #f2f3f5;
        span {
            font-size: 14px;
            margin-left: 10px;
        }

        img {
            width: 30px;
            height: 30px;
        }
    }
    .mine_logout{
          text-align: center;
        margin-top: 10px;
    }
</style>
