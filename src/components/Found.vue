<template>
    <div class="bg">
        <van-loading type="spinner" v-show="isLoading"/>
        <van-swipe  :autoplay="3000" indicator-color="white"  @change="onChange">
            <van-swipe-item v-for="(item ,index) in banner" :key="index" @click="clickItem">
                <img :src="item.imgUrl" />
            </van-swipe-item>
        </van-swipe>
        <div class="three_layout">
            <div class="three_item" @click="()=>{  this.$router.push('/jinrongzixun');}">
                <img src="https://app.doraemoney.com/static/images/app/INline@3x.png"/>
                <p>金融资讯</p>

            </div>
            <div class="three_item">
                <img src="https://app.doraemoney.com/static/images/app/xinyongka@3x.png"/>
                <p>办信用卡</p>

            </div>
            <div class="three_item">
                <img src="https://app.doraemoney.com/static/images/app/INline@3x.png"/>
                <p>赚钱助手</p>
            </div>
        </div>
        <div class="hotNews">
             <h4 class="hotNews_title">
                 热门资讯
             </h4>
            <ul class="hotNews_ul">
                <li v-for="(item,index) in hotNews ">
                    <div class="left_item">
                        <p>{{item.name}} </p>
                        <span>{{item.publishTime}} </span>
                    </div>
                    <img :src='item.imgUrl'/>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    import {Toast} from 'vant';
    import { Lazyload } from 'vant';
    export default {
        data() {
            return {
                banner: [{}],
                img_index:0,
                hotNews:[],
                hotCredit:[],
                isLoading:true
            }
        },
        created() {
            this.getHomeData();
        },
        methods: {
            async getHomeData() {
                const {data: res} = await this.$http.get('https://app.doraemoney.com/home/initV3Rescover?deviceType=android&proId=99b7667f1943e4c8926ff9aba0baff34&version=3.1.3');
                console.log('found', res);
                if (res.status !== '1') {
                    Toast('获取数据失败');
                    return
                }
                this.banner = res.data.banner;
                this.hotNews=res.data.hotNews;
                this.hotCredit=res.data.hotCredit;
                this.isLoading=false;
            },
            onChange(index){
               this.img_index=index;
            },
            clickItem(event){
                Toast('当前下标：'+ this.img_index);
            }
        }
    }
</script>

<style scoped lang="less">
    .bg{
        background-color: #f2f3f5;
    }
    .van-loading{
         position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
   p{
       margin: 0;
   }
    .van-swipe-item {
        color: #fff;
        font-size: 20px;
        text-align: center;
        width: 100%;
        height: 120px;
        img{
            width: 100%;
            height: 120px;
        }
    }

    .three_layout{
        display: flex;
        height: 100px;
        align-items: center;
        background-color: #fff;
    }
   .three_item{
       flex:1;
       text-align: center;
       align-items: center;
       p{
           margin: 0;
           font-size: 14px;
       }
       img{
           width: 50px;
           height: 50px;
       }
   }
   .hotNews{
       background-color: #fff;
       margin-top: 10px;

   }
   .hotNews_ul{
       li{
           display: flex;
           width: 100%;
           justify-content: space-between;
           height: 140px;
           align-items: center;
           padding-left: 10px;
           padding-right: 10px;
           box-sizing: border-box;
           border-bottom: 1px solid #f2f3f5;
           .left_item{
               height: 100%;
               display: flex;
               flex-direction: column;
               justify-content: space-around;
               p{
                   font-size: 14px;
               }
               span{
                  font-size: 14px;
               }
           }
           img{
               width: 120px;
               height: 120px;
           }
       }
   }
    .hotNews_title{
        height: 50px;
        margin: 0;
        line-height: 50px;
        padding-left: 10px;
        border-bottom: 1px solid #f2f3f5;
        font-size: 14px;
    }
</style>
