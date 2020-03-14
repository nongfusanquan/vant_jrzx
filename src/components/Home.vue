<template>

    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="home_container">
            <div class="home_top_container">
                <van-image fit="cover" height="140" :src="require('../assets/images/index_img_banner.png')"/>

                <div class="home_edu_layout">
                    <div class="home_edu_inner_layout">
                        <span class="edu">最高额度</span>
                        <span class="edu_money">20万</span>
                        <span class="jihuoedu">立刻激活额度</span>

                    </div>
                </div>
            </div>
            <div class="hot_loan">
                <h4 class="hot_line_title">热门贷款</h4>
                <div class="hot_loan_item" v-for="(item,index) in hotMarket" :index="index">
                    <div class="hot_loan_item_title">
                        <img height="20" width="20" :src="item.imgUrl" alt=""><span>{{item.name}}</span>
                    </div>
                    <div class="hot_loan_item_child">
                        <div class="hot_loan_item_child_one">
                            <p>{{item.loanAmountK}}</p>
                            <p>最高可借</p>
                        </div>
                        <div class="hot_loan_item_child_two">
                            <p>{{item.rateV}}</p>
                            <p>最低月利率</p>
                        </div>
                        <van-button class="hot_loan_item_child_three" round type="info" size="small" @click="clickBorrow">立即借款</van-button>
                    </div>
                </div>
            </div>
            <van-image class="last_img" fit="cover" height="140" :src="require('../assets/images/simple_borrow_apply_banner.png')"/>

        </div>
    </van-pull-refresh>

</template>

<script>

    export default {
        data() {
            return {
                isLoading: true,
                count: 0,
                hotMarket: []
            }
        },
        created() {
            this.getHomeData();
        },
        methods: {
            async getHomeData() {
                const {data: res} = await this.$http.get('https://app.doraemoney.com/home/initHomeAppV3New?deviceType=android&proId=99b7667f1943e4c8926ff9aba0baff34&version=3.1.3');
                console.log('home', res);
                if (res.status !== '1') {
                    this.$toast('获取数据失败');
                    return
                }
                this.hotMarket = res.data.marketLoan.hotMarket;

                setTimeout(() => {
                    this.isLoading = false;
                }, 500);

            },
            onRefresh() {
                this.getHomeData();
            },
            clickBorrow(){
                this.$toast('点击借款')
            }
        }
    }
</script>

<style scoped lang="less">
    p {
        margin: 0;
    }
.van-pull-refresh{
    margin-bottom: 60px;
}
    .home_top_container {
        height: 100%;
        position: relative;

        .van-image {
            z-index: -1;
        }

        .home_edu_layout {


            height: 170px;
            padding-left: 10px;
            padding-right: 10px;
            margin-top: -10px;
            /*     z-index: 99;
                 position: absolute;*/
            top: 130px;
            /*  box-sizing: border-box !important;*/

            .home_edu_inner_layout {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background-color: #fff;
                width: 100%;
                border-radius: 5px;
                height: 170px;

                .edu {
                    display: block;
                }

                .edu_money {
                    display: block;
                    font-size: 25px;
                    color: #009afe;
                    font-weight: bold;
                    margin-top: 10px;
                }

                .jihuoedu {
                    display: inline-block;
                    width: 120px;
                    height: 30px;
                    background-color: #009afe;
                    border-radius: 15px;
                    margin-top: 10px;
                    font-size: 14px;
                    line-height: 30px;
                    color: white;
                    text-align: center;
                }
            }


        }
    }

    .hot_loan {
        background-color: #fff;
        margin-top: 10px;
    }

    .hot_line_title {
        height: 50px;
        margin: 0;
        line-height: 50px;
        padding-left: 10px;
        border-bottom: 1px solid #f2f3f5;
        font-size: 16px;
    }

    .hot_loan_item {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        border-bottom: 1px solid #f2f3f5;

        .hot_loan_item_title {
            display: flex;
            align-items: center;
            height: 40px;
            padding-left: 10px;

            span {
                font-size: 15px;
                margin-left: 10px;
            }
        }
    }

    .hot_loan_item_child {
        display: flex;
        padding-right: 10px;
        margin-top: 5px;
        margin-bottom: 10px;

        .hot_loan_item_child_one {
            flex: 1;
            text-align: center;
            border-right: 1px solid #f2f3f5;

            p:nth-child(1) {
                font-size: 16px;
                color: #009afe;
            }

            p:nth-child(2) {
                font-size: 14px;
                color: #a4a4a4;
                margin-top: 10px;
            }
        }

        .hot_loan_item_child_two {
            flex: 1;
            text-align: center;

            p:nth-child(1) {
                font-size: 16px;
            }

            p:nth-child(2) {
                font-size: 14px;
                color: #a4a4a4;
                margin-top: 10px;
            }
        }

        .hot_loan_item_child_three {
            flex: 1;
        }
    }

    .last_img{
        margin-top: 10px;
    }
</style>
