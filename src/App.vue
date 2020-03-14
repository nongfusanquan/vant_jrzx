<template>
  <div id="app">
    <router-view/>
    <van-tabbar v-model="active" route @change="onChange">
      <van-tabbar-item replace to='/home'>
        <span>首页</span>
        <img
                slot="icon"
                slot-scope="props"
                :src="props.active ? icon.active : icon.inactive"
        >
      </van-tabbar-item>
      <van-tabbar-item icon="search" replace to='/found'>
        <span>发现</span>
        <img
                slot="icon"
                slot-scope="props"
                :src="props.active? icon1.active : icon1.inactive"
        >
      </van-tabbar-item>
      <van-tabbar-item icon="setting-o" replace to='/mine'>
        <span>我的</span>
        <img
                slot="icon"
                slot-scope="props"
                :src="props.active ? icon2.active : icon2.inactive"
        >
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="less" scoped>
  #app{
    height: 100%;
  }
</style>
<script>
  import home_default from './assets/images/jiekuan_normal.png'
  import home_select from './assets/images/jiekuan.png'

  import found_default from './assets/images/found_normal.png'
  import found_select from './assets/images/found.png'

  import mine_default from './assets/images/mine_normal.png'
  import mine_select from './assets/images/mine.png'
  export default {
    data() {
      return {
        active: 0,
        icon: {
          active: home_select,
          inactive:home_default
        },

        icon1: {
          active: found_select,
          inactive: found_default
        },

        icon2: {
          active: mine_select,
          inactive: mine_default
        }
      }
    },
    methods: {
      onChange(index) {
        this.active=index;
      }
    }
  }
</script>
